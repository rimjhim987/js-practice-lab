const cart = {};
function addToCart(id , name , price){
    if (cart[id]){
        cart[id].quantity++ ;  
    }
    else{
        cart[id]= {
            name : name,
            price : price,
            quantity: 1
        };
    };
}
function removeFromCart(id){
    if ( cart[id]){
        delete cart[id];
    }
}

function increaseQuantity(id){
    if (cart[id]){
        cart[id].quantity++;
    }
}
function decreaseQuantity(id){
    if (cart[id]){
        cart[id].quantity--;

        if( cart[id].quantity ===0 ){
            delete cart[id];
        };
    }
}

function displayCart(){
    console.log("-------------Cart------------");

    for (let id in cart) {

        console.log(
            "ID:", id,
            "| Name:", cart[id].name,
            "| Price:", cart[id].price,
            "| Quantity:", cart[id].quantity
        );
    }
}
function calculatePrice(){
    let total = 0;

    for (let id in cart){
        total += cart[id].price * cart[id].quantity  
    }
    return total
}
function clearCart(){
    for ( let id in cart){
        delete cart[id];
    }
}
addToCart(101, "Laptop", 50000);

addToCart(102, "Mouse", 500);

addToCart(101, "Laptop", 50000);

displayCart();

console.log("Total Price:", calculatePrice());

increaseQuantity(102);

decreaseQuantity(101);

displayCart();
