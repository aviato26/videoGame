

let collisions = () => {
  // this array will hold all ledges to loop over for collision detection

  let objs = [homeLedge, aboutLedge, contactLedge];

  // declaring loop iterator outside loop to not make a new variable for every loop iteration
  let i;

  // drawing the ledges

  homeLedge.drawLedge(100,window.innerHeight - 150,300,10);
  aboutLedge.drawLedge(500,window.innerHeight - 250,300,10);
  contactLedge.drawLedge(1000,window.innerHeight - 350,300,10);

  for(i = 0; i < objs.length; i++){
    // checking to see if the slug is off either side of the ledges and if so adding gravity to fall off ledge

    if((chatterPillar.x > objs[i].x && chatterPillar.x < objs[i].width + objs[i].x) && (chatterPillar.y > (objs[i].y - 10) && chatterPillar.y < (objs[i].y + 10))){
      if(!chatterPillar.jump){
        chatterPillar.velY = 0;
        chatterPillar.y = objs[i].y;
      }
    }

    // checks to see if slug is off the ledge and if so will turn jump to true and apply gravity

    if((chatterPillar.y === objs[i].y && (chatterPillar.x < objs[i].x && chatterPillar.tail < objs[i].x)) || (chatterPillar.y === objs[i].y && (chatterPillar.tail > objs[i].width + objs[i].x &&    chatterPillar.x > objs[i].width + objs[i].x))){
        chatterPillar.velY += -10
    }
  }
}

// the function for wall collision and crawling effect

let wallCrawling = (a, b) => {
  if(a < 0){
    chatterPillar.x = 0;
    chatterPillar.velX = 0;
  } else if(a > ctx.width){
    chatterPillar.x = ctx.width;
    chatterPillar.velX = 0;
  }
}
