import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-4 pt-32 pb-20 sm:px-6 lg:px-8 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
          <div className="mx-auto max-w-7xl">
            <div className="animate-fade-in text-center">
              <h1 className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text font-bold text-5xl text-transparent md:text-7xl">
                Build Amazing Apps
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-gray-600 text-xl md:text-2xl dark:text-gray-300">
                The ultimate boilerplate for your next project. Modern, fast,
                and production-ready with Next.js, React 18, and more.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  className="transform rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-lg text-white transition hover:scale-105 hover:shadow-2xl"
                  href="/contact"
                >
                  Get Started Free
                </Link>
                <Link
                  className="rounded-full border-2 border-purple-600 px-8 py-4 font-semibold text-lg text-purple-600 transition hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20"
                  href="/features"
                >
                  View Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div className="animate-slide-up">
                <div className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold text-5xl text-transparent">
                  50K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Active Users
                </div>
              </div>
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="mb-2 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text font-bold text-5xl text-transparent">
                  99.9%
                </div>
                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-5xl text-transparent">
                  4.9/5
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  User Rating
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-bold text-4xl text-gray-900 md:text-5xl dark:text-white">
                Everything You Need
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 text-xl dark:text-gray-400">
                Packed with powerful features to help you build faster and
                better
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description:
                    "Optimized performance with Next.js 15 and React 18",
                },
                {
                  icon: "🔒",
                  title: "Secure by Default",
                  description:
                    "Built-in authentication and security best practices",
                },
                {
                  icon: "🎨",
                  title: "Beautiful UI",
                  description: "Modern design with Tailwind CSS and animations",
                },
                {
                  icon: "📱",
                  title: "Responsive",
                  description: "Perfect on all devices, from mobile to desktop",
                },
                {
                  icon: "🚀",
                  title: "Production Ready",
                  description: "Deploy to production with confidence",
                },
                {
                  icon: "🛠️",
                  title: "Developer Friendly",
                  description: "TypeScript, ESLint, and modern tooling",
                },
              ].map((feature, index) => (
                <div
                  className="hover:-translate-y-2 transform rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl dark:bg-gray-900"
                  key={index}
                >
                  <div className="mb-4 text-5xl">{feature.icon}</div>
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

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-6 font-bold text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Join thousands of developers building amazing applications
            </p>
            <Link
              className="inline-block transform rounded-full bg-white px-8 py-4 font-semibold text-lg text-purple-600 transition hover:scale-105 hover:shadow-2xl"
              href="/contact"
            >
              Start Building Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
