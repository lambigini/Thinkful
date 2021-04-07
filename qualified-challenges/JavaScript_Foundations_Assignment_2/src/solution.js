/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  // loop though products
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    // check if products have the product = name

if (product.name !== name) return null;
if (product.availableSizes.includes(size)) return product;
    
  }
}

function addProductToCart({name, priceInCents}, cart = {}) {
  // create new cart and and item to cart
  // if cart don't have that product  in it = cart[ product name] =cart value of access key = undefined
  if (cart[name] === undefined)
    cart[name] = { quantity: 1, priceInCents: priceInCents };
  else cart[name].quantity++;

  return cart;
}

function calculateTotal(cart) {
  // if the cart if empty return 0
  if (Object.keys(cart).length === 0) return 0;
  // cart not empty, loop through the cart
  let sum = 0;
  for (const index in cart) {
    const item = cart[index];
    const quantity = item.quantity;
    const price = item.priceInCents;
  
    // get item price and quantity, multiply, add to sum
    sum += quantity*price;
  }

  // return sum
  return sum;
}

function printReceipt(cart) {
// if the cart if empty return 0
if (Object.keys(cart).length === 0) return null;

let print = "";
// loop through each item in cart
for (const index in cart) {
  const item = cart[index];
  // const quantity = item.quantity;
  // const price = item.priceInCents;
const { quantity, priceInCents} = item; 
 // print quantity - item number, price and total
  print += `${quantity}x${index} - ${printablePrice(priceInCents*quantity)}\n`;
}

// return final string
return print + `Total: ${printablePrice(calculateTotal(cart))}`;

}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
