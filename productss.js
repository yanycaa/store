const producto1 = {
  nombre: "Celular",
  precio: 1000,
  stock: 15,
};
producto1.id = "1234abcd";
producto1["foto"] =
  "https://img.freepik.com/vector-gratis/smartphone-fondo-degradado_23-2147839163.jpg?size=626&ext=jpg";
console.log(producto1);
console.log(producto1.nombre);
console.log(producto1["precio"]);

class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }
  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newname) {
    this._supplier = newname;
  }

  sellUnits(units) {
    if (units <= this.stock) {
      this.stock = this.stock - units;
    } else if (units > this.stock) {
      console.log("No hay suficiente stock");
    }
  }
}
const prod1 = new Product();
const prod2 = new Product("A001", "Celular", 1000);
const prod3 = new Product(
  "A002",
  "Tablet",
  2000,
  3,
  "https://img.freepik.com/foto-gratis/tableta-pantalla-blanco-mesa-madera-cafeteria_1142-50533.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
  true
);

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod2.title);
console.log(prod3.onsale);

const prod4 = new Product(
  "A003",
  "Laptop",
  3000,
  10,
  "https://img.freepik.com/foto-gratis/mujer-joven-trabajando-su-computadora-portatil-casa_23-2149029652.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
  true
);
prod4.setSupplier = "Tecnologias S.A";
console.log(prod4);

console.log(prod4.getSupplier);

const prod5 = new Product(
  "A004",
  "Audifonos",
  50,
  12,
  "https://img.freepik.com/foto-gratis/exhibicion-auriculares-musica-levitando_23-2149817602.jpg?ga=GA1.1.2046037777.1724623142&semt=ais_hybrid",
  true,
  "Tecnologias S.A"
);
prod5.sellUnits(10);
prod5.sellUnits(5);

console.log(prod5.stock);
