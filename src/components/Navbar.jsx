import React, { useState, useEffect } from 'react';
import { Car, Bot, ArrowRight, Menu, X, PhoneCall, CheckCircle } from 'lucide-react';

export default function Navbar({ onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand">
          <div className="logo-icon-wrapper">
            <Car className="logo-car-icon" size={24} />
            <Bot className="logo-bot-icon" size={14} />
          </div>
          <div className="logo-text-group">
            <span className="logo-title">Auto<span className="logo-accent">IA</span></span>
            <span className="logo-subtitle">Tu asistente inteligente en ventas y atención</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#beneficios" className="nav-link">Beneficios</a>
          <a href="#como-funciona" className="nav-link">Cómo funciona</a>
          <a href="#casos-de-uso" className="nav-link">Casos de uso</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        {/* Header Action Button */}
        <div className="navbar-actions">
          <button 
            onClick={onOpenDemoModal} 
            className="btn btn-primary btn-nav-cta"
          >
            <span>Solicitar una demo</span>
            <ArrowRight size={16} />
          </button>
          
          {/* Mobile Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
            <a href="#beneficios" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
            <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)}>Cómo funciona</a>
            <a href="#casos-de-uso" onClick={() => setMobileMenuOpen(false)}>Casos de uso</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }} 
              className="btn btn-primary w-full mt-4"
            >
              Solicitar una demo gratuita
            </button>
          </nav>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.2rem 0;
          background: rgba(11, 19, 43, 0.85);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          padding: 0.85rem 0;
          background: rgba(11, 19, 43, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          border-bottom: 1px solid rgba(2, 132, 199, 0.25);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #ffffff;
        }

        .logo-icon-wrapper {
          position: relative;
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 0 15px rgba(2, 132, 199, 0.4);
        }

        .logo-bot-icon {
          position: absolute;
          bottom: -2px;
          right: -2px;
          background: #38bdf8;
          color: #0b132b;
          border-radius: 50%;
          padding: 1px;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1;
        }

        .logo-accent {
          color: #38bdf8;
        }

        .logo-subtitle {
          font-size: 0.68rem;
          color: #94a3b8;
          font-weight: 500;
          margin-top: 3px;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #38bdf8;
        }

        .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #38bdf8;
          border-radius: 2px;
        }

        .btn-nav-cta {
          padding: 0.65rem 1.4rem;
          font-size: 0.9rem;
          border-radius: var(--radius-full);
        }

        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.25rem;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #0b132b;
          border-bottom: 1px solid rgba(2, 132, 199, 0.3);
          padding: 1.5rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav-links a {
          color: #f8fafc;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .navbar-links {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
          .logo-subtitle {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
