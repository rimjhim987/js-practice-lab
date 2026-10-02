const products = [
    {
        id: 1,
        name: "Wirelees headphone",
        type: "electronic",
        price: 49
    },
    {
        id: 2,
        name: "Machenical Keyboard",
        type: "electronic",
        price: 89
    },
    {
        id: 3,
        name: "Coffe Mug",
        type: "Kithen",
        price: 14
    },
    {
        id: 4,
        name: "NoteBook",
        type: "Stationary",
        price: 9
    },
    {
        id: 5,
        name: "USB-C Cable",
        type: "electronic",
        price: 12
    },
    {
        id: 6,
        name: "Mouse Pad",
        type: "Electronic",
        price: 18
    },
    {
        id: 7,
        name: "Water Bottle",
        type: "Home",
        price: 25
    }
];


let cart = [];

const addButtons = document.querySelectorAll(".add-btn");
const list = document.querySelector(".list");
const clearBtn = document.querySelector(".clearbtn");
const total = document.querySelector(".total span");
const checkout = document.querySelector(".checkout");


addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const id = Number(button.dataset.id);

        const product = products.find(function(item) {
            return item.id === id;
        });

        const existingProduct = cart.find(function(item) {
            return item.id === id;
        });


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                ...product,
                quantity: 1
            });

        }

        showCart();

    });

});

function showCart() {

    list.innerHTML = "";


    if (cart.length === 0) {

        list.innerHTML = "<li>Your cart is empty</li>";

        total.textContent = "$00";

        return;
    }


    cart.forEach(function(item) {

        const li = document.createElement("li");

        li.classList.add("cart-item");


        li.innerHTML = `
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.type}</p>
                <p>$${item.price}</p>
            </div>

            <div class="quantity">

                <button class="minus-btn" data-id="${item.id}">
                    -
                </button>

                <span>${item.quantity}</span>

                <button class="plus-btn" data-id="${item.id}">
                    +
                </button>

            </div>

            <button class="remove-btn" data-id="${item.id}">
                Remove
            </button>
        `;

        list.appendChild(li);

    });


    calculateTotal();

    addPlusEvents();

    addMinusEvents();

    addRemoveEvents();

}

function addPlusEvents() {

    const plusButtons = document.querySelectorAll(".plus-btn");


    plusButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const id = Number(button.dataset.id);

            const item = cart.find(function(product) {
                return product.id === id;
            });

            item.quantity++;

            showCart();

        });

    });

}
function addMinusEvents() {

    const minusButtons = document.querySelectorAll(".minus-btn");


    minusButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const id = Number(button.dataset.id);

            const item = cart.find(function(product) {
                return product.id === id;
            });

            item.quantity--;


            if (item.quantity === 0) {

                cart = cart.filter(function(product) {
                    return product.id !== id;
                });

            }

            showCart();

        });

    });

}
function addRemoveEvents() {

    const removeButtons = document.querySelectorAll(".remove-btn");


    removeButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const id = Number(button.dataset.id);

            cart = cart.filter(function(item) {
                return item.id !== id;
            });

            showCart();

        });

    });

}
function calculateTotal() {

    let sum = 0;


    cart.forEach(function(item) {

        sum = sum + (item.price * item.quantity);

    });


    total.textContent = "$" + sum;

}
clearBtn.addEventListener("click", function() {

    cart = [];

    showCart();

});
checkout.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty");

    } else {

        alert("Checkout successful!");

    }

});
showCart();

