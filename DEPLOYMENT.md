# TirangaG Solar Energy - Deployment Guide

## Deploying to Vercel

This project contains both a frontend (React) and backend (Node.js/Express) application that can be deployed on Vercel.

### Prerequisites
- Vercel account (https://vercel.com)
- GitHub account with the project repository
- Git installed locally

### Step 1: Connect GitHub Repository to Vercel

1. Go to https://vercel.com and sign in with your GitHub account
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Find and select **`lemonmoose/TirangaG-Project`**
5. Click **"Import"**

### Step 2: Configure Environment Variables

In the Vercel dashboard, add the following environment variables:

**For Backend:**
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=production
```

**For Frontend:**
```
REACT_APP_API_URL=https://your-vercel-domain.vercel.app/api
```

### Step 3: Deploy

1. Vercel will automatically detect the `vercel.json` configuration
2. Click **"Deploy"**
3. Wait for the build to complete

### Project Structure for Vercel

```
TirangaG-Project/
├── backend/          # Node.js/Express API
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── package.json
├── frontend/         # React application
│   ├── src/
│   ├── public/
│   └── package.json
├── vercel.json      # Vercel configuration
└── .vercelignore    # Files to ignore during deployment
```

### Key Files

- **vercel.json** - Defines build commands and routing rules
- **Backend** serves API routes at `/api/*`
- **Frontend** serves static files at `/`

### After Deployment

1. Test your API endpoints: `https://your-vercel-domain.vercel.app/api/enquiries`
2. Update frontend `.env` with the new backend URL if needed
3. Monitor deployments in Vercel dashboard

### Troubleshooting

- **Build fails**: Check logs in Vercel dashboard
- **Environment variables missing**: Ensure all required vars are set in Vercel settings
- **CORS issues**: Update backend CORS configuration if needed
- **Database connection**: Verify MongoDB URI is correct

### Local Development

To test locally before deploying:

```bash
# Backend
cd backend
npm install
npm start

# Frontend (new terminal)
cd frontend
npm install
npm start
```

### Support

For more information:
- [Vercel Documentation](https://vercel.com/docs)
- [Express on Vercel](https://vercel.com/docs/serverless-functions/nodejs)
