#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Australian Credit Solutions React Website...\n');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found. Please run this script from the project root directory.');
  process.exit(1);
}

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  const envContent = `# Analytics Configuration
REACT_APP_GA_TRACKING_ID=G-2XS9PQ9GNP
REACT_APP_FACEBOOK_PIXEL_ID=1442453326105956
REACT_APP_TIKTOK_PIXEL_ID=C5B8GKS6J7TSRVQBU08G

# API Configuration (if needed)
REACT_APP_API_URL=https://api.australiancreditsolutions.com.au

# Environment
NODE_ENV=development
`;
  
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file with default configuration');
}

// Create public directory structure
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create favicons directory
const faviconsDir = path.join(publicDir, 'favicons');
if (!fs.existsSync(faviconsDir)) {
  fs.mkdirSync(faviconsDir, { recursive: true });
  console.log('✅ Created favicons directory');
}

// Copy assets from original structure
const originalAssets = [
  'front-asset/images/logo.png',
  'front-asset/images/icon-1.jpg',
  'front-asset/images/icon-2.jpg',
  'front-asset/images/icon-3.jpg',
  'front-asset/images/icon-4.jpg',
  'front-asset/images/icon-5.jpg',
  'front-asset/images/icon-6.jpg',
  'manual_storage/banner/1730185048_pLu3l0aVEcdkBN85BBpaWm0QxdshiMP1OzJpvGTZ.webp'
];

console.log('📁 Copying assets...');
originalAssets.forEach(asset => {
  const sourcePath = path.join(__dirname, asset);
  const destPath = path.join(publicDir, asset);
  
  if (fs.existsSync(sourcePath)) {
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(sourcePath, destPath);
    console.log(`  ✅ Copied ${asset}`);
  } else {
    console.log(`  ⚠️  Asset not found: ${asset}`);
  }
});

console.log('\n🎉 Setup complete!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm start');
console.log('3. Open http://localhost:3000 in your browser');
console.log('\nFor production build:');
console.log('1. Run: npm run build');
console.log('2. Deploy the build/ directory to your hosting provider'); 