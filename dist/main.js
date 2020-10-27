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

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById("canvas");
  canvas.setAttribute("width", "800px");
  canvas.setAttribute("height", "600px");
  debugger;
  console.log("window:width ".concat(window.innerWidth));
  console.log("window:height ".concat(window.innerHeight));
  var context = canvas.getContext('2d');
  var offsetX = canvas.offsetLeft;
  var offsetY = canvas.offsetTop;
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
    this.newEq = '';
    this.createEquation = this.createEquation.bind(this);
    this.rightAnswer = this.rightAnswer.bind(this);
    this.newEquation = this.createEquation();
    this.generateNewEquation = this.generateNewEquation.bind(this);
    this.checkAnsonScreen = this.checkAnsonScreen.bind(this);
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
    value: function createEquation(numbersOnScreen) {
      this.generateNewEquation();

      if (numbersOnScreen === undefined) {
        return this.newEq;
      }

      if (this.checkAnsonScreen(numbersOnScreen)) {
        return this.newEq;
      } else {
        return this.createEquation(numbersOnScreen);
      }
    }
  }, {
    key: "checkAnsonScreen",
    value: function checkAnsonScreen(numbersOnScreen) {
      var ans = this.rightAnswer(this.newEq);
      var ansArr = ans.toString().split('');
      var rightAns = {};

      for (var i = 0; i < ansArr.length; i++) {
        rightAns[parseInt(ansArr[i])] = rightAns[parseInt(ansArr[i])] + 1 || 1;

        if (numbersOnScreen[parseInt(ansArr[i])] < rightAns[parseInt(ansArr[i])]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "generateNewEquation",
    value: function generateNewEquation() {
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
      this.newEq = equation;
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
    this.numbersOnScreen = {};
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
      var solvedEq = document.getElementsByClassName("solvedEqs");

      if (solvedEq.length != 0) {
        solvedEq[0].remove();
      }

      this.newEquation = this.equation.createEquation(this.numbersOnScreen);
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

      this.playing = false; // this.context.clearRect(0, 0, WIDTH, HEIGHT);

      document.getElementById("endGame").classList.remove("hidden");
      var h3 = document.createElement("h3");
      var text = document.createTextNode("You solved ".concat(this.numOfEquationsSolved, " equations!"));
      h3.classList.add("solvedEqs");
      h3.appendChild(text);
      document.getElementById("endGame").appendChild(h3);
    }
  }, {
    key: "rightAnswerCheck",
    value: function rightAnswerCheck() {
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
      console.log(this.numbersOnScreen);
      this.newEquation = this.equation.createEquation(this.numbersOnScreen);
      this.rightAnswer = this.equation.rightAnswer(this.newEquation);
      this.userClicks = [];
      this.fallSpeed += 0.2;
      this.frequency = this.frequency === 50 ? this.frequency : this.frequency -= 25;
      this.numOfEquationsSolved += 1;
    }
  }, {
    key: "singleDigitAnswer",
    value: function singleDigitAnswer(string) {
      var arr = string.split("_");
      console.log(this.numbersOnScreen);
      var i = parseInt(arr[1]);

      if (i === 0) {
        delete this.bottomline[arr[0]];
        this.numbersOnScreen[parseInt(arr[2])] -= 1;
      } else {
        this.fallingNumbers[arr[0]].splice(i - 1, 1);
        this.numbersOnScreen[parseInt(arr[2])] -= 1;
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
        this.numbersOnScreen[num] = 1;
        var newNumber = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"]([posAtX, 470], num);
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
      var num = Math.floor(Math.random() * 10);
      this.numbersOnScreen[num] += 1;
      var fallingNum = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"](pos, num);
      fallingNum.drawSquare(this.context, "black");
      this.fallingNumbers[pos[0]] = this.fallingNumbers[pos[0]] || [];
      this.fallingNumbers[pos[0]].push(fallingNum);

      if (this.fallingNumbers[pos[0]].length >= 7) {
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
      if (foundBottomLine && this.pos[1] >= 390) {
        this.pos[1];
      } else if (!foundBottomLine && this.pos[1] >= 470) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJvZmZzZXRYIiwib2Zmc2V0TGVmdCIsIm9mZnNldFkiLCJvZmZzZXRUb3AiLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJuZXdFcSIsImNyZWF0ZUVxdWF0aW9uIiwiYmluZCIsInJpZ2h0QW5zd2VyIiwibmV3RXF1YXRpb24iLCJnZW5lcmF0ZU5ld0VxdWF0aW9uIiwiY2hlY2tBbnNvblNjcmVlbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJudW1iZXJzT25TY3JlZW4iLCJ1bmRlZmluZWQiLCJhbnMiLCJhbnNBcnIiLCJ0b1N0cmluZyIsInJpZ2h0QW5zIiwiaSIsImxlbmd0aCIsInBhcnNlSW50Iiwicm91bmQiLCJzdGFydE51bTEiLCJzdGFydE51bTIiLCJtYXRoT3AiLCJudW0xIiwic2h1ZmZsZWQiLCJzbGljZSIsIm51bTIiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsImZpbGxTdHlsZSIsImZhbGxTcGVlZCIsImZyZXF1ZW5jeSIsIm51bU9mRXF1YXRpb25zU29sdmVkIiwiZ2FtZVBhdXNlZCIsIkluaXRpYWxMYXllciIsInJlZ2lzdGVyQ2xpY2siLCJmYWxsaW5nTnVtYmVyIiwiZHJhd0VxdWF0aW9uIiwiZHJhd051bWJlcnMiLCJhbmltYXRlIiwiZGV0ZWN0Q29sbGlzaW9uIiwicmlnaHRBbnN3ZXJDaGVjayIsImtleUhhbmRsZXIiLCJnYW1lT3ZlciIsImNoZWNrRG91YmxlRGlnaXRBbnN3ZXIiLCJzZWxlY3RVbnNlbGVjdE51bWJlciIsInNpbmdsZURpZ2l0QW5zd2VyIiwicmVtb3ZlRnJvbVVzZXJDbGlja3MiLCJjaGVja1NxUG9zaXRpb24iLCJTdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljayIsImUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJyZXN0YXJ0R2FtZSIsImNsZWFyUmVjdCIsImNsYXNzTGlzdCIsImFkZCIsInNvbHZlZEVxIiwicmVtb3ZlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJoMyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNvbmNhdFN0cmluZyIsIm51bSIsInN0cmluZyIsInNwbGljZSIsImNsaWNrZWRQb3MiLCJ4IiwiY2xpZW50WCIsInkiLCJhYnMiLCJjbGllbnRZIiwiY3VycmVudENvbCIsImN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2siLCJmTnVtYmVycyIsImJOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJwb3MiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJpbmNsdWRlcyIsInB1c2giLCJjbGljayIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImNvbG9yIiwiZHJhd1NxdWFyZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3EiLCJ2YWx1ZXMiLCJjb2xvcjIiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmxvb3IiLCJmYWxsaW5nTnVtIiwibW92ZU9iamVjdHMiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN1cnJlbnRGYWxsaW5nUG9zaXRpb24iLCJjdXJyZW50Q29sdW1uIiwib3RoZXJOdW1iZXIiLCJjaGVja0NvbGxpc2lvbldpdGgiLCJqIiwiZm91bmRCb3R0b21MaW5lIiwibW92ZSIsIkdhbWVWaWV3IiwiY3R4Iiwic3RhcnQiLCJ0aGF0IiwiZHJhdyIsInNldEludGVydmFsIiwiTW92aW5nT2JqZWN0Iiwib2JqIiwidmVsIiwic3Ryb2tlUmVjdCIsImxpbmVXaWR0aCIsImZpbGxSZWN0IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJDT0xPUlMiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJzY2FsZSIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1dG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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Q1M7QUFDZCxXQUFPaEQsSUFBSSxDQUFDa0wsS0FBTCxDQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWCxFQUFtQmxJLE1BQW5CLENBQVA7QUFDSCxHQUhRO0FBSVRrSSxPQUpTLGlCQUlIQyxHQUpHLEVBSUVDLENBSkYsRUFJSztBQUNWLFdBQU8sQ0FBQyxDQUFELEVBQUlELEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUUMsQ0FBWixDQUFQO0FBQ0gsR0FOUTtBQU9UQyxRQVBTLGtCQU9GeEUsR0FQRSxFQU9HO0FBQ1IsV0FBT3pFLElBQUksQ0FBQ2MsS0FBTCxDQUFXZCxJQUFJLENBQUNDLE1BQUwsS0FBZ0J3RSxHQUEzQixDQUFQO0FBQ0g7QUFUUSxDQUFiOztBQVlBN0csSUFBSSxDQUFDaUwsUUFBTCxHQUFnQixVQUFTSyxVQUFULEVBQXFCQyxXQUFyQixFQUFrQztBQUM5QyxXQUFTQyxTQUFULEdBQXFCLENBQUU7O0FBQUE7QUFDdkJBLFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkYsV0FBVyxDQUFDRSxTQUFsQztBQUNBSCxZQUFVLENBQUNHLFNBQVgsR0FBdUIsSUFBSUQsU0FBSixFQUF2QjtBQUNBRixZQUFVLENBQUNHLFNBQVgsQ0FBcUJDLFVBQXJCLEdBQWtDSixVQUFsQztBQUNILENBTEQ7O0FBT0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVMLElBQWpCLEM7Ozs7Ozs7Ozs7O0FDbkJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vc2NyaXB0cy9udW1iZXJzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vc2NyaXB0cy91dGlsJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI4MDBweFwiKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjYwMHB4XCIpO1xuICBkZWJ1Z2dlclxuICBjb25zb2xlLmxvZyhgd2luZG93OndpZHRoICR7d2luZG93LmlubmVyV2lkdGh9YCk7XG4gIGNvbnNvbGUubG9nKGB3aW5kb3c6aGVpZ2h0ICR7d2luZG93LmlubmVySGVpZ2h0fWApO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgY29uc3Qgb2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMubmV3RXEgPSAnJztcblxuICAgICAgICB0aGlzLmNyZWF0ZUVxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5yaWdodEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV3RXF1YXRpb24gPSB0aGlzLmdlbmVyYXRlTmV3RXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0Fuc29uU2NyZWVuID0gdGhpcy5jaGVja0Fuc29uU2NyZWVuLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKG51bWJlcnNPblNjcmVlbikge1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV3RXF1YXRpb24oKTtcbiAgICAgICAgaWYgKG51bWJlcnNPblNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXdFcTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGVja0Fuc29uU2NyZWVuKG51bWJlcnNPblNjcmVlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld0VxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXF1YXRpb24obnVtYmVyc09uU2NyZWVuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQW5zb25TY3JlZW4obnVtYmVyc09uU2NyZWVuKXtcbiAgICAgICAgbGV0IGFucyA9IHRoaXMucmlnaHRBbnN3ZXIodGhpcy5uZXdFcSk7XG4gICAgICAgIGxldCBhbnNBcnIgPSBhbnMudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgICAgIGxldCByaWdodEFucyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICByaWdodEFuc1twYXJzZUludChhbnNBcnJbaV0pXSA9IHJpZ2h0QW5zW3BhcnNlSW50KGFuc0FycltpXSldICsgMSB8fCAxXG4gICAgICAgICAgICBpZiAobnVtYmVyc09uU2NyZWVuW3BhcnNlSW50KGFuc0FycltpXSldIDwgcmlnaHRBbnNbcGFyc2VJbnQoYW5zQXJyW2ldKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVOZXdFcXVhdGlvbigpe1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMSkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICB0aGlzLm5ld0VxID0gZXF1YXRpb25cbiAgICB9XG5cbiAgICByaWdodEFuc3dlcihlcXVhdGlvbil7XG4gICAgICAgIGxldCBhcnIgPSBlcXVhdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtMSA9IHBhcnNlSW50KGFyclsyXSk7XG4gICAgICAgIGxldCBudW0yID0gcGFyc2VJbnQoYXJyWzRdKTtcbiAgICAgICAgc3dpdGNoKGFyclszXSkge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5pbXBvcnQgRXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gWzAsIDgwLCAxNjAsIDI0MCwgMzIwLCA0MDAsIDQ4MCwgNTYwLCA2NDAsIDcyMF07XG5jb25zdCBXSURUSCA9IDgwMDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0OyAvLzMyMCAyOTlcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDsgLy8zMjAgMjk5XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMC4zO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IDI1MDtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbiA9IHt9O1xuXG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbiA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXJDaGVjayA9IHRoaXMucmlnaHRBbnN3ZXJDaGVjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleUhhbmRsZXIgPSB0aGlzLmtleUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyID0gdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIgPSB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIgPSB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVVzZXJDbGlja3MgPSB0aGlzLnJlbW92ZUZyb21Vc2VyQ2xpY2tzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tTcVBvc2l0aW9uID0gdGhpcy5jaGVja1NxUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljayA9IHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4gdGhpcy5yZWdpc3RlckNsaWNrKGUpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHRoaXMua2V5SGFuZGxlcihlKSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhdXNlLXBsYXlcIilbMF1cbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVQYXVzZWQgPSAhdGhpcy5nYW1lUGF1c2VkO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVQYXVzZWQpIHt0aGlzLmFuaW1hdGUoKX07XG4gICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBrZXlIYW5kbGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBsZXQgc29sdmVkRXEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic29sdmVkRXFzXCIpO1xuICAgICAgICBpZiAoc29sdmVkRXEubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHNvbHZlZEVxWzBdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKHRoaXMubnVtYmVyc09uU2NyZWVuKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhpcy5uZXdFcXVhdGlvbik7XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMC4zO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IDI1MDtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCA9IDA7XG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyKCk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVJZCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFlvdSBzb2x2ZWQgJHt0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkfSBlcXVhdGlvbnMhYCk7XG4gICAgICAgIGgzLmNsYXNzTGlzdC5hZGQoXCJzb2x2ZWRFcXNcIik7XG4gICAgICAgIGgzLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIH1cblxuICAgIHJpZ2h0QW5zd2VyQ2hlY2soKSB7XG4gICAgICAgIGxldCBhcnI7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gdGhpcy51c2VyQ2xpY2tzW2ldO1xuICAgICAgICAgICAgYXJyID0gbnVtLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChhcnJbMl0pID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlcihudW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nICs9IGFyclsyXTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY29uY2F0U3RyaW5nKSA9PT0gdGhpcy5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtYmVyc09uU2NyZWVuKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24odGhpcy5udW1iZXJzT25TY3JlZW4pO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5lcXVhdGlvbi5yaWdodEFuc3dlcih0aGlzLm5ld0VxdWF0aW9uKTtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkICs9IDAuMjtcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAodGhpcy5mcmVxdWVuY3kgPT09IDUwID8gdGhpcy5mcmVxdWVuY3kgOiB0aGlzLmZyZXF1ZW5jeSAtPSAyNSk7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgKz0gMTtcbiAgICB9XG5cbiAgICBzaW5nbGVEaWdpdEFuc3dlcihzdHJpbmcpIHtcbiAgICAgICAgbGV0IGFyciA9IHN0cmluZy5zcGxpdChcIl9cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtYmVyc09uU2NyZWVuKTtcbiAgICAgICAgY29uc3QgaSA9IHBhcnNlSW50KGFyclsxXSk7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ib3R0b21saW5lW2FyclswXV07XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltwYXJzZUludChhcnJbMl0pXSAtPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1thcnJbMF1dLnNwbGljZShpIC0gMSwgMSk7XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltwYXJzZUludChhcnJbMl0pXSAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIodGhpcy51c2VyQ2xpY2tzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gdGhpcy5vZmZzZXRYLFxuICAgICAgICAgICAgeTogTWF0aC5hYnMoZS5jbGllbnRZIC0gdGhpcy5vZmZzZXRZKSAtIDI1LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sID0gdGhpcy5jdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKGNsaWNrZWRQb3MueCk7XG4gICAgICAgIGxldCBmTnVtYmVycztcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IGJOdW1iZXJzO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBiTnVtYmVycyA9IFt0aGlzLmJvdHRvbWxpbmVbY3VycmVudENvbF1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGJOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XzBfJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVycy5oYXNPd25Qcm9wZXJ0eShjdXJyZW50Q29sKSkge1xuICAgICAgICAgICAgZk51bWJlcnMgPSB0aGlzLmZhbGxpbmdOdW1iZXJzW2N1cnJlbnRDb2xdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGZOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XyR7aSArIDF9XyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gbnVtLnBvc1sxXTtcbiAgICAgICAgY29uc3QgdG9wID0gbnVtLnBvc1sxXSAtIDgwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPiBsZWZ0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy55ID4gdG9wICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPCBib3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzLmluY2x1ZGVzKGNvbmNhdFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3MucHVzaChjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlcihudW0sIGNvbmNhdFN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJDbGlja3NbaV0gPT09IGNvbmNhdFN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RVbnNlbGVjdE51bWJlcihudW0pIHtcbiAgICAgICAgbnVtLmNsaWNrID0gIW51bS5jbGljaztcbiAgICB9XG5cbiAgICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgICAgIGlmICh4T2ZDbGlja2VkID4geCAmJiB4T2ZDbGlja2VkIDwgeCArIDgwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGhpcy5uZXdFcXVhdGlvbiwgNDAwLCAxNSk7XG4gICAgfVxuXG4gICAgSW5pdGlhbExheWVyKCkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IGk7XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltudW1dID0gMTtcbiAgICAgICAgICAgIGNvbnN0IG5ld051bWJlciA9IG5ldyBOdW1iZXJzKFtwb3NBdFgsIDQ3MF0sIG51bSk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ld051bWJlci5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIG5ld051bWJlci5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21saW5lW3Bvc0F0WF0gPSBuZXdOdW1iZXI7XG4gICAgICAgICAgICBwb3NBdFggKz0gODA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3TnVtYmVycygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ib3R0b21saW5lKS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNxID0gdGhpcy5ib3R0b21saW5lW3Bvc107XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHNxLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgc3EuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycykuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvcjIgPSBudW1baV0uY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBudW1baV0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yMik7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpIHtcbiAgICAgICAgY29uc3QgeCA9IERJTV9YW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwXTtcbiAgICAgICAgY29uc3QgeSA9IDI1O1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIGZhbGxpbmdOdW1iZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpO1xuICAgICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuW251bV0gKz0gMTtcbiAgICAgICAgY29uc3QgZmFsbGluZ051bSA9IG5ldyBOdW1iZXJzKHBvcywgbnVtKTtcbiAgICAgICAgZmFsbGluZ051bS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgXCJibGFja1wiKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dIHx8IFtdO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ucHVzaChmYWxsaW5nTnVtKTtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5sZW5ndGggPj0gNykge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBhdXNlZCkgeyByZXR1cm4gfVxuICAgICAgICBpZiAodGhpcy5wbGF5aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lSCArPSAxO1xuICAgICAgICBpZiAodGhpcy5mcmFtZUggPiB0aGlzLmZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyKCk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmRyYXdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4gdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3RDb2xsaXNpb24ocG9zLCBjdXJyZW50RmFsbGluZ1Bvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV07XG4gICAgICAgIGxldCBvdGhlck51bWJlcjtcbiAgICAgICAgaWYgKGN1cnJlbnRGYWxsaW5nUG9zaXRpb24gIT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uXTtcbiAgICAgICAgICAgIG90aGVyTnVtYmVyID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIC0gMV07XG4gICAgICAgICAgICByZXR1cm4gbnVtLmNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgbGV0IG51bWJlcnMgPSBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZXRlY3RDb2xsaXNpb24obnVtYmVyc1tpXVtqXS5wb3MsIGopKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQm90dG9tTGluZSA9IHRoaXMuYm90dG9tbGluZS5oYXNPd25Qcm9wZXJ0eShbXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLnBvc1swXSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLm1vdmUoZm91bmRCb3R0b21MaW5lLCB0aGlzLmZhbGxTcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5nYW1lLm1vdmVPYmplY3RzKCksIFxuICAgICAgICAgICAgdGhhdC5nYW1lLmRyYXcodGhhdC5jdHgpO1xuICAgICAgICB9O1xuICAgICAgICBzZXRJbnRlcnZhbChjYWxsYmFjay5iaW5kKHRoYXQpLCAyMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuICAgICAgICB0aGlzLnBvcyA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgdGhpcy52ZWwgPSBvYmpbXCJ2ZWxcIl07XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmpbXCJjb2xvclwiXTtcbiAgICAgICAgdGhpcy50ZXh0ID0gb2JqW1widGV4dFwiXTtcbiAgICAgICAgdGhpcy5kcmF3U3F1YXJlID0gdGhpcy5kcmF3U3F1YXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aCA9IHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgsIGNvbG9yKSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLnBvc1swXSArIDQwLCB0aGlzLnBvc1sxXSArIDQwKTtcbiAgICB9XG5cbiAgICBtb3ZlKGZvdW5kQm90dG9tTGluZSwgZmFsbFNwZWVkKSB7XG4gICAgICAgIGlmIChmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gMzkwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIGlmICghZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDQ3MCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3NbMV0gKz0gZmFsbFNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb25XaXRoKG90aGVyTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1sxXSA+PSBvdGhlck51bWJlci5wb3NbMV0gLSA4MDtcbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbi8vIGNvbnN0IENPTE9SUyA9IHtcbi8vICAgMDogXCIjQ0NGRjAwXCIsXG4vLyAgIDE6IFwiI2ZmMDAwMFwiLFxuLy8gICAyOiBcIiNmZjgwMDBcIixcbi8vICAgMzogXCIjZmZmZjAwXCIsXG4vLyAgIDQ6IFwiIzAwZmY4MFwiLFxuLy8gICA1OiBcIiNGQkFFRDJcIixcbi8vICAgNjogXCIjRkY1MzQ5XCIsXG4vLyAgIDc6IFwiIzAwZmZjY1wiLFxuLy8gICA4OiBcIiMwMGYyZmZcIixcbi8vICAgOTogXCIjZmYwMDczXCIsXG4vLyB9O1xuXG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI2NjZmYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjZmJhZWQyXCIsXG4gIDY6IFwiI2ZmNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmNsaWNrID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKDIpLFxuICAgICAgICAgIGNvbG9yOiBDT0xPUlNbdGhpcy50ZXh0XSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgIH07XG4gICAgICAgIE1vdmluZ09iamVjdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfVxufTtcblxuVXRpbC5pbmhlcml0cyhOdW1iZXJzLCBNb3ZpbmdPYmplY3QpOyIsImNvbnN0IFV0aWwgPSB7XG4gICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gVXRpbC5zY2FsZShbMCwgNV0sIGxlbmd0aCk7XG4gICAgfSxcbiAgICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgICAgcmV0dXJuIFswLCB2ZWNbMV0qIG1dXG4gICAgfSxcbiAgICBudW1iZXIobnVtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBudW0pXG4gICAgfVxufVxuXG5VdGlsLmluaGVyaXRzID0gZnVuY3Rpb24oY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTdXJyb2dhdGUoKSB7fTtcbiAgICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50Q2xhc3MucHJvdG90eXBlO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnV0b3IgPSBjaGlsZENsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==