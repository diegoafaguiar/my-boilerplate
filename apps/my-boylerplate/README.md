# My Boilerplate - Beautiful Landing Pages Collection

A stunning collection of 5 modern landing pages built with Next.js 15, React 18, TypeScript, and Tailwind CSS.

## 🎨 Landing Pages

This boilerplate includes 5 beautifully designed, fully responsive landing pages:

1. **Home Page** (`/`) - Hero landing page with features preview, stats, and CTA
2. **Features Page** (`/features`) - Comprehensive feature showcase organized by category
3. **Pricing Page** (`/pricing`) - Pricing plans, comparison table, and FAQs
4. **About Page** (`/about`) - Company story, team, values, and timeline
5. **Contact Page** (`/contact`) - Contact form, methods, and office locations

## ✨ Features

- 🚀 **Next.js 15** - Latest version with App Router
- ⚛️ **React 18** - Modern React features
- 📘 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling with custom animations
- 📱 **Fully Responsive** - Mobile-first design
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- ✨ **Beautiful Animations** - Smooth transitions and hover effects
- 🎯 **SEO Optimized** - Proper meta tags and structure
- 🔥 **Modern UI/UX** - Clean, professional design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

Dependencies are already installed! Just run:

```bash
pnpm dev
```

Or if using npm:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
my-boylerplate/
├── app/
│   ├── page.tsx          # Home page
│   ├── features/
│   │   └── page.tsx      # Features page
│   ├── pricing/
│   │   └── page.tsx      # Pricing page
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── contact/
│   │   └── page.tsx      # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Header navigation
│   └── Footer.tsx        # Footer component
└── public/               # Static assets
```

## 🎨 Customization

### Colors & Gradients

The project uses beautiful gradient combinations defined in `globals.css`:

- `.gradient-primary` - Purple to violet
- `.gradient-secondary` - Pink to red
- `.gradient-tertiary` - Blue to cyan
- `.gradient-quaternary` - Green to teal
- `.gradient-quinary` - Pink to yellow

### Animations

Custom animations are configured in `tailwind.config.ts`:

- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up from bottom
- `animate-slide-in-left` - Slide from left
- `animate-slide-in-right` - Slide from right
- `animate-bounce-slow` - Slow bounce effect

### Typography

Edit the `layout.tsx` file to change fonts. Currently using system fonts for optimal performance.

## 🛠️ Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 📝 Pages Overview

### Home Page (/)
- Hero section with gradient background
- Statistics showcase
- Feature preview cards
- Call-to-action sections

### Features Page (/features)
- Categorized feature grid
- Development, Backend, Security, Payments, Developer Experience, and UI/UX sections
- 18+ detailed feature cards
- Interactive hover effects

### Pricing Page (/pricing)
- Three pricing tiers (Starter, Pro, Enterprise)
- Feature comparison table
- FAQ section
- Highlighted "Most Popular" plan

### About Page (/about)
- Company story
- Core values showcase
- Team member profiles
- Interactive timeline
- Join the team CTA

### Contact Page (/contact)
- Contact form with validation
- Multiple contact methods
- Common reasons to reach out
- Quick FAQ section
- Office locations

## 🎯 Next Steps

1. **Add Your Content**: Replace placeholder text with your actual content
2. **Customize Colors**: Update the color scheme in `tailwind.config.ts`
3. **Add Images**: Add your images to the `public` folder
4. **Connect Backend**: Hook up the contact form to your backend API
5. **Add Analytics**: Integrate Google Analytics or similar
6. **Deploy**: Deploy to Vercel, Netlify, or your preferred platform

## 🚢 Deployment

This is a standard Next.js application and can be deployed to:

- **Vercel** (Recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Docker**: Build and deploy as a container
- **Node Server**: Run `pnpm build && pnpm start`

## 📦 Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji (can be replaced with icon libraries like Lucide React)
- **Animations**: CSS animations + Framer Motion ready

## 🤝 Contributing

This is a boilerplate project. Feel free to customize it for your needs!

## 📄 License

MIT License - feel free to use this for personal or commercial projects.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for optimal performance and developer experience.

---

Made with ❤️ using Next.js and React
