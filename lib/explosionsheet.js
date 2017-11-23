// class ExplosionSheet{
//   constructor(ex, ey){
//     const canvas = document.querySelector("canvas");
//     const ctx = canvas.getContext("2d");
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
//       if(firstTime < 44){
//         firstTime++;
//         if (counter == (frameSpeed - 1))
//         currentFrame = (currentFrame + 1) % endFrame;
//         counter = (counter + 1) % frameSpeed;
//       }
//     };
//     this.draw = function(x, y) {
//       var row = Math.floor(currentFrame / framesPerRow);
//       var col = Math.floor(currentFrame % framesPerRow);
//
//       ctx.drawImage(
//         image,
//         col * frameWidth, row * frameHeight,
//         frameWidth, frameHeight,
//         x, y,
//         frameWidth, frameHeight);
//     };
//     var self = this;
//     image.onload = function() {
//       framesPerRow = Math.floor(image.width / frameWidth);
//     };
//     image.src = "assets/images/explode.png";
//   }
// }
// export default ExplosionSheet;
