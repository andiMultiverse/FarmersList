// Import Classes Here


const { Product } = require('./classes/Product');
const { Cart } = require('./classes/Cart');
const { Customer } = require('./classes/Customer');

const product1 = new Product("milk", 2, "vegan");
const cart1 = new Cart();


cart1.addProduct(product1);
cart1.addProduct(product1);
cart1.addProduct(product1);

console.log(cart1.total);

cart1.removeProduct(0);

console.log(cart1.total);


// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}