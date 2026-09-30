import React, { useState } from 'react';
import { 
  Clock, Zap, TrendingUp, Play, User, Mail, Phone, Building, 
  Lock, CheckCircle, Bot, MessageSquare, Send, Sparkles, Settings
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function Hero({ youtubeUrl, onChangeYoutubeUrl, onSubmitFormSuccess }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: ''
  });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Convert normal YouTube URL to Embed format if needed
  const getEmbedUrl = (url) => {
    if (!url) return 'https://www.youtube.com/embed/dQw4w9WgXcQ';
    if (url.includes('embed/')) return url;
    
    // Handle standard youtube links
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
    }
    return url;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.telefono) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger high energy confetti effect
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }

      onSubmitFormSuccess(formData);
    }, 800);
  };

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #060d1f 0%, #0c1b40 50%, #071026 100%)',
        paddingTop: '130px',
        paddingBottom: '80px',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Tech Lights */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.18) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '10%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 200, 255, 0.12) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr 0.9fr',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* LEFT COLUMN: Main Copy & Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Pill Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 102, 255, 0.18)',
                border: '1px solid rgba(0, 200, 255, 0.35)',
                color: '#38BDF8',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                padding: '6px 16px',
                borderRadius: '9999px',
                marginBottom: '20px',
                width: 'fit-content',
              }}
            >
              <Sparkles size={14} color="#00C8FF" />
              VENTAS MÁS INTELIGENTES CON IA
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: '38px',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.8px',
                marginBottom: '18px',
                color: '#FFFFFF',
              }}
            >
              Tu propio Agente IA para{' '}
              <span
                style={{
                  color: '#38BDF8',
                  background: 'linear-gradient(135deg, #38BDF8 0%, #0066FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                aumentar tus ventas
              </span>{' '}
              de productos de cómputo
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#CBD5E1',
                marginBottom: '32px',
                fontWeight: 400,
              }}
            >
              Un chatbot inteligente que responde consultas, consulta stock y precios, y registra pedidos, como un vendedor experto, 24/7.
            </p>

            {/* 3 Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '24px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(0, 102, 255, 0.2)',
                    border: '1px solid rgba(0, 102, 255, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                  }}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: '#FFFFFF' }}>Atención 24/7</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>Sin pausar ventas</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(0, 102, 255, 0.2)',
                    border: '1px solid rgba(0, 102, 255, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                  }}
                >
                  <Zap size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: '#FFFFFF' }}>Respuestas instantáneas</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>Cero espera</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(0, 102, 255, 0.2)',
                    border: '1px solid rgba(0, 102, 255, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                  }}
                >
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: '#FFFFFF' }}>Más ventas y clientes</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>Mayor conversión</div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Video Player Demo Frame */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#0B1528',
                border: '2px solid rgba(0, 102, 255, 0.4)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(0, 102, 255, 0.25)',
                aspectRatio: '16/10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isPlaying ? (
                <iframe
                  src={getEmbedUrl(youtubeUrl)}
                  title="Demostración Agente IA"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* Video Mockup Frame matching the user design mockup */
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #091630 0%, #0a1f47 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '16px',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Top Bar inside mockup player */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(15, 23, 42, 0.8)',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      zIndex: 3,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '8px',
                          background: '#0066FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Bot size={16} color="#FFF" />
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFF' }}>
                        Asistente Virtual Demo
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#00C8FF', fontWeight: 600 }}>
                      🔴 En vivo
                    </span>
                  </div>

                  {/* Graphic Hardware Thumbnail + Chat Bubble Preview (Exact match to diseno_landing.png) */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '40px 16px 50px',
                    }}
                  >
                    {/* Dark hardware background image graphic */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.25,
                        filter: 'contrast(1.2) brightness(0.8)',
                      }}
                    />

                    {/* Chat Bubbles Overlay inside Video */}
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        maxWidth: '380px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      {/* Customer Bubble */}
                      <div
                        style={{
                          alignSelf: 'flex-end',
                          background: '#0066FF',
                          color: '#FFFFFF',
                          padding: '8px 14px',
                          borderRadius: '14px 14px 2px 14px',
                          fontSize: '12px',
                          fontWeight: 500,
                          maxWidth: '85%',
                          boxShadow: '0 4px 12px rgba(0,102,255,0.4)',
                        }}
                      >
                        ¿Tienes en stock el disco duro SSD de 1TB?
                      </div>

                      {/* Bot Response Bubble */}
                      <div
                        style={{
                          alignSelf: 'flex-start',
                          background: '#FFFFFF',
                          color: '#0F172A',
                          padding: '10px 14px',
                          borderRadius: '14px 14px 14px 2px',
                          fontSize: '12px',
                          fontWeight: 500,
                          maxWidth: '85%',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        }}
                      >
                        <strong>¡Sí!</strong> Tenemos el SSD 1TB Kingston NV2.
                        <br />
                        <strong>Precio:</strong> S/ 320.00
                        <br />
                        <span style={{ color: '#059669', fontWeight: 700 }}>
                          Stock disponible: 12 unidades.
                        </span>
                      </div>

                      {/* Customer Order Inquiry */}
                      <div
                        style={{
                          alignSelf: 'flex-end',
                          background: '#0066FF',
                          color: '#FFFFFF',
                          padding: '8px 14px',
                          borderRadius: '14px 14px 2px 14px',
                          fontSize: '12px',
                          fontWeight: 500,
                          maxWidth: '85%',
                        }}
                      >
                        Perfecto, ¿puedo hacer un pedido?
                      </div>

                      {/* Bot Confirmation */}
                      <div
                        style={{
                          alignSelf: 'flex-start',
                          background: '#FFFFFF',
                          color: '#0F172A',
                          padding: '8px 14px',
                          borderRadius: '14px 14px 14px 2px',
                          fontSize: '12px',
                          fontWeight: 500,
                          maxWidth: '85%',
                        }}
                      >
                        ¡Claro! ¿Cuántas unidades deseas? 📦
                      </div>
                    </div>
                  </div>

                  {/* Central Big Red Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF0000 0%, #D90429 100%)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 30px rgba(255, 0, 0, 0.6), 0 8px 24px rgba(0,0,0,0.4)',
                      zIndex: 10,
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      border: '3px solid #FFFFFF',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 0 45px rgba(255, 0, 0, 0.8), 0 10px 30px rgba(0,0,0,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 0, 0.6), 0 8px 24px rgba(0,0,0,0.4)';
                    }}
                    title="Reproducir video de demo"
                  >
                    <Play size={30} style={{ marginLeft: '4px' }} fill="#FFFFFF" />
                  </button>

                  {/* Bottom Video Timeline Mock */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: 'rgba(15, 23, 42, 0.9)',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      fontSize: '11px',
                      color: '#94A3B8',
                    }}
                  >
                    <Play size={14} color="#FFF" />
                    <span>0:00 / 2:45</span>
                    <div
                      style={{
                        flex: 1,
                        height: '4px',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: '40%',
                          height: '100%',
                          background: '#0066FF',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Change YouTube Link Button Option */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '4px 8px',
              }}
            >
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                🎥 Demostración del Agente en acción
              </span>
              <button
                onClick={onChangeYoutubeUrl}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#38BDF8',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
              >
                <Settings size={12} />
                Editar enlace de YouTube
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Solicita una Demo Form Card */}
          <div
            id="formulario-demo"
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '28px 24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
              color: '#0F172A',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#EBF3FF',
                  color: '#0066FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={20} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A' }}>
                Solicita una Demo
              </h3>
            </div>
            
            <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px', lineHeight: 1.4 }}>
              Conoce cómo este Agente IA puede adaptarse a tu negocio y catálogo de cómputo.
            </p>

            {submitted ? (
              <div
                style={{
                  background: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <CheckCircle size={48} color="#059669" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#065F46', marginBottom: '8px' }}>
                  ¡Solicitud Enviada!
                </h4>
                <p style={{ fontSize: '13px', color: '#047857', lineHeight: 1.5 }}>
                  Gracias <strong>{formData.nombre}</strong>. Nos pondremos en contacto contigo en menos de 24 horas para agendar la demo personalizada para <strong>{formData.empresa || 'tu tienda'}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '16px',
                    background: 'none',
                    border: 'none',
                    color: '#0066FF',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Field: Nombre Completo */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Nombre completo *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Ej. Juan Pérez"
                      required
                      style={{
                        width: '100%',
                        padding: '11px 12px 11px 40px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        color: '#0F172A',
                        backgroundColor: '#F8FAFC',
                        transition: 'border 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#0066FF')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>
                </div>

                {/* Field: Correo Electrónico */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Correo electrónico *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="juan@mitienda.com"
                      required
                      style={{
                        width: '100%',
                        padding: '11px 12px 11px 40px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        color: '#0F172A',
                        backgroundColor: '#F8FAFC',
                        transition: 'border 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#0066FF')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>
                </div>

                {/* Field: Teléfono / WhatsApp */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Teléfono / WhatsApp *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+51 987 654 321"
                      required
                      style={{
                        width: '100%',
                        padding: '11px 12px 11px 40px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        color: '#0F172A',
                        backgroundColor: '#F8FAFC',
                        transition: 'border 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#0066FF')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>
                </div>

                {/* Field: Nombre de tu tienda o empresa */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Nombre de tu tienda o empresa
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Building size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Ej. Tech Hardware Perú"
                      style={{
                        width: '100%',
                        padding: '11px 12px 11px 40px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        color: '#0F172A',
                        backgroundColor: '#F8FAFC',
                        transition: 'border 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#0066FF')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '6px',
                    background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '15px',
                    padding: '14px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(0, 102, 255, 0.4)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 102, 255, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 102, 255, 0.4)';
                  }}
                >
                  {isSubmitting ? (
                    'Procesando...'
                  ) : (
                    <>
                      Quiero una Demo
                      <Send size={16} />
                    </>
                  )}
                </button>

                {/* Security Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#64748B',
                    marginTop: '4px',
                  }}
                >
                  <Lock size={14} color="#10B981" />
                  Tus datos están seguros y protegidos.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
