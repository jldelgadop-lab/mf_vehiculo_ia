import React, { useState } from 'react';
import { Phone } from 'lucide-react';
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
    showToast(`¡Gracias ${data.nombre}! Tu solicitud ha sido registrada y enviada a nuestro equipo.`);
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

      {/* Floating Direct Call & Inquiry Button */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 990,
        }}
      >
        <a
          href={CONFIG.phoneTel}
          title={`Llamar directamente a ${CONFIG.appName} al ${CONFIG.displayPhone}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '14px',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.45), 0 2px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
          }}
          className="floating-call-btn"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(16, 185, 129, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.45)';
          }}
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Phone size={15} />
          </div>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: 0.9 }}>
              ¿Consultas o Demo?
            </span>
            <span style={{ fontSize: '14px', fontWeight: 800 }}>
              {CONFIG.displayPhone}
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
