import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-18 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto text-center p-40">
        <div className='flex justify-center'>
          <img src="Group 728.png" alt="brand-name" />
        </div>
        <p className="text-gray-200 text-lg sm:text-xl max-w-4xl mx-auto mb-8 mt-8">
          A powerful command-line interface tool for developers, designed to streamline your workflow and boost your productivity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
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
  );
};

export default HeroSection;

