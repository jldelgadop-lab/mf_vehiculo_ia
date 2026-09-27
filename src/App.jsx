import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="landing-app">
      {/* Top Sticky Navigation */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Sections */}
      <main>
        <Hero onOpenDemoModal={handleOpenDemoModal} />
        <Features />
        <Benefits onOpenDemoModal={handleOpenDemoModal} />
        <HowItWorks />
        <UseCases onOpenDemoModal={handleOpenDemoModal} />
        <CtaBanner onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Lead Capture Demo Request Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={handleCloseDemoModal} 
      />
    </div>
  );
}
