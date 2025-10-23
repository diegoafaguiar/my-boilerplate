"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    interest: "general",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@boilerplate.dev",
      link: "mailto:hello@boilerplate.dev",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💬",
      title: "Live Chat",
      value: "Available 24/7",
      link: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: "🐦",
      title: "Twitter",
      value: "@boilerplate",
      link: "https://twitter.com",
      gradient: "from-blue-400 to-blue-600",
    },
  ];

  const reasons = [
    {
      icon: "🚀",
      title: "Start a Project",
      description:
        "Get started with our boilerplate and build your next amazing app",
    },
    {
      icon: "💼",
      title: "Enterprise Sales",
      description:
        "Discuss enterprise features and custom solutions for your organization",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "Explore partnership opportunities and collaborations",
    },
    {
      icon: "❓",
      title: "General Inquiry",
      description: "Have a question? We're here to help with anything you need",
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Special pricing for students and educational institutions",
    },
    {
      icon: "🐛",
      title: "Report Issue",
      description: "Found a bug? Let us know and we'll fix it right away",
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
              Get in Touch
            </h1>
            <p className="mx-auto max-w-3xl animate-slide-up text-xl opacity-90 md:text-2xl">
              Have a question or want to work together? We&apos;d love to hear
              from you.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, index) => (
                <a
                  className="hover:-translate-y-2 transform rounded-xl bg-gray-50 p-6 shadow-lg transition hover:shadow-2xl dark:bg-gray-800"
                  href={method.link}
                  key={index}
                >
                  <div
                    className={`mb-3 bg-gradient-to-r text-5xl ${method.gradient} bg-clip-text text-transparent`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="mb-1 font-bold text-gray-900 text-lg dark:text-white">
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
        <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900">
                <h2 className="mb-6 font-bold text-3xl text-gray-900 dark:text-white">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                    <p className="text-green-800 dark:text-green-200">
                      ✅ Thank you! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
                      htmlFor="name"
                    >
                      Name *
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition focus:border-transparent focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      type="text"
                      value={formData.name}
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
                      htmlFor="email"
                    >
                      Email *
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition focus:border-transparent focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      type="email"
                      value={formData.email}
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition focus:border-transparent focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      id="company"
                      name="company"
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      type="text"
                      value={formData.company}
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
                      htmlFor="interest"
                    >
                      I&apos;m interested in *
                    </label>
                    <select
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition focus:border-transparent focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      id="interest"
                      name="interest"
                      onChange={handleChange}
                      required
                      value={formData.interest}
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
                    <label
                      className="mb-2 block font-medium text-gray-700 text-sm dark:text-gray-300"
                      htmlFor="message"
                    >
                      Message *
                    </label>
                    <textarea
                      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition focus:border-transparent focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      id="message"
                      name="message"
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      required
                      rows={6}
                      value={formData.message}
                    />
                  </div>

                  <button
                    className="w-full transform rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-lg"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Reasons to Contact */}
              <div>
                <h2 className="mb-6 font-bold text-3xl text-gray-900 dark:text-white">
                  Why Reach Out?
                </h2>
                <div className="space-y-6">
                  {reasons.map((reason, index) => (
                    <div
                      className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl dark:bg-gray-900"
                      key={index}
                    >
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 text-4xl">
                          {reason.icon}
                        </div>
                        <div>
                          <h3 className="mb-2 font-bold text-gray-900 text-xl dark:text-white">
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
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center font-bold text-3xl text-gray-900 dark:text-white">
              Quick Answers
            </h2>
            <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
              Before reaching out, check if your question is answered here
            </p>

            <div className="space-y-4">
              {[
                {
                  q: "How quickly will I get a response?",
                  a: "We typically respond within 24 hours on business days. Enterprise customers get priority support.",
                },
                {
                  q: "Do you offer technical support?",
                  a: "Yes! All paid plans include technical support. Free plan users can get help through our community forum.",
                },
                {
                  q: "Can I schedule a demo?",
                  a: "Absolutely! Select 'Enterprise Sales' in the form above and we'll set up a personalized demo.",
                },
                {
                  q: "Do you have a community?",
                  a: "Yes! Join our Discord server with thousands of developers building with our platform.",
                },
              ].map((faq, index) => (
                <details
                  className="group rounded-xl bg-gray-50 p-6 transition hover:shadow-lg dark:bg-gray-800"
                  key={index}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-gray-900 text-lg dark:text-white">
                    <span>{faq.q}</span>
                    <span className="text-purple-600 transition-transform group-open:rotate-180">
                      ▼
                    </span>
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
        <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center font-bold text-3xl text-gray-900 dark:text-white">
              Our Offices
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  city: "San Francisco",
                  address:
                    "123 Tech Street\nSan Francisco, CA 94102\nUnited States",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  city: "London",
                  address:
                    "456 Innovation Ave\nLondon, EC2A 4BX\nUnited Kingdom",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  city: "Singapore",
                  address: "789 Marina Boulevard\nSingapore 018956\nSingapore",
                  gradient: "from-green-500 to-emerald-500",
                },
              ].map((office, index) => (
                <div
                  className="rounded-xl bg-white p-8 text-center shadow-lg dark:bg-gray-900"
                  key={index}
                >
                  <div
                    className={`mb-4 bg-gradient-to-r text-5xl ${office.gradient} bg-clip-text text-transparent`}
                  >
                    📍
                  </div>
                  <h3 className="mb-3 font-bold text-2xl text-gray-900 dark:text-white">
                    {office.city}
                  </h3>
                  <p className="whitespace-pre-line text-gray-600 dark:text-gray-400">
                    {office.address}
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
              Ready to Build Something Amazing?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Get started with our boilerplate today and ship your product
              faster
            </p>
            <button className="transform rounded-full bg-white px-8 py-4 font-semibold text-lg text-purple-600 transition hover:scale-105 hover:shadow-2xl">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
