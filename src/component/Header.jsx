import React from 'react';
import { Search } from 'lucide-react';

const Header = ({ onDownloadsClick, onReleasesClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="Union.png" alt="logo" />
            <span className="text-sm font-clash-display">ScaffoldGen<br />CLI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#downloads" onClick={onDownloadsClick} className="hover:text-orange-500 transition-colors cursor-pointer">Downloads</a>
            <a href="#releases" onClick={onReleasesClick} className="hover:text-orange-500 transition-colors cursor-pointer">Releases</a>
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
  );
};

export default Header;

