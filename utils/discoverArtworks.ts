import { Artwork } from '../types';
import { getImageUrl } from './imageUrl';

// List of known image files (from public/images directory)
// This will be populated at build time or can be manually maintained
const KNOWN_IMAGES = [
  'abstract.jpg',
  'angelique-portrait.jpg',
  'bell_peppers.jpg',
  'blue_fish.jpg',
  'bubble-watcher.jpg',
  'building.jpg',
  'cat.jpg',
  'cherries.jpg',
  'dog.jpg',
  'emerald-lion.jpg',
  'flowers.jpg',
  'Gemini_Generated_Image_m5q7y7m5q7y7m5q7.png',
  'grapes.jpg',
  'joyous-pebbles.jpg',
  'listening-raven.jpg',
  'open-sky-portrait.jpg',
  'orange_peeling.jpg',
  'orchid-grove.jpg',
  'portrait_with dog.jpg',
  'portrait.jpg',
  'resting-tiger.jpg',
  'rose.jpg',
  'sketch_woman.jpg',
  'skull.jpg',
  'sunglasses.jpg',
  'terrarium.jpg',
  'three-tulips.jpg',
];

interface ImageMetadata {
  title?: string;
  category?: 'Wildlife' | 'Abstract' | 'Botanical' | 'Portrait';
  price?: number;
  description?: string;
  dimensions?: string;
  year?: string;
  available?: boolean;
}

/**
 * Loads metadata for an image from a JSON file if it exists
 * Metadata file should be named: image-name.json (e.g., new-painting.jpg -> new-painting.json)
 */
async function loadImageMetadata(imageName: string): Promise<ImageMetadata | null> {
  try {
    // Remove extension and construct metadata filename
    const baseName = imageName.replace(/\.[^/.]+$/, '');
    const metadataPath = `/images/${baseName}.json`;
    
    const response = await fetch(metadataPath);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    // Metadata file doesn't exist, that's okay
  }
  return null;
}

/**
 * Generates a title from filename
 * e.g., "joyous-pebbles.jpg" -> "Joyous Pebbles"
 */
function generateTitleFromFilename(filename: string): string {
  const baseName = filename.replace(/\.[^/.]+$/, '');
  return baseName
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Infers category from filename or image name
 */
function inferCategory(filename: string, title: string): 'Wildlife' | 'Abstract' | 'Botanical' | 'Portrait' {
  const lower = (filename + ' ' + title).toLowerCase();
  
  if (lower.includes('portrait') || lower.includes('portrait') || lower.includes('sketch')) {
    return 'Portrait';
  }
  if (lower.includes('flower') || lower.includes('tulip') || lower.includes('rose') || 
      lower.includes('orchid') || lower.includes('pepper') || lower.includes('cherry') ||
      lower.includes('grape') || lower.includes('terrarium') || lower.includes('botanical')) {
    return 'Botanical';
  }
  if (lower.includes('tiger') || lower.includes('lion') || lower.includes('raven') || 
      lower.includes('cat') || lower.includes('dog') || lower.includes('fish') ||
      lower.includes('wildlife') || lower.includes('animal')) {
    return 'Wildlife';
  }
  return 'Abstract';
}

/**
 * Discovers artworks from images in public/images directory
 * Merges with existing artworks, avoiding duplicates
 */
export async function discoverArtworks(existingArtworks: Artwork[]): Promise<Artwork[]> {
  const existingImageUrls = new Set(existingArtworks.map(art => art.imageUrl));
  const discovered: Artwork[] = [];
  let nextId = Math.max(...existingArtworks.map(art => parseInt(art.id) || 0), 0) + 1;

  for (const imageName of KNOWN_IMAGES) {
    const imageUrl = getImageUrl(`/images/${imageName}`);
    
    // Skip if already in existing artworks
    if (existingImageUrls.has(imageUrl)) {
      continue;
    }

    // Load metadata if available
    const metadata = await loadImageMetadata(imageName);
    
    // Generate title
    const title = metadata?.title || generateTitleFromFilename(imageName);
    
    // Create artwork entry
    const artwork: Artwork = {
      id: String(nextId++),
      title,
      category: metadata?.category || inferCategory(imageName, title),
      price: metadata?.price || 500, // Default price
      description: metadata?.description || `A beautiful artwork titled "${title}".`,
      imageUrl,
      dimensions: metadata?.dimensions || '12x16"',
      year: metadata?.year || new Date().getFullYear().toString(),
      available: metadata?.available ?? false, // Default to not available
    };

    discovered.push(artwork);
  }

  // Return existing + discovered, with discovered at the end
  return [...existingArtworks, ...discovered];
}

/**
 * Synchronous version that works at build time
 * Uses the same logic but doesn't fetch metadata files
 * Metadata files can be added manually to data.ts for full control
 */
export function discoverArtworksSync(existingArtworks: Artwork[]): Artwork[] {
  const existingImageUrls = new Set(existingArtworks.map(art => art.imageUrl));
  const discovered: Artwork[] = [];
  
  // Get the highest ID from existing artworks
  const maxId = existingArtworks.reduce((max, art) => {
    const idNum = parseInt(art.id) || 0;
    return idNum > max ? idNum : max;
  }, 0);
  
  let nextId = maxId + 1;

  for (const imageName of KNOWN_IMAGES) {
    const imageUrl = getImageUrl(`/images/${imageName}`);
    
    // Skip if already in existing artworks
    if (existingImageUrls.has(imageUrl)) {
      continue;
    }

    // Generate title from filename
    const title = generateTitleFromFilename(imageName);
    
    // Create artwork entry with defaults
    const artwork: Artwork = {
      id: String(nextId++),
      title,
      category: inferCategory(imageName, title),
      price: 500, // Default price
      description: `A beautiful artwork titled "${title}".`,
      imageUrl,
      dimensions: '12x16"',
      year: new Date().getFullYear().toString(),
      available: false, // Default to not available
    };

    discovered.push(artwork);
  }

  return [...existingArtworks, ...discovered];
}

