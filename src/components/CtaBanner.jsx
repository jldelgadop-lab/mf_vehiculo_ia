import React from 'react';
import { Calendar, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CtaBanner({ onOpenDemoModal }) {
  return (
    <section className="cta-section section" id="contacto">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={16} />
              <span>CONSULTORÍA Y DEMO CUSTOMIZADA</span>
            </div>

            <h2 className="cta-title">¿Listo para llevar tu negocio al siguiente nivel?</h2>
            <p className="cta-desc">
              Solicita una demo personalizada sin compromiso. Evaluamos el catálogo de tu tienda de repuestos de autos o buses y te mostramos el agente IA funcionando con tus propios datos.
            </p>

            <div className="cta-actions">
              <button onClick={onOpenDemoModal} className="btn btn-primary btn-cta-main">
                <Calendar size={18} />
                <span>Solicitar una demo</span>
              </button>

              <span className="cta-guarantee">
                <ShieldCheck size={16} /> Sin tarjeta de crédito • Configuración rápida
              </span>
            </div>
          </div>

          <div className="cta-visual">
            <div className="cta-img-frame">
              <img 
                src="/images/parts-catalog.jpg" 
                alt="Catálogo de repuestos de autos y buses entrenado con Inteligencia Artificial"
                className="cta-img" 
              />
              <div className="cta-annotation">
                <span>Tu catálogo, nuestro entrenamiento ↴</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
        }

        .cta-card {
          background: linear-gradient(135deg, #0b132b 0%, #1c2541 100%);
          border-radius: 28px;
          padding: 3.5rem;
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(11, 19, 43, 0.4);
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          z-index: 2;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          align-self: flex-start;
          background: rgba(2, 132, 199, 0.25);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.4);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .cta-title {
          font-size: 2.35rem;
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
        }

        .cta-desc {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        .btn-cta-main {
          padding: 1rem 2.25rem;
          font-size: 1.05rem;
          border-radius: var(--radius-full);
        }

        .cta-guarantee {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .cta-visual {
          position: relative;
          z-index: 2;
        }

        .cta-img-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .cta-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .cta-annotation {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #38bdf8;
          color: #0b132b;
          font-weight: 800;
          font-size: 0.8rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transform: rotate(-2deg);
        }

        @media (max-width: 992px) {
          .cta-card {
            grid-template-columns: 1fr;
            padding: 2.5rem;
            gap: 2rem;
          }
          .cta-title {
            font-size: 1.95rem;
          }
        }
      `}</style>
    </section>
  );
}
