/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let sum = 0;
  //loop through the cart
  for (const itemName in cart) {
    const itemValue = cart[itemName];
    //get the price and quantity of each item in cart
    const price = itemValue.priceInCents;
    const quantity = itemValue.quantity;

    // amount pay for each item = quantity * price then and add them to sum
    sum += price * quantity;
  }
  //return sum
  return sum;
}

function printCartInventory(cart) {
  let result = "";
  // loop through the cart to access each item
  for (const itemName in cart) {
    const itemValue = cart[itemName];
    //get the price and quantity of each item in cart
    const price = itemValue.priceInCents;
    const quantity = itemValue.quantity;

    // add them together then push it in an array
    result += `${quantity}x${itemName}\n`;
  }
  // return the join statement get from the new array
  return result;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
