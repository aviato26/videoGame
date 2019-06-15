
let ctx = document.querySelector('canvas');
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
let c = ctx.getContext('2d');

// creating some ledges to jump on

let homeLedge = Object.create(Ledge);
let aboutLedge = Object.create(Ledge);
let contactLedge = Object.create(Ledge);

document.addEventListener('keydown', (e) => {
  chatterPillar.moveRight(e)
  chatterPillar.moveLeft(e)
  chatterPillar.jumpEvent(e)
})

let animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, ctx.width, ctx.height);
  collisions();
  wallCrawling(chatterPillar.x, chatterPillar.y)
  chatterPillar.jumping();
  chatterPillar.addXvelocity();
  chatterPillar.drawAndMoveSlug();
<<<<<<< HEAD
  boss.drawAndMoveSlug(880);
=======
  boss.drawAndMoveSlug(230);
>>>>>>> defc0498aa7cd7166b7fea8ebf509c94eb61d7d7
}
animate();
