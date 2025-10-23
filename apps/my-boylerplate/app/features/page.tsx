import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Features() {
  const features = [
    {
      category: "Development",
      items: [
        {
          icon: "⚛️",
          title: "React 18 & Next.js 15",
          description:
            "Built with the latest React 18 features and Next.js 15 for optimal performance and developer experience.",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          icon: "📘",
          title: "TypeScript First",
          description:
            "Full TypeScript support with type safety throughout your entire application.",
          gradient: "from-blue-600 to-indigo-600",
        },
        {
          icon: "🎨",
          title: "Tailwind CSS",
          description:
            "Utility-first CSS framework for rapid UI development with custom design system.",
          gradient: "from-cyan-500 to-blue-500",
        },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        {
          icon: "🔄",
          title: "tRPC Integration",
          description:
            "End-to-end type-safe APIs with tRPC for seamless frontend-backend communication.",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          icon: "🗄️",
          title: "PostgreSQL & Drizzle ORM",
          description:
            "Powerful PostgreSQL database with Drizzle ORM for type-safe database queries.",
          gradient: "from-indigo-500 to-purple-500",
        },
        {
          icon: "🐳",
          title: "Docker Setup",
          description:
            "Pre-configured Docker setup for consistent development and deployment environments.",
          gradient: "from-blue-400 to-blue-600",
        },
      ],
    },
    {
      category: "Authentication & Security",
      items: [
        {
          icon: "🔐",
          title: "Better Auth",
          description:
            "Secure authentication system with support for multiple providers and strategies.",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          icon: "🛡️",
          title: "Security Best Practices",
          description:
            "Built-in security measures including CSRF protection, secure headers, and more.",
          gradient: "from-emerald-500 to-teal-500",
        },
        {
          icon: "👤",
          title: "User Management",
          description:
            "Complete user management system with roles, permissions, and profiles.",
          gradient: "from-teal-500 to-cyan-500",
        },
      ],
    },
    {
      category: "Payments & Business",
      items: [
        {
          icon: "💳",
          title: "Polar Integration",
          description:
            "Seamless payment processing with Polar for subscriptions and one-time payments.",
          gradient: "from-yellow-500 to-orange-500",
        },
        {
          icon: "📊",
          title: "Analytics Ready",
          description:
            "Built-in analytics tracking and monitoring for business insights.",
          gradient: "from-orange-500 to-red-500",
        },
        {
          icon: "💰",
          title: "Subscription Management",
          description:
            "Complete subscription lifecycle management with billing and invoicing.",
          gradient: "from-red-500 to-pink-500",
        },
      ],
    },
    {
      category: "Developer Experience",
      items: [
        {
          icon: "📚",
          title: "Fumadocs",
          description:
            "Beautiful documentation site with search, versioning, and MDX support.",
          gradient: "from-violet-500 to-purple-500",
        },
        {
          icon: "🐶",
          title: "Husky & Git Hooks",
          description:
            "Automated code quality checks with Husky pre-commit hooks.",
          gradient: "from-gray-600 to-gray-800",
        },
        {
          icon: "🏗️",
          title: "Turborepo",
          description:
            "Monorepo setup with Turborepo for optimal build performance and caching.",
          gradient: "from-red-500 to-rose-500",
        },
      ],
    },
    {
      category: "UI & UX",
      items: [
        {
          icon: "✨",
          title: "Beautiful Components",
          description:
            "Pre-built, customizable UI components with smooth animations and transitions.",
          gradient: "from-pink-500 to-rose-500",
        },
        {
          icon: "📱",
          title: "Fully Responsive",
          description:
            "Mobile-first design that looks perfect on all devices and screen sizes.",
          gradient: "from-rose-500 to-red-500",
        },
        {
          icon: "🌙",
          title: "Dark Mode",
          description:
            "Built-in dark mode support with smooth theme transitions.",
          gradient: "from-slate-600 to-slate-800",
        },
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 px-4 pt-20 pb-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 animate-fade-in font-bold text-5xl md:text-6xl">
              Powerful Features
            </h1>
            <p className="mx-auto max-w-3xl animate-slide-up text-xl opacity-90 md:text-2xl">
              Everything you need to build modern, scalable applications
            </p>
          </div>
        </section>

        {/* Features Grid */}
        {features.map((section, sectionIndex) => (
          <section
            className={`px-4 py-20 sm:px-6 lg:px-8 ${
              sectionIndex % 2 === 0
                ? "bg-white dark:bg-gray-900"
                : "bg-gray-50 dark:bg-gray-800"
            }`}
            key={sectionIndex}
          >
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-12 text-center font-bold text-3xl text-gray-900 md:text-4xl dark:text-white">
                {section.category}
              </h2>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {section.items.map((feature, index) => (
                  <div
                    className="hover:-translate-y-2 transform rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
                    key={index}
                  >
                    <div
                      className={`mb-4 bg-gradient-to-r text-6xl ${feature.gradient} bg-clip-text text-transparent`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="mb-3 font-bold text-2xl text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-6 font-bold text-4xl md:text-5xl">
              Ready to Experience These Features?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Start building with our powerful boilerplate today
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="inline-block transform rounded-full bg-white px-8 py-4 font-semibold text-lg text-purple-600 transition hover:scale-105 hover:shadow-2xl"
                href="/contact"
              >
                Get Started Free
              </Link>
              <Link
                className="inline-block rounded-full border-2 border-white px-8 py-4 font-semibold text-lg text-white transition hover:bg-white/10"
                href="/pricing"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
