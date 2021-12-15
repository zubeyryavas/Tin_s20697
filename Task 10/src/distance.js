module.exports = function () {
  const dist = parseFloat(document.getElementById('dist').value)
  const dfrom = document.getElementById('dfrom').value
  const dto = document.getElementById('dto').value
  if (dfrom === 'mile') {
    switch (dto) {
      case 'kilometer' :
        return dist * 1.609344
      default:
        return dist
    }
  } else if (dfrom === 'kilometer') {
    switch (dto) {
      case 'mile' :
        return dist / 1.609344
      default:
        return dist
    }
  }
}
