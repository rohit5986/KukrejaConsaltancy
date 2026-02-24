# Netlify Deployment Guide

## Prerequisites
- A Netlify account (sign up at https://www.netlify.com)
- MongoDB Atlas account for database (https://www.mongodb.com/cloud/atlas)
- GitHub/GitLab/Bitbucket repository (optional but recommended)

## Setup Steps

### 1. Prepare Environment Variables
You'll need to set the following environment variable in Netlify:

- `MONGODB_URI` - Your MongoDB connection string from MongoDB Atlas

### 2. Deploy to Netlify

#### Option A: Deploy via Git (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to Netlify (https://app.netlify.com)
3. Click "New site from Git"
4. Select your Git provider and repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Functions directory**: `netlify/functions`
6. Add environment variables:
   - Go to Site settings → Environment variables
   - Add `MONGODB_URI` with your MongoDB connection string
7. Click "Deploy site"

#### Option B: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize Netlify in your project:
   ```bash
   netlify init
   ```

4. Set environment variables:
   ```bash
   netlify env:set MONGODB_URI "your-mongodb-connection-string"
   ```

5. Deploy:
   ```bash
   netlify deploy --prod
   ```

#### Option C: Manual Deploy via Netlify Drop

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to https://app.netlify.com/drop
3. Drag and drop the `build` folder
4. After deployment, go to Site settings → Environment variables
5. Add `MONGODB_URI` with your MongoDB connection string
6. Manually upload the `netlify` folder to your site

### 3. MongoDB Atlas Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster (free tier available)
3. Create a database user with username and password
4. Whitelist all IP addresses (0.0.0.0/0) for Netlify Functions
   - Go to Network Access → Add IP Address → Allow Access from Anywhere
5. Get your connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with your database name
6. Use this connection string as your `MONGODB_URI` environment variable

### 4. Update API URLs in Frontend

The API calls in your frontend should automatically work with the redirects configured in `netlify.toml`. The URLs like:
- `http://localhost:5000/api/contacts` 
- `http://localhost:5000/api/loan-inquiries`

Will be automatically redirected to:
- `/.netlify/functions/contacts`
- `/.netlify/functions/loan-inquiries`

If you need to explicitly update them, change the fetch URLs in your React components to use relative paths:
- `/api/contacts` instead of `http://localhost:5000/api/contacts`
- `/api/loan-inquiries` instead of `http://localhost:5000/api/loan-inquiries`

### 5. Verify Deployment

After deployment:
1. Visit your Netlify site URL
2. Test the contact form
3. Test the loan inquiry form
4. Check Netlify Functions logs for any errors

### 6. Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Netlify)

## Project Structure

```
├── build/                      # Production build (generated)
├── netlify/
│   └── functions/             # Serverless functions
│       ├── contacts.js        # Contact form handler
│       ├── loan-inquiries.js  # Loan inquiry handler
│       └── utils/             # Shared utilities
│           ├── db.js          # Database connection
│           ├── Contact.js     # Contact model
│           └── LoanInquiry.js # Loan inquiry model
├── netlify.toml               # Netlify configuration
├── public/
│   └── _redirects            # Redirect rules
└── src/                       # React source code
```

## Troubleshooting

### Functions Not Working
- Check Netlify Functions logs in the dashboard
- Verify `MONGODB_URI` environment variable is set correctly
- Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

### Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in package.json
- Try building locally with `npm run build`

### CORS Issues
- CORS headers are already configured in the functions
- Clear browser cache and try again

### Database Connection Issues
- Verify MongoDB connection string is correct
- Check MongoDB Atlas network access settings
- Ensure database user has proper permissions

## Support

For issues or questions:
- Netlify Documentation: https://docs.netlify.com
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com
- Check the logs in Netlify dashboard → Functions tab

## Auto-Deploy on Git Push

If you connected via Git, Netlify will automatically deploy whenever you push to your repository's main branch.

To disable auto-deploy:
- Go to Site settings → Build & deploy → Continuous deployment
- Stop builds or configure branch deploys
