export default function getDefaultAttributes(attributes) {
  return attributes.reduce((prevValue, currentValue) => ({
    ...prevValue,
    [currentValue.id]: currentValue.items[0].value
  }), {});
}
