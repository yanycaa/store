// const productsSelector = document.getElementById("products");
// let productsTemplate = `
//  <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
//             alt="MacBook Pro 15'4"
//           />
//           <div class="product-info">
//             <span class="product-title">MacBook Pro 15'4</span>
//             <span class="product-description">Space Gray</span>
//             <div class="product-price-block">
//               <span class="product-price">$750.000</span>
//               <span class="product-colors">gray</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
//             alt="MacBook Pro 15'4"
//           />
//           <div class="product-info">
//             <span class="product-title">MacBook Pro 15'4</span>
//             <span class="product-description">Space Gray</span>
//             <div class="product-price-block">
//               <span class="product-price">$750.000</span>
//               <span class="product-colors">gray</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
//             alt="MacBook Pro 15'4"
//           />
//           <div class="product-info">
//             <span class="product-title">MacBook Pro 15'4</span>
//             <span class="product-description">Space Gray</span>
//             <div class="product-price-block">
//               <span class="product-price">$750.000</span>
//               <span class="product-colors">gray</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
//             alt="MacBook Pro 15'4"
//           />
//           <div class="product-info">
//             <span class="product-title">MacBook Pro 15'4</span>
//             <span class="product-description">Space Gray</span>
//             <div class="product-price-block">
//               <span class="product-price">$750.000</span>
//               <span class="product-colors">gray</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
//             alt="MacBook Pro 15'4"
//           />
//           <div class="product-info">
//             <span class="product-title">MacBook Pro 15'4</span>
//             <span class="product-description">Space Gray</span>
//             <div class="product-price-block">
//               <span class="product-price">$750.000</span>
//               <span class="product-colors">gray</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
//             alt="MacBook Pro 15'4"
//           />
//           <div class="product-info">
//             <span class="product-title">MacBook Pro 15'4</span>
//             <span class="product-description">Space Gray</span>
//             <div class="product-price-block">
//               <span class="product-price">$750.000</span>
//               <span class="product-colors">gray</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//       </div>
// `;
// productsSelector.innerHTML = productsTemplate;

function createCard(product) {
  return `
      <a class="product-card" href="./details.html?id=${product.id}">
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
}

// const productsSelector = document.getElementById("products");
// let productsTemplate = "";

// products.forEach((elemento) => {
//   productsTemplate = productsTemplate + createCard(elemento);
// });
// productsSelector.innerHTML = productsTemplate;

function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}

printCards(products, "products");
