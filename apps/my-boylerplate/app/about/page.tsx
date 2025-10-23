import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Co-Founder & CEO",
      bio: "Former tech lead at major SaaS companies. Passionate about building tools that empower developers.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & CTO",
      bio: "Full-stack architect with 15+ years of experience. Open source enthusiast and conference speaker.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning designer focused on creating beautiful, accessible user experiences.",
      gradient: "from-pink-500 to-red-500",
    },
    {
      name: "David Park",
      role: "Lead Developer",
      bio: "Performance optimization expert. Loves building fast, scalable applications.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Lisa Zhang",
      role: "Developer Relations",
      bio: "Community builder and educator. Helping developers succeed with our platform.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      name: "James Wilson",
      role: "Security Lead",
      bio: "Cybersecurity specialist ensuring our platform remains secure and compliant.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description:
        "We're constantly pushing boundaries and exploring new technologies to give you the best tools.",
    },
    {
      icon: "🤝",
      title: "Developer Focused",
      description:
        "Built by developers, for developers. We understand your needs because we share them.",
    },
    {
      icon: "🌍",
      title: "Open & Transparent",
      description:
        "We believe in open source and building in public. Your feedback shapes our roadmap.",
    },
    {
      icon: "⚡",
      title: "Performance Matters",
      description:
        "Speed and reliability aren't optional. They're fundamental to everything we build.",
    },
    {
      icon: "🎯",
      title: "Quality Over Quantity",
      description:
        "We'd rather do fewer things exceptionally well than many things poorly.",
    },
    {
      icon: "💚",
      title: "Sustainability",
      description:
        "Building for the long term, both for our business and our planet.",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Founded",
      description: "Started with a vision to simplify web development",
    },
    {
      year: "2022",
      title: "First Release",
      description: "Launched initial version with 100+ early adopters",
    },
    {
      year: "2023",
      title: "10K Users",
      description: "Reached 10,000 developers using our platform",
    },
    {
      year: "2023",
      title: "Series A",
      description: "Raised funding to accelerate development",
    },
    {
      year: "2024",
      title: "50K Users",
      description: "Growing community of passionate developers",
    },
    {
      year: "2024",
      title: "Enterprise",
      description: "Launched enterprise features for large organizations",
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
              Building the Future of Web Development
            </h1>
            <p className="mx-auto max-w-3xl animate-slide-up text-xl opacity-90 md:text-2xl">
              We&apos;re on a mission to make building web applications faster,
              easier, and more enjoyable.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-bold text-4xl text-gray-900 dark:text-white">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 text-lg dark:text-gray-400">
              <p>
                It started with a simple frustration: setting up a new project
                shouldn&apos;t take days. As developers ourselves, we were tired
                of spending countless hours configuring tools, setting up
                authentication, and implementing features that should be
                standard in every application.
              </p>
              <p>
                In 2022, we decided to build the boilerplate we wished existed.
                Not just another template, but a comprehensive, production-ready
                foundation that would let developers focus on what makes their
                application unique instead of reinventing the wheel.
              </p>
              <p>
                Today, thousands of developers trust our platform to power their
                applications. From solo developers building their first SaaS to
                enterprise teams launching at scale, we&apos;re proud to be part
                of their journey.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center font-bold text-4xl text-gray-900 dark:text-white">
              Our Values
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <div
                  className="hover:-translate-y-2 transform rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-2xl dark:bg-gray-900"
                  key={index}
                >
                  <div className="mb-4 text-5xl">{value.icon}</div>
                  <h3 className="mb-3 font-bold text-2xl text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-center font-bold text-4xl text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 text-xl dark:text-gray-400">
              A diverse group of passionate individuals working together to
              create something amazing
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <div
                  className="hover:-translate-y-2 transform overflow-hidden rounded-2xl bg-gray-50 shadow-lg transition hover:shadow-2xl dark:bg-gray-800"
                  key={index}
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
                  >
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white text-5xl dark:bg-gray-900">
                      👤
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 font-bold text-2xl text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p
                      className={`mb-3 bg-gradient-to-r font-semibold text-sm ${member.gradient} bg-clip-text text-transparent`}
                    >
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-bold text-4xl text-gray-900 dark:text-white">
              Our Journey
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="md:-translate-x-1/2 absolute left-0 h-full w-1 transform bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600 md:left-1/2" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    key={index}
                  >
                    <div
                      className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}
                    >
                      <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-900">
                        <div className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold text-2xl text-transparent">
                          {milestone.year}
                        </div>
                        <h3 className="mb-2 font-bold text-gray-900 text-xl dark:text-white">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="md:-translate-x-1/2 absolute left-0 h-8 w-8 transform rounded-full border-4 border-white bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg md:left-1/2 dark:border-gray-900" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-6 font-bold text-4xl md:text-5xl">
              Want to Join Us?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              We&apos;re always looking for talented people to join our team
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="inline-block transform rounded-full bg-white px-8 py-4 font-semibold text-lg text-purple-600 transition hover:scale-105 hover:shadow-2xl"
                href="/contact"
              >
                View Open Positions
              </Link>
              <Link
                className="inline-block rounded-full border-2 border-white px-8 py-4 font-semibold text-lg text-white transition hover:bg-white/10"
                href="/contact"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
