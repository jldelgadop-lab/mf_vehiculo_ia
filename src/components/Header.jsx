import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

export function Header({ onRequestDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(7, 14, 32, 0.95)' : 'rgba(7, 14, 32, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease',
        padding: scrolled ? '12px 0' : '18px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0066FF 0%, #00C8FF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 14px rgba(0, 102, 255, 0.4)',
            }}
          >
            <Bot size={26} />
          </div>
          <div>
            <div
              style={{
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '20px',
                letterSpacing: '-0.3px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {CONFIG.appName}
            </div>
            <div
              style={{
                color: '#94A3B8',
                fontSize: '12px',
                fontWeight: 500,
              }}
            >
              {CONFIG.appSubtitle}
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {[
            { label: 'Beneficios', id: 'beneficios' },
            { label: 'Cómo funciona', id: 'como-funciona' },
            { label: 'Casos de uso', id: 'casos-de-uso' },
            { label: 'Preguntas frecuentes', id: 'faq' },
            { label: 'Simulador IA', id: 'simulador' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#CBD5E1',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onRequestDemo}
            style={{
              background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '14px',
              padding: '12px 24px',
              borderRadius: '9999px',
              boxShadow: '0 4px 18px rgba(0, 102, 255, 0.4)',
              transition: 'all 0.25s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 22px rgba(0, 102, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 102, 255, 0.4)';
            }}
          >
            <Sparkles size={16} />
            Solicitar una Demo
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#FFFFFF',
              padding: '10px',
              borderRadius: '8px',
              display: 'none',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#070e20',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {[
            { label: 'Beneficios', id: 'beneficios' },
            { label: 'Cómo funciona', id: 'como-funciona' },
            { label: 'Casos de uso', id: 'casos-de-uso' },
            { label: 'Preguntas frecuentes', id: 'faq' },
            { label: 'Simulador IA', id: 'simulador' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 600,
                textAlign: 'left',
                padding: '8px 0',
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestDemo();
            }}
            style={{
              background: '#0066FF',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px',
              borderRadius: '12px',
              marginTop: '8px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Solicitar una Demo
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
