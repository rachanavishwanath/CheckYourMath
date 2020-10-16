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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/moving_object */ "./src/scripts/moving_object.js");
/* harmony import */ var _scripts_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/numbers */ "./src/scripts/numbers.js");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/game_view */ "./src/scripts/game_view.js");






var Util = __webpack_require__(/*! ./scripts/util */ "./src/scripts/util.js");

function registerClick(e, clickedPos, offsetX, offsetY) {
  clickedPos = {
    x: e.clientX - offsetX,
    y: e.clientY - offsetY
  };
  alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));
  return clickedPos;
}

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var offsetX = canvas.offsetLeft;
  var offsetY = canvas.offsetTop;
  var clickedPos;
  console.log('Its working');
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);
});

/***/ }),

/***/ "./src/scripts/equation.js":
/*!*********************************!*\
  !*** ./src/scripts/equation.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Equation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MATHOP = ['+', '-', '*'];
var NUMBERS = '0123456789';

var Equation = /*#__PURE__*/function () {
  function Equation(numbers) {
    _classCallCheck(this, Equation);

    this.numbers = numbers;
    this.createEquation = this.createEquation.bind(this);
    this.rightAnswer = this.rightAnswer.bind(this);
    this.newEquation = this.createEquation();
  }

  _createClass(Equation, [{
    key: "shuffled",
    value: function shuffled(unshuffled) {
      return unshuffled.split("").map(function (a) {
        return {
          sort: Math.random(),
          value: a
        };
      }).sort(function (a, b) {
        return a.sort - b.sort;
      }).map(function (a) {
        return a.value;
      }).join("");
    }
  }, {
    key: "createEquation",
    value: function createEquation() {
      var length = Math.round(Math.random() * 10 % 1) + 1;
      var startNum1 = Math.round(Math.random() * 10 % 4) + 1;
      var startNum2 = Math.round(Math.random() * 10 % 4) + 1;
      var mathOp = MATHOP[Math.round(Math.random() * 10 % 2)];
      var num1 = this.shuffled(NUMBERS).slice(startNum1, startNum1 + length);
      var num2 = this.shuffled(NUMBERS).slice(startNum2, startNum2 + length);

      if (parseInt(num1) < parseInt(num2) && mathOp === '-') {
        var temp = num1;
        num1 = num2;
        num2 = temp;
      }

      var equation = "What is ".concat(num1, " ").concat(mathOp, " ").concat(num2, "?");
      return equation;
    }
  }, {
    key: "rightAnswer",
    value: function rightAnswer(equation) {
      var arr = equation.split(' ');
      var num1 = parseInt(arr[2]);
      var num2 = parseInt(arr[4]);

      switch (arr[3]) {
        case '+':
          return num1 + num2;

        case '-':
          return num1 - num2;

        case '*':
          return num1 * num2;
      }
    }
  }]);

  return Equation;
}();



/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./src/scripts/moving_object.js");
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numbers */ "./src/scripts/numbers.js");
/* harmony import */ var _equation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equation */ "./src/scripts/equation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Util = __webpack_require__(/*! ./util */ "./src/scripts/util.js");

var NumColumns = 10;
var DIM_X = [0, 80, 160, 240, 320, 400, 480, 560, 640, 720];
var WIDTH = 800;
var HEIGHT = 600;
var DIM_Y = 600;

var Game = /*#__PURE__*/function () {
  function Game(canvas) {
    var _this = this;

    _classCallCheck(this, Game);

    this.context = canvas.getContext("2d");
    this.offsetX = canvas.offsetLeft;
    this.offsetY = canvas.offsetTop;
    this.bottomline = {};
    this.fallingNumbers = {};
    this.frameH = 0;
    this.userClicks = [];
    this.playing = false;
    this.frameId = null;
    this.equation = new _equation__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.newEquation = null;
    this.rightAnswer = null;
    this.InitialLayer = this.InitialLayer.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.fallingNumber = this.fallingNumber.bind(this);
    this.drawEquation = this.drawEquation.bind(this);
    this.drawNumbers = this.drawNumbers.bind(this);
    this.animate = this.animate.bind(this);
    this.detectCollision = this.detectCollision.bind(this);
    this.removeRightAnswerSquare = this.removeRightAnswerSquare.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    this.gameOver = this.gameOver.bind(this);
    canvas.addEventListener("mousedown", function (e) {
      return _this.registerClick(e);
    });
    document.addEventListener("keydown", function (e) {
      return _this.keyHandler(e);
    });
  }

  _createClass(Game, [{
    key: "keyHandler",
    value: function keyHandler(e) {
      e.preventDefault();

      if (e.key == "Enter") {
        this.playing = true;
        this.restartGame();
      }
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
      document.getElementById("startGame").classList.add("hidden");
      document.getElementById("endGame").classList.add("hidden"); // const equation = new Equation();

      this.newEquation = this.equation.createEquation();
      this.rightAnswer = this.equation.rightAnswer(this.newEquation);
      this.InitialLayer();
      this.fallingNumber();
      this.animate();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      if (this.frameId) {
        cancelAnimationFrame(this.frameId);
      }

      this.playing = false;
      this.context.clearRect(0, 0, WIDTH, HEIGHT);
      document.getElementById("endGame").classList.remove("hidden");
    }
  }, {
    key: "removeRightAnswerSquare",
    value: function removeRightAnswerSquare() {
      console.log(this.rightAnswer);
      var that = this;
      var arr;

      for (var i = 0; i < this.userClicks.length; i++) {
        var num = this.userClicks[i];
        arr = num.split('_');
        console.log(num);
        console.log(arr);

        if (parseInt(arr[2]) === that.rightAnswer) {
          if (parseInt(arr[1]) === 0) {
            console.log(arr[1]);
            delete that.bottomline[arr[0]];
            that.newEquation = that.equation.createEquation();
            that.rightAnswer = that.equation.rightAnswer(that.newEquation);
            that.userClicks = [];
            break;
          } else {
            console.log(arr[1]);
            that.fallingNumbers[arr[0]].splice(i - 1, 1);
            that.newEquation = that.equation.createEquation();
            that.rightAnswer = that.equation.rightAnswer(that.newEquation);
            that.userClicks = [];
            break;
          }
        }
      } // if (that.rightAnswer < 10) {
      //     debugger;
      //     if (num.text === this.rightAnswer && num.pos[1] === 474) {
      //         debugger;
      //         delete this.bottomline[num.pos[0]];
      //         this.userClicks = [];
      //         that.newEquation = that.equation.createEquation();
      //         console.log(this.bottomline);
      //         console.log(`right answer`);
      //     } else {
      //         this.fallingNumbers[currentCol];
      //     }
      // }

    }
  }, {
    key: "registerClick",
    value: function registerClick(e) {
      console.log(this.offsetX);
      console.log(this.offsetY);
      debugger;
      var clickedPos = {
        x: e.clientX - this.offsetX,
        // y: e.clientY
        y: Math.abs(e.clientY - this.offsetY) - 25
      };
      alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));
      var currentCol = this.currentColumnForUserClick(clickedPos.x);
      var fNumbers;
      var concatString;
      var num;
      var left;
      var right;
      var top;
      var bottom;
      var bNumbers;

      if (this.bottomline.hasOwnProperty(currentCol)) {
        bNumbers = [this.bottomline[currentCol]];

        for (var i = 0; i < bNumbers.length; i++) {
          num = bNumbers[i];
          left = num.pos[0];
          right = num.pos[0] + 80;
          bottom = num.pos[1];
          top = num.pos[1] - 80;

          if (clickedPos.x > left && clickedPos.x < right && clickedPos.y > top && clickedPos.y < bottom) {
            console.log(this.userClicks);
            concatString = "".concat(num.pos[0], "_0_").concat(num.text);
            this.userClicks.push(concatString);
            alert(num.text);
            console.log(this.userClicks);
            break;
          }
        }
      }

      if (this.fallingNumbers.hasOwnProperty(currentCol)) {
        fNumbers = this.fallingNumbers[currentCol];

        for (var _i = 0; _i < fNumbers.length; _i++) {
          num = fNumbers[_i];
          left = num.pos[0];
          right = num.pos[0] + 80;
          bottom = num.pos[1];
          top = num.pos[1] - 80;

          if (clickedPos.x > left && clickedPos.x < right && clickedPos.y > top && clickedPos.y < bottom) {
            console.log(this.userClicks);
            concatString = "".concat(num.pos[0], "_").concat(_i + 1, "_").concat(num.text);
            this.userClicks.push(concatString);
            alert(num.text);
            console.log(this.userClicks);
            break;
          }
        }
      } // debugger;
      // for (let i = 0; i < bNumbers.length; i++) {
      //     num = bNumbers[i];
      //     left = num.pos[0];
      //     right = num.pos[0] + 80;
      //     bottom = num.pos[1];
      //     top = num.pos[1] - 80;
      //   if (
      //     clickedPos.x > left &&
      //     clickedPos.x < right &&
      //     clickedPos.y > top &&
      //     clickedPos.y < bottom
      //   ) {
      //     console.log(this.userClicks);
      //     concatString = `${num.pos[0]}_0_${num.text}`;
      //     this.userClicks.push(num);
      //     alert(num.text);
      //     console.log(this.userClicks);
      //     break;
      //   }
      // }


      this.removeRightAnswerSquare();
    }
  }, {
    key: "currentColumnForUserClick",
    value: function currentColumnForUserClick(xOfClicked) {
      var i = 0;
      var x = 0;

      while (i < 10) {
        if (xOfClicked > x && xOfClicked < x + 80) {
          return x;
        }

        x += 80;
        i += 1;
      }
    }
  }, {
    key: "drawEquation",
    value: function drawEquation() {
      this.context.strokeStyle = "black";
      this.context.font = "20px Verdana";
      this.context.strokeText(this.newEquation, 400, 15);
    }
  }, {
    key: "InitialLayer",
    value: function InitialLayer() {
      var num;
      var posAtX = 0;

      for (var i = 0; i < NumColumns; i++) {
        num = Math.round(Math.random() * 10) % 10;
        var newNumber = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"]([posAtX, 474], num);
        newNumber.drawSquare(this.context);
        this.bottomline[posAtX] = newNumber;
        posAtX += 80;
      }
    }
  }, {
    key: "drawNumbers",
    value: function drawNumbers() {
      var _this2 = this;

      Object.keys(this.bottomline).forEach(function (pos) {
        var sq = _this2.bottomline[pos];
        sq.drawSquare(_this2.context);
      });
      Object.values(this.fallingNumbers).forEach(function (num) {
        for (var i = 0; i < num.length; i++) {
          num[i].drawSquare(_this2.context);
        }
      });
    }
  }, {
    key: "randomPositionforFallingNumbers",
    value: function randomPositionforFallingNumbers() {
      var x = DIM_X[Math.round(Math.random() * 10) % 10];
      var y = 25;
      return [x, y];
    }
  }, {
    key: "fallingNumber",
    value: function fallingNumber() {
      var pos = this.randomPositionforFallingNumbers();
      var num = Math.round(Math.random() * 10) % 10;
      var fallingNum = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"](pos, num);
      fallingNum.drawSquare(this.context);
      this.fallingNumbers[pos[0]] = this.fallingNumbers[pos[0]] || [];
      this.fallingNumbers[pos[0]].push(fallingNum);

      if (this.fallingNumbers[pos[0]].length === 6) {
        this.gameOver();
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this3 = this;

      if (this.playing === true) {
        this.frameH += 1;

        if (this.frameH > 250) {
          this.fallingNumber();
          this.frameH = 0;
        }

        this.context.clearRect(0, 0, WIDTH, HEIGHT);
        this.drawEquation();
        this.moveObjects();
        this.drawNumbers();

        var callback = function callback() {
          return _this3.animate();
        };

        this.frameId = requestAnimationFrame(callback);
      }
    }
  }, {
    key: "detectCollision",
    value: function detectCollision(pos, currentFallingPosition) {
      var currentColumn = this.fallingNumbers[pos[0]];
      var otherNumber;

      if (currentFallingPosition != 0) {
        var num = currentColumn[currentFallingPosition];
        otherNumber = currentColumn[currentFallingPosition - 1];
        return num.checkCollisionWith(otherNumber);
      }
    }
  }, {
    key: "moveObjects",
    value: function moveObjects() {
      var numbers = Object.values(this.fallingNumbers);

      for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers[i].length; j++) {
          if (!this.detectCollision(numbers[i][j].pos, j)) {
            var foundBottomLine = this.bottomline.hasOwnProperty([numbers[i][j].pos[0]]);
            numbers[i][j].move(foundBottomLine);
          }
        }
      }
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameView; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GameView = /*#__PURE__*/function () {
  function GameView(ctx) {
    _classCallCheck(this, GameView);

    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.ctx = ctx;
    this.start = this.start.bind(this);
    this.animate = this.animate.bind(this);
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      var that = this;

      var callback = function callback() {
        that.game.moveObjects(), that.game.draw(that.ctx);
      };

      setInterval(callback.bind(that), 20);
    }
  }, {
    key: "animate",
    value: function animate() {
      this.game.moveObjects();
      requestAnimationFrame(this.animate);
    }
  }]);

  return GameView;
}();



/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovingObject; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovingObject = /*#__PURE__*/function () {
  function MovingObject(obj) {
    _classCallCheck(this, MovingObject);

    this.pos = obj["pos"];
    this.vel = obj["vel"];
    this.color = obj["color"];
    this.text = obj["text"];
    this.drawSquare = this.drawSquare.bind(this);
    this.move = this.move.bind(this);
    this.checkCollisionWith = this.checkCollisionWith.bind(this);
  }

  _createClass(MovingObject, [{
    key: "drawSquare",
    value: function drawSquare(ctx) {
      ctx.strokeStyle = "red";
      ctx.strokeRect(this.pos[0], this.pos[1], 80, 80);
      ctx.lineWidth = 2;
      ctx.fillStyle = "black";
      ctx.fillRect(this.pos[0], this.pos[1], 80, 80);
      ctx.fillStyle = this.color;
      ctx.font = "40px Georgia";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, this.pos[0] + 40, this.pos[1] + 40);
    }
  }, {
    key: "move",
    value: function move(foundBottomLine) {
      if (foundBottomLine && this.pos[1] >= 393) {
        this.pos[1];
      } else if (!foundBottomLine && this.pos[1] >= 473) {
        this.pos[1];
      } else {
        this.pos[1] += 0.3;
      }
    }
  }, {
    key: "checkCollisionWith",
    value: function checkCollisionWith(otherNumber) {
      return this.pos[1] >= otherNumber.pos[1] - 80;
    }
  }]);

  return MovingObject;
}();



/***/ }),

/***/ "./src/scripts/numbers.js":
/*!********************************!*\
  !*** ./src/scripts/numbers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Numbers; });
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./src/scripts/moving_object.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Util = __webpack_require__(/*! ./util */ "./src/scripts/util.js");

var COLORS = {
  0: "#CCFF00",
  1: "#ff0000",
  2: "#ff8000",
  3: "#ffff00",
  4: "#00ff80",
  5: "#FBAED2",
  6: "#FF5349",
  7: "#00ffcc",
  8: "#00f2ff",
  9: "#ff0073"
};

var Numbers = function Numbers(pos, text) {
  _classCallCheck(this, Numbers);

  // number inside square
  this.text = text;
  var obj = {
    pos: pos,
    vel: Util.randomVec(2),
    color: COLORS[this.text],
    text: this.text
  };
  _moving_object__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, obj);
};


;
Util.inherits(Numbers, _moving_object__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Util = {
  randomVec: function randomVec(length) {
    return Util.scale([0, 5], length);
  },
  scale: function scale(vec, m) {
    return [0, vec[1] * m];
  },
  number: function number(num) {
    return Math.round(Math.random() * num);
  }
};

Util.inherits = function (childClass, parentClass) {
  function Surrogate() {}

  ;
  Surrogate.prototype = parentClass.prototype;
  childClass.prototype = new Surrogate();
  childClass.prototype.construtor = childClass;
};

module.exports = Util;

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwiY3JlYXRlRXF1YXRpb24iLCJiaW5kIiwicmlnaHRBbnN3ZXIiLCJuZXdFcXVhdGlvbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJsZW5ndGgiLCJyb3VuZCIsInN0YXJ0TnVtMSIsInN0YXJ0TnVtMiIsIm1hdGhPcCIsIm51bTEiLCJzaHVmZmxlZCIsInNsaWNlIiwibnVtMiIsInBhcnNlSW50IiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJESU1fWSIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsIkluaXRpYWxMYXllciIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJkZXRlY3RDb2xsaXNpb24iLCJyZW1vdmVSaWdodEFuc3dlclNxdWFyZSIsImtleUhhbmRsZXIiLCJnYW1lT3ZlciIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwicmVzdGFydEdhbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInJlbW92ZSIsInRoYXQiLCJpIiwibnVtIiwic3BsaWNlIiwiYWJzIiwiY3VycmVudENvbCIsImN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2siLCJmTnVtYmVycyIsImNvbmNhdFN0cmluZyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImJOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJwb3MiLCJ0ZXh0IiwicHVzaCIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImRyYXdTcXVhcmUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNxIiwidmFsdWVzIiwicmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycyIsImZhbGxpbmdOdW0iLCJtb3ZlT2JqZWN0cyIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudEZhbGxpbmdQb3NpdGlvbiIsImN1cnJlbnRDb2x1bW4iLCJvdGhlck51bWJlciIsImNoZWNrQ29sbGlzaW9uV2l0aCIsImoiLCJmb3VuZEJvdHRvbUxpbmUiLCJtb3ZlIiwiR2FtZVZpZXciLCJjdHgiLCJzdGFydCIsImRyYXciLCJzZXRJbnRlcnZhbCIsIk1vdmluZ09iamVjdCIsIm9iaiIsInZlbCIsImNvbG9yIiwic3Ryb2tlUmVjdCIsImxpbmVXaWR0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJDT0xPUlMiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJzY2FsZSIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1dG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLENB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QUFDQyxPQUFQLEdBQWlCNUosSUFBakIsQzs7Ozs7Ozs7Ozs7QUNuQkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9zY3JpcHRzL251bWJlcnMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuXG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi9zY3JpcHRzL3V0aWwnKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJDbGljayhlLCBjbGlja2VkUG9zLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gIGNsaWNrZWRQb3MgPSB7XG4gICAgeDogZS5jbGllbnRYIC0gb2Zmc2V0WCxcbiAgICB5OiBlLmNsaWVudFkgLSBvZmZzZXRZLFxuICB9O1xuICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gIHJldHVybiBjbGlja2VkUG9zO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBvZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7XG4gIGNvbnN0IG9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICBsZXQgY2xpY2tlZFBvcztcbiAgY29uc29sZS5sb2coJ0l0cyB3b3JraW5nJyk7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMuY3JlYXRlRXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLnJpZ2h0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKCkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMSkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICByZXR1cm4gZXF1YXRpb247XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5jb25zdCBESU1fWSA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgICAgICB0aGlzLm9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcXVhdGlvbiA9IG5ldyBFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IG51bGw7XG5cblxuICAgICAgICB0aGlzLkluaXRpYWxMYXllciA9IHRoaXMuSW5pdGlhbExheWVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDbGljayA9IHRoaXMucmVnaXN0ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIgPSB0aGlzLmZhbGxpbmdOdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24gPSB0aGlzLmRyYXdFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdOdW1iZXJzID0gdGhpcy5kcmF3TnVtYmVycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZXRlY3RDb2xsaXNpb24gPSB0aGlzLmRldGVjdENvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZVJpZ2h0QW5zd2VyU3F1YXJlID0gdGhpcy5yZW1vdmVSaWdodEFuc3dlclNxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleUhhbmRsZXIgPSB0aGlzLmtleUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT5cbiAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrKGUpXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PlxuICAgICAgICB0aGlzLmtleUhhbmRsZXIoZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBrZXlIYW5kbGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0R2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgLy8gY29uc3QgZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhpcy5uZXdFcXVhdGlvbik7XG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyKCk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBpZiAodGhpcy5mcmFtZUlkKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lSWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTsgXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZVJpZ2h0QW5zd2VyU3F1YXJlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJpZ2h0QW5zd2VyKTtcbiAgICAgICAgbGV0IHRoYXQgID0gdGhpcztcbiAgICAgICAgbGV0IGFycjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHRoaXMudXNlckNsaWNrc1tpXTtcbiAgICAgICAgICAgIGFyciA9IG51bS5zcGxpdCgnXycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobnVtKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoYXJyWzJdKSA9PT0gdGhhdC5yaWdodEFuc3dlcil7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGFyclsxXSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQuYm90dG9tbGluZVthcnJbMF1dO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm5ld0VxdWF0aW9uID0gdGhhdC5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnJpZ2h0QW5zd2VyID0gdGhhdC5lcXVhdGlvbi5yaWdodEFuc3dlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubmV3RXF1YXRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyQ2xpY2tzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyclsxXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZmFsbGluZ051bWJlcnNbYXJyWzBdXS5zcGxpY2UoaSAtIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm5ld0VxdWF0aW9uID0gdGhhdC5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnJpZ2h0QW5zd2VyID0gdGhhdC5lcXVhdGlvbi5yaWdodEFuc3dlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubmV3RXF1YXRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyQ2xpY2tzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIGlmICh0aGF0LnJpZ2h0QW5zd2VyIDwgMTApIHtcbiAgICAgICAgLy8gICAgIGRlYnVnZ2VyO1xuICAgICAgICAvLyAgICAgaWYgKG51bS50ZXh0ID09PSB0aGlzLnJpZ2h0QW5zd2VyICYmIG51bS5wb3NbMV0gPT09IDQ3NCkge1xuICAgICAgICAvLyAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAvLyAgICAgICAgIGRlbGV0ZSB0aGlzLmJvdHRvbWxpbmVbbnVtLnBvc1swXV07XG4gICAgICAgIC8vICAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIC8vICAgICAgICAgdGhhdC5uZXdFcXVhdGlvbiA9IHRoYXQuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvdHRvbWxpbmUpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGByaWdodCBhbnN3ZXJgKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1tjdXJyZW50Q29sXTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9mZnNldFgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9mZnNldFkpO1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgLy8geTogZS5jbGllbnRZXG4gICAgICAgICAgICB5OiBNYXRoLmFicyhlLmNsaWVudFkgLSB0aGlzLm9mZnNldFkpIC0gMjUsXG4gICAgICAgIH07XG4gICAgICAgIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgICAgICAgY29uc3QgY3VycmVudENvbCA9IHRoaXMuY3VycmVudENvbHVtbkZvclVzZXJDbGljayhjbGlja2VkUG9zLngpO1xuICAgICAgICBsZXQgZk51bWJlcnM7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmc7XG4gICAgICAgIGxldCBudW07XG4gICAgICAgIGxldCBsZWZ0O1xuICAgICAgICBsZXQgcmlnaHQ7XG4gICAgICAgIGxldCB0b3A7XG4gICAgICAgIGxldCBib3R0b207XG4gICAgICAgIGxldCBiTnVtYmVycztcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tbGluZS5oYXNPd25Qcm9wZXJ0eShjdXJyZW50Q29sKSkge1xuICAgICAgICAgICAgYk51bWJlcnMgPSBbdGhpcy5ib3R0b21saW5lW2N1cnJlbnRDb2xdXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYk51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbnVtID0gYk51bWJlcnNbaV07XG4gICAgICAgICAgICAgIGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICAgICAgICByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgICAgICAgICAgYm90dG9tID0gbnVtLnBvc1sxXTtcbiAgICAgICAgICAgICAgdG9wID0gbnVtLnBvc1sxXSAtIDgwO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY2xpY2tlZFBvcy54ID4gbGVmdCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueCA8IHJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgY2xpY2tlZFBvcy55ID4gdG9wICYmXG4gICAgICAgICAgICAgICAgY2xpY2tlZFBvcy55IDwgYm90dG9tXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckNsaWNrcyk7XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nID0gYCR7bnVtLnBvc1swXX1fMF8ke251bS50ZXh0fWA7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnB1c2goY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICBhbGVydChudW0udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBmTnVtYmVycyA9IHRoaXMuZmFsbGluZ051bWJlcnNbY3VycmVudENvbF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG51bSA9IGZOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICBsZWZ0ID0gbnVtLnBvc1swXTtcbiAgICAgICAgICAgICAgcmlnaHQgPSBudW0ucG9zWzBdICsgODA7XG4gICAgICAgICAgICAgIGJvdHRvbSA9IG51bS5wb3NbMV07XG4gICAgICAgICAgICAgIHRvcCA9IG51bS5wb3NbMV0gLSA4MDtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueCA+IGxlZnQgJiZcbiAgICAgICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA+IHRvcCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA8IGJvdHRvbVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJDbGlja3MpO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XyR7aSsxfV8ke251bS50ZXh0fWA7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnB1c2goY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICBhbGVydChudW0udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGJOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBudW0gPSBiTnVtYmVyc1tpXTtcbiAgICAgICAgLy8gICAgIGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICAvLyAgICAgcmlnaHQgPSBudW0ucG9zWzBdICsgODA7XG4gICAgICAgIC8vICAgICBib3R0b20gPSBudW0ucG9zWzFdO1xuICAgICAgICAvLyAgICAgdG9wID0gbnVtLnBvc1sxXSAtIDgwO1xuICAgICAgICAvLyAgIGlmIChcbiAgICAgICAgLy8gICAgIGNsaWNrZWRQb3MueCA+IGxlZnQgJiZcbiAgICAgICAgLy8gICAgIGNsaWNrZWRQb3MueCA8IHJpZ2h0ICYmXG4gICAgICAgIC8vICAgICBjbGlja2VkUG9zLnkgPiB0b3AgJiZcbiAgICAgICAgLy8gICAgIGNsaWNrZWRQb3MueSA8IGJvdHRvbVxuICAgICAgICAvLyAgICkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgLy8gICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XzBfJHtudW0udGV4dH1gO1xuICAgICAgICAvLyAgICAgdGhpcy51c2VyQ2xpY2tzLnB1c2gobnVtKTtcbiAgICAgICAgLy8gICAgIGFsZXJ0KG51bS50ZXh0KTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckNsaWNrcyk7XG4gICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5yZW1vdmVSaWdodEFuc3dlclNxdWFyZSgpO1xuICAgIH1cblxuICAgIGN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soeE9mQ2xpY2tlZCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCAxMCkge1xuICAgICAgICBpZiAoeE9mQ2xpY2tlZCA+IHggJiYgeE9mQ2xpY2tlZCA8IHggKyA4MCkge1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH1cbiAgICAgICAgeCArPSA4MDtcbiAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGhpcy5uZXdFcXVhdGlvbiwgNDAwLCAxNSk7XG4gICAgfVxuXG4gICAgSW5pdGlhbExheWVyKCkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDc0XSwgbnVtKTtcbiAgICAgICAgICAgIG5ld051bWJlci5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbWxpbmVbcG9zQXRYXSA9IG5ld051bWJlcjtcbiAgICAgICAgICAgIHBvc0F0WCArPSA4MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdOdW1iZXJzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmJvdHRvbWxpbmUpLmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgICBjb25zdCBzcSA9IHRoaXMuYm90dG9tbGluZVtwb3NdO1xuICAgICAgICBzcS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbnVtW2ldLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgICAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgICAgICBjb25zdCB5ID0gMjU7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgZmFsbGluZ051bWJlcigpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgICAgICBmYWxsaW5nTnVtLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dIHx8IFtdO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ucHVzaChmYWxsaW5nTnVtKTtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWluZyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmZyYW1lSCArPSAxO1xuICAgICAgICBpZiAodGhpcy5mcmFtZUggPiAyNTApIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycygpO1xuXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT5cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuXG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3RDb2xsaXNpb24ocG9zLCBjdXJyZW50RmFsbGluZ1Bvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV07XG4gICAgICAgIGxldCBvdGhlck51bWJlcjtcbiAgICAgICAgaWYgKGN1cnJlbnRGYWxsaW5nUG9zaXRpb24gIT0gMCkge1xuICAgICAgICBjb25zdCBudW0gPSBjdXJyZW50Q29sdW1uW2N1cnJlbnRGYWxsaW5nUG9zaXRpb25dO1xuICAgICAgICBvdGhlck51bWJlciA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbiAtIDFdO1xuICAgICAgICByZXR1cm4gbnVtLmNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgbGV0IG51bWJlcnMgPSBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGV0ZWN0Q29sbGlzaW9uKG51bWJlcnNbaV1bal0ucG9zLCBqKSkge1xuICAgICAgICAgICAgY29uc3QgZm91bmRCb3R0b21MaW5lID0gdGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KFtcbiAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLnBvc1swXSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5tb3ZlKGZvdW5kQm90dG9tTGluZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5nYW1lLm1vdmVPYmplY3RzKCksIFxuICAgICAgICAgICAgdGhhdC5nYW1lLmRyYXcodGhhdC5jdHgpO1xuICAgICAgICB9O1xuICAgICAgICBzZXRJbnRlcnZhbChjYWxsYmFjay5iaW5kKHRoYXQpLCAyMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuICAgICAgICB0aGlzLnBvcyA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgdGhpcy52ZWwgPSBvYmpbXCJ2ZWxcIl07XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmpbXCJjb2xvclwiXTtcbiAgICAgICAgdGhpcy50ZXh0ID0gb2JqW1widGV4dFwiXTtcbiAgICAgICAgdGhpcy5kcmF3U3F1YXJlID0gdGhpcy5kcmF3U3F1YXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aCA9IHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLnBvc1swXSArIDQwLCB0aGlzLnBvc1sxXSArIDQwKTtcbiAgICB9XG5cbiAgICBtb3ZlKGZvdW5kQm90dG9tTGluZSkge1xuICAgICAgICBpZiAoZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDM5Mykge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSBpZiAoIWZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSA0NzMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9zWzFdICs9IDAuMztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NbMV0gPj0gb3RoZXJOdW1iZXIucG9zWzFdIC0gODA7XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI0NDRkYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjRkJBRUQyXCIsXG4gIDY6IFwiI0ZGNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=