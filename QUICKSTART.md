# Quick Start Guide

Get your wedding invitation website running in 5 minutes!

## Prerequisites

- Node.js 18 or higher ([Download](https://nodejs.org))
- A code editor (VS Code recommended)

## Installation

### Option 1: Automated Setup (Recommended)

**macOS/Linux:**
```bash
cd /Users/redbox/Documents/project/self-project/undangan-duplicate
./scripts/setup.sh
```

**Windows:**
```powershell
cd C:\path\to\undangan-duplicate
.\scripts\setup.ps1
```

### Option 2: Manual Setup

```bash
# 1. Install dependencies
npm install

# 2. Setup MongoDB connection in .env
# Edit .env and add your MongoDB connection string:
# DATABASE_URL="mongodb://localhost:27017/undangan"
# Or MongoDB Atlas connection string

# 3. Setup database
npx prisma generate
npx prisma db push

# 4. Run development server
npm run dev
```

**MongoDB Setup**: See [MONGODB_SETUP.md](MONGODB_SETUP.md) for complete MongoDB setup guide.

## Access the Website

Open your browser and visit:
- **Main Site**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **With Guest Name**: http://localhost:3000/?to=John+Doe

## Quick Customization

### 1. Update Names (5 min)

Edit `components/Opening.tsx`:
```typescript
// Change from:
Chay & Rafif

// To:
YourName & PartnerName
```

### 2. Update Wedding Date (2 min)

Edit `components/Events.tsx`:
```typescript
const weddingDate = new Date('2024-12-07T18:00:00');
// Change to your date
```

### 3. Update Bank Accounts (3 min)

Edit `components/Gift.tsx`:
```typescript
const bankAccounts = [
  {
    bank: 'BCA',
    accountNumber: '12345678',
    accountName: 'Your Name',
  },
];
```

### 4. Add Music (2 min)

1. Get your wedding song (MP3 format)
2. Rename it to `wedding-music.mp3`
3. Place it in `public/music/` folder

## Test Everything

### Test RSVP:
1. Open http://localhost:3000
2. Click "Open Invitation"
3. Scroll to RSVP section
4. Fill and submit form
5. Check admin at http://localhost:3000/admin

### Test Messages:
1. Scroll to RSVP section
2. Fill message form
3. Click "Kirim Ucapan"
4. Message appears instantly
5. Check admin dashboard

## Deploy to Production

### Vercel (Free, Easiest)

1. Setup MongoDB Atlas (see [MONGODB_SETUP.md](MONGODB_SETUP.md))

2. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

3. Go to [vercel.com](https://vercel.com)
4. Click "Import Project"
5. Select your GitHub repository
6. Add environment variables:
   - `DATABASE_URL`: Your MongoDB Atlas connection string
   - `NEXT_PUBLIC_SITE_URL`: Your production domain
7. Click "Deploy"

**Note**: MongoDB Atlas free tier (M0) sudah cukup untuk wedding invitation!

## Need Help?

- Check `README.md` for complete documentation
- Check `SETUP.md` for detailed customization
- Check `FEATURES.md` for feature list

## File Structure Quick Reference

```
undangan-duplicate/
├── app/
│   ├── page.tsx              # Main page
│   ├── admin/page.tsx        # Admin dashboard
│   └── api/                  # Backend APIs
├── components/               # UI components
│   ├── Opening.tsx          # ✏️ Edit names here
│   ├── Events.tsx           # ✏️ Edit dates here
│   ├── Couple.tsx           # ✏️ Edit bride/groom info
│   ├── Gift.tsx             # ✏️ Edit bank accounts
│   └── ...
├── prisma/
│   └── schema.prisma        # Database structure
└── public/
    └── music/               # 🎵 Add wedding-music.mp3
```

## Common Issues

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
# Or use different port
npm run dev -- -p 3001
```

### Prisma errors
```bash
npx prisma generate
npx prisma db push --force-reset
```

### Music not playing
- Check file name is exactly `wedding-music.mp3`
- Check it's in `public/music/` folder
- Click the music button (browsers block autoplay)

### MongoDB connection failed
- Check your connection string in `.env`
- For MongoDB Atlas: verify IP whitelist in Network Access
- For local MongoDB: ensure MongoDB service is running
- See [MONGODB_SETUP.md](MONGODB_SETUP.md) for troubleshooting

## Next Steps

1. ✅ Install and run locally
2. ✏️ Customize wedding information
3. 🎵 Add your music
4. 🎨 Adjust colors in `tailwind.config.ts`
5. 🧪 Test all features
6. 🚀 Deploy to Vercel
7. 📧 Send invitations with personalized links

## Example Personalized Links

```
https://yoursite.com/?to=John+Doe
https://yoursite.com/?to=Jane+Smith
https://yoursite.com/?to=Mr.+%26+Mrs.+Johnson
https://yoursite.com/?to=The+Anderson+Family
```

## Support & Resources

- **Documentation**: Check README.md, SETUP.md, FEATURES.md
- **Next.js Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

Happy wedding planning! 🎊💒👰🤵💍

