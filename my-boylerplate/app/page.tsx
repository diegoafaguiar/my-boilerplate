import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Build Amazing Apps
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                The ultimate boilerplate for your next project. Modern, fast, and production-ready with Next.js, React 18, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
                >
                  Get Started Free
                </Link>
                <Link 
                  href="/features" 
                  className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition"
                >
                  View Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-slide-up">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <div className="text-gray-600 dark:text-gray-400">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Everything You Need
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Packed with powerful features to help you build faster and better
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "Optimized performance with Next.js 15 and React 18"
                },
                {
                  icon: "🔒",
                  title: "Secure by Default",
                  description: "Built-in authentication and security best practices"
                },
                {
                  icon: "🎨",
                  title: "Beautiful UI",
                  description: "Modern design with Tailwind CSS and animations"
                },
                {
                  icon: "📱",
                  title: "Responsive",
                  description: "Perfect on all devices, from mobile to desktop"
                },
                {
                  icon: "🚀",
                  title: "Production Ready",
                  description: "Deploy to production with confidence"
                },
                {
                  icon: "🛠️",
                  title: "Developer Friendly",
                  description: "TypeScript, ESLint, and modern tooling"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers building amazing applications
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
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
