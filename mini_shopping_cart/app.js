const products = [
    {
        id: 1,
        name: "Shoes",
        price: 1500
    },
    {
        id: 2,
        name: "Watch",
        price: 2500
    },
    {
        id: 3,
        name: "Headphone",
        price: 3500
    }
];


const addBtn = document.querySelectorAll(".add-btn");
const clearBtn = document.querySelector(".clear-cart");
const totalBtn = document.querySelector(".total-btn");
const cartItem = document.querySelector(".cart-items");
const totalCartElement = document.querySelector(".total-cart");


const cart = [];

addBtn.forEach((btn , index) => {
    btn.addEventListener('click', function(){
        const product = products[index];
        cart.push(product);
        // console.log(cart);

        displayCart();
        calculateCart();
        
    });
})

function displayCart(){
    cartItem.innerHTML=""
    cart.forEach((product)=>{

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
    <h1>${product.name}</h1>
    <h3>₹${product.price}</h3>
    <button onclick="deleteExpense(${product.id})">Delete</button>
    `;
    
    cartItem.appendChild(div);
    }); 
    
} 
function calculateCart(){
    let totalCart = 0;
    cart.forEach((product)=>{
        totalCart += product.price;
    });
    totalCartElement.textContent = `Total : ₹${totalCart}`;
}  
clearBtn.addEventListener("click", function () {

    cart.length = 0;

    displayCart();
    calculateCart();

});