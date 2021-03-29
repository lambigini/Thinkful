/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {
  const name = [];
//return no item for sale if the array is empty
if (products.length === 0) 
return `There are no items for sale.`;
//loop throuth array of object 
for (let i = 0; i < products.length; i++) {
  const element = products[i];

  // get the name of all element
  // put it to the array name
    name.push(element.name);
}
// check the name array to print the output 
if (name.length === 1) { // return There is 1 item for sale: Slip Dress., if only 1 item in the array
  return `There is ${name.length} item for sale: ${name}.`;
} else if (products.length === 2 ) {// If there are more than two items, Hat and Shirt.
  return `There are ${name.length} items for sale: ${name.join(" and ")}.`;
} else {//There are 3 items for sale: Hat, Shirt, Square-Neck Jumpsuit.
  return `There are ${name.length} items for sale: ${name.join(", ")}.`;
}

}

module.exports = {
  listAllItems,
};
