# Bright Smile Dental - Landing Page

A production-ready, high-converting dental clinic landing page built with modern web technologies.

## 🎯 Features

- **SEO Optimized** - Comprehensive meta tags, JSON-LD schema, robots.txt, and sitemap
- **High Performance** - Lighthouse-friendly Core Web Vitals, optimized images, and efficient code splitting
- **Accessible** - WCAG-compliant with semantic HTML and ARIA labels
- **Responsive Design** - Mobile-first approach with smooth responsiveness across all devices
- **Professional Animations** - Subtle Framer Motion animations that respect user preferences
- **Form Validation** - Client-side validation with Zod and react-hook-form
- **Modern Styling** - Tailwind CSS with semantic design tokens

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📋 Project Structure

```
app/
├── layout.tsx              # Root layout with SEO metadata & JSON-LD
├── page.tsx                # Main landing page
├── globals.css             # Global styles & design tokens
└── api/
    └── appointment/        # Appointment form API endpoint
components/
├── header.tsx              # Sticky header with CTA
├── hero.tsx                # Hero section with animations
├── services.tsx            # Services grid (6 services)
├── testimonials.tsx        # Patient testimonials
├── appointment-form.tsx    # Contact/appointment form
├── offer.tsx               # Special offer section
├── location.tsx            # Location & contact info with map
└── footer.tsx              # Footer with links
public/
├── robots.txt              # SEO robots configuration
└── sitemap.xml             # XML sitemap for search engines
```

## 🚀 Getting Started

### Installation

Using shadcn CLI (Recommended):

```bash
npx shadcn-init@latest
```

Or clone and install manually:

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Building

```bash
pnpm build
pnpm start
```

## 📝 Content to Customize

Key areas to personalize for your clinic:

### In `app/layout.tsx`:
- `title` - Page title
- `description` - Meta description
- `openGraph` - Social sharing metadata
- JSON-LD schema (address, phone, hours, etc.)

### In `components/hero.tsx`:
- Headline and subheading
- Call-to-action text
- Statistics/badges

### In `components/appointment-form.tsx`:
- Form fields and validation rules
- Success message

### In `components/services.tsx`:
- Service titles and descriptions
- Service icons (from Lucide)

### In `components/testimonials.tsx`:
- Patient testimonials (replace with real reviews)
- Ratings and feedback

### In `components/location.tsx`:
- Clinic address
- Hours of operation
- Google Maps embed URL
- Contact information

### In `components/footer.tsx`:
- Links and social media
- Legal pages (Privacy, Terms)

## 🎨 Design Tokens

The design system uses semantic color tokens defined in `app/globals.css`:

**Primary Colors:**
- `--primary` - Brand blue (#0066E6)
- `--accent` - Accent orange (#FF6D2E)

**Neutrals:**
- `--background` - Page background (#F5F7FA)
- `--foreground` - Text color (#1A2332)

To customize colors, edit the CSS variables in the `:root` section of `globals.css`.

## 📱 Responsive Breakpoints

- **Mobile**: Default / small screens
- **Tablet**: `md:` (768px)
- **Desktop**: `lg:` (1024px)

## ♿ Accessibility Features

- Semantic HTML structure (H1, H2, H3 hierarchy)
- ARIA labels and descriptions
- Keyboard navigation support
- Color contrast ratios meeting WCAG AA standards
- Form validation with error messages
- Screen reader friendly content

## 🔒 SEO & Performance

### SEO Checklist:
- ✅ Proper meta tags (title, description, keywords)
- ✅ Open Graph & Twitter cards
- ✅ JSON-LD LocalBusiness schema
- ✅ robots.txt & sitemap.xml
- ✅ Semantic HTML
- ✅ Image optimization (next/image)
- ✅ Mobile-friendly responsive design

### Core Web Vitals:
- **LCP** (Largest Contentful Paint) - < 2.5s
- **FID** (First Input Delay) - < 100ms (via INP)
- **CLS** (Cumulative Layout Shift) - < 0.1

## 📧 Form Handling

The appointment form submits to `/api/appointment` endpoint. Currently, it logs submissions to the console. 

To integrate with an email service or CRM:

1. Update `components/appointment-form.tsx` with your email service (SendGrid, Mailgun, etc.)
2. Modify `app/api/appointment/route.ts` to handle the integration

## 🚀 Deployment

### Deploy to Vercel

```bash
# Login to Vercel
vercel login

# Deploy
vercel
```

### Environment Variables

Create a `.env.local` file for any integrations:

```
# Example for email service
SENDGRID_API_KEY=your_key_here
```

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)

## 📄 License

Commercial use - Replace branding and content as needed.

---

Built with ❤️ for high-converting dental clinic landing pages.
