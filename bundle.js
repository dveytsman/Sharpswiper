/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.localStorage.highscore = window.localStorage.highscore || 0;
document.addEventListener("DOMContentLoaded", function () {
  var game = new _game2.default();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _music = __webpack_require__(4);

var _music2 = _interopRequireDefault(_music);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game() {
  _classCallCheck(this, Game);

  this.score = 0;
  var score = 0;
  var highscore = localStorage.getItem('highscore') || 0;
  var gameover;
  var pause = true;
  var globalTimer = 0;
  var explode = new Image();
  explode.src = "assets/images/explode.png";
  var sx = 0;
  var sy = 0;
  var swidth = 70;
  var sheight = 70;
  var muted = true;
  var music = new _music2.default();
  music.play();
  var mutey = document.querySelector("#mutey");
  mutey.addEventListener("click", function () {
    muted = !muted;
    if (music.music.muted) {
      music.music.currentTime = 0;
      music.music.muted = !music.music.muted;
    } else {
      music.music.muted = !music.music.muted;
    }
  });
  var lefty = document.querySelector("#lefty");
  lefty.addEventListener("click", function () {
    pause = !pause;
  });
  var canvas = document.querySelector("canvas");
  var ctx = canvas.getContext("2d");
  pause = false;
  gameover = true;
  var c = document.querySelector(".modal");
  c.innerHTML = '<div id="start">Welcome to Sharp swiper<br> <br>Move lightsaber across the asteroids to destroy them. Try to destroy them before they hit the ground. Miss 3 and you lose. <br> press R to start game. <br> Have fun</div>';

  ctx.fillStyle = "white";
  var count = 0;

  var rockArray = [];
  var explosionArray = [];

  function fall() {
    if (globalTimer % 300 === 0 && (!gameover || !pause)) {
      if (count >= 3) {}
      rockArray.push(new SpriteSheet());
    }

    ctx.clearRect(0, 0, 500, 500);
    for (var j = 0; j < rockArray.length; j++) {
      rockArray[j].update();
    }
    globalTimer++;
  }
  document.addEventListener("keypress", function (e) {
    switch (e.key) {
      case 'r':
        highscore = localStorage.getItem('highscore') || 0;
        if (highscore !== null) {
          if (score > highscore) {

            localStorage.setItem("highscore", score);
          }
        } else {
          localStorage.setItem("highscore", score);
        }
        gameover = false;
        c.innerHTML = '<div></div>';
        rockArray = [];
        rockArray.push(new SpriteSheet());
        pause = false;
        count = 0;

        score = 0;
        break;
      case 'p':
        if (!gameover) {
          pause = !pause;
        }
        break;

      default:
        return;
    }
  });
  var humArray = [];
  document.addEventListener("mousemove", function (e) {
    if (!pause && !gameover) {

      var coords = getMousePos(canvas, e);
      for (var i = 0; i < rockArray.length; i++) {
        if (rockArray[i].y + sheight > coords.y && rockArray[i].y < coords.y) {
          if (rockArray[i].x + swidth > coords.x && rockArray[i].x < coords.x) {
            var a = rockArray[i].x;
            var b = rockArray[i].y;
            var soundy = new Audio("assets/sound/clashy.wav");
            if (!muted) {
              soundy.volume = 0.1;
              soundy.play();
            }

            explosionArray.push(new ExplosionSheet(a, b));
            rockArray[i].y = Math.random() * -100 - 100;
            rockArray[i].x = Math.random() * 400;
            score++;
          } else {
            if (!muted) {
              humArray.push(new Audio("assets/sound/hum.wav"));
              if (humArray.length > 0) {
                humArray[0].play();
              }
            }
          }
        }
      }
    }
  });

  function ExplosionSheet(ex, ey) {
    var path = 'assets/images/explode.png';
    var frameWidth = 128;
    var frameHeight = 128;
    var frameSpeed = 3;
    var endFrame = 15;
    var image = new Image();
    var framesPerRow;
    var currentFrame = 0;
    var counter = 0;
    var firstTime = 0;
    this.x = ex;
    this.y = ey;
    this.update = function () {
      if (firstTime < 44) {
        firstTime++;
        if (counter == frameSpeed - 1) currentFrame = (currentFrame + 1) % endFrame;
        counter = (counter + 1) % frameSpeed;
      }
    };
    this.draw = function (x, y) {
      var row = Math.floor(currentFrame / framesPerRow);
      var col = Math.floor(currentFrame % framesPerRow);

      ctx.drawImage(image, col * frameWidth, row * frameHeight, frameWidth, frameHeight, x, y, frameWidth, frameHeight);
    };
    var self = this;
    image.onload = function () {
      framesPerRow = Math.floor(image.width / frameWidth);
    };

    image.src = "assets/images/explode.png";
  }
  function SpriteSheet() {
    var path = 'assets/images/asteroid1.png';
    var frameWidth = 71;
    var frameHeight = 71;
    var frameSpeed = 15;
    var endFrame = 19;
    var image = new Image();
    var framesPerRow;
    var currentFrame = 0;
    var counter = 0;
    this.x = Math.random() * 480;
    this.y = Math.random() * -100 - 100;
    this.update = function () {
      if (this.y >= 480) {
        this.y = Math.random() * -100 - 100;
        this.x = Math.random() * 450;
        if (!gameover) {
          count += 1;
          if (count >= 3) {
            gameover = true;
            pause = true;
            c = document.querySelector(".modal");
            c.innerHTML = '<div id="lost">You Lost<br> press R to restart</div>';
          }
        } else {
          if (!pause && !gameover) {
            this.y += 1 + score / 200;
          }
        }
      } else if (!pause && !gameover) {
        this.y += 1 + score / 200;
      }
      if (counter == frameSpeed - 1) currentFrame = (currentFrame + 1) % endFrame;
      counter = (counter + 1) % frameSpeed;
    };
    this.draw = function (x, y) {
      var row = Math.floor(currentFrame / framesPerRow);
      var col = Math.floor(currentFrame % framesPerRow);
      ctx.drawImage(image, col * frameWidth, row * frameHeight, frameWidth, frameHeight, x, y, frameWidth, frameHeight);
    };
    image.onload = function () {
      framesPerRow = Math.floor(image.width / frameWidth);
    };
    image.src = "assets/images/asteroid1.png";
  }
  function animate() {
    highscore = localStorage.getItem('highscore') || 0;
    if (highscore !== null) {
      if (score > highscore) {
        localStorage.setItem("highscore", score);
      }
    } else {
      localStorage.setItem("highscore", score);
    }
    document.getElementById("counter").innerHTML = "lives " + (3 - count);
    document.getElementById("scoreboard").innerHTML = "score " + score;
    document.getElementById("highscore").innerHTML = "high " + highscore;
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, 500, 500);
    var totalSeconds = 0;
    fall();
    for (var i = 0; i < rockArray.length; i++) {
      rockArray[i].update();
      rockArray[i].draw(rockArray[i].x, rockArray[i].y);
    }
    for (var i = 0; i < explosionArray.length; i++) {
      explosionArray[i].update();
      var x = explosionArray[i].x - 25;
      var y = explosionArray[i].y - 25;
      explosionArray[i].draw(x, y);
    }
  }
  animate();
  function getMousePos(canv, evt) {
    var rect = canv.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
}

// ===========================================
// OUTSIDE THE CONSTRUCTOR ===================
// ===========================================

;

exports.default = Game;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Music = function () {
  function Music() {
    _classCallCheck(this, Music);

    this.music = new Audio("assets/sound/starwars.mp3");
    this.music.loop = true;
    this.music.volume = .2;
    this.music.muted = true;
  }

  _createClass(Music, [{
    key: "play",
    value: function play() {
      this.music.play();
    }
  }]);

  return Music;
}();

exports.default = Music;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map