const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://via.placeholder.com/200",
    description: "Powerful laptop for work and study."
  },
  {
    id: 2,
    name: "Phone",
    price: 20000,
    image: "https://via.placeholder.com/200",
    description: "Smartphone with excellent camera."
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "https://via.placeholder.com/200",
    description: "Comfortable headphones with clear sound."
  }
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find(p => p.id === id);

if (product) {
  document.getElementById("product-details").innerHTML = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <h3>₹${product.price}</h3>
    </div>
  `;
} else {
  document.getElementById("product-details").innerHTML = `
    <h2>Product Not Found</h2>
  `;
}