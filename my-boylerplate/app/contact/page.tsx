"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    interest: "general"
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@boilerplate.dev",
      link: "mailto:hello@boilerplate.dev",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💬",
      title: "Live Chat",
      value: "Available 24/7",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🐦",
      title: "Twitter",
      value: "@boilerplate",
      link: "https://twitter.com",
      gradient: "from-blue-400 to-blue-600"
    }
  ];

  const reasons = [
    {
      icon: "🚀",
      title: "Start a Project",
      description: "Get started with our boilerplate and build your next amazing app"
    },
    {
      icon: "💼",
      title: "Enterprise Sales",
      description: "Discuss enterprise features and custom solutions for your organization"
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "Explore partnership opportunities and collaborations"
    },
    {
      icon: "❓",
      title: "General Inquiry",
      description: "Have a question? We're here to help with anything you need"
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Special pricing for students and educational institutions"
    },
    {
      icon: "🐛",
      title: "Report Issue",
      description: "Found a bug? Let us know and we'll fix it right away"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              Have a question or want to work together? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className={`text-5xl mb-3 bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {method.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send us a Message
                </h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200">
                      ✅ Thank you! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      I&apos;m interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="project">Starting a Project</option>
                      <option value="enterprise">Enterprise Sales</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="education">Education Pricing</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent transition resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Reasons to Contact */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why Reach Out?
                </h2>
                <div className="space-y-6">
                  {reasons.map((reason, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                    >
                      <div className="flex items-start">
                        <div className="text-4xl mr-4 flex-shrink-0">{reason.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {reason.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              Quick Answers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
              Before reaching out, check if your question is answered here
            </p>
            
            <div className="space-y-4">
              {[
                {
                  q: "How quickly will I get a response?",
                  a: "We typically respond within 24 hours on business days. Enterprise customers get priority support."
                },
                {
                  q: "Do you offer technical support?",
                  a: "Yes! All paid plans include technical support. Free plan users can get help through our community forum."
                },
                {
                  q: "Can I schedule a demo?",
                  a: "Absolutely! Select 'Enterprise Sales' in the form above and we'll set up a personalized demo."
                },
                {
                  q: "Do you have a community?",
                  a: "Yes! Join our Discord server with thousands of developers building with our platform."
                }
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition group"
                >
                  <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.q}</span>
                    <span className="text-purple-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Location/Office Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Our Offices
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  city: "San Francisco",
                  address: "123 Tech Street\nSan Francisco, CA 94102\nUnited States",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  city: "London",
                  address: "456 Innovation Ave\nLondon, EC2A 4BX\nUnited Kingdom",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  city: "Singapore",
                  address: "789 Marina Boulevard\nSingapore 018956\nSingapore",
                  gradient: "from-green-500 to-emerald-500"
                }
              ].map((office, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center"
                >
                  <div className={`text-5xl mb-4 bg-gradient-to-r ${office.gradient} bg-clip-text text-transparent`}>
                    📍
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {office.city}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {office.address}
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with our boilerplate today and ship your product faster
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
