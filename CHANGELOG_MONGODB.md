# Changelog: MongoDB Migration

## 🔄 Database Changed from SQLite to MongoDB

### Date: October 12, 2025

---

## ✅ Summary of Changes

Database telah berhasil diubah dari **SQLite** ke **MongoDB**. Semua kode aplikasi tetap sama, hanya konfigurasi database yang berubah.

## 📋 Files Modified

### Core Changes:
1. **`prisma/schema.prisma`**
   - Provider changed: `sqlite` → `mongodb`
   - ID fields: `@id @default(cuid())` → `@id @default(auto()) @map("_id") @db.ObjectId`
   - Foreign keys: Added `@db.ObjectId` type

2. **Environment Configuration:**
   - `.env.local.example` - New MongoDB example
   - Old: `DATABASE_URL="file:./dev.db"`
   - New: `DATABASE_URL="mongodb://localhost:27017/undangan"`

### Documentation Updated:
3. **`README.md`** - Tech stack & setup updated
4. **`SETUP.md`** - Added MongoDB setup steps
5. **`QUICKSTART.md`** - Updated quick start with MongoDB
6. **`PROJECT_SUMMARY.md`** - Updated database info
7. **`FEATURES.md`** - No changes (features remain same)

### Setup Scripts Updated:
8. **`scripts/setup.sh`** - MongoDB connection string
9. **`scripts/setup.ps1`** - MongoDB connection string (Windows)

### New Documentation:
10. **`MONGODB_SETUP.md`** - Complete MongoDB setup guide
11. **`MIGRATION_GUIDE.md`** - Migration instructions
12. **`CHANGELOG_MONGODB.md`** - This file

### Other Files:
13. **`.gitignore`** - Added MongoDB files

---

## 🚀 What You Need to Do

### For New Setup (Recommended):

1. **Setup MongoDB:**
   ```bash
   # Option 1: MongoDB Atlas (Recommended)
   # - Free tier available
   # - No installation needed
   # - Visit: https://www.mongodb.com/cloud/atlas/register
   
   # Option 2: Local MongoDB
   brew install mongodb-community@7.0
   brew services start mongodb-community@7.0
   ```

2. **Configure Environment:**
   ```bash
   cp .env.local.example .env
   # Edit .env with your MongoDB connection string
   ```

3. **Initialize Database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Start Development:**
   ```bash
   npm run dev
   ```

### For Existing Projects:

If you already have the project running with SQLite:

1. **Pull latest changes:**
   ```bash
   git pull origin main
   ```

2. **Install dependencies (if any new):**
   ```bash
   npm install
   ```

3. **Setup MongoDB** (see above)

4. **Update .env:**
   ```bash
   # Update DATABASE_URL to MongoDB connection string
   ```

5. **Regenerate Prisma:**
   ```bash
   rm -rf node_modules/.prisma
   npx prisma generate
   npx prisma db push
   ```

6. **Migrate existing data** (if needed):
   - See `MIGRATION_GUIDE.md` for data migration options

---

## 📊 Schema Changes

### Before (SQLite):
```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Guest {
  id        String   @id @default(cuid())
  name      String
  // ...
}
```

### After (MongoDB):
```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Guest {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  // ...
}
```

### Key Differences:
- **ID Generation**: `cuid()` → `auto()` (MongoDB ObjectId)
- **ID Mapping**: Added `@map("_id")` for MongoDB _id field
- **Type Annotation**: Added `@db.ObjectId` for proper typing
- **Foreign Keys**: Must use `@db.ObjectId` type

---

## 🔍 Application Code Impact

### ✅ NO CHANGES NEEDED:

The following code remains **exactly the same**:

- ✅ All API routes (`app/api/**/*.ts`)
- ✅ All React components (`components/**/*.tsx`)
- ✅ All pages (`app/**/*.tsx`)
- ✅ Prisma client usage (`lib/prisma.ts`)
- ✅ TypeScript types (`lib/types.ts`)
- ✅ Frontend logic
- ✅ Admin dashboard
- ✅ RSVP functionality
- ✅ Messages functionality

**Reason**: Prisma ORM abstracts database differences, so application code doesn't need to change!

### ⚠️ ONLY CONFIG CHANGES:

- Database connection string in `.env`
- Prisma schema provider
- Model ID definitions

---

## 🎯 Benefits of MongoDB

### Why MongoDB over SQLite?

1. **Production Ready** ✅
   - SQLite is not ideal for production web apps
   - MongoDB handles concurrent connections better

2. **Cloud Native** ☁️
   - MongoDB Atlas offers free tier (M0)
   - No server setup required
   - Automatic backups

3. **Scalability** 📈
   - Easy to scale as your app grows
   - Better for multiple users accessing simultaneously

4. **No File Database** 📁
   - SQLite uses a file (dev.db)
   - MongoDB uses a database server
   - Better for Vercel/serverless deployments

5. **Built-in Features** 🛠️
   - Replica sets
   - Automatic failover
   - Point-in-time recovery

---

## 📚 Resources

### MongoDB Setup:
- **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas/register
- **Local Installation**: https://www.mongodb.com/docs/manual/installation/
- **MongoDB Compass** (GUI): https://www.mongodb.com/products/compass

### Documentation:
- **MONGODB_SETUP.md** - Complete setup guide
- **MIGRATION_GUIDE.md** - Data migration instructions
- **SETUP.md** - General setup guide
- **QUICKSTART.md** - Quick start guide

### Prisma + MongoDB:
- **Docs**: https://www.prisma.io/docs/concepts/database-connectors/mongodb
- **Tutorial**: https://www.prisma.io/mongodb

---

## 🧪 Testing Checklist

After switching to MongoDB, test these:

- [ ] `npm install` - Dependencies installed
- [ ] `npx prisma generate` - Prisma client generated
- [ ] `npx prisma db push` - Schema pushed to MongoDB
- [ ] `npm run dev` - Development server starts
- [ ] Open http://localhost:3000 - Website loads
- [ ] Click "Open Invitation" - Works
- [ ] Navigate through sections - All sections visible
- [ ] Submit RSVP - RSVP saved successfully
- [ ] Submit message - Message saved successfully
- [ ] Visit http://localhost:3000/admin - Admin dashboard works
- [ ] View RSVPs in admin - Data displays correctly
- [ ] View messages in admin - Messages display correctly

---

## ⚡ Quick Commands

```bash
# Setup MongoDB Atlas (one-time)
# - Visit https://www.mongodb.com/cloud/atlas/register
# - Create cluster, get connection string

# Setup Local MongoDB (macOS)
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

# Configure environment
cp .env.local.example .env
# Edit .env with connection string

# Initialize database
npx prisma generate
npx prisma db push

# Start development
npm run dev

# Open Prisma Studio (GUI)
npx prisma studio

# Test database connection
npx prisma db pull
```

---

## 🆘 Troubleshooting

### Connection Failed

**Error**: `Error: connect ECONNREFUSED`

**Solution**:
```bash
# For local MongoDB - ensure it's running:
brew services list | grep mongodb
brew services start mongodb-community@7.0

# For MongoDB Atlas - check:
# 1. Connection string is correct
# 2. IP is whitelisted (0.0.0.0/0 for dev)
# 3. Username/password are correct
```

### Authentication Failed

**Error**: `MongoServerError: Authentication failed`

**Solution**:
```bash
# Check username and password in connection string
# Special characters must be URL encoded:
# @ → %40
# : → %3A
# / → %2F

# Example:
# Bad:  mongodb+srv://user:p@ss:123@cluster.mongodb.net/db
# Good: mongodb+srv://user:p%40ss%3A123@cluster.mongodb.net/db
```

### Prisma Generate Failed

**Error**: `Prisma schema validation failed`

**Solution**:
```bash
# Ensure prisma/schema.prisma has correct MongoDB syntax
# Check:
# 1. provider = "mongodb"
# 2. ID fields use @default(auto()) @map("_id") @db.ObjectId
# 3. Foreign keys have @db.ObjectId

# Regenerate:
rm -rf node_modules/.prisma
npx prisma generate
```

---

## 🎉 Success Indicators

You'll know everything is working when:

1. ✅ `npm run dev` starts without errors
2. ✅ Website loads at http://localhost:3000
3. ✅ Can submit RSVP and see it in admin
4. ✅ Can submit message and see it in admin
5. ✅ `npx prisma studio` shows your data
6. ✅ No connection errors in console

---

## 📞 Need Help?

1. Check **MONGODB_SETUP.md** for detailed MongoDB setup
2. Check **MIGRATION_GUIDE.md** for migration help
3. Check **README.md** for general documentation
4. MongoDB Atlas has great documentation
5. Prisma docs: https://www.prisma.io/docs

---

## 🚢 Deployment

### Vercel with MongoDB Atlas:

1. **Setup MongoDB Atlas**
   - Create free cluster (M0)
   - Get connection string

2. **Deploy to Vercel**
   ```bash
   git push origin main
   # Import to Vercel
   ```

3. **Add Environment Variables**
   - Go to Vercel Project Settings
   - Add `DATABASE_URL` with your MongoDB Atlas connection string
   - Add `NEXT_PUBLIC_SITE_URL`

4. **Deploy**
   - Vercel will run `npx prisma generate` automatically
   - Visit your deployed URL

---

## ✨ What's Next?

After migration is complete:

1. ✅ Test all features
2. 📝 Customize wedding information
3. 🎵 Add music file
4. 📸 Add couple photos
5. 🚀 Deploy to production
6. 📧 Send invitations

---

**Last Updated**: October 12, 2025  
**Migration Status**: ✅ Complete  
**Breaking Changes**: None (only database config)  
**Data Migration**: Optional (see MIGRATION_GUIDE.md)

🎊 Happy wedding planning! 💒

