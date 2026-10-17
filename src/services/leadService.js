import { CONFIG } from '../config';

/**
 * Envia los datos de la solicitud de demo al correo configurado (jldelgadop@gmail.com)
 * mediante el servicio FormSubmit vía AJAX.
 */
export async function sendLeadEmail(formData) {
  const recipient = CONFIG.leadRecipientEmail || 'jldelgadop@gmail.com';

  const payload = {
    "Nombre del Cliente": formData.nombre,
    "Correo Electrónico": formData.email,
    "Teléfono / WhatsApp": formData.telefono,
    "Tienda o Empresa": formData.empresa || 'No especificada',
    "Fecha y Hora": new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' }),
    "Proyecto": "Agentika (mf_vehiculo_ia)",
    _subject: `🚀 Nueva Solicitud de Demo: ${formData.nombre} - ${formData.empresa || 'Agentika'}`,
    _template: 'table',
    _captcha: 'false',
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return {
      success: response.ok,
      data: result,
    };
  } catch (error) {
    console.error('Error al enviar solicitud de demo por correo:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}
