#!/bin/bash

echo "🎉 Setting up Wedding Invitation Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Setup environment
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    echo '# MongoDB Connection String' > .env
    echo '# Local: mongodb://localhost:27017/undangan' >> .env
    echo '# Atlas: mongodb+srv://username:password@cluster.mongodb.net/undangan?retryWrites=true&w=majority' >> .env
    echo 'DATABASE_URL="mongodb://localhost:27017/undangan"' >> .env
    echo '' >> .env
    echo 'NEXT_PUBLIC_SITE_URL="http://localhost:3000"' >> .env
    echo "✅ .env file created"
    echo "⚠️  Please update DATABASE_URL in .env with your MongoDB connection string"
else
    echo "ℹ️  .env file already exists"
fi

echo ""

# Generate Prisma client
echo "🗄️  Setting up database..."
npx prisma generate

if [ $? -ne 0 ]; then
    echo "❌ Failed to generate Prisma client"
    exit 1
fi

# Push database schema
npx prisma db push

if [ $? -ne 0 ]; then
    echo "❌ Failed to push database schema"
    exit 1
fi

echo "✅ Database setup complete"
echo ""

# Create music directory if it doesn't exist
mkdir -p public/music

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Add your wedding music file to public/music/wedding-music.mp3"
echo "   2. Customize wedding information in the components"
echo "   3. Run 'npm run dev' to start the development server"
echo "   4. Visit http://localhost:3000"
echo ""
echo "📚 Check SETUP.md for detailed customization guide"
echo ""
echo "🎊 Happy wedding planning!"

