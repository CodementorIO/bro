const getPayload = (type) => {
  switch (type) {
    case 'a':
      const key = 'a'
      return { key }
    case 'b':
      return { key: 'b' }
    default:
      return {}
  }
}
getPayload('b')
