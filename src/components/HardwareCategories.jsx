import React from 'react';
import { Laptop, HardDrive, Cpu, Monitor, Printer, MoreHorizontal, Check } from 'lucide-react';

export function HardwareCategories() {
  const categories = [
    { icon: <Laptop size={22} color="#0066FF" />, name: "Laptops y PCs" },
    { icon: <HardDrive size={22} color="#0066FF" />, name: "Discos duros (SSD / HDD)" },
    { icon: <Cpu size={22} color="#0066FF" />, name: "Memorias RAM" },
    { icon: <Monitor size={22} color="#0066FF" />, name: "Tarjetas gráficas" },
    { icon: <Printer size={22} color="#0066FF" />, name: "Impresoras y accesorias" },
    { icon: <MoreHorizontal size={22} color="#0066FF" />, name: "Y mucho más..." },
  ];

  return (
    <section
      id="beneficios"
      style={{
        padding: '80px 24px',
        backgroundColor: '#F8FAFC',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #EBF3FF 0%, #F0F6FF 100%)',
            border: '1px solid #D0E1FD',
            borderRadius: '24px',
            padding: '48px 40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className="hardware-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  color: '#0066FF',
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                IDEAL PARA TIENDAS DE
              </div>
              <h2
                style={{
                  fontSize: '34px',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginBottom: '14px',
                  letterSpacing: '-0.5px',
                }}
              >
                Computadoras y sus partes
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: '#475569',
                  marginBottom: '32px',
                  lineHeight: 1.5,
                }}
              >
                El agente IA puede responder sobre una amplia gama de productos de cómputo y hardware:
              </p>

              {/* Category Chips Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '14px',
                }}
              >
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                      transition: 'transform 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.borderColor = '#0066FF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: '#F0F6FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B' }}>
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hardware Graphic Showcase */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0, 102, 255, 0.15)',
                  border: '3px solid #FFFFFF',
                  background: '#0F172A',
                  position: 'relative',
                }}
              >
                {/* Computer hardware image display */}
                <img
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop"
                  alt="Componentes de computadoras"
                  style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.1) 60%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                    color: '#FFFFFF',
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(0, 102, 255, 0.9)',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 700,
                      width: 'fit-content',
                      marginBottom: '8px',
                      boxShadow: '0 4px 12px rgba(0,102,255,0.4)',
                    }}
                  >
                    ⚡ Integración inmediata con tu inventario
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FFF' }}>
                    Soporta especificaciones técnicas detalladas
                  </h4>
                  <p style={{ fontSize: '13px', color: '#CBD5E1', marginTop: '4px' }}>
                    Responde sobre compatibilidad de sockets, memoria RAM, potencia de fuentes y más.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hardware-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
