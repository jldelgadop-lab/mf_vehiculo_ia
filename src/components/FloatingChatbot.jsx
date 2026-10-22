import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minus, HelpCircle, RotateCcw, Sparkles, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { CONFIG } from '../config';
import { sendChatMessage, fetchChatMessageVoice } from '../services/chatbotService';

export function FloatingChatbot({ onRequestDemo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Estados para control de voz natural
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [playingMessageId, setPlayingMessageId] = useState(null);
  const [loadingVoiceMessageId, setLoadingVoiceMessageId] = useState(null);
  const currentAudioRef = useRef(null);

  // Mensaje inicial de bienvenida según el diseño oficial
  const initialBotMessage = {
    id: 'welcome-1',
    sender: 'bot',
    text: '¡Hola! 👋 Soy el asistente de Agentika. Puedo ayudarte a resolver tus dudas sobre nuestro agente de ventas con IA, sus funcionalidades y cómo puede ayudar a tu negocio de cómputo.',
    time: formatTime(new Date()),
  };

  const [messages, setMessages] = useState([initialBotMessage]);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  // Preguntas sugeridas según la imagen de diseño
  const suggestedQuestions = CONFIG.chatbotSuggestedQuestions || [
    '¿Qué es Agentika?',
    '¿Puede consultar mi stock y precios?',
    '¿Funciona con WhatsApp?',
    '¿Cuánto cuesta implementar?',
  ];

  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Auto-scroll al final del chat cuando se envían nuevos mensajes
  const scrollToBottom = (behavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isOpen && !isMinimized && messages.length > 1) {
      scrollToBottom('smooth');
    }
  }, [messages, isLoading, isOpen, isMinimized]);

  // Foco al input cuando se abre el chat
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [isOpen, isMinimized]);

  // Ocultar tooltip después de 8 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Detener reproducción de audio al cerrar o minimizar
  useEffect(() => {
    if (!isOpen || isMinimized) {
      stopCurrentAudio();
    }
  }, [isOpen, isMinimized]);

  const stopCurrentAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
    setPlayingMessageId(null);
    setLoadingVoiceMessageId(null);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setShowTooltip(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    stopCurrentAudio();
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    stopCurrentAudio();
  };

  const handleRestore = () => {
    setIsMinimized(false);
  };

  /**
   * Reproduce la locución con voz natural para un mensaje
   */
  const handlePlayVoice = async (messageId, text) => {
    // Si ya se está reproduciendo este mismo mensaje, pausarlo/detenerlo
    if (playingMessageId === messageId) {
      stopCurrentAudio();
      return;
    }

    // Detener cualquier audio previo
    stopCurrentAudio();
    setLoadingVoiceMessageId(messageId);

    try {
      const result = await fetchChatMessageVoice(text);

      if (result.success && result.audioUrl) {
        const audio = new Audio(result.audioUrl);
        currentAudioRef.current = audio;
        setPlayingMessageId(messageId);
        setLoadingVoiceMessageId(null);

        audio.onended = () => {
          setPlayingMessageId(null);
          currentAudioRef.current = null;
        };

        audio.onerror = (e) => {
          console.error('[FloatingChatbot] Error al reproducir audio:', e);
          setPlayingMessageId(null);
          currentAudioRef.current = null;
        };

        try {
          await audio.play();
        } catch (playErr) {
          console.warn('[FloatingChatbot] Autoplay bloqueado por el navegador:', playErr);
          setPlayingMessageId(null);
          currentAudioRef.current = null;
        }
      } else {
        console.warn('[FloatingChatbot] No se pudo obtener la voz:', result.error);
        setLoadingVoiceMessageId(null);
      }
    } catch (err) {
      console.error('[FloatingChatbot] Error al solicitar voz natural:', err);
      setLoadingVoiceMessageId(null);
    }
  };

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    setInputMessage('');

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: formatTime(new Date()),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendChatMessage(query);

      if (response.success) {
        const botMessage = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: response.respuesta,
          time: formatTime(new Date()),
        };
        setMessages((prev) => [...prev, botMessage]);

        // Si la voz automática está activada, solicitar la voz natural a ms-landing
        if (isVoiceEnabled) {
          setTimeout(() => {
            handlePlayVoice(botMessage.id, response.respuesta);
          }, 300);
        }
      } else {
        const errorMessage = {
          id: `err-${Date.now()}`,
          sender: 'bot',
          isError: true,
          failedQuery: query,
          text: response.error || 'Lo sentimos, no pudimos procesar tu respuesta en este momento.',
          time: formatTime(new Date()),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (err) {
      const errorMessage = {
        id: `err-${Date.now()}`,
        sender: 'bot',
        isError: true,
        failedQuery: query,
        text: 'Ocurrió un error inesperado al conectar con el servidor. Por favor verifica que ms-landing esté activo.',
        time: formatTime(new Date()),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleRetry = (failedQuery) => {
    if (failedQuery) {
      handleSendMessage(failedQuery);
    }
  };

  // Formateador simple de texto para dar soporte a saltos de línea y negritas en markdown
  const renderMessageText = (text) => {
    if (!text) return null;
    const paragraphs = text.split('\n');
    return paragraphs.map((paragraph, pIdx) => {
      const parts = paragraph.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={pIdx} style={{ display: 'block', minHeight: paragraph ? undefined : '8px' }}>
          {parts.map((part, idx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={idx}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <>
      {/* ======================================================== */}
      {/* 1. BOTÓN FLOTANTE EN LA PARTE INFERIOR DERECHA           */}
      {/* ======================================================== */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 995,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* Tooltip opcional inicial */}
        {showTooltip && !isOpen && (
          <div
            onClick={handleOpen}
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              padding: '8px 14px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 600,
              boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
              border: '1px solid rgba(0, 102, 255, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            <Sparkles size={14} color="#00C8FF" />
            <span>¿Tienes dudas? Chatea y escucha a Agentika</span>
          </div>
        )}

        {/* Botón Circular Principal del Chatbot */}
        <button
          id="btn-open-chatbot"
          onClick={() => {
            if (isOpen && !isMinimized) {
              handleClose();
            } else if (isOpen && isMinimized) {
              handleRestore();
            } else {
              handleOpen();
            }
          }}
          aria-label="Abrir asistente virtual de Agentika"
          title="Abrir chat con el Asistente IA de Agentika"
          style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0052CC 0%, #0066FF 100%)',
            color: '#FFFFFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0, 102, 255, 0.45), 0 2px 8px rgba(0,0,0,0.15)',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transform: isOpen && !isMinimized ? 'scale(0.95)' : 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 102, 255, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = isOpen && !isMinimized ? 'scale(0.95)' : 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 102, 255, 0.45), 0 2px 8px rgba(0,0,0,0.15)';
          }}
        >
          {/* Icono del Bot (o cruz si está abierto) */}
          {isOpen && !isMinimized ? (
            <X size={26} color="#FFFFFF" strokeWidth={2.5} />
          ) : (
            <Bot size={30} color="#FFFFFF" strokeWidth={2.2} />
          )}

          {/* Punto verde indicador de estado En Línea (24/7) */}
          <span
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '14px',
              height: '14px',
              backgroundColor: '#10B981',
              borderRadius: '50%',
              border: '2.5px solid #FFFFFF',
              boxShadow: '0 0 6px rgba(16, 185, 129, 0.6)',
            }}
          />
        </button>
      </div>

      {/* ======================================================== */}
      {/* 2. VENTANA FLOTANTE DEL CHATBOT                          */}
      {/* ======================================================== */}
      {isOpen && (
        <div
          id="chatbot-window"
          style={{
            position: 'fixed',
            bottom: isMinimized ? '24px' : '96px',
            right: '24px',
            width: isMinimized ? '280px' : '390px',
            maxWidth: 'calc(100vw - 32px)',
            height: isMinimized ? '56px' : '560px',
            maxHeight: isMinimized ? '56px' : 'calc(100vh - 120px)',
            backgroundColor: '#FFFFFF',
            borderRadius: isMinimized ? '16px' : '20px',
            boxShadow: '0 20px 45px -8px rgba(0, 20, 60, 0.3), 0 0 1px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0, 102, 255, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 1000,
            animation: 'chatSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transition: 'height 0.25s ease, width 0.25s ease, bottom 0.25s ease',
          }}
        >
          {/* HEADER DEL CHAT (Azul con logo, nombre y botones de control) */}
          <div
            style={{
              background: '#0066FF',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFFFFF',
              userSelect: 'none',
              cursor: isMinimized ? 'pointer' : 'default',
            }}
            onClick={isMinimized ? handleRestore : undefined}
          >
            {/* Logo de Robot e Información */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  flexShrink: 0,
                }}
              >
                <Bot size={22} color="#0066FF" strokeWidth={2.4} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '-0.2px', lineHeight: 1.2 }}>
                  Agentika
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.88)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginTop: '2px',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      display: 'inline-block',
                    }}
                  />
                  Asistente virtual · Disponible 24/7
                </span>
              </div>
            </div>

            {/* Botones de Control: Voz, Minimizar y Cerrar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {/* Botón Switch de Voz Natural Automática */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextVal = !isVoiceEnabled;
                  setIsVoiceEnabled(nextVal);
                  if (!nextVal) {
                    stopCurrentAudio();
                  }
                }}
                title={
                  isVoiceEnabled
                    ? '🔊 Voz automática activada (clic para silenciar)'
                    : '🔈 Activar voz natural automática para respuestas'
                }
                aria-label={isVoiceEnabled ? 'Desactivar voz automática' : 'Activar voz automática'}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: isVoiceEnabled ? 'rgba(255,255,255,0.25)' : 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isVoiceEnabled) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                }}
                onMouseLeave={(e) => {
                  if (!isVoiceEnabled) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {isVoiceEnabled ? (
                  <>
                    <Volume2 size={18} />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '4px',
                        right: '4px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#10B981',
                      }}
                    />
                  </>
                ) : (
                  <VolumeX size={18} style={{ opacity: 0.75 }} />
                )}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isMinimized) {
                    handleRestore();
                  } else {
                    handleMinimize();
                  }
                }}
                title={isMinimized ? 'Expandir chat' : 'Minimizar chat'}
                aria-label={isMinimized ? 'Expandir chat' : 'Minimizar chat'}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <Minus size={18} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                title="Cerrar chat"
                aria-label="Cerrar chat"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* CUERPO DEL CHAT (Sólo visible si no está minimizado) */}
          {!isMinimized && (
            <>
              {/* Área de Mensajes */}
              <div
                ref={messagesContainerRef}
                style={{
                  flex: 1,
                  backgroundColor: '#F8FAFC',
                  padding: '18px 16px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {/* Lista de Mensajes */}
                {messages.map((msg, index) => {
                  const isBot = msg.sender === 'bot';
                  const isPlayingThis = playingMessageId === msg.id;
                  const isLoadingVoiceThis = loadingVoiceMessageId === msg.id;

                  return (
                    <div
                      key={msg.id || index}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isBot ? 'flex-start' : 'flex-end',
                        width: '100%',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          maxWidth: isBot ? '88%' : '80%',
                          flexDirection: isBot ? 'row' : 'row-reverse',
                        }}
                      >
                        {/* Avatar de Bot para mensajes del asistente */}
                        {isBot && (
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              backgroundColor: '#0066FF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              boxShadow: '0 2px 6px rgba(0, 102, 255, 0.25)',
                              marginTop: '2px',
                              position: 'relative',
                            }}
                          >
                            <Bot size={17} color="#FFFFFF" />
                            {/* Pequeña onda de sonido si este mensaje está hablando */}
                            {isPlayingThis && (
                              <span
                                style={{
                                  position: 'absolute',
                                  inset: '-3px',
                                  borderRadius: '50%',
                                  border: '2px solid #00C8FF',
                                  animation: 'pulseGlow 1.2s infinite ease-out',
                                }}
                              />
                            )}
                          </div>
                        )}

                        {/* Burbuja del Mensaje */}
                        <div
                          style={{
                            backgroundColor: isBot ? '#FFFFFF' : '#0066FF',
                            color: isBot ? '#0F172A' : '#FFFFFF',
                            borderRadius: isBot ? '4px 18px 18px 18px' : '18px 18px 4px 18px',
                            padding: '12px 16px',
                            fontSize: '13.5px',
                            lineHeight: 1.55,
                            boxShadow: isBot
                              ? isPlayingThis
                                ? '0 4px 16px rgba(0, 102, 255, 0.18), 0 0 0 1.5px #93C5FD'
                                : '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)'
                              : '0 3px 10px rgba(0, 102, 255, 0.25)',
                            border: isBot ? (isPlayingThis ? '1.5px solid #93C5FD' : '1px solid #E2E8F0') : 'none',
                            wordBreak: 'break-word',
                            transition: 'all 0.25s ease',
                          }}
                        >
                          <div>{renderMessageText(msg.text)}</div>

                          {/* Caso de error: botón para reintentar */}
                          {msg.isError && msg.failedQuery && (
                            <button
                              onClick={() => handleRetry(msg.failedQuery)}
                              style={{
                                marginTop: '10px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                background: '#FEE2E2',
                                color: '#DC2626',
                                border: '1px solid #FCA5A5',
                                borderRadius: '8px',
                                padding: '5px 10px',
                                fontSize: '12px',
                                fontWeight: 600,
                                cursor: 'pointer',
                              }}
                            >
                              <RotateCcw size={12} />
                              Reintentar pregunta
                            </button>
                          )}

                          {/* Barra inferior de la burbuja: Botón de Escuchar Voz y Hora */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: isBot && !msg.isError ? 'space-between' : 'flex-end',
                              marginTop: '8px',
                              gap: '8px',
                            }}
                          >
                            {/* Botón para escuchar con voz natural humana */}
                            {isBot && !msg.isError && (
                              <button
                                onClick={() => handlePlayVoice(msg.id, msg.text)}
                                disabled={isLoadingVoiceThis}
                                title={
                                  isPlayingThis
                                    ? 'Detener locución'
                                    : isLoadingVoiceThis
                                    ? 'Obteniendo voz natural desde ms-landing...'
                                    : 'Escuchar respuesta con voz natural (IA)'
                                }
                                aria-label="Escuchar respuesta con voz natural"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '5px',
                                  backgroundColor: isPlayingThis ? '#EFF6FF' : '#F1F5F9',
                                  color: isPlayingThis ? '#0066FF' : '#475569',
                                  border: isPlayingThis ? '1px solid #93C5FD' : '1px solid #E2E8F0',
                                  borderRadius: '6px',
                                  padding: '3px 8px',
                                  fontSize: '11px',
                                  fontWeight: 600,
                                  cursor: isLoadingVoiceThis ? 'wait' : 'pointer',
                                  transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                  if (!isPlayingThis && !isLoadingVoiceThis) {
                                    e.currentTarget.style.backgroundColor = '#E2E8F0';
                                    e.currentTarget.style.color = '#0066FF';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (!isPlayingThis && !isLoadingVoiceThis) {
                                    e.currentTarget.style.backgroundColor = '#F1F5F9';
                                    e.currentTarget.style.color = '#475569';
                                  }
                                }}
                              >
                                {isLoadingVoiceThis ? (
                                  <>
                                    <Loader2 size={11} className="spin-animation" />
                                    <span>Voz IA...</span>
                                  </>
                                ) : isPlayingThis ? (
                                  <>
                                    <span className="audio-wave">
                                      <span />
                                      <span />
                                      <span />
                                    </span>
                                    <VolumeX size={12} color="#0066FF" />
                                    <span style={{ color: '#0066FF' }}>Detener</span>
                                  </>
                                ) : (
                                  <>
                                    <Volume2 size={12} />
                                    <span>Escuchar voz</span>
                                  </>
                                )}
                              </button>
                            )}

                            <div
                              style={{
                                fontSize: '10px',
                                color: isBot ? '#94A3B8' : 'rgba(255, 255, 255, 0.75)',
                              }}
                            >
                              {msg.time}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Si es el mensaje inicial de bienvenida, mostramos las preguntas sugeridas debajo */}
                      {index === 0 && (
                        <div
                          style={{
                            marginTop: '12px',
                            marginLeft: '42px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            maxWidth: 'calc(100% - 42px)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '12.5px',
                              fontWeight: 700,
                              color: '#475569',
                              marginBottom: '2px',
                            }}
                          >
                            ¿Qué te gustaría saber?
                          </span>

                          {suggestedQuestions.map((q, qIdx) => (
                            <button
                              key={qIdx}
                              onClick={() => handleSendMessage(q)}
                              disabled={isLoading}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                textAlign: 'left',
                                backgroundColor: '#FFFFFF',
                                border: '1.5px solid #93C5FD',
                                color: '#0066FF',
                                borderRadius: '9999px',
                                padding: '8px 14px',
                                fontSize: '12.5px',
                                fontWeight: 600,
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                opacity: isLoading ? 0.6 : 1,
                                transition: 'all 0.2s ease',
                                boxShadow: '0 1px 3px rgba(0, 102, 255, 0.08)',
                              }}
                              onMouseEnter={(e) => {
                                if (!isLoading) {
                                  e.currentTarget.style.backgroundColor = '#EFF6FF';
                                  e.currentTarget.style.borderColor = '#3B82F6';
                                  e.currentTarget.style.transform = 'translateX(3px)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isLoading) {
                                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                                  e.currentTarget.style.borderColor = '#93C5FD';
                                  e.currentTarget.style.transform = 'translateX(0)';
                                }
                              }}
                            >
                              <HelpCircle size={15} color="#0066FF" style={{ flexShrink: 0 }} />
                              <span>{q}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Indicador de escritura animado (cuando el backend ms-landing está procesando) */}
                {isLoading && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      maxWidth: '85%',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#0066FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Bot size={17} color="#FFFFFF" />
                    </div>

                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '4px 18px 18px 18px',
                        padding: '12px 18px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      }}
                    >
                      <span className="typing-dot" style={{ animationDelay: '0s' }} />
                      <span className="typing-dot" style={{ animationDelay: '0.2s' }} />
                      <span className="typing-dot" style={{ animationDelay: '0.4s' }} />
                      <span style={{ fontSize: '11.5px', color: '#64748B', marginLeft: '6px' }}>
                        Agentika está escribiendo...
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* BARRA DE ENTRADA / INPUT EN LA PARTE INFERIOR */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '12px 16px',
                  borderTop: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '9999px',
                    border: '1px solid #E2E8F0',
                    padding: '4px 6px 4px 16px',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                    placeholder="Escribe tu pregunta..."
                    style={{
                      flex: 1,
                      border: 'none',
                      backgroundColor: 'transparent',
                      color: '#0F172A',
                      fontSize: '13.5px',
                      padding: '8px 0',
                      outline: 'none',
                    }}
                  />

                  {/* Botón Circular Azul de Enviar */}
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={isLoading || !inputMessage.trim()}
                    title="Enviar mensaje"
                    aria-label="Enviar pregunta a Agentika"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: !inputMessage.trim() || isLoading ? '#94A3B8' : '#0066FF',
                      border: 'none',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: !inputMessage.trim() || isLoading ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (inputMessage.trim() && !isLoading) {
                        e.currentTarget.style.backgroundColor = '#0052CC';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (inputMessage.trim() && !isLoading) {
                        e.currentTarget.style.backgroundColor = '#0066FF';
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    <Send size={16} color="#FFFFFF" style={{ transform: 'translateX(1px)' }} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ESTILOS CSS AUXILIARES PARA ANIMACIONES */}
      <style>{`
        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .typing-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #0066FF;
          animation: typingBlink 1.4s infinite both;
        }

        @keyframes typingBlink {
          0%, 80%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .spin-animation {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .audio-wave {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          height: 11px;
        }

        .audio-wave span {
          width: 2px;
          height: 100%;
          background-color: #0066FF;
          border-radius: 2px;
          animation: waveAnimation 0.8s ease-in-out infinite alternate;
        }

        .audio-wave span:nth-child(1) { animation-delay: 0s; }
        .audio-wave span:nth-child(2) { animation-delay: 0.25s; }
        .audio-wave span:nth-child(3) { animation-delay: 0.5s; }

        @keyframes waveAnimation {
          0% { height: 3px; }
          100% { height: 11px; }
        }
      `}</style>
    </>
  );
}
