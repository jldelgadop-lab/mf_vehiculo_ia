import React from 'react';
import { Database, DollarSign, FileCheck, Smartphone, ShieldCheck, Zap } from 'lucide-react';

export function UseCases({ onRequestDemo }) {
  const cases = [
    {
      icon: <Database size={24} color="#0066FF" />,
      title: "Control de Stock Automatizado",
      desc: "El cliente consulta por modelos específicos (ej. SSD 1TB NVMe, RTX 4060, RAM DDR4) y el bot verifica existencias al instante.",
    },
    {
      icon: <DollarSign size={24} color="#0066FF" />,
      title: "Cotizaciones Rápidas de Precios",
      desc: "Brinda precios transparentes, ofertas por liquidación y combinaciones de piezas para armar PCs a medida.",
    },
    {
      icon: <FileCheck size={24} color="#0066FF" />,
      title: "Registro directo de Pedidos",
      desc: "Captura el pedido completo con datos del cliente y genera la alerta a tu equipo de despacho o sistema de ventas.",
    },
    {
      icon: <Smartphone size={24} color="#0066FF" />,
      title: "Multi-canal: WhatsApp & Web",
      desc: "Funciona perfectamente integrado en tu número de WhatsApp Business y como widget interactivo en tu web e-commerce.",
    },
    {
      icon: <Zap size={24} color="#0066FF" />,
      title: "Cero Tiempo de Espera",
      desc: "Tus clientes no tienen que esperar a que un vendedor quede libre para saber si un componente está disponible.",
    },
    {
      icon: <ShieldCheck size={24} color="#0066FF" />,
      title: "Customización 100% a tu Medida",
      desc: "Entrenamos al chatbot con el catálogo, políticas y marcas de tu propia tienda de tecnología.",
    },
  ];

  return (
    <section
      id="casos-de-uso"
      style={{
        padding: '90px 24px',
        backgroundColor: '#FFFFFF',
        color: '#0F172A',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
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
            CASOS DE USO Y BENEFICIOS
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Diseñado específicamente para el sector cómputo
          </h2>
          <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.6 }}>
            Optimiza el flujo de ventas de tu negocio con funciones creadas para resolver las consultas más frecuentes de compradores de tecnología.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="cases-grid"
        >
          {cases.map((c, i) => (
            <div
              key={i}
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#0066FF';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,102,255,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#EBF3FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {c.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5 }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cases-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .cases-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
