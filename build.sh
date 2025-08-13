#!/bin/bash

# F24Tech Frontend Build Script
echo "🚀 Building F24Tech Frontend..."

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

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build files are located in: frontend/out/"
    echo ""
    echo "🌐 To deploy to Hostinger:"
    echo "1. Upload the contents of 'frontend/out/' to your domain's 'frontend' folder"
    echo "2. Upload the 'public_html' folder contents to your domain's root"
    echo "3. Make sure your domain points to the public_html folder"
    echo ""
    echo "📋 File structure on server should be:"
    echo "├── public_html/ (PHP backend)"
    echo "│   ├── api/"
    echo "│   ├── config/"
    echo "│   ├── includes/"
    echo "│   ├── pages/"
    echo "│   └── index.php"
    echo "└── frontend/ (Next.js build)"
    echo "    ├── _next/"
    echo "    ├── admin/"
    echo "    ├── portfolio/"
    echo "    └── index.html"
else
    echo "❌ Build failed!"
    exit 1
fi