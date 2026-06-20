let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const container =
document.getElementById("cart-items");

const totalElement =
document.getElementById("total");

function displayCart(){

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        container.innerHTML += `

        <div class="product-card">

            <img src="${item.image}">

            <h3>${item.name}</h3>

            <p>₹${item.price}</p>

            <button onclick="removeItem(${index})">
                ❌ Remove
            </button>

        </div>

        `;

    });

    totalElement.textContent =
    `Total: ₹${total}`;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

displayCart();