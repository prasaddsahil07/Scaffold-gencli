import React, { useRef } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import DownloadsSection from './DownloadsSection';
import FeaturesSection from './FeaturesSection';
import ContributorsSection from './ContributorsSection';
import GlobalUsersSection from './GlobalUsersSection';
import OrganizationsSection from './OrganizationsSection';
import Footer from './Footer';

const ScaffoldGenLanding = () => {
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

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header 
        onDownloadsClick={handleDownloadsClick} 
        onReleasesClick={handleReleasesClick} 
      />
      <HeroSection />
      <DownloadsSection 
        downloadsRef={downloadsRef} 
        releasesRef={releasesRef} 
      />
      <FeaturesSection />
      <ContributorsSection />
      <GlobalUsersSection />
      <OrganizationsSection />
      <Footer 
        onDownloadsClick={handleDownloadsClick} 
        onReleasesClick={handleReleasesClick} 
      />
    </div>
  );
};

export default ScaffoldGenLanding;