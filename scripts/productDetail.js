const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
console.log(id);

function printDetails(id) {
  const product = products.find((each) => each.id === id);
  const detailsTemplate = `
       <section class="product-images-block">
            <div class="product-images"> ${product.images
              .map(
                (imagen) => `
              <img
                class="mini-img"
                src="${imagen}"
                alt="${product.id}"
                onclick="changeMini(event)"
              />`
              )
              .join("")}
            </div>
            <img
              class="big-img"
              id="big-img"
              src="${product.images}"
              alt="${product.id}"
            />
          </section>
          <div class="product-description-block">
            <h1 class="product-title">${product.title}</h1>
            <form class="product-selector">
              <fieldset class="product-fieldset">
                <label class="product-label" for="color">Color</label>
                <select
                  class="product-select"
                  type="text"
                  placeholder="Selecciona un color">
                  ${product.colors
                    .map((color) => `<option value=${color}>${color}</option>`)
                    .join("")}
                </select>
              </fieldset>
            </form>
            <div class="product-description">
              <span class="product-label">Descripción</span>
              <p>
              ${product.description}
              </p>
            </div>
          </div>
          <div class="product-checkout-block">
            <div class="checkout-container">
              <span class="checkout-total-label">Total:</span>
              <h2 id="price" class="checkout-total-price">$${product.price.toFixed(2)}</h2>
              <p class="checkout-description">
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                50711 haciendo la solicitud en AFIP.
              </p>
              <ul class="checkout-policy-list">
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/truck.png" alt="Truck"
                  /></span>
                  <span class="policy-desc"
                    >Agrega el producto al carrito para conocer los costos de
                    envío</span
                  >
                </li>
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/plane.png" alt="Plane"
                  /></span>
                  <span class="policy-desc"
                    >Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal</span
                  >
                </li>
              </ul>
              <div class="checkout-process">
                <div class="top">
                  <input type="number" min="1" value="1" onchange="changeSubtotal(event, '${
                    product.id}')" />
                  <button type="button" class="cart-btn">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
}
printDetails(id);

function changeMini(event) {
  const selectedSrc = event.target.src;
  const bigSelector = document.querySelector("#big-img");
  bigSelector.src = selectedSrc;
}

function changeSubtotal(event, productId) {
    const quantity = parseInt(event.target.value, 10);
    const product = products.find((each) => each.id === productId);
    const subtotal = product.price * quantity;
    const subtotalLabel = document.querySelector("#price");
    subtotalLabel.textContent = `$${subtotal.toFixed(2)}`;
  }
  