import React from 'react';
import { 
  MessageSquare, Tag, ShoppingCart, Clock, Brain, CheckCircle2 
} from 'lucide-react';

const FEATURES_DATA = [
  {
    icon: MessageSquare,
    title: 'Consulta de stock',
    description: 'El cliente pregunta por un repuesto de auto o bus y el agente confirma disponibilidad e inventario en tiempo real.',
    color: '#0284c7'
  },
  {
    icon: Tag,
    title: 'Consulta de precios',
    description: 'Brinda precios actualizados, descuentos por volumen, precios por caja o par, y promociones especiales.',
    color: '#0284c7'
  },
  {
    icon: ShoppingCart,
    title: 'Registro de pedidos',
    description: 'Crea y registra el pedido directamente desde el chat de WhatsApp, capturando datos de entrega con confirmación inmediata.',
    color: '#0284c7'
  },
  {
    icon: Clock,
    title: 'Atención 24/7',
    description: 'Responde consultas en cualquier momento (noches, domingos, feriados) por WhatsApp, sitio web o redes sociales.',
    color: '#0284c7'
  },
  {
    icon: Brain,
    title: 'Aprende de tu negocio',
    description: 'Se entrena con tu catálogo de repuestos, códigos OEM, equivalencias de marcas y reglas de venta específicas de tu tienda.',
    color: '#0284c7'
  }
];

export default function Features() {
  return (
    <section className="features-section section" id="funciones">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-subtitle">¿QUÉ PUEDE HACER EL AGENTE IA?</span>
          <h2 className="section-title">Funciones que impulsan tu negocio</h2>
          <p className="section-desc">
            Automatiza las tareas repetitivas de tu mostrador de repuestos y enfoca a tu equipo en cerrar ventas complejas.
          </p>
        </div>

        {/* 5 Grid Cards */}
        <div className="features-grid">
          {FEATURES_DATA.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <IconComponent size={28} className="feature-icon" />
                </div>
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.description}</p>
                <div className="feature-card-footer">
                  <CheckCircle2 size={16} className="feature-check" />
                  <span>Automatizado en tiempo real</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .features-section {
          background: #ffffff;
          position: relative;
        }

        .text-center {
          text-align: center;
        }

        .section-header {
          max-width: 700px;
          margin: 0 auto 3.5rem auto;
        }

        .section-subtitle {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 800;
          color: #0284c7;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-size: 2.35rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
        }

        .section-desc {
          font-size: 1.05rem;
          color: #64748b;
          margin-top: 0.75rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
        }

        .feature-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: relative;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: #ffffff;
          border-color: #0284c7;
          box-shadow: 0 20px 30px -10px rgba(2, 132, 199, 0.15);
        }

        .feature-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #e0f2fe;
          color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .feature-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .feature-card-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.55;
          flex: 1;
        }

        .feature-card-footer {
          margin-top: 1.25rem;
          padding-top: 0.85rem;
          border-top: 1px dashed #e2e8f0;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: #0284c7;
          font-weight: 600;
        }

        .feature-check {
          color: #0284c7;
        }

        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .section-title {
            font-size: 1.85rem;
          }
        }

        @media (max-width: 520px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
