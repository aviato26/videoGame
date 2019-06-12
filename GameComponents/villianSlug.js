
// making our villian slug;
// the villain inherits from our hero slug but with attacking functionallity

let boss = Object.create(chatterPillar);

boss.x = 1100;
boss.y = 300;
boss.velX = 0;
boss.velY = 0;
boss.tail = 980;
boss.color = 'black';
boss.attack = function(){
  if(this.x < chatterPillar.x - 15){
    if(this.tail <= this.x - 220){
      this.tail += 50
    } else if (this.tail > this.x - 310){
      this.velX += 20
      this.x += 4
    }
  }
  else if(this.x > chatterPillar.x - 10){
      if(this.tail >= this.x + 220){
        this.tail -= 50
      } else if (this.tail < this.x + 310){
        this.velX -= 20
        this.x -= 4
    }
  }
  else {
      this.x = this.x;
    }
}
