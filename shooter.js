var pause = false;
var globalTimer = 0;
var squareWidth = 40;
var squareHeight = 40;
var score = 0;
var sprite = new Image();
var cx = 0;
var cy = 0;
var sx = 0;
var sy = 0;
var swidth = 70;
var sheight = 70;
    sprite.src = "images/asteroid1.png";
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  var count = 0;
//   function drawScore() {
//     ctx.font = "16px Arial";
//     ctx.fillStyle = "#0095DD";
//     ctx.fillText("Score: "+score, 8, 20);
// }
//   function drawMisses(){
//     ctx.fillText("you missed " + count + " stones", 300, 20);
//   }
//   function droppy(){
//     return count;
//   }

  function Asteroid(x, y){
    this.x = x;
    this.y = y;
    this.createAsteroid = function(){
      ctx.drawImage(sprite, sx, sy, swidth, sheight, this.x, this.y, 60, 60);
    };
    this.update = function(){
      if(this.y >= 480){
        this.y = 0;
        this.x = Math.random() * 480;
        count += 1;
        if(count >= 3){
          pause = true;
        }else {
          if(!pause){
            this.y += 4;
          }
        }

      }else if(!pause){
        this.y += 4;
      }
      this.createAsteroid();
    };
    this.update();
  }
  // function Square(x, y, w, h){
  //   this.x = x;
  //   this.y = y;
  //   this.w = w;
  //   this.h = h;
  //   this.createStone = function(){
  //     ctx.fillRect(this.x, this.y, this.h, this.w);
  //   };
  //   this.delete = function(){
  //     rockArray.shift();
  //   };
  //   this.update = function(){
  //     if (this.y >= 480){
  //       this.y = 0;
  //       this.x = Math.random()* 490;
  //       count += 1;
  //
  //       if(count >= 3){
  //         pause = true;
  //       }
  //     } else {
  //       if(!pause){
  //         this.y += 4;
  //       }
  //     }
  //     this.createStone();
  //   };
  //   this.update();
  // }

  // sq.update();
  // function createStone(){
  //   ctx.fillRect(x, y, h, w);
  // }
  var rockArray = [];

  // for (var i = 0; i < 1; i++) {
  //   const a = 20;
  //   const b = 20;
  //   var c = Math.random() * 480;
  //   var d = 0;
  //   rockArray.push(new Square(c, d, b, a));
  // }
  let timer = 0;
  function fall(){




    if ( globalTimer % 300 === 0) {
      if (count >=3){
        // drawMisses();
        // pause = true;
      }
      rockArray.push(new Asteroid(Math.random()* 490, 0));
    }

    ctx.clearRect(0, 0, 500, 500);
    // drawScore();
    // drawMisses();
    for (var j = 0; j < rockArray.length; j++) {
      // setTimeout(3000);
      rockArray[j].update();
      debugger
      console.log(rockArray[j]);
        // cy++;
        //     ctx.drawImage(sprite, sx, sy, swidth, sheight, cx, cy, 60, 60);
      // console.log(rockArray);
    }
    globalTimer++;
  }
  // function run(){
  //   setInterval(createStone, 3000);
  // }

  // run();
  // setInterval(() => {
  //   var thing = new Square(10, 10, 10, 10);
  //   thing.update();
  // }, 100);
  document.addEventListener("keypress", (e) => {
    console.log(e.key);
    switch (e.key) {
      case 'r':
      rockArray = [];
      rockArray.push(new Asteroid(Math.random()* 490, -100));
      pause = false;
      count = 0;
      score = 0;
        break;
      case ' ':
        pause = !pause;
        break;
      // case ''
      default:
        return;
      }
  });
  document.addEventListener("mousemove", (e) => {
    if(!pause){

    var coords = getMousePos(canvas, e);
    for (var i = 0; i < rockArray.length; i++) {
      if((rockArray[i].y + squareHeight > coords.y) && (rockArray[i].y < coords.y)){
        if((rockArray[i].x + squareWidth > coords.x)&& (rockArray[i].x  < coords.x)){
          rockArray[i].y = Math.random() * -100 - squareHeight/2;
          rockArray[i].x = Math.random() * 480;
          score++;
          // alert(score);

        }
      }
    }
  }
  });
  var then;
  var now;
  var elapsedTime;
  var startTime;
  var fpsInterval;
  var framespersec;
  function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
  }
  // var sprite = new Image();
  // var cx = 0;
  // var cy = 0;
  // var sx = 0;
  // var sy = 0;
  // var swidth = 80;
  // var sheight = 80;
  // sprite.onload = function(){
  //   ctx.drawImage(sprite, sx, sy, swidth, sheight, cx, cy, 50, 50);
  // };
  function animate(){
    requestAnimationFrame(animate);
    now = Date.now();
    elapsedTime = now - then;
    // drawScore();

    if(elapsedTime > fpsInterval){
      then = now - (elapsedTime % fpsInterval);
      if(!pause){
        fall();
        document.getElementById("counter").innerHTML = "lives " + (3 - count);
        document.getElementById("score").innerHTML = "score " + (score);
        // document.write('hi');
        // counter.append(count);
      }
    }
  }
  startAnimating(30);
});
function getMousePos(canv, evt) {
        var rect = canv.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
