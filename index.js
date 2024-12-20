const seleccionar = document.getElementById("mensaje");
seleccionar.innerHTML = "BIENVENIDO A MI TIENDA";
const comprar = () => {
  let totalApagar = 0;
  for (let i = 0; i < 2; i++) {
    let producto = prompt("Que producto desea?");
    let cantidad = prompt("Cuantos productos desea?");
    let precio = prompt("Cual es el precio del producto?");
    let subTotal = cantidad * precio;
    totalApagar = totalApagar + subTotal;
  }
  console.log("El total a pagar es: " + totalApagar);
  return totalApagar;
};

const total = comprar() + comprar() + comprar()
console.log("El tota regitrado es: "+total);