import { CONFIG } from '../config';

/**
 * Servicio para comunicar el chatbot web con el microservicio ms-landing
 * Endpoint: POST https://ms-landing-510854523341.southamerica-west1.run.app/api/chat/mensaje
 * Payload: { "pregunta": string }
 */
export async function sendChatMessage(pregunta) {
  if (!pregunta || typeof pregunta !== 'string' || !pregunta.trim()) {
    throw new Error('La pregunta no puede estar vacía.');
  }

  const endpoint = CONFIG.chatbotApiUrl || 'https://ms-landing-510854523341.southamerica-west1.run.app/api/chat/mensaje';
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 segundos timeout

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        pregunta: pregunta.trim(),
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const json = await response.json();

    if (!response.ok || !json.success) {
      const errorMsg = json?.error || json?.message || `Error del servidor (${response.status})`;
      throw new Error(errorMsg);
    }

    return {
      success: true,
      data: json.data,
      respuesta: json.data?.respuesta_ia || 'Respuesta recibida correctamente.',
    };
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      return {
        success: false,
        error: 'El servicio tardó demasiado en responder. Por favor intenta de nuevo.',
      };
    }

    // Error de conexión típica cuando el backend no responde o problema de red
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      return {
        success: false,
        error: 'No se pudo conectar con el microservicio del chatbot. Por favor verifica tu conexión o intenta más tarde.',
      };
    }

    return {
      success: false,
      error: error.message || 'Ocurrió un error inesperado al procesar tu consulta.',
    };
  }
}

// Caché en memoria para almacenar audios ya generados y no sobrecargar el backend
const audioCache = new Map();

/**
 * Solicita a ms-landing la locución de un texto con voz natural humana (OpenAI TTS).
 * Retorna una URL de audio que puede reproducirse directamente con new Audio(url).
 * 
 * @param {string} texto - Texto a convertir en voz
 * @returns {Promise<{ success: boolean, audioUrl?: string, error?: string }>}
 */
export async function fetchChatMessageVoice(texto) {
  if (!texto || typeof texto !== 'string' || !texto.trim()) {
    return { success: false, error: 'Texto vacío' };
  }

  const cleanText = texto.trim();

  // Si ya tenemos en caché este audio, retornarlo inmediatamente
  if (audioCache.has(cleanText)) {
    return {
      success: true,
      audioUrl: audioCache.get(cleanText),
      fromCache: true,
    };
  }

  const endpoint = CONFIG.chatbotVoiceApiUrl || 'https://ms-landing-510854523341.southamerica-west1.run.app/api/chat/voz';
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000); // 25s timeout

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        texto: cleanText,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Error del microservicio de voz (${response.status})`);
    }

    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);

    // Guardar en caché
    audioCache.set(cleanText, audioUrl);

    return {
      success: true,
      audioUrl,
    };
  } catch (error) {
    clearTimeout(timeoutId);

    console.error('[chatbotService] Error al obtener voz natural:', error);
    return {
      success: false,
      error: error.message || 'Error al generar la voz natural.',
    };
  }
}

