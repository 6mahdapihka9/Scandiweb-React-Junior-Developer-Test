export default function getDefaultAttributes(attributes) {
  return attributes.map(a => ({
        id: a.id,
        value: a.items[0].value
      })
  )
}
