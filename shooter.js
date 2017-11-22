//
// var gameover = true;
//
// var score = 0;
// var pause = true;
// var globalTimer = 0;
// var squareWidth = 40;
// var squareHeight = 40;
// var score = 0;
// var highscore = localStorage.getItem('highscore') || 0;
//
// var sprite = new Image();
// var explode = new Image();
// explode.src = "assets/images/explode.png";
// var cx = 0;
// var cy = 0;
// var sx = 0;
// var sy = 0;
// var swidth = 70;
// var sheight = 70;
// var muted = true;
//     sprite.src = "assets/images/asteroid1.png";
// document.addEventListener("DOMContentLoaded", () => {
//
//   var music = new Audio("assets/sound/starwars.mp3");
//   music.loop = true;
//   music.play();
//   music.volume = .2;
//   music.muted = true;
//   var mutey = document.querySelector("#mutey");
//   mutey.addEventListener("click", ()=> {
//     muted = !muted;
//       if(music.muted){
//         music.currentTime = 0;
//         music.muted = !music.muted;
//       }else{
//         music.muted = !music.muted;
//       }
//       canvas.focus();
//
//   });
// var lefty = document.querySelector("#lefty");
// lefty.addEventListener("click", () => {
//   pause = !pause;
//   canvas.focus();
// });
//   var laser = new Audio("assets/sound/saberon.mp3");
//
//   const canvas = document.querySelector("canvas");
//   const ctx = canvas.getContext("2d");
//   pause = false;
//   // pause = true;
//   gameover = true;
//   let c = document.querySelector(".modal");
//   c.innerHTML = '<div id="start">Welcome to Sharp swiper<br> <br>Move lightsaber across the asteroids to destroy them. Try to destroy them before they hit the ground. Miss 3 and you lose. <br> press R to start game. <br> Have fun</div>';
//
//   ctx.fillStyle = "white";
//   var count = 0;
// //   function drawScore() {
// //     ctx.font = "16px Arial";
// //     ctx.fillStyle = "#0095DD";
// //     ctx.fillText("Score: "+score, 8, 20);
// // }
// //   function drawMisses(){
// //     ctx.fillText("you missed " + count + " stones", 300, 20);
// //   }
// //   function droppy(){
// //     return count;
// //   }
//   function Explode(x, y){
//     this.positions = [];
//     this.x = x;
//     this.y = y;
//     this.bang = function(){
//       ctx.drawImage(explode, sx, sy, 90, 90, this.x, this.y, 60, 60);
//     };
//     this.update = function(){
//
//     };
//     this.bang();
//   }

//   var rockArray = [];
//   var explosionArray = [];
//
//   let timer = 0;
//   function fall(){
//
//
//
//
//     if ( globalTimer % 300 === 0 && (!gameover || !pause)) {
//       if (count >=3){
//       }
//         rockArray.push(new SpriteSheet());
//
//     }
//
//     ctx.clearRect(0, 0, 500, 500);
//     for (var j = 0; j < rockArray.length; j++) {
//       // setTimeout(3000);
//       rockArray[j].update();
//         // cy++;
//         //     ctx.drawImage(sprite, sx, sy, swidth, sheight, cx, cy, 60, 60);
//     }
//     globalTimer++;
//   }
//   // function run(){
//   //   setInterval(createStone, 3000);
//   // }
//
//   // run();
//   // setInterval(() => {
//   //   var thing = new Square(10, 10, 10, 10);
//   //   thing.update();
//   // }, 100);
//   document.addEventListener("keypress", (e) => {
//     // console.log(e.key);
//     switch (e.key) {
//       case 'r':
//       //  highscore = localStorage.getItem("highscore");
//        highscore = localStorage.getItem('highscore') || 0;
//       if(highscore !== null){
//           if (score > highscore) {
//               localStorage.setItem("highscore", score);
//           }
//       }
//       else{
//           localStorage.setItem("highscore", score);
//       }
//       gameover =  false;
//       let c = document.querySelector(".modal");
//       c.innerHTML = '<div></div>';
//       rockArray = [];
//       rockArray.push(new SpriteSheet());
//       pause = false;
//       count = 0;
//       score = 0;
//         break;
//       case 'p':
//       if(!gameover){
//         pause = !pause;
//       }
//         break;
//
//       default:
//         return;
//       }
//   });
//   var humArray = [];
//   document.addEventListener("mousemove", (e) => {
//     if(!pause && !gameover){
//
//     var coords = getMousePos(canvas, e);
//     for (var i = 0; i < rockArray.length; i++) {
//       if((rockArray[i].y + squareHeight + 30 > coords.y) && (rockArray[i].y < coords.y)){
//         if((rockArray[i].x + squareWidth + 30 > coords.x)&& (rockArray[i].x  < coords.x)){
//           let a = rockArray[i].x;
//           let b = rockArray[i].y;
//           const soundy = new Audio("assets/sound/clashy.wav");
//           if(!muted){
//             soundy.volume = 0.1;
//             soundy.play();
//           }
//
//           explosionArray.push(new ExplosionSheet(a, b));
//           rockArray[i].y = ((Math.random() * -100) -100);
//           rockArray[i].x = Math.random() * 400;
//           score++;
//
//
//         }else {
//           if(!muted){
//             humArray.push(new Audio("assets/sound/hum.wav"));
//             if(humArray.length > 0){
//               humArray[0].play();
//             }
//           }
//         }
//       }
//     }
//   }
//   });
//   var then;
//   var now;
//   var elapsedTime;
//   var startTime;
//   var fpsInterval;
//   var framespersec;
//
//   function ExplosionSheet(ex, ey){
//     var path = 'assets/images/explode.png';
//     var frameWidth = 128;
//     var frameHeight = 128;
//     var frameSpeed = 3;
//     var endFrame = 15;
//     var image = new Image();
//     var framesPerRow;
//     var currentFrame = 0;
//     var counter = 0;
//     var firstTime = 0;
//     this.x = ex;
//     this.y = ey;
//     this.update = function(){
//       // update to the next frame if it is time
//       if(firstTime < 44){
//         firstTime++;
//         if (counter == (frameSpeed - 1))
//         currentFrame = (currentFrame + 1) % endFrame;
//
//         // update the counter
//         counter = (counter + 1) % frameSpeed;
//       }
//
//     };
//     this.draw = function(x, y) {
//       // get the row and col of the frame
//       var row = Math.floor(currentFrame / framesPerRow);
//       var col = Math.floor(currentFrame % framesPerRow);
//
//       ctx.drawImage(
//         image,
//         col * frameWidth, row * frameHeight,
//         frameWidth, frameHeight,
//         x, y,
//         frameWidth, frameHeight);
//       };
//       // calculate the number of frames in a row after the image loads
//       var self = this;
//       image.onload = function() {
//         framesPerRow = Math.floor(image.width / frameWidth);
//       };
//
//       image.src = "assets/images/explode.png";
//     }
//     //============================creating scrolling background-co
//
//   //--------------------------------------------sprite attempt
//   function SpriteSheet() {
//     var path = 'assets/images/asteroid1.png';
//     var frameWidth = 71;
//     var frameHeight = 71;
//     var frameSpeed = 15;
//     var endFrame = 19;
//     var image = new Image();
//     var framesPerRow;
//     var currentFrame = 0;  // the current frame to draw
//     var counter = 0;
//     this.x = Math.random() * 480;
//     this.y = ((Math.random() * -100) -100);
//     // this.createStone = function(){
//     //    ctx.drawImage(sprite, sx, sy, swidth, sheight, this.x, this.y, 60, 60);
//     //  };
//     this.update = function() {
//       highscore = localStorage.getItem('highscore') || 0;
//      if(highscore !== null){
//          if (score > highscore) {
//              localStorage.setItem("highscore", score);
//          }
//      }
//      else{
//          localStorage.setItem("highscore", score);
//      }
//       document.getElementById("counter").innerHTML = "lives " + (3 - count);
//       document.getElementById("score").innerHTML = "score " + (score);
//       document.getElementById("highscore").innerHTML = "high " + (highscore);
//       if(this.y >= 480){
//         this.y = ((Math.random() * -100) -100);
//         this.x = Math.random() * 450;
//         if(!gameover){
//           count += 1;
//           if(count >= 3){
//
//
//             gameover = true;
//             pause = true;
//             let c = document.querySelector(".modal");
//             c.innerHTML = '<div id="lost">You Lost<br> press R to restart</div>';
//                          //
//         }
//
//         }else {
//           if(!pause && !gameover){
//             this.y += 1 + score / 200;
//           }
//         }
//
//       }else if(!pause && !gameover){
//         this.y += 1 + score / 200;
//       }
//
//       // update to the next frame if it is time
//       if (counter == (frameSpeed - 1))
//       currentFrame = (currentFrame + 1) % endFrame;
//
//       // update the counter
//       counter = (counter + 1) % frameSpeed;
//
//     };
//     this.draw = function(x, y) {
//       // get the row and col of the frame
//       var row = Math.floor(currentFrame / framesPerRow);
//       var col = Math.floor(currentFrame % framesPerRow);
//
//       ctx.drawImage(
//         image,
//         col * frameWidth, row * frameHeight,
//         frameWidth, frameHeight,
//         x, y,
//         frameWidth, frameHeight);
//       };
//       // calculate the number of frames in a row after the image loads
//       var self = this;
//       image.onload = function() {
//         framesPerRow = Math.floor(image.width / frameWidth);
//       };
//
//       image.src = "assets/images/asteroid1.png";
//     }
// function bg(){
//   var background = new Image();
//   background.src = 'assets/images/scrollbg.png';
// }
//   // new ExplosionSheet();
// function animate() {
//
//    requestAnimationFrame( animate );
//    ctx.clearRect(0, 0, 500, 500);
//     var totalSeconds = 0;
//
//   fall();
//   for (var i = 0; i < rockArray.length; i++) {
//     rockArray[i].update();
//     rockArray[i].draw(rockArray[i].x, rockArray[i].y);
//   }
//   for (var i = 0; i < explosionArray.length; i++) {
//     explosionArray[i].update();
//     const x = explosionArray[i].x - 25;
//     const y = explosionArray[i].y - 25;
//     explosionArray[i].draw(x, y);
//   }
//
// }
// //---------------------------next atttempt
// animate();
//   //---------------------
// });
// function getMousePos(canv, evt) {
//         var rect = canv.getBoundingClientRect();
//         return {
//           x: evt.clientX - rect.left,
//           y: evt.clientY - rect.top
//         };
//       }
