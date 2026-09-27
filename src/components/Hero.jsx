import React from 'react';
import { Play, Calendar, Clock, Zap, TrendingUp, Shield, ChevronRight } from 'lucide-react';
import VideoDemoSimulator from './VideoDemoSimulator';

export default function Hero({ onOpenDemoModal }) {
  const scrollToDemo = (e) => {
    e.preventDefault();
    const element = document.getElementById('video-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="inicio">
      {/* Background glow graphics */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-content">
            <div className="badge-pill">
              <span className="badge-dot"></span>
              AGENTE IA PARA TIENDAS DE REPUESTOS
            </div>

            <h1 className="hero-title">
              Responde consultas, consulta stock, muestra precios y registra pedidos...{' '}
              <span className="hero-highlight">¡todo en un solo agente!</span>
            </h1>

            <p className="hero-subtitle">
              Convierte tu WhatsApp y tu sitio web en un vendedor 24/7 con un agente de inteligencia artificial, entrenado con tu propio catálogo de productos y precios de repuestos de autos y buses.
            </p>

            {/* Feature Highlights Badges */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="highlight-title">Atención 24/7</span>
                  <span className="highlight-desc">Sin pauses ni feriados</span>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <Zap size={18} />
                </div>
                <div>
                  <span className="highlight-title">Respuestas instantáneas</span>
                  <span className="highlight-desc">Consulta de stock al segundo</span>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <span className="highlight-title">Más ventas</span>
                  <span className="highlight-desc">Clientes más satisfechos</span>
                </div>
              </div>
            </div>

            {/* Hero Dual Action Buttons */}
            <div className="hero-cta-group">
              <a href="#video-demo" onClick={scrollToDemo} className="btn btn-primary btn-hero-primary">
                <Play size={18} fill="currentColor" />
                <span>Ver demo en video</span>
              </a>

              <button onClick={onOpenDemoModal} className="btn btn-outline-light btn-hero-secondary">
                <Calendar size={18} />
                <span>Solicitar una demo gratuita</span>
              </button>
            </div>

            {/* Trust badge */}
            <div className="hero-trust">
              <Shield size={16} className="trust-icon" />
              <span>Compatible con WhatsApp Business, Web y ERPs de repuestos.</span>
            </div>
          </div>

          {/* Right Video / Interactive Simulator Showcase Column */}
          <div className="hero-media">
            <VideoDemoSimulator onOpenDemoModal={onOpenDemoModal} />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 8.5rem;
          padding-bottom: 5rem;
          background: linear-gradient(180deg, #0b132b 0%, #0f172a 100%);
          color: #ffffff;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        .hero-glow-1 {
          top: -100px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: rgba(2, 132, 199, 0.25);
        }

        .hero-glow-2 {
          bottom: -150px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: rgba(56, 189, 248, 0.15);
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #38bdf8;
          border-radius: 50%;
          box-shadow: 0 0 10px #38bdf8;
        }

        .hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.03em;
        }

        .hero-highlight {
          background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: #cbd5e1;
          line-height: 1.6;
          font-weight: 400;
        }

        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.75rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .highlight-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(2, 132, 199, 0.2);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .highlight-title {
          display: block;
          font-weight: 700;
          font-size: 0.85rem;
          color: #ffffff;
        }

        .highlight-desc {
          display: block;
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .btn-hero-primary {
          padding: 1rem 2rem;
          font-size: 1.05rem;
          border-radius: var(--radius-full);
        }

        .btn-hero-secondary {
          padding: 1rem 1.75rem;
          font-size: 1rem;
          border-radius: var(--radius-full);
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #94a3b8;
          margin-top: 0.25rem;
        }

        .trust-icon {
          color: #38bdf8;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 1.85rem;
          }
          .hero-highlights {
            grid-template-columns: 1fr;
          }
          .hero-cta-group {
            flex-direction: column;
          }
          .btn-hero-primary, .btn-hero-secondary {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
