import React from 'react';

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;

