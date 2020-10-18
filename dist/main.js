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
    this.gamePaused = false;
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
    document.getElementsByClassName("pause-play")[0].addEventListener("click", function (e) {
      e.preventDefault();
      _this.gamePaused = !_this.gamePaused;

      if (!_this.gamePaused) {
        _this.animate();
      }

      ;
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
      this.bottomline = {};
      this.fallingNumbers = {};
      this.frameH = 0;
      this.userClicks = [];
      this.fallSpeed = 0.3;
      this.frequency = 250;
      this.numOfEquationsSolved = 0;
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
      num.click = !num.click;
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

      if (this.gamePaused) {
        return;
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwiY3JlYXRlRXF1YXRpb24iLCJiaW5kIiwicmlnaHRBbnN3ZXIiLCJuZXdFcXVhdGlvbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJsZW5ndGgiLCJyb3VuZCIsInN0YXJ0TnVtMSIsInN0YXJ0TnVtMiIsIm1hdGhPcCIsIm51bTEiLCJzaHVmZmxlZCIsInNsaWNlIiwibnVtMiIsInBhcnNlSW50IiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJib3R0b21saW5lIiwiZmFsbGluZ051bWJlcnMiLCJmcmFtZUgiLCJ1c2VyQ2xpY2tzIiwicGxheWluZyIsImZyYW1lSWQiLCJmaWxsU3R5bGUiLCJmYWxsU3BlZWQiLCJmcmVxdWVuY3kiLCJudW1PZkVxdWF0aW9uc1NvbHZlZCIsImdhbWVQYXVzZWQiLCJJbml0aWFsTGF5ZXIiLCJmYWxsaW5nTnVtYmVyIiwiZHJhd0VxdWF0aW9uIiwiZHJhd051bWJlcnMiLCJhbmltYXRlIiwiZGV0ZWN0Q29sbGlzaW9uIiwicmlnaHRBbnN3ZXJDaGVjayIsImtleUhhbmRsZXIiLCJnYW1lT3ZlciIsImNoZWNrRG91YmxlRGlnaXRBbnN3ZXIiLCJzZWxlY3RVbnNlbGVjdE51bWJlciIsInNpbmdsZURpZ2l0QW5zd2VyIiwicmVtb3ZlRnJvbVVzZXJDbGlja3MiLCJjaGVja1NxUG9zaXRpb24iLCJTdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljayIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsInJlc3RhcnRHYW1lIiwiY2xlYXJSZWN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJjb25jYXRTdHJpbmciLCJpIiwibnVtIiwic3RyaW5nIiwic3BsaWNlIiwiYWJzIiwiY3VycmVudENvbCIsImN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2siLCJmTnVtYmVycyIsImJOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJwb3MiLCJ0ZXh0IiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9wIiwiaW5jbHVkZXMiLCJwdXNoIiwiY2xpY2siLCJ4T2ZDbGlja2VkIiwic3Ryb2tlU3R5bGUiLCJmb250Iiwic3Ryb2tlVGV4dCIsInBvc0F0WCIsIm5ld051bWJlciIsIk51bWJlcnMiLCJjb2xvciIsImRyYXdTcXVhcmUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNxIiwidmFsdWVzIiwiY29sb3IyIiwicmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycyIsImZhbGxpbmdOdW0iLCJtb3ZlT2JqZWN0cyIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudEZhbGxpbmdQb3NpdGlvbiIsImN1cnJlbnRDb2x1bW4iLCJvdGhlck51bWJlciIsImNoZWNrQ29sbGlzaW9uV2l0aCIsImoiLCJmb3VuZEJvdHRvbUxpbmUiLCJtb3ZlIiwiR2FtZVZpZXciLCJjdHgiLCJzdGFydCIsInRoYXQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJzdHJva2VSZWN0IiwibGluZVdpZHRoIiwiZmlsbFJlY3QiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsIkNPTE9SUyIsInJhbmRvbVZlYyIsImNhbGwiLCJpbmhlcml0cyIsInNjYWxlIiwidmVjIiwibSIsIm51bWJlciIsImNoaWxkQ2xhc3MiLCJwYXJlbnRDbGFzcyIsIlN1cnJvZ2F0ZSIsInByb3RvdHlwZSIsImNvbnN0cnV0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsNkNBQUQsQ0FBcEI7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEJDLFVBQTFCLEVBQXNDQyxPQUF0QyxFQUErQ0MsT0FBL0MsRUFBd0Q7QUFDdERGLFlBQVUsR0FBRztBQUNYRyxLQUFDLEVBQUVKLENBQUMsQ0FBQ0ssT0FBRixHQUFZSCxPQURKO0FBRVhJLEtBQUMsRUFBRU4sQ0FBQyxDQUFDTyxPQUFGLEdBQVlKO0FBRkosR0FBYjtBQUlBSyxPQUFLLHNCQUFlUCxVQUFVLENBQUNHLENBQTFCLGNBQStCSCxVQUFVLENBQUNLLENBQTFDLEVBQUw7QUFDQSxTQUFPTCxVQUFQO0FBQ0Q7O0FBRURRLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQWhCO0FBQ0EsTUFBTVosT0FBTyxHQUFHUyxNQUFNLENBQUNJLFVBQXZCO0FBQ0EsTUFBTVosT0FBTyxHQUFHUSxNQUFNLENBQUNLLFNBQXZCO0FBQ0EsTUFBSWYsVUFBSjtBQUNBZ0IsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJQyxxREFBSixDQUFTVCxNQUFULENBQWI7QUFDRCxDQVJELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLElBQU1VLE1BQU0sR0FBRyxDQUNYLEdBRFcsRUFFWCxHQUZXLEVBR1gsR0FIVyxDQUFmO0FBTUEsSUFBTUMsT0FBTyxHQUFHLFlBQWhCOztJQUVxQkMsUTtBQUNqQixvQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNBLFNBQUtFLFdBQUwsR0FBbUIsS0FBS0gsY0FBTCxFQUFuQjtBQUNIOzs7OzZCQUVTSSxVLEVBQVk7QUFDbEIsYUFBT0EsVUFBVSxDQUNSQyxLQURGLENBQ1EsRUFEUixFQUVFQyxHQUZGLENBRU0sVUFBQ0MsQ0FBRDtBQUFBLGVBQVE7QUFBRUMsY0FBSSxFQUFFQyxJQUFJLENBQUNDLE1BQUwsRUFBUjtBQUF1QkMsZUFBSyxFQUFFSjtBQUE5QixTQUFSO0FBQUEsT0FGTixFQUdFQyxJQUhGLENBR08sVUFBQ0QsQ0FBRCxFQUFJSyxDQUFKO0FBQUEsZUFBVUwsQ0FBQyxDQUFDQyxJQUFGLEdBQVNJLENBQUMsQ0FBQ0osSUFBckI7QUFBQSxPQUhQLEVBSUVGLEdBSkYsQ0FJTSxVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDSSxLQUFUO0FBQUEsT0FKTixFQUtFRSxJQUxGLENBS08sRUFMUCxDQUFQO0FBTUg7OztxQ0FFZ0I7QUFDYixVQUFNQyxNQUFNLEdBQUdMLElBQUksQ0FBQ00sS0FBTCxDQUFZTixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBakIsR0FBdUIsQ0FBbEMsSUFBdUMsQ0FBdEQ7QUFDQSxVQUFNTSxTQUFTLEdBQUdQLElBQUksQ0FBQ00sS0FBTCxDQUFZTixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBakIsR0FBdUIsQ0FBbEMsSUFBdUMsQ0FBekQ7QUFDQSxVQUFNTyxTQUFTLEdBQUdSLElBQUksQ0FBQ00sS0FBTCxDQUFZTixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBakIsR0FBdUIsQ0FBbEMsSUFBdUMsQ0FBekQ7QUFDQSxVQUFNUSxNQUFNLEdBQUd0QixNQUFNLENBQUNhLElBQUksQ0FBQ00sS0FBTCxDQUFZTixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBakIsR0FBdUIsQ0FBbEMsQ0FBRCxDQUFyQjtBQUNBLFVBQUlTLElBQUksR0FBRyxLQUFLQyxRQUFMLENBQWN2QixPQUFkLEVBQXVCd0IsS0FBdkIsQ0FDUEwsU0FETyxFQUVQQSxTQUFTLEdBQUdGLE1BRkwsQ0FBWDtBQUlBLFVBQUlRLElBQUksR0FBRyxLQUFLRixRQUFMLENBQWN2QixPQUFkLEVBQXVCd0IsS0FBdkIsQ0FDUEosU0FETyxFQUVQQSxTQUFTLEdBQUdILE1BRkwsQ0FBWDs7QUFJQSxVQUFJUyxRQUFRLENBQUNKLElBQUQsQ0FBUixHQUFpQkksUUFBUSxDQUFDRCxJQUFELENBQXpCLElBQW1DSixNQUFNLEtBQUssR0FBbEQsRUFBdUQ7QUFDbkQsWUFBTU0sSUFBSSxHQUFHTCxJQUFiO0FBQ0FBLFlBQUksR0FBR0csSUFBUDtBQUNBQSxZQUFJLEdBQUdFLElBQVA7QUFDSDs7QUFDRCxVQUFNQyxRQUFRLHFCQUFjTixJQUFkLGNBQXNCRCxNQUF0QixjQUFnQ0ksSUFBaEMsTUFBZDtBQUNBLGFBQU9HLFFBQVA7QUFDSDs7O2dDQUVXQSxRLEVBQVM7QUFDakIsVUFBSUMsR0FBRyxHQUFHRCxRQUFRLENBQUNwQixLQUFULENBQWUsR0FBZixDQUFWO0FBQ0EsVUFBSWMsSUFBSSxHQUFHSSxRQUFRLENBQUNHLEdBQUcsQ0FBQyxDQUFELENBQUosQ0FBbkI7QUFDQSxVQUFJSixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLENBQUQsQ0FBSixDQUFuQjs7QUFDQSxjQUFPQSxHQUFHLENBQUMsQ0FBRCxDQUFWO0FBQ0ksYUFBSyxHQUFMO0FBQ0ksaUJBQU9QLElBQUksR0FBR0csSUFBZDs7QUFDSixhQUFLLEdBQUw7QUFDSSxpQkFBT0gsSUFBSSxHQUFHRyxJQUFkOztBQUNKLGFBQUssR0FBTDtBQUNJLGlCQUFPSCxJQUFJLEdBQUdHLElBQWQ7QUFOUjtBQVFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNETDtBQUNBO0FBQ0E7O0FBQ0EsSUFBTWxELElBQUksR0FBR0MsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFFQSxJQUFNc0QsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxHQUFSLEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixHQUF2QixFQUE0QixHQUE1QixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0QyxFQUEyQyxHQUEzQyxDQUFkO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLEdBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsR0FBZjs7SUFFcUJuQyxJO0FBQ2pCLGdCQUFZVCxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLFNBQUtFLE9BQUwsR0FBZUYsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQWY7QUFDQSxTQUFLWixPQUFMLEdBQWVTLE1BQU0sQ0FBQ0ksVUFBdEIsQ0FGZ0IsQ0FFa0I7O0FBQ2xDLFNBQUtaLE9BQUwsR0FBZVEsTUFBTSxDQUFDSyxTQUF0QixDQUhnQixDQUdpQjs7QUFDakMsU0FBS3dDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtYLFFBQUwsR0FBZ0IsSUFBSTNCLGlEQUFKLEVBQWhCO0FBQ0EsU0FBS0ssV0FBTCxHQUFtQixJQUFuQjtBQUNBLFNBQUtELFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxTQUFLbUMsU0FBTCxHQUFpQixPQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsR0FBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEdBQWpCO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsQ0FBNUI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBRUEsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCekMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSxTQUFLM0IsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CMkIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxTQUFLMEMsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CMUMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxTQUFLMkMsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCM0MsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSxTQUFLNEMsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCNUMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLNkMsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYTdDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLFNBQUs4QyxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUI5QyxJQUFyQixDQUEwQixJQUExQixDQUF2QjtBQUNBLFNBQUsrQyxnQkFBTCxHQUF3QixLQUFLQSxnQkFBTCxDQUFzQi9DLElBQXRCLENBQTJCLElBQTNCLENBQXhCO0FBQ0EsU0FBS2dELFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQmhELElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0EsU0FBS2lELFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjakQsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtrRCxzQkFBTCxHQUE4QixLQUFLQSxzQkFBTCxDQUE0QmxELElBQTVCLENBQWlDLElBQWpDLENBQTlCO0FBQ0EsU0FBS21ELG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCbkQsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBNUI7QUFDQSxTQUFLb0QsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJwRCxJQUF2QixDQUE0QixJQUE1QixDQUF6QjtBQUNBLFNBQUtxRCxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQnJELElBQTFCLENBQStCLElBQS9CLENBQTVCO0FBQ0EsU0FBS3NELGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQnRELElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsU0FBS3VELDBCQUFMLEdBQWtDLEtBQUtBLDBCQUFMLENBQWdDdkQsSUFBaEMsQ0FBcUMsSUFBckMsQ0FBbEM7QUFFQWYsVUFBTSxDQUFDRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDVixDQUFEO0FBQUEsYUFBTyxLQUFJLENBQUNELGFBQUwsQ0FBbUJDLENBQW5CLENBQVA7QUFBQSxLQUFyQztBQUNBUyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUNWLENBQUQ7QUFBQSxhQUFPLEtBQUksQ0FBQzBFLFVBQUwsQ0FBZ0IxRSxDQUFoQixDQUFQO0FBQUEsS0FBckM7QUFFQVMsWUFBUSxDQUNMeUUsc0JBREgsQ0FDMEIsWUFEMUIsRUFDd0MsQ0FEeEMsRUFFR3hFLGdCQUZILENBRW9CLE9BRnBCLEVBRTZCLFVBQUNWLENBQUQsRUFBTztBQUNoQ0EsT0FBQyxDQUFDbUYsY0FBRjtBQUNBLFdBQUksQ0FBQ2pCLFVBQUwsR0FBa0IsQ0FBQyxLQUFJLENBQUNBLFVBQXhCOztBQUNBLFVBQUksQ0FBQyxLQUFJLENBQUNBLFVBQVYsRUFBc0I7QUFBQyxhQUFJLENBQUNLLE9BQUw7QUFBZTs7QUFBQTtBQUN2QyxLQU5IO0FBUUg7Ozs7K0JBRVV2RSxDLEVBQUc7QUFDVkEsT0FBQyxDQUFDbUYsY0FBRjs7QUFDQSxVQUFJbkYsQ0FBQyxDQUFDb0YsR0FBRixJQUFTLE9BQWIsRUFBc0I7QUFDbEIsYUFBS3hCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsYUFBS3lCLFdBQUw7QUFDSDtBQUNKOzs7a0NBRWE7QUFDVixXQUFLeEUsT0FBTCxDQUFheUUsU0FBYixDQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QmhDLEtBQTdCLEVBQW9DQyxNQUFwQztBQUNBOUMsY0FBUSxDQUFDRyxjQUFULENBQXdCLFdBQXhCLEVBQXFDMkUsU0FBckMsQ0FBK0NDLEdBQS9DLENBQW1ELFFBQW5EO0FBQ0EvRSxjQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMyRSxTQUFuQyxDQUE2Q0MsR0FBN0MsQ0FBaUQsUUFBakQ7QUFDQSxXQUFLNUQsV0FBTCxHQUFtQixLQUFLc0IsUUFBTCxDQUFjekIsY0FBZCxFQUFuQjtBQUNBLFdBQUtFLFdBQUwsR0FBbUIsS0FBS3VCLFFBQUwsQ0FBY3ZCLFdBQWQsQ0FBMEIsS0FBS0MsV0FBL0IsQ0FBbkI7QUFDQSxXQUFLNEIsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFdBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxXQUFLSSxTQUFMLEdBQWlCLEdBQWpCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixHQUFqQjtBQUNBLFdBQUtDLG9CQUFMLEdBQTRCLENBQTVCO0FBQ0EsV0FBS0UsWUFBTDtBQUNBLFdBQUtDLGFBQUw7QUFDQSxXQUFLRyxPQUFMO0FBQ0g7OzsrQkFFVTtBQUNQLFVBQUksS0FBS1YsT0FBVCxFQUFrQjtBQUNkNEIsNEJBQW9CLENBQUMsS0FBSzVCLE9BQU4sQ0FBcEI7QUFDSDs7QUFDRCxXQUFLRCxPQUFMLEdBQWUsS0FBZjtBQUNBLFdBQUsvQyxPQUFMLENBQWF5RSxTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCaEMsS0FBN0IsRUFBb0NDLE1BQXBDO0FBQ0E5QyxjQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMyRSxTQUFuQyxDQUE2Q0csTUFBN0MsQ0FBb0QsUUFBcEQ7QUFDSDs7O3VDQUVrQjtBQUNmekUsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS1MsV0FBakI7QUFDQSxVQUFJd0IsR0FBSjtBQUNBLFVBQUl3QyxZQUFZLEdBQUcsRUFBbkI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtqQyxVQUFMLENBQWdCcEIsTUFBcEMsRUFBNENxRCxDQUFDLEVBQTdDLEVBQWlEO0FBQzdDLFlBQU1DLEdBQUcsR0FBRyxLQUFLbEMsVUFBTCxDQUFnQmlDLENBQWhCLENBQVo7QUFDQXpDLFdBQUcsR0FBRzBDLEdBQUcsQ0FBQy9ELEtBQUosQ0FBVSxHQUFWLENBQU47O0FBQ0EsWUFBSWtCLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLENBQUQsQ0FBSixDQUFSLEtBQXFCLEtBQUt4QixXQUE5QixFQUEyQztBQUN2QyxlQUFLbUQsaUJBQUwsQ0FBdUJlLEdBQXZCO0FBQ0EsZUFBS1osMEJBQUw7QUFDSCxTQUhELE1BR087QUFDSFUsc0JBQVksSUFBSXhDLEdBQUcsQ0FBQyxDQUFELENBQW5COztBQUNBLGNBQUlILFFBQVEsQ0FBQzJDLFlBQUQsQ0FBUixLQUEyQixLQUFLaEUsV0FBcEMsRUFBaUQ7QUFDN0MsaUJBQUtpRCxzQkFBTDtBQUNBLGlCQUFLSywwQkFBTDtBQUNIO0FBQ0o7QUFDSjtBQUNKOzs7aURBRTJCO0FBQ3hCLFdBQUtyRCxXQUFMLEdBQW1CLEtBQUtzQixRQUFMLENBQWN6QixjQUFkLEVBQW5CO0FBQ0EsV0FBS0UsV0FBTCxHQUFtQixLQUFLdUIsUUFBTCxDQUFjdkIsV0FBZCxDQUEwQixLQUFLQyxXQUEvQixDQUFuQjtBQUNBLFdBQUttQyxTQUFMLElBQWtCLEdBQWxCO0FBQ0EsV0FBS0osVUFBTCxHQUFrQixFQUFsQjtBQUNBLFdBQUtJLFNBQUwsSUFBa0IsR0FBbEI7QUFDQSxXQUFLQyxTQUFMLElBQWtCLEVBQWxCO0FBQ0EsV0FBS0Msb0JBQUwsSUFBNkIsQ0FBN0I7QUFDSDs7O3NDQUVpQjZCLE0sRUFBUTtBQUN0QixVQUFJM0MsR0FBRyxHQUFHMkMsTUFBTSxDQUFDaEUsS0FBUCxDQUFhLEdBQWIsQ0FBVjtBQUNBLFVBQU04RCxDQUFDLEdBQUc1QyxRQUFRLENBQUNHLEdBQUcsQ0FBQyxDQUFELENBQUosQ0FBbEI7O0FBQ0EsVUFBSXlDLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDVCxlQUFPLEtBQUtwQyxVQUFMLENBQWdCTCxHQUFHLENBQUMsQ0FBRCxDQUFuQixDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS00sY0FBTCxDQUFvQk4sR0FBRyxDQUFDLENBQUQsQ0FBdkIsRUFBNEI0QyxNQUE1QixDQUFtQ0gsQ0FBQyxHQUFHLENBQXZDLEVBQTBDLENBQTFDO0FBQ0g7QUFDSjs7OzZDQUV3QjtBQUNyQixXQUFLLElBQUlBLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2pDLFVBQUwsQ0FBZ0JwQixNQUFwQyxFQUE0Q3FELENBQUMsRUFBN0MsRUFBaUQ7QUFDN0MsYUFBS2QsaUJBQUwsQ0FBdUIsS0FBS25CLFVBQUwsQ0FBZ0JpQyxDQUFoQixDQUF2QjtBQUNIO0FBQ0o7OztrQ0FFYTVGLEMsRUFBRztBQUNiLFVBQU1DLFVBQVUsR0FBRztBQUNmRyxTQUFDLEVBQUVKLENBQUMsQ0FBQ0ssT0FBRixHQUFZLEtBQUtILE9BREw7QUFFZkksU0FBQyxFQUFFNEIsSUFBSSxDQUFDOEQsR0FBTCxDQUFTaEcsQ0FBQyxDQUFDTyxPQUFGLEdBQVksS0FBS0osT0FBMUIsSUFBcUM7QUFGekIsT0FBbkI7QUFJQSxVQUFNOEYsVUFBVSxHQUFHLEtBQUtDLHlCQUFMLENBQStCakcsVUFBVSxDQUFDRyxDQUExQyxDQUFuQjtBQUNBLFVBQUkrRixRQUFKO0FBQ0EsVUFBSU4sR0FBSjtBQUNBLFVBQUlPLFFBQUo7QUFDQSxVQUFJVCxZQUFKOztBQUNBLFVBQUksS0FBS25DLFVBQUwsQ0FBZ0I2QyxjQUFoQixDQUErQkosVUFBL0IsQ0FBSixFQUFnRDtBQUM1Q0csZ0JBQVEsR0FBRyxDQUFDLEtBQUs1QyxVQUFMLENBQWdCeUMsVUFBaEIsQ0FBRCxDQUFYOztBQUNBLGFBQUssSUFBSUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1EsUUFBUSxDQUFDN0QsTUFBN0IsRUFBcUNxRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDQyxhQUFHLEdBQUdPLFFBQVEsQ0FBQ1IsQ0FBRCxDQUFkO0FBQ0FELHNCQUFZLGFBQU1FLEdBQUcsQ0FBQ1MsR0FBSixDQUFRLENBQVIsQ0FBTixnQkFBc0JULEdBQUcsQ0FBQ1UsSUFBMUIsQ0FBWjtBQUNBLGVBQUt2QixlQUFMLENBQXFCYSxHQUFyQixFQUEwQjVGLFVBQTFCLEVBQXNDMEYsWUFBdEM7QUFDSDtBQUNKOztBQUNELFVBQUksS0FBS2xDLGNBQUwsQ0FBb0I0QyxjQUFwQixDQUFtQ0osVUFBbkMsQ0FBSixFQUFvRDtBQUNoREUsZ0JBQVEsR0FBRyxLQUFLMUMsY0FBTCxDQUFvQndDLFVBQXBCLENBQVg7O0FBQ0EsYUFBSyxJQUFJTCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHTyxRQUFRLENBQUM1RCxNQUE3QixFQUFxQ3FELEVBQUMsRUFBdEMsRUFBMEM7QUFDdENDLGFBQUcsR0FBR00sUUFBUSxDQUFDUCxFQUFELENBQWQ7QUFDQUQsc0JBQVksYUFBTUUsR0FBRyxDQUFDUyxHQUFKLENBQVEsQ0FBUixDQUFOLGNBQW9CVixFQUFDLEdBQUcsQ0FBeEIsY0FBNkJDLEdBQUcsQ0FBQ1UsSUFBakMsQ0FBWjtBQUNBLGVBQUt2QixlQUFMLENBQXFCYSxHQUFyQixFQUEwQjVGLFVBQTFCLEVBQXNDMEYsWUFBdEM7QUFDSDtBQUNKOztBQUNEMUUsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3lDLFVBQWpCO0FBQ0EsV0FBS2MsZ0JBQUw7QUFDSDs7O29DQUVlb0IsRyxFQUFLNUYsVSxFQUFZMEYsWSxFQUFjO0FBQzNDLFVBQU1hLElBQUksR0FBR1gsR0FBRyxDQUFDUyxHQUFKLENBQVEsQ0FBUixDQUFiO0FBQ0EsVUFBTUcsS0FBSyxHQUFHWixHQUFHLENBQUNTLEdBQUosQ0FBUSxDQUFSLElBQWEsRUFBM0I7QUFDQSxVQUFNSSxNQUFNLEdBQUdiLEdBQUcsQ0FBQ1MsR0FBSixDQUFRLENBQVIsQ0FBZjtBQUNBLFVBQU1LLEdBQUcsR0FBR2QsR0FBRyxDQUFDUyxHQUFKLENBQVEsQ0FBUixJQUFhLEVBQXpCOztBQUNBLFVBQ0lyRyxVQUFVLENBQUNHLENBQVgsR0FBZW9HLElBQWYsSUFDQXZHLFVBQVUsQ0FBQ0csQ0FBWCxHQUFlcUcsS0FEZixJQUVBeEcsVUFBVSxDQUFDSyxDQUFYLEdBQWVxRyxHQUZmLElBR0ExRyxVQUFVLENBQUNLLENBQVgsR0FBZW9HLE1BSm5CLEVBS0U7QUFDRSxZQUFJLEtBQUsvQyxVQUFMLENBQWdCaUQsUUFBaEIsQ0FBeUJqQixZQUF6QixDQUFKLEVBQTRDO0FBQ3BDLGVBQUtaLG9CQUFMLENBQTBCWSxZQUExQjtBQUNQLFNBRkQsTUFFTztBQUNILGVBQUtoQyxVQUFMLENBQWdCa0QsSUFBaEIsQ0FBcUJsQixZQUFyQjtBQUNIOztBQUNELGFBQUtkLG9CQUFMLENBQTBCZ0IsR0FBMUIsRUFBK0JGLFlBQS9CO0FBQ0g7QUFDSjs7O3lDQUVvQkEsWSxFQUFjO0FBQy9CLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLakMsVUFBTCxDQUFnQnBCLE1BQXBDLEVBQTRDcUQsQ0FBQyxFQUE3QyxFQUFpRDtBQUM3QyxZQUFJLEtBQUtqQyxVQUFMLENBQWdCaUMsQ0FBaEIsTUFBdUJELFlBQTNCLEVBQXlDO0FBQ3JDLGVBQUtoQyxVQUFMLENBQWdCb0MsTUFBaEIsQ0FBdUJILENBQXZCLEVBQTBCLENBQTFCO0FBQ0g7QUFDSjtBQUNKOzs7eUNBRW9CQyxHLEVBQUs7QUFDdEJBLFNBQUcsQ0FBQ2lCLEtBQUosR0FBWSxDQUFDakIsR0FBRyxDQUFDaUIsS0FBakI7QUFDSDs7OzhDQUV5QkMsVSxFQUFZO0FBQ2xDLFVBQUluQixDQUFDLEdBQUcsQ0FBUjtBQUNBLFVBQUl4RixDQUFDLEdBQUcsQ0FBUjs7QUFDQSxhQUFPd0YsQ0FBQyxHQUFHLEVBQVgsRUFBZTtBQUNYLFlBQUltQixVQUFVLEdBQUczRyxDQUFiLElBQWtCMkcsVUFBVSxHQUFHM0csQ0FBQyxHQUFHLEVBQXZDLEVBQTJDO0FBQ3ZDLGlCQUFPQSxDQUFQO0FBQ0g7O0FBQ0RBLFNBQUMsSUFBSSxFQUFMO0FBQ0F3RixTQUFDLElBQUksQ0FBTDtBQUNIO0FBQ0o7OzttQ0FFYztBQUNYLFdBQUsvRSxPQUFMLENBQWFtRyxXQUFiLEdBQTJCLE9BQTNCO0FBQ0EsV0FBS25HLE9BQUwsQ0FBYW9HLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxXQUFLcEcsT0FBTCxDQUFhcUcsVUFBYixDQUF3QixLQUFLdEYsV0FBN0IsRUFBMEMsR0FBMUMsRUFBK0MsRUFBL0M7QUFDSDs7O21DQUVjO0FBQ1gsVUFBSWlFLEdBQUo7QUFDQSxVQUFJc0IsTUFBTSxHQUFHLENBQWI7O0FBQ0EsV0FBSyxJQUFJdkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3hDLFVBQXBCLEVBQWdDd0MsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQ0MsV0FBRyxHQUFHRCxDQUFOO0FBQ0EsWUFBTXdCLFNBQVMsR0FBRyxJQUFJQyxnREFBSixDQUFZLENBQUNGLE1BQUQsRUFBUyxHQUFULENBQVosRUFBMkJ0QixHQUEzQixDQUFsQjtBQUNBLFlBQU15QixLQUFLLEdBQUdGLFNBQVMsQ0FBQ04sS0FBVixHQUFrQixVQUFsQixHQUErQixPQUE3QztBQUNBTSxpQkFBUyxDQUFDRyxVQUFWLENBQXFCLEtBQUsxRyxPQUExQixFQUFtQ3lHLEtBQW5DO0FBQ0EsYUFBSzlELFVBQUwsQ0FBZ0IyRCxNQUFoQixJQUEwQkMsU0FBMUI7QUFDQUQsY0FBTSxJQUFJLEVBQVY7QUFDSDtBQUNKOzs7a0NBRWE7QUFBQTs7QUFDVkssWUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS2pFLFVBQWpCLEVBQTZCa0UsT0FBN0IsQ0FBcUMsVUFBQ3BCLEdBQUQsRUFBUztBQUMxQyxZQUFNcUIsRUFBRSxHQUFHLE1BQUksQ0FBQ25FLFVBQUwsQ0FBZ0I4QyxHQUFoQixDQUFYO0FBQ0EsWUFBTWdCLEtBQUssR0FBR0ssRUFBRSxDQUFDYixLQUFILEdBQVcsVUFBWCxHQUF3QixPQUF0QztBQUNBYSxVQUFFLENBQUNKLFVBQUgsQ0FBYyxNQUFJLENBQUMxRyxPQUFuQixFQUE0QnlHLEtBQTVCO0FBQ0gsT0FKRDtBQUtBRSxZQUFNLENBQUNJLE1BQVAsQ0FBYyxLQUFLbkUsY0FBbkIsRUFBbUNpRSxPQUFuQyxDQUEyQyxVQUFDN0IsR0FBRCxFQUFTO0FBQ3BELGFBQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0MsR0FBRyxDQUFDdEQsTUFBeEIsRUFBZ0NxRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLGNBQU1pQyxNQUFNLEdBQUdoQyxHQUFHLENBQUNELENBQUQsQ0FBSCxDQUFPa0IsS0FBUCxHQUFlLFVBQWYsR0FBNEIsT0FBM0M7QUFDQWpCLGFBQUcsQ0FBQ0QsQ0FBRCxDQUFILENBQU8yQixVQUFQLENBQWtCLE1BQUksQ0FBQzFHLE9BQXZCLEVBQWdDZ0gsTUFBaEM7QUFDSDtBQUNBLE9BTEQ7QUFNSDs7O3NEQUVpQztBQUM5QixVQUFNekgsQ0FBQyxHQUFHaUQsS0FBSyxDQUFDbkIsSUFBSSxDQUFDTSxLQUFMLENBQVdOLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUEzQixJQUFpQyxFQUFsQyxDQUFmO0FBQ0EsVUFBTTdCLENBQUMsR0FBRyxFQUFWO0FBQ0EsYUFBTyxDQUFDRixDQUFELEVBQUlFLENBQUosQ0FBUDtBQUNIOzs7b0NBRWU7QUFDWixVQUFNZ0csR0FBRyxHQUFHLEtBQUt3QiwrQkFBTCxFQUFaO0FBQ0EsVUFBTWpDLEdBQUcsR0FBRzNELElBQUksQ0FBQ00sS0FBTCxDQUFXTixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsRUFBN0M7QUFDQSxVQUFNNEYsVUFBVSxHQUFHLElBQUlWLGdEQUFKLENBQVlmLEdBQVosRUFBaUJULEdBQWpCLENBQW5CO0FBQ0FrQyxnQkFBVSxDQUFDUixVQUFYLENBQXNCLEtBQUsxRyxPQUEzQixFQUFvQyxPQUFwQztBQUNBLFdBQUs0QyxjQUFMLENBQW9CNkMsR0FBRyxDQUFDLENBQUQsQ0FBdkIsSUFBOEIsS0FBSzdDLGNBQUwsQ0FBb0I2QyxHQUFHLENBQUMsQ0FBRCxDQUF2QixLQUErQixFQUE3RDtBQUNBLFdBQUs3QyxjQUFMLENBQW9CNkMsR0FBRyxDQUFDLENBQUQsQ0FBdkIsRUFBNEJPLElBQTVCLENBQWlDa0IsVUFBakM7O0FBQ0EsVUFBSSxLQUFLdEUsY0FBTCxDQUFvQjZDLEdBQUcsQ0FBQyxDQUFELENBQXZCLEVBQTRCL0QsTUFBNUIsS0FBdUMsQ0FBM0MsRUFBOEM7QUFDMUMsYUFBS29DLFFBQUw7QUFDSDtBQUNKOzs7OEJBRVM7QUFBQTs7QUFDTixVQUFJLEtBQUtULFVBQVQsRUFBcUI7QUFBRTtBQUFROztBQUMvQixVQUFJLEtBQUtOLE9BQUwsS0FBaUIsSUFBckIsRUFBMkI7QUFDdkIsYUFBS0YsTUFBTCxJQUFlLENBQWY7O0FBQ0osWUFBSSxLQUFLQSxNQUFMLEdBQWMsS0FBS00sU0FBdkIsRUFBa0M7QUFDOUIsZUFBS0ksYUFBTDtBQUNBLGVBQUtWLE1BQUwsR0FBYyxDQUFkO0FBQ0g7O0FBQ0QsYUFBSzdDLE9BQUwsQ0FBYXlFLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkJoQyxLQUE3QixFQUFvQ0MsTUFBcEM7QUFDQSxhQUFLYyxZQUFMO0FBQ0EsYUFBSzJELFdBQUw7QUFDQSxhQUFLMUQsV0FBTDs7QUFDQSxZQUFNMkQsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxpQkFBTSxNQUFJLENBQUMxRCxPQUFMLEVBQU47QUFBQSxTQUFqQjs7QUFDQSxhQUFLVixPQUFMLEdBQWVxRSxxQkFBcUIsQ0FBQ0QsUUFBRCxDQUFwQztBQUNDO0FBQ0o7OztvQ0FFZTNCLEcsRUFBSzZCLHNCLEVBQXdCO0FBQ3pDLFVBQU1DLGFBQWEsR0FBRyxLQUFLM0UsY0FBTCxDQUFvQjZDLEdBQUcsQ0FBQyxDQUFELENBQXZCLENBQXRCO0FBQ0EsVUFBSStCLFdBQUo7O0FBQ0EsVUFBSUYsc0JBQXNCLElBQUksQ0FBOUIsRUFBaUM7QUFDN0IsWUFBTXRDLEdBQUcsR0FBR3VDLGFBQWEsQ0FBQ0Qsc0JBQUQsQ0FBekI7QUFDQUUsbUJBQVcsR0FBR0QsYUFBYSxDQUFDRCxzQkFBc0IsR0FBRyxDQUExQixDQUEzQjtBQUNBLGVBQU90QyxHQUFHLENBQUN5QyxrQkFBSixDQUF1QkQsV0FBdkIsQ0FBUDtBQUNIO0FBQ0o7OztrQ0FFYTtBQUNWLFVBQUk3RyxPQUFPLEdBQUdnRyxNQUFNLENBQUNJLE1BQVAsQ0FBYyxLQUFLbkUsY0FBbkIsQ0FBZDs7QUFDQSxXQUFLLElBQUltQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcEUsT0FBTyxDQUFDZSxNQUE1QixFQUFvQ3FELENBQUMsRUFBckMsRUFBeUM7QUFDckMsYUFBSyxJQUFJMkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRy9HLE9BQU8sQ0FBQ29FLENBQUQsQ0FBUCxDQUFXckQsTUFBL0IsRUFBdUNnRyxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLGNBQUksQ0FBQyxLQUFLL0QsZUFBTCxDQUFxQmhELE9BQU8sQ0FBQ29FLENBQUQsQ0FBUCxDQUFXMkMsQ0FBWCxFQUFjakMsR0FBbkMsRUFBd0NpQyxDQUF4QyxDQUFMLEVBQWlEO0FBQzdDLGdCQUFNQyxlQUFlLEdBQUcsS0FBS2hGLFVBQUwsQ0FBZ0I2QyxjQUFoQixDQUErQixDQUNuRDdFLE9BQU8sQ0FBQ29FLENBQUQsQ0FBUCxDQUFXMkMsQ0FBWCxFQUFjakMsR0FBZCxDQUFrQixDQUFsQixDQURtRCxDQUEvQixDQUF4QjtBQUdKOUUsbUJBQU8sQ0FBQ29FLENBQUQsQ0FBUCxDQUFXMkMsQ0FBWCxFQUFjRSxJQUFkLENBQW1CRCxlQUFuQixFQUFvQyxLQUFLekUsU0FBekM7QUFDQztBQUNKO0FBQ0o7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalRMOztJQUVxQjJFLFE7QUFDakIsb0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDYixTQUFLeEgsSUFBTCxHQUFZLElBQUlDLDZDQUFKLENBQVN1SCxHQUFULENBQVo7QUFDQSxTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXbEgsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0EsU0FBSzZDLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWE3QyxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDSDs7Ozs0QkFFTztBQUNKLFVBQUltSCxJQUFJLEdBQUcsSUFBWDs7QUFDQSxVQUFNWixRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3pCWSxZQUFJLENBQUMxSCxJQUFMLENBQVU2RyxXQUFWLElBQ0FhLElBQUksQ0FBQzFILElBQUwsQ0FBVTJILElBQVYsQ0FBZUQsSUFBSSxDQUFDRixHQUFwQixDQURBO0FBRUgsT0FIRDs7QUFJQUksaUJBQVcsQ0FBQ2QsUUFBUSxDQUFDdkcsSUFBVCxDQUFjbUgsSUFBZCxDQUFELEVBQXNCLEVBQXRCLENBQVg7QUFDSDs7OzhCQUVTO0FBQ04sV0FBSzFILElBQUwsQ0FBVTZHLFdBQVY7QUFDQUUsMkJBQXFCLENBQUMsS0FBSzNELE9BQU4sQ0FBckI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0QmdCeUUsWTtBQUNqQix3QkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNiLFNBQUszQyxHQUFMLEdBQVcyQyxHQUFHLENBQUMsS0FBRCxDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXRCxHQUFHLENBQUMsS0FBRCxDQUFkO0FBQ0EsU0FBSzNCLEtBQUwsR0FBYTJCLEdBQUcsQ0FBQyxPQUFELENBQWhCO0FBQ0EsU0FBSzFDLElBQUwsR0FBWTBDLEdBQUcsQ0FBQyxNQUFELENBQWY7QUFDQSxTQUFLMUIsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCN0YsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQSxTQUFLK0csSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVS9HLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLNEcsa0JBQUwsR0FBMEIsS0FBS0Esa0JBQUwsQ0FBd0I1RyxJQUF4QixDQUE2QixJQUE3QixDQUExQjtBQUNIOzs7OytCQUVVaUgsRyxFQUFLckIsSyxFQUFPO0FBQ25CcUIsU0FBRyxDQUFDM0IsV0FBSixHQUFrQixLQUFsQjtBQUNBMkIsU0FBRyxDQUFDUSxVQUFKLENBQWUsS0FBSzdDLEdBQUwsQ0FBUyxDQUFULENBQWYsRUFBNEIsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBNUIsRUFBeUMsRUFBekMsRUFBNkMsRUFBN0M7QUFDQXFDLFNBQUcsQ0FBQ1MsU0FBSixHQUFnQixDQUFoQjtBQUNBVCxTQUFHLENBQUM3RSxTQUFKLEdBQWdCd0QsS0FBaEI7QUFDQXFCLFNBQUcsQ0FBQ1UsUUFBSixDQUFhLEtBQUsvQyxHQUFMLENBQVMsQ0FBVCxDQUFiLEVBQTBCLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQTFCLEVBQXVDLEVBQXZDLEVBQTJDLEVBQTNDO0FBQ0FxQyxTQUFHLENBQUM3RSxTQUFKLEdBQWdCLEtBQUt3RCxLQUFyQjtBQUNBcUIsU0FBRyxDQUFDMUIsSUFBSixHQUFXLGNBQVg7QUFDQTBCLFNBQUcsQ0FBQ1csU0FBSixHQUFnQixRQUFoQjtBQUNBWCxTQUFHLENBQUNZLFlBQUosR0FBbUIsUUFBbkI7QUFDQVosU0FBRyxDQUFDYSxRQUFKLENBQWEsS0FBS2pELElBQWxCLEVBQXdCLEtBQUtELEdBQUwsQ0FBUyxDQUFULElBQWMsRUFBdEMsRUFBMEMsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBYyxFQUF4RDtBQUNIOzs7eUJBRUlrQyxlLEVBQWlCekUsUyxFQUFXO0FBQzdCLFVBQUl5RSxlQUFlLElBQUksS0FBS2xDLEdBQUwsQ0FBUyxDQUFULEtBQWUsR0FBdEMsRUFBMkM7QUFDdkMsYUFBS0EsR0FBTCxDQUFTLENBQVQ7QUFDSCxPQUZELE1BRU8sSUFBSSxDQUFDa0MsZUFBRCxJQUFvQixLQUFLbEMsR0FBTCxDQUFTLENBQVQsS0FBZSxHQUF2QyxFQUE0QztBQUMvQyxhQUFLQSxHQUFMLENBQVMsQ0FBVDtBQUNILE9BRk0sTUFFQTtBQUNMLGFBQUtBLEdBQUwsQ0FBUyxDQUFULEtBQWV2QyxTQUFmO0FBQ0Q7QUFDSjs7O3VDQUVrQnNFLFcsRUFBYTtBQUM1QixhQUFPLEtBQUsvQixHQUFMLENBQVMsQ0FBVCxLQUFlK0IsV0FBVyxDQUFDL0IsR0FBWixDQUFnQixDQUFoQixJQUFxQixFQUEzQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDTDs7QUFDQSxJQUFNekcsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHFDQUFELENBQXBCLEMsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU0ySixNQUFNLEdBQUc7QUFDYixLQUFHLFNBRFU7QUFFYixLQUFHLFNBRlU7QUFHYixLQUFHLFNBSFU7QUFJYixLQUFHLFNBSlU7QUFLYixLQUFHLFNBTFU7QUFNYixLQUFHLFNBTlU7QUFPYixLQUFHLFNBUFU7QUFRYixLQUFHLFNBUlU7QUFTYixLQUFHLFNBVFU7QUFVYixLQUFHO0FBVlUsQ0FBZjs7SUFZcUJwQyxPLEdBQ2pCLGlCQUFZZixHQUFaLEVBQWlCQyxJQUFqQixFQUF1QjtBQUFBOztBQUNuQjtBQUNBLE9BQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtPLEtBQUwsR0FBYSxLQUFiO0FBQ0EsTUFBTW1DLEdBQUcsR0FBRztBQUNWM0MsT0FBRyxFQUFFQSxHQURLO0FBRVY0QyxPQUFHLEVBQUVySixJQUFJLENBQUM2SixTQUFMLENBQWUsQ0FBZixDQUZLO0FBR1ZwQyxTQUFLLEVBQUVtQyxNQUFNLENBQUMsS0FBS2xELElBQU4sQ0FISDtBQUlWQSxRQUFJLEVBQUUsS0FBS0E7QUFKRCxHQUFaO0FBTUF5Qyx3REFBWSxDQUFDVyxJQUFiLENBQWtCLElBQWxCLEVBQXdCVixHQUF4QjtBQUNILEM7OztBQUNKO0FBRURwSixJQUFJLENBQUMrSixRQUFMLENBQWN2QyxPQUFkLEVBQXVCMkIsc0RBQXZCLEU7Ozs7Ozs7Ozs7O0FDMUNBLElBQU1uSixJQUFJLEdBQUc7QUFDVDZKLFdBRFMscUJBQ0NuSCxNQURELEVBQ1M7QUFDZCxXQUFPMUMsSUFBSSxDQUFDZ0ssS0FBTCxDQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWCxFQUFtQnRILE1BQW5CLENBQVA7QUFDSCxHQUhRO0FBSVRzSCxPQUpTLGlCQUlIQyxHQUpHLEVBSUVDLENBSkYsRUFJSztBQUNWLFdBQU8sQ0FBQyxDQUFELEVBQUlELEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUUMsQ0FBWixDQUFQO0FBQ0gsR0FOUTtBQU9UQyxRQVBTLGtCQU9GbkUsR0FQRSxFQU9HO0FBQ1IsV0FBTzNELElBQUksQ0FBQ00sS0FBTCxDQUFXTixJQUFJLENBQUNDLE1BQUwsS0FBZ0IwRCxHQUEzQixDQUFQO0FBQ0g7QUFUUSxDQUFiOztBQVlBaEcsSUFBSSxDQUFDK0osUUFBTCxHQUFnQixVQUFTSyxVQUFULEVBQXFCQyxXQUFyQixFQUFrQztBQUM5QyxXQUFTQyxTQUFULEdBQXFCLENBQUU7O0FBQUE7QUFDdkJBLFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkYsV0FBVyxDQUFDRSxTQUFsQztBQUNBSCxZQUFVLENBQUNHLFNBQVgsR0FBdUIsSUFBSUQsU0FBSixFQUF2QjtBQUNBRixZQUFVLENBQUNHLFNBQVgsQ0FBcUJDLFVBQXJCLEdBQWtDSixVQUFsQztBQUNILENBTEQ7O0FBT0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjFLLElBQWpCLEM7Ozs7Ozs7Ozs7O0FDbkJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vc2NyaXB0cy9udW1iZXJzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vc2NyaXB0cy91dGlsJyk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xpY2soZSwgY2xpY2tlZFBvcywgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICBjbGlja2VkUG9zID0ge1xuICAgIHg6IGUuY2xpZW50WCAtIG9mZnNldFgsXG4gICAgeTogZS5jbGllbnRZIC0gb2Zmc2V0WSxcbiAgfTtcbiAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICByZXR1cm4gY2xpY2tlZFBvcztcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3Qgb2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICBjb25zdCBvZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDtcbiAgbGV0IGNsaWNrZWRQb3M7XG4gIGNvbnNvbGUubG9nKCdJdHMgd29ya2luZycpO1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbn0pIiwiY29uc3QgTUFUSE9QID0gW1xuICAgICcrJywgXG4gICAgJy0nLFxuICAgICcqJ1xuXVxuXG5jb25zdCBOVU1CRVJTID0gJzAxMjM0NTY3ODknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhdGlvbiB7XG4gICAgY29uc3RydWN0b3IobnVtYmVycykge1xuICAgICAgICB0aGlzLm51bWJlcnMgPSBudW1iZXJzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5yaWdodEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbigpO1xuICAgIH1cblxuICAgIHNodWZmbGVkICh1bnNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiB1bnNodWZmbGVkXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gKHsgc29ydDogTWF0aC5yYW5kb20oKSwgdmFsdWU6IGEgfSkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiBhLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH07XG5cbiAgICBjcmVhdGVFcXVhdGlvbigpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0xID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0yID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3QgbWF0aE9wID0gTUFUSE9QW01hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyKV07XG4gICAgICAgIGxldCBudW0xID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMSxcbiAgICAgICAgICAgIHN0YXJ0TnVtMSArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBsZXQgbnVtMiA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTIsXG4gICAgICAgICAgICBzdGFydE51bTIgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KG51bTEpIDwgcGFyc2VJbnQobnVtMikgJiYgbWF0aE9wID09PSAnLScpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBudW0xO1xuICAgICAgICAgICAgbnVtMSA9IG51bTI7XG4gICAgICAgICAgICBudW0yID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcXVhdGlvbiA9IGBXaGF0IGlzICR7bnVtMX0gJHttYXRoT3B9ICR7bnVtMn0/YDtcbiAgICAgICAgcmV0dXJuIGVxdWF0aW9uO1xuICAgIH1cblxuICAgIHJpZ2h0QW5zd2VyKGVxdWF0aW9uKXtcbiAgICAgICAgbGV0IGFyciA9IGVxdWF0aW9uLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBudW0xID0gcGFyc2VJbnQoYXJyWzJdKTtcbiAgICAgICAgbGV0IG51bTIgPSBwYXJzZUludChhcnJbNF0pO1xuICAgICAgICBzd2l0Y2goYXJyWzNdKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9udW1iZXJzJztcbmltcG9ydCBFcXVhdGlvbiBmcm9tICcuL2VxdWF0aW9uJztcbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgTnVtQ29sdW1ucyA9IDEwO1xuY29uc3QgRElNX1ggPSBbMCwgODAsIDE2MCwgMjQwLCAzMjAsIDQwMCwgNDgwLCA1NjAsIDY0MCwgNzIwXTtcbmNvbnN0IFdJRFRIID0gODAwO1xuY29uc3QgSEVJR0hUID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7IC8vMzIwIDI5OVxuICAgICAgICB0aGlzLm9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wOyAvLzMyMCAyOTlcbiAgICAgICAgdGhpcy5ib3R0b21saW5lID0ge307XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB0aGlzLnVzZXJDbGlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5mYWxsU3BlZWQgPSAwLjM7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gMjUwO1xuICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkID0gMDtcbiAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5Jbml0aWFsTGF5ZXIgPSB0aGlzLkluaXRpYWxMYXllci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2sgPSB0aGlzLnJlZ2lzdGVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyID0gdGhpcy5mYWxsaW5nTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uID0gdGhpcy5kcmF3RXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycyA9IHRoaXMuZHJhd051bWJlcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9uID0gdGhpcy5kZXRlY3RDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrID0gdGhpcy5yaWdodEFuc3dlckNoZWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlciA9IHRoaXMua2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIgPSB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlciA9IHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlciA9IHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyA9IHRoaXMucmVtb3ZlRnJvbVVzZXJDbGlja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja1NxUG9zaXRpb24gPSB0aGlzLmNoZWNrU3FQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrID0gdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB0aGlzLnJlZ2lzdGVyQ2xpY2soZSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4gdGhpcy5rZXlIYW5kbGVyKGUpKTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGF1c2UtcGxheVwiKVswXVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9ICF0aGlzLmdhbWVQYXVzZWQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZVBhdXNlZCkge3RoaXMuYW5pbWF0ZSgpfTtcbiAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGtleUhhbmRsZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDAuMztcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAyNTA7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgPSAwO1xuICAgICAgICB0aGlzLkluaXRpYWxMYXllcigpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIHJpZ2h0QW5zd2VyQ2hlY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmlnaHRBbnN3ZXIpO1xuICAgICAgICBsZXQgYXJyO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHRoaXMudXNlckNsaWNrc1tpXTtcbiAgICAgICAgICAgIGFyciA9IG51bS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoYXJyWzJdKSA9PT0gdGhpcy5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIobnVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyArPSBhcnJbMl07XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNvbmNhdFN0cmluZykgPT09IHRoaXMucmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpe1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5lcXVhdGlvbi5yaWdodEFuc3dlcih0aGlzLm5ld0VxdWF0aW9uKTtcbiAgICAgICAgdGhpcy5mYWxsU3BlZWQgKz0gMC4xO1xuICAgICAgICB0aGlzLnVzZXJDbGlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5mYWxsU3BlZWQgKz0gMC4xO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSAtPSAyNTtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCArPSAxO1xuICAgIH1cblxuICAgIHNpbmdsZURpZ2l0QW5zd2VyKHN0cmluZykge1xuICAgICAgICBsZXQgYXJyID0gc3RyaW5nLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgY29uc3QgaSA9IHBhcnNlSW50KGFyclsxXSk7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ib3R0b21saW5lW2FyclswXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW2FyclswXV0uc3BsaWNlKGkgLSAxLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyKHRoaXMudXNlckNsaWNrc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckNsaWNrKGUpIHtcbiAgICAgICAgY29uc3QgY2xpY2tlZFBvcyA9IHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgIHk6IE1hdGguYWJzKGUuY2xpZW50WSAtIHRoaXMub2Zmc2V0WSkgLSAyNSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY3VycmVudENvbCA9IHRoaXMuY3VycmVudENvbHVtbkZvclVzZXJDbGljayhjbGlja2VkUG9zLngpO1xuICAgICAgICBsZXQgZk51bWJlcnM7XG4gICAgICAgIGxldCBudW07XG4gICAgICAgIGxldCBiTnVtYmVycztcbiAgICAgICAgbGV0IGNvbmNhdFN0cmluZztcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tbGluZS5oYXNPd25Qcm9wZXJ0eShjdXJyZW50Q29sKSkge1xuICAgICAgICAgICAgYk51bWJlcnMgPSBbdGhpcy5ib3R0b21saW5lW2N1cnJlbnRDb2xdXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYk51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBudW0gPSBiTnVtYmVyc1tpXTtcbiAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgPSBgJHtudW0ucG9zWzBdfV8wXyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnMuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgICAgICAgIGZOdW1iZXJzID0gdGhpcy5mYWxsaW5nTnVtYmVyc1tjdXJyZW50Q29sXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZk51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBudW0gPSBmTnVtYmVyc1tpXTtcbiAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgPSBgJHtudW0ucG9zWzBdfV8ke2kgKyAxfV8ke251bS50ZXh0fWA7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1NxUG9zaXRpb24obnVtLCBjbGlja2VkUG9zLCBjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckNsaWNrcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXJDaGVjaygpO1xuICAgIH1cblxuICAgIGNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZykge1xuICAgICAgICBjb25zdCBsZWZ0ID0gbnVtLnBvc1swXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBudW0ucG9zWzBdICsgODA7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IG51bS5wb3NbMV07XG4gICAgICAgIGNvbnN0IHRvcCA9IG51bS5wb3NbMV0gLSA4MDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2xpY2tlZFBvcy54ID4gbGVmdCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy54IDwgcmlnaHQgJiZcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueSA+IHRvcCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy55IDwgYm90dG9tXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlckNsaWNrcy5pbmNsdWRlcyhjb25jYXRTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVVzZXJDbGlja3MoY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnB1c2goY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIobnVtLCBjb25jYXRTdHJpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRnJvbVVzZXJDbGlja3MoY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzW2ldID09PSBjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0VW5zZWxlY3ROdW1iZXIobnVtKSB7XG4gICAgICAgIG51bS5jbGljayA9ICFudW0uY2xpY2s7XG4gICAgfVxuXG4gICAgY3VycmVudENvbHVtbkZvclVzZXJDbGljayh4T2ZDbGlja2VkKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICAgICAgICBpZiAoeE9mQ2xpY2tlZCA+IHggJiYgeE9mQ2xpY2tlZCA8IHggKyA4MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeCArPSA4MDtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFcXVhdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMjBweCBWZXJkYW5hXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KHRoaXMubmV3RXF1YXRpb24sIDQwMCwgMTUpO1xuICAgIH1cblxuICAgIEluaXRpYWxMYXllcigpIHtcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IHBvc0F0WCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtQ29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICBudW0gPSBpO1xuICAgICAgICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDc0XSwgbnVtKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3TnVtYmVyLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgbmV3TnVtYmVyLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbWxpbmVbcG9zQXRYXSA9IG5ld051bWJlcjtcbiAgICAgICAgICAgIHBvc0F0WCArPSA4MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdOdW1iZXJzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmJvdHRvbWxpbmUpLmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3EgPSB0aGlzLmJvdHRvbWxpbmVbcG9zXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3EuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBzcS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yMiA9IG51bVtpXS5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIG51bVtpXS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IyKTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgICAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgICAgICBjb25zdCB5ID0gMjU7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgZmFsbGluZ051bWJlcigpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgICAgICBmYWxsaW5nTnVtLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBcImJsYWNrXCIpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gfHwgW107XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5wdXNoKGZhbGxpbmdOdW0pO1xuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLmxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBhdXNlZCkgeyByZXR1cm4gfVxuICAgICAgICBpZiAodGhpcy5wbGF5aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lSCArPSAxO1xuICAgICAgICBpZiAodGhpcy5mcmFtZUggPiB0aGlzLmZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyKCk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmRyYXdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4gdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3RDb2xsaXNpb24ocG9zLCBjdXJyZW50RmFsbGluZ1Bvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV07XG4gICAgICAgIGxldCBvdGhlck51bWJlcjtcbiAgICAgICAgaWYgKGN1cnJlbnRGYWxsaW5nUG9zaXRpb24gIT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uXTtcbiAgICAgICAgICAgIG90aGVyTnVtYmVyID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIC0gMV07XG4gICAgICAgICAgICByZXR1cm4gbnVtLmNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgbGV0IG51bWJlcnMgPSBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZXRlY3RDb2xsaXNpb24obnVtYmVyc1tpXVtqXS5wb3MsIGopKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQm90dG9tTGluZSA9IHRoaXMuYm90dG9tbGluZS5oYXNPd25Qcm9wZXJ0eShbXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLnBvc1swXSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLm1vdmUoZm91bmRCb3R0b21MaW5lLCB0aGlzLmZhbGxTcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5nYW1lLm1vdmVPYmplY3RzKCksIFxuICAgICAgICAgICAgdGhhdC5nYW1lLmRyYXcodGhhdC5jdHgpO1xuICAgICAgICB9O1xuICAgICAgICBzZXRJbnRlcnZhbChjYWxsYmFjay5iaW5kKHRoYXQpLCAyMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuICAgICAgICB0aGlzLnBvcyA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgdGhpcy52ZWwgPSBvYmpbXCJ2ZWxcIl07XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmpbXCJjb2xvclwiXTtcbiAgICAgICAgdGhpcy50ZXh0ID0gb2JqW1widGV4dFwiXTtcbiAgICAgICAgdGhpcy5kcmF3U3F1YXJlID0gdGhpcy5kcmF3U3F1YXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aCA9IHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgsIGNvbG9yKSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLnBvc1swXSArIDQwLCB0aGlzLnBvc1sxXSArIDQwKTtcbiAgICB9XG5cbiAgICBtb3ZlKGZvdW5kQm90dG9tTGluZSwgZmFsbFNwZWVkKSB7XG4gICAgICAgIGlmIChmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gMzkzKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIGlmICghZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDQ3Mykge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3NbMV0gKz0gZmFsbFNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb25XaXRoKG90aGVyTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1sxXSA+PSBvdGhlck51bWJlci5wb3NbMV0gLSA4MDtcbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbi8vIGNvbnN0IENPTE9SUyA9IHtcbi8vICAgMDogXCIjQ0NGRjAwXCIsXG4vLyAgIDE6IFwiI2ZmMDAwMFwiLFxuLy8gICAyOiBcIiNmZjgwMDBcIixcbi8vICAgMzogXCIjZmZmZjAwXCIsXG4vLyAgIDQ6IFwiIzAwZmY4MFwiLFxuLy8gICA1OiBcIiNGQkFFRDJcIixcbi8vICAgNjogXCIjRkY1MzQ5XCIsXG4vLyAgIDc6IFwiIzAwZmZjY1wiLFxuLy8gICA4OiBcIiMwMGYyZmZcIixcbi8vICAgOTogXCIjZmYwMDczXCIsXG4vLyB9O1xuXG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI2NjZmYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjZmJhZWQyXCIsXG4gIDY6IFwiI2ZmNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmNsaWNrID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKDIpLFxuICAgICAgICAgIGNvbG9yOiBDT0xPUlNbdGhpcy50ZXh0XSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgIH07XG4gICAgICAgIE1vdmluZ09iamVjdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfVxufTtcblxuVXRpbC5pbmhlcml0cyhOdW1iZXJzLCBNb3ZpbmdPYmplY3QpOyIsImNvbnN0IFV0aWwgPSB7XG4gICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gVXRpbC5zY2FsZShbMCwgNV0sIGxlbmd0aCk7XG4gICAgfSxcbiAgICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgICAgcmV0dXJuIFswLCB2ZWNbMV0qIG1dXG4gICAgfSxcbiAgICBudW1iZXIobnVtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBudW0pXG4gICAgfVxufVxuXG5VdGlsLmluaGVyaXRzID0gZnVuY3Rpb24oY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTdXJyb2dhdGUoKSB7fTtcbiAgICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50Q2xhc3MucHJvdG90eXBlO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnV0b3IgPSBjaGlsZENsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==