import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Send, CheckCheck, Sparkles, 
  Smartphone, MessageSquare, ShieldCheck, Volume2, VolumeX, Maximize2, Video, ExternalLink
} from 'lucide-react';

// =========================================================================
// 🎥 CONFIGURACIÓN DE URL DE YOUTUBE:
// Reemplaza "XXXXXX" con el ID de tu video de YouTube (Ejemplo: "dQw4w9WgXcQ")
// O también puedes poner la URL completa de incrustación de YouTube.
// =========================================================================
export const YOUTUBE_VIDEO_ID = "XXXXXX"; 

const PRESET_KNOWLEDGE = [
  {
    keywords: ['pastilla', 'freno', 'hilux', 'toyota'],
    answer: '¡Hola! Sí tenemos pastillas de freno para Toyota Hilux.\n\n• Marca: Brembo Cerámica\n• Precio: S/ 285.00\n• Stock disponible: 14 juegos\n\n¿Deseas registrar un pedido para envío o recojo en tienda?'
  },
  {
    keywords: ['filtro', 'aceite', 'volvo', 'bus', 'b270f', 'fh'],
    answer: '¡Contamos con stock disponible! 🚌\n\n• Filtro de Aceite para Bus Volvo (FH / B270F) Marca Mann-Filter\n• Precio por unidad: S/ 145.00 (Descuento por caja x 12u: S/ 130.00 c/u)\n• Stock: 35 unidades\n\n¿Registramos tu pedido?'
  },
  {
    keywords: ['amortiguador', 'nissan', 'frontier', 'np300'],
    answer: '¡Por supuesto! Tenemos amortiguadores reforzados para Nissan Frontier NP300.\n\n• Marca: KYB Japan (Gas-A-Just)\n• Precio del par delantero: S/ 640.00\n• Stock: 8 pares\n\n¿Deseas confirmación de pedido?'
  },
  {
    keywords: ['precio', 'bateria', 'bosch', '13', 'placas'],
    answer: '¡Sí! Batería Bosch S4 13 Placas de 65Ah (Libre de mantenimiento).\n\n• Precio entregando batería usada: S/ 320.00\n• Precio normal: S/ 360.00\n• Stock: 9 unidades\n\n¿Deseas envío a domicilio urgente?'
  }
];

export default function VideoDemoSimulator({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('video'); // 'video' or 'interactive'
  const [isPlayingYouTube, setIsPlayingYouTube] = useState(false);

  // Interactive Chat state
  const [interactiveMessages, setInteractiveMessages] = useState([
    {
      type: 'bot',
      text: '¡Hola! 🚗🤖 Soy el Agente IA de AutoRepuestos. Puedes preguntarme por stock de repuestos de autos o buses, precios o registrar un pedido de prueba.',
      time: '10:24'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [interactiveTyping, setInteractiveTyping] = useState(false);

  const chatContainerRef = useRef(null);

  // Scroll down chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [interactiveMessages, interactiveTyping]);

  const handleSendInteractive = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      type: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setInteractiveMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setInteractiveTyping(true);

    setTimeout(() => {
      setInteractiveTyping(false);
      
      const lower = text.toLowerCase();
      let matched = PRESET_KNOWLEDGE.find(item => 
        item.keywords.some(k => lower.includes(k))
      );

      let replyText = matched 
        ? matched.answer 
        : `¡Claro! He verificado en el sistema ERP de la tienda. 📦\n\n• Producto: ${text}\n• Estado: Stock disponible en almacén principal\n• Precio estimado: S/ 195.00\n• Tiempo de entrega: 24 horas\n\n¿Te gustaría que agendemos una demo para conectar este agente con tu catálogo real?`;

      setInteractiveMessages(prev => [
        ...prev,
        {
          type: 'bot',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1200);
  };

  const embedUrl = YOUTUBE_VIDEO_ID.startsWith('http')
    ? YOUTUBE_VIDEO_ID
    : `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&autoplay=${isPlayingYouTube ? 1 : 0}`;

  return (
    <div className="video-demo-section" id="video-demo">
      {/* Mode Control Bar */}
      <div className="demo-mode-tabs">
        <button 
          className={`mode-tab-btn ${activeTab === 'video' ? 'active' : ''}`}
          onClick={() => setActiveTab('video')}
        >
          <Video size={18} />
          <span>Ver Video Demo de YouTube</span>
        </button>
        <button 
          className={`mode-tab-btn ${activeTab === 'interactive' ? 'active' : ''}`}
          onClick={() => setActiveTab('interactive')}
        >
          <Sparkles size={18} />
          <span>Probar Demo Interactivamente</span>
        </button>
      </div>

      {/* Main Showcase Container */}
      <div className="demo-window">
        {/* Curved Pointer Annotation like design image */}
        <div className="demo-annotation">
          <span>Así funciona nuestro agente IA ↴</span>
        </div>

        {/* Frame Container */}
        <div className="player-frame">
          {activeTab === 'video' ? (
            /* YouTube Video Embed Container */
            <div className="youtube-player-container">
              <div className="youtube-responsive-wrapper">
                <iframe 
                  src={embedUrl}
                  title="Demo Agente IA para Tiendas de Repuestos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="youtube-iframe"
                ></iframe>

                {/* Optional overlay banner indicating URL configuration */}
                {YOUTUBE_VIDEO_ID === "XXXXXX" && (
                  <div className="youtube-placeholder-overlay">
                    <div className="yt-badge">
                      <Video size={22} color="#ff0000" />
                      <span>URL de Video YouTube Configurada</span>
                    </div>
                    <h4>https://www.youtube.com/embed/{YOUTUBE_VIDEO_ID}</h4>
                    <p>
                      Para cambiar este video, actualiza la variable <code>YOUTUBE_VIDEO_ID</code> en el código.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Video Metadata Controls (Matching design image 0:00 / 1:45 bar) */}
              <div className="video-player-controls">
                <div className="v-info-group">
                  <span className="v-status-dot"></span>
                  <span className="v-info-title">Demo Agente IA Repuestos</span>
                </div>
                <div className="v-time-display">0:00 / 1:45</div>
                <button className="v-icon-btn" onClick={onOpenDemoModal} title="Solicitar Demo Customizada">
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Smartphone Chat Simulator */
            <div className="smartphone-body">
              {/* Phone Top Speaker & Notch */}
              <div className="phone-notch">
                <div className="phone-speaker"></div>
                <div className="phone-camera"></div>
              </div>

              {/* WhatsApp App Header */}
              <div className="whatsapp-header">
                <div className="wa-avatar">
                  <Smartphone size={20} color="#ffffff" />
                </div>
                <div className="wa-info">
                  <span className="wa-name">AutoRepuestos IA</span>
                  <span className="wa-status">
                    <span className="online-dot"></span> En línea
                  </span>
                </div>
              </div>

              {/* Chat Body */}
              <div className="whatsapp-chat" ref={chatContainerRef}>
                <div className="chat-date-badge">Hoy - Cotización & Pedidos</div>

                {interactiveMessages.map((msg, idx) => (
                  <div key={idx} className={`chat-bubble-row ${msg.type === 'user' ? 'row-user' : 'row-bot'}`}>
                    <div className={`chat-bubble ${msg.type === 'user' ? 'bubble-user' : 'bubble-bot'}`}>
                      <p className="bubble-text">{msg.text}</p>
                      <div className="bubble-meta">
                        <span className="bubble-time">{msg.time}</span>
                        {msg.type === 'user' && <CheckCheck size={15} className="blue-ticks" />}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {interactiveTyping && (
                  <div className="chat-bubble-row row-bot">
                    <div className="chat-bubble bubble-bot typing-bubble">
                      <span className="typing-text">AutoRepuestos IA está escribiendo</span>
                      <div className="dots-pulse">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="wa-input-bar">
                <input 
                  type="text" 
                  placeholder="Pregunta por un repuesto (ej: pastillas Hilux)..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendInteractive()}
                />
                <button 
                  className="wa-send-btn"
                  onClick={() => handleSendInteractive()}
                  disabled={!inputMessage.trim()}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips for Interactive Mode */}
        {activeTab === 'interactive' && (
          <div className="preset-suggestions">
            <span className="preset-title">💡 Probar preguntas rápidas:</span>
            <div className="chips-row">
              <button onClick={() => handleSendInteractive('Pastillas de freno Toyota Hilux')}>
                🚗 Pastillas Hilux
              </button>
              <button onClick={() => handleSendInteractive('Filtro de aceite bus Volvo B270F')}>
                🚌 Filtro Volvo Bus
              </button>
              <button onClick={() => handleSendInteractive('Amortiguadores Nissan Frontier')}>
                🛻 Amortiguadores Frontier
              </button>
              <button onClick={() => handleSendInteractive('Precio de bateria Bosch 13 placas')}>
                🔋 Batería Bosch
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .video-demo-section {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        .demo-mode-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .mode-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.07);
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .mode-tab-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        .mode-tab-btn.active {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          border-color: #38bdf8;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4);
        }

        .demo-window {
          position: relative;
          background: #0f172a;
          border: 2px solid rgba(56, 189, 248, 0.3);
          border-radius: 24px;
          padding: 1.25rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(2, 132, 199, 0.25);
          background-image: radial-gradient(circle at 50% 0%, rgba(2, 132, 199, 0.15), transparent 70%);
        }

        .demo-annotation {
          position: absolute;
          top: -24px;
          left: 40px;
          background: #38bdf8;
          color: #0b132b;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 12px rgba(56, 189, 248, 0.4);
          transform: rotate(-3deg);
          z-index: 10;
        }

        .player-frame {
          position: relative;
          background: #070a13;
          border-radius: 18px;
          padding: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .youtube-player-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .youtube-responsive-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          border-radius: 14px;
          overflow: hidden;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .youtube-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .youtube-placeholder-overlay {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: rgba(11, 19, 43, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(56, 189, 248, 0.4);
          border-radius: 10px;
          padding: 0.65rem 1rem;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 4px;
          pointer-events: none;
        }

        .yt-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #38bdf8;
        }

        .youtube-placeholder-overlay h4 {
          font-size: 0.85rem;
          font-family: monospace;
          color: #38bdf8;
        }

        .youtube-placeholder-overlay p {
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .video-player-controls {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .v-info-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .v-status-dot {
          width: 8px;
          height: 8px;
          background: #25d366;
          border-radius: 50%;
        }

        .v-info-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
        }

        .v-time-display {
          font-size: 0.78rem;
          color: #94a3b8;
          font-family: monospace;
        }

        .v-icon-btn {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.3rem;
          border-radius: 6px;
          transition: background 0.2s;
        }

        .v-icon-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* Smartphone Styles */
        .smartphone-body {
          max-width: 440px;
          margin: 0 auto;
          background: #0b141a;
          border-radius: 20px;
          border: 3px solid #1f293d;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          height: 480px;
          overflow: hidden;
        }

        .phone-notch {
          height: 24px;
          background: #070d12;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .phone-speaker {
          width: 50px;
          height: 4px;
          background: #232d36;
          border-radius: 2px;
        }

        .phone-camera {
          width: 8px;
          height: 8px;
          background: #232d36;
          border-radius: 50%;
        }

        .whatsapp-header {
          background: #1f2c34;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid #2a3942;
        }

        .wa-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wa-info {
          display: flex;
          flex-direction: column;
        }

        .wa-name {
          color: #e9edef;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .wa-status {
          font-size: 0.75rem;
          color: #8696a0;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .online-dot {
          width: 7px;
          height: 7px;
          background: #25d366;
          border-radius: 50%;
          display: inline-block;
        }

        .whatsapp-chat {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          background: #0b141a;
          background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0);
          background-size: 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .chat-date-badge {
          align-self: center;
          background: #182229;
          color: #8696a0;
          font-size: 0.7rem;
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 0.5rem;
        }

        .chat-bubble-row {
          display: flex;
          width: 100%;
        }

        .row-user {
          justify-content: flex-end;
        }

        .row-bot {
          justify-content: flex-start;
        }

        .chat-bubble {
          max-width: 85%;
          padding: 0.65rem 0.85rem;
          border-radius: 12px;
          font-size: 0.88rem;
          line-height: 1.45;
          position: relative;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          white-space: pre-wrap;
        }

        .bubble-user {
          background: #005c4b;
          color: #e9edef;
          border-top-right-radius: 2px;
        }

        .bubble-bot {
          background: #202c33;
          color: #e9edef;
          border-top-left-radius: 2px;
          border-left: 3px solid #0284c7;
        }

        .bubble-meta {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
          margin-top: 4px;
        }

        .bubble-time {
          font-size: 0.65rem;
          color: #8696a0;
        }

        .blue-ticks {
          color: #53bdeb;
        }

        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 0.85rem;
        }

        .typing-text {
          font-size: 0.78rem;
          color: #8696a0;
          font-style: italic;
        }

        .dots-pulse {
          display: flex;
          gap: 3px;
        }

        .dots-pulse span {
          width: 4px;
          height: 4px;
          background: #38bdf8;
          border-radius: 50%;
          animation: pulseDot 1.4s infinite ease-in-out both;
        }

        .dots-pulse span:nth-child(1) { animation-delay: -0.32s; }
        .dots-pulse span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes pulseDot {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .wa-input-bar {
          background: #1f2c34;
          padding: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .wa-input-bar input {
          flex: 1;
          background: #2a3942;
          border: none;
          outline: none;
          color: #ffffff;
          padding: 0.55rem 0.85rem;
          border-radius: 20px;
          font-size: 0.85rem;
        }

        .wa-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #00a884;
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .wa-send-btn:disabled {
          background: #2a3942;
          color: #8696a0;
          cursor: not-allowed;
        }

        .preset-suggestions {
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .preset-title {
          font-size: 0.82rem;
          color: #94a3b8;
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .chips-row button {
          background: rgba(2, 132, 199, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.3);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .chips-row button:hover {
          background: rgba(2, 132, 199, 0.35);
          color: #ffffff;
          border-color: #38bdf8;
          transform: translateY(-1px);
        }

        @media (max-width: 600px) {
          .smartphone-body {
            height: 420px;
          }
          .demo-annotation {
            display: none;
          }
          .mode-tab-btn {
            font-size: 0.78rem;
            padding: 0.5rem 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
