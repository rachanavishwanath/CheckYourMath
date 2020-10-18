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
    this.StepsAfterRightAnswerClick = this.StepsAfterRightAnswerClick.bind(this);
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
      this.context.clearRect(0, 0, WIDTH, HEIGHT);
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
          this.StepsAfterRightAnswerClick();
        } else {
          concatString += arr[2];

          if (parseInt(concatString) === this.rightAnswer) {
            this.checkDoubleDigitAnswer();
            this.StepsAfterRightAnswerClick();
          }
        }
      }
    }
  }, {
    key: "StepsAfterRightAnswerClick",
    value: function StepsAfterRightAnswerClick() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwicmVnaXN0ZXJDbGljayIsImUiLCJjbGlja2VkUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiYWxlcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsImZpbGxTdHlsZSIsImZhbGxTcGVlZCIsImZyZXF1ZW5jeSIsIm51bU9mRXF1YXRpb25zU29sdmVkIiwiSW5pdGlhbExheWVyIiwiZmFsbGluZ051bWJlciIsImRyYXdFcXVhdGlvbiIsImRyYXdOdW1iZXJzIiwiYW5pbWF0ZSIsImRldGVjdENvbGxpc2lvbiIsInJpZ2h0QW5zd2VyQ2hlY2siLCJrZXlIYW5kbGVyIiwiZ2FtZU92ZXIiLCJjaGVja0RvdWJsZURpZ2l0QW5zd2VyIiwic2VsZWN0VW5zZWxlY3ROdW1iZXIiLCJzaW5nbGVEaWdpdEFuc3dlciIsInJlbW92ZUZyb21Vc2VyQ2xpY2tzIiwiY2hlY2tTcVBvc2l0aW9uIiwiU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsInJlc3RhcnRHYW1lIiwiY2xlYXJSZWN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJjb25jYXRTdHJpbmciLCJpIiwibnVtIiwic3RyaW5nIiwic3BsaWNlIiwiYWJzIiwiY3VycmVudENvbCIsImN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2siLCJmTnVtYmVycyIsImJOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJwb3MiLCJ0ZXh0IiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9wIiwiaW5jbHVkZXMiLCJwdXNoIiwiY2xpY2siLCJ4T2ZDbGlja2VkIiwic3Ryb2tlU3R5bGUiLCJmb250Iiwic3Ryb2tlVGV4dCIsInBvc0F0WCIsIm5ld051bWJlciIsIk51bWJlcnMiLCJjb2xvciIsImRyYXdTcXVhcmUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNxIiwidmFsdWVzIiwiY29sb3IyIiwicmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycyIsImZhbGxpbmdOdW0iLCJtb3ZlT2JqZWN0cyIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudEZhbGxpbmdQb3NpdGlvbiIsImN1cnJlbnRDb2x1bW4iLCJvdGhlck51bWJlciIsImNoZWNrQ29sbGlzaW9uV2l0aCIsImoiLCJmb3VuZEJvdHRvbUxpbmUiLCJtb3ZlIiwiR2FtZVZpZXciLCJjdHgiLCJzdGFydCIsInRoYXQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJzdHJva2VSZWN0IiwibGluZVdpZHRoIiwiZmlsbFJlY3QiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsIkNPTE9SUyIsInJhbmRvbVZlYyIsImNhbGwiLCJpbmhlcml0cyIsInNjYWxlIiwidmVjIiwibSIsIm51bWJlciIsImNoaWxkQ2xhc3MiLCJwYXJlbnRDbGFzcyIsIlN1cnJvZ2F0ZSIsInByb3RvdHlwZSIsImNvbnN0cnV0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFB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O0FBQ0FILFlBQVUsQ0FBQ0csU0FBWCxHQUF1QixJQUFJRCxTQUFKLEVBQXZCO0FBQ0FGLFlBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsVUFBckIsR0FBa0NKLFVBQWxDO0FBQ0gsQ0FMRDs7QUFPQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCeEssSUFBakIsQzs7Ozs7Ozs7Ozs7QUNuQkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9zY3JpcHRzL251bWJlcnMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuXG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi9zY3JpcHRzL3V0aWwnKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJDbGljayhlLCBjbGlja2VkUG9zLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gIGNsaWNrZWRQb3MgPSB7XG4gICAgeDogZS5jbGllbnRYIC0gb2Zmc2V0WCxcbiAgICB5OiBlLmNsaWVudFkgLSBvZmZzZXRZLFxuICB9O1xuICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gIHJldHVybiBjbGlja2VkUG9zO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBvZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7XG4gIGNvbnN0IG9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICBsZXQgY2xpY2tlZFBvcztcbiAgY29uc29sZS5sb2coJ0l0cyB3b3JraW5nJyk7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMuY3JlYXRlRXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLnJpZ2h0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKCkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMSkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICByZXR1cm4gZXF1YXRpb247XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLm9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDsgLy8zMjAgMjk5XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7IC8vMzIwIDI5OVxuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcXVhdGlvbiA9IG5ldyBFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDAuMztcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAyNTA7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgPSAwO1xuXG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbiA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXJDaGVjayA9IHRoaXMucmlnaHRBbnN3ZXJDaGVjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleUhhbmRsZXIgPSB0aGlzLmtleUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyID0gdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIgPSB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIgPSB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVVzZXJDbGlja3MgPSB0aGlzLnJlbW92ZUZyb21Vc2VyQ2xpY2tzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tTcVBvc2l0aW9uID0gdGhpcy5jaGVja1NxUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljayA9IHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4gdGhpcy5yZWdpc3RlckNsaWNrKGUpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHRoaXMua2V5SGFuZGxlcihlKSk7XG4gICAgfVxuXG4gICAga2V5SGFuZGxlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0R2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhpcy5uZXdFcXVhdGlvbik7XG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyKCk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVJZCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXJDaGVjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yaWdodEFuc3dlcik7XG4gICAgICAgIGxldCBhcnI7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gdGhpcy51c2VyQ2xpY2tzW2ldO1xuICAgICAgICAgICAgYXJyID0gbnVtLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChhcnJbMl0pID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlcihudW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nICs9IGFyclsyXTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY29uY2F0U3RyaW5nKSA9PT0gdGhpcy5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCl7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCArPSAwLjE7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCArPSAwLjE7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5IC09IDI1O1xuICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkICs9IDE7XG4gICAgfVxuXG4gICAgc2luZ2xlRGlnaXRBbnN3ZXIoc3RyaW5nKSB7XG4gICAgICAgIGxldCBhcnIgPSBzdHJpbmcuc3BsaXQoXCJfXCIpO1xuICAgICAgICBjb25zdCBpID0gcGFyc2VJbnQoYXJyWzFdKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJvdHRvbWxpbmVbYXJyWzBdXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbYXJyWzBdXS5zcGxpY2UoaSAtIDEsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIodGhpcy51c2VyQ2xpY2tzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgeTogTWF0aC5hYnMoZS5jbGllbnRZIC0gdGhpcy5vZmZzZXRZKSAtIDI1LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sID0gdGhpcy5jdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKGNsaWNrZWRQb3MueCk7XG4gICAgICAgIGxldCBmTnVtYmVycztcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IGJOdW1iZXJzO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBiTnVtYmVycyA9IFt0aGlzLmJvdHRvbWxpbmVbY3VycmVudENvbF1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGJOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XzBfJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVycy5oYXNPd25Qcm9wZXJ0eShjdXJyZW50Q29sKSkge1xuICAgICAgICAgICAgZk51bWJlcnMgPSB0aGlzLmZhbGxpbmdOdW1iZXJzW2N1cnJlbnRDb2xdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGZOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XyR7aSArIDF9XyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gbnVtLnBvc1sxXTtcbiAgICAgICAgY29uc3QgdG9wID0gbnVtLnBvc1sxXSAtIDgwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPiBsZWZ0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy55ID4gdG9wICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPCBib3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzLmluY2x1ZGVzKGNvbmNhdFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3MucHVzaChjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlcihudW0sIGNvbmNhdFN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJDbGlja3NbaV0gPT09IGNvbmNhdFN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RVbnNlbGVjdE51bWJlcihudW0pIHtcbiAgICAgICAgaWYgKG51bS5jbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbnVtLmNsaWNrID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW0uY2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3VycmVudENvbHVtbkZvclVzZXJDbGljayh4T2ZDbGlja2VkKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICAgICAgICBpZiAoeE9mQ2xpY2tlZCA+IHggJiYgeE9mQ2xpY2tlZCA8IHggKyA4MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeCArPSA4MDtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFcXVhdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMjBweCBWZXJkYW5hXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KHRoaXMubmV3RXF1YXRpb24sIDQwMCwgMTUpO1xuICAgIH1cblxuICAgIEluaXRpYWxMYXllcigpIHtcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IHBvc0F0WCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtQ29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICBudW0gPSBpO1xuICAgICAgICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDc0XSwgbnVtKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3TnVtYmVyLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgbmV3TnVtYmVyLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbWxpbmVbcG9zQXRYXSA9IG5ld051bWJlcjtcbiAgICAgICAgICAgIHBvc0F0WCArPSA4MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdOdW1iZXJzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmJvdHRvbWxpbmUpLmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3EgPSB0aGlzLmJvdHRvbWxpbmVbcG9zXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3EuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBzcS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yMiA9IG51bVtpXS5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIG51bVtpXS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IyKTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgICAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgICAgICBjb25zdCB5ID0gMjU7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgZmFsbGluZ051bWJlcigpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgICAgICBmYWxsaW5nTnVtLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBcImJsYWNrXCIpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gfHwgW107XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5wdXNoKGZhbGxpbmdOdW0pO1xuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLmxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVIID4gdGhpcy5mcmVxdWVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycygpO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKHBvcywgY3VycmVudEZhbGxpbmdQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dO1xuICAgICAgICBsZXQgb3RoZXJOdW1iZXI7XG4gICAgICAgIGlmIChjdXJyZW50RmFsbGluZ1Bvc2l0aW9uICE9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbl07XG4gICAgICAgICAgICBvdGhlck51bWJlciA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuIG51bS5jaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIGxldCBudW1iZXJzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0ZWN0Q29sbGlzaW9uKG51bWJlcnNbaV1bal0ucG9zLCBqKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvdHRvbUxpbmUgPSB0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5wb3NbMF0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5tb3ZlKGZvdW5kQm90dG9tTGluZSwgdGhpcy5mYWxsU3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbldpdGggPSB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoY3R4LCBjb2xvcikge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0gKyA0MCwgdGhpcy5wb3NbMV0gKyA0MCk7XG4gICAgfVxuXG4gICAgbW92ZShmb3VuZEJvdHRvbUxpbmUsIGZhbGxTcGVlZCkge1xuICAgICAgICBpZiAoZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDM5Mykge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSBpZiAoIWZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSA0NzMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9zWzFdICs9IGZhbGxTcGVlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NbMV0gPj0gb3RoZXJOdW1iZXIucG9zWzFdIC0gODA7XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG4vLyBjb25zdCBDT0xPUlMgPSB7XG4vLyAgIDA6IFwiI0NDRkYwMFwiLFxuLy8gICAxOiBcIiNmZjAwMDBcIixcbi8vICAgMjogXCIjZmY4MDAwXCIsXG4vLyAgIDM6IFwiI2ZmZmYwMFwiLFxuLy8gICA0OiBcIiMwMGZmODBcIixcbi8vICAgNTogXCIjRkJBRUQyXCIsXG4vLyAgIDY6IFwiI0ZGNTM0OVwiLFxuLy8gICA3OiBcIiMwMGZmY2NcIixcbi8vICAgODogXCIjMDBmMmZmXCIsXG4vLyAgIDk6IFwiI2ZmMDA3M1wiLFxuLy8gfTtcblxuY29uc3QgQ09MT1JTID0ge1xuICAwOiBcIiNjY2ZmMDBcIixcbiAgMTogXCIjZmYwMDAwXCIsXG4gIDI6IFwiI2ZmODAwMFwiLFxuICAzOiBcIiNmZmZmMDBcIixcbiAgNDogXCIjMDBmZjgwXCIsXG4gIDU6IFwiI2ZiYWVkMlwiLFxuICA2OiBcIiNmZjUzNDlcIixcbiAgNzogXCIjMDBmZmNjXCIsXG4gIDg6IFwiIzAwZjJmZlwiLFxuICA5OiBcIiNmZjAwNzNcIixcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHRleHQpIHtcbiAgICAgICAgLy8gbnVtYmVyIGluc2lkZSBzcXVhcmVcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5jbGljayA9IGZhbHNlO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=