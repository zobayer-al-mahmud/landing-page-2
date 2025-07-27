#!/bin/bash

echo "🚀 Starting image optimization..."

# Install image optimization tools if not already installed
npm install -g imagemin imagemin-webp

# Create optimized directory
mkdir -p front-asset/images/optimized

# Convert all images to WebP
echo "Converting images to WebP format..."

# Convert main images
imagemin front-asset/images/*.{jpg,png} --plugin=webp --out-dir=front-asset/images/optimized

# Convert banner images
imagemin manual_storage/banner/*.{jpg,png} --plugin=webp --out-dir=manual_storage/banner

# Convert client images
imagemin front-asset/uploads/clients/*.{jpg,png} --plugin=webp --out-dir=front-asset/uploads/clients

# Convert blog images
imagemin manual_storage/blog/*.{jpg,png} --plugin=webp --out-dir=manual_storage/blog

echo "✅ Image optimization complete!"
echo "📁 Optimized images saved to:"
echo "   - front-asset/images/optimized/"
echo "   - manual_storage/banner/"
echo "   - front-asset/uploads/clients/"
echo "   - manual_storage/blog/"

# List optimized files
echo "📋 Optimized files:"
find . -name "*.webp" -type f | head -20

echo "🎯 Next steps:"
echo "1. Update image references in your code to use .webp extension"
echo "2. Test the website to ensure all images load correctly"
echo "3. Run 'npm run build' to build the optimized version"
echo "4. Deploy to Vercel with 'npm run deploy'" 