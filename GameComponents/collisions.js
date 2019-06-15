
let collisions = () => {
  // drawing the ledges

  homeLedge.drawLedge(100,window.innerHeight - 150,300,10);
  aboutLedge.drawLedge(500,window.innerHeight - 250,300,10);
  contactLedge.drawLedge(900,window.innerHeight - 350,300,10);


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
