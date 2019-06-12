
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
