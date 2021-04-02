/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `product`, they are referencing an object with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getPriceInDollars( { name, priceInCents = 0, availableSizes}  = {} ) {
  console.log ( product.name);
  console.log ( product.priceInCents);
  console.log ( product.availableSizes);
  console.log ( product.priceInCents / 100);
  return "$" + (product.priceInCents / 100).toFixed(2);
}

// `size` is a number between 0 and 16.
function checkIfSizeIsAvailable( {name, priceInCents, availableSizes = 17} = {}, size = -1) {
  let sizes = product.availableSizes;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i] === size) {
      return true;
    }
  }

  return false;
}

module.exports = { getPriceInDollars, checkIfSizeIsAvailable };
