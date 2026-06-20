const cart = JSON.parse(localStorage.getItem("cart")) || [];

const summary = document.getElementById("order-summary");
const totalDiv = document.getElementById("total");

let total = 0;

cart.forEach(item => {
    total += item.price;

    summary.innerHTML += `
        <p>${item.name} - ₹${item.price}</p>
    `;
});

totalDiv.textContent = `Total: ₹${total}`;

async function placeOrder() {

    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        alert("Please login before placing an order!");
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                products: cart,
                totalAmount: total
            })
        });

        const data = await response.json();

        localStorage.removeItem("cart");

        alert("Order Placed Successfully!");

        window.location.href = "index.html";

    } catch (error) {
        console.error(error);
        alert("Failed to place order");
    }
}