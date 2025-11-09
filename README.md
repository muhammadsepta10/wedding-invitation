# Wedding Invitation Website - Undangan Digital

A beautiful and modern wedding invitation website built with Next.js, TypeScript, and Tailwind CSS. This is a duplicate of the Blue Casanova theme from SatuMomen.

## Features

### Frontend
- ✨ Beautiful and responsive design
- 🎵 Background music player
- 📱 Mobile-first approach
- 🎨 Smooth animations with Framer Motion
- ⏰ Countdown timer to wedding date
- 🗺️ Interactive Google Maps integration
- 📝 RSVP form with attendance confirmation
- 💬 Guest messages/wishes
- 🎁 Gift registry with bank accounts and shipping address
- 🔗 Personalized guest URLs with query parameters

### Backend
- 🗄️ SQLite database with Prisma ORM
- 📊 Admin dashboard for managing RSVPs and messages
- 🔄 REST API endpoints
- 📈 Statistics and analytics

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB with Prisma
- **Icons**: React Icons
- **Countdown**: react-countdown

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd undangan-duplicate
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your MongoDB connection string:
```
DATABASE_URL="mongodb://localhost:27017/undangan"
# Or use MongoDB Atlas:
# DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/undangan?retryWrites=true&w=majority"
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

**See [MONGODB_SETUP.md](MONGODB_SETUP.md) for detailed MongoDB setup instructions.**

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding Music

1. Place your wedding music file in the `public/music/` directory
2. Name it `wedding-music.mp3` or update the path in `components/MusicPlayer.tsx`

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── messages/     # Messages API
│   │   └── rsvp/         # RSVP API
│   ├── admin/            # Admin dashboard
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── Opening.tsx       # Landing/cover page
│   ├── Quotes.tsx        # Quotes section
│   ├── Couple.tsx        # Bride & Groom info
│   ├── Events.tsx        # Akad & Reception details
│   ├── Maps.tsx          # Location map
│   ├── RSVP.tsx          # RSVP and messages form
│   ├── Gift.tsx          # Gift registry
│   ├── Thanks.tsx        # Thank you section
│   ├── Navigation.tsx    # Navigation menu
│   └── MusicPlayer.tsx   # Background music
├── lib/
│   └── prisma.ts         # Prisma client
├── prisma/
│   └── schema.prisma     # Database schema
└── public/
    └── music/            # Music files
```

## Customization

### Wedding Information

Edit the following files to customize with your wedding information:

1. **Bride & Groom Names**: Update in all component files
2. **Wedding Date**: Update in `components/Events.tsx`
3. **Location**: Update in `components/Events.tsx` and `components/Maps.tsx`
4. **Bank Accounts**: Update in `components/Gift.tsx`
5. **Shipping Address**: Update in `components/Gift.tsx`
6. **Colors**: Update in `tailwind.config.ts` and `app/globals.css`

### Guest Invitation Links

Create personalized invitation links for each guest:
```
http://localhost:3000/?to=John+Doe
```

The guest name will appear on the opening page.

## API Endpoints

### RSVP
- `GET /api/rsvp` - Get all RSVPs
- `POST /api/rsvp` - Create/update RSVP
  ```json
  {
    "name": "Guest Name",
    "phone": "08123456789",
    "email": "email@example.com",
    "attendance": "hadir", // hadir, tidak_hadir, belum_pasti
    "guestCount": "2"
  }
  ```

### Messages
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Create new message
  ```json
  {
    "name": "Guest Name",
    "message": "Congratulations!"
  }
  ```

## Admin Dashboard

Access the admin dashboard at `/admin` to view:
- Total RSVPs and guest count
- Attendance statistics
- Guest messages
- Detailed RSVP list

## Database Schema

### Guest
- `id`: Unique identifier
- `name`: Guest name
- `phone`: Phone number (optional)
- `email`: Email address (optional)

### RSVP
- `id`: Unique identifier
- `guestId`: Reference to Guest
- `attendance`: Attendance status (hadir/tidak_hadir/belum_pasti)
- `guestCount`: Number of guests attending

### Message
- `id`: Unique identifier
- `guestId`: Reference to Guest
- `name`: Sender name
- `message`: Message content

## Deployment

### Vercel (Recommended)

1. Setup MongoDB Atlas (see [MONGODB_SETUP.md](MONGODB_SETUP.md))
2. Push your code to GitHub
3. Import project to Vercel
4. Add environment variables:
   - `DATABASE_URL`: Your MongoDB Atlas connection string
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
5. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

**Note**: Always use MongoDB Atlas or hosted MongoDB for production.

## License

This project is created for educational purposes. Please respect the original design from [SatuMomen](https://satumomen.com).

## Credits

- Original Design: [SatuMomen Blue Casanova](https://satumomen.com/preview/blue-casanova)
- Built with: Next.js, TypeScript, Tailwind CSS
- Icons: React Icons
- Animations: Framer Motion

## Support

For issues and questions, please open an issue in the repository.

---

Made with ❤️ for your special day

