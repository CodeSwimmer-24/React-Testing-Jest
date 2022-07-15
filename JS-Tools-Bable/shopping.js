// exporting

console.log("Exporting Modules");

const shippingCost = 10;
const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(product, quantity);
};

const totalPrice = 2334;
const totalQuantity = 12;

export { totalPrice, totalQuantity };

export default shippingCost;
