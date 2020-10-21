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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwicmVnaXN0ZXJDbGljayIsImUiLCJjbGlja2VkUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiYWxlcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsImZpbGxTdHlsZSIsImZhbGxTcGVlZCIsImZyZXF1ZW5jeSIsIm51bU9mRXF1YXRpb25zU29sdmVkIiwiZ2FtZVBhdXNlZCIsIkluaXRpYWxMYXllciIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJkZXRlY3RDb2xsaXNpb24iLCJyaWdodEFuc3dlckNoZWNrIiwia2V5SGFuZGxlciIsImdhbWVPdmVyIiwiY2hlY2tEb3VibGVEaWdpdEFuc3dlciIsInNlbGVjdFVuc2VsZWN0TnVtYmVyIiwic2luZ2xlRGlnaXRBbnN3ZXIiLCJyZW1vdmVGcm9tVXNlckNsaWNrcyIsImNoZWNrU3FQb3NpdGlvbiIsIlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwicmVzdGFydEdhbWUiLCJjbGVhclJlY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZSIsImNvbmNhdFN0cmluZyIsImkiLCJudW0iLCJzdHJpbmciLCJzcGxpY2UiLCJhYnMiLCJjdXJyZW50Q29sIiwiY3VycmVudENvbHVtbkZvclVzZXJDbGljayIsImZOdW1iZXJzIiwiYk51bWJlcnMiLCJoYXNPd25Qcm9wZXJ0eSIsInBvcyIsInRleHQiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJpbmNsdWRlcyIsInB1c2giLCJjbGljayIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImNvbG9yIiwiZHJhd1NxdWFyZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3EiLCJ2YWx1ZXMiLCJjb2xvcjIiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmFsbGluZ051bSIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIiwiY3VycmVudENvbHVtbiIsIm90aGVyTnVtYmVyIiwiY2hlY2tDb2xsaXNpb25XaXRoIiwiaiIsImZvdW5kQm90dG9tTGluZSIsIm1vdmUiLCJHYW1lVmlldyIsImN0eCIsInN0YXJ0IiwidGhhdCIsImRyYXciLCJzZXRJbnRlcnZhbCIsIk1vdmluZ09iamVjdCIsIm9iaiIsInZlbCIsInN0cm9rZVJlY3QiLCJsaW5lV2lkdGgiLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwic2NhbGUiLCJ2ZWMiLCJtIiwibnVtYmVyIiwiY2hpbGRDbGFzcyIsInBhcmVudENsYXNzIiwiU3Vycm9nYXRlIiwicHJvdG90eXBlIiwiY29uc3RydXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QkFDQ25ILE1BREQsRUFDUztBQUNkLFdBQU8xQyxJQUFJLENBQUNnSyxLQUFMLENBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFYLEVBQW1CdEgsTUFBbkIsQ0FBUDtBQUNILEdBSFE7QUFJVHNILE9BSlMsaUJBSUhDLEdBSkcsRUFJRUMsQ0FKRixFQUlLO0FBQ1YsV0FBTyxDQUFDLENBQUQsRUFBSUQsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFRQyxDQUFaLENBQVA7QUFDSCxHQU5RO0FBT1RDLFFBUFMsa0JBT0ZuRSxHQVBFLEVBT0c7QUFDUixXQUFPM0QsSUFBSSxDQUFDTSxLQUFMLENBQVdOLElBQUksQ0FBQ0MsTUFBTCxLQUFnQjBELEdBQTNCLENBQVA7QUFDSDtBQVRRLENBQWI7O0FBWUFoRyxJQUFJLENBQUMrSixRQUFMLEdBQWdCLFVBQVNLLFVBQVQsRUFBcUJDLFdBQXJCLEVBQWtDO0FBQzlDLFdBQVNDLFNBQVQsR0FBcUIsQ0FBRTs7QUFBQTtBQUN2QkEsV0FBUyxDQUFDQyxTQUFWLEdBQXNCRixXQUFXLENBQUNFLFNBQWxDO0FBQ0FILFlBQVUsQ0FBQ0csU0FBWCxHQUF1QixJQUFJRCxTQUFKLEVBQXZCO0FBQ0FGLFlBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsVUFBckIsR0FBa0NKLFVBQWxDO0FBQ0gsQ0FMRDs7QUFPQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUssSUFBakIsQzs7Ozs7Ozs7Ozs7QUNuQkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9zY3JpcHRzL251bWJlcnMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuXG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi9zY3JpcHRzL3V0aWwnKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJDbGljayhlLCBjbGlja2VkUG9zLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gIGNsaWNrZWRQb3MgPSB7XG4gICAgeDogZS5jbGllbnRYIC0gb2Zmc2V0WCxcbiAgICB5OiBlLmNsaWVudFkgLSBvZmZzZXRZLFxuICB9O1xuICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gIHJldHVybiBjbGlja2VkUG9zO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBvZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7XG4gIGNvbnN0IG9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICBsZXQgY2xpY2tlZFBvcztcbiAgY29uc29sZS5sb2coJ0l0cyB3b3JraW5nJyk7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMuY3JlYXRlRXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLnJpZ2h0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKCkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMSkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICByZXR1cm4gZXF1YXRpb247XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLm9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDsgLy8zMjAgMjk5XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7IC8vMzIwIDI5OVxuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcXVhdGlvbiA9IG5ldyBFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDAuMztcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAyNTA7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgPSAwO1xuICAgICAgICB0aGlzLmdhbWVQYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLkluaXRpYWxMYXllciA9IHRoaXMuSW5pdGlhbExheWVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDbGljayA9IHRoaXMucmVnaXN0ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIgPSB0aGlzLmZhbGxpbmdOdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24gPSB0aGlzLmRyYXdFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdOdW1iZXJzID0gdGhpcy5kcmF3TnVtYmVycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZXRlY3RDb2xsaXNpb24gPSB0aGlzLmRldGVjdENvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyQ2hlY2sgPSB0aGlzLnJpZ2h0QW5zd2VyQ2hlY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyID0gdGhpcy5rZXlIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlciA9IHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyID0gdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyID0gdGhpcy5zaW5nbGVEaWdpdEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUZyb21Vc2VyQ2xpY2tzID0gdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbiA9IHRoaXMuY2hlY2tTcVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2sgPSB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHRoaXMucmVnaXN0ZXJDbGljayhlKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB0aGlzLmtleUhhbmRsZXIoZSkpO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYXVzZS1wbGF5XCIpWzBdXG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gIXRoaXMuZ2FtZVBhdXNlZDtcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lUGF1c2VkKSB7dGhpcy5hbmltYXRlKCl9O1xuICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAga2V5SGFuZGxlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0R2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhpcy5uZXdFcXVhdGlvbik7XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMC4zO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IDI1MDtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCA9IDA7XG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyKCk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVJZCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXJDaGVjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yaWdodEFuc3dlcik7XG4gICAgICAgIGxldCBhcnI7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gdGhpcy51c2VyQ2xpY2tzW2ldO1xuICAgICAgICAgICAgYXJyID0gbnVtLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChhcnJbMl0pID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlcihudW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nICs9IGFyclsyXTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY29uY2F0U3RyaW5nKSA9PT0gdGhpcy5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCl7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCArPSAwLjE7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCArPSAwLjE7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5IC09IDI1O1xuICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkICs9IDE7XG4gICAgfVxuXG4gICAgc2luZ2xlRGlnaXRBbnN3ZXIoc3RyaW5nKSB7XG4gICAgICAgIGxldCBhcnIgPSBzdHJpbmcuc3BsaXQoXCJfXCIpO1xuICAgICAgICBjb25zdCBpID0gcGFyc2VJbnQoYXJyWzFdKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJvdHRvbWxpbmVbYXJyWzBdXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbYXJyWzBdXS5zcGxpY2UoaSAtIDEsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIodGhpcy51c2VyQ2xpY2tzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgeTogTWF0aC5hYnMoZS5jbGllbnRZIC0gdGhpcy5vZmZzZXRZKSAtIDI1LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sID0gdGhpcy5jdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKGNsaWNrZWRQb3MueCk7XG4gICAgICAgIGxldCBmTnVtYmVycztcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IGJOdW1iZXJzO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBiTnVtYmVycyA9IFt0aGlzLmJvdHRvbWxpbmVbY3VycmVudENvbF1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGJOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XzBfJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVycy5oYXNPd25Qcm9wZXJ0eShjdXJyZW50Q29sKSkge1xuICAgICAgICAgICAgZk51bWJlcnMgPSB0aGlzLmZhbGxpbmdOdW1iZXJzW2N1cnJlbnRDb2xdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGZOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XyR7aSArIDF9XyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gbnVtLnBvc1sxXTtcbiAgICAgICAgY29uc3QgdG9wID0gbnVtLnBvc1sxXSAtIDgwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPiBsZWZ0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy55ID4gdG9wICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPCBib3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzLmluY2x1ZGVzKGNvbmNhdFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3MucHVzaChjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlcihudW0sIGNvbmNhdFN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJDbGlja3NbaV0gPT09IGNvbmNhdFN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RVbnNlbGVjdE51bWJlcihudW0pIHtcbiAgICAgICAgbnVtLmNsaWNrID0gIW51bS5jbGljaztcbiAgICB9XG5cbiAgICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgICAgIGlmICh4T2ZDbGlja2VkID4geCAmJiB4T2ZDbGlja2VkIDwgeCArIDgwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGhpcy5uZXdFcXVhdGlvbiwgNDAwLCAxNSk7XG4gICAgfVxuXG4gICAgSW5pdGlhbExheWVyKCkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IGk7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzRdLCBudW0pO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXdOdW1iZXIuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBuZXdOdW1iZXIuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tbGluZVtwb3NBdFhdID0gbmV3TnVtYmVyO1xuICAgICAgICAgICAgcG9zQXRYICs9IDgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd051bWJlcnMoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuYm90dG9tbGluZSkuZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcSA9IHRoaXMuYm90dG9tbGluZVtwb3NdO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzcS5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIHNxLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3IyID0gbnVtW2ldLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgbnVtW2ldLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcjIpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKSB7XG4gICAgICAgIGNvbnN0IHggPSBESU1fWFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMF07XG4gICAgICAgIGNvbnN0IHkgPSAyNTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICBmYWxsaW5nTnVtYmVyKCkge1xuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKTtcbiAgICAgICAgY29uc3QgbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTA7XG4gICAgICAgIGNvbnN0IGZhbGxpbmdOdW0gPSBuZXcgTnVtYmVycyhwb3MsIG51bSk7XG4gICAgICAgIGZhbGxpbmdOdW0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIFwiYmxhY2tcIik7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXSA9IHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXSB8fCBbXTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLnB1c2goZmFsbGluZ051bSk7XG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lUGF1c2VkKSB7IHJldHVybiB9XG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVIICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSCA+IHRoaXMuZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMoKTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdENvbGxpc2lvbihwb3MsIGN1cnJlbnRGYWxsaW5nUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgY3VycmVudENvbHVtbiA9IHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXTtcbiAgICAgICAgbGV0IG90aGVyTnVtYmVyO1xuICAgICAgICBpZiAoY3VycmVudEZhbGxpbmdQb3NpdGlvbiAhPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBjdXJyZW50Q29sdW1uW2N1cnJlbnRGYWxsaW5nUG9zaXRpb25dO1xuICAgICAgICAgICAgb3RoZXJOdW1iZXIgPSBjdXJyZW50Q29sdW1uW2N1cnJlbnRGYWxsaW5nUG9zaXRpb24gLSAxXTtcbiAgICAgICAgICAgIHJldHVybiBudW0uY2hlY2tDb2xsaXNpb25XaXRoKG90aGVyTnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICBsZXQgbnVtYmVycyA9IE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGVjdENvbGxpc2lvbihudW1iZXJzW2ldW2pdLnBvcywgaikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRCb3R0b21MaW5lID0gdGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNbaV1bal0ucG9zWzBdLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIG51bWJlcnNbaV1bal0ubW92ZShmb3VuZEJvdHRvbUxpbmUsIHRoaXMuZmFsbFNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmdhbWUubW92ZU9iamVjdHMoKSwgXG4gICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldEludGVydmFsKGNhbGxiYWNrLmJpbmQodGhhdCksIDIwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHRoaXMucG9zID0gb2JqW1wicG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IG9ialtcInZlbFwiXTtcbiAgICAgICAgdGhpcy5jb2xvciA9IG9ialtcImNvbG9yXCJdO1xuICAgICAgICB0aGlzLnRleHQgPSBvYmpbXCJ0ZXh0XCJdO1xuICAgICAgICB0aGlzLmRyYXdTcXVhcmUgPSB0aGlzLmRyYXdTcXVhcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoID0gdGhpcy5jaGVja0NvbGxpc2lvbldpdGguYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKGN0eCwgY29sb3IpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjQwcHggR2VvcmdpYVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRleHQsIHRoaXMucG9zWzBdICsgNDAsIHRoaXMucG9zWzFdICsgNDApO1xuICAgIH1cblxuICAgIG1vdmUoZm91bmRCb3R0b21MaW5lLCBmYWxsU3BlZWQpIHtcbiAgICAgICAgaWYgKGZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSAzOTMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKCFmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gNDczKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvc1sxXSArPSBmYWxsU3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zWzFdID49IG90aGVyTnVtYmVyLnBvc1sxXSAtIDgwO1xuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuLy8gY29uc3QgQ09MT1JTID0ge1xuLy8gICAwOiBcIiNDQ0ZGMDBcIixcbi8vICAgMTogXCIjZmYwMDAwXCIsXG4vLyAgIDI6IFwiI2ZmODAwMFwiLFxuLy8gICAzOiBcIiNmZmZmMDBcIixcbi8vICAgNDogXCIjMDBmZjgwXCIsXG4vLyAgIDU6IFwiI0ZCQUVEMlwiLFxuLy8gICA2OiBcIiNGRjUzNDlcIixcbi8vICAgNzogXCIjMDBmZmNjXCIsXG4vLyAgIDg6IFwiIzAwZjJmZlwiLFxuLy8gICA5OiBcIiNmZjAwNzNcIixcbi8vIH07XG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgMDogXCIjY2NmZjAwXCIsXG4gIDE6IFwiI2ZmMDAwMFwiLFxuICAyOiBcIiNmZjgwMDBcIixcbiAgMzogXCIjZmZmZjAwXCIsXG4gIDQ6IFwiIzAwZmY4MFwiLFxuICA1OiBcIiNmYmFlZDJcIixcbiAgNjogXCIjZmY1MzQ5XCIsXG4gIDc6IFwiIzAwZmZjY1wiLFxuICA4OiBcIiMwMGYyZmZcIixcbiAgOTogXCIjZmYwMDczXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVycyB7XG4gICAgY29uc3RydWN0b3IocG9zLCB0ZXh0KSB7XG4gICAgICAgIC8vIG51bWJlciBpbnNpZGUgc3F1YXJlXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuY2xpY2sgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgIHZlbDogVXRpbC5yYW5kb21WZWMoMiksXG4gICAgICAgICAgY29sb3I6IENPTE9SU1t0aGlzLnRleHRdLFxuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgfTtcbiAgICAgICAgTW92aW5nT2JqZWN0LmNhbGwodGhpcywgb2JqKTtcbiAgICB9XG59O1xuXG5VdGlsLmluaGVyaXRzKE51bWJlcnMsIE1vdmluZ09iamVjdCk7IiwiY29uc3QgVXRpbCA9IHtcbiAgICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBVdGlsLnNjYWxlKFswLCA1XSwgbGVuZ3RoKTtcbiAgICB9LFxuICAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgICByZXR1cm4gWzAsIHZlY1sxXSogbV1cbiAgICB9LFxuICAgIG51bWJlcihudW0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG51bSlcbiAgICB9XG59XG5cblV0aWwuaW5oZXJpdHMgPSBmdW5jdGlvbihjaGlsZENsYXNzLCBwYXJlbnRDbGFzcykge1xuICAgIGZ1bmN0aW9uIFN1cnJvZ2F0ZSgpIHt9O1xuICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnRDbGFzcy5wcm90b3R5cGU7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlKCk7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUuY29uc3RydXRvciA9IGNoaWxkQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9