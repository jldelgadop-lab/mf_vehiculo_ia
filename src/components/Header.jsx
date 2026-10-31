import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, Sparkles, Phone } from 'lucide-react';
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Direct Phone Call Link */}
          <a
            href={CONFIG.phoneTel}
            title={`Llamar directamente a ${CONFIG.appName} al ${CONFIG.displayPhone}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              color: '#FFFFFF',
              padding: '9px 16px',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            className="header-phone-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.25)';
              e.currentTarget.style.borderColor = '#10B981';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              <Phone size={13} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontSize: '10px', color: '#6EE7B7', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                Llamar a Agentika
              </span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.3px' }}>
                {CONFIG.displayPhone}
              </span>
            </div>
          </a>

          <button
            onClick={onRequestDemo}
            style={{
              background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '14px',
              padding: '12px 22px',
              borderRadius: '9999px',
              boxShadow: '0 4px 18px rgba(0, 102, 255, 0.4)',
              transition: 'all 0.25s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
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
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Direct call option in mobile menu */}
          <a
            href={CONFIG.phoneTel}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: 'rgba(16, 185, 129, 0.18)',
              border: '1px solid #10B981',
              color: '#34D399',
              padding: '12px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            <Phone size={18} />
            Llamar a Agentika: {CONFIG.displayPhone}
          </a>

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
              marginTop: '4px',
              width: '100%',
              textAlign: 'center',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Solicitar una Demo
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1050px) {
          .desktop-nav {
            gap: 16px !important;
          }
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 540px) {
          .header-phone-btn {
            padding: 8px 10px !important;
          }
          .header-phone-btn div:nth-child(2) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
