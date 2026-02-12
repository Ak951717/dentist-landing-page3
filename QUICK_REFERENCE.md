# Quick Reference Card

## 🚀 Getting Started (5 minutes)

```bash
# 1. Install dependencies
pnpm install

# 2. Start dev server
pnpm dev

# 3. Open in browser
# http://localhost:3000
```

## ✏️ Essential Customizations

### 1. Business Info (`/lib/constants.ts`)
```typescript
BUSINESS_NAME = "Your Clinic"
BUSINESS_PHONE = "+1-XXX-XXX-XXXX"
BUSINESS_EMAIL = "your@email.com"
BUSINESS_ADDRESS = "123 Your St, City, State"
```

### 2. Page Title (`app/layout.tsx`)
```typescript
title: 'Your Clinic - Book Appointment',
description: 'Your clinic description...'
```

### 3. Hero Headline (`components/hero.tsx`)
```typescript
title: "Your main headline here"
subtitle: "Your subheading here"
```

### 4. Services (`components/services.tsx`)
Edit the services array with your services

### 5. Testimonials (`components/testimonials.tsx`)
Replace with real patient reviews

### 6. Location (`components/location.tsx`)
Update address, phone, hours, Google Maps URL

## 🎨 Design Changes

### Colors (`app/globals.css`)
```css
:root {
  --primary: 200 100% 38%;      /* Brand blue */
  --accent: 10 80% 55%;         /* Accent orange */
  --background: 0 0% 98%;       /* Page background */
  --foreground: 0 0% 15%;       /* Text color */
}
```

### Fonts (`app/layout.tsx`)
- Headings: Playfair Display
- Body: Geist
- Change via `next/font/google`

## 📁 Key Files

| File | Purpose | Lines |
|------|---------|-------|
| `/app/page.tsx` | Main page composition | 22 |
| `/app/layout.tsx` | SEO metadata, fonts | 108 |
| `/components/hero.tsx` | Hero section | 109 |
| `/components/appointment-form.tsx` | Contact form | 276 |
| `/lib/constants.ts` | Business info | 89 |
| `app/globals.css` | Design tokens | 100+ |

## 🔧 Common Tasks

### Add Google Analytics
```typescript
// app/layout.tsx - Add Script in <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

### Change Hero Image/Shape
```tsx
// components/hero.tsx - Replace visual element
<motion.div className="...">
  {/* Replace shape or add Image here */}
</motion.div>
```

### Customize Form Fields
```tsx
// components/appointment-form.tsx
// Add new field to schema and form
const appointmentSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  // Add your field here
})
```

### Update API Endpoint
```typescript
// app/api/appointment/route.ts
export async function POST(request: NextRequest) {
  // Add email integration here
}
```

## 🚀 Deployment

```bash
# Build for production
pnpm build

# Test production build
pnpm start

# Deploy to Vercel
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import repository
# 4. Deploy!
```

## 📊 Testing Checklist

- [ ] Run `pnpm dev` works
- [ ] All sections visible and styled
- [ ] Form submits without errors
- [ ] Mobile responsive (test on phone)
- [ ] Links work (booking, phone, email)
- [ ] Google Maps loads
- [ ] Animations smooth
- [ ] Navigation works on mobile
- [ ] No console errors

## 🔍 Performance Check

```bash
# Build and analyze
pnpm build

# Check bundle size
# Should be:
# - HTML: < 50KB
# - CSS: < 30KB
# - JS: < 200KB
```

## ♿ Accessibility Check

- [ ] Can navigate with Tab key
- [ ] Focus ring visible
- [ ] Form labels clear
- [ ] Contrast adequate (WebAIM)
- [ ] No animations on prefers-reduce-motion

## 📱 Device Testing

Test on:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile responsiveness (DevTools)

## 🆘 Quick Fixes

**Form not submitting?**
- Check browser console (F12)
- Verify `/api/appointment` exists
- Check form validation

**Styling looks wrong?**
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `pnpm dev`
- Check Tailwind config

**Build fails?**
- Delete `.next`: `rm -rf .next`
- Reinstall: `pnpm install`
- Check TypeScript errors: `pnpm build`

**Deployment issues?**
- Check Vercel logs
- Verify environment variables set
- Test with `pnpm build && pnpm start`

## 📚 Documentation

- **README.md** - Full documentation
- **SETUP.md** - Detailed setup guide
- **ACCESSIBILITY.md** - a11y guidelines
- **PERFORMANCE.md** - Speed optimization
- **PROJECT_SUMMARY.md** - Project overview

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel Deployment](https://vercel.com)
- [TypeScript](https://typescriptlang.org)

## 💡 Pro Tips

1. Use `/lib/constants.ts` for all business info
2. Keep components small and reusable
3. Test on real devices, not just browser
4. Monitor Core Web Vitals after launch
5. Back up your code in Git/GitHub
6. Use Vercel Analytics for monitoring
7. Update dependencies regularly
8. Document your customizations

## 🎯 Next Steps

1. **Today**: Customize constants, test locally
2. **Tomorrow**: Update content, customize design
3. **This week**: Test thoroughly, set up deployment
4. **Next week**: Deploy, monitor analytics
5. **Ongoing**: Update testimonials, track metrics

---

**Need more help?** Check the relevant documentation file above! 📖
