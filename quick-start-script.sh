#!/bin/bash

# Quick Start Script for Australian Credit Solutions Website Optimization
# This script will help you implement the performance optimizations

echo "🚀 Starting Australian Credit Solutions Website Optimization"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Create React project
echo "📦 Creating React project..."
npx create-react-app australian-credit-solutions --template typescript --yes

cd australian-credit-solutions

echo "📦 Installing dependencies..."
npm install react-router-dom @types/react-router-dom
npm install react-lazy-load-image-component
npm install web-vitals
npm install @types/webpack-env
npm install --save-dev @types/node
npm install --save-dev webpack-bundle-analyzer
npm install --save-dev compression-webpack-plugin
npm install --save-dev terser-webpack-plugin

# Create project structure
echo "📁 Creating project structure..."
mkdir -p src/components/{Header,Banner,Form,Services,Testimonials,Footer,common}
mkdir -p src/pages/{Home,Services,Contact}
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/assets/{images,icons,styles}
mkdir -p src/types

# Create vercel.json
echo "⚙️ Creating Vercel configuration..."
cat > vercel.json << 'EOF'
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/front-asset/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*\\.(js|css|png|jpg|jpeg|gif|ico|svg|webp))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
EOF

# Create environment variables
echo "🔧 Creating environment variables..."
cat > .env.production << 'EOF'
REACT_APP_GA_ID=G-2XS9PQ9GNP
REACT_APP_FB_PIXEL_ID=1442453326105956
REACT_APP_GTM_ID=GTM-KX4B47V9
REACT_APP_API_URL=https://api.australiancreditsolutions.com.au
EOF

# Update package.json scripts
echo "📝 Updating package.json scripts..."
npm pkg set scripts.analyze="npm run build && npx webpack-bundle-analyzer build/static/js/*.js"
npm pkg set scripts.lighthouse="lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html"
npm pkg set scripts.deploy="npm run build && vercel --prod"

# Install image optimization tools
echo "🖼️ Installing image optimization tools..."
npm install -g imagemin imagemin-webp

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Copy your images to src/assets/images/"
echo "2. Convert images to WebP format"
echo "3. Implement the React components from the migration guide"
echo "4. Run 'npm start' to test locally"
echo "5. Run 'npm run build' to build for production"
echo "6. Run 'npm run deploy' to deploy to Vercel"
echo ""
echo "📚 Documentation:"
echo "- Check optimization-plan.md for detailed optimization steps"
echo "- Check react-migration-guide.md for React implementation"
echo "- Check optimized-index.html for immediate HTML optimizations"
echo ""
echo "🎯 Expected results:"
echo "- PageSpeed Score: 90+ (from current 31)"
echo "- First Contentful Paint: < 1.5s"
echo "- Largest Contentful Paint: < 2.5s"
echo "- Bundle size reduced by 60-70%"
echo ""
echo "�� Happy optimizing!" 