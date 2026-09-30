import React, { useState } from 'react';
import { X, Sparkles, User, Mail, Phone, Building, Send, CheckCircle2, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export function DemoModal({ onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.telefono) {
      alert('Por favor completa los campos requeridos.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }

      onSubmitSuccess(formData);
    }, 700);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '480px',
          padding: '32px',
          color: '#0F172A',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F1F5F9',
            border: 'none',
            color: '#64748B',
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

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle2 size={56} color="#10B981" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              ¡Solicitud de Demo Recibida!
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
              Gracias <strong>{formData.nombre}</strong>. Nos pondremos en contacto contigo a través de WhatsApp o correo en menos de 24 horas.
            </p>
            <button
              onClick={onClose}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                background: '#0066FF',
                color: '#FFF',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
              }}
            >
              Entendido
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
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
                Solicita tu Demo Gratis
              </h3>
            </div>
            
            <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>
              Descubre cómo customizar este chatbot para el stock y catálogo de tu tienda de cómputo.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Nombre completo *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Carlos Mendoza"
                    style={{
                      width: '100%',
                      padding: '11px 12px 11px 40px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      backgroundColor: '#F8FAFC',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Correo electrónico *
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="carlos@computienda.com"
                    style={{
                      width: '100%',
                      padding: '11px 12px 11px 40px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      backgroundColor: '#F8FAFC',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Teléfono / WhatsApp *
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+51 987 654 321"
                    style={{
                      width: '100%',
                      padding: '11px 12px 11px 40px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      backgroundColor: '#F8FAFC',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Nombre de tu tienda o empresa
                </label>
                <div style={{ position: 'relative' }}>
                  <Building size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Ej. Computadoras & Partes SAC"
                    style={{
                      width: '100%',
                      padding: '11px 12px 11px 40px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '14px',
                      backgroundColor: '#F8FAFC',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: '8px',
                  background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '14px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(0, 102, 255, 0.4)',
                }}
              >
                {isSubmitting ? 'Enviando...' : 'Quiero una Demo'}
                <Send size={16} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '12px', color: '#64748B', marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Lock size={14} color="#10B981" />
                Tus datos están protegidos.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
