
let ctx = document.querySelector('canvas');
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
let c = ctx.getContext('2d');

// creating some ledges to jump on

let Ledge = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  drawLedge: function(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    c.beginPath();
    c.rect(this.x, this.y, this.width, this.height);
    c.fillStyle = 'black';
    c.fill();
    c.stroke();
  },

}

let homeLedge = Object.create(Ledge);
let aboutLedge = Object.create(Ledge);
let contactLedge = Object.create(Ledge);

// this will be the slug charactar

let chatterPillar = {
  x: 195,
  y: 300,
  tail: 40,
  velY: 0,
  velX: 0,
  jump: false,
  jumpHeight: 0,

  drawAndMoveSlug: function(){
    c.beginPath();
    c.bezierCurveTo(this.tail, this.y, this.x, this.y-80, this.x, this.y)
    c.stroke()
    c.fillStyle = 'green'
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
        this.y = 315
        }
    },

  addXvelocity: function(){
      this.velX *= .98
      this.x += this.velX;
      this.tail += this.velX;
      this.y += -this.velY;
  }
}

// event variable will hold the state of first keydown event so we can switch the position of the direction of animation
let event
document.addEventListener('keydown', (e) => {
  chatterPillar.moveRight(e)
  chatterPillar.moveLeft(e)
  chatterPillar.jumpEvent(e)
})

let collisions = () => {
  // drawing the ledges

  homeLedge.drawLedge(300,150,300,10);
  aboutLedge.drawLedge(800,200,300,10);
  contactLedge.drawLedge(1300,149,300,10);


  // checking to see if the slug is off either side of the ledges and if so adding gravity to fall off ledge

    if((chatterPillar.x > aboutLedge.x && chatterPillar.x < aboutLedge.width + aboutLedge.x) && (chatterPillar.y < aboutLedge.y)){
      if(!chatterPillar.jump){
        chatterPillar.y = aboutLedge.y;
        chatterPillar.velY = 0;
        chatterPillar.jump = false
      }
  }

  if((chatterPillar.x > homeLedge.x && chatterPillar.x < homeLedge.width + homeLedge.x) && (chatterPillar.y < homeLedge.y)){
    if(!chatterPillar.jump){
      chatterPillar.y = homeLedge.y;
      chatterPillar.velY = 0;
      chatterPillar.jump = false
    }
  }

  if((chatterPillar.x > contactLedge.x && chatterPillar.x < contactLedge.width + contactLedge.x) && (chatterPillar.y < contactLedge.y)){
    if(!chatterPillar.jump){
      chatterPillar.y = contactLedge.y;
      chatterPillar.velY = 0;
      chatterPillar.jump = false
    }
  }

    // checks to see if slug is off the ledge and if so will turn jump to true and apply gravity

  if(((chatterPillar.y === aboutLedge.y && (chatterPillar.x < aboutLedge.x && chatterPillar.tail < aboutLedge.x)) || (chatterPillar.y === aboutLedge.y && (chatterPillar.tail > aboutLedge.width + aboutLedge.x &&    chatterPillar.x > aboutLedge.width + aboutLedge.x))) ||
      ((chatterPillar.y === homeLedge.y && (chatterPillar.x < homeLedge.x && chatterPillar.tail < homeLedge.x)) || (chatterPillar.y === homeLedge.y && (chatterPillar.tail > homeLedge.width + homeLedge.x && chatterPillar.x > homeLedge.width + homeLedge.x))) ||
     ((chatterPillar.y === contactLedge.y && (chatterPillar.x < contactLedge.x && chatterPillar.tail < contactLedge.x)) || (chatterPillar.y === contactLedge.y && (chatterPillar.tail > contactLedge.width + contactLedge.x && chatterPillar.x > contactLedge.width + contactLedge.x)))){
    chatterPillar.velY += -10
  }
}

let animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, ctx.width, ctx.height)
  collisions()
  chatterPillar.jumping();
  chatterPillar.addXvelocity();
  chatterPillar.drawAndMoveSlug()
}
animate();
