import React from 'react';
import { Handshake, ArrowRight, Clock, Bot, Heart } from 'lucide-react';
import { CONFIG } from '../config';

export function FooterBanner({ onRequestDemo }) {
  return (
    <footer
      style={{
        backgroundColor: '#070E20',
        color: '#FFFFFF',
        paddingTop: '60px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {/* Banner matching exact bottom box of diseno_landing.png */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0B1938 0%, #0F2A60 100%)',
            border: '1px solid rgba(0, 102, 255, 0.35)',
            borderRadius: '24px',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 102, 255, 0.2)',
            marginBottom: '60px',
          }}
          className="cta-banner"
        >
          {/* Left Icon & Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'rgba(0, 102, 255, 0.25)',
                border: '1px solid rgba(0, 200, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38BDF8',
                flexShrink: 0,
              }}
            >
              <Handshake size={36} />
            </div>

            <div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                Lleva tu tienda al siguiente nivel
              </h3>
              <p style={{ fontSize: '15px', color: '#CBD5E1', maxWidth: '580px', lineHeight: 1.5 }}>
                Descubre cómo nuestro Agente IA puede ayudarte a vender más y brindar una mejor atención a tus clientes.
              </p>
            </div>
          </div>

          {/* Right Action Button & Sub-caption */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <button
              onClick={onRequestDemo}
              style={{
                background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '16px',
                padding: '16px 32px',
                borderRadius: '9999px',
                boxShadow: '0 4px 20px rgba(0, 102, 255, 0.5)',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 102, 255, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 102, 255, 0.5)';
              }}
            >
              Solicitar una Demo
              <ArrowRight size={18} />
            </button>
            <div style={{ fontSize: '12px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={12} color="#00C8FF" />
              Respuesta en menos de 24 horas
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '32px',
            fontSize: '13px',
            color: '#64748B',
          }}
          className="footer-subbar"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: '#0066FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
              }}
            >
              <Bot size={16} />
            </div>
            <span style={{ color: '#94A3B8', fontWeight: 600 }}>
              © {new Date().getFullYear()} {CONFIG.appName}. Todos los derechos reservados.
            </span>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Especializado en Tiendas de Cómputo & Hardware</span>
            <span>•</span>
            <a href="#formulario-demo" style={{ color: '#38BDF8', textDecoration: 'none' }}>
              Solicitar Consultoría
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .cta-banner {
            flex-direction: column !important;
            text-align: center !important;
            padding: 32px 24px !important;
          }
          .cta-banner > div {
            flex-direction: column !important;
          }
          .footer-subbar {
            flex-direction: column !important;
            gap: 16px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
