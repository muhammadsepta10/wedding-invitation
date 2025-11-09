# Features Documentation

## Overview

This wedding invitation website is a complete full-stack application with frontend and backend capabilities.

## Frontend Features

### 1. Opening/Cover Page
- Beautiful landing page with bride and groom initials
- Personalized guest name from URL parameter (`?to=Guest+Name`)
- Animated entrance with Framer Motion
- "Open Invitation" button to reveal main content

### 2. Quotes Section
- Islamic verse from Quran (Al-Baqoroh:223)
- Elegant typography with script fonts
- Fade-in animations

### 3. Bride & Groom (Mempelai)
- Full names with titles
- Parent information
- Instagram profile links
- Beautiful circular avatars with initials
- Responsive card layout

### 4. Event Details

#### Akad Nikah
- Date and time display
- Venue information
- Calendar-style date presentation
- Location details

#### Reception (Resepsi)
- Reception date and time
- Venue details
- Live countdown timer to wedding day
- Shows days, hours, minutes, and seconds
- Auto-updates in real-time

### 5. Location Maps
- Embedded Google Maps
- Venue name and full address
- "Get Directions" button
- Opens Google Maps in new tab

### 6. RSVP & Messages

#### RSVP Form
- Guest name input
- Phone number (optional)
- Email address (optional)
- Attendance confirmation dropdown:
  - Hadir (Attending)
  - Tidak Hadir (Not Attending)
  - Belum Pasti (Uncertain)
- Guest count selector
- Form validation
- Success message on submission

#### Guest Messages
- Name input
- Message textarea
- Real-time display of all messages
- Shows sender name, message, and date
- Auto-updates when new message submitted

### 7. Gift Registry (Tanda Kasih)
- Multiple bank account displays
- Bank name, account number, account holder
- One-click copy for account numbers
- Shipping address for physical gifts
- Copy address to clipboard
- Visual feedback on copy action

### 8. Thank You Section
- Closing message from the couple
- Family acknowledgments
- Both families' names
- Footer with copyright

### 9. Navigation
- Fixed navigation bar
- Icon-based menu items:
  - Opening
  - Mempelai (Couple)
  - Akad (Ceremony)
  - Resepsi (Reception)
  - Maps
  - RSVP
  - Gift
- Active section highlighting
- Smooth scroll to sections
- Responsive mobile-friendly design

### 10. Music Player
- Floating play/pause button
- Background music playback
- Looping audio
- Visual play state indication
- Pulse animation when playing
- Positioned at bottom-right corner

### 11. Animations & Effects
- Framer Motion animations
- Fade-in effects on scroll
- Scale and rotation animations
- Smooth transitions
- Hover effects on buttons and cards
- Intersection Observer for scroll triggers

### 12. Responsive Design
- Mobile-first approach
- Tablet-optimized layouts
- Desktop enhancements
- Flexible grid systems
- Touch-friendly interface

## Backend Features

### 1. Database Schema

#### Guest Model
- Unique ID
- Name
- Phone (optional)
- Email (optional)
- Created/Updated timestamps
- Relations to RSVPs and Messages

#### RSVP Model
- Unique ID
- Guest reference
- Attendance status
- Guest count
- Created/Updated timestamps

#### Message Model
- Unique ID
- Guest reference
- Name
- Message content
- Created/Updated timestamps

#### Config Model
- Unique ID
- Key-value pairs
- For future configurations

### 2. API Endpoints

#### `/api/rsvp`
**GET**: Retrieve all RSVPs with guest information
- Returns array of RSVPs
- Includes related guest data
- Sorted by creation date (newest first)

**POST**: Create or update RSVP
- Accepts: name, phone, email, attendance, guestCount
- Creates guest if doesn't exist
- Updates RSVP if already exists
- Returns success status and RSVP data

#### `/api/messages`
**GET**: Retrieve all messages
- Returns array of messages
- Includes related guest data
- Sorted by creation date (newest first)

**POST**: Create new message
- Accepts: name, message
- Creates guest if doesn't exist
- Creates new message entry
- Returns success status and message data

### 3. Admin Dashboard

Located at `/admin`

#### Statistics Display
- Total RSVP count
- Total attending guests
- Total guest count (including +1s)
- Not attending count
- Uncertain count
- Total messages count

#### RSVP Management Tab
- Table view of all RSVPs
- Columns:
  - Guest name
  - Contact information (phone/email)
  - Attendance status with icons
  - Number of guests
  - Submission date
- Color-coded status indicators:
  - Green checkmark: Attending
  - Red X: Not attending
  - Yellow question: Uncertain

#### Messages Tab
- Card-based message display
- Shows:
  - Sender name
  - Full message content
  - Submission date and time
- Scrollable message list
- Latest messages at top

#### Features
- Tab navigation between RSVP and Messages
- Real-time data display
- Responsive table/card layouts
- Empty state handling
- Loading states

### 4. Database Operations

#### Automatic Guest Creation
- Guest record created on first RSVP or message
- Prevents duplicate guest entries
- Links all activities to guest profile

#### Data Relationships
- One guest can have multiple RSVPs (updates)
- One guest can have multiple messages
- Cascade delete for data integrity

#### Data Persistence
- SQLite for development
- Easy migration to PostgreSQL for production
- Prisma ORM for type-safe queries

## Technical Features

### 1. TypeScript
- Full type safety
- Interface definitions
- Type checking
- Better IDE support

### 2. Next.js 14
- App Router architecture
- Server and Client Components
- API Routes
- File-based routing
- Optimized builds

### 3. Tailwind CSS
- Utility-first styling
- Responsive design utilities
- Custom color schemes
- Consistent spacing
- Easy customization

### 4. Prisma ORM
- Type-safe database queries
- Schema migrations
- Database introspection
- Multiple database support

### 5. Performance
- Lazy loading components
- Optimized images
- Code splitting
- Minimal bundle size
- Fast page loads

### 6. SEO & Metadata
- Open Graph tags
- Meta descriptions
- Page titles
- Social sharing support

## Security Features

### 1. Input Validation
- Required field enforcement
- Email format validation
- Phone number validation
- Message length limits

### 2. API Security
- Error handling
- Graceful failure modes
- No sensitive data exposure

### 3. Database Security
- Parameterized queries via Prisma
- SQL injection prevention
- Proper data types

## Customization Options

### 1. Colors
- Primary color (blue theme)
- Secondary color (light blue)
- Accent color (gold/amber)
- Easily modified in Tailwind config

### 2. Fonts
- Script font (Dancing Script)
- Sans-serif (Inter)
- Serif (Georgia)
- Google Fonts integration

### 3. Content
- All text is customizable
- Easy to modify in components
- No hardcoded strings in critical paths

### 4. Images
- Placeholder support
- Easy image replacement
- Optimized loading

### 5. Music
- Custom audio file support
- Easy file replacement
- Autoplay with user control

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Touch-friendly interface
- Readable font sizes
- Sufficient color contrast

## Future Enhancement Possibilities

1. Photo gallery
2. Live streaming integration
3. Digital guest book
4. QR code generation for invitations
5. Email notifications
6. WhatsApp integration
7. Multiple language support
8. Custom theme selector
9. Video backgrounds
10. Prayer time integration
11. Gift tracker
12. Seating chart
13. Timeline of events
14. Dress code information
15. Accommodation suggestions

