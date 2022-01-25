/* eslint-disable no-undef */

const cvs = document.getElementById('game')
const ctx = cvs.getContext('2d')

const end = document.getElementById('endgame')
const userscore = document.getElementById('score')
const urlParams = new URLSearchParams(window.location.search)
const username = urlParams.get('name')

const xhttp = new XMLHttpRequest()

const sound = document.createElement('audio')
sound.load()
// sound.src = './sounds/ball.mp3'

const drawRect = (x, y, w, h, color) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, w, h)
}

const drawcirc1 = (x, y, r, color) => {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, r, (0, 2 * Math.PI), false)
  ctx.closePath()
  ctx.fill()
}
const drawcirc2 = (x, y, r, w, color) => {
  ctx.strokeStyle = color
  ctx.lineWidth = w
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.stroke()
}

const drawText = (text, x, y, color) => {
  ctx.fillStyle = color
  ctx.font = '50px sans-serif'
  ctx.fillText(text, x, y)
}
console.log(username)
const user = {
  name: username,
  x: 20,
  y: cvs.height / 2 - 50,
  w: 10,
  h: 100,
  color: 'white',
  score: 0
}

const com = {
  x: cvs.width - 30,
  y: cvs.height / 2 - 50,
  w: 10,
  h: 100,
  color: 'white',
  score: 0
}

const ball = {
  x: cvs.width / 2,
  y: cvs.height / 2,
  r: 13,
  color: '#990033',
  speed: 5,
  velocityX: 3,
  velocityY: 4,
  stop: true
}

const collision = (b, p) => {
  b.top = b.y - b.r
  b.bottom = b.y + b.r
  b.left = b.x - b.r
  b.right = b.x + b.r

  p.top = p.y
  p.bottom = p.y + p.h
  p.left = p.x
  p.right = p.x + p.w

  return (b.top < p.bottom && b.bottom > p.top && b.left < p.right && b.right > p.left)
}

const resetBall = () => {
  ball.x = cvs.width / 2
  ball.y = cvs.height / 2

  ball.speed = 5
  ball.velocityX = 3
  ball.velocityY = 4
  ball.stop = true
}

const update = () => {
  if (!ball.stop) {
    ball.x += ball.velocityX
    ball.y += ball.velocityY
  }

  if (ball.y + ball.r > cvs.height || ball.y - ball.r < 0) {
    ball.velocityY = -ball.velocityY
  }

  const comLvl = 0.1
  com.y += (ball.y - (com.y + com.h / 2)) * comLvl

  const player = (ball.x < cvs.width / 2) ? user : com
  if (collision(ball, player)) {
    let intersectY = ball.y - (player.y + player.h / 2)

    intersectY /= player.h / 2

    const maxboundRate = Math.PI / 3
    const bounceAngle = intersectY * maxboundRate

    const direction = (ball.x < cvs.width / 2) ? 1 : -1
    ball.velocityX = direction * ball.speed * Math.cos(bounceAngle)
    ball.velocityY = ball.speed * Math.sin(bounceAngle)

    ball.speed += 1
  }

  if (ball.x > cvs.width) {
    user.score++
    resetBall()
  } else if (ball.x < 0) {
    com.score++
    resetBall()
  }
}

const movePaddle = (e) => {
  const rect = cvs.getBoundingClientRect()

  user.y = e.clientY - rect.top - user.h / 2

  ball.stop = false
}
cvs.addEventListener('mousemove', movePaddle)
const render = () => {
  drawRect(0, 0, cvs.width, cvs.height, '#008374')
  drawRect(cvs.width / 2 - 2, 0, 4, cvs.height, 'white')
  drawcirc1(cvs.width / 2, cvs.height / 2, 8, 'white')
  drawcirc2(cvs.width / 2, cvs.height / 2, 50, 4, 'white')
  drawText(user.score, cvs.width / 4, 100, 'white')
  drawText(com.score, cvs.width / 4 * 3, 100, 'white')

  drawRect(user.x, user.y, user.w, user.h, user.color)
  drawRect(com.x, com.y, com.w, com.h, com.color)

  drawcirc1(ball.x, ball.y, ball.r, ball.color)
}

const endGame = () => {
  if (com.score >= 5) {
    end.style.display = 'flex'
    ball.stop = true
    cvs.removeEventListener('mousemove', movePaddle)
    userscore.innerHTML = user.score

    xhttp.open('POST', '/add', true)
    xhttp.setRequestHeader('Content-type', 'application/json')
    xhttp.send(JSON.stringify({ name: user.name, score: user.score }))
    clearInterval(interval)
  }
}
// sound.play()
const game = () => {
  update()
  render()
  endGame()
}

const fps = 50

const interval = setInterval(game, 1000 / fps)
