# Adding Images to the Gallery

Adding new artwork to the gallery is now super easy! Just follow these simple steps:

## Quick Start (3 Steps)

1. **Add your image** to the `public/images/` directory
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
   - Example: `my-new-painting.jpg`

2. **Update the image list**
   ```bash
   npm run update-images
   ```

3. **That's it!** Your image will automatically appear in the gallery with smart defaults

The system will automatically:
- Generate a title from the filename (e.g., `sunset-landscape.jpg` → "Sunset Landscape")
- Detect the category based on filename keywords
- Set reasonable defaults for price, dimensions, etc.

## Customizing Artwork Details

If you want to customize the title, price, description, or other details, you have two options:

### Option 1: Edit `data.ts` (Recommended for Full Control)

After running `npm run update-images`, your new image will appear in the gallery. To customize it:

1. Open `data.ts` (in the root directory)
2. Find your artwork in the `baseArtworks` array (or it may be in the auto-discovered section)
3. Edit the fields you want to change:
   ```typescript
   {
     id: '26',
     title: 'My Custom Title',  // Change this
     category: 'Portrait',       // Change this
     price: 1200,               // Change this
     description: 'Your custom description here...',
     dimensions: '18x24"',
     year: '2024',
     available: true
   }
   ```

### Option 2: Use Metadata Files (Future Enhancement)

Metadata JSON files are supported but require manual integration. For now, editing `data.ts` directly is the simplest approach.

## Examples

### Minimal Setup
Just add `sunset-landscape.jpg` to `public/images/` and run `npm run update-images`. The system will:
- Generate title: "Sunset Landscape"
- Auto-detect category: "Abstract" (default)
- Set price: $500 (default)
- Set dimensions: "12x16\"" (default)
- Set available: false (default)

### With Custom Details
1. Add `portrait-of-jane.jpg` to `public/images/`
2. Run `npm run update-images`
3. Open `data.ts` and find the new entry
4. Customize it:
   ```typescript
   {
     id: '26',
     title: 'Portrait of Jane',
     category: 'Portrait',
     price: 1200,
     description: 'A striking portrait capturing Jane\'s contemplative expression...',
     dimensions: '18x24"',
     year: '2024',
     available: true
   }
   ```

## Category Auto-Detection

If you don't specify a category, the system tries to guess from the filename:

- **Portrait**: Contains "portrait", "sketch"
- **Botanical**: Contains "flower", "tulip", "rose", "orchid", "pepper", "cherry", "grape", "terrarium"
- **Wildlife**: Contains "tiger", "lion", "raven", "cat", "dog", "fish", "wildlife", "animal"
- **Abstract**: Everything else

## Updating the Image List

After adding new images, run:

```bash
npm run update-images
```

This updates the internal image list. The script automatically:
- Scans `public/images/` for image files
- Updates the `KNOWN_IMAGES` list in `utils/discoverArtworks.ts`
- Preserves all existing images

## Tips

- **Filenames matter**: Use descriptive filenames (e.g., `portrait-of-mary.jpg` instead of `IMG_1234.jpg`)
- **Metadata is optional**: Images will appear even without metadata files, just with auto-generated defaults
- **No duplicates**: If an image is already in the gallery, it won't be added twice
- **Order**: New images appear at the end of the gallery list

## Troubleshooting

**Image doesn't appear?**
- Make sure you ran `npm run update-images` after adding the image
- Check that the file extension is supported (`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`)
- Verify the image is in `public/images/` (not a subdirectory)

**Wrong category?**
- Edit the artwork in `data.ts` and change the `category` field
- Or rename the image to include category keywords (e.g., `portrait-jane.jpg` will be detected as Portrait)

**Want to customize details?**
- Just edit the artwork entry in `data.ts` - it's that simple!

