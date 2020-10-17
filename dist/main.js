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

        this.selectUnselectNumber(num, concatString); // alert(num.text);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwicmVnaXN0ZXJDbGljayIsImUiLCJjbGlja2VkUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiYWxlcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsImZpbGxTdHlsZSIsImZhbGxTcGVlZCIsImZyZXF1ZW5jeSIsIm51bU9mRXF1YXRpb25zU29sdmVkIiwiSW5pdGlhbExheWVyIiwiZmFsbGluZ051bWJlciIsImRyYXdFcXVhdGlvbiIsImRyYXdOdW1iZXJzIiwiYW5pbWF0ZSIsImRldGVjdENvbGxpc2lvbiIsInJpZ2h0QW5zd2VyQ2hlY2siLCJrZXlIYW5kbGVyIiwiZ2FtZU92ZXIiLCJjaGVja0RvdWJsZURpZ2l0QW5zd2VyIiwic2VsZWN0VW5zZWxlY3ROdW1iZXIiLCJzaW5nbGVEaWdpdEFuc3dlciIsInJlbW92ZUZyb21Vc2VyQ2xpY2tzIiwiY2hlY2tTcVBvc2l0aW9uIiwiU2V0c0FmdGVyUmlnaHRBbnN3ZXJDbGljayIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwicmVzdGFydEdhbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInJlbW92ZSIsImNvbmNhdFN0cmluZyIsImkiLCJudW0iLCJzdHJpbmciLCJzcGxpY2UiLCJhYnMiLCJjdXJyZW50Q29sIiwiY3VycmVudENvbHVtbkZvclVzZXJDbGljayIsImZOdW1iZXJzIiwiYk51bWJlcnMiLCJoYXNPd25Qcm9wZXJ0eSIsInBvcyIsInRleHQiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJpbmNsdWRlcyIsInB1c2giLCJjbGljayIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImNvbG9yIiwiZHJhd1NxdWFyZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3EiLCJ2YWx1ZXMiLCJjb2xvcjIiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmFsbGluZ051bSIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIiwiY3VycmVudENvbHVtbiIsIm90aGVyTnVtYmVyIiwiY2hlY2tDb2xsaXNpb25XaXRoIiwiaiIsImZvdW5kQm90dG9tTGluZSIsIm1vdmUiLCJHYW1lVmlldyIsImN0eCIsInN0YXJ0IiwidGhhdCIsImRyYXciLCJzZXRJbnRlcnZhbCIsIk1vdmluZ09iamVjdCIsIm9iaiIsInZlbCIsInN0cm9rZVJlY3QiLCJsaW5lV2lkdGgiLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwic2NhbGUiLCJ2ZWMiLCJtIiwibnVtYmVyIiwiY2hpbGRDbGFzcyIsInBhcmVudENsYXNzIiwiU3Vycm9nYXRlIiwicHJvdG90eXBlIiwiY29uc3RydXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFl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cUJDLFVBQXJCLEdBQWtDSixVQUFsQztBQUNILENBTEQ7O0FBT0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnhLLElBQWpCLEM7Ozs7Ozs7Ozs7O0FDbkJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vc2NyaXB0cy9udW1iZXJzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vc2NyaXB0cy91dGlsJyk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xpY2soZSwgY2xpY2tlZFBvcywgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICBjbGlja2VkUG9zID0ge1xuICAgIHg6IGUuY2xpZW50WCAtIG9mZnNldFgsXG4gICAgeTogZS5jbGllbnRZIC0gb2Zmc2V0WSxcbiAgfTtcbiAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICByZXR1cm4gY2xpY2tlZFBvcztcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3Qgb2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICBjb25zdCBvZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDtcbiAgbGV0IGNsaWNrZWRQb3M7XG4gIGNvbnNvbGUubG9nKCdJdHMgd29ya2luZycpO1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbn0pIiwiY29uc3QgTUFUSE9QID0gW1xuICAgICcrJywgXG4gICAgJy0nLFxuICAgICcqJ1xuXVxuXG5jb25zdCBOVU1CRVJTID0gJzAxMjM0NTY3ODknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhdGlvbiB7XG4gICAgY29uc3RydWN0b3IobnVtYmVycykge1xuICAgICAgICB0aGlzLm51bWJlcnMgPSBudW1iZXJzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5yaWdodEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbigpO1xuICAgIH1cblxuICAgIHNodWZmbGVkICh1bnNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiB1bnNodWZmbGVkXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gKHsgc29ydDogTWF0aC5yYW5kb20oKSwgdmFsdWU6IGEgfSkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiBhLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH07XG5cbiAgICBjcmVhdGVFcXVhdGlvbigpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0xID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0yID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3QgbWF0aE9wID0gTUFUSE9QW01hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyKV07XG4gICAgICAgIGxldCBudW0xID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMSxcbiAgICAgICAgICAgIHN0YXJ0TnVtMSArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBsZXQgbnVtMiA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTIsXG4gICAgICAgICAgICBzdGFydE51bTIgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KG51bTEpIDwgcGFyc2VJbnQobnVtMikgJiYgbWF0aE9wID09PSAnLScpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBudW0xO1xuICAgICAgICAgICAgbnVtMSA9IG51bTI7XG4gICAgICAgICAgICBudW0yID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcXVhdGlvbiA9IGBXaGF0IGlzICR7bnVtMX0gJHttYXRoT3B9ICR7bnVtMn0/YDtcbiAgICAgICAgcmV0dXJuIGVxdWF0aW9uO1xuICAgIH1cblxuICAgIHJpZ2h0QW5zd2VyKGVxdWF0aW9uKXtcbiAgICAgICAgbGV0IGFyciA9IGVxdWF0aW9uLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBudW0xID0gcGFyc2VJbnQoYXJyWzJdKTtcbiAgICAgICAgbGV0IG51bTIgPSBwYXJzZUludChhcnJbNF0pO1xuICAgICAgICBzd2l0Y2goYXJyWzNdKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9udW1iZXJzJztcbmltcG9ydCBFcXVhdGlvbiBmcm9tICcuL2VxdWF0aW9uJztcbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgTnVtQ29sdW1ucyA9IDEwO1xuY29uc3QgRElNX1ggPSBbMCwgODAsIDE2MCwgMjQwLCAzMjAsIDQwMCwgNDgwLCA1NjAsIDY0MCwgNzIwXTtcbmNvbnN0IFdJRFRIID0gODAwO1xuY29uc3QgSEVJR0hUID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7IC8vMzIwIDI5OVxuICAgICAgICB0aGlzLm9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wOyAvLzMyMCAyOTlcbiAgICAgICAgdGhpcy5ib3R0b21saW5lID0ge307XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB0aGlzLnVzZXJDbGlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5mYWxsU3BlZWQgPSAwLjM7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gMjUwO1xuICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkID0gMDtcblxuICAgICAgICB0aGlzLkluaXRpYWxMYXllciA9IHRoaXMuSW5pdGlhbExheWVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDbGljayA9IHRoaXMucmVnaXN0ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIgPSB0aGlzLmZhbGxpbmdOdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24gPSB0aGlzLmRyYXdFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdOdW1iZXJzID0gdGhpcy5kcmF3TnVtYmVycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZXRlY3RDb2xsaXNpb24gPSB0aGlzLmRldGVjdENvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyQ2hlY2sgPSB0aGlzLnJpZ2h0QW5zd2VyQ2hlY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyID0gdGhpcy5rZXlIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlciA9IHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyID0gdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyID0gdGhpcy5zaW5nbGVEaWdpdEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUZyb21Vc2VyQ2xpY2tzID0gdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbiA9IHRoaXMuY2hlY2tTcVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuU2V0c0FmdGVyUmlnaHRBbnN3ZXJDbGljayA9IHRoaXMuU2V0c0FmdGVyUmlnaHRBbnN3ZXJDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB0aGlzLnJlZ2lzdGVyQ2xpY2soZSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4gdGhpcy5rZXlIYW5kbGVyKGUpKTtcbiAgICB9XG5cbiAgICBrZXlIYW5kbGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydEdhbWUoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5lcXVhdGlvbi5yaWdodEFuc3dlcih0aGlzLm5ld0VxdWF0aW9uKTtcbiAgICAgICAgdGhpcy5Jbml0aWFsTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5mcmFtZUlkKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lSWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICByaWdodEFuc3dlckNoZWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJpZ2h0QW5zd2VyKTtcbiAgICAgICAgbGV0IGFycjtcbiAgICAgICAgbGV0IGNvbmNhdFN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSB0aGlzLnVzZXJDbGlja3NbaV07XG4gICAgICAgICAgICBhcnIgPSBudW0uc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGFyclsyXSkgPT09IHRoaXMucmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyKG51bSk7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyArPSBhcnJbMl07XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNvbmNhdFN0cmluZykgPT09IHRoaXMucmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0c0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNldHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKXtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhpcy5uZXdFcXVhdGlvbik7XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkICs9IDAuMTtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkICs9IDAuMTtcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgLT0gMjU7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgKz0gMTtcbiAgICB9XG5cbiAgICBzaW5nbGVEaWdpdEFuc3dlcihzdHJpbmcpIHtcbiAgICAgICAgbGV0IGFyciA9IHN0cmluZy5zcGxpdChcIl9cIik7XG4gICAgICAgIGNvbnN0IGkgPSBwYXJzZUludChhcnJbMV0pO1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYm90dG9tbGluZVthcnJbMF1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1thcnJbMF1dLnNwbGljZShpIC0gMSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0RvdWJsZURpZ2l0QW5zd2VyKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlcih0aGlzLnVzZXJDbGlja3NbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRQb3MgPSB7XG4gICAgICAgICAgICB4OiBlLmNsaWVudFggLSB0aGlzLm9mZnNldFgsXG4gICAgICAgICAgICB5OiBNYXRoLmFicyhlLmNsaWVudFkgLSB0aGlzLm9mZnNldFkpIC0gMjUsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2wgPSB0aGlzLmN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soY2xpY2tlZFBvcy54KTtcbiAgICAgICAgbGV0IGZOdW1iZXJzO1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgYk51bWJlcnM7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmc7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgICAgICAgIGJOdW1iZXJzID0gW3RoaXMuYm90dG9tbGluZVtjdXJyZW50Q29sXV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbnVtID0gYk51bWJlcnNbaV07XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nID0gYCR7bnVtLnBvc1swXX1fMF8ke251bS50ZXh0fWA7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1NxUG9zaXRpb24obnVtLCBjbGlja2VkUG9zLCBjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBmTnVtYmVycyA9IHRoaXMuZmFsbGluZ051bWJlcnNbY3VycmVudENvbF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbnVtID0gZk51bWJlcnNbaV07XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nID0gYCR7bnVtLnBvc1swXX1fJHtpICsgMX1fJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJDbGlja3MpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjaGVja1NxUG9zaXRpb24obnVtLCBjbGlja2VkUG9zLCBjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IG51bS5wb3NbMF07XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gbnVtLnBvc1swXSArIDgwO1xuICAgICAgICBjb25zdCBib3R0b20gPSBudW0ucG9zWzFdO1xuICAgICAgICBjb25zdCB0b3AgPSBudW0ucG9zWzFdIC0gODA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueCA+IGxlZnQgJiZcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueCA8IHJpZ2h0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPiB0b3AgJiZcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueSA8IGJvdHRvbVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJDbGlja3MuaW5jbHVkZXMoY29uY2F0U3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Vc2VyQ2xpY2tzKGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5wdXNoKGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyKG51bSwgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIC8vIGFsZXJ0KG51bS50ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUZyb21Vc2VyQ2xpY2tzKGNvbmNhdFN0cmluZykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlckNsaWNrc1tpXSA9PT0gY29uY2F0U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdFVuc2VsZWN0TnVtYmVyKG51bSkge1xuICAgICAgICBpZiAobnVtLmNsaWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICBudW0uY2xpY2sgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bS5jbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgICAgIGlmICh4T2ZDbGlja2VkID4geCAmJiB4T2ZDbGlja2VkIDwgeCArIDgwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGhpcy5uZXdFcXVhdGlvbiwgNDAwLCAxNSk7XG4gICAgfVxuXG4gICAgSW5pdGlhbExheWVyKCkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IGk7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzRdLCBudW0pO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXdOdW1iZXIuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBuZXdOdW1iZXIuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tbGluZVtwb3NBdFhdID0gbmV3TnVtYmVyO1xuICAgICAgICAgICAgcG9zQXRYICs9IDgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd051bWJlcnMoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuYm90dG9tbGluZSkuZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcSA9IHRoaXMuYm90dG9tbGluZVtwb3NdO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzcS5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIHNxLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3IyID0gbnVtW2ldLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgbnVtW2ldLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcjIpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKSB7XG4gICAgICAgIGNvbnN0IHggPSBESU1fWFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMF07XG4gICAgICAgIGNvbnN0IHkgPSAyNTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICBmYWxsaW5nTnVtYmVyKCkge1xuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKTtcbiAgICAgICAgY29uc3QgbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTA7XG4gICAgICAgIGNvbnN0IGZhbGxpbmdOdW0gPSBuZXcgTnVtYmVycyhwb3MsIG51bSk7XG4gICAgICAgIGZhbGxpbmdOdW0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIFwiYmxhY2tcIik7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXSA9IHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXSB8fCBbXTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLnB1c2goZmFsbGluZ051bSk7XG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lSCArPSAxO1xuICAgICAgICBpZiAodGhpcy5mcmFtZUggPiB0aGlzLmZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyKCk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmRyYXdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4gdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3RDb2xsaXNpb24ocG9zLCBjdXJyZW50RmFsbGluZ1Bvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV07XG4gICAgICAgIGxldCBvdGhlck51bWJlcjtcbiAgICAgICAgaWYgKGN1cnJlbnRGYWxsaW5nUG9zaXRpb24gIT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uXTtcbiAgICAgICAgICAgIG90aGVyTnVtYmVyID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIC0gMV07XG4gICAgICAgICAgICByZXR1cm4gbnVtLmNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgbGV0IG51bWJlcnMgPSBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZXRlY3RDb2xsaXNpb24obnVtYmVyc1tpXVtqXS5wb3MsIGopKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQm90dG9tTGluZSA9IHRoaXMuYm90dG9tbGluZS5oYXNPd25Qcm9wZXJ0eShbXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLnBvc1swXSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLm1vdmUoZm91bmRCb3R0b21MaW5lLCB0aGlzLmZhbGxTcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5nYW1lLm1vdmVPYmplY3RzKCksIFxuICAgICAgICAgICAgdGhhdC5nYW1lLmRyYXcodGhhdC5jdHgpO1xuICAgICAgICB9O1xuICAgICAgICBzZXRJbnRlcnZhbChjYWxsYmFjay5iaW5kKHRoYXQpLCAyMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuICAgICAgICB0aGlzLnBvcyA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgdGhpcy52ZWwgPSBvYmpbXCJ2ZWxcIl07XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmpbXCJjb2xvclwiXTtcbiAgICAgICAgdGhpcy50ZXh0ID0gb2JqW1widGV4dFwiXTtcbiAgICAgICAgdGhpcy5kcmF3U3F1YXJlID0gdGhpcy5kcmF3U3F1YXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aCA9IHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgsIGNvbG9yKSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLnBvc1swXSArIDQwLCB0aGlzLnBvc1sxXSArIDQwKTtcbiAgICB9XG5cbiAgICBtb3ZlKGZvdW5kQm90dG9tTGluZSwgZmFsbFNwZWVkKSB7XG4gICAgICAgIGlmIChmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gMzkzKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIGlmICghZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDQ3Mykge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3NbMV0gKz0gZmFsbFNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb25XaXRoKG90aGVyTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1sxXSA+PSBvdGhlck51bWJlci5wb3NbMV0gLSA4MDtcbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbi8vIGNvbnN0IENPTE9SUyA9IHtcbi8vICAgMDogXCIjQ0NGRjAwXCIsXG4vLyAgIDE6IFwiI2ZmMDAwMFwiLFxuLy8gICAyOiBcIiNmZjgwMDBcIixcbi8vICAgMzogXCIjZmZmZjAwXCIsXG4vLyAgIDQ6IFwiIzAwZmY4MFwiLFxuLy8gICA1OiBcIiNGQkFFRDJcIixcbi8vICAgNjogXCIjRkY1MzQ5XCIsXG4vLyAgIDc6IFwiIzAwZmZjY1wiLFxuLy8gICA4OiBcIiMwMGYyZmZcIixcbi8vICAgOTogXCIjZmYwMDczXCIsXG4vLyB9O1xuXG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI2NjZmYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjZmJhZWQyXCIsXG4gIDY6IFwiI2ZmNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmNsaWNrID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKDIpLFxuICAgICAgICAgIGNvbG9yOiBDT0xPUlNbdGhpcy50ZXh0XSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgIH07XG4gICAgICAgIE1vdmluZ09iamVjdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfVxufTtcblxuVXRpbC5pbmhlcml0cyhOdW1iZXJzLCBNb3ZpbmdPYmplY3QpOyIsImNvbnN0IFV0aWwgPSB7XG4gICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gVXRpbC5zY2FsZShbMCwgNV0sIGxlbmd0aCk7XG4gICAgfSxcbiAgICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgICAgcmV0dXJuIFswLCB2ZWNbMV0qIG1dXG4gICAgfSxcbiAgICBudW1iZXIobnVtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBudW0pXG4gICAgfVxufVxuXG5VdGlsLmluaGVyaXRzID0gZnVuY3Rpb24oY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTdXJyb2dhdGUoKSB7fTtcbiAgICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50Q2xhc3MucHJvdG90eXBlO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnV0b3IgPSBjaGlsZENsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==