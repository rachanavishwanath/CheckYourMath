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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwiY3JlYXRlRXF1YXRpb24iLCJiaW5kIiwicmlnaHRBbnN3ZXIiLCJuZXdFcXVhdGlvbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJsZW5ndGgiLCJyb3VuZCIsInN0YXJ0TnVtMSIsInN0YXJ0TnVtMiIsIm1hdGhPcCIsIm51bTEiLCJzaHVmZmxlZCIsInNsaWNlIiwibnVtMiIsInBhcnNlSW50IiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJib3R0b21saW5lIiwiZmFsbGluZ051bWJlcnMiLCJmcmFtZUgiLCJ1c2VyQ2xpY2tzIiwicGxheWluZyIsImZyYW1lSWQiLCJmaWxsU3R5bGUiLCJmYWxsU3BlZWQiLCJmcmVxdWVuY3kiLCJudW1PZkVxdWF0aW9uc1NvbHZlZCIsIkluaXRpYWxMYXllciIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJkZXRlY3RDb2xsaXNpb24iLCJyaWdodEFuc3dlckNoZWNrIiwia2V5SGFuZGxlciIsImdhbWVPdmVyIiwiY2hlY2tEb3VibGVEaWdpdEFuc3dlciIsInNlbGVjdFVuc2VsZWN0TnVtYmVyIiwic2luZ2xlRGlnaXRBbnN3ZXIiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsInJlc3RhcnRHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJyZW1vdmUiLCJ0aGF0IiwiY29uY2F0U3RyaW5nIiwiaSIsIm51bSIsInN0cmluZyIsInNwbGljZSIsImFicyIsImN1cnJlbnRDb2wiLCJjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrIiwiZk51bWJlcnMiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJiTnVtYmVycyIsImhhc093blByb3BlcnR5IiwicG9zIiwidGV4dCIsInB1c2giLCJjbGljayIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImNvbG9yIiwiZHJhd1NxdWFyZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3EiLCJ2YWx1ZXMiLCJjb2xvcjIiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmFsbGluZ051bSIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIiwiY3VycmVudENvbHVtbiIsIm90aGVyTnVtYmVyIiwiY2hlY2tDb2xsaXNpb25XaXRoIiwiaiIsImZvdW5kQm90dG9tTGluZSIsIm1vdmUiLCJHYW1lVmlldyIsImN0eCIsInN0YXJ0IiwiZHJhdyIsInNldEludGVydmFsIiwiTW92aW5nT2JqZWN0Iiwib2JqIiwidmVsIiwic3Ryb2tlUmVjdCIsImxpbmVXaWR0aCIsImZpbGxSZWN0IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJDT0xPUlMiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJzY2FsZSIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1dG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtB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QixDQUFQO0FBQ0gsR0FIUTtBQUlUZ0gsT0FKUyxpQkFJSEMsR0FKRyxFQUlFQyxDQUpGLEVBSUs7QUFDVixXQUFPLENBQUMsQ0FBRCxFQUFJRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVFDLENBQVosQ0FBUDtBQUNILEdBTlE7QUFPVEMsUUFQUyxrQkFPRmpFLEdBUEUsRUFPRztBQUNSLFdBQU92RCxJQUFJLENBQUNNLEtBQUwsQ0FBV04sSUFBSSxDQUFDQyxNQUFMLEtBQWdCc0QsR0FBM0IsQ0FBUDtBQUNIO0FBVFEsQ0FBYjs7QUFZQTVGLElBQUksQ0FBQ3lKLFFBQUwsR0FBZ0IsVUFBU0ssVUFBVCxFQUFxQkMsV0FBckIsRUFBa0M7QUFDOUMsV0FBU0MsU0FBVCxHQUFxQixDQUFFOztBQUFBO0FBQ3ZCQSxXQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7QUFDQUgsWUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJwSyxJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgY2xpY2tlZFBvcyA9IHtcbiAgICB4OiBlLmNsaWVudFggLSBvZmZzZXRYLFxuICAgIHk6IGUuY2xpZW50WSAtIG9mZnNldFksXG4gIH07XG4gIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgcmV0dXJuIGNsaWNrZWRQb3M7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgY29uc3Qgb2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gIGxldCBjbGlja2VkUG9zO1xuICBjb25zb2xlLmxvZygnSXRzIHdvcmtpbmcnKTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG59KSIsImNvbnN0IE1BVEhPUCA9IFtcbiAgICAnKycsIFxuICAgICctJyxcbiAgICAnKidcbl1cblxuY29uc3QgTlVNQkVSUyA9ICcwMTIzNDU2Nzg5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG51bWJlcnMpIHtcbiAgICAgICAgdGhpcy5udW1iZXJzID0gbnVtYmVycztcbiAgICAgICAgdGhpcy5jcmVhdGVFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMucmlnaHRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24oKTtcbiAgICB9XG5cbiAgICBzaHVmZmxlZCAodW5zaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gdW5zaHVmZmxlZFxuICAgICAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+ICh7IHNvcnQ6IE1hdGgucmFuZG9tKCksIHZhbHVlOiBhIH0pKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnQgLSBiLnNvcnQpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gYS52YWx1ZSlcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlRXF1YXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxKSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IG1hdGhPcCA9IE1BVEhPUFtNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMildO1xuICAgICAgICBsZXQgbnVtMSA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTEsXG4gICAgICAgICAgICBzdGFydE51bTEgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0yLFxuICAgICAgICAgICAgc3RhcnROdW0yICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXJzZUludChudW0xKSA8IHBhcnNlSW50KG51bTIpICYmIG1hdGhPcCA9PT0gJy0nKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gbnVtMTtcbiAgICAgICAgICAgIG51bTEgPSBudW0yO1xuICAgICAgICAgICAgbnVtMiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBgV2hhdCBpcyAke251bTF9ICR7bWF0aE9wfSAke251bTJ9P2A7XG4gICAgICAgIHJldHVybiBlcXVhdGlvbjtcbiAgICB9XG5cbiAgICByaWdodEFuc3dlcihlcXVhdGlvbil7XG4gICAgICAgIGxldCBhcnIgPSBlcXVhdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtMSA9IHBhcnNlSW50KGFyclsyXSk7XG4gICAgICAgIGxldCBudW0yID0gcGFyc2VJbnQoYXJyWzRdKTtcbiAgICAgICAgc3dpdGNoKGFyclszXSkge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5pbXBvcnQgRXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gWzAsIDgwLCAxNjAsIDI0MCwgMzIwLCA0MDAsIDQ4MCwgNTYwLCA2NDAsIDcyMF07XG5jb25zdCBXSURUSCA9IDgwMDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgICAgICB0aGlzLm9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcXVhdGlvbiA9IG5ldyBFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDAuMztcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAyNTA7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgPSAwO1xuXG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbiA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXJDaGVjayA9IHRoaXMucmlnaHRBbnN3ZXJDaGVjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleUhhbmRsZXIgPSB0aGlzLmtleUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyID0gdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIgPSB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIgPSB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2soZSlcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+XG4gICAgICAgICAgICB0aGlzLmtleUhhbmRsZXIoZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBrZXlIYW5kbGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydEdhbWUoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5lcXVhdGlvbi5yaWdodEFuc3dlcih0aGlzLm5ld0VxdWF0aW9uKTtcbiAgICAgICAgdGhpcy5Jbml0aWFsTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpOyBcbiAgICB9XG4gICAgXG4gICAgcmlnaHRBbnN3ZXJDaGVjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yaWdodEFuc3dlcik7XG4gICAgICAgIGxldCB0aGF0ICA9IHRoaXM7XG4gICAgICAgIGxldCBhcnI7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gdGhpcy51c2VyQ2xpY2tzW2ldO1xuICAgICAgICAgICAgYXJyID0gbnVtLnNwbGl0KCdfJyk7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoYXJyWzJdKSA9PT0gdGhhdC5yaWdodEFuc3dlcil7XG4gICAgICAgICAgICAgICAgdGhhdC5zaW5nbGVEaWdpdEFuc3dlcihudW0pO1xuICAgICAgICAgICAgICAgIHRoYXQubmV3RXF1YXRpb24gPSB0aGF0LmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhhdC5yaWdodEFuc3dlciA9IHRoYXQuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhhdC5uZXdFcXVhdGlvbik7XG4gICAgICAgICAgICAgICAgdGhhdC5mYWxsU3BlZWQgKz0gMC4xO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJlcXVlbmN5IC09IDI1O1xuICAgICAgICAgICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGF0LnVzZXJDbGlja3MgPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nICs9IGFyclsyXTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY29uY2F0U3RyaW5nKSA9PT0gdGhpcy5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5uZXdFcXVhdGlvbiA9IHRoYXQuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yaWdodEFuc3dlciA9IHRoYXQuZXF1YXRpb24ucmlnaHRBbnN3ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgdGhhdC5uZXdFcXVhdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmZhbGxTcGVlZCArPSAwLjE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmZhbGxTcGVlZCArPSAwLjE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJlcXVlbmN5IC09IDI1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkICs9IDE7XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2luZ2xlRGlnaXRBbnN3ZXIoc3RyaW5nKSB7XG4gICAgICAgIGxldCBhcnIgPSBzdHJpbmcuc3BsaXQoJ18nKTtcbiAgICAgICAgY29uc3QgaSA9IHBhcnNlSW50KGFyclsxXSk7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ib3R0b21saW5lW2FyclswXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW2FyclswXV0uc3BsaWNlKGkgLSAxLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyKHRoaXMudXNlckNsaWNrc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckNsaWNrKGUpIHtcbiAgICAgICAgY29uc3QgY2xpY2tlZFBvcyA9IHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgIHk6IE1hdGguYWJzKGUuY2xpZW50WSAtIHRoaXMub2Zmc2V0WSkgLSAyNSxcbiAgICAgICAgfTtcbiAgICAgICAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sID0gdGhpcy5jdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKGNsaWNrZWRQb3MueCk7XG4gICAgICAgIGxldCBmTnVtYmVycztcbiAgICAgICAgbGV0IGNvbmNhdFN0cmluZztcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IGxlZnQ7XG4gICAgICAgIGxldCByaWdodDtcbiAgICAgICAgbGV0IHRvcDtcbiAgICAgICAgbGV0IGJvdHRvbTtcbiAgICAgICAgbGV0IGJOdW1iZXJzO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBiTnVtYmVycyA9IFt0aGlzLmJvdHRvbWxpbmVbY3VycmVudENvbF1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBudW0gPSBiTnVtYmVyc1tpXTtcbiAgICAgICAgICAgICAgbGVmdCA9IG51bS5wb3NbMF07XG4gICAgICAgICAgICAgIHJpZ2h0ID0gbnVtLnBvc1swXSArIDgwO1xuICAgICAgICAgICAgICBib3R0b20gPSBudW0ucG9zWzFdO1xuICAgICAgICAgICAgICB0b3AgPSBudW0ucG9zWzFdIC0gODA7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjbGlja2VkUG9zLnggPiBsZWZ0ICYmXG4gICAgICAgICAgICAgICAgY2xpY2tlZFBvcy54IDwgcmlnaHQgJiZcbiAgICAgICAgICAgICAgICBjbGlja2VkUG9zLnkgPiB0b3AgJiZcbiAgICAgICAgICAgICAgICBjbGlja2VkUG9zLnkgPCBib3R0b21cbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XzBfJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3MucHVzaChjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyKG51bSwgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQobnVtLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBmTnVtYmVycyA9IHRoaXMuZmFsbGluZ051bWJlcnNbY3VycmVudENvbF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG51bSA9IGZOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICBsZWZ0ID0gbnVtLnBvc1swXTtcbiAgICAgICAgICAgICAgcmlnaHQgPSBudW0ucG9zWzBdICsgODA7XG4gICAgICAgICAgICAgIGJvdHRvbSA9IG51bS5wb3NbMV07XG4gICAgICAgICAgICAgIHRvcCA9IG51bS5wb3NbMV0gLSA4MDtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueCA+IGxlZnQgJiZcbiAgICAgICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA+IHRvcCAmJlxuICAgICAgICAgICAgICAgIGNsaWNrZWRQb3MueSA8IGJvdHRvbVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nID0gYCR7bnVtLnBvc1swXX1fJHtpKzF9XyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnB1c2goY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlcihudW0sIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KG51bS50ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJDbGlja3MpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyQ2hlY2soKTtcbiAgICB9XG5cbiAgICBzZWxlY3RVbnNlbGVjdE51bWJlcihudW0sIGNvbmNhdFN0cmluZyl7XG4gICAgICAgIGlmIChudW0uY2xpY2sgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG51bS5jbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckNsaWNrc1tpXSA9PT0gY29uY2F0U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW0uY2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3VycmVudENvbHVtbkZvclVzZXJDbGljayh4T2ZDbGlja2VkKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICAgICAgICBpZiAoeE9mQ2xpY2tlZCA+IHggJiYgeE9mQ2xpY2tlZCA8IHggKyA4MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeCArPSA4MDtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFcXVhdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMjBweCBWZXJkYW5hXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KHRoaXMubmV3RXF1YXRpb24sIDQwMCwgMTUpO1xuICAgIH1cblxuICAgIEluaXRpYWxMYXllcigpIHtcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IHBvc0F0WCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtQ29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICBudW0gPSBpO1xuICAgICAgICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDc0XSwgbnVtKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3TnVtYmVyLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgbmV3TnVtYmVyLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbWxpbmVbcG9zQXRYXSA9IG5ld051bWJlcjtcbiAgICAgICAgICAgIHBvc0F0WCArPSA4MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdOdW1iZXJzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmJvdHRvbWxpbmUpLmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3EgPSB0aGlzLmJvdHRvbWxpbmVbcG9zXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3EuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBzcS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IyID0gbnVtLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIG51bVtpXS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpIHtcbiAgICAgICAgY29uc3QgeCA9IERJTV9YW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwXTtcbiAgICAgICAgY29uc3QgeSA9IDI1O1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIGZhbGxpbmdOdW1iZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpO1xuICAgICAgICBjb25zdCBudW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMDtcbiAgICAgICAgY29uc3QgZmFsbGluZ051bSA9IG5ldyBOdW1iZXJzKHBvcywgbnVtKTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBmYWxsaW5nTnVtLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICBmYWxsaW5nTnVtLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXSA9IHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXSB8fCBbXTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLnB1c2goZmFsbGluZ051bSk7XG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lSCArPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVIID4gdGhpcy5mcmVxdWVuY3kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd051bWJlcnMoKTtcblxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKHBvcywgY3VycmVudEZhbGxpbmdQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dO1xuICAgICAgICBsZXQgb3RoZXJOdW1iZXI7XG4gICAgICAgIGlmIChjdXJyZW50RmFsbGluZ1Bvc2l0aW9uICE9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbl07XG4gICAgICAgICAgICBvdGhlck51bWJlciA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuIG51bS5jaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIGxldCBudW1iZXJzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0ZWN0Q29sbGlzaW9uKG51bWJlcnNbaV1bal0ucG9zLCBqKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvdHRvbUxpbmUgPSB0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5wb3NbMF0sXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLm1vdmUoZm91bmRCb3R0b21MaW5lLCB0aGlzLmZhbGxTcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmdhbWUubW92ZU9iamVjdHMoKSwgXG4gICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldEludGVydmFsKGNhbGxiYWNrLmJpbmQodGhhdCksIDIwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHRoaXMucG9zID0gb2JqW1wicG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IG9ialtcInZlbFwiXTtcbiAgICAgICAgdGhpcy5jb2xvciA9IG9ialtcImNvbG9yXCJdO1xuICAgICAgICB0aGlzLnRleHQgPSBvYmpbXCJ0ZXh0XCJdO1xuICAgICAgICB0aGlzLmRyYXdTcXVhcmUgPSB0aGlzLmRyYXdTcXVhcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoID0gdGhpcy5jaGVja0NvbGxpc2lvbldpdGguYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKGN0eCwgY29sb3IpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjQwcHggR2VvcmdpYVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRleHQsIHRoaXMucG9zWzBdICsgNDAsIHRoaXMucG9zWzFdICsgNDApO1xuICAgIH1cblxuICAgIG1vdmUoZm91bmRCb3R0b21MaW5lLCBmYWxsU3BlZWQpIHtcbiAgICAgICAgaWYgKGZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSAzOTMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKCFmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gNDczKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvc1sxXSArPSBmYWxsU3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zWzFdID49IG90aGVyTnVtYmVyLnBvc1sxXSAtIDgwO1xuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuLy8gY29uc3QgQ09MT1JTID0ge1xuLy8gICAwOiBcIiNDQ0ZGMDBcIixcbi8vICAgMTogXCIjZmYwMDAwXCIsXG4vLyAgIDI6IFwiI2ZmODAwMFwiLFxuLy8gICAzOiBcIiNmZmZmMDBcIixcbi8vICAgNDogXCIjMDBmZjgwXCIsXG4vLyAgIDU6IFwiI0ZCQUVEMlwiLFxuLy8gICA2OiBcIiNGRjUzNDlcIixcbi8vICAgNzogXCIjMDBmZmNjXCIsXG4vLyAgIDg6IFwiIzAwZjJmZlwiLFxuLy8gICA5OiBcIiNmZjAwNzNcIixcbi8vIH07XG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgMDogXCIjY2NmZjAwXCIsXG4gIDE6IFwiI2ZmMDAwMFwiLFxuICAyOiBcIiNmZjgwMDBcIixcbiAgMzogXCIjZmZmZjAwXCIsXG4gIDQ6IFwiIzAwZmY4MFwiLFxuICA1OiBcIiNmYmFlZDJcIixcbiAgNjogXCIjZmY1MzQ5XCIsXG4gIDc6IFwiIzAwZmZjY1wiLFxuICA4OiBcIiMwMGYyZmZcIixcbiAgOTogXCIjZmYwMDczXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVycyB7XG4gICAgY29uc3RydWN0b3IocG9zLCB0ZXh0KSB7XG4gICAgICAgIC8vIG51bWJlciBpbnNpZGUgc3F1YXJlXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuY2xpY2sgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgIHZlbDogVXRpbC5yYW5kb21WZWMoMiksXG4gICAgICAgICAgY29sb3I6IENPTE9SU1t0aGlzLnRleHRdLFxuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgfTtcbiAgICAgICAgTW92aW5nT2JqZWN0LmNhbGwodGhpcywgb2JqKTtcbiAgICB9XG59O1xuXG5VdGlsLmluaGVyaXRzKE51bWJlcnMsIE1vdmluZ09iamVjdCk7IiwiY29uc3QgVXRpbCA9IHtcbiAgICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBVdGlsLnNjYWxlKFswLCA1XSwgbGVuZ3RoKTtcbiAgICB9LFxuICAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgICByZXR1cm4gWzAsIHZlY1sxXSogbV1cbiAgICB9LFxuICAgIG51bWJlcihudW0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG51bSlcbiAgICB9XG59XG5cblV0aWwuaW5oZXJpdHMgPSBmdW5jdGlvbihjaGlsZENsYXNzLCBwYXJlbnRDbGFzcykge1xuICAgIGZ1bmN0aW9uIFN1cnJvZ2F0ZSgpIHt9O1xuICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnRDbGFzcy5wcm90b3R5cGU7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlKCk7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUuY29uc3RydXRvciA9IGNoaWxkQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9