# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1. Navigate to Project
```bash
cd my-boylerplate
```

### 2. Start Development Server
```bash
pnpm dev
```

### 3. Open Browser
Visit: **http://localhost:3000**

---

## 🎯 What You'll See

### Page Routes
- **/** - Home page (Hero + Features preview)
- **/features** - Full feature showcase
- **/pricing** - Pricing plans & comparison
- **/about** - Company story & team
- **/contact** - Contact form & info

---

## 🛠️ Common Commands

```bash
# Development
pnpm dev              # Start dev server (localhost:3000)

# Production
pnpm build            # Create production build
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
```

---

## 📝 First Customizations

### 1. Update Branding
**File**: `components/Navigation.tsx` and `components/Footer.tsx`
```tsx
// Change "Boilerplate" to your brand name
<Link href="/" className="text-2xl font-bold...">
  YourBrand  {/* Change this */}
</Link>
```

### 2. Update Colors
**File**: `tailwind.config.ts`
```ts
// Modify the colors in the extend section
colors: {
  primary: '#your-color',
  // Add your brand colors
}
```

### 3. Update Content
**Files**: All page files in `app/*/page.tsx`
- Replace placeholder text
- Update feature descriptions
- Modify pricing tiers
- Add your team info

### 4. Add Logo
**Steps**:
1. Add logo to `/public/logo.png`
2. Update Navigation.tsx:
```tsx
<Image src="/logo.png" alt="Logo" width={40} height={40} />
```

---

## 🎨 Styling Guide

### Using Gradients
Pre-defined gradients in `globals.css`:
```tsx
className="bg-gradient-to-r from-purple-600 to-pink-600"
```

Available gradients:
- `gradient-primary` - Purple to Violet
- `gradient-secondary` - Pink to Red
- `gradient-tertiary` - Blue to Cyan
- `gradient-quaternary` - Green to Teal
- `gradient-quinary` - Pink to Yellow

### Adding Animations
```tsx
className="animate-fade-in"      // Fade in
className="animate-slide-up"     // Slide from bottom
className="animate-bounce-slow"  // Gentle bounce
```

---

## 🔧 Backend Integration

### Connect Contact Form
**File**: `app/contact/page.tsx`

Current:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
  // Add your API call here
};
```

With API:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## 📱 Testing Responsive Design

```bash
# Desktop
http://localhost:3000

# Mobile (use browser dev tools)
1. Open Chrome/Firefox DevTools (F12)
2. Toggle device toolbar
3. Select mobile device
4. Test navigation menu
```

---

## 🚢 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Build command: `pnpm build`
4. Publish directory: `.next`

### Docker
```bash
# Build
docker build -t my-app .

# Run
docker run -p 3000:3000 my-app
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process
lsof -ti:3000 | xargs kill

# Or use different port
pnpm dev -- -p 3001
```

### Build Errors
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
pnpm install
pnpm build
```

### Type Errors
```bash
# Restart TypeScript server
# In VS Code: Cmd/Ctrl + Shift + P
# Type: "TypeScript: Restart TS Server"
```

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 💡 Pro Tips

1. **Use TypeScript**: Type everything for better DX
2. **Component Library**: Consider adding shadcn/ui or Radix UI
3. **State Management**: Add Zustand or Jotai if needed
4. **Forms**: Use React Hook Form for complex forms
5. **Icons**: Replace emoji with Lucide React icons
6. **Images**: Use Next.js Image component for optimization
7. **SEO**: Add metadata to each page
8. **Analytics**: Integrate Google Analytics or Plausible

---

## ✅ Checklist Before Production

- [ ] Replace all placeholder content
- [ ] Add real images/logos
- [ ] Configure environment variables
- [ ] Set up analytics
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Run `pnpm build` successfully
- [ ] Check Core Web Vitals
- [ ] Add proper meta tags
- [ ] Set up error tracking (Sentry)
- [ ] Configure domain
- [ ] Test contact form submission
- [ ] Add sitemap.xml
- [ ] Add robots.txt

---

**Need Help?**
Check the README.md and SUMMARY.md for detailed information.

Happy Building! 🎉
