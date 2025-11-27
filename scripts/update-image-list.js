/**
 * Script to update the KNOWN_IMAGES list in discoverArtworks.ts
 * Run this after adding new images to public/images/
 * 
 * Usage: npm run update-images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
const targetFile = path.join(__dirname, '../utils/discoverArtworks.ts');

try {
  // Read all files from images directory
  const files = fs.readdirSync(imagesDir);
  
  // Filter to only image files
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  }).sort();

  // Read the target file
  let content = fs.readFileSync(targetFile, 'utf8');
  
  // Find and replace the KNOWN_IMAGES array
  const arrayStart = content.indexOf('const KNOWN_IMAGES = [');
  const arrayEnd = content.indexOf('];', arrayStart);
  
  if (arrayStart === -1 || arrayEnd === -1) {
    console.error('Could not find KNOWN_IMAGES array in discoverArtworks.ts');
    process.exit(1);
  }
  
  // Generate new array content
  const newArray = imageFiles.map(file => `  '${file}'`).join(',\n');
  const newContent = 
    content.substring(0, arrayStart) +
    'const KNOWN_IMAGES = [\n' +
    newArray +
    '\n];' +
    content.substring(arrayEnd + 2);
  
  // Write back
  fs.writeFileSync(targetFile, newContent, 'utf8');
  
  console.log(`✅ Updated KNOWN_IMAGES with ${imageFiles.length} images:`);
  imageFiles.forEach(file => console.log(`   - ${file}`));
} catch (error) {
  console.error('Error updating image list:', error);
  process.exit(1);
}

