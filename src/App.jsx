import React, { useState } from 'react';
import { CONFIG } from './config';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { HardwareCategories } from './components/HardwareCategories';
import { InteractiveDemo } from './components/InteractiveDemo';
import { UseCases } from './components/UseCases';
import { FAQSection } from './components/FAQSection';
import { FooterBanner } from './components/FooterBanner';
import { VideoUrlModal } from './components/VideoUrlModal';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [youtubeUrl, setYoutubeUrl] = useState(CONFIG.defaultYoutubeUrl);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenDemoModal = () => {
    setShowDemoModal(true);
  };

  const handleFormSubmitSuccess = (data) => {
    showToast(`¡Gracias ${data.nombre}! Tu solicitud ha sido registrada correctamente.`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#0F172A' }}>
      {/* Top Floating Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: '24px',
            zIndex: 9999,
            background: '#0F172A',
            color: '#FFFFFF',
            border: '1px solid #0066FF',
            borderRadius: '12px',
            padding: '14px 20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            fontSize: '14px',
            fontWeight: 600,
            animation: 'fadeIn 0.3s ease',
          }}
        >
          ✨ {toastMessage}
        </div>
      )}

      {/* Header Navigation */}
      <Header onRequestDemo={handleOpenDemoModal} />

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero with Video & Form */}
        <Hero
          youtubeUrl={youtubeUrl}
          onChangeYoutubeUrl={() => setShowVideoModal(true)}
          onSubmitFormSuccess={handleFormSubmitSuccess}
        />

        {/* Section 2: How It Works (4 Steps) */}
        <HowItWorks />

        {/* Section 3: Hardware Categories Showcase */}
        <HardwareCategories />

        {/* Section 4: Real-time Live Interactive Chat Simulator */}
        <InteractiveDemo onRequestDemo={handleOpenDemoModal} />

        {/* Section 5: Key Use Cases & Benefits for Hardware Retailers */}
        <UseCases onRequestDemo={handleOpenDemoModal} />

        {/* Section 6: FAQ Section */}
        <FAQSection />
      </main>

      {/* Section 7: Footer Banner & Links */}
      <FooterBanner onRequestDemo={handleOpenDemoModal} />

      {/* Modal: Edit YouTube Video URL */}
      {showVideoModal && (
        <VideoUrlModal
          currentUrl={youtubeUrl}
          onSave={(newUrl) => {
            setYoutubeUrl(newUrl);
            showToast('Enlace de video de YouTube actualizado.');
          }}
          onClose={() => setShowVideoModal(false)}
        />
      )}

      {/* Modal: Demo Request Form Popup */}
      {showDemoModal && (
        <DemoModal
          onClose={() => setShowDemoModal(false)}
          onSubmitSuccess={handleFormSubmitSuccess}
        />
      )}
    </div>
  );
}

export default App;
