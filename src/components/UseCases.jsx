import React from 'react';
import { Car, Bus, Wrench, ShieldCheck, ArrowUpRight } from 'lucide-react';

const CASES = [
  {
    icon: Car,
    category: 'Repuestos de Autos Ligeros',
    brands: 'Toyota, Nissan, Hyundai, Kia, Chevrolet, Suzuki',
    title: 'Cotizaciones instantáneas de frenos, suspensión y motor',
    desc: 'Los clientes suelen preguntar por compatibilidad de años y marcas de repuestos. El agente IA busca equivalencias en segundos y ofrece opciones original vs. alternativo.',
    stat: '+38%',
    statLabel: 'Tasa de conversión en cotizaciones'
  },
  {
    icon: Bus,
    category: 'Repuestos de Buses y Camiones',
    brands: 'Volvo, Scania, Mercedes-Benz, International, Hino',
    title: 'Ventas a flotas y mecánicos fuera de horario de oficina',
    desc: 'Los choferes y dueños de buses necesitan repuestos de emergencia en carretera durante la noche o fines de semana. El chatbot toma el pedido 24/7 sin perder ventas.',
    stat: '24/7',
    statLabel: 'Atención continua para emergencias'
  },
  {
    icon: Wrench,
    category: 'Lubricentros y Multimarca',
    brands: 'Aceites, Filtros, Baterías, Bujías, Fajas',
    title: 'Combos de mantenimiento y reserva de pedidos',
    desc: 'Ofrece kits automotrices automatizados (Aceite + Filtro + Bujías) recomendando la viscosidad adecuada según la marca y millaje del vehículo del cliente.',
    stat: '-75%',
    statLabel: 'Tiempo de espera del cliente'
  }
];

export default function UseCases({ onOpenDemoModal }) {
  return (
    <section className="cases-section section" id="casos-de-uso">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">CASOS DE USO REALES</span>
          <h2 className="section-title">Adaptado exactamente a tu rubro automotriz</h2>
          <p className="section-desc">
            Diseñado específicamente para resolver la complejidad de códigos, marcas y compatibilidades del sector repuestos.
          </p>
        </div>

        <div className="cases-grid">
          {CASES.map((item, idx) => {
            const IconC = item.icon;
            return (
              <div key={idx} className="case-card">
                <div className="case-header">
                  <div className="case-icon-box">
                    <IconC size={26} />
                  </div>
                  <div>
                    <span className="case-category">{item.category}</span>
                    <span className="case-brands">{item.brands}</span>
                  </div>
                </div>

                <h3 className="case-title">{item.title}</h3>
                <p className="case-desc">{item.desc}</p>

                <div className="case-footer">
                  <div className="case-stat-group">
                    <span className="case-stat-val">{item.stat}</span>
                    <span className="case-stat-lbl">{item.statLabel}</span>
                  </div>
                  <button onClick={onOpenDemoModal} className="case-btn-demo">
                    <span>Demo</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cases-section {
          background: #ffffff;
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .case-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .case-card:hover {
          transform: translateY(-4px);
          border-color: #0284c7;
          box-shadow: 0 20px 30px -10px rgba(2, 132, 199, 0.15);
        }

        .case-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .case-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
        }

        .case-category {
          display: block;
          font-weight: 700;
          font-size: 1.05rem;
          color: #0f172a;
        }

        .case-brands {
          display: block;
          font-size: 0.78rem;
          color: #0284c7;
          font-weight: 600;
        }

        .case-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.35;
          margin-bottom: 0.75rem;
        }

        .case-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.55;
          flex: 1;
        }

        .case-footer {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .case-stat-group {
          display: flex;
          flex-direction: column;
        }

        .case-stat-val {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0284c7;
          line-height: 1;
        }

        .case-stat-lbl {
          font-size: 0.72rem;
          color: #64748b;
          margin-top: 2px;
        }

        .case-btn-demo {
          background: #e0f2fe;
          color: #0284c7;
          border: none;
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }

        .case-btn-demo:hover {
          background: #0284c7;
          color: #ffffff;
        }

        @media (max-width: 992px) {
          .cases-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
