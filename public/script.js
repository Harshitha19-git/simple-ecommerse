async function getProducts() {
  try {
    const res = await fetch("/api/products");
    const products = await res.json();

    console.log(products);
    displayProducts(products);
  } catch (error) {
    console.log("Error:", error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("product-container");

  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${product.description}</p>
        <img src="${product.image}" width="100"/>
      </div>
    `;
  });
}

// call function when page loads
getProducts();