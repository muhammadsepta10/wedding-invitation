# Setup Guide

Follow these steps to get your wedding invitation website up and running.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Setup MongoDB

### Option A: MongoDB Atlas (Recommended - Free)

1. Create account at: https://www.mongodb.com/cloud/atlas/register
2. Create a FREE cluster (M0)
3. Setup database user (username & password)
4. Whitelist IP: 0.0.0.0/0 (for development)
5. Get connection string from "Connect" button
6. Connection string format:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/undangan?retryWrites=true&w=majority
   ```

### Option B: Local MongoDB

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

**Windows:** Download from https://www.mongodb.com/try/download/community

**Linux:**
```bash
sudo apt-get install mongodb-org
sudo systemctl start mongod
```

**See [MONGODB_SETUP.md](MONGODB_SETUP.md) for detailed instructions.**

## Step 3: Set Up Environment Variables

```bash
cp .env.local.example .env
```

Edit `.env` and add your MongoDB connection string:

```bash
# For MongoDB Atlas:
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/undangan?retryWrites=true&w=majority"

# For Local MongoDB:
DATABASE_URL="mongodb://localhost:27017/undangan"
```

## Step 4: Initialize Database

Generate Prisma client and create database:

```bash
npx prisma generate
npx prisma db push
```

## Step 5: Add Wedding Music (Optional)

1. Get your wedding song in MP3 format
2. Rename it to `wedding-music.mp3`
3. Place it in the `public/music/` directory

If you skip this step, the music player will show but won't play anything.

## Step 6: Customize Your Wedding Information

### Update Bride & Groom Information

Edit these files with your information:

1. **components/Opening.tsx**
   - Update names and wedding date

2. **components/Couple.tsx**
   - Update full names
   - Update parent names
   - Update Instagram handles

3. **components/Events.tsx**
   - Update Akad date and location
   - Update Reception date and location
   - Update wedding date in countdown

4. **components/Maps.tsx**
   - Update location name and address
   - Update Google Maps embed URL

5. **components/Gift.tsx**
   - Update bank account numbers
   - Update account holder names
   - Update shipping address

6. **components/Quotes.tsx**
   - Optionally change the Quranic verse

### Update Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "#1e3a8a",    // Main blue color
  secondary: "#3b82f6",  // Light blue
  accent: "#f59e0b",     // Gold/amber accent
}
```

### Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Wedding Invitation - Your Names",
  description: "We are getting married! Join us...",
};
```

## Step 7: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 8: Test Personalized Invitations

Test with guest names:

```
http://localhost:3000/?to=John+Doe
http://localhost:3000/?to=Jane+Smith
```

## Step 9: Test RSVP and Messages

1. Click "Open Invitation"
2. Scroll to RSVP section
3. Submit a test RSVP
4. Submit a test message
5. Check admin dashboard at [http://localhost:3000/admin](http://localhost:3000/admin)

## Step 10: Build for Production

```bash
npm run build
npm start
```

## Common Issues

### MongoDB Connection Errors

If you get connection errors:

```bash
# Check connection string in .env
# For Atlas: verify IP whitelist
# For Local: ensure MongoDB is running

# Test connection
npx prisma db pull
```

### Prisma errors

If you get Prisma errors, try:

```bash
npx prisma generate
npx prisma db push --force-reset
```

### Music not playing

- Check that your file is named `wedding-music.mp3`
- Check that it's in `public/music/` directory
- Some browsers block autoplay - click the play button

### Images not showing

- Update image paths in components if you add custom images
- Place images in `public/` directory

## Creating Guest Lists

You can create a spreadsheet with guest names and generate invitation links:

```
Guest Name         | Invitation Link
-------------------|------------------------------------------
John Doe          | yoursite.com/?to=John+Doe
Jane Smith        | yoursite.com/?to=Jane+Smith
Mr. & Mrs. Brown  | yoursite.com/?to=Mr.+%26+Mrs.+Brown
```

Use a URL encoder for special characters.

## Deployment

### Vercel (Easiest)

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

```
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/undangan?retryWrites=true&w=majority"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

**Note**: For production, use MongoDB Atlas (free M0 tier available).

Setup steps:
1. Create MongoDB Atlas cluster
2. Get connection string
3. Add to Vercel environment variables
4. Deploy

```bash
npx prisma generate
npx prisma db push
```

## Need Help?

Check the main README.md for more detailed information about the project structure and features.

