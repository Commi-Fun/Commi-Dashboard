# Commi Dashboard - Internal Analytics Tool

A standalone internal dashboard for monitoring users, whitelist, and referral statistics with secure admin authentication.

## 🔒 Authentication System

The dashboard includes a fixed-password authentication system:
- **Login Page**: `/admin/login`
- **Admin Password**: Configured via environment variables
- **JWT Sessions**: Secure cookie-based authentication with 24-hour expiration
- **Rate Limiting**: Protection against brute force attacks (5 attempts per 15 min)

## ✨ Features

- **🔐 Secure Admin Access**: Fixed password authentication with JWT tokens
- **📊 Overview Dashboard**: Key metrics and statistics
- **🔗 Referral Network**: Top referrers and referral statistics  
- **👥 User Analytics**: User engagement and growth metrics
- **📈 Data Visualization**: Interactive charts and graphs

## 🚀 Quick Start

1. **Clone & Setup**:
   ```bash
   git clone <repository-url>
   cd dashboard
   ```

2. **Environment Configuration**:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@host:port/database"
   
   # Admin Authentication
   ADMIN_PASSWORD_HASH="$2b$10$YourBcryptHashHere"
   ADMIN_JWT_SECRET="your-jwt-secret-key"
   ADMIN_SESSION_DURATION="24h"
   ```

3. **Generate Password Hash**:
   ```bash
   node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your-admin-password', 12).then(console.log)"
   ```

4. **Install Dependencies**:
   ```bash
   npm install
   ```

5. **Generate Prisma Client** (if needed):
   ```bash
   npm run prisma:generate
   ```

6. **Start Development Server**:
   ```bash
   npm run dev
   # Dashboard available at http://localhost:3002
   ```

## 🔑 Admin Access

1. Visit `http://localhost:3002`
2. You'll be redirected to `/admin/login`
3. Enter the admin password
4. Access the dashboard with full analytics

## 🏗️ Architecture

- **Next.js 15** with App Router and Turbopack
- **Material-UI (MUI)** for consistent UI components
- **MUI X Charts** for data visualization
- **React Query** for API state management
- **Prisma Client** for database operations
- **Jose JWT** for Edge Runtime compatible authentication
- **bcryptjs** for secure password hashing

## 📡 API Routes

### Authentication
- `POST /api/auth/admin` - Admin login
- `GET /api/auth/admin` - Check auth status
- `POST /api/auth/logout` - Admin logout

### Analytics
- `/api/stats/overview` - Overview statistics
- `/api/stats/users` - User analytics data
- `/api/stats/whitelist` - Whitelist statistics
- `/api/stats/referrals` - Referral network data

## 🗄️ Database Schema

The dashboard connects to your PostgreSQL database and reads from:
- `User` - Twitter user profiles and engagement metrics
- `Whitelist` - Whitelist entries and claim status tracking
- `Referral` - Referral relationships and network data

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run prisma:generate  # Generate Prisma client
npm run prisma:studio    # Open Prisma Studio
```

## 🔒 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure session management
- **HttpOnly Cookies**: XSS protection
- **Rate Limiting**: Brute force protection
- **CSRF Protection**: SameSite cookie policy
- **Environment Variables**: All secrets in env files

## 🚦 Production Deployment

1. **Environment Variables**:
   - Generate strong `ADMIN_JWT_SECRET`
   - Use secure password hash
   - Set `NODE_ENV=production`

2. **Build & Deploy**:
   ```bash
   npm run build
   npm start
   ```

## 📝 Development Notes

- **Read-Only Database**: Dashboard only reads data, no migrations included
- **Standalone Repository**: No workspace dependencies
- **Edge Runtime Compatible**: Uses `jose` instead of `jsonwebtoken`
- **Responsive Design**: Mobile-friendly Material-UI components
- **Error Handling**: Comprehensive error boundaries and API error handling

## 🆘 Troubleshooting

**Authentication Issues:**
- Check `ADMIN_PASSWORD_HASH` is properly set
- Verify bcrypt hash generation
- Clear browser cookies if needed

**Database Connection:**
- Verify `DATABASE_URL` format
- Check database accessibility
- Ensure Prisma client is generated

**Build Errors:**
- Run `npm run prisma:generate` 
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`