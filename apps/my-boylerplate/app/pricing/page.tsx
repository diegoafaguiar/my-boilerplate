import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

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
      gradient: "from-blue-500 to-cyan-500",
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
      gradient: "from-purple-600 to-pink-600",
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
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! Pro plan comes with a 14-day free trial. No credit card required to start.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely! You can cancel your subscription at any time. No questions asked.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "Yes, we offer special pricing for non-profit organizations and educational institutions. Contact us for details.",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-4 pt-20 pb-16 sm:px-6 lg:px-8 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 animate-fade-in bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text font-bold text-5xl text-transparent md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto max-w-3xl animate-slide-up text-gray-600 text-xl md:text-2xl dark:text-gray-300">
              Choose the perfect plan for your needs. Always flexible, always
              fair.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  className={`relative rounded-2xl p-8 ${
                    plan.highlighted
                      ? "z-10 scale-105 transform bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl"
                      : "bg-gray-50 shadow-lg dark:bg-gray-800"
                  } transition hover:scale-105 hover:shadow-2xl`}
                  key={index}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 right-0 rounded-tr-lg rounded-bl-lg bg-yellow-400 px-4 py-1 font-bold text-gray-900 text-sm">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8 text-center">
                    <h3
                      className={`mb-2 font-bold text-2xl ${
                        plan.highlighted
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span
                        className={`font-bold text-5xl ${
                          plan.highlighted
                            ? "text-white"
                            : `bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`ml-2 text-lg ${
                          plan.highlighted
                            ? "text-white/80"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        /{plan.period}
                      </span>
                    </div>
                    <p
                      className={`${
                        plan.highlighted
                          ? "text-white/90"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li className="flex items-start" key={featureIndex}>
                        <svg
                          className={`mr-3 h-6 w-6 flex-shrink-0 ${
                            plan.highlighted ? "text-white" : "text-green-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        </svg>
                        <span
                          className={`${
                            plan.highlighted
                              ? "text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    className={`block w-full transform rounded-full py-4 text-center font-semibold transition hover:scale-105 ${
                      plan.highlighted
                        ? "bg-white text-purple-600 hover:shadow-xl"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
                    }`}
                    href="/contact"
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center font-bold text-4xl text-gray-900 dark:text-white">
              Compare Plans
            </h2>

            <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-900">
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
                      ["White-label", "❌", "❌", "✅"],
                    ].map((row, index) => (
                      <tr
                        className="transition hover:bg-gray-50 dark:hover:bg-gray-800"
                        key={index}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                          {row[0]}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">
                          {row[1]}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">
                          {row[2]}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">
                          {row[3]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-bold text-4xl text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  className="rounded-xl bg-gray-50 p-6 transition hover:shadow-lg dark:bg-gray-800"
                  key={index}
                >
                  <h3 className="mb-3 font-bold text-gray-900 text-xl dark:text-white">
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
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-6 font-bold text-4xl md:text-5xl">
              Still Have Questions?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Our team is here to help you find the perfect plan
            </p>
            <Link
              className="inline-block transform rounded-full bg-white px-8 py-4 font-semibold text-lg text-purple-600 transition hover:scale-105 hover:shadow-2xl"
              href="/contact"
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
