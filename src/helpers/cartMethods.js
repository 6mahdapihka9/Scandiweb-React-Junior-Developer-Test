function areProductsEqual(p, pID, attr) {
  return p.productID === pID && JSON.stringify(p.attributes) === JSON.stringify(attr)
}

export function changeProductAmount(state, productID, attributes, amount) {
  let searchElements = state.filter(p => areProductsEqual(p, productID, attributes));

  if (searchElements.length) {
    if (searchElements.amount + amount < 1)
      return state.filter(p => !areProductsEqual(p, productID, attributes))
    else
      return state.map(p => areProductsEqual(p, productID, attributes) ?
          {
            ...p,
            amount: p.amount + amount
          } : p
      )
  } else {
    return [
      ...state,
      {
        productID,
        attributes,
        amount
      }
    ]
  }
}

export function changeProductAttribute(state, productID, previousAttributes, attributes){
  return state.map(p => areProductsEqual(p, productID, previousAttributes) ?
      {
        ...p,
        attributes
      } : p
  )
}
