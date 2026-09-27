import React, { useState } from 'react';
import { X, Send, CheckCircle2, Car, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    storeName: '',
    vehicleType: 'Autos Ligeros',
    whatsapp: '',
    email: '',
    dailyQueries: '50 - 200 consultas',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti effect');
      }
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappDirectUrl = `https://wa.me/?text=${encodeURIComponent(
    `Hola AutoIA, acabo de solicitar una demo para mi tienda de repuestos: ${formData.storeName || 'Mi Tienda'}. Me gustaría agendar la consultoría IA.`
  )}`;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <div className="modal-badge">
                <Sparkles size={16} />
                <span>CONSULTORÍA PERSONALIZADA</span>
              </div>
              <h3 className="modal-title">Solicita tu Demo de Agente IA</h3>
              <p className="modal-subtitle">
                Déjanos los datos de tu tienda de repuestos (autos, camiones o buses) y te mostraremos cómo el chatbot puede integrarse a tu catálogo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Nombre completo *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    placeholder="Ej. Carlos Delgado"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Nombre de tu Tienda de Repuestos *</label>
                  <input 
                    type="text" 
                    name="storeName"
                    required
                    placeholder="Ej. Repuestos Toyota & Nissan Express"
                    value={formData.storeName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Tipo de Nicho Vehicular *</label>
                  <select name="vehicleType" value={formData.vehicleType} onChange={handleChange}>
                    <option value="Autos Ligeros">Repuestos de Autos Ligeros</option>
                    <option value="Buses y Camiones">Repuestos de Buses y Camiones Pesados</option>
                    <option value="Lubricentro y Filtros">Lubricentro / Aceites y Filtros</option>
                    <option value="Multimarca General">Tienda Multimarca / Todo Tipo</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>WhatsApp / Teléfono *</label>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    required
                    placeholder="Ej. +51 987 654 321"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Correo Electrónico Corporativo *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="ventas@mitiendaderepuestos.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Consultas diarias estimadas de clientes</label>
                  <select name="dailyQueries" value={formData.dailyQueries} onChange={handleChange}>
                    <option value="Menos de 50 consultas">Menos de 50 consultas/día</option>
                    <option value="50 - 200 consultas">50 a 200 consultas/día</option>
                    <option value="Más de 200 consultas">Más de 200 consultas/día</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Comentario o marcas principales que vendes</label>
                <textarea 
                  name="notes"
                  rows="3"
                  placeholder="Ej: Vendemos pastillas, discos y suspensiones para Toyota Hilux, Hyundai H1 y buses Volvo..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit-form" disabled={loading}>
                {loading ? (
                  <span>Procesando solicitud...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Solicitud de Consultoría</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="success-icon-box">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="success-title">¡Solicitud Recibida con Éxito!</h3>
            <p className="success-desc">
              Gracias <strong>{formData.fullName}</strong>. Hemos registrado a <strong>{formData.storeName}</strong>. Un especialista en IA para el sector automotriz se pondrá en contacto contigo en breve para coordinar tu demo personalizada.
            </p>

            <div className="success-actions">
              <a 
                href={whatsappDirectUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-whatsapp w-full"
              >
                <MessageCircle size={18} />
                <span>Hablar por WhatsApp Ahora Mismo</span>
              </a>

              <button onClick={handleReset} className="btn btn-outline-light w-full mt-2">
                Cerrar ventana
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(11, 19, 43, 0.85);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-container {
          position: relative;
          background: #0f172a;
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 24px;
          width: 100%;
          max-width: 650px;
          padding: 2.5rem;
          color: #ffffff;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(2, 132, 199, 0.25);
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #94a3b8;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .modal-header {
          margin-bottom: 1.75rem;
        }

        .modal-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(2, 132, 199, 0.25);
          color: #38bdf8;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .modal-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .modal-subtitle {
          font-size: 0.92rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .form-group input, .form-group select, .form-group textarea {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          color: #ffffff;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
        }

        .btn-submit-form {
          width: 100%;
          padding: 1rem;
          font-size: 1.05rem;
          margin-top: 0.5rem;
          border-radius: 12px;
        }

        .modal-success-state {
          text-align: center;
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon-box {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.15);
          color: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .success-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .success-desc {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 1.75rem;
        }

        .success-actions {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .w-full { width: 100%; }
        .mt-2 { margin-top: 0.5rem; }

        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .modal-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
