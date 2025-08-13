# F24Tech Hostinger Deployment Guide

## 🏗️ Project Structure

```
your-domain.com/
├── public_html/ (PHP Backend - Root)
│   ├── api/
│   │   ├── contact.php
│   │   ├── newsletter.php
│   │   ├── get-project.php
│   │   ├── get-projects.php
│   │   ├── admin-login.php
│   │   ├── verify-token.php
│   │   └── admin-stats.php
│   ├── config/
│   │   └── database.php
│   ├── includes/
│   │   ├── header.php
│   │   ├── footer.php
│   │   └── ...
│   ├── pages/
│   │   ├── home.php
│   │   ├── about.php
│   │   └── ...
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── photos/
│   └── index.php
└── frontend/ (Next.js Build)
    ├── _next/
    ├── admin/
    ├── portfolio/
    └── index.html
```

## 🚀 Deployment Steps

### 1. Build the Frontend

```bash
# Make the build script executable
chmod +x build.sh

# Run the build script
./build.sh
```

### 2. Upload Files to Hostinger

#### Via File Manager:
1. Login to your Hostinger control panel
2. Go to File Manager
3. Upload `public_html` contents to your domain's root directory
4. Create a `frontend` folder in your domain root
5. Upload `frontend/out` contents to the `frontend` folder

#### Via FTP:
```bash
# Upload PHP backend to root
scp -r public_html/* username@your-domain.com:/public_html/

# Upload frontend build
scp -r frontend/out/* username@your-domain.com:/public_html/frontend/
```

### 3. Database Configuration

The database is already configured in `config/database.php`:
- **Host:** localhost
- **Database:** u925328211_ncb
- **Username:** u925328211_ncb
- **Password:** Aman123@f24tech24

Tables will be created automatically when you first access the website.

### 4. Update Configuration

#### Update `frontend/next.config.js` for production:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/frontend',
  basePath: '/frontend',
  env: {
    API_BASE_URL: 'https://your-domain.com/api'
  }
}
```

### 5. Set File Permissions

```bash
# Set proper permissions for PHP files
chmod 644 public_html/*.php
chmod 644 public_html/api/*.php
chmod 644 public_html/config/*.php
chmod 755 public_html/
```

## 🔗 Access URLs

- **Main Website:** `https://your-domain.com`
- **Portfolio (Next.js):** `https://your-domain.com/frontend/portfolio`
- **Admin Panel (Next.js):** `https://your-domain.com/frontend/admin`
- **Admin Login:** `https://your-domain.com/frontend/admin/login`

## 🔐 Admin Credentials

- **Username:** admin
- **Password:** Admin@f24tech24

## 🛠️ Development Commands

```bash
# Install dependencies
cd frontend && npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## 📝 Important Notes

1. **Domain Configuration:** Make sure your domain points to the `public_html` folder
2. **SSL Certificate:** Enable SSL in Hostinger for HTTPS
3. **PHP Version:** Ensure PHP 7.4+ is enabled
4. **Database:** Tables are created automatically on first access
5. **File Permissions:** Ensure PHP files have proper read permissions

## 🔧 Troubleshooting

### Common Issues:

1. **404 Errors on Frontend Routes:**
   - Check if `frontend` folder exists in domain root
   - Verify `assetPrefix` and `basePath` in `next.config.js`

2. **Database Connection Issues:**
   - Verify database credentials in `config/database.php`
   - Check if database exists in Hostinger panel

3. **API Errors:**
   - Ensure API files have proper permissions
   - Check CORS headers in API files

4. **Admin Login Issues:**
   - Verify credentials: admin / Admin@f24tech24
   - Check browser cookies are enabled

## 📞 Support

For technical support:
- **Email:** admin@f24tech.com
- **Documentation:** This deployment guide

---

**🎉 Your F24Tech website with Next.js admin panel is now ready for deployment!**