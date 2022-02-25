export default function getProductsAmountFromCart(cart) {
  return cart.reduce(
      (previousValue, product) => previousValue + product.amount,
      0
  )
}
