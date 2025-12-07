import React, { useState, useEffect } from 'react';
import Landingpage from './component/LandingPage.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Hide loader after fade out animation
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative">
            {/* Spinning circle loader */}
            <div className="w-20 h-20 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin"></div>
            {/* Glowing effect */}
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-orange-500 rounded-full animate-spin opacity-75 blur-sm"></div>
            {/* Logo in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="Union.png" alt="logo" className="w-8 h-8" />
            </div>
          </div>
        </div>
      )}
      {!isLoading && <Landingpage />}
    </>
  )
}

export default App
