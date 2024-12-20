class Product {
  constructor(
    id,
    title,
    price,
    stock,
    images,
    onsale,
    supplier,
    colors,
    description
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.supplier = supplier;
    this.colors = colors;
    this.description = description;
  }
}
const prod1 = new Product(
  "A000",
  "Parlantes",
  500,
  50,
  [
    "https://img.freepik.com/fotos-premium/foto-altavoz-audio-musica-negra-concepto-musica_1081728-48.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/hombre-usando-altavoz-inteligente_23-2149036842.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/hombre-usando-altavoz-inteligente_23-2149036847.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
  ],
  true,
  "Tecnologias S.A",
  ["Gris", "Blanco", "Negro"],
  "Parlantes de ultima tecnologia"
);
const prod2 = new Product(
  "A001",
  "Celular",
  1000,
  30,
  [
    "https://img.freepik.com/vector-gratis/smartphone-fondo-degradado_23-2147839163.jpg?size=626&ext=jpg",
    "https://img.freepik.com/foto-gratis/elegante-composicion-telefono-inteligente_23-2149437106.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/elegante-composicion-telefono-inteligente_23-2149437074.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
  ],
  true,
  "Tecnologias S.A",
  ["azul", "rosa", "negro"],
  "Celulares samsung"
);
const prod3 = new Product(
  "A002",
  "Tablet",
  2000,
  3,
  [
    "https://img.freepik.com/foto-gratis/tableta-pantalla-blanco-mesa-madera-cafeteria_1142-50533.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/pantalla-tableta-digital-tecnologia-inteligente_53876-96808.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
  ],
  true,
  "Tecnologias S.A",
  ["blanco", "negro"],
  "Tablets de estudio"
);

const prod4 = new Product(
  "A003",
  "Laptop",
  3000,
  10,
  [
    "https://img.freepik.com/foto-gratis/mujer-joven-trabajando-su-computadora-portatil-casa_23-2149029652.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/mujer-joven-trabajando-su-computadora-portatil-casa_23-2149029652.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
  ],
  true,
  "Tecnologias S.A",
  ["blanco", "negro"],
  "Laptops de ultima generacion"
);

const prod5 = new Product(
  "A004",
  "Audifonos",
  50,
  12,
  [
    "https://img.freepik.com/foto-gratis/exhibicion-auriculares-musica-levitando_23-2149817602.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/taza-te-negra-auriculares-fondo-rojo_185193-163975.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
  ],
  true,
  "Tecnologias S.A",
  ["negro", "rosa", "negro y rojo"],
  "Audifonos sonido estereo"
);

const prod6 = new Product(
  "A005",
  "Relojes Inteligentes",
  300,
  10,
  [
    "https://img.freepik.com/fotos-premium/nuevo-reloj-inteligente-balanceado-mano_23-2150296477.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/dispositivo-protegido-ciberseguridad_23-2149270841.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
  ],
  true,
  "Tecnologias S.A",
  ["negro", "Plomo","Negro"],
  "Parlantes de alta gama"
);

let products = [prod1, prod2, prod3, prod4, prod5, prod6];

