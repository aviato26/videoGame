
let chatterPillar = {
  x: 195,
  y: window.innerHeight - 30,
  tail: 40,
  velY: 0,
  velX: 0,
  jump: false,
  jumpHeight: 0,
  color: 'green',

  drawAndMoveSlug: function(height = this.y){
    c.beginPath();
    c.bezierCurveTo(this.tail, this.y, this.x, height-80, this.x, this.y)
    c.stroke()
    c.fillStyle = this.color
    c.closePath()
    c.fill()
  },

  moveRight: function(e){
    if(e.key === 'ArrowRight'){
      if(e.key !== event){
        this.tail = this.x
        this.x = this.tail + 90
      }
      if(this.tail <= this.x - 90){
        this.tail += 20
      } else if (this.tail > this.x - 90){
        this.velX += 4
        this.x += 30
      }
    }
  },

  moveLeft: function(e){
      if(e.key === 'ArrowLeft'){
        if(e.key !== event){
          this.tail = this.x
          this.x = this.tail - 90
        }
        if(this.tail >= this.x + 90){
          this.tail -= 20
        } else if (this.tail < this.x + 90){
          this.velX -= 4
          this.x -= 30
      }
    }
  },

  jumpEvent: function(e){
      if(e.key === " "){
        this.jump = true;
        this.jumpHeight = this.y - 150;
      }
      event = e.key;
   },

  jumping: function(){
      if(this.jump){
        this.velY += 6.234234
        this.x += this.velX;
        this.tail += this.velX;
      if(this.y < this.jumpHeight){
        this.jump = this.false
        this.velY *= -0.4
        }
      }
      if(this.y > 310){
        this.y = window.innerHeight - 30
        }
    },

  addXvelocity: function(){
      this.velX *= .98
      this.x += this.velX;
      this.tail += this.velX;
      this.y += -this.velY;
  }
}
