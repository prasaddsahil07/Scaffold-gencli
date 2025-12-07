import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, Linkedin, Github, MessageSquare, Code, Layers, Zap, Settings } from 'lucide-react';

const ScaffoldGenLanding = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const downloadsRef = useRef(null);
  const releasesRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref, offset = 80) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation clicks
  const handleDownloadsClick = (e) => {
    e.preventDefault();
    scrollToSection(downloadsRef);
  };

  const handleReleasesClick = (e) => {
    e.preventDefault();
    scrollToSection(releasesRef);
  };

  const faqs = [
    {
      question: "What is the ScaffoldingGen CLI Tool?",
      answer: "ScaffoldGen CLI is a powerful command-line interface tool designed to streamline your workflow and boost your productivity. It helps developers quickly scaffold projects with best practices."
    },
    {
      question: "How do I install the ScaffoldGen CLI Tool?",
      answer: "You can install ScaffoldGen CLI using npm, yarn, or by downloading the binary for your operating system. Run 'npm install -g scaffoldgen' or download from our releases page."
    },
    {
      question: "What features does the ScaffoldGen CLI Tool have?",
      answer: "ScaffoldGen includes multi-template support, interactive configuration, component generation, and an extensible post-processing pipeline for complete project customization."
    },
    {
      question: "How do I contribute to the Scaffolding CLI tool?",
      answer: "We welcome contributions! Visit our GitHub repository, fork the project, make your changes, and submit a pull request. Check our contribution guidelines for more details."
    },
    {
      question: "Is the ScaffoldGen CLI tool free to use?",
      answer: "Yes, ScaffoldGen CLI is completely free and open-source. You can use it for personal and commercial projects without any restrictions."
    },
    {
      question: "Where can I get support?",
      answer: "You can get support through our Discord community, GitHub issues, or by checking our comprehensive documentation. Our community is always ready to help!"
    }
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Multi-Template & Multi-Language Support",
      description: "Enables developers to work across different technology stacks with a unified command interface.",
      color: "bg-orange-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Interactive Configuration & Prompting",
      description: "Provides a user-friendly experience and minimizes errors from manual configuration.",
      color: "bg-blue-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Component & Module Generation",
      description: "Significantly speeds up repetitive coding tasks and enforces best practices.",
      color: "bg-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Extensible Post-Processing Pipeline",
      description: "Delivers a fully functional, ready-to-code project immediately after generation.",
      color: "bg-yellow-500"
    }
  ];

  const contributors = [
    { name: "Naman", role: "Core Contributor" },
    { name: "Namrata", role: "Core Contributor" },
    { name: "Sahil", role: "Core Contributor" },
    { name: "Surbhi", role: "Core Contributor" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="Union.png" alt="logo" />
              <span className="text-sm font-clash-display">ScaffoldGen<br />CLI</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#downloads" onClick={handleDownloadsClick} className="hover:text-orange-500 transition-colors cursor-pointer">Downloads</a>
              <a href="#releases" onClick={handleReleasesClick} className="hover:text-orange-500 transition-colors cursor-pointer">Releases</a>
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-black border border-gray-700 rounded-lg pl-3 pr-4 py-2 text-sm focus:outline-none focus:border-orange-500 w-48"
                />
              </div>
              <a href="#" className="hover:text-orange-500 transition-colors">Docs</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Snippet Manager</a>
            </nav>
          </div>
        </div>
      </header>


      {/* About Section */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto text-center p-40">
          <div className='flex justify-center'>
            <img src="Group 728.png" alt="brand-name" />
          </div>
          <p className="text-gray-200 text-lg sm:text-xl max-w-4xl mx-auto mb-8 mt-8">
            A powerful command-line interface tool for developers, designed to streamline your workflow and boost your productivity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Download for Linux
            </button>
            <button className="bg-[#4E230D] hover:bg-[#3a1a09] px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 border-2 border-[#FA6C25]">
              Download for Windows
            </button>
          </div>
        </div>

        {/* 1. The Geometry: A More Intense Semi-Circle */}
        <div className="relative w-full flex justify-center pointer-events-none">
          <div className="
            w-[90%]
            aspect-[2/1]
            rounded-t-full
            bg-transparent
            border-t-[10px]       /* Thicker top edge */
            border-x-0           /* No side borders */
            border-b-0           /* No bottom border */
            border-[#FFA537]
            shadow-[0_0_60px_20px_rgba(250,108,37,0.8)] /* More intense glow */
        "></div>

          {/* Glow overlay */}
          <div className="
            absolute
            top-0
            w-[90%]
            aspect-[2/1]
            rounded-t-full
            border-t-[10px]              /* Slightly thicker than main border */
            border-[#FFA537]         /* Lighter & semi-transparent for glow */
            filter blur-[60px]           /* Makes the glow spread */
            pointer-events-none
        "></div>
        </div>



        {/* 2. The Mask: Content Box pulled up to cover the bottom of the circle */}
        <div className="
          relative 
          z-10
          md:-mt-52
          sm:-mt-32 
          lg:-mt-100 
          bg-black 
          max-w-[1300px] 
          mx-auto 
          border 
          border-slate-800 
          rounded-xl 
          p-10
          h-110
        ">
          <div className="grid md:grid-cols-2 gap-12 items-start w-full">

            {/* Left Text */}
            <div>
              <h2 className="text-4xl text-[#D6D2CD] font-bold mb-4">About ScaffoldGen CLI</h2>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-xl">
                Our CLI tool is a powerful and versatile command-line interface that helps developers streamline
                their workflow and boost productivity. With a wide range of features and customization options,
                it's the perfect tool for any developer looking to optimize their development process.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Right – Terminal Mockup */}
            <div className="relative">
              <div className="bg-[#1F1F1F] rounded-xl shadow-2xl pt-16 pl-8 pb-0 h-[350px] flex flex-col">

                {/* Terminal Box */}
                <div className="bg-[#131920] rounded-sm overflow-hidden flex flex-col h-full">

                  {/* Top Bar */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-auto text-sm text-gray-400">scaffoldgen</span>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-6 font-mono text-sm space-y-2 bg-black flex-1">
                    <div className="text-gray-300">
                      <span className="text-[#D1CD74]">→ cd</span> web_development
                    </div>
                    <div className="text-[#D1CD74]">→ scaffoldgen new --my-awesome-app++ --template next</div>
                    <div className="text-[#D1CD74]">→ scaffoldgen generate ++component++ UserProfile --i</div>
                    <div className="text-[#D1CD74]">→ scaffoldgen create ++route++ auth --handler --logs</div>
                    <div className="text-[#D1CD74]">→ scaffoldgen config set ++default-lang++ python</div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Download and Release Cards */}
      <section className="py-2 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Latest Download */}
          <div ref={downloadsRef} id="downloads" className="bg-black p-8 transition-all transform hover:scale-105 animate-fade-in">
            <h3 className="text-3xl font-bold mb-4">Latest Download</h3>
            <p className="text-gray-400 mb-6">
              The latest version of our CLI tool is now available for download on Linux. Get the latest features and improvements by downloading the latest release.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Download for Linux
            </button>
          </div>

          {/* Latest Release */}
          <div ref={releasesRef} id="releases" className="bg-black p-8 transition-all transform hover:scale-105 animate-fade-in">
            <h3 className="text-3xl font-bold mb-4">Latest Release</h3>
            <p className="text-gray-400 mb-6">
              Check out the latest release of our CLI tool, packed with new features and improvements. See what's new and get the latest version.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              View Latest Release
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto relative">

          {/* CENTER ORBIT SYSTEM */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-40 h-40">

            {/* ORBIT RING (Thin glowing ring with trailing orange effect) */}
            <div className="absolute inset-0 rounded-full border border-black/10">
            </div>

            {/* CENTRAL IMAGE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-18 h-18 bg-[#FA6C25] rounded-full flex items-center justify-center shadow-2xl">
              <img src="Union.png" alt="Core" className="w-8 h-8" />
            </div>

            {/* DOT 1 (TOP) - rotates clockwise */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-[5px] left-1/2 -translate-x-1/2 
                    w-2 h-2 rounded-full bg-[#FA6C25] 
                    shadow-[0_0_10px_3px_rgba(200,108,37,0.9)]">
              </div>
            </div>

            {/* DOT 2 (BOTTOM) - rotates clockwise, opposite side */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 
                    w-2 h-2 rounded-full bg-[#FA6C25] 
                    shadow-[0_0_10px_3px_rgba(250,108,37,0.9)]">
              </div>
            </div>

          </div>


          {/* 4 CARDS — FULL WIDTH */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-12">

            {/* ===== VERTICAL DIVIDER ===== */}
            <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full z-0 bg-gradient-to-b from-black via-black to-black">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent via-[#FA6C25]/80 to-transparent hover:via-[#FA6C25]/100 transition-all duration-600"></div>
            </div>

            {/* ===== HORIZONTAL DIVIDER =====*/}
            <div className="hidden sm:block absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] z-0 bg-gradient-to-r from-black via-black to-black">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#FA6C25]/80 to-transparent hover:via-[#FA6C25]/100 transition-all duration-00"></div>
            </div>

            {/* Card 1 */}
            <div className="bg-gradient-to-br from-black to-[#371D0F] p-8 h-72 flex flex-col items-center justify-center border-0">
              <img src="Frame 2121453375.png" alt="alt" className='w-12 h-12' />
              <div className="mt-3 max-w-[260px] text-center">
                <h4 className="text-xl font-bold mb-3 mt-3 text-center">
                  Multi-Template & Multi-Language Support
                </h4>
                <p className="text-gray-400 text-center text-sm">
                  Enables developers to work across different technology stacks with a unified command interface..
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-black p-8 h-72 flex flex-col items-center justify-center border-0">
              <img src="Frame 2121453375 (1).png" alt="alt-1" className='w-12 h-12' />
              <div className="mt-3 max-w-[260px] text-center">
                <h4 className="text-xl font-bold mb-3 mt-3 text-center">
                  Interactive Configuration & Prompting
                </h4>
                <p className="text-gray-400 text-center text-sm">
                  Provides a user-friendly experience and minimizes errors from manual configuration.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-black p-8 h-72 flex flex-col items-center justify-center border-0">
              <img src="Frame 2121453375 (2).png" alt="alt-2" className='w-12 h-12' />
              {/* TEXT CONTAINER WITH REDUCED WIDTH */}
              <div className="mt-3 max-w-[260px] text-center">
                <h4 className="text-xl font-bold mb-3">
                  Component & Module Generation
                </h4>
                <p className="text-gray-400 text-sm">
                  Significantly speeds up repetitive coding tasks and enforces best practices.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-tl from-black to-[#371D0F] p-8 h-72 flex flex-col items-center justify-center border-0">
              <img src="Frame 2121453375 (3).png" alt="alt-3" className='w-12 h-12' />
              <div className="mt-3 max-w-[260px] text-center">
                <h4 className="text-xl font-bold mb-3 mt-3 text-center">
                  Extensible Post-Processing Pipeline
                </h4>
                <p className="text-gray-400 text-center text-sm">
                  Delivers a fully functional, ready-to-code project immediately after generation.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 14s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 14s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
      </section>


      {/* Contributors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#D6D2CD]">
            Major Contributors
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="
            bg-gradient-to-r from-black to-[#371D0F]
            rounded-md p-6
            border-0
            transition-all transform hover:scale-105
            text-center
            min-h-[280px]
            flex flex-col items-center
          "
              >
                {/* Icon at top */}
                <div className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center">
                  <img src="https://avatar.iran.liara.run/public/36" alt="random-avatar" />
                </div>

                {/* Push name & role to bottom */}
                <div className="mt-auto">
                  <h4 className="text-lg font-bold mb-1 text-[#D6D2CD]">{contributor.name}</h4>
                  <p className="text-gray-300 text-sm text-[#D6D2CD]">{contributor.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Users */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-slate-400 font-thin mb-2 border-[0.8] rounded-2xl inline-block px-1 py-1 text-[#D6D2CD]">
            Our Solutions
          </p>
          <h2 className="text-4xl font-bold text-left mb-12">Global Users</h2>
          <img src="Frame 2121454013.png" alt="reach" />
        </div>
      </section>

      {/* Organizations & FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className='flex justify-center text-3xl text-[#D6D2CD] font-bold mb-4'>
            Organizations
          </h2>
          <div className="text-center mb-2">
            <div className="inline-block bg-gradient-to-r from-black to-[#371D0F] rounded-2xl p-8 border border-gray-700 mb-8">
              <Github className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center">Resourcio Community</h3>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-6">FAQ</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-black to-[#371D0F] rounded-xl border border-gray-700 overflow-hidden hover:border-[#FA6C25] transition-all min-h-[60px]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-black/20 transition-colors"
                >
                  <span className="font-semibold text-sm">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 ml-2 transition-transform ${openFaq === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-300 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="Group 742.png" alt="footer-logo" className="w-44 sm:w-36 lg:w-40" />
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#downloads" onClick={handleDownloadsClick} className="hover:text-orange-500 transition-colors cursor-pointer">Downloads</a></li>
                <li><a href="#releases" onClick={handleReleasesClick} className="hover:text-orange-500 transition-colors cursor-pointer">Releases</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect with Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors">
                    <Linkedin className="w-6 h-6" />
                    <span>Linkedin</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors">
                    <Github className="w-6 h-6" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors">
                    <img src="discord.png" alt="discord-icon" className="w-6 h-6" />
                    <span>Discord</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 text-center text-gray-400 text-sm flex justify-left">
            © 2024 ScaffoldGenCLI All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScaffoldGenLanding;