# PowerShell setup script for Windows

Write-Host "🎉 Setting up Wedding Invitation Website..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Setup environment
if (!(Test-Path .env)) {
    Write-Host "📝 Creating .env file..." -ForegroundColor Cyan
    @"
# MongoDB Connection String
# Local: mongodb://localhost:27017/undangan
# Atlas: mongodb+srv://username:password@cluster.mongodb.net/undangan?retryWrites=true&w=majority
DATABASE_URL="mongodb://localhost:27017/undangan"

NEXT_PUBLIC_SITE_URL="http://localhost:3000"
"@ | Out-File -FilePath .env -Encoding UTF8
    Write-Host "✅ .env file created" -ForegroundColor Green
    Write-Host "⚠️  Please update DATABASE_URL in .env with your MongoDB connection string" -ForegroundColor Yellow
} else {
    Write-Host "ℹ️  .env file already exists" -ForegroundColor Yellow
}

Write-Host ""

# Generate Prisma client
Write-Host "🗄️  Setting up database..." -ForegroundColor Cyan
npx prisma generate

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to generate Prisma client" -ForegroundColor Red
    exit 1
}

# Push database schema
npx prisma db push

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to push database schema" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Database setup complete" -ForegroundColor Green
Write-Host ""

# Create music directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public/music" | Out-Null

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Add your wedding music file to public/music/wedding-music.mp3"
Write-Host "   2. Customize wedding information in the components"
Write-Host "   3. Run 'npm run dev' to start the development server"
Write-Host "   4. Visit http://localhost:3000"
Write-Host ""
Write-Host "📚 Check SETUP.md for detailed customization guide" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎊 Happy wedding planning!" -ForegroundColor Magenta

