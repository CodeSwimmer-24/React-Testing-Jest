// Importing
// import "./shopping.js";

// console.log("Shopping ");

import * as ShoppingCart from "./shopping.js";
import shippingCost from "./shopping.js";

ShoppingCart.addToCart("bred", 5);

console.log(ShoppingCart.totalPrice);
console.log(shippingCost);
