// 设定画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设定画布长宽
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 生成随机颜色的函数
function randomColor() {
  return 'rgb(' +
    random(0, 255) + ', ' +
    random(0, 255) + ', ' +
    random(0, 255) + ')';
}

function Shape(x, y, velX, velY, exists) {
  this.x = x
  this.y = y
  this.velX = velX
  this.velY = velY
  this.exists = exists
}

function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists)
  this.color = color
  this.size = size
}

Ball.prototype.constructor = Ball

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function () {
  if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
    this.velX = -(this.velX)
  }

  if ((this.y - this.size) <= 0 || (this.y + this.size) >= height) {
    this.velY = -(this.velY)
  }

  this.x += this.velX
  this.y += this.velY

}

Ball.prototype.collisionDetect = function () {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
}


function EvilCircle(x, y) {
  Shape.call(this, x, y, 20, 20, true)
  this.color = 'white'
  this.size = 100
}

EvilCircle.prototype.constructor = EvilCircle

EvilCircle.prototype.draw = function () {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}

EvilCircle.prototype.checkBounds = function () {
  if ((this.x - this.size <= 0)) {
    this.x = this.size
  } else if ((this.x + this.size) >= width) {
    this.x = width - this.size
  }

  if (this.y - this.size <= 0) {
    this.y = this.size
  } else if (this.y + this.size >= height) {
    this.y = height - this.size
  }
}

EvilCircle.prototype.setControls = function () {
  window.onkeydown = e => {
    switch (e.key) {
      case 'a':
        this.x -= this.velX
        break
      case 'w':
        this.y -= this.velY
        break
      case 'd':
        this.x += this.velX
        break
      case 's':
        this.y += this.velY
        break
    }
  }
}

EvilCircle.prototype.collisionDetect = function () {

  for (var j = 0; j < balls.length; j++) {
    var dx = this.x - balls[j].x;
    var dy = this.y - balls[j].y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.size + balls[j].size) {
      balls[j].exists = false
    }
  }

}


var balls = []
var evilCircle = null

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)'
  ctx.fillRect(0, 0, width, height)

  if (!evilCircle) {
    evilCircle = new EvilCircle(random(0, width), random(0, height))
    evilCircle.setControls()
  }

  evilCircle.checkBounds()
  evilCircle.draw()

  evilCircle.collisionDetect();

  while (balls.length < 25) {
    var x = random(0, width)
    var y = random(0, height)
    var velX = random(-7, 7)
    var velY = random(-7, 7)
    var exists = true
    var color = randomColor()
    var size = random(10, 20)
    var ball = new Ball(x, y, velX, velY, exists, color, size)
    balls.push(ball)
  }


  for (var i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      balls[i].draw()
      balls[i].update()
      balls[i].collisionDetect()
    }
  }

  requestAnimationFrame(loop)
}

loop()