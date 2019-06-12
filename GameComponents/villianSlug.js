
// making our villian slug;
// the villain inherits from our hero slug but with attacking functionallity

let boss = Object.create(chatterPillar);

boss.x = 700;
boss.y = 300;
boss.velX = 0;
boss.velY = 0;
boss.tail = 380;
boss.color = 'black';
boss.attack = function(){
  if(this.x > chatterPillar.x){
    this.velX += 0.009;
    this.x += -this.velX;
  }
}
