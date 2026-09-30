import React, { useState } from 'react';
import { Bot, User, Send, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';
import { CONFIG } from '../config';

export function InteractiveDemo({ onRequestDemo }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! 👋 Soy el Agente IA de tu tienda de cómputo. ¿Qué producto de hardware estás buscando hoy?',
      time: '12:00 PM',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sampleQueries = [
    "¿Tienes stock del disco duro SSD de 1TB?",
    "¿Cuánto cuesta la Tarjeta RTX 4060 y cuáles son sus specs?",
    "¿Tienen memoria RAM DDR4 de 16GB disponible?",
    "Quiero hacer un pedido de 2 SSDs 1TB",
  ];

  const handleSend = (userText) => {
    const textToSubmit = userText || inputVal;
    if (!textToSubmit.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add user message
    const newMessages = [
      ...messages,
      { sender: 'user', text: textToSubmit, time: timeStr },
    ];
    setMessages(newMessages);
    setInputVal('');
    setIsTyping(true);

    // Simulate AI response based on hardware query
    setTimeout(() => {
      let botResponse = '';
      const lower = textToSubmit.toLowerCase();

      if (lower.includes('ssd') || lower.includes('disco')) {
        const prod = CONFIG.sampleProducts.find((p) => p.id === 'ssd-1tb');
        botResponse = `¡Sí! Tenemos disponible el ${prod.name}.\n💰 Precio: ${prod.price}\n📦 Stock actual: ${prod.stock} unidades.\n⚙️ Specs: ${prod.specs}.\n\n¿Deseas registrar un pedido ahora?`;
      } else if (lower.includes('4060') || lower.includes('tarjeta') || lower.includes('gpu')) {
        const prod = CONFIG.sampleProducts.find((p) => p.id === 'rtx-4060');
        botResponse = `¡Excelente elección! Tenemos la ${prod.name}.\n💰 Precio especial: ${prod.price}\n📦 Stock: ${prod.stock} unidades en almacén.\n⚙️ Specs: ${prod.specs}.\n\nTe podemos generar el pedido directamente.`;
      } else if (lower.includes('ram') || lower.includes('memoria')) {
        const prod = CONFIG.sampleProducts.find((p) => p.id === 'ram-16gb');
        botResponse = `¡Claro! Disponemos de la ${prod.name}.\n💰 Precio: ${prod.price}\n📦 Stock: ${prod.stock} kits disponibles.\n⚙️ Specs: ${prod.specs}.`;
      } else if (lower.includes('pedido') || lower.includes('comprar')) {
        botResponse = `¡Perfecto! 📦 He registrado tu solicitud de pedido temporal.\n\nPara confirmar los datos de envío y emisión de comprobante, te derivaré con un asesor o registraré tu compra automáticamente.\n\n✨ Así es como respondería con tu propio catálogo en tiempo real.`;
      } else {
        botResponse = `¡Con gusto te ayudo! Como Agente IA de tu tienda, puedo revisar automáticamente el stock de cualquier producto, brindar precios actualizados y tomar el pedido de tu cliente en segundos. ⚡`;
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, time: timeStr },
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section
      id="simulador"
      style={{
        padding: '90px 24px',
        backgroundColor: '#070E20',
        color: '#FFFFFF',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(0, 200, 255, 0.15)',
              color: '#00C8FF',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            <Sparkles size={14} />
            PRUEBA EN TIEMPO REAL
          </div>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '14px',
            }}
          >
            Simulador del Agente IA en Acción
          </h2>
          <p style={{ fontSize: '16px', color: '#94A3B8' }}>
            Prueba interactuando como si fueras un cliente buscando componentes de cómputo en tu tienda.
          </p>
        </div>

        {/* Simulator Frame */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            background: '#0F172A',
            border: '1px solid rgba(0, 102, 255, 0.3)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 102, 255, 0.15)',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              background: 'linear-gradient(90deg, #0A1633 0%, #0F234D 100%)',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0066FF 0%, #00C8FF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Bot size={22} color="#FFF" />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFF' }}>
                  Agente IA - Tienda de Cómputo Demo
                </h4>
                <div style={{ fontSize: '12px', color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                  Conectado a inventario en tiempo real
                </div>
              </div>
            </div>

            <button
              onClick={onRequestDemo}
              style={{
                background: '#0066FF',
                color: '#FFF',
                fontWeight: 600,
                fontSize: '13px',
                padding: '8px 16px',
                borderRadius: '9999px',
                border: 'none',
              }}
            >
              Solicitar para mi negocio
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div
            style={{
              background: '#0B1329',
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
            }}
          >
            <span style={{ fontSize: '12px', color: '#64748B', alignSelf: 'center', whiteSpace: 'nowrap' }}>
              Probar preguntas:
            </span>
            {sampleQueries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#CBD5E1',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 102, 255, 0.2)';
                  e.currentTarget.style.borderColor = '#0066FF';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#CBD5E1';
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div
            style={{
              padding: '24px',
              minHeight: '300px',
              maxHeight: '400px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: '#091126',
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: '10px',
                }}
              >
                {m.sender === 'bot' && (
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: '#0066FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Bot size={18} color="#FFF" />
                  </div>
                )}

                <div
                  style={{
                    maxWidth: '75%',
                    background: m.sender === 'user' ? '#0066FF' : '#1E293B',
                    color: '#FFFFFF',
                    padding: '12px 16px',
                    borderRadius: m.sender === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {m.text}
                  <div
                    style={{
                      fontSize: '10px',
                      color: m.sender === 'user' ? 'rgba(255,255,255,0.7)' : '#64748B',
                      marginTop: '6px',
                      textAlign: 'right',
                    }}
                  >
                    {m.time}
                  </div>
                </div>

                {m.sender === 'user' && (
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: '#334155',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <User size={18} color="#FFF" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00C8FF', fontSize: '13px' }}>
                <Bot size={18} />
                <span>El agente está escribiendo...</span>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div
            style={{
              padding: '16px 20px',
              background: '#0F172A',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              gap: '12px',
            }}
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe una pregunta sobre stock, precios o realiza un pedido..."
              style={{
                flex: 1,
                background: '#1E293B',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '12px 18px',
                color: '#FFF',
                fontSize: '14px',
              }}
            />
            <button
              onClick={() => handleSend()}
              style={{
                background: '#0066FF',
                color: '#FFF',
                border: 'none',
                borderRadius: '12px',
                padding: '0 20px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
            >
              Enviar
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
