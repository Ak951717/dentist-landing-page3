# Setup Guide - Bright Smile Dental Landing Page

This guide will help you customize and deploy your dental clinic landing page.

## 🔧 Quick Setup (5 minutes)

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000` to see your landing page.

## ✏️ Customization

### Step 1: Update Constants

Edit `/lib/constants.ts` with your clinic information:

```typescript
export const BUSINESS_NAME = 'Your Clinic Name'
export const BUSINESS_PHONE = '+1-XXX-XXX-XXXX'
export const BUSINESS_EMAIL = 'your@clinic.com'
export const BUSINESS_ADDRESS = '123 Your Address, City, State'
```

### Step 2: Update SEO Metadata

Edit `app/layout.tsx` - Update metadata object:

```typescript
export const metadata: Metadata = {
  title: 'Your Clinic - Book Your Appointment',
  description: 'Your clinic description here',
  // ... other metadata
}
```

And JSON-LD schema with your clinic details.

### Step 3: Customize Content

#### Hero Section (`components/hero.tsx`)
- Update headline and subheading
- Modify statistics
- Change CTA button text

#### Services (`components/services.tsx`)
- Edit service titles and descriptions
- Modify service icons (from Lucide)

#### Testimonials (`components/testimonials.tsx`)
- Replace with real patient reviews
- Update ratings and names

#### Offer (`components/offer.tsx`)
- Customize special offer details
- Update benefits list

#### Location (`components/location.tsx`)
- Update address and contact info
- Replace Google Maps embed URL
- Update office hours

### Step 4: Design Customization

Edit `app/globals.css` to customize colors:

```css
:root {
  --primary: 200 100% 38%;        /* Brand blue */
  --accent: 10 80% 55%;           /* Accent color */
  --background: 0 0% 98%;         /* Page background */
  --foreground: 0 0% 15%;         /* Text color */
  /* ... other tokens */
}
```

## 📧 Email Integration Setup

### Option A: Using SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=your_api_key
   SENDGRID_FROM_EMAIL=noreply@yoursite.com
   ```

4. Update `app/api/appointment/route.ts`:
   ```typescript
   import sgMail from '@sendgrid/mail'

   sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

   // In POST handler, after validation:
   await sgMail.send({
     to: process.env.SENDGRID_FROM_EMAIL,
     from: process.env.SENDGRID_FROM_EMAIL,
     subject: `New Appointment Request from ${data.name}`,
     html: `<h2>New Appointment Request</h2>...`,
   })
   ```

5. Install dependency:
   ```bash
   pnpm add @sendgrid/mail
   ```

### Option B: Using Mailgun

1. Sign up at [mailgun.com](https://mailgun.com)
2. Add to `.env.local`:
   ```
   MAILGUN_API_KEY=your_api_key
   MAILGUN_DOMAIN=your_domain.mailgun.org
   ```

3. Update API route with Mailgun integration

## 🚀 Deployment to Vercel

### Simple Deployment

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and deploy!

### With Environment Variables

1. In Vercel Dashboard, go to Settings → Environment Variables
2. Add your `.env.local` variables:
   - `SENDGRID_API_KEY`
   - Other API keys as needed

3. Redeploy for changes to take effect

## 📊 Analytics Setup

### Google Analytics

1. Create property at [analytics.google.com](https://analytics.google.com)
2. Get your measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. Update `app/layout.tsx` to include analytics script

## 🔍 SEO Checklist

- [ ] Update page title and description
- [ ] Update JSON-LD schema with correct address, phone, hours
- [ ] Verify Google Maps URL is correct
- [ ] Submit sitemap to Google Search Console
- [ ] Add robots.txt verification
- [ ] Test mobile responsiveness
- [ ] Check Core Web Vitals (Lighthouse)

## 🎨 Brand Customization

### Colors
Edit design tokens in `app/globals.css`:
- Primary color (brand color)
- Accent color (highlights)
- Background and text colors

### Fonts
Currently uses:
- **Headings**: Playfair Display (serif)
- **Body**: Geist (sans-serif)

To change, edit `app/layout.tsx` and `tailwind.config.ts`

### Logo
1. Replace logo in header (`components/header.tsx`)
2. Update the "BS" placeholder with your logo
3. Add logo image to `public/` folder

## 🧪 Testing Checklist

### Mobile Testing
- [ ] Test on iPhone/iPad
- [ ] Test on Android devices
- [ ] Check form inputs
- [ ] Verify touch interactions

### Desktop Testing
- [ ] Test on Chrome, Firefox, Safari
- [ ] Check animations smooth
- [ ] Verify hover states
- [ ] Test keyboard navigation

### Forms
- [ ] Test required field validation
- [ ] Test email validation
- [ ] Test phone validation
- [ ] Test date picker
- [ ] Test form submission

### Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Verify images load quickly
- [ ] Test on slow 3G network

## 🛠 Troubleshooting

### Form Not Submitting
- Check console for errors
- Verify API route exists at `/api/appointment`
- Check network tab in DevTools
- Verify form validation passes

### Animations Choppy
- Check `prefers-reduced-motion` setting
- Verify Framer Motion is installed
- Try reducing animation complexity

### Mobile Layout Issues
- Check responsive classes (md:, lg:)
- Verify viewport meta tag
- Test with DevTools device emulation

### Build Errors
- Delete `.next` folder: `rm -rf .next`
- Clear cache: `pnpm store prune`
- Reinstall dependencies: `pnpm install`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Framer Motion Guide](https://www.framer.com/motion)

## 🆘 Need Help?

- Check README.md for technical overview
- Review component files for implementation details
- Check browser console for error messages
- Test with `pnpm dev` before deploying

---

Happy customizing! 🦷✨
