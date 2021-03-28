/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `product`, they are referencing an object with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getPriceInDollars(product) {
  return "$" + (product.priceInCents / 100).toFixed(2);
}

// `size` is a number between 0 and 16.
function checkIfSizeIsAvailable(product, size) {
  let sizes = product.availableSizes;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i] === size) {
      return true;
    }
  }

  return false;
}

function getProductHeading(product) {
  let price = getPriceInDollars(product);
  return (
    product.name +
    ": " +
    price +
    " (Available in " +
    product.availableSizes.length +
    " sizes!)"
  );
}

module.exports = { getPriceInDollars, checkIfSizeIsAvailable, getProductHeading };
