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
    this.fallSpeed = 0.3;
    this.frequency = 250;
    this.numOfEquationsSolved = 0;
    this.InitialLayer = this.InitialLayer.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.fallingNumber = this.fallingNumber.bind(this);
    this.drawEquation = this.drawEquation.bind(this);
    this.drawNumbers = this.drawNumbers.bind(this);
    this.animate = this.animate.bind(this);
    this.detectCollision = this.detectCollision.bind(this);
    this.rightAnswerCheck = this.rightAnswerCheck.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.checkDoubleDigitAnswer = this.checkDoubleDigitAnswer.bind(this);
    this.selectUnselectNumber = this.selectUnselectNumber.bind(this);
    this.singleDigitAnswer = this.singleDigitAnswer.bind(this);
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
    key: "rightAnswerCheck",
    value: function rightAnswerCheck() {
      console.log(this.rightAnswer);
      var that = this;
      var arr;
      var concatString = "";

      for (var i = 0; i < this.userClicks.length; i++) {
        var num = this.userClicks[i];
        arr = num.split('_');

        if (parseInt(arr[2]) === that.rightAnswer) {
          that.singleDigitAnswer(num);
          that.newEquation = that.equation.createEquation();
          that.rightAnswer = that.equation.rightAnswer(that.newEquation);
          that.fallSpeed += 0.1;
          this.frequency -= 25;
          this.numOfEquationsSolved += 1;
          that.userClicks = [];
        } else {
          concatString += arr[2];

          if (parseInt(concatString) === this.rightAnswer) {
            this.checkDoubleDigitAnswer();
            that.newEquation = that.equation.createEquation();
            that.rightAnswer = that.equation.rightAnswer(that.newEquation);
            that.fallSpeed += 0.1;
            that.userClicks = [];
            that.fallSpeed += 0.1;
            this.frequency -= 25;
            this.numOfEquationsSolved += 1;
          }
        }
      }
    }
  }, {
    key: "singleDigitAnswer",
    value: function singleDigitAnswer(string) {
      var arr = string.split('_');
      var i = parseInt(arr[1]);

      if (i === 0) {
        delete this.bottomline[arr[0]];
      } else {
        this.fallingNumbers[arr[0]].splice(i - 1, 1);
      }
    }
  }, {
    key: "checkDoubleDigitAnswer",
    value: function checkDoubleDigitAnswer() {
      for (var i = 0; i < this.userClicks.length; i++) {
        this.singleDigitAnswer(this.userClicks[i]);
      }
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
            concatString = "".concat(num.pos[0], "_0_").concat(num.text);
            this.userClicks.push(concatString);
            this.selectUnselectNumber(num, concatString);
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
            concatString = "".concat(num.pos[0], "_").concat(_i + 1, "_").concat(num.text);
            this.userClicks.push(concatString);
            this.selectUnselectNumber(num, concatString);
            alert(num.text);
            break;
          }
        }
      }

      console.log(this.userClicks);
      this.rightAnswerCheck();
    }
  }, {
    key: "selectUnselectNumber",
    value: function selectUnselectNumber(num, concatString) {
      if (num.click === true) {
        num.click = false;
        debugger;

        for (var i = 0; i < this.userClicks.length; i++) {
          if (this.userClicks[i] === concatString) {
            this.userClicks.splice(i, 1);
          }
        }
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

        if (this.frameH > this.frequency) {
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
            numbers[i][j].move(foundBottomLine, this.fallSpeed);
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
    value: function move(foundBottomLine, fallSpeed) {
      if (foundBottomLine && this.pos[1] >= 393) {
        this.pos[1];
      } else if (!foundBottomLine && this.pos[1] >= 473) {
        this.pos[1];
      } else {
        this.pos[1] += fallSpeed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwicmVnaXN0ZXJDbGljayIsImUiLCJjbGlja2VkUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiYWxlcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsImZpbGxTdHlsZSIsImZhbGxTcGVlZCIsImZyZXF1ZW5jeSIsIm51bU9mRXF1YXRpb25zU29sdmVkIiwiSW5pdGlhbExheWVyIiwiZmFsbGluZ051bWJlciIsImRyYXdFcXVhdGlvbiIsImRyYXdOdW1iZXJzIiwiYW5pbWF0ZSIsImRldGVjdENvbGxpc2lvbiIsInJpZ2h0QW5zd2VyQ2hlY2siLCJrZXlIYW5kbGVyIiwiZ2FtZU92ZXIiLCJjaGVja0RvdWJsZURpZ2l0QW5zd2VyIiwic2VsZWN0VW5zZWxlY3ROdW1iZXIiLCJzaW5nbGVEaWdpdEFuc3dlciIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwicmVzdGFydEdhbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInJlbW92ZSIsInRoYXQiLCJjb25jYXRTdHJpbmciLCJpIiwibnVtIiwic3RyaW5nIiwic3BsaWNlIiwiYWJzIiwiY3VycmVudENvbCIsImN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2siLCJmTnVtYmVycyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImJOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJwb3MiLCJ0ZXh0IiwicHVzaCIsImNsaWNrIiwieE9mQ2xpY2tlZCIsInN0cm9rZVN0eWxlIiwiZm9udCIsInN0cm9rZVRleHQiLCJwb3NBdFgiLCJuZXdOdW1iZXIiLCJOdW1iZXJzIiwiY29sb3IiLCJkcmF3U3F1YXJlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzcSIsInZhbHVlcyIsImNvbG9yMiIsInJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMiLCJmYWxsaW5nTnVtIiwibW92ZU9iamVjdHMiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN1cnJlbnRGYWxsaW5nUG9zaXRpb24iLCJjdXJyZW50Q29sdW1uIiwib3RoZXJOdW1iZXIiLCJjaGVja0NvbGxpc2lvbldpdGgiLCJqIiwiZm91bmRCb3R0b21MaW5lIiwibW92ZSIsIkdhbWVWaWV3IiwiY3R4Iiwic3RhcnQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJzdHJva2VSZWN0IiwibGluZVdpZHRoIiwiZmlsbFJlY3QiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsIkNPTE9SUyIsInJhbmRvbVZlYyIsImNhbGwiLCJpbmhlcml0cyIsInNjYWxlIiwidmVjIiwibSIsIm51bWJlciIsImNoaWxkQ2xhc3MiLCJwYXJlbnRDbGFzcyIsIlN1cnJvZ2F0ZSIsInByb3RvdHlwZSIsImNvbnN0cnV0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FD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LE1BQW5CLENBQVA7QUFDSCxHQUhRO0FBSVRnSCxPQUpTLGlCQUlIQyxHQUpHLEVBSUVDLENBSkYsRUFJSztBQUNWLFdBQU8sQ0FBQyxDQUFELEVBQUlELEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUUMsQ0FBWixDQUFQO0FBQ0gsR0FOUTtBQU9UQyxRQVBTLGtCQU9GakUsR0FQRSxFQU9HO0FBQ1IsV0FBT3ZELElBQUksQ0FBQ00sS0FBTCxDQUFXTixJQUFJLENBQUNDLE1BQUwsS0FBZ0JzRCxHQUEzQixDQUFQO0FBQ0g7QUFUUSxDQUFiOztBQVlBNUYsSUFBSSxDQUFDeUosUUFBTCxHQUFnQixVQUFTSyxVQUFULEVBQXFCQyxXQUFyQixFQUFrQztBQUM5QyxXQUFTQyxTQUFULEdBQXFCLENBQUU7O0FBQUE7QUFDdkJBLFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkYsV0FBVyxDQUFDRSxTQUFsQztBQUNBSCxZQUFVLENBQUNHLFNBQVgsR0FBdUIsSUFBSUQsU0FBSixFQUF2QjtBQUNBRixZQUFVLENBQUNHLFNBQVgsQ0FBcUJDLFVBQXJCLEdBQWtDSixVQUFsQztBQUNILENBTEQ7O0FBT0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBLLElBQWpCLEM7Ozs7Ozs7Ozs7O0FDbkJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vc2NyaXB0cy9udW1iZXJzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vc2NyaXB0cy91dGlsJyk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xpY2soZSwgY2xpY2tlZFBvcywgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICBjbGlja2VkUG9zID0ge1xuICAgIHg6IGUuY2xpZW50WCAtIG9mZnNldFgsXG4gICAgeTogZS5jbGllbnRZIC0gb2Zmc2V0WSxcbiAgfTtcbiAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICByZXR1cm4gY2xpY2tlZFBvcztcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3Qgb2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICBjb25zdCBvZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDtcbiAgbGV0IGNsaWNrZWRQb3M7XG4gIGNvbnNvbGUubG9nKCdJdHMgd29ya2luZycpO1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbn0pIiwiY29uc3QgTUFUSE9QID0gW1xuICAgICcrJywgXG4gICAgJy0nLFxuICAgICcqJ1xuXVxuXG5jb25zdCBOVU1CRVJTID0gJzAxMjM0NTY3ODknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhdGlvbiB7XG4gICAgY29uc3RydWN0b3IobnVtYmVycykge1xuICAgICAgICB0aGlzLm51bWJlcnMgPSBudW1iZXJzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5yaWdodEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbigpO1xuICAgIH1cblxuICAgIHNodWZmbGVkICh1bnNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiB1bnNodWZmbGVkXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gKHsgc29ydDogTWF0aC5yYW5kb20oKSwgdmFsdWU6IGEgfSkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiBhLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH07XG5cbiAgICBjcmVhdGVFcXVhdGlvbigpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0xID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0yID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3QgbWF0aE9wID0gTUFUSE9QW01hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyKV07XG4gICAgICAgIGxldCBudW0xID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMSxcbiAgICAgICAgICAgIHN0YXJ0TnVtMSArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBsZXQgbnVtMiA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTIsXG4gICAgICAgICAgICBzdGFydE51bTIgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KG51bTEpIDwgcGFyc2VJbnQobnVtMikgJiYgbWF0aE9wID09PSAnLScpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBudW0xO1xuICAgICAgICAgICAgbnVtMSA9IG51bTI7XG4gICAgICAgICAgICBudW0yID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcXVhdGlvbiA9IGBXaGF0IGlzICR7bnVtMX0gJHttYXRoT3B9ICR7bnVtMn0/YDtcbiAgICAgICAgcmV0dXJuIGVxdWF0aW9uO1xuICAgIH1cblxuICAgIHJpZ2h0QW5zd2VyKGVxdWF0aW9uKXtcbiAgICAgICAgbGV0IGFyciA9IGVxdWF0aW9uLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBudW0xID0gcGFyc2VJbnQoYXJyWzJdKTtcbiAgICAgICAgbGV0IG51bTIgPSBwYXJzZUludChhcnJbNF0pO1xuICAgICAgICBzd2l0Y2goYXJyWzNdKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9udW1iZXJzJztcbmltcG9ydCBFcXVhdGlvbiBmcm9tICcuL2VxdWF0aW9uJztcbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgTnVtQ29sdW1ucyA9IDEwO1xuY29uc3QgRElNX1ggPSBbMCwgODAsIDE2MCwgMjQwLCAzMjAsIDQwMCwgNDgwLCA1NjAsIDY0MCwgNzIwXTtcbmNvbnN0IFdJRFRIID0gODAwO1xuY29uc3QgSEVJR0hUID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMC4zO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IDI1MDtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCA9IDA7XG5cbiAgICAgICAgdGhpcy5Jbml0aWFsTGF5ZXIgPSB0aGlzLkluaXRpYWxMYXllci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2sgPSB0aGlzLnJlZ2lzdGVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyID0gdGhpcy5mYWxsaW5nTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uID0gdGhpcy5kcmF3RXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycyA9IHRoaXMuZHJhd051bWJlcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9uID0gdGhpcy5kZXRlY3RDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrID0gdGhpcy5yaWdodEFuc3dlckNoZWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlciA9IHRoaXMua2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIgPSB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlciA9IHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlciA9IHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT5cbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDbGljayhlKVxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT5cbiAgICAgICAgICAgIHRoaXMua2V5SGFuZGxlcihlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGtleUhhbmRsZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0YXJ0R2FtZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLkluaXRpYWxMYXllcigpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVJZCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IFxuICAgIH1cbiAgICBcbiAgICByaWdodEFuc3dlckNoZWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJpZ2h0QW5zd2VyKTtcbiAgICAgICAgbGV0IHRoYXQgID0gdGhpcztcbiAgICAgICAgbGV0IGFycjtcbiAgICAgICAgbGV0IGNvbmNhdFN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSB0aGlzLnVzZXJDbGlja3NbaV07XG4gICAgICAgICAgICBhcnIgPSBudW0uc3BsaXQoJ18nKTtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChhcnJbMl0pID09PSB0aGF0LnJpZ2h0QW5zd2VyKXtcbiAgICAgICAgICAgICAgICB0aGF0LnNpbmdsZURpZ2l0QW5zd2VyKG51bSk7XG4gICAgICAgICAgICAgICAgdGhhdC5uZXdFcXVhdGlvbiA9IHRoYXQuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGF0LnJpZ2h0QW5zd2VyID0gdGhhdC5lcXVhdGlvbi5yaWdodEFuc3dlcih0aGF0Lm5ld0VxdWF0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGF0LmZhbGxTcGVlZCArPSAwLjE7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmVxdWVuY3kgLT0gMjU7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCArPSAxO1xuICAgICAgICAgICAgICAgIHRoYXQudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgKz0gYXJyWzJdO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjb25jYXRTdHJpbmcpID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm5ld0VxdWF0aW9uID0gdGhhdC5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnJpZ2h0QW5zd2VyID0gdGhhdC5lcXVhdGlvbi5yaWdodEFuc3dlcihcbiAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5ld0VxdWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZmFsbFNwZWVkICs9IDAuMTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyQ2xpY2tzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZmFsbFNwZWVkICs9IDAuMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmVxdWVuY3kgLT0gMjU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9ICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaW5nbGVEaWdpdEFuc3dlcihzdHJpbmcpIHtcbiAgICAgICAgbGV0IGFyciA9IHN0cmluZy5zcGxpdCgnXycpO1xuICAgICAgICBjb25zdCBpID0gcGFyc2VJbnQoYXJyWzFdKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJvdHRvbWxpbmVbYXJyWzBdXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbYXJyWzBdXS5zcGxpY2UoaSAtIDEsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIodGhpcy51c2VyQ2xpY2tzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgeTogTWF0aC5hYnMoZS5jbGllbnRZIC0gdGhpcy5vZmZzZXRZKSAtIDI1LFxuICAgICAgICB9O1xuICAgICAgICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2wgPSB0aGlzLmN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soY2xpY2tlZFBvcy54KTtcbiAgICAgICAgbGV0IGZOdW1iZXJzO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nO1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgbGVmdDtcbiAgICAgICAgbGV0IHJpZ2h0O1xuICAgICAgICBsZXQgdG9wO1xuICAgICAgICBsZXQgYm90dG9tO1xuICAgICAgICBsZXQgYk51bWJlcnM7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgICAgICAgIGJOdW1iZXJzID0gW3RoaXMuYm90dG9tbGluZVtjdXJyZW50Q29sXV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG51bSA9IGJOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICBsZWZ0ID0gbnVtLnBvc1swXTtcbiAgICAgICAgICAgICAgcmlnaHQgPSBudW0ucG9zWzBdICsgODA7XG4gICAgICAgICAgICAgIGJvdHRvbSA9IG51bS5wb3NbMV07XG4gICAgICAgICAgICAgIHRvcCA9IG51bS5wb3NbMV0gLSA4MDtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueCA+IGxlZnQgJiZcbiAgICAgICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA+IHRvcCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA8IGJvdHRvbVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nID0gYCR7bnVtLnBvc1swXX1fMF8ke251bS50ZXh0fWA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5wdXNoKGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIobnVtLCBjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChudW0udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnMuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgICAgICAgIGZOdW1iZXJzID0gdGhpcy5mYWxsaW5nTnVtYmVyc1tjdXJyZW50Q29sXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZk51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbnVtID0gZk51bWJlcnNbaV07XG4gICAgICAgICAgICAgIGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICAgICAgICByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgICAgICAgICAgYm90dG9tID0gbnVtLnBvc1sxXTtcbiAgICAgICAgICAgICAgdG9wID0gbnVtLnBvc1sxXSAtIDgwO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY2xpY2tlZFBvcy54ID4gbGVmdCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueCA8IHJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgY2xpY2tlZFBvcy55ID4gdG9wICYmXG4gICAgICAgICAgICAgICAgY2xpY2tlZFBvcy55IDwgYm90dG9tXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgPSBgJHtudW0ucG9zWzBdfV8ke2krMX1fJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3MucHVzaChjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyKG51bSwgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQobnVtLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckNsaWNrcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXJDaGVjaygpO1xuICAgIH1cblxuICAgIHNlbGVjdFVuc2VsZWN0TnVtYmVyKG51bSwgY29uY2F0U3RyaW5nKXtcbiAgICAgICAgaWYgKG51bS5jbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbnVtLmNsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzW2ldID09PSBjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bS5jbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgICAgIGlmICh4T2ZDbGlja2VkID4geCAmJiB4T2ZDbGlja2VkIDwgeCArIDgwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGhpcy5uZXdFcXVhdGlvbiwgNDAwLCAxNSk7XG4gICAgfVxuXG4gICAgSW5pdGlhbExheWVyKCkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IGk7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzRdLCBudW0pO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXdOdW1iZXIuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBuZXdOdW1iZXIuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tbGluZVtwb3NBdFhdID0gbmV3TnVtYmVyO1xuICAgICAgICAgICAgcG9zQXRYICs9IDgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd051bWJlcnMoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuYm90dG9tbGluZSkuZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcSA9IHRoaXMuYm90dG9tbGluZVtwb3NdO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzcS5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIHNxLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcjIgPSBudW0uY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgbnVtW2ldLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgICAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgICAgICBjb25zdCB5ID0gMjU7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgZmFsbGluZ051bWJlcigpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgICAgICBjb25zdCBjb2xvciA9IGZhbGxpbmdOdW0uY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgIGZhbGxpbmdOdW0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dIHx8IFtdO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ucHVzaChmYWxsaW5nTnVtKTtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVIICs9IDE7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUggPiB0aGlzLmZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICAgICAgdGhpcy5kcmF3TnVtYmVycygpO1xuXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3RDb2xsaXNpb24ocG9zLCBjdXJyZW50RmFsbGluZ1Bvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV07XG4gICAgICAgIGxldCBvdGhlck51bWJlcjtcbiAgICAgICAgaWYgKGN1cnJlbnRGYWxsaW5nUG9zaXRpb24gIT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uXTtcbiAgICAgICAgICAgIG90aGVyTnVtYmVyID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIC0gMV07XG4gICAgICAgICAgICByZXR1cm4gbnVtLmNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgbGV0IG51bWJlcnMgPSBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZXRlY3RDb2xsaXNpb24obnVtYmVyc1tpXVtqXS5wb3MsIGopKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQm90dG9tTGluZSA9IHRoaXMuYm90dG9tbGluZS5oYXNPd25Qcm9wZXJ0eShbXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLnBvc1swXSxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlcnNbaV1bal0ubW92ZShmb3VuZEJvdHRvbUxpbmUsIHRoaXMuZmFsbFNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbldpdGggPSB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoY3R4LCBjb2xvcikge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0gKyA0MCwgdGhpcy5wb3NbMV0gKyA0MCk7XG4gICAgfVxuXG4gICAgbW92ZShmb3VuZEJvdHRvbUxpbmUsIGZhbGxTcGVlZCkge1xuICAgICAgICBpZiAoZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDM5Mykge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSBpZiAoIWZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSA0NzMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9zWzFdICs9IGZhbGxTcGVlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NbMV0gPj0gb3RoZXJOdW1iZXIucG9zWzFdIC0gODA7XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG4vLyBjb25zdCBDT0xPUlMgPSB7XG4vLyAgIDA6IFwiI0NDRkYwMFwiLFxuLy8gICAxOiBcIiNmZjAwMDBcIixcbi8vICAgMjogXCIjZmY4MDAwXCIsXG4vLyAgIDM6IFwiI2ZmZmYwMFwiLFxuLy8gICA0OiBcIiMwMGZmODBcIixcbi8vICAgNTogXCIjRkJBRUQyXCIsXG4vLyAgIDY6IFwiI0ZGNTM0OVwiLFxuLy8gICA3OiBcIiMwMGZmY2NcIixcbi8vICAgODogXCIjMDBmMmZmXCIsXG4vLyAgIDk6IFwiI2ZmMDA3M1wiLFxuLy8gfTtcblxuY29uc3QgQ09MT1JTID0ge1xuICAwOiBcIiNjY2ZmMDBcIixcbiAgMTogXCIjZmYwMDAwXCIsXG4gIDI6IFwiI2ZmODAwMFwiLFxuICAzOiBcIiNmZmZmMDBcIixcbiAgNDogXCIjMDBmZjgwXCIsXG4gIDU6IFwiI2ZiYWVkMlwiLFxuICA2OiBcIiNmZjUzNDlcIixcbiAgNzogXCIjMDBmZmNjXCIsXG4gIDg6IFwiIzAwZjJmZlwiLFxuICA5OiBcIiNmZjAwNzNcIixcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHRleHQpIHtcbiAgICAgICAgLy8gbnVtYmVyIGluc2lkZSBzcXVhcmVcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5jbGljayA9IGZhbHNlO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=