import React from 'react';
import { MessageSquare, Cpu, ShoppingCart, TrendingUp, ChevronRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <MessageSquare size={28} color="#0066FF" />,
      title: 'El cliente consulta',
      description: 'El cliente pregunta por productos, precios, stock o disponibilidad.',
      bgColor: '#EBF3FF',
    },
    {
      number: 2,
      icon: <Cpu size={28} color="#0066FF" />,
      title: 'El agente IA responde',
      description: 'Usa la información de tu catálogo y stock en tiempo real.',
      bgColor: '#EBF3FF',
    },
    {
      number: 3,
      icon: <ShoppingCart size={28} color="#0066FF" />,
      title: 'Registra el pedido',
      description: 'Si el cliente decide comprar, el agente registra el pedido y te notifica.',
      bgColor: '#EBF3FF',
    },
    {
      number: 4,
      icon: <TrendingUp size={28} color="#0066FF" />,
      title: 'Tú haces crecer tu negocio',
      description: 'Más clientes, más ventas y mejor experiencia de compra.',
      bgColor: '#EBF3FF',
    },
  ];

  return (
    <section
      id="como-funciona"
      style={{
        padding: '90px 24px',
        backgroundColor: '#FFFFFF',
        color: '#0F172A',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div
            style={{
              color: '#0066FF',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            ¿CÓMO FUNCIONA?
          </div>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '16px',
              letterSpacing: '-0.5px',
            }}
          >
            Un agente IA que trabaja por ti
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: '#475569',
              lineHeight: 1.6,
            }}
          >
            Se integra a tu web, WhatsApp o tienda online y se encarga de atender, informar y registrar pedidos de forma automática.
          </p>
        </div>

        {/* 4 Steps Process Flow */}
        <div
          className="steps-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            position: 'relative',
            alignItems: 'stretch',
          }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '32px 24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 102, 255, 0.12)';
                  e.currentTarget.style.borderColor = '#0066FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                {/* Numbered Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '24px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#0066FF',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0, 102, 255, 0.4)',
                  }}
                >
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: step.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    marginTop: '8px',
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '10px',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '14px',
                    color: '#64748B',
                    lineHeight: 1.5,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .steps-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
