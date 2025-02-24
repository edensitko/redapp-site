const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const imagePatterns = [
    'public/**/*.{jpg,jpeg,png}',
    'src/**/*.{jpg,jpeg,png}',
  ];

  for (const pattern of imagePatterns) {
    const files = glob.sync(pattern);
    
    for (const file of files) {
      const image = sharp(file);
      const info = await image.metadata();
      
      // Skip if already optimized
      if (path.basename(file).startsWith('opt-')) continue;
      
      const dir = path.dirname(file);
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      
      // Resize if too large
      if (info.width > 1920) {
        await image
          .resize(1920, null, { withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true })
          .toFile(path.join(dir, `opt-${name}.jpg`));
      }
      
      // Create WebP version
      await image
        .webp({ quality: 80 })
        .toFile(path.join(dir, `${name}.webp`));
        
      // Create AVIF version
      await image
        .avif({ quality: 80 })
        .toFile(path.join(dir, `${name}.avif`));
    }
  }
}

optimizeImages().catch(console.error);
