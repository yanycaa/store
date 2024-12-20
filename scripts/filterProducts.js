// searchSelector.addEventListener("keyup", captureText);
// searchSelector.addEventListener("keyup", function (captureText) {
//     console.log(`capturado: ${captureText.key}`);
//    });

const searchSelector = document.querySelector("#search");
function captureText(event) {
  let searchtext = event.target.value.toLowerCase();
  const filterproduct = products.filter(cadaproducto => cadaproducto.title.toLowerCase().includes(searchtext))
  // Actualizar la vista con una nueva impresión de las tarjetas
  const productContainer = document.querySelector("#products");
  productContainer.innerHTML = ""; // Limpiar el contenedor de productos

  filterproduct.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
          <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="${product.images}"
            alt="${product.id}"
          />
          <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.description}</span>
            <div class="product-price-block">
              <span class="product-price">${product.price}</span>
              <span class="product-colors">${product.colors}</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
      `;
    productContainer.appendChild(productCard);
  });
}
// Agregar un escuchador de eventos para el evento 'keyup'
searchSelector.addEventListener("keyup", (event) => captureText(event));


