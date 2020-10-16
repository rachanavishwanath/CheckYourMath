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
var COLORS = {
  0: "#ccff00",
  1: "#ff0000",
  2: "#ff8000",
  3: "#ffff00",
  4: "#00ff80",
  5: "#fbaed2",
  6: "#ff5349",
  7: "#00ffcc",
  8: "#00f2ff",
  9: "#ff0073"
};

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
    this.fillStyle = "black";
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
    this.checkDoubleDigitAnswer = this.checkDoubleDigitAnswer.bind(this);
    this.selectUnselectNumber = this.selectUnselectNumber.bind(this);
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
      document.getElementById("endGame").classList.add("hidden");
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
      var concatString;

      for (var i = 0; i < this.userClicks.length; i++) {
        var num = this.userClicks[i];
        arr = num.split('_');
        console.log(num);
        console.log(arr);

        if (parseInt(arr[2]) === that.rightAnswer) {
          if (parseInt(arr[1]) === 0) {
            delete that.bottomline[arr[0]];
            that.newEquation = that.equation.createEquation();
            that.rightAnswer = that.equation.rightAnswer(that.newEquation);
            that.userClicks = [];
            break;
          } else {
            that.fallingNumbers[arr[0]].splice(i - 1, 1);
            that.newEquation = that.equation.createEquation();
            that.rightAnswer = that.equation.rightAnswer(that.newEquation);
            that.userClicks = [];
            break;
          }
        } else {
          concatString += arr[2];
          this.checkDoubleDigitAnswer(concatString);
        }
      }
    }
  }, {
    key: "checkDoubleDigitAnswer",
    value: function checkDoubleDigitAnswer(concatString) {
      if (parseInt(concatString) === this.rightAnswer) {}
    }
  }, {
    key: "registerClick",
    value: function registerClick(e) {
      var clickedPos = {
        x: e.clientX - this.offsetX,
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
            console.log('registerClick Bottom');
            this.selectUnselectNumber(num);
            concatString = "".concat(num.pos[0], "_0_").concat(num.text);
            this.userClicks.push(concatString);
            alert(num.text);
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
            console.log("registerClick falling");
            this.selectUnselectNumber(num);
            concatString = "".concat(num.pos[0], "_").concat(_i + 1, "_").concat(num.text);
            this.userClicks.push(concatString);
            alert(num.text);
            break;
          }
        }
      }

      this.removeRightAnswerSquare();
    }
  }, {
    key: "selectUnselectNumber",
    value: function selectUnselectNumber(num) {
      if (num.click === true) {
        num.click = false;
      } else {
        num.click = true;
      }
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
        num = i;
        var newNumber = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"]([posAtX, 474], num);
        var color = newNumber.click ? "darkgrey" : "black";
        newNumber.drawSquare(this.context, color);
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
        var color = sq.click ? "darkgrey" : "black";
        sq.drawSquare(_this2.context, color);
      });
      Object.values(this.fallingNumbers).forEach(function (num) {
        for (var i = 0; i < num.length; i++) {
          var color2 = num.click ? "darkgrey" : "black";
          num[i].drawSquare(_this2.context, color2);
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
      var color = fallingNum.click ? "darkgrey" : "black";
      fallingNum.drawSquare(this.context, color);
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
    value: function drawSquare(ctx, color) {
      debugger;
      ctx.strokeStyle = "red";
      ctx.strokeRect(this.pos[0], this.pos[1], 80, 80);
      ctx.lineWidth = 2;
      ctx.fillStyle = color;
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



var Util = __webpack_require__(/*! ./util */ "./src/scripts/util.js"); // const COLORS = {
//   0: "#CCFF00",
//   1: "#ff0000",
//   2: "#ff8000",
//   3: "#ffff00",
//   4: "#00ff80",
//   5: "#FBAED2",
//   6: "#FF5349",
//   7: "#00ffcc",
//   8: "#00f2ff",
//   9: "#ff0073",
// };


var COLORS = {
  0: "#ccff00",
  1: "#ff0000",
  2: "#ff8000",
  3: "#ffff00",
  4: "#00ff80",
  5: "#fbaed2",
  6: "#ff5349",
  7: "#00ffcc",
  8: "#00f2ff",
  9: "#ff0073"
};

var Numbers = function Numbers(pos, text) {
  _classCallCheck(this, Numbers);

  // number inside square
  this.text = text;
  this.click = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwiY3JlYXRlRXF1YXRpb24iLCJiaW5kIiwicmlnaHRBbnN3ZXIiLCJuZXdFcXVhdGlvbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJsZW5ndGgiLCJyb3VuZCIsInN0YXJ0TnVtMSIsInN0YXJ0TnVtMiIsIm1hdGhPcCIsIm51bTEiLCJzaHVmZmxlZCIsInNsaWNlIiwibnVtMiIsInBhcnNlSW50IiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJDT0xPUlMiLCJib3R0b21saW5lIiwiZmFsbGluZ051bWJlcnMiLCJmcmFtZUgiLCJ1c2VyQ2xpY2tzIiwicGxheWluZyIsImZyYW1lSWQiLCJmaWxsU3R5bGUiLCJJbml0aWFsTGF5ZXIiLCJmYWxsaW5nTnVtYmVyIiwiZHJhd0VxdWF0aW9uIiwiZHJhd051bWJlcnMiLCJhbmltYXRlIiwiZGV0ZWN0Q29sbGlzaW9uIiwicmVtb3ZlUmlnaHRBbnN3ZXJTcXVhcmUiLCJrZXlIYW5kbGVyIiwiZ2FtZU92ZXIiLCJjaGVja0RvdWJsZURpZ2l0QW5zd2VyIiwic2VsZWN0VW5zZWxlY3ROdW1iZXIiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsInJlc3RhcnRHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJyZW1vdmUiLCJ0aGF0IiwiY29uY2F0U3RyaW5nIiwiaSIsIm51bSIsInNwbGljZSIsImFicyIsImN1cnJlbnRDb2wiLCJjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrIiwiZk51bWJlcnMiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJiTnVtYmVycyIsImhhc093blByb3BlcnR5IiwicG9zIiwidGV4dCIsInB1c2giLCJjbGljayIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImNvbG9yIiwiZHJhd1NxdWFyZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3EiLCJ2YWx1ZXMiLCJjb2xvcjIiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmFsbGluZ051bSIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIiwiY3VycmVudENvbHVtbiIsIm90aGVyTnVtYmVyIiwiY2hlY2tDb2xsaXNpb25XaXRoIiwiaiIsImZvdW5kQm90dG9tTGluZSIsIm1vdmUiLCJHYW1lVmlldyIsImN0eCIsInN0YXJ0IiwiZHJhdyIsInNldEludGVydmFsIiwiTW92aW5nT2JqZWN0Iiwib2JqIiwidmVsIiwic3Ryb2tlUmVjdCIsImxpbmVXaWR0aCIsImZpbGxSZWN0IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJzY2FsZSIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1dG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFB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Y3JDLE9BQWQsRUFBdUIwQixzREFBdkIsRTs7Ozs7Ozs7Ozs7QUMxQ0EsSUFBTXpJLElBQUksR0FBRztBQUNUa0osV0FEUyxxQkFDQ3hHLE1BREQsRUFDUztBQUNkLFdBQU8xQyxJQUFJLENBQUNxSixLQUFMLENBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFYLEVBQW1CM0csTUFBbkIsQ0FBUDtBQUNILEdBSFE7QUFJVDJHLE9BSlMsaUJBSUhDLEdBSkcsRUFJRUMsQ0FKRixFQUlLO0FBQ1YsV0FBTyxDQUFDLENBQUQsRUFBSUQsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFRQyxDQUFaLENBQVA7QUFDSCxHQU5RO0FBT1RDLFFBUFMsa0JBT0YvRCxHQVBFLEVBT0c7QUFDUixXQUFPcEQsSUFBSSxDQUFDTSxLQUFMLENBQVdOLElBQUksQ0FBQ0MsTUFBTCxLQUFnQm1ELEdBQTNCLENBQVA7QUFDSDtBQVRRLENBQWI7O0FBWUF6RixJQUFJLENBQUNvSixRQUFMLEdBQWdCLFVBQVNLLFVBQVQsRUFBcUJDLFdBQXJCLEVBQWtDO0FBQzlDLFdBQVNDLFNBQVQsR0FBcUIsQ0FBRTs7QUFBQTtBQUN2QkEsV0FBUyxDQUFDQyxTQUFWLEdBQXNCRixXQUFXLENBQUNFLFNBQWxDO0FBQ0FILFlBQVUsQ0FBQ0csU0FBWCxHQUF1QixJQUFJRCxTQUFKLEVBQXZCO0FBQ0FGLFlBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsVUFBckIsR0FBa0NKLFVBQWxDO0FBQ0gsQ0FMRDs7QUFPQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0osSUFBakIsQzs7Ozs7Ozs7Ozs7QUNuQkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9zY3JpcHRzL251bWJlcnMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuXG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi9zY3JpcHRzL3V0aWwnKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJDbGljayhlLCBjbGlja2VkUG9zLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gIGNsaWNrZWRQb3MgPSB7XG4gICAgeDogZS5jbGllbnRYIC0gb2Zmc2V0WCxcbiAgICB5OiBlLmNsaWVudFkgLSBvZmZzZXRZLFxuICB9O1xuICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gIHJldHVybiBjbGlja2VkUG9zO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBvZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7XG4gIGNvbnN0IG9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICBsZXQgY2xpY2tlZFBvcztcbiAgY29uc29sZS5sb2coJ0l0cyB3b3JraW5nJyk7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMuY3JlYXRlRXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLnJpZ2h0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKCkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMSkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICByZXR1cm4gZXF1YXRpb247XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI2NjZmYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjZmJhZWQyXCIsXG4gIDY6IFwiI2ZmNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgICAgICB0aGlzLm9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcXVhdGlvbiA9IG5ldyBFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuXG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbiA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlUmlnaHRBbnN3ZXJTcXVhcmUgPSB0aGlzLnJlbW92ZVJpZ2h0QW5zd2VyU3F1YXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlciA9IHRoaXMua2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIgPSB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlciA9IHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIuYmluZCh0aGlzKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT5cbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDbGljayhlKVxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT5cbiAgICAgICAgICAgIHRoaXMua2V5SGFuZGxlcihlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGtleUhhbmRsZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0YXJ0R2FtZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLkluaXRpYWxMYXllcigpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVJZCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IFxuICAgIH1cbiAgICBcbiAgICByZW1vdmVSaWdodEFuc3dlclNxdWFyZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yaWdodEFuc3dlcik7XG4gICAgICAgIGxldCB0aGF0ICA9IHRoaXM7XG4gICAgICAgIGxldCBhcnI7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSB0aGlzLnVzZXJDbGlja3NbaV07XG4gICAgICAgICAgICBhcnIgPSBudW0uc3BsaXQoJ18nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG51bSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGFyclsyXSkgPT09IHRoYXQucmlnaHRBbnN3ZXIpe1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChhcnJbMV0pID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGF0LmJvdHRvbWxpbmVbYXJyWzBdXTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5uZXdFcXVhdGlvbiA9IHRoYXQuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yaWdodEFuc3dlciA9IHRoYXQuZXF1YXRpb24ucmlnaHRBbnN3ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5ld0VxdWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmZhbGxpbmdOdW1iZXJzW2FyclswXV0uc3BsaWNlKGkgLSAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5uZXdFcXVhdGlvbiA9IHRoYXQuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yaWdodEFuc3dlciA9IHRoYXQuZXF1YXRpb24ucmlnaHRBbnN3ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5ld0VxdWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyArPSBhcnJbMl07XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyKGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGlmIChwYXJzZUludChjb25jYXRTdHJpbmcpID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgeTogTWF0aC5hYnMoZS5jbGllbnRZIC0gdGhpcy5vZmZzZXRZKSAtIDI1LFxuICAgICAgICB9O1xuICAgICAgICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2wgPSB0aGlzLmN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soY2xpY2tlZFBvcy54KTtcbiAgICAgICAgbGV0IGZOdW1iZXJzO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nO1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgbGVmdDtcbiAgICAgICAgbGV0IHJpZ2h0O1xuICAgICAgICBsZXQgdG9wO1xuICAgICAgICBsZXQgYm90dG9tO1xuICAgICAgICBsZXQgYk51bWJlcnM7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgICAgICAgIGJOdW1iZXJzID0gW3RoaXMuYm90dG9tbGluZVtjdXJyZW50Q29sXV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG51bSA9IGJOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICBsZWZ0ID0gbnVtLnBvc1swXTtcbiAgICAgICAgICAgICAgcmlnaHQgPSBudW0ucG9zWzBdICsgODA7XG4gICAgICAgICAgICAgIGJvdHRvbSA9IG51bS5wb3NbMV07XG4gICAgICAgICAgICAgIHRvcCA9IG51bS5wb3NbMV0gLSA4MDtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueCA+IGxlZnQgJiZcbiAgICAgICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA+IHRvcCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA8IGJvdHRvbVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyQ2xpY2sgQm90dG9tJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlcihudW0pO1xuICAgICAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgPSBgJHtudW0ucG9zWzBdfV8wXyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnB1c2goY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQobnVtLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBmTnVtYmVycyA9IHRoaXMuZmFsbGluZ051bWJlcnNbY3VycmVudENvbF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG51bSA9IGZOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICBsZWZ0ID0gbnVtLnBvc1swXTtcbiAgICAgICAgICAgICAgcmlnaHQgPSBudW0ucG9zWzBdICsgODA7XG4gICAgICAgICAgICAgIGJvdHRvbSA9IG51bS5wb3NbMV07XG4gICAgICAgICAgICAgIHRvcCA9IG51bS5wb3NbMV0gLSA4MDtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueCA+IGxlZnQgJiZcbiAgICAgICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA+IHRvcCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA8IGJvdHRvbVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlckNsaWNrIGZhbGxpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIobnVtKTtcbiAgICAgICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nID0gYCR7bnVtLnBvc1swXX1fJHtpKzF9XyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnB1c2goY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQobnVtLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlUmlnaHRBbnN3ZXJTcXVhcmUoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RVbnNlbGVjdE51bWJlcihudW0pe1xuICAgICAgICBpZiAobnVtLmNsaWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICBudW0uY2xpY2sgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bS5jbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgICAgIGlmICh4T2ZDbGlja2VkID4geCAmJiB4T2ZDbGlja2VkIDwgeCArIDgwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGhpcy5uZXdFcXVhdGlvbiwgNDAwLCAxNSk7XG4gICAgfVxuXG4gICAgSW5pdGlhbExheWVyKCkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IGk7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzRdLCBudW0pO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXdOdW1iZXIuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBuZXdOdW1iZXIuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tbGluZVtwb3NBdFhdID0gbmV3TnVtYmVyO1xuICAgICAgICAgICAgcG9zQXRYICs9IDgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd051bWJlcnMoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuYm90dG9tbGluZSkuZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcSA9IHRoaXMuYm90dG9tbGluZVtwb3NdO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzcS5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIHNxLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcjIgPSBudW0uY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgbnVtW2ldLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgICAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgICAgICBjb25zdCB5ID0gMjU7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgZmFsbGluZ051bWJlcigpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgICAgICBjb25zdCBjb2xvciA9IGZhbGxpbmdOdW0uY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgIGZhbGxpbmdOdW0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dIHx8IFtdO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ucHVzaChmYWxsaW5nTnVtKTtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVIICs9IDE7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUggPiAyNTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd051bWJlcnMoKTtcblxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKHBvcywgY3VycmVudEZhbGxpbmdQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dO1xuICAgICAgICBsZXQgb3RoZXJOdW1iZXI7XG4gICAgICAgIGlmIChjdXJyZW50RmFsbGluZ1Bvc2l0aW9uICE9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbl07XG4gICAgICAgICAgICBvdGhlck51bWJlciA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuIG51bS5jaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIGxldCBudW1iZXJzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0ZWN0Q29sbGlzaW9uKG51bWJlcnNbaV1bal0ucG9zLCBqKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvdHRvbUxpbmUgPSB0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5wb3NbMF0sXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLm1vdmUoZm91bmRCb3R0b21MaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbldpdGggPSB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoY3R4LCBjb2xvcikge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0gKyA0MCwgdGhpcy5wb3NbMV0gKyA0MCk7XG4gICAgfVxuXG4gICAgbW92ZShmb3VuZEJvdHRvbUxpbmUpIHtcbiAgICAgICAgaWYgKGZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSAzOTMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKCFmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gNDczKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvc1sxXSArPSAwLjM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zWzFdID49IG90aGVyTnVtYmVyLnBvc1sxXSAtIDgwO1xuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuLy8gY29uc3QgQ09MT1JTID0ge1xuLy8gICAwOiBcIiNDQ0ZGMDBcIixcbi8vICAgMTogXCIjZmYwMDAwXCIsXG4vLyAgIDI6IFwiI2ZmODAwMFwiLFxuLy8gICAzOiBcIiNmZmZmMDBcIixcbi8vICAgNDogXCIjMDBmZjgwXCIsXG4vLyAgIDU6IFwiI0ZCQUVEMlwiLFxuLy8gICA2OiBcIiNGRjUzNDlcIixcbi8vICAgNzogXCIjMDBmZmNjXCIsXG4vLyAgIDg6IFwiIzAwZjJmZlwiLFxuLy8gICA5OiBcIiNmZjAwNzNcIixcbi8vIH07XG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgMDogXCIjY2NmZjAwXCIsXG4gIDE6IFwiI2ZmMDAwMFwiLFxuICAyOiBcIiNmZjgwMDBcIixcbiAgMzogXCIjZmZmZjAwXCIsXG4gIDQ6IFwiIzAwZmY4MFwiLFxuICA1OiBcIiNmYmFlZDJcIixcbiAgNjogXCIjZmY1MzQ5XCIsXG4gIDc6IFwiIzAwZmZjY1wiLFxuICA4OiBcIiMwMGYyZmZcIixcbiAgOTogXCIjZmYwMDczXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVycyB7XG4gICAgY29uc3RydWN0b3IocG9zLCB0ZXh0KSB7XG4gICAgICAgIC8vIG51bWJlciBpbnNpZGUgc3F1YXJlXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuY2xpY2sgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgIHZlbDogVXRpbC5yYW5kb21WZWMoMiksXG4gICAgICAgICAgY29sb3I6IENPTE9SU1t0aGlzLnRleHRdLFxuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgfTtcbiAgICAgICAgTW92aW5nT2JqZWN0LmNhbGwodGhpcywgb2JqKTtcbiAgICB9XG59O1xuXG5VdGlsLmluaGVyaXRzKE51bWJlcnMsIE1vdmluZ09iamVjdCk7IiwiY29uc3QgVXRpbCA9IHtcbiAgICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBVdGlsLnNjYWxlKFswLCA1XSwgbGVuZ3RoKTtcbiAgICB9LFxuICAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgICByZXR1cm4gWzAsIHZlY1sxXSogbV1cbiAgICB9LFxuICAgIG51bWJlcihudW0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG51bSlcbiAgICB9XG59XG5cblV0aWwuaW5oZXJpdHMgPSBmdW5jdGlvbihjaGlsZENsYXNzLCBwYXJlbnRDbGFzcykge1xuICAgIGZ1bmN0aW9uIFN1cnJvZ2F0ZSgpIHt9O1xuICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnRDbGFzcy5wcm90b3R5cGU7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlKCk7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUuY29uc3RydXRvciA9IGNoaWxkQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9