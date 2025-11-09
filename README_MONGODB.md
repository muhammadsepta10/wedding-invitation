# 🗄️ Database Telah Diubah ke MongoDB!

## 📢 Pemberitahuan Penting

Database website undangan pernikahan ini telah **diubah dari SQLite ke MongoDB**.

### ✅ Yang Perlu Anda Lakukan:

#### 1. Setup MongoDB (Pilih Salah Satu):

**A. MongoDB Atlas (Rekomendasi - Gratis):**
- Daftar di: https://www.mongodb.com/cloud/atlas/register
- Buat cluster gratis (M0)
- Dapatkan connection string

**B. MongoDB Lokal:**
```bash
# macOS
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

# Windows: Download dari mongodb.com
# Linux: sudo apt-get install mongodb-org
```

#### 2. Update Environment Variables:

```bash
cp .env.local.example .env
```

Edit `.env`:
```
DATABASE_URL="mongodb://localhost:27017/undangan"
# Atau MongoDB Atlas:
# DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/undangan"
```

#### 3. Generate & Push Database:

```bash
npx prisma generate
npx prisma db push
```

#### 4. Jalankan:

```bash
npm run dev
```

### 📚 Dokumentasi Lengkap:

- **MONGODB_SETUP.md** - Panduan setup MongoDB lengkap
- **MIGRATION_GUIDE.md** - Panduan migrasi data
- **CHANGELOG_MONGODB.md** - Detail semua perubahan
- **SETUP.md** - Setup guide umum
- **QUICKSTART.md** - Quick start guide

### 🎯 Keuntungan MongoDB:

✅ Production-ready  
✅ Free tier di Atlas  
✅ Scalable  
✅ Cloud-native  
✅ Automatic backups  
✅ Better concurrent access  

### ⚠️ Catatan:

- **Tidak ada perubahan kode aplikasi**
- Hanya konfigurasi database yang berubah
- Semua fitur tetap sama
- API routes tidak berubah
- Frontend tidak berubah

### 🚀 Quick Start:

```bash
# 1. Setup MongoDB Atlas atau lokal
# 2. Update .env dengan connection string
# 3. Generate Prisma
npx prisma generate
npx prisma db push

# 4. Run
npm run dev
```

---

Lihat **MONGODB_SETUP.md** untuk instruksi detail! 🎉
