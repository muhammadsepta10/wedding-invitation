# Migration Guide: SQLite to MongoDB

Database telah diubah dari SQLite ke MongoDB. Berikut panduan lengkap.

## ✅ Perubahan yang Telah Dilakukan

### 1. Prisma Schema (`prisma/schema.prisma`)

**Sebelum (SQLite):**
```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Guest {
  id        String   @id @default(cuid())
  // ...
}
```

**Sesudah (MongoDB):**
```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Guest {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  // ...
}
```

### 2. Perubahan Environment Variables

**Sebelum:**
```
DATABASE_URL="file:./dev.db"
```

**Sesudah:**
```
DATABASE_URL="mongodb://localhost:27017/undangan"
# atau
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/undangan"
```

### 3. Model ID Changes

Semua model sekarang menggunakan MongoDB ObjectId:
- `@id @default(auto())`
- `@map("_id")`
- `@db.ObjectId`

Foreign keys juga menggunakan `@db.ObjectId`:
```prisma
guestId    String   @db.ObjectId
```

## 🚀 Setup Baru (Fresh Install)

### Langkah 1: Install Dependencies
```bash
npm install
```

### Langkah 2: Setup MongoDB

#### Option A: MongoDB Local

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

**Windows:**
- Download dari: https://www.mongodb.com/try/download/community
- Install dan start service

**Linux:**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

#### Option B: MongoDB Atlas (Recommended)

1. Buat akun di: https://www.mongodb.com/cloud/atlas/register
2. Create free cluster (M0)
3. Setup database user
4. Whitelist IP address (0.0.0.0/0 untuk dev)
5. Get connection string

### Langkah 3: Setup Environment
```bash
cp .env.local.example .env
# Edit .env dengan connection string Anda
```

### Langkah 4: Generate Prisma Client & Push Schema
```bash
npx prisma generate
npx prisma db push
```

### Langkah 5: Start Development
```bash
npm run dev
```

## 🔄 Migrasi Data (Jika Ada Data SQLite Existing)

Jika Anda sudah memiliki data di SQLite dan ingin migrasi ke MongoDB:

### Option 1: Export/Import Manual via Prisma Studio

1. **Export dari SQLite:**
```bash
# Checkout ke commit SQLite terakhir
git checkout <commit-before-mongodb>

# Buka Prisma Studio
npx prisma studio

# Export setiap table sebagai JSON/CSV
```

2. **Import ke MongoDB:**
```bash
# Kembali ke commit MongoDB
git checkout main

# Buka Prisma Studio
npx prisma studio

# Import data yang sudah di-export
```

### Option 2: Script Node.js untuk Migrasi

Buat file `migrate-data.js`:

```javascript
const { PrismaClient: PrismaClientSQLite } = require('@prisma/client');
const { PrismaClient: PrismaClientMongo } = require('@prisma/client');

// Koneksi ke SQLite (database lama)
const sqliteClient = new PrismaClientSQLite({
  datasources: {
    db: {
      url: 'file:./prisma/dev.db'
    }
  }
});

// Koneksi ke MongoDB (database baru)
const mongoClient = new PrismaClientMongo();

async function migrateData() {
  try {
    console.log('Starting migration...');

    // Migrate Guests
    const guests = await sqliteClient.guest.findMany({
      include: { rsvps: true, messages: true }
    });

    for (const guest of guests) {
      const { rsvps, messages, ...guestData } = guest;
      
      await mongoClient.guest.create({
        data: {
          ...guestData,
          rsvps: {
            create: rsvps.map(({ guest, guestId, ...rsvp }) => rsvp)
          },
          messages: {
            create: messages.map(({ guest, guestId, ...message }) => message)
          }
        }
      });
    }

    console.log('Migration completed!');
  } catch (error) {
    console.error('Migration error:', error);
  } finally {
    await sqliteClient.$disconnect();
    await mongoClient.$disconnect();
  }
}

migrateData();
```

Jalankan:
```bash
node migrate-data.js
```

### Option 3: Mulai Fresh (No Migration)

Jika data development tidak penting, mulai fresh:
```bash
# Hapus database lama
rm prisma/dev.db

# Setup MongoDB baru
npx prisma generate
npx prisma db push
```

## 🧪 Testing Setelah Migrasi

### 1. Test Koneksi
```bash
npx prisma db pull
```

Jika sukses, koneksi MongoDB OK.

### 2. Test Prisma Studio
```bash
npx prisma studio
```

Buka http://localhost:5555 dan cek collections.

### 3. Test API Endpoints

```bash
# Start server
npm run dev

# Test POST RSVP
curl -X POST http://localhost:3000/api/rsvp \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","attendance":"hadir","guestCount":"1"}'

# Test GET RSVP
curl http://localhost:3000/api/rsvp
```

### 4. Test Frontend
1. Buka http://localhost:3000
2. Click "Open Invitation"
3. Scroll ke RSVP section
4. Submit test RSVP
5. Submit test message
6. Check admin: http://localhost:3000/admin

## 📝 Perubahan File

File yang diubah:
- ✅ `prisma/schema.prisma` - Provider & model definitions
- ✅ `.gitignore` - MongoDB files
- ✅ `scripts/setup.sh` - MongoDB setup
- ✅ `scripts/setup.ps1` - MongoDB setup (Windows)
- ✅ `README.md` - Updated documentation
- ✅ `QUICKSTART.md` - Updated quick start
- ✅ `PROJECT_SUMMARY.md` - Updated summary
- ✅ **NEW**: `MONGODB_SETUP.md` - Complete MongoDB guide
- ✅ **NEW**: `MIGRATION_GUIDE.md` - This file
- ✅ **NEW**: `.env.local.example` - Environment example

File yang TIDAK berubah:
- ✅ API routes (`app/api/**/*.ts`) - Tetap sama
- ✅ Components (`components/**/*.tsx`) - Tetap sama
- ✅ Prisma client usage (`lib/prisma.ts`) - Tetap sama
- ✅ Frontend code - Tidak ada perubahan

## 🔍 Troubleshooting

### Error: "Unknown arg `map` in `@id` directive"

**Cause**: Prisma schema syntax error

**Solution**: Pastikan schema sudah update dengan benar:
```prisma
id  String  @id @default(auto()) @map("_id") @db.ObjectId
```

### Error: "Authentication failed"

**Cause**: Username/password salah atau tidak ter-encode

**Solution**: 
```bash
# Encode password jika ada special characters
# Contoh: myP@ssw0rd! → myP%40ssw0rd%21
DATABASE_URL="mongodb+srv://user:myP%40ssw0rd%21@cluster.mongodb.net/undangan"
```

### Error: "IP not whitelisted"

**Cause**: IP address tidak ada di MongoDB Atlas whitelist

**Solution**:
1. Buka MongoDB Atlas
2. Network Access → Add IP Address
3. Tambahkan 0.0.0.0/0 (allow all) untuk development

### Error: "Connection timeout"

**Cause**: Network issue atau MongoDB service tidak running

**Solution**:
```bash
# Cek MongoDB service (local)
brew services list | grep mongodb

# Start jika belum running
brew services start mongodb-community@7.0

# Test connection
mongosh
```

## 🎯 Keuntungan MongoDB vs SQLite

### MongoDB:
- ✅ Better for production
- ✅ Scalable
- ✅ Cloud-ready (Atlas)
- ✅ Better for concurrent access
- ✅ Free tier available (Atlas M0)
- ✅ Automatic backups (Atlas)
- ✅ Built-in replica sets

### SQLite:
- ✅ Easier local setup
- ✅ No external service needed
- ✅ Single file database
- ❌ Not ideal for production
- ❌ Limited concurrent writes
- ❌ No cloud option

## 📚 Resources

- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Prisma MongoDB: https://www.prisma.io/docs/concepts/database-connectors/mongodb
- MongoDB Installation: https://www.mongodb.com/docs/manual/installation/
- Prisma CLI: https://www.prisma.io/docs/reference/api-reference/command-reference

## ✅ Checklist Migrasi

- [ ] MongoDB installed/Atlas account created
- [ ] Connection string obtained
- [ ] .env file updated
- [ ] `npx prisma generate` executed
- [ ] `npx prisma db push` executed
- [ ] npm run dev works
- [ ] Can submit RSVP
- [ ] Can submit message
- [ ] Admin dashboard works
- [ ] Data (if any) migrated

## 🎊 Next Steps

Setelah migrasi selesai:

1. Test semua fitur
2. Customize wedding information
3. Add wedding photos
4. Add music file
5. Deploy to Vercel with MongoDB Atlas

---

Jika ada pertanyaan atau masalah, check:
- [MONGODB_SETUP.md](MONGODB_SETUP.md) untuk setup detail
- [README.md](README.md) untuk dokumentasi lengkap
- [QUICKSTART.md](QUICKSTART.md) untuk quick start

Happy wedding planning! 🎉

