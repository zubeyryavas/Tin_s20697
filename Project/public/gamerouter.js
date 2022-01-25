//const player = require('play-sound')

const path = require('path')

module.exports.game = function (req, res) {
  // player.play('../sounds/stadium.mp3', function (err) {
  //   if (err) throw err
  // })
  res.sendFile(path.join(__dirname, '../index.html'))
}
