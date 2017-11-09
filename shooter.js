document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  function Square(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.createStone = function(){
      ctx.fillRect(this.x, this.y, this.h, this.w);
    };
    this.update = function(){
      if (this.y >= 480){
        return '';
      } else {
        this.y += 4;
      }
      this.createStone();
    };
    this.update();
  }

  // sq.update();
  // function createStone(){
  //   ctx.fillRect(x, y, h, w);
  // }
  var rockArray = [];

  for (var i = 0; i < 1; i++) {
    const a = 20;
    const b = 20;
    var c = Math.random() * 480;
    var d = 0;
    rockArray.push(new Square(c, d, b, a));
  }

  let timer = 0;
  function fall(){
    timer++;
    if (timer >= 180) {
      timer = 0;
      rockArray.push(new Square(Math.random()* 400, 0, 30, 30))
    }
    requestAnimationFrame(fall);
    ctx.clearRect(0, 0, 500, 500);

    for (var j = 0; j < rockArray.length; j++) {
      // setTimeout(3000);
      rockArray[j].update();
      console.log(rockArray);
    }
  }
  // function run(){
  //   setInterval(createStone, 3000);
  // }
  fall();
  // run();
  // setInterval(() => {
  //   var thing = new Square(10, 10, 10, 10);
  //   thing.update();
  // }, 100);

});
