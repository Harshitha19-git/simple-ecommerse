const products = [
{
id:1,
name:"Laptop",
price:50000,
category:"Electronics",
rating:"⭐⭐⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
description:"Powerful laptop for work and study."
},
{
id:2,
name:"Phone",
price:20000,
category:"Electronics",
rating:"⭐⭐⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
description:"Smartphone with excellent camera."
},
{
id:3,
name:"Headphones",
price:3000,
category:"Electronics",
rating:"⭐⭐⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
description:"Comfortable headphones."
},
{
id:4,
name:"Smart Watch",
price:4500,
category:"Electronics",
rating:"⭐⭐⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
description:"Track fitness and notifications."
},
{
id:5,
name:"Gaming Mouse",
price:1200,
category:"Electronics",
rating:"⭐⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
description:"RGB gaming mouse."
},
{
id:6,
name:"Keyboard",
price:2500,
category:"Electronics",
rating:"⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
description:"Mechanical keyboard."
},
{
id:7,
name:"Bluetooth Speaker",
price:3500,
category:"Electronics",
rating:"⭐⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",
description:"Portable speaker."
},
{
id:8,
name:"Tablet",
price:18000,
category:"Electronics",
rating:"⭐⭐⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
description:"Perfect for entertainment."
},
{
id:9,
name:"Camera",
price:35000,
category:"Electronics",
rating:"⭐⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
description:"Capture amazing photos."
},
{
id:10,
name:"Power Bank",
price:1500,
category:"Electronics",
rating:"⭐⭐⭐⭐⭐",
stock:true,
image:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600",
description:"10000mAh fast charging."
}
];

function addToCart(productId){

const user =
JSON.parse(localStorage.getItem("loggedInUser"));

if(!user){
    alert("Please login first");
    window.location.href = "login.html";
    return;
}

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const product =
products.find(p => p.id === productId);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(`${product.name} added to cart 🛒`);
}
function addToWishlist(productId){

const user =
JSON.parse(localStorage.getItem("loggedInUser"));

if(!user){
    alert("Please login first");
    window.location.href = "login.html";
    return;
}

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

const product =
products.find(p => p.id === productId);

const alreadyExists =
wishlist.some(item => item.id === productId);

if(alreadyExists){
    alert("Already in Wishlist ❤️");
    return;
}

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

alert(`${product.name} added to wishlist ❤️`);
}

const productContainer=
document.getElementById("products");

function displayProducts(items){

productContainer.innerHTML="";

items.forEach(product=>{

productContainer.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<div class="category">
${product.category}
</div>

<h3>${product.name}</h3>

<p>${product.description}</p>

<p class="rating">
${product.rating}
</p>

${
product.stock
?
""
:
'<p class="out-of-stock">Out of Stock</p>'
}

<p>
<b>₹${product.price}</b>
</p>

<div class="card-buttons">

<button onclick="addToCart(${product.id})">
🛒 Add to Cart
</button>

<button onclick="addToWishlist(${product.id})">
❤️ Wishlist
</button>

</div>

</div>

`;

});

}

function searchProducts(){

const search=
document
.getElementById("searchInput")
.value
.toLowerCase();

const filtered=
products.filter(product=>
product.name
.toLowerCase()
.includes(search)
);

displayProducts(filtered);
}

displayProducts(products);
function updateCartCount(){

    const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    const cartCount =
    document.getElementById("cartCount");

    if(cartCount){
        cartCount.textContent = `(${cart.length})`;
    }

}

function showUsername(){

    const user =
    JSON.parse(localStorage.getItem("loggedInUser"));

    const username =
    document.getElementById("username");

    if(user){

        if(username){
            username.textContent =
            `👋 ${user.username}`;
        }

    }else{

        window.location.href = "login.html";

    }

}

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
}
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}
updateCartCount();
showUsername();