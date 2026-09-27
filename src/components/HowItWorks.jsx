import React from 'react';
import { MessageSquare, Brain, ShoppingCart, TrendingUp, ArrowRight } from 'lucide-react';

const STEPS_DATA = [
  {
    step: '1',
    icon: MessageSquare,
    title: '1. El cliente pregunta',
    description: 'El cliente escribe por WhatsApp o web consultando por un repuesto (marca, modelo, año, OEM), precio o disponibilidad.'
  },
  {
    step: '2',
    icon: Brain,
    title: '2. El agente IA responde',
    description: 'En 3 segundos, el agente consulta tu inventario de repuestos y responde con precio exacto, marca y stock disponible.'
  },
  {
    step: '3',
    icon: ShoppingCart,
    title: '3. Se confirma el pedido',
    description: 'El agente solicita los datos de envío, valida la forma de pago y emite la confirmación del pedido de repuestos.'
  },
  {
    step: '4',
    icon: TrendingUp,
    title: '4. Tú haces crecer tu negocio',
    description: 'Ganas más ventas en horario no laboral, atiendes instantáneamente y fidelizas a tus clientes del rubro automotriz.'
  }
];

export default function HowItWorks() {
  return (
    <section className="how-section section" id="como-funciona">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">EN SOLO 4 PASOS</span>
          <h2 className="section-title">Cómo funciona</h2>
          <p className="section-desc">
            Implementar el agente IA en tu tienda de repuestos es rápido, sin complicaciones y compatible con tu catálogo existente.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="steps-wrapper">
          {STEPS_DATA.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <React.Fragment key={idx}>
                <div className="step-card">
                  <div className="step-badge">{item.step}</div>
                  <div className="step-icon-box">
                    <IconComp size={30} />
                  </div>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-desc">{item.description}</p>
                </div>

                {idx < STEPS_DATA.length - 1 && (
                  <div className="step-arrow">
                    <ArrowRight size={24} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <style>{`
        .how-section {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .steps-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 2rem;
        }

        .step-card {
          flex: 1;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-lg);
          padding: 2rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(2, 132, 199, 0.12);
          border-color: #0284c7;
        }

        .step-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0284c7;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(2, 132, 199, 0.4);
        }

        .step-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: #e0f2fe;
          color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .step-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.65rem;
        }

        .step-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.55;
        }

        .step-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          padding-top: 5rem;
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .steps-wrapper {
            flex-direction: column;
            gap: 2rem;
          }
          .step-arrow {
            transform: rotate(90deg);
            padding-top: 0;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
