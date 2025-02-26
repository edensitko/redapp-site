const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const LOGO_PATH = path.join(process.cwd(), 'public', 'logo.png');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function generateAssets() {
  // Ensure source logo exists
  if (!fs.existsSync(LOGO_PATH)) {
    console.error('Source logo.png not found in public directory');
    process.exit(1);
  }

  // Generate favicons
  await sharp(LOGO_PATH)
    .resize(16, 16)
    .toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'));

  await sharp(LOGO_PATH)
    .resize(32, 32)
    .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));

  await sharp(LOGO_PATH)
    .resize(180, 180)
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));

  // Generate social media images
  await sharp(LOGO_PATH)
    .resize(1200, 630, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toFile(path.join(PUBLIC_DIR, 'og-image.jpg'));

  await sharp(LOGO_PATH)
    .resize(600, 600, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toFile(path.join(PUBLIC_DIR, 'og-image-square.jpg'));

  await sharp(LOGO_PATH)
    .resize(1200, 600, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toFile(path.join(PUBLIC_DIR, 'twitter-image.jpg'));

  console.log('✅ All assets generated successfully!');
}

generateAssets().catch(console.error);
