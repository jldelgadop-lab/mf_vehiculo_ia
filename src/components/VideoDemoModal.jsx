import React, { useEffect } from 'react';
import { X, Play, Sparkles, ArrowRight, Video } from 'lucide-react';

/**
 * Convierte cualquier formato de URL de YouTube (estándar, corto youtu.be o embed)
 * en una URL de embed lista para reproducir en un iframe.
 */
function getEmbedUrl(url, autoplay = true) {
  const defaultEmbed = `https://www.youtube.com/embed/ACqPtSAHh5Y?autoplay=${autoplay ? 1 : 0}&rel=0`;
  if (!url) return defaultEmbed;

  // Extraer ID del video de YouTube (11 caracteres)
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2] && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=${autoplay ? 1 : 0}&rel=0`;
  }

  if (url.includes('embed/')) {
    const hasParam = url.includes('?');
    return `${url}${hasParam ? '&autoplay=1&rel=0' : '?autoplay=1&rel=0'}`;
  }

  return url;
}

export function VideoDemoModal({
  isOpen = true,
  videoUrl = 'https://youtu.be/ACqPtSAHh5Y',
  onClose,
  onRequestDemo,
}) {
  // Manejo de la tecla Escape y bloqueo de scroll
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const embedUrl = getEmbedUrl(videoUrl, true);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(8, 15, 30, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease-out',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(145deg, #0A142D 0%, #0F172A 100%)',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '880px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 45px rgba(0, 102, 255, 0.3)',
          overflow: 'hidden',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Cabecera de la Ventana Emergente */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(15, 23, 42, 0.5)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #FF0000 0%, #D90429 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(255, 0, 0, 0.45)',
              }}
            >
              <Play size={20} fill="#FFFFFF" style={{ marginLeft: '2px' }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3
                  id="video-modal-title"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: 0,
                  }}
                >
                  Video de Demostración
                </h3>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    background: 'rgba(0, 200, 255, 0.15)',
                    color: '#38BDF8',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Agente IA
                </span>
              </div>
              <p
                style={{
                  fontSize: '12px',
                  color: '#94A3B8',
                  margin: '4px 0 0 0',
                }}
              >
                Demostración en vivo del funcionamiento del asistente virtual
              </p>
            </div>
          </div>

          {/* Botón de Salir (Header) */}
          <button
            id="btn-salir-modal-video"
            onClick={onClose}
            aria-label="Salir de la ventana emergente"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(239, 68, 68, 0.16)',
              border: '1px solid rgba(239, 68, 68, 0.45)',
              color: '#FCA5A5',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#EF4444';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.16)';
              e.currentTarget.style.color = '#FCA5A5';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            title="Salir de la ventana emergente"
          >
            <X size={18} />
            <span>Salir</span>
          </button>
        </div>

        {/* Contenedor del Reproductor de Video (16:9) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            backgroundColor: '#000000',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={embedUrl}
            title="Demostración de Agentika - Agente IA para Ventas"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Barra Inferior / Acciones */}
        <div
          style={{
            padding: '16px 24px',
            background: 'rgba(15, 23, 42, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#94A3B8',
              fontSize: '13px',
            }}
          >
            <Sparkles size={16} color="#38BDF8" />
            <span>
              Atiende consultas de productos, revisa stock y registra pedidos 24/7.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {onRequestDemo && (
              <button
                onClick={() => {
                  onClose?.();
                  onRequestDemo();
                }}
                style={{
                  background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '9px 18px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 14px rgba(0, 102, 255, 0.4)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span>Solicitar Demo Personalizada</span>
                <ArrowRight size={14} />
              </button>
            )}

            {/* Segundo Botón de Salir en el pie */}
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#E2E8F0',
                padding: '9px 16px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = '#E2E8F0';
              }}
              title="Salir y cerrar ventana"
            >
              <X size={15} />
              <span>Cerrar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
