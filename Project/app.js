const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const Score = require('./models/ScoreModel')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const game = require('./public/gamerouter.js')
const start = require('./public/startpage.js')


// connect to mongodb
const dbURI = 'mongodb+srv://yavas:Test1234@userscores.xhxn8.mongodb.net/TIN?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(8000))
  .catch((err) => console.log(err))


app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/gameStart', start.start)
app.get('/game', game.game)
app.post('/add', (req, res) => {
  const scoree = new Score({
    name: req.body.name,
    score: req.body.score
  })
  scoree.save().then((result) => { res.send(result) }).catch((err) => {
    console.log(err)
  })
})
const sort = { score: -1 }
app.get('/highscores', (req, res) => {
  Score.find().sort(sort).then((result) => { res.render('highscores', { records: result }) }).catch((err) => {
    console.log(err)
  })
})
