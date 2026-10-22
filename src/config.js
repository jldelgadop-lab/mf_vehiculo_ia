// Configuración principal de la Landing Page
export const CONFIG = {
  appName: "Agentika",
  appSubtitle: "para tu Tienda de Computadoras",
  
  // URL por defecto de YouTube para el video de demostración.
  // Puede ser una URL estándar (https://www.youtube.com/watch?v=...) o formato embed (https://www.youtube.com/embed/...)
  // El cliente podrá actualizar esta URL fácilmente desde la interfaz o en este archivo.
  defaultYoutubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0", 

  contactPhone: "+51 925 304 363",
  displayPhone: "925 304 363",
  phoneTel: "tel:+51925304363",
  whatsappUrl: "https://wa.me/51925304363?text=Hola%20Agentika,%20deseo%20hacer%20una%20consulta%20o%20pedir%20una%20demo",
  contactEmail: "contacto@aisalesagent.com",
  leadRecipientEmail: "jldelgadop@gmail.com",
  
  // Endpoint de integración con el microservicio ms-landing para el chatbot
  chatbotApiUrl: import.meta.env.VITE_CHATBOT_API_URL || "http://localhost:3002/api/chat/mensaje",
  chatbotVoiceApiUrl: import.meta.env.VITE_CHATBOT_VOICE_API_URL || "http://localhost:3002/api/chat/voz",
  chatbotSuggestedQuestions: [
    "¿Qué es Agentika?",
    "¿Puede consultar mi stock y precios?",
    "¿Funciona con WhatsApp?",
    "¿Cuánto cuesta implementar?",
  ],
  
  // Catálogo de productos de muestra para el simulador de chat interactivo
  sampleProducts: [
    {
      id: "ssd-1tb",
      name: "Disco Duro SSD 1TB Kingston NV2 NVMe M.2",
      price: "S/ 320.00",
      stock: 12,
      category: "Discos Duros (SSD / HDD)",
      specs: "Lectura hasta 3500MB/s, Escritura 2100MB/s, PCIe 4.0 NVMe"
    },
    {
      id: "rtx-4060",
      name: "Tarjeta de Video NVIDIA GeForce RTX 4060 8GB GDDR6",
      price: "S/ 1,450.00",
      stock: 5,
      category: "Tarjetas Gráficas",
      specs: "Architecture Ada Lovelace, DLSS 3, Ray Tracing, 8GB GDDR6"
    },
    {
      id: "ram-16gb",
      name: "Memoria RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
      price: "S/ 210.00",
      stock: 24,
      category: "Memorias RAM",
      specs: "Dual Channel, Disipador de aluminio anodizado negro, CL16"
    },
    {
      id: "laptop-gaming",
      name: "Laptop Gamer ASUS TUF Gaming F15 i7 13ª Gen / 16GB / 512GB SSD / RTX 4050",
      price: "S/ 4,199.00",
      stock: 3,
      category: "Laptops y PCs",
      specs: "Pantalla 15.6'' FHD 144Hz, Intel Core i7-13620H, Teclado RGB"
    }
  ]
};
