import React, { useState } from 'react';
import { X, Youtube, Check, Link } from 'lucide-react';

export function VideoUrlModal({ currentUrl, onSave, onClose }) {
  const [urlInput, setUrlInput] = useState(currentUrl);

  const handleSave = (e) => {
    e.preventDefault();
    onSave(urlInput);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0F172A',
          border: '1px solid rgba(0, 102, 255, 0.4)',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '520px',
          padding: '28px',
          color: '#FFFFFF',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255, 0, 0, 0.2)',
                color: '#FF4D4D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Youtube size={20} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFF' }}>
              Actualizar Video de Demostración
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#FFF',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '20px', lineHeight: '1.5' }}>
          Ingresa la URL del video de YouTube que muestra la demostración de tu Agente IA. Puedes usar enlaces normales o de integración (embed).
        </p>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#CBD5E1', marginBottom: '8px' }}>
              Enlace de YouTube
            </label>
            <div style={{ position: 'relative' }}>
              <Link size={18} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                required
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: '#1E293B',
                  color: '#FFF',
                  fontSize: '14px',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.1)',
                color: '#FFF',
                fontWeight: 600,
                fontSize: '14px',
                border: 'none',
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                flex: 1.5,
                padding: '12px',
                borderRadius: '10px',
                background: '#0066FF',
                color: '#FFF',
                fontWeight: 700,
                fontSize: '14px',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <Check size={16} />
              Guardar Video
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
