const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const FRONT_ASSET_DIR = path.join(__dirname, '../front-asset');
const MANUAL_STORAGE_DIR = path.join(__dirname, '../manual_storage');
const IMAGES_DIR = path.join(FRONT_ASSET_DIR, 'images');

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');

  // Create images directory if it doesn't exist
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  // Find all image files in front-asset and manual_storage directories
  const imageExtensions = ['jpg', 'jpeg', 'png', 'webp'];
  const imageFiles = [];
  
  function findImages(dir) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory does not exist: ${dir}`);
      return;
    }
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findImages(filePath);
      } else {
        const ext = path.extname(file).toLowerCase().slice(1);
        if (imageExtensions.includes(ext)) {
          imageFiles.push(filePath);
        }
      }
    }
  }

  findImages(FRONT_ASSET_DIR);
  findImages(MANUAL_STORAGE_DIR);
  console.log(`Found ${imageFiles.length} images to optimize`);

  // Optimize each image
  for (const imagePath of imageFiles) {
    try {
      const fileName = path.basename(imagePath);
      const fileNameWithoutExt = path.parse(fileName).name;
      const ext = path.extname(fileName).toLowerCase();
      
      // Skip if already WebP
      if (ext === '.webp') {
        console.log(`⏭️  Skipping WebP: ${fileName}`);
        continue;
      }
      
      // Create optimized version in the same location
      const outputPath = imagePath;
      
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(imagePath)
          .jpeg({ quality: 80, progressive: true })
          .toFile(outputPath + '.optimized');
        
        // Replace original with optimized version
        fs.renameSync(outputPath + '.optimized', outputPath);
      } else if (ext === '.png') {
        await sharp(imagePath)
          .png({ quality: 80, progressive: true })
          .toFile(outputPath + '.optimized');
        
        // Replace original with optimized version
        fs.renameSync(outputPath + '.optimized', outputPath);
      }
      
      console.log(`✅ Optimized: ${fileName}`);
      
      // Create WebP version in the same directory
      const webpPath = path.join(path.dirname(imagePath), `${fileNameWithoutExt}.webp`);
      await sharp(imagePath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      console.log(`✅ WebP created: ${fileNameWithoutExt}.webp`);
      
    } catch (error) {
      console.log(`⚠️  Could not process ${imagePath}:`, error.message);
    }
  }

  console.log('🎉 Image optimization complete!');
}

// Run the optimization
optimizeImages().catch(console.error); 