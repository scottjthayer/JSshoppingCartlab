const soapBar = {
  name: 'Soap',
  price: 2.00
}

const chapstick = {
  name: 'Chap Stick',
  price: 1.00
}

const shampoo = {
  name: 'Shampoo',
  price: 2.50
}

const conditioner = {
  name: 'Conditioner',
  price: 2.50
}

const candle = {
  name: 'Candle',
  price: 4.25
}
let cart = new Array();
function AddToCart(item) {
  cart.push(item);
}

function FindTotal(cart) {
  let total = null;
  for (let i = 0; i < cart.length; i++){
    total += cart[i].price;
  }
  return total;
}

function DisplayCheckOut(cart) {
  for (let i = 0; i < cart.length; i++) {
    console.log(`${cart[i].name} ${cart[i].price}`)
  }
  let tax = (0.06 * FindTotal(cart));
  let grandTotal = (tax + FindTotal(cart));
  console.log(`Total: ${FindTotal(cart)}`);
  console.log(`Tax: ${tax.toFixed(2)}`)
  console.log(`Grand Total: ${grandTotal}`)
}

