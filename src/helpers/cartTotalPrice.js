export default function cartTotalPrice(cart, currency) {
  return cart.reduce(
      (previous, current) =>
          previous +
          current.amount *
          current.prices.filter(
              price =>
                  price.currency.label === currency.label
          )[0].amount
      , 0
  );
}
