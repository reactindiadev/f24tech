# F24Tech - PHP Backend with Next.js Admin & Portfolio

A modern hybrid web application combining PHP backend with Next.js frontend for admin panel and portfolio management.

## 🏗️ Architecture

- **Backend:** PHP with MySQL database
- **Frontend:** Next.js with TypeScript and Tailwind CSS
- **Admin Panel:** Next.js application for project management
- **Portfolio:** Next.js application for project showcase
- **Main Website:** PHP-based public website

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PHP 7.4+
- MySQL database
- Web server (Apache/Nginx)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd f24tech-website
```

2. **Install frontend dependencies**
```bash
cd frontend
npm install
```

3. **Configure database**
Update `public_html/config/database.php` with your database credentials.

4. **Build frontend**
```bash
chmod +x build.sh
./build.sh
```

5. **Deploy to server**
Follow the instructions in `deploy-instructions.md`

## 📁 Project Structure

```
├── frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   ├── components/          # React components
│   ├── hooks/              # Custom hooks
│   ├── types/              # TypeScript types
│   └── package.json
├── public_html/             # PHP backend
│   ├── api/                # API endpoints
│   ├── config/             # Database configuration
│   ├── includes/           # PHP includes
│   ├── pages/              # PHP pages
│   ├── assets/             # Static assets
│   └── index.php           # Main entry point
├── build.sh                # Build script
└── deploy-instructions.md  # Deployment guide
```

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
Set up a local PHP server:
```bash
cd public_html
php -S localhost:8000
```

## 🌐 Features

### Admin Panel (Next.js)
- ✅ Secure authentication
- ✅ Project management (CRUD)
- ✅ Contact management
- ✅ Analytics dashboard
- ✅ Responsive design

### Portfolio (Next.js)
- ✅ Project showcase
- ✅ Detailed project modals
- ✅ Technology filtering
- ✅ Responsive grid layout

### PHP Backend
- ✅ RESTful API endpoints
- ✅ Database management
- ✅ Contact form processing
- ✅ Newsletter management
- ✅ Analytics tracking

## 🔐 Authentication

- **Admin Username:** admin
- **Admin Password:** Admin@f24tech24

## 📊 Database

The application uses MySQL with the following main tables:
- `projects` - Portfolio projects
- `contact_submissions` - Contact form data
- `newsletter_subscriptions` - Email subscriptions
- `page_views` - Analytics data

## 🚀 Deployment

### Hostinger Deployment

1. **Build the frontend:**
```bash
./build.sh
```

2. **Upload files:**
   - Upload `public_html/` contents to domain root
   - Upload `frontend/out/` contents to `frontend/` folder

3. **Configure domain:**
   - Point domain to `public_html` folder
   - Enable SSL certificate

### Environment Configuration

Update `frontend/next.config.js` for production:
```javascript
env: {
  API_BASE_URL: 'https://your-domain.com/api'
}
```

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS for styling
- Responsive navigation
- Touch-friendly interfaces

## 🔒 Security Features

- Input validation and sanitization
- SQL injection protection
- XSS prevention
- Secure authentication
- CORS configuration

## 📈 Performance

- Static site generation with Next.js
- Optimized images
- Lazy loading
- Efficient database queries
- CDN-ready assets

## 🛠️ Technologies Used

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Headless UI
- React Hook Form
- Axios

### Backend
- PHP 7.4+
- MySQL
- PDO for database access
- RESTful API design

## 📞 Support

For technical support or questions:
- **Email:** admin@f24tech.com
- **Documentation:** See `deploy-instructions.md`

## 📄 License

This project is proprietary software owned by F24Tech Softwares.

---

**Built with ❤️ by F24Tech Team**