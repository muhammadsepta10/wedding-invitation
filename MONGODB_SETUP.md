# MongoDB Setup Guide

Database telah diubah dari SQLite ke MongoDB. Berikut panduan setup MongoDB.

## Pilihan 1: MongoDB Atlas (Cloud - Gratis)

### Langkah-langkah:

1. **Buat Akun MongoDB Atlas**
   - Kunjungi: https://www.mongodb.com/cloud/atlas/register
   - Daftar dengan email atau Google account
   - Pilih plan **FREE** (M0 Sandbox)

2. **Setup Cluster**
   - Pilih provider: AWS, Google Cloud, atau Azure
   - Pilih region terdekat (Singapore/Jakarta untuk Indonesia)
   - Cluster Name: `undangan-cluster` (atau nama lain)
   - Klik **Create Cluster**

3. **Setup Database Access**
   - Klik **Database Access** di sidebar
   - Klik **Add New Database User**
   - Username: `undangan_user`
   - Password: Generate atau buat password strong
   - User Privileges: **Read and write to any database**
   - Klik **Add User**

4. **Setup Network Access**
   - Klik **Network Access** di sidebar
   - Klik **Add IP Address**
   - Untuk development: Klik **Allow Access from Anywhere** (0.0.0.0/0)
   - Untuk production: Tambahkan IP spesifik
   - Klik **Confirm**

5. **Dapatkan Connection String**
   - Klik **Database** di sidebar
   - Klik **Connect** pada cluster Anda
   - Pilih **Connect your application**
   - Pilih Driver: **Node.js** dan Version: **4.1 or later**
   - Copy connection string:
   ```
   mongodb+srv://undangan_user:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
   ```

6. **Update .env File**
   ```bash
   DATABASE_URL="mongodb+srv://undangan_user:YOUR_PASSWORD@cluster.mongodb.net/undangan?retryWrites=true&w=majority"
   ```
   
   **Ganti:**
   - `YOUR_PASSWORD` dengan password user Anda
   - `undangan` dengan nama database yang diinginkan

## Pilihan 2: MongoDB Local (Development)

### Instalasi MongoDB di macOS:

```bash
# Install via Homebrew
brew tap mongodb/brew
brew install mongodb-community@7.0

# Start MongoDB service
brew services start mongodb-community@7.0

# Verify installation
mongosh --version
```

### Instalasi MongoDB di Windows:

1. Download installer dari: https://www.mongodb.com/try/download/community
2. Jalankan installer (pilih Complete installation)
3. Install sebagai Windows Service
4. Start MongoDB service dari Services

### Instalasi MongoDB di Linux:

```bash
# Ubuntu/Debian
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Update .env File (Local):

```bash
DATABASE_URL="mongodb://localhost:27017/undangan"
```

## Setup Project dengan MongoDB

### 1. Update Environment Variables

```bash
# Copy example file
cp .env.example .env

# Edit .env dan tambahkan connection string
nano .env
```

### 2. Generate Prisma Client

```bash
npx prisma generate
```

### 3. Push Schema ke MongoDB

```bash
npx prisma db push
```

### 4. Verify Connection

```bash
# Test connection
npx prisma db pull
```

## MongoDB Compass (GUI Tool)

Download MongoDB Compass untuk GUI interface:
https://www.mongodb.com/try/download/compass

Connection string sama dengan yang ada di .env

## Troubleshooting

### Error: Authentication Failed

**Problem**: Password atau username salah

**Solution**:
- Cek username dan password di MongoDB Atlas
- Pastikan password tidak mengandung karakter khusus, atau encode dengan URL encoding
- Contoh: `password@123` → `password%40123`

### Error: IP Not Whitelisted

**Problem**: IP address belum ditambahkan ke whitelist

**Solution**:
- Buka MongoDB Atlas → Network Access
- Tambahkan IP address Anda atau gunakan 0.0.0.0/0 untuk development

### Error: Connection Timeout

**Problem**: Network issue atau firewall

**Solution**:
- Cek koneksi internet
- Disable VPN sementara
- Cek firewall settings

### Error: Database does not exist

**Solution**:
- MongoDB akan otomatis create database saat first write
- Jalankan: `npx prisma db push`

## MongoDB Connection String Format

### Local MongoDB:
```
mongodb://localhost:27017/database_name
mongodb://username:password@localhost:27017/database_name
```

### MongoDB Atlas:
```
mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
```

### With Options:
```
mongodb+srv://user:pass@cluster.mongodb.net/dbname?retryWrites=true&w=majority&appName=undangan
```

## Prisma Studio dengan MongoDB

Untuk melihat dan edit data dengan GUI:

```bash
npx prisma studio
```

Buka browser: http://localhost:5555

## Backup Database

### Export Data (MongoDB Atlas):

1. Buka MongoDB Atlas
2. Pilih Cluster → Collections
3. Klik export data
4. Download sebagai JSON atau CSV

### Export via mongodump (Local):

```bash
# Backup semua data
mongodump --uri="mongodb://localhost:27017/undangan" --out=./backup

# Restore data
mongorestore --uri="mongodb://localhost:27017/undangan" ./backup/undangan
```

## Migrasi dari SQLite ke MongoDB

Jika Anda sudah punya data di SQLite:

1. **Export data dari SQLite**:
   ```bash
   npx prisma studio
   # Export semua table sebagai JSON
   ```

2. **Import ke MongoDB**:
   - Gunakan MongoDB Compass atau mongoimport
   - Atau buat script Node.js untuk import

## Production Tips

1. **Gunakan MongoDB Atlas** untuk production
2. **Enable backup** di Atlas (auto backup available)
3. **Set up monitoring** di Atlas dashboard
4. **Use connection pooling** (Prisma handle otomatis)
5. **Add proper indexes** untuk query performance
6. **Restrict Network Access** ke IP production server only

## Connection String Security

⚠️ **PENTING**:
- Jangan commit `.env` ke git
- Gunakan environment variables di hosting
- Rotasi password secara berkala
- Use strong passwords

## Vercel Deployment dengan MongoDB Atlas

1. Push code ke GitHub
2. Import project ke Vercel
3. Tambahkan Environment Variable:
   ```
   DATABASE_URL=mongodb+srv://...
   ```
4. Deploy

## Monitoring

MongoDB Atlas menyediakan:
- Real-time performance metrics
- Query analytics
- Storage usage
- Connection monitoring

Akses via: Atlas Dashboard → Metrics

## Useful Commands

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma db push

# Open Prisma Studio
npx prisma studio

# Pull existing schema
npx prisma db pull

# Format schema file
npx prisma format

# Validate schema
npx prisma validate
```

## Resources

- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Prisma MongoDB: https://www.prisma.io/docs/concepts/database-connectors/mongodb
- MongoDB Docs: https://www.mongodb.com/docs/
- MongoDB University (Free courses): https://university.mongodb.com/

## Support

Jika ada masalah dengan setup MongoDB, cek:
1. Connection string format
2. Network access settings
3. User privileges
4. Firewall settings
5. Prisma schema syntax

---

✅ Setelah setup selesai, jalankan:

```bash
npx prisma generate
npx prisma db push
npm run dev
```

Database MongoDB siap digunakan! 🎉

