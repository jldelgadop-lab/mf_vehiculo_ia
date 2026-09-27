import React from 'react';
import { CheckCircle, Car, Truck, Bus, ArrowRight } from 'lucide-react';

const BENEFITS_LIST = [
  'Reduce la carga de trabajo de tu equipo de ventas.',
  'Mejora la experiencia y velocidad de atención de tus clientes.',
  'Incrementa la tasa de conversión de ventas automotrices.',
  'Evita responder las mismas consultas repetitivas de stock y precios.',
  'Disponible e integrado en WhatsApp, sitio web y redes sociales.'
];

export default function Benefits({ onOpenDemoModal }) {
  return (
    <section className="benefits-section section" id="beneficios">
      <div className="container">
        <div className="benefits-grid">
          {/* Left Column: Image with Specialist */}
          <div className="benefits-image-wrapper">
            <img 
              src="/images/auto-specialist.jpg" 
              alt="Especialista en mostrador de tienda de repuestos de autos y buses atendiendo con asistente IA" 
              className="benefits-img"
            />
            <div className="img-overlay-badge">
              <span className="badge-stat">+40%</span>
              <span className="badge-label">Aumento de ventas fuera de horario</span>
            </div>
          </div>

          {/* Right Column: Benefits Content & Target Niche Card */}
          <div className="benefits-content">
            <span className="benefits-subtitle">BENEFICIOS PARA TU NEGOCIO</span>
            <h2 className="benefits-title">Más eficiencia, más ventas</h2>
            <p className="benefits-description">
              Optimiza la atención de tu tienda de repuestos. Mientras el agente IA atiende automáticamente consultas de stock, cotizaciones y captura pedidos, tu personal puede enfocarse en la logística y asesorías de mayor valor.
            </p>

            {/* Checklist */}
            <ul className="benefits-checklist">
              {BENEFITS_LIST.map((benefit, idx) => (
                <li key={idx} className="benefit-item">
                  <div className="check-icon-box">
                    <CheckCircle size={20} />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Highlight Card for Spare Parts Store Niche */}
            <div className="niche-card">
              <div className="niche-header">
                <div className="niche-icon-group">
                  <Car size={22} />
                  <Truck size={22} />
                  <Bus size={22} />
                </div>
                <h3 className="niche-title">Ideal para tiendas de repuestos de autos, camiones y buses.</h3>
              </div>
              <p className="niche-desc">
                Cualquier negocio que venda repuestos, autopartes, filtros, aceites, frenos, suspensión o accesorios del sector automotriz multimarca o especializado.
              </p>
              <button onClick={onOpenDemoModal} className="btn-niche-action">
                <span>Solicitar asesoría para mi tienda</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .benefits-section {
          background: linear-gradient(135deg, #0b132b 0%, #1c2541 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3.5rem;
          align-items: center;
        }

        .benefits-image-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .benefits-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .benefits-image-wrapper:hover .benefits-img {
          transform: scale(1.03);
        }

        .img-overlay-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(11, 19, 43, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(56, 189, 248, 0.4);
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .badge-stat {
          font-size: 1.75rem;
          font-weight: 800;
          color: #38bdf8;
          line-height: 1;
        }

        .badge-label {
          font-size: 0.78rem;
          color: #cbd5e1;
          margin-top: 4px;
        }

        .benefits-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .benefits-subtitle {
          font-size: 0.85rem;
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .benefits-title {
          font-size: 2.35rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .benefits-description {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .benefits-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 0.5rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          font-size: 1rem;
          color: #f1f5f9;
          font-weight: 500;
        }

        .check-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(2, 132, 199, 0.25);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(56, 189, 248, 0.4);
        }

        .niche-card {
          margin-top: 1rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(14px);
          border-radius: 18px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .niche-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .niche-icon-group {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(2, 132, 199, 0.3);
          color: #38bdf8;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
        }

        .niche-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
        }

        .niche-desc {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .btn-niche-action {
          align-self: flex-start;
          background: transparent;
          border: none;
          color: #38bdf8;
          font-weight: 700;
          font-size: 0.92rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 0.25rem 0;
          transition: color 0.2s ease;
        }

        .btn-niche-action:hover {
          color: #ffffff;
        }

        @media (max-width: 992px) {
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .benefits-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
