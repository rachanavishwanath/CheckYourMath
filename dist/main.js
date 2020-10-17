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
    this.offsetX = canvas.offsetLeft; //320 299

    this.offsetY = canvas.offsetTop; //320 299

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
    this.removeFromUserClicks = this.removeFromUserClicks.bind(this);
    this.checkSqPosition = this.checkSqPosition.bind(this);
    this.SetsAfterRightAnswerClick = this.SetsAfterRightAnswerClick.bind(this);
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
      var arr;
      var concatString = "";

      for (var i = 0; i < this.userClicks.length; i++) {
        var num = this.userClicks[i];
        arr = num.split("_");

        if (parseInt(arr[2]) === this.rightAnswer) {
          this.singleDigitAnswer(num);
          this.SetsAfterRightAnswerClick();
        } else {
          concatString += arr[2];

          if (parseInt(concatString) === this.rightAnswer) {
            this.checkDoubleDigitAnswer();
            this.SetsAfterRightAnswerClick();
          }
        }
      }
    }
  }, {
    key: "SetsAfterRightAnswerClick",
    value: function SetsAfterRightAnswerClick() {
      this.newEquation = this.equation.createEquation();
      this.rightAnswer = this.equation.rightAnswer(this.newEquation);
      this.fallSpeed += 0.1;
      this.userClicks = [];
      this.fallSpeed += 0.1;
      this.frequency -= 25;
      this.numOfEquationsSolved += 1;
    }
  }, {
    key: "singleDigitAnswer",
    value: function singleDigitAnswer(string) {
      var arr = string.split("_");
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
      var currentCol = this.currentColumnForUserClick(clickedPos.x);
      var fNumbers;
      var num;
      var bNumbers;
      var concatString;

      if (this.bottomline.hasOwnProperty(currentCol)) {
        bNumbers = [this.bottomline[currentCol]];

        for (var i = 0; i < bNumbers.length; i++) {
          num = bNumbers[i];
          concatString = "".concat(num.pos[0], "_0_").concat(num.text);
          this.checkSqPosition(num, clickedPos, concatString);
        }
      }

      if (this.fallingNumbers.hasOwnProperty(currentCol)) {
        fNumbers = this.fallingNumbers[currentCol];

        for (var _i = 0; _i < fNumbers.length; _i++) {
          num = fNumbers[_i];
          concatString = "".concat(num.pos[0], "_").concat(_i + 1, "_").concat(num.text);
          this.checkSqPosition(num, clickedPos, concatString);
        }
      }

      console.log(this.userClicks);
      this.rightAnswerCheck();
    }
  }, {
    key: "checkSqPosition",
    value: function checkSqPosition(num, clickedPos, concatString) {
      var left = num.pos[0];
      var right = num.pos[0] + 80;
      var bottom = num.pos[1];
      var top = num.pos[1] - 80;

      if (clickedPos.x > left && clickedPos.x < right && clickedPos.y > top && clickedPos.y < bottom) {
        if (this.userClicks.includes(concatString)) {
          this.removeFromUserClicks(concatString);
        } else {
          this.userClicks.push(concatString);
        }

        this.selectUnselectNumber(num, concatString);
        alert(num.text);
      }
    }
  }, {
    key: "removeFromUserClicks",
    value: function removeFromUserClicks(concatString) {
      for (var i = 0; i < this.userClicks.length; i++) {
        if (this.userClicks[i] === concatString) {
          this.userClicks.splice(i, 1);
        }
      }
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
          var color2 = num[i].click ? "darkgrey" : "black";
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
      fallingNum.drawSquare(this.context, "black");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwiY3JlYXRlRXF1YXRpb24iLCJiaW5kIiwicmlnaHRBbnN3ZXIiLCJuZXdFcXVhdGlvbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJsZW5ndGgiLCJyb3VuZCIsInN0YXJ0TnVtMSIsInN0YXJ0TnVtMiIsIm1hdGhPcCIsIm51bTEiLCJzaHVmZmxlZCIsInNsaWNlIiwibnVtMiIsInBhcnNlSW50IiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJib3R0b21saW5lIiwiZmFsbGluZ051bWJlcnMiLCJmcmFtZUgiLCJ1c2VyQ2xpY2tzIiwicGxheWluZyIsImZyYW1lSWQiLCJmaWxsU3R5bGUiLCJmYWxsU3BlZWQiLCJmcmVxdWVuY3kiLCJudW1PZkVxdWF0aW9uc1NvbHZlZCIsIkluaXRpYWxMYXllciIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJkZXRlY3RDb2xsaXNpb24iLCJyaWdodEFuc3dlckNoZWNrIiwia2V5SGFuZGxlciIsImdhbWVPdmVyIiwiY2hlY2tEb3VibGVEaWdpdEFuc3dlciIsInNlbGVjdFVuc2VsZWN0TnVtYmVyIiwic2luZ2xlRGlnaXRBbnN3ZXIiLCJyZW1vdmVGcm9tVXNlckNsaWNrcyIsImNoZWNrU3FQb3NpdGlvbiIsIlNldHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsInJlc3RhcnRHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJyZW1vdmUiLCJjb25jYXRTdHJpbmciLCJpIiwibnVtIiwic3RyaW5nIiwic3BsaWNlIiwiYWJzIiwiY3VycmVudENvbCIsImN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2siLCJmTnVtYmVycyIsImJOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJwb3MiLCJ0ZXh0IiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9wIiwiaW5jbHVkZXMiLCJwdXNoIiwiY2xpY2siLCJ4T2ZDbGlja2VkIiwic3Ryb2tlU3R5bGUiLCJmb250Iiwic3Ryb2tlVGV4dCIsInBvc0F0WCIsIm5ld051bWJlciIsIk51bWJlcnMiLCJjb2xvciIsImRyYXdTcXVhcmUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNxIiwidmFsdWVzIiwiY29sb3IyIiwicmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycyIsImZhbGxpbmdOdW0iLCJtb3ZlT2JqZWN0cyIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudEZhbGxpbmdQb3NpdGlvbiIsImN1cnJlbnRDb2x1bW4iLCJvdGhlck51bWJlciIsImNoZWNrQ29sbGlzaW9uV2l0aCIsImoiLCJmb3VuZEJvdHRvbUxpbmUiLCJtb3ZlIiwiR2FtZVZpZXciLCJjdHgiLCJzdGFydCIsInRoYXQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJzdHJva2VSZWN0IiwibGluZVdpZHRoIiwiZmlsbFJlY3QiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsIkNPTE9SUyIsInJhbmRvbVZlYyIsImNhbGwiLCJpbmhlcml0cyIsInNjYWxlIiwidmVjIiwibSIsIm51bWJlciIsImNoaWxkQ2xhc3MiLCJwYXJlbnRDbGFzcyIsIlN1cnJvZ2F0ZSIsInByb3RvdHlwZSIsImNvbnN0cnV0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4SyxJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgY2xpY2tlZFBvcyA9IHtcbiAgICB4OiBlLmNsaWVudFggLSBvZmZzZXRYLFxuICAgIHk6IGUuY2xpZW50WSAtIG9mZnNldFksXG4gIH07XG4gIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgcmV0dXJuIGNsaWNrZWRQb3M7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgY29uc3Qgb2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gIGxldCBjbGlja2VkUG9zO1xuICBjb25zb2xlLmxvZygnSXRzIHdvcmtpbmcnKTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG59KSIsImNvbnN0IE1BVEhPUCA9IFtcbiAgICAnKycsIFxuICAgICctJyxcbiAgICAnKidcbl1cblxuY29uc3QgTlVNQkVSUyA9ICcwMTIzNDU2Nzg5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG51bWJlcnMpIHtcbiAgICAgICAgdGhpcy5udW1iZXJzID0gbnVtYmVycztcbiAgICAgICAgdGhpcy5jcmVhdGVFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMucmlnaHRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24oKTtcbiAgICB9XG5cbiAgICBzaHVmZmxlZCAodW5zaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gdW5zaHVmZmxlZFxuICAgICAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+ICh7IHNvcnQ6IE1hdGgucmFuZG9tKCksIHZhbHVlOiBhIH0pKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnQgLSBiLnNvcnQpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gYS52YWx1ZSlcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlRXF1YXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxKSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IG1hdGhPcCA9IE1BVEhPUFtNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMildO1xuICAgICAgICBsZXQgbnVtMSA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTEsXG4gICAgICAgICAgICBzdGFydE51bTEgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0yLFxuICAgICAgICAgICAgc3RhcnROdW0yICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXJzZUludChudW0xKSA8IHBhcnNlSW50KG51bTIpICYmIG1hdGhPcCA9PT0gJy0nKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gbnVtMTtcbiAgICAgICAgICAgIG51bTEgPSBudW0yO1xuICAgICAgICAgICAgbnVtMiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBgV2hhdCBpcyAke251bTF9ICR7bWF0aE9wfSAke251bTJ9P2A7XG4gICAgICAgIHJldHVybiBlcXVhdGlvbjtcbiAgICB9XG5cbiAgICByaWdodEFuc3dlcihlcXVhdGlvbil7XG4gICAgICAgIGxldCBhcnIgPSBlcXVhdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtMSA9IHBhcnNlSW50KGFyclsyXSk7XG4gICAgICAgIGxldCBudW0yID0gcGFyc2VJbnQoYXJyWzRdKTtcbiAgICAgICAgc3dpdGNoKGFyclszXSkge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5pbXBvcnQgRXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gWzAsIDgwLCAxNjAsIDI0MCwgMzIwLCA0MDAsIDQ4MCwgNTYwLCA2NDAsIDcyMF07XG5jb25zdCBXSURUSCA9IDgwMDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0OyAvLzMyMCAyOTlcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDsgLy8zMjAgMjk5XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMC4zO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IDI1MDtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCA9IDA7XG5cbiAgICAgICAgdGhpcy5Jbml0aWFsTGF5ZXIgPSB0aGlzLkluaXRpYWxMYXllci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2sgPSB0aGlzLnJlZ2lzdGVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyID0gdGhpcy5mYWxsaW5nTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uID0gdGhpcy5kcmF3RXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycyA9IHRoaXMuZHJhd051bWJlcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9uID0gdGhpcy5kZXRlY3RDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrID0gdGhpcy5yaWdodEFuc3dlckNoZWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlciA9IHRoaXMua2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIgPSB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlciA9IHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlciA9IHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyA9IHRoaXMucmVtb3ZlRnJvbVVzZXJDbGlja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja1NxUG9zaXRpb24gPSB0aGlzLmNoZWNrU3FQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLlNldHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2sgPSB0aGlzLlNldHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4gdGhpcy5yZWdpc3RlckNsaWNrKGUpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHRoaXMua2V5SGFuZGxlcihlKSk7XG4gICAgfVxuXG4gICAga2V5SGFuZGxlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0R2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhpcy5uZXdFcXVhdGlvbik7XG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyKCk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVJZCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXJDaGVjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yaWdodEFuc3dlcik7XG4gICAgICAgIGxldCBhcnI7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gdGhpcy51c2VyQ2xpY2tzW2ldO1xuICAgICAgICAgICAgYXJyID0gbnVtLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChhcnJbMl0pID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlcihudW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0c0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgKz0gYXJyWzJdO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjb25jYXRTdHJpbmcpID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTZXRzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCl7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCArPSAwLjE7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCArPSAwLjE7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5IC09IDI1O1xuICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkICs9IDE7XG4gICAgfVxuXG4gICAgc2luZ2xlRGlnaXRBbnN3ZXIoc3RyaW5nKSB7XG4gICAgICAgIGxldCBhcnIgPSBzdHJpbmcuc3BsaXQoXCJfXCIpO1xuICAgICAgICBjb25zdCBpID0gcGFyc2VJbnQoYXJyWzFdKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJvdHRvbWxpbmVbYXJyWzBdXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbYXJyWzBdXS5zcGxpY2UoaSAtIDEsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIodGhpcy51c2VyQ2xpY2tzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgeTogTWF0aC5hYnMoZS5jbGllbnRZIC0gdGhpcy5vZmZzZXRZKSAtIDI1LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sID0gdGhpcy5jdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKGNsaWNrZWRQb3MueCk7XG4gICAgICAgIGxldCBmTnVtYmVycztcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IGJOdW1iZXJzO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBiTnVtYmVycyA9IFt0aGlzLmJvdHRvbWxpbmVbY3VycmVudENvbF1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGJOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XzBfJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVycy5oYXNPd25Qcm9wZXJ0eShjdXJyZW50Q29sKSkge1xuICAgICAgICAgICAgZk51bWJlcnMgPSB0aGlzLmZhbGxpbmdOdW1iZXJzW2N1cnJlbnRDb2xdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGZOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XyR7aSArIDF9XyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gbnVtLnBvc1sxXTtcbiAgICAgICAgY29uc3QgdG9wID0gbnVtLnBvc1sxXSAtIDgwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPiBsZWZ0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy55ID4gdG9wICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPCBib3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzLmluY2x1ZGVzKGNvbmNhdFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3MucHVzaChjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlcihudW0sIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICBhbGVydChudW0udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJDbGlja3NbaV0gPT09IGNvbmNhdFN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RVbnNlbGVjdE51bWJlcihudW0pIHtcbiAgICAgICAgaWYgKG51bS5jbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbnVtLmNsaWNrID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW0uY2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3VycmVudENvbHVtbkZvclVzZXJDbGljayh4T2ZDbGlja2VkKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICAgICAgICBpZiAoeE9mQ2xpY2tlZCA+IHggJiYgeE9mQ2xpY2tlZCA8IHggKyA4MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeCArPSA4MDtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFcXVhdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMjBweCBWZXJkYW5hXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KHRoaXMubmV3RXF1YXRpb24sIDQwMCwgMTUpO1xuICAgIH1cblxuICAgIEluaXRpYWxMYXllcigpIHtcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IHBvc0F0WCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtQ29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICBudW0gPSBpO1xuICAgICAgICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDc0XSwgbnVtKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3TnVtYmVyLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgbmV3TnVtYmVyLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbWxpbmVbcG9zQXRYXSA9IG5ld051bWJlcjtcbiAgICAgICAgICAgIHBvc0F0WCArPSA4MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdOdW1iZXJzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmJvdHRvbWxpbmUpLmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3EgPSB0aGlzLmJvdHRvbWxpbmVbcG9zXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3EuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBzcS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yMiA9IG51bVtpXS5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIG51bVtpXS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IyKTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgICAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgICAgICBjb25zdCB5ID0gMjU7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgZmFsbGluZ051bWJlcigpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgICAgICBmYWxsaW5nTnVtLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBcImJsYWNrXCIpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gfHwgW107XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5wdXNoKGZhbGxpbmdOdW0pO1xuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLmxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVIID4gdGhpcy5mcmVxdWVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycygpO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKHBvcywgY3VycmVudEZhbGxpbmdQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dO1xuICAgICAgICBsZXQgb3RoZXJOdW1iZXI7XG4gICAgICAgIGlmIChjdXJyZW50RmFsbGluZ1Bvc2l0aW9uICE9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbl07XG4gICAgICAgICAgICBvdGhlck51bWJlciA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuIG51bS5jaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIGxldCBudW1iZXJzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0ZWN0Q29sbGlzaW9uKG51bWJlcnNbaV1bal0ucG9zLCBqKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvdHRvbUxpbmUgPSB0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5wb3NbMF0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5tb3ZlKGZvdW5kQm90dG9tTGluZSwgdGhpcy5mYWxsU3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbldpdGggPSB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoY3R4LCBjb2xvcikge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0gKyA0MCwgdGhpcy5wb3NbMV0gKyA0MCk7XG4gICAgfVxuXG4gICAgbW92ZShmb3VuZEJvdHRvbUxpbmUsIGZhbGxTcGVlZCkge1xuICAgICAgICBpZiAoZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDM5Mykge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSBpZiAoIWZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSA0NzMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9zWzFdICs9IGZhbGxTcGVlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NbMV0gPj0gb3RoZXJOdW1iZXIucG9zWzFdIC0gODA7XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG4vLyBjb25zdCBDT0xPUlMgPSB7XG4vLyAgIDA6IFwiI0NDRkYwMFwiLFxuLy8gICAxOiBcIiNmZjAwMDBcIixcbi8vICAgMjogXCIjZmY4MDAwXCIsXG4vLyAgIDM6IFwiI2ZmZmYwMFwiLFxuLy8gICA0OiBcIiMwMGZmODBcIixcbi8vICAgNTogXCIjRkJBRUQyXCIsXG4vLyAgIDY6IFwiI0ZGNTM0OVwiLFxuLy8gICA3OiBcIiMwMGZmY2NcIixcbi8vICAgODogXCIjMDBmMmZmXCIsXG4vLyAgIDk6IFwiI2ZmMDA3M1wiLFxuLy8gfTtcblxuY29uc3QgQ09MT1JTID0ge1xuICAwOiBcIiNjY2ZmMDBcIixcbiAgMTogXCIjZmYwMDAwXCIsXG4gIDI6IFwiI2ZmODAwMFwiLFxuICAzOiBcIiNmZmZmMDBcIixcbiAgNDogXCIjMDBmZjgwXCIsXG4gIDU6IFwiI2ZiYWVkMlwiLFxuICA2OiBcIiNmZjUzNDlcIixcbiAgNzogXCIjMDBmZmNjXCIsXG4gIDg6IFwiIzAwZjJmZlwiLFxuICA5OiBcIiNmZjAwNzNcIixcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHRleHQpIHtcbiAgICAgICAgLy8gbnVtYmVyIGluc2lkZSBzcXVhcmVcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5jbGljayA9IGZhbHNlO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=