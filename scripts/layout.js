const navselector = document.getElementById("nav");
const options = [
  { title: "Ofertas de la semana", linkTo: "./index.html" },
  { title: "", linkTo: "./index.html" },
  { title: "", linkTo: "./index.html" },
  { title: "", linkTo: "./index.html" },
  { title: "", linkTo: "./index.html" },
];

for (let elemento of options) {
  const etiqueta = document.createElement("a");
  etiqueta.className = "nav-a";
  etiqueta.textContent = elemento.title;
  etiqueta.href = elemento.linkTo;
  navselector.appendChild(etiqueta);
}

const footerSelector = document.getElementById("footer");

const options2 = [
  {
    title: "Ofertas de la semana",
    linkTo: "./index.html",
    opts: ["Laptops", "Audio", "Auticulares"],
  },
  { title: "Como comparar", linkTo: "./index.html", opts: ["Formas de pago", "", ""] },
  { title: "Costos y tarifas", linkTo: "./index.html", opts: ["Impuestos", ""] },
  { title: "", linkTo: "./index.html", opts: ["", ""] },
  { title: "", linkTo: "./index.html", opts: [] },
];

for (let option of options2) {
  const ul = document.createElement("ul");
  ul.className = "footer-ul";
  const li = document.createElement("li");
  li.className = "footer-main-item";
  const a = document.createElement("a");
  a.className = "footer-a";
  a.textContent = option.title;
  a.href = option.linkTo;
  li.appendChild(a);
  ul.appendChild(li);
   for (let item of option.opts) {
     if (item) {
       const li_a = document.createElement("li");
       li_a.className = "footer-li";
       const a_li = document.createElement("a");
       a_li.className = "footer-a";
       a_li.href = option.linkTo;
       a_li.textContent = item;
       li_a.appendChild(a_li);
       ul.appendChild(li_a);
     }
   }
  footerSelector.appendChild(ul);
}
