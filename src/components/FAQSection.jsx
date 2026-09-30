import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "¿Cómo se integra el Agente IA con el inventario de mi tienda?",
      a: "El Agente IA se puede conectar directamente mediante API a tu sistema ERP/pos, o mediante hojas de cálculo (Google Sheets/Excel) sincronizadas en tiempo real con los precios y stock de tu local.",
    },
    {
      q: "¿Demora mucho implementar el chatbot customizado para mi negocio?",
      a: "No. El proceso de consultoría e integración inicial suele tomar entre 3 a 7 días hábiles, donde dejamos el chatbot 100% entrenado con tu catálogo y listo para operar.",
    },
    {
      q: "¿Puede atender por WhatsApp y en mi sitio web al mismo tiempo?",
      a: "¡Sí! El mismo Agente IA centralizado atiende en tu canal de WhatsApp Business, web e-commerce y redes sociales sin costo ni esfuerzo adicional.",
    },
    {
      q: "¿Qué sucede si un cliente hace una consulta técnica muy específica?",
      a: "Si la consulta excede la configuración del chatbot o se requiere una negociación especial, el agente deriva la conversación automáticamente a un asesor humano de tu equipo con todo el resumen del chat.",
    },
    {
      q: "¿Puedo personalizar el tono y las promociones de mi tienda?",
      a: "Totalmente. Adaptamos las respuestas para que reflejen el estilo de tu tienda, apliquen tus promociones vigentes (ej. combos de procesador + placa) y resalten tus garantías.",
    },
    {
      q: "¿Cómo funciona la sesión de consultoría que solicito en la demo?",
      a: "En la sesión revisamos la estructura actual de tu catálogo, tus canales de venta principales y te mostramos en vivo cómo el Agente IA respondería a las preguntas de tus clientes reales.",
    },
  ];

  return (
    <section
      id="faq"
      style={{
        padding: '90px 24px',
        backgroundColor: '#F8FAFC',
        color: '#0F172A',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            PREGUNTAS FRECUENTES
          </div>
          <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            Resuelve todas tus dudas
          </h2>
          <p style={{ fontSize: '16px', color: '#64748B' }}>
            Todo lo que necesitas saber sobre la implementación del chatbot IA para tu tienda.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: isOpen ? '1px solid #0066FF' : '1px solid #E2E8F0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? '0 4px 18px rgba(0,102,255,0.08)' : '0 2px 4px rgba(0,0,0,0.02)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px',
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>
                    {faq.q}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? '#0066FF' : '#64748B',
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      fontSize: '15px',
                      color: '#475569',
                      lineHeight: '1.6',
                      borderTop: '1px border #F1F5F9',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
