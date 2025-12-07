import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = ({ onDownloadsClick, onReleasesClick }) => {
  return (
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
              <li><a href="#downloads" onClick={onDownloadsClick} className="hover:text-orange-500 transition-colors cursor-pointer">Downloads</a></li>
              <li><a href="#releases" onClick={onReleasesClick} className="hover:text-orange-500 transition-colors cursor-pointer">Releases</a></li>
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
  );
};

export default Footer;

