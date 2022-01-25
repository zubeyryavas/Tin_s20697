const path = require('path')


module.exports.start = function (req, res) {

  res.sendFile(path.join(__dirname, '../startPage.html'))
}
