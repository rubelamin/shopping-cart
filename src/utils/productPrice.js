export default function productPrice(productID, productsArray) {
  let price = productsArray.map((item) => item.id === productID && item.price);

  return price;
}
