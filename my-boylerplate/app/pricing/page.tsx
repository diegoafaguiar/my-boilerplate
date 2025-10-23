import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out and small projects",
      features: [
        "Next.js & React 18 setup",
        "Basic authentication",
        "PostgreSQL database",
        "Community support",
        "Basic documentation",
        "1 project",
      ],
      cta: "Get Started",
      highlighted: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      description: "Best for professionals and growing teams",
      features: [
        "Everything in Starter",
        "Advanced authentication",
        "Payment integration",
        "Priority support",
        "Advanced documentation",
        "Unlimited projects",
        "Custom branding",
        "Analytics dashboard",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations with specific needs",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Advanced security",
        "Unlimited team members",
        "Custom deployment",
        "Training & onboarding",
        "White-label solution",
      ],
      cta: "Contact Sales",
      highlighted: false,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Pro plan comes with a 14-day free trial. No credit card required to start."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely! You can cancel your subscription at any time. No questions asked."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for non-profit organizations and educational institutions. Contact us for details."
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Choose the perfect plan for your needs. Always flexible, always fair.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl transform scale-105 z-10' 
                      : 'bg-gray-50 dark:bg-gray-800 shadow-lg'
                  } transition hover:shadow-2xl hover:scale-105`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className={`text-5xl font-bold ${
                        plan.highlighted ? 'text-white' : `bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ml-2 ${
                        plan.highlighted ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        /{plan.period}
                      </span>
                    </div>
                    <p className={`${
                      plan.highlighted ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg 
                          className={`h-6 w-6 mr-3 flex-shrink-0 ${
                            plan.highlighted ? 'text-white' : 'text-green-500'
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`${
                          plan.highlighted ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    className={`block w-full text-center py-4 rounded-full font-semibold transition transform hover:scale-105 ${
                      plan.highlighted 
                        ? 'bg-white text-purple-600 hover:shadow-xl' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Compare Plans
            </h2>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Feature</th>
                      <th className="px-6 py-4 text-center">Starter</th>
                      <th className="px-6 py-4 text-center">Pro</th>
                      <th className="px-6 py-4 text-center">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      ["Projects", "1", "Unlimited", "Unlimited"],
                      ["Team Members", "1", "5", "Unlimited"],
                      ["Support", "Community", "Priority", "Dedicated"],
                      ["API Access", "❌", "✅", "✅"],
                      ["Custom Branding", "❌", "✅", "✅"],
                      ["SLA", "❌", "❌", "99.9%"],
                      ["Training", "❌", "❌", "✅"],
                      ["White-label", "❌", "❌", "✅"]
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row[0]}</td>
                        <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">{row[1]}</td>
                        <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">{row[2]}</td>
                        <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
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
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is here to help you find the perfect plan
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
            >
              Contact Sales
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
