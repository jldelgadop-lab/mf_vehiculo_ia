// Configuración principal de la Landing Page
export const CONFIG = {
  appName: "AI Sales Agent",
  appSubtitle: "para tu Tienda de Computadoras",
  
  // URL por defecto de YouTube para el video de demostración.
  // Puede ser una URL estándar (https://www.youtube.com/watch?v=...) o formato embed (https://www.youtube.com/embed/...)
  // El cliente podrá actualizar esta URL fácilmente desde la interfaz o en este archivo.
  defaultYoutubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0", 

  contactPhone: "+51 987 654 321",
  contactEmail: "contacto@aisalesagent.com",
  
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
