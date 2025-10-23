import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Co-Founder & CEO",
      bio: "Former tech lead at major SaaS companies. Passionate about building tools that empower developers.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & CTO",
      bio: "Full-stack architect with 15+ years of experience. Open source enthusiast and conference speaker.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning designer focused on creating beautiful, accessible user experiences.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      name: "David Park",
      role: "Lead Developer",
      bio: "Performance optimization expert. Loves building fast, scalable applications.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Lisa Zhang",
      role: "Developer Relations",
      bio: "Community builder and educator. Helping developers succeed with our platform.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      name: "James Wilson",
      role: "Security Lead",
      bio: "Cybersecurity specialist ensuring our platform remains secure and compliant.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We're constantly pushing boundaries and exploring new technologies to give you the best tools."
    },
    {
      icon: "🤝",
      title: "Developer Focused",
      description: "Built by developers, for developers. We understand your needs because we share them."
    },
    {
      icon: "🌍",
      title: "Open & Transparent",
      description: "We believe in open source and building in public. Your feedback shapes our roadmap."
    },
    {
      icon: "⚡",
      title: "Performance Matters",
      description: "Speed and reliability aren't optional. They're fundamental to everything we build."
    },
    {
      icon: "🎯",
      title: "Quality Over Quantity",
      description: "We'd rather do fewer things exceptionally well than many things poorly."
    },
    {
      icon: "💚",
      title: "Sustainability",
      description: "Building for the long term, both for our business and our planet."
    }
  ];

  const milestones = [
    { year: "2022", title: "Founded", description: "Started with a vision to simplify web development" },
    { year: "2022", title: "First Release", description: "Launched initial version with 100+ early adopters" },
    { year: "2023", title: "10K Users", description: "Reached 10,000 developers using our platform" },
    { year: "2023", title: "Series A", description: "Raised funding to accelerate development" },
    { year: "2024", title: "50K Users", description: "Growing community of passionate developers" },
    { year: "2024", title: "Enterprise", description: "Launched enterprise features for large organizations" }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Building the Future of Web Development
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-slide-up">
              We&apos;re on a mission to make building web applications faster, easier, and more enjoyable.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
              <p>
                It started with a simple frustration: setting up a new project shouldn&apos;t take days. As developers ourselves, 
                we were tired of spending countless hours configuring tools, setting up authentication, and implementing 
                features that should be standard in every application.
              </p>
              <p>
                In 2022, we decided to build the boilerplate we wished existed. Not just another template, but a 
                comprehensive, production-ready foundation that would let developers focus on what makes their application 
                unique instead of reinventing the wheel.
              </p>
              <p>
                Today, thousands of developers trust our platform to power their applications. From solo developers building 
                their first SaaS to enterprise teams launching at scale, we&apos;re proud to be part of their journey.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              A diverse group of passionate individuals working together to create something amazing
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className={`h-48 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                    <div className="w-32 h-32 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-5xl">
                      👤
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Our Journey
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to Join Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We&apos;re always looking for talented people to join our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link 
                href="/contact" 
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition"
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
