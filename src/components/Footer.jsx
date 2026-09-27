import React from 'react';
import { Car, Bot, Shield, Check, MessageCircle, Mail, Globe } from 'lucide-react';

export default function Footer({ onOpenDemoModal }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-icon">
                <Car size={22} />
              </div>
              <span className="footer-brand-name">Auto<span className="accent">IA</span></span>
            </div>
            <p className="footer-tagline">
              Inteligencia Artificial especializada para el sector automotriz y tiendas de repuestos de autos y buses.
            </p>
          </div>

          {/* Trust Guarantees */}
          <div className="footer-trust-pills">
            <div className="trust-pill">
              <Shield size={16} />
              <span>Seguro</span>
            </div>
            <span className="dot">•</span>
            <div className="trust-pill">
              <Check size={16} />
              <span>Confiable</span>
            </div>
            <span className="dot">•</span>
            <div className="trust-pill">
              <Car size={16} />
              <span>Hecho para tu negocio</span>
            </div>
          </div>

          {/* Social / Contact */}
          <div className="footer-contacts">
            <span className="contact-title">Contáctanos</span>
            <div className="social-icons">
              <button onClick={onOpenDemoModal} className="social-btn" title="WhatsApp Chat">
                <MessageCircle size={18} />
              </button>
              <button onClick={onOpenDemoModal} className="social-btn" title="Correo Electrónico">
                <Mail size={18} />
              </button>
              <button onClick={onOpenDemoModal} className="social-btn" title="Sitio Web Corporativo">
                <Globe size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AutoIA. Todos los derechos reservados. Soluciones IA para Repuestos de Autos y Buses.</p>
          <div className="footer-legal-links">
            <a href="#inicio">Términos de servicio</a>
            <a href="#inicio">Política de privacidad</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #070a13;
          color: #94a3b8;
          padding: 3.5rem 0 2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          max-width: 380px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .footer-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-brand-name {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
        }

        .footer-brand-name .accent {
          color: #38bdf8;
        }

        .footer-tagline {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.5;
        }

        .footer-trust-pills {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-full);
          color: #cbd5e1;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .trust-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #38bdf8;
        }

        .dot {
          color: #475569;
        }

        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          align-items: flex-end;
        }

        .contact-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
        }

        .social-icons {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .social-btn:hover {
          background: #0284c7;
          border-color: #38bdf8;
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.75rem;
          font-size: 0.82rem;
          color: #64748b;
        }

        .footer-legal-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal-links a {
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal-links a:hover {
          color: #38bdf8;
        }

        @media (max-width: 992px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-contacts {
            align-items: flex-start;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
