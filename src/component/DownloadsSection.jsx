import React from 'react';

const DownloadsSection = ({ downloadsRef, releasesRef }) => {
  return (
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
  );
};

export default DownloadsSection;

