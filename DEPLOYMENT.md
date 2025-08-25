# Deployment Guide - Vercel

This guide will help you deploy the Mukilteo Technical Solutions website to Vercel.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Project**
   - Project Name: `mukilteo-technical-solutions` (or your preferred name)
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site automatically

### Option 2: Deploy from Local Directory

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

## ⚙️ Environment Variables

If you need to set up environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add any required variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

## 🔗 Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to your project dashboard
   - Navigate to Settings → Domains
   - Add your custom domain

2. **Configure DNS**
   - Add the Vercel nameservers to your domain registrar
   - Or add the required DNS records (A, CNAME, etc.)

## 📧 Contact Form Integration

To make the contact form functional, you have several options:

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `src/app/contact/page.tsx`:
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Netlify Forms
1. Add `data-netlify="true"` to your form
2. Add a hidden input for Netlify
3. Deploy to Netlify instead of Vercel

### Option 3: Custom API Route
1. Create `src/app/api/contact/route.ts`
2. Handle form submission with your preferred email service
3. Update the form to use the API route

## 🔄 Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Rollback to previous versions if needed

## 📊 Performance Monitoring

Vercel provides built-in analytics:
- Page views and visitors
- Performance metrics
- Core Web Vitals
- Function execution times

## 🛠️ Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation

### Environment Variables
- Make sure all required env vars are set in Vercel
- Use `NEXT_PUBLIC_` prefix for client-side variables

### Custom Domain Issues
- Verify DNS settings
- Check domain verification status
- Ensure SSL certificate is provisioned

## 📞 Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Contact Vercel Support
- Review build logs for specific errors

---

Your website will be live at: `https://your-project-name.vercel.app`
