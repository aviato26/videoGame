
// making our villian slug;
// the villain inherits from our hero slug but with attacking functionallity

let boss = Object.create(chatterPillar);

<<<<<<< HEAD
boss.x = 500;
=======
boss.x = 1100;
>>>>>>> defc0498aa7cd7166b7fea8ebf509c94eb61d7d7
boss.y = window.innerHeight - 30;
boss.velX = 0;
boss.velY = 0;
boss.tail = 800;
boss.color = 'black';
boss.turn = false;

boss.attack = function(){

  if(this.x < chatterPillar.x - 45){
    if(this.turn !== true){
      this.turn = true
      this.tail = this.x - 20
      this.x = this.tail + 100
    }
    if(this.tail <= this.x - 220){
      this.tail += 50
    } else if (this.tail > this.x - 310){
      this.velX += 20
      this.x += 4
    }
  }
  else if(this.x > chatterPillar.x - 10){
      if(this.turn !== false){
        this.turn = false;
        this.tail = this.x + 20
        this.x = this.tail - 100
      }
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
