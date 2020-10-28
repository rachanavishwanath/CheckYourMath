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
  canvas.setAttribute("height", "600px"); // const game = new Game(canvas);

  document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
      var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);
      game.restartGame();
    }
  });
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
    this.playing = true;
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
    document.getElementsByClassName("pause-play")[0].addEventListener("click", function (e) {
      e.preventDefault();
      console.log(_this.gamePaused);
      _this.gamePaused = !_this.gamePaused;
      console.log(_this.gamePaused);

      if (!_this.gamePaused) {
        _this.animate();
      }

      ;
    });
  }

  _createClass(Game, [{
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

      this.playing = false;
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
        x: e.clientX - (window.innerWidth - WIDTH) / 2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiZSIsImtleSIsImdhbWUiLCJHYW1lIiwicmVzdGFydEdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwibmV3RXEiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwiZ2VuZXJhdGVOZXdFcXVhdGlvbiIsImNoZWNrQW5zb25TY3JlZW4iLCJ1bnNodWZmbGVkIiwic3BsaXQiLCJtYXAiLCJhIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJ2YWx1ZSIsImIiLCJqb2luIiwibnVtYmVyc09uU2NyZWVuIiwidW5kZWZpbmVkIiwiYW5zIiwiYW5zQXJyIiwidG9TdHJpbmciLCJyaWdodEFucyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldFgiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0WSIsIm9mZnNldFRvcCIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsImZpbGxTdHlsZSIsImZhbGxTcGVlZCIsImZyZXF1ZW5jeSIsIm51bU9mRXF1YXRpb25zU29sdmVkIiwiZ2FtZVBhdXNlZCIsIkluaXRpYWxMYXllciIsInJlZ2lzdGVyQ2xpY2siLCJmYWxsaW5nTnVtYmVyIiwiZHJhd0VxdWF0aW9uIiwiZHJhd051bWJlcnMiLCJhbmltYXRlIiwiZGV0ZWN0Q29sbGlzaW9uIiwicmlnaHRBbnN3ZXJDaGVjayIsImdhbWVPdmVyIiwiY2hlY2tEb3VibGVEaWdpdEFuc3dlciIsInNlbGVjdFVuc2VsZWN0TnVtYmVyIiwic2luZ2xlRGlnaXRBbnN3ZXIiLCJyZW1vdmVGcm9tVXNlckNsaWNrcyIsImNoZWNrU3FQb3NpdGlvbiIsIlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNsZWFyUmVjdCIsImNsYXNzTGlzdCIsImFkZCIsInNvbHZlZEVxIiwicmVtb3ZlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJoMyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNvbmNhdFN0cmluZyIsIm51bSIsInN0cmluZyIsInNwbGljZSIsImNsaWNrZWRQb3MiLCJ4IiwiY2xpZW50WCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ5IiwiYWJzIiwiY2xpZW50WSIsImN1cnJlbnRDb2wiLCJjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrIiwiZk51bWJlcnMiLCJiTnVtYmVycyIsImhhc093blByb3BlcnR5IiwicG9zIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9wIiwiaW5jbHVkZXMiLCJwdXNoIiwiY2xpY2siLCJ4T2ZDbGlja2VkIiwic3Ryb2tlU3R5bGUiLCJmb250Iiwic3Ryb2tlVGV4dCIsInBvc0F0WCIsIm5ld051bWJlciIsIk51bWJlcnMiLCJjb2xvciIsImRyYXdTcXVhcmUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNxIiwidmFsdWVzIiwiY29sb3IyIiwicmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycyIsImZsb29yIiwiZmFsbGluZ051bSIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIiwiY3VycmVudENvbHVtbiIsIm90aGVyTnVtYmVyIiwiY2hlY2tDb2xsaXNpb25XaXRoIiwiaiIsImZvdW5kQm90dG9tTGluZSIsIm1vdmUiLCJHYW1lVmlldyIsImN0eCIsInN0YXJ0IiwidGhhdCIsImRyYXciLCJzZXRJbnRlcnZhbCIsIk1vdmluZ09iamVjdCIsIm9iaiIsInZlbCIsInN0cm9rZVJlY3QiLCJsaW5lV2lkdGgiLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwic2NhbGUiLCJ2ZWMiLCJtIiwibnVtYmVyIiwiY2hpbGRDbGFzcyIsInBhcmVudENsYXNzIiwiU3Vycm9nYXRlIiwicHJvdG90eXBlIiwiY29uc3RydXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw2Q0FBRCxDQUFwQjs7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0FELFFBQU0sQ0FBQ0UsWUFBUCxDQUFvQixPQUFwQixFQUE2QixPQUE3QjtBQUNBRixRQUFNLENBQUNFLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEIsT0FBOUIsRUFIa0QsQ0FJbEQ7O0FBQ0FKLFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0ksQ0FBRCxFQUFPO0FBQzFDLFFBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDbkIsVUFBTUMsSUFBSSxHQUFHLElBQUlDLHFEQUFKLENBQVNOLE1BQVQsQ0FBYjtBQUNBSyxVQUFJLENBQUNFLFdBQUw7QUFDSDtBQUNGLEdBTEQ7QUFPRCxDQVpELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsSUFBTUMsTUFBTSxHQUFHLENBQ1gsR0FEVyxFQUVYLEdBRlcsRUFHWCxHQUhXLENBQWY7QUFNQSxJQUFNQyxPQUFPLEdBQUcsWUFBaEI7O0lBRXFCQyxRO0FBQ2pCLG9CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRUEsU0FBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLRSxXQUFMLEdBQW1CLEtBQUtILGNBQUwsRUFBbkI7QUFDQSxTQUFLSSxtQkFBTCxHQUEyQixLQUFLQSxtQkFBTCxDQUF5QkgsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBM0I7QUFDQSxTQUFLSSxnQkFBTCxHQUF3QixLQUFLQSxnQkFBTCxDQUFzQkosSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBeEI7QUFDSDs7Ozs2QkFFU0ssVSxFQUFZO0FBQ2xCLGFBQU9BLFVBQVUsQ0FDUkMsS0FERixDQUNRLEVBRFIsRUFFRUMsR0FGRixDQUVNLFVBQUNDLENBQUQ7QUFBQSxlQUFRO0FBQUVDLGNBQUksRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEVBQVI7QUFBdUJDLGVBQUssRUFBRUo7QUFBOUIsU0FBUjtBQUFBLE9BRk4sRUFHRUMsSUFIRixDQUdPLFVBQUNELENBQUQsRUFBSUssQ0FBSjtBQUFBLGVBQVVMLENBQUMsQ0FBQ0MsSUFBRixHQUFTSSxDQUFDLENBQUNKLElBQXJCO0FBQUEsT0FIUCxFQUlFRixHQUpGLENBSU0sVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ0ksS0FBVDtBQUFBLE9BSk4sRUFLRUUsSUFMRixDQUtPLEVBTFAsQ0FBUDtBQU1IOzs7bUNBRWNDLGUsRUFBaUI7QUFDNUIsV0FBS1osbUJBQUw7O0FBQ0EsVUFBSVksZUFBZSxLQUFLQyxTQUF4QixFQUFtQztBQUMvQixlQUFPLEtBQUtsQixLQUFaO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLTSxnQkFBTCxDQUFzQlcsZUFBdEIsQ0FBSixFQUE0QztBQUN4QyxlQUFPLEtBQUtqQixLQUFaO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxLQUFLQyxjQUFMLENBQW9CZ0IsZUFBcEIsQ0FBUDtBQUNIO0FBQ0o7OztxQ0FFZ0JBLGUsRUFBZ0I7QUFDN0IsVUFBSUUsR0FBRyxHQUFHLEtBQUtoQixXQUFMLENBQWlCLEtBQUtILEtBQXRCLENBQVY7QUFDQSxVQUFJb0IsTUFBTSxHQUFHRCxHQUFHLENBQUNFLFFBQUosR0FBZWIsS0FBZixDQUFxQixFQUFyQixDQUFiO0FBQ0EsVUFBSWMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxNQUFNLENBQUNJLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXVDO0FBQ25DRCxnQkFBUSxDQUFDRyxRQUFRLENBQUNMLE1BQU0sQ0FBQ0csQ0FBRCxDQUFQLENBQVQsQ0FBUixHQUFnQ0QsUUFBUSxDQUFDRyxRQUFRLENBQUNMLE1BQU0sQ0FBQ0csQ0FBRCxDQUFQLENBQVQsQ0FBUixHQUFnQyxDQUFoQyxJQUFxQyxDQUFyRTs7QUFDQSxZQUFJTixlQUFlLENBQUNRLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDRyxDQUFELENBQVAsQ0FBVCxDQUFmLEdBQXVDRCxRQUFRLENBQUNHLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDRyxDQUFELENBQVAsQ0FBVCxDQUFuRCxFQUEwRTtBQUN0RSxpQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLElBQVA7QUFDSDs7OzBDQUVvQjtBQUNqQixVQUFNQyxNQUFNLEdBQUdaLElBQUksQ0FBQ2MsS0FBTCxDQUFZZCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBakIsR0FBdUIsQ0FBbEMsSUFBdUMsQ0FBdEQ7QUFDQSxVQUFNYyxTQUFTLEdBQUdmLElBQUksQ0FBQ2MsS0FBTCxDQUFZZCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBakIsR0FBdUIsQ0FBbEMsSUFBdUMsQ0FBekQ7QUFDQSxVQUFNZSxTQUFTLEdBQUdoQixJQUFJLENBQUNjLEtBQUwsQ0FBWWQsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQWpCLEdBQXVCLENBQWxDLElBQXVDLENBQXpEO0FBQ0EsVUFBTWdCLE1BQU0sR0FBR2pDLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ2MsS0FBTCxDQUFZZCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBakIsR0FBdUIsQ0FBbEMsQ0FBRCxDQUFyQjtBQUNBLFVBQUlpQixJQUFJLEdBQUcsS0FBS0MsUUFBTCxDQUFjbEMsT0FBZCxFQUF1Qm1DLEtBQXZCLENBQ1BMLFNBRE8sRUFFUEEsU0FBUyxHQUFHSCxNQUZMLENBQVg7QUFJQSxVQUFJUyxJQUFJLEdBQUcsS0FBS0YsUUFBTCxDQUFjbEMsT0FBZCxFQUF1Qm1DLEtBQXZCLENBQ1BKLFNBRE8sRUFFUEEsU0FBUyxHQUFHSixNQUZMLENBQVg7O0FBSUEsVUFBSUMsUUFBUSxDQUFDSyxJQUFELENBQVIsR0FBaUJMLFFBQVEsQ0FBQ1EsSUFBRCxDQUF6QixJQUFtQ0osTUFBTSxLQUFLLEdBQWxELEVBQXVEO0FBQ25ELFlBQU1LLElBQUksR0FBR0osSUFBYjtBQUNBQSxZQUFJLEdBQUdHLElBQVA7QUFDQUEsWUFBSSxHQUFHQyxJQUFQO0FBQ0g7O0FBQ0QsVUFBTUMsUUFBUSxxQkFBY0wsSUFBZCxjQUFzQkQsTUFBdEIsY0FBZ0NJLElBQWhDLE1BQWQ7QUFDQSxXQUFLakMsS0FBTCxHQUFhbUMsUUFBYjtBQUNIOzs7Z0NBRVdBLFEsRUFBUztBQUNqQixVQUFJQyxHQUFHLEdBQUdELFFBQVEsQ0FBQzNCLEtBQVQsQ0FBZSxHQUFmLENBQVY7QUFDQSxVQUFJc0IsSUFBSSxHQUFHTCxRQUFRLENBQUNXLEdBQUcsQ0FBQyxDQUFELENBQUosQ0FBbkI7QUFDQSxVQUFJSCxJQUFJLEdBQUdSLFFBQVEsQ0FBQ1csR0FBRyxDQUFDLENBQUQsQ0FBSixDQUFuQjs7QUFDQSxjQUFPQSxHQUFHLENBQUMsQ0FBRCxDQUFWO0FBQ0ksYUFBSyxHQUFMO0FBQ0ksaUJBQU9OLElBQUksR0FBR0csSUFBZDs7QUFDSixhQUFLLEdBQUw7QUFDSSxpQkFBT0gsSUFBSSxHQUFHRyxJQUFkOztBQUNKLGFBQUssR0FBTDtBQUNJLGlCQUFPSCxJQUFJLEdBQUdHLElBQWQ7QUFOUjtBQVFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGTDtBQUNBO0FBQ0E7O0FBQ0EsSUFBTWpELElBQUksR0FBR0MsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFFQSxJQUFNb0QsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxHQUFSLEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixHQUF2QixFQUE0QixHQUE1QixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0QyxFQUEyQyxHQUEzQyxDQUFkO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLEdBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsR0FBZjs7SUFFcUI5QyxJO0FBQ2pCLGdCQUFZTixNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLFNBQUtxRCxPQUFMLEdBQWVyRCxNQUFNLENBQUNzRCxVQUFQLENBQWtCLElBQWxCLENBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWV2RCxNQUFNLENBQUN3RCxVQUF0QixDQUZnQixDQUVrQjs7QUFDbEMsU0FBS0MsT0FBTCxHQUFlekQsTUFBTSxDQUFDMEQsU0FBdEIsQ0FIZ0IsQ0FHaUI7O0FBQ2pDLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtqQixRQUFMLEdBQWdCLElBQUlyQyxpREFBSixFQUFoQjtBQUNBLFNBQUtNLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxTQUFLRCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS2tELFNBQUwsR0FBaUIsT0FBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEdBQWpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixHQUFqQjtBQUNBLFNBQUtDLG9CQUFMLEdBQTRCLENBQTVCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUt4QyxlQUFMLEdBQXVCLEVBQXZCO0FBRUEsU0FBS3lDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQnhELElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS3lELGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQnpELElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsU0FBSzBELGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQjFELElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsU0FBSzJELFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQjNELElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBSzRELFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQjVELElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBSzZELE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWE3RCxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDQSxTQUFLOEQsZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCOUQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDQSxTQUFLK0QsZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQUwsQ0FBc0IvRCxJQUF0QixDQUEyQixJQUEzQixDQUF4QjtBQUNBLFNBQUtnRSxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY2hFLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLaUUsc0JBQUwsR0FBOEIsS0FBS0Esc0JBQUwsQ0FBNEJqRSxJQUE1QixDQUFpQyxJQUFqQyxDQUE5QjtBQUNBLFNBQUtrRSxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQmxFLElBQTFCLENBQStCLElBQS9CLENBQTVCO0FBQ0EsU0FBS21FLGlCQUFMLEdBQXlCLEtBQUtBLGlCQUFMLENBQXVCbkUsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxTQUFLb0Usb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJwRSxJQUExQixDQUErQixJQUEvQixDQUE1QjtBQUNBLFNBQUtxRSxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJyRSxJQUFyQixDQUEwQixJQUExQixDQUF2QjtBQUNBLFNBQUtzRSwwQkFBTCxHQUFrQyxLQUFLQSwwQkFBTCxDQUFnQ3RFLElBQWhDLENBQXFDLElBQXJDLENBQWxDO0FBRUFkLFVBQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQ0ksQ0FBRDtBQUFBLGFBQU8sS0FBSSxDQUFDb0UsYUFBTCxDQUFtQnBFLENBQW5CLENBQVA7QUFBQSxLQUFyQztBQUVBTCxZQUFRLENBQ0x1RixzQkFESCxDQUMwQixZQUQxQixFQUN3QyxDQUR4QyxFQUVHdEYsZ0JBRkgsQ0FFb0IsT0FGcEIsRUFFNkIsVUFBQ0ksQ0FBRCxFQUFPO0FBQ2hDQSxPQUFDLENBQUNtRixjQUFGO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUksQ0FBQ25CLFVBQWpCO0FBQ0EsV0FBSSxDQUFDQSxVQUFMLEdBQWtCLENBQUMsS0FBSSxDQUFDQSxVQUF4QjtBQUNBa0IsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBSSxDQUFDbkIsVUFBakI7O0FBQ0EsVUFBSSxDQUFDLEtBQUksQ0FBQ0EsVUFBVixFQUFzQjtBQUFDLGFBQUksQ0FBQ00sT0FBTDtBQUFlOztBQUFBO0FBRXZDLEtBVEg7QUFXSDs7OztrQ0FFYTtBQUNWLFdBQUt0QixPQUFMLENBQWFvQyxTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCdEMsS0FBN0IsRUFBb0NDLE1BQXBDO0FBQ0F0RCxjQUFRLENBQUNHLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUN5RixTQUFyQyxDQUErQ0MsR0FBL0MsQ0FBbUQsUUFBbkQ7QUFDQTdGLGNBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixFQUFtQ3lGLFNBQW5DLENBQTZDQyxHQUE3QyxDQUFpRCxRQUFqRDtBQUNBLFVBQUlDLFFBQVEsR0FBRzlGLFFBQVEsQ0FBQ3VGLHNCQUFULENBQWdDLFdBQWhDLENBQWY7O0FBQ0EsVUFBSU8sUUFBUSxDQUFDeEQsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN0QndELGdCQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlDLE1BQVo7QUFDSDs7QUFDRCxXQUFLN0UsV0FBTCxHQUFtQixLQUFLK0IsUUFBTCxDQUFjbEMsY0FBZCxDQUE2QixLQUFLZ0IsZUFBbEMsQ0FBbkI7QUFDQSxXQUFLZCxXQUFMLEdBQW1CLEtBQUtnQyxRQUFMLENBQWNoQyxXQUFkLENBQTBCLEtBQUtDLFdBQS9CLENBQW5CO0FBQ0EsV0FBSzJDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxXQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsV0FBS0ksU0FBTCxHQUFpQixHQUFqQjtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsR0FBakI7QUFDQSxXQUFLQyxvQkFBTCxHQUE0QixDQUE1QjtBQUNBLFdBQUtFLFlBQUw7QUFDQSxXQUFLRSxhQUFMO0FBQ0EsV0FBS0csT0FBTDtBQUNIOzs7K0JBRVU7QUFDUCxVQUFJLEtBQUtYLE9BQVQsRUFBa0I7QUFDZDhCLDRCQUFvQixDQUFDLEtBQUs5QixPQUFOLENBQXBCO0FBQ0g7O0FBQ0QsV0FBS0QsT0FBTCxHQUFlLEtBQWY7QUFDQWpFLGNBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixFQUFtQ3lGLFNBQW5DLENBQTZDRyxNQUE3QyxDQUFvRCxRQUFwRDtBQUNBLFVBQU1FLEVBQUUsR0FBR2pHLFFBQVEsQ0FBQ2tHLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLFVBQU1DLElBQUksR0FBR25HLFFBQVEsQ0FBQ29HLGNBQVQsc0JBQXNDLEtBQUs5QixvQkFBM0MsaUJBQWI7QUFDQTJCLFFBQUUsQ0FBQ0wsU0FBSCxDQUFhQyxHQUFiLENBQWlCLFdBQWpCO0FBQ0FJLFFBQUUsQ0FBQ0ksV0FBSCxDQUFlRixJQUFmO0FBQ0FuRyxjQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNrRyxXQUFuQyxDQUErQ0osRUFBL0M7QUFDSDs7O3VDQUVrQjtBQUNmLFVBQUkvQyxHQUFKO0FBQ0EsVUFBSW9ELFlBQVksR0FBRyxFQUFuQjs7QUFDQSxXQUFLLElBQUlqRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUsyQixVQUFMLENBQWdCMUIsTUFBcEMsRUFBNENELENBQUMsRUFBN0MsRUFBaUQ7QUFDN0MsWUFBTWtFLEdBQUcsR0FBRyxLQUFLdkMsVUFBTCxDQUFnQjNCLENBQWhCLENBQVo7QUFDQWEsV0FBRyxHQUFHcUQsR0FBRyxDQUFDakYsS0FBSixDQUFVLEdBQVYsQ0FBTjs7QUFDQSxZQUFJaUIsUUFBUSxDQUFDVyxHQUFHLENBQUMsQ0FBRCxDQUFKLENBQVIsS0FBcUIsS0FBS2pDLFdBQTlCLEVBQTJDO0FBQ3ZDLGVBQUtrRSxpQkFBTCxDQUF1Qm9CLEdBQXZCO0FBQ0EsZUFBS2pCLDBCQUFMO0FBQ0gsU0FIRCxNQUdPO0FBQ0hnQixzQkFBWSxJQUFJcEQsR0FBRyxDQUFDLENBQUQsQ0FBbkI7O0FBQ0EsY0FBSVgsUUFBUSxDQUFDK0QsWUFBRCxDQUFSLEtBQTJCLEtBQUtyRixXQUFwQyxFQUFpRDtBQUM3QyxpQkFBS2dFLHNCQUFMO0FBQ0EsaUJBQUtLLDBCQUFMO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7OztpREFFMkI7QUFDeEIsV0FBS3BFLFdBQUwsR0FBbUIsS0FBSytCLFFBQUwsQ0FBY2xDLGNBQWQsQ0FBNkIsS0FBS2dCLGVBQWxDLENBQW5CO0FBQ0EsV0FBS2QsV0FBTCxHQUFtQixLQUFLZ0MsUUFBTCxDQUFjaEMsV0FBZCxDQUEwQixLQUFLQyxXQUEvQixDQUFuQjtBQUNBLFdBQUs4QyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsV0FBS0ksU0FBTCxJQUFrQixHQUFsQjtBQUNBLFdBQUtDLFNBQUwsR0FBa0IsS0FBS0EsU0FBTCxLQUFtQixFQUFuQixHQUF3QixLQUFLQSxTQUE3QixHQUF5QyxLQUFLQSxTQUFMLElBQWtCLEVBQTdFO0FBQ0EsV0FBS0Msb0JBQUwsSUFBNkIsQ0FBN0I7QUFDSDs7O3NDQUVpQmtDLE0sRUFBUTtBQUN0QixVQUFJdEQsR0FBRyxHQUFHc0QsTUFBTSxDQUFDbEYsS0FBUCxDQUFhLEdBQWIsQ0FBVjtBQUNBLFVBQU1lLENBQUMsR0FBR0UsUUFBUSxDQUFDVyxHQUFHLENBQUMsQ0FBRCxDQUFKLENBQWxCOztBQUNBLFVBQUliLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDVCxlQUFPLEtBQUt3QixVQUFMLENBQWdCWCxHQUFHLENBQUMsQ0FBRCxDQUFuQixDQUFQO0FBQ0EsYUFBS25CLGVBQUwsQ0FBcUJRLFFBQVEsQ0FBQ1csR0FBRyxDQUFDLENBQUQsQ0FBSixDQUE3QixLQUEwQyxDQUExQztBQUNILE9BSEQsTUFHTztBQUNILGFBQUtZLGNBQUwsQ0FBb0JaLEdBQUcsQ0FBQyxDQUFELENBQXZCLEVBQTRCdUQsTUFBNUIsQ0FBbUNwRSxDQUFDLEdBQUcsQ0FBdkMsRUFBMEMsQ0FBMUM7QUFDQSxhQUFLTixlQUFMLENBQXFCUSxRQUFRLENBQUNXLEdBQUcsQ0FBQyxDQUFELENBQUosQ0FBN0IsS0FBMEMsQ0FBMUM7QUFDSDtBQUNKOzs7NkNBRXdCO0FBQ3JCLFdBQUssSUFBSWIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMkIsVUFBTCxDQUFnQjFCLE1BQXBDLEVBQTRDRCxDQUFDLEVBQTdDLEVBQWlEO0FBQzdDLGFBQUs4QyxpQkFBTCxDQUF1QixLQUFLbkIsVUFBTCxDQUFnQjNCLENBQWhCLENBQXZCO0FBQ0g7QUFDSjs7O2tDQUVhaEMsQyxFQUFHO0FBQ2IsVUFBTXFHLFVBQVUsR0FBRztBQUNmQyxTQUFDLEVBQUV0RyxDQUFDLENBQUN1RyxPQUFGLEdBQWEsQ0FBQ0MsTUFBTSxDQUFDQyxVQUFQLEdBQW9CekQsS0FBckIsSUFBOEIsQ0FEL0I7QUFFZjBELFNBQUMsRUFBRXJGLElBQUksQ0FBQ3NGLEdBQUwsQ0FBUzNHLENBQUMsQ0FBQzRHLE9BQUYsR0FBWSxLQUFLdEQsT0FBMUIsSUFBcUM7QUFGekIsT0FBbkI7QUFJQSxVQUFNdUQsVUFBVSxHQUFHLEtBQUtDLHlCQUFMLENBQStCVCxVQUFVLENBQUNDLENBQTFDLENBQW5CO0FBQ0EsVUFBSVMsUUFBSjtBQUNBLFVBQUliLEdBQUo7QUFDQSxVQUFJYyxRQUFKO0FBQ0EsVUFBSWYsWUFBSjs7QUFDQSxVQUFJLEtBQUt6QyxVQUFMLENBQWdCeUQsY0FBaEIsQ0FBK0JKLFVBQS9CLENBQUosRUFBZ0Q7QUFDNUNHLGdCQUFRLEdBQUcsQ0FBQyxLQUFLeEQsVUFBTCxDQUFnQnFELFVBQWhCLENBQUQsQ0FBWDs7QUFDQSxhQUFLLElBQUk3RSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0YsUUFBUSxDQUFDL0UsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdENrRSxhQUFHLEdBQUdjLFFBQVEsQ0FBQ2hGLENBQUQsQ0FBZDtBQUNBaUUsc0JBQVksYUFBTUMsR0FBRyxDQUFDZ0IsR0FBSixDQUFRLENBQVIsQ0FBTixnQkFBc0JoQixHQUFHLENBQUNKLElBQTFCLENBQVo7QUFDQSxlQUFLZCxlQUFMLENBQXFCa0IsR0FBckIsRUFBMEJHLFVBQTFCLEVBQXNDSixZQUF0QztBQUNIO0FBQ0o7O0FBQ0QsVUFBSSxLQUFLeEMsY0FBTCxDQUFvQndELGNBQXBCLENBQW1DSixVQUFuQyxDQUFKLEVBQW9EO0FBQ2hERSxnQkFBUSxHQUFHLEtBQUt0RCxjQUFMLENBQW9Cb0QsVUFBcEIsQ0FBWDs7QUFDQSxhQUFLLElBQUk3RSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHK0UsUUFBUSxDQUFDOUUsTUFBN0IsRUFBcUNELEVBQUMsRUFBdEMsRUFBMEM7QUFDdENrRSxhQUFHLEdBQUdhLFFBQVEsQ0FBQy9FLEVBQUQsQ0FBZDtBQUNBaUUsc0JBQVksYUFBTUMsR0FBRyxDQUFDZ0IsR0FBSixDQUFRLENBQVIsQ0FBTixjQUFvQmxGLEVBQUMsR0FBRyxDQUF4QixjQUE2QmtFLEdBQUcsQ0FBQ0osSUFBakMsQ0FBWjtBQUNBLGVBQUtkLGVBQUwsQ0FBcUJrQixHQUFyQixFQUEwQkcsVUFBMUIsRUFBc0NKLFlBQXRDO0FBQ0g7QUFDSjs7QUFDRCxXQUFLdkIsZ0JBQUw7QUFDSDs7O29DQUVld0IsRyxFQUFLRyxVLEVBQVlKLFksRUFBYztBQUMzQyxVQUFNa0IsSUFBSSxHQUFHakIsR0FBRyxDQUFDZ0IsR0FBSixDQUFRLENBQVIsQ0FBYjtBQUNBLFVBQU1FLEtBQUssR0FBR2xCLEdBQUcsQ0FBQ2dCLEdBQUosQ0FBUSxDQUFSLElBQWEsRUFBM0I7QUFDQSxVQUFNRyxNQUFNLEdBQUduQixHQUFHLENBQUNnQixHQUFKLENBQVEsQ0FBUixDQUFmO0FBQ0EsVUFBTUksR0FBRyxHQUFHcEIsR0FBRyxDQUFDZ0IsR0FBSixDQUFRLENBQVIsSUFBYSxFQUF6Qjs7QUFDQSxVQUNJYixVQUFVLENBQUNDLENBQVgsR0FBZWEsSUFBZixJQUNBZCxVQUFVLENBQUNDLENBQVgsR0FBZWMsS0FEZixJQUVBZixVQUFVLENBQUNLLENBQVgsR0FBZVksR0FGZixJQUdBakIsVUFBVSxDQUFDSyxDQUFYLEdBQWVXLE1BSm5CLEVBS0U7QUFDRSxZQUFJLEtBQUsxRCxVQUFMLENBQWdCNEQsUUFBaEIsQ0FBeUJ0QixZQUF6QixDQUFKLEVBQTRDO0FBQ3BDLGVBQUtsQixvQkFBTCxDQUEwQmtCLFlBQTFCO0FBQ1AsU0FGRCxNQUVPO0FBQ0gsZUFBS3RDLFVBQUwsQ0FBZ0I2RCxJQUFoQixDQUFxQnZCLFlBQXJCO0FBQ0g7O0FBQ0QsYUFBS3BCLG9CQUFMLENBQTBCcUIsR0FBMUIsRUFBK0JELFlBQS9CO0FBQ0g7QUFDSjs7O3lDQUVvQkEsWSxFQUFjO0FBQy9CLFdBQUssSUFBSWpFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzJCLFVBQUwsQ0FBZ0IxQixNQUFwQyxFQUE0Q0QsQ0FBQyxFQUE3QyxFQUFpRDtBQUM3QyxZQUFJLEtBQUsyQixVQUFMLENBQWdCM0IsQ0FBaEIsTUFBdUJpRSxZQUEzQixFQUF5QztBQUNyQyxlQUFLdEMsVUFBTCxDQUFnQnlDLE1BQWhCLENBQXVCcEUsQ0FBdkIsRUFBMEIsQ0FBMUI7QUFDSDtBQUNKO0FBQ0o7Ozt5Q0FFb0JrRSxHLEVBQUs7QUFDdEJBLFNBQUcsQ0FBQ3VCLEtBQUosR0FBWSxDQUFDdkIsR0FBRyxDQUFDdUIsS0FBakI7QUFDSDs7OzhDQUV5QkMsVSxFQUFZO0FBQ2xDLFVBQUkxRixDQUFDLEdBQUcsQ0FBUjtBQUNBLFVBQUlzRSxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxhQUFPdEUsQ0FBQyxHQUFHLEVBQVgsRUFBZTtBQUNYLFlBQUkwRixVQUFVLEdBQUdwQixDQUFiLElBQWtCb0IsVUFBVSxHQUFHcEIsQ0FBQyxHQUFHLEVBQXZDLEVBQTJDO0FBQ3ZDLGlCQUFPQSxDQUFQO0FBQ0g7O0FBQ0RBLFNBQUMsSUFBSSxFQUFMO0FBQ0F0RSxTQUFDLElBQUksQ0FBTDtBQUNIO0FBQ0o7OzttQ0FFYztBQUNYLFdBQUtrQixPQUFMLENBQWF5RSxXQUFiLEdBQTJCLE9BQTNCO0FBQ0EsV0FBS3pFLE9BQUwsQ0FBYTBFLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxXQUFLMUUsT0FBTCxDQUFhMkUsVUFBYixDQUF3QixLQUFLaEgsV0FBN0IsRUFBMEMsR0FBMUMsRUFBK0MsRUFBL0M7QUFDSDs7O21DQUVjO0FBQ1gsVUFBSXFGLEdBQUo7QUFDQSxVQUFJNEIsTUFBTSxHQUFHLENBQWI7O0FBQ0EsV0FBSyxJQUFJOUYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2MsVUFBcEIsRUFBZ0NkLENBQUMsRUFBakMsRUFBcUM7QUFDakNrRSxXQUFHLEdBQUdsRSxDQUFOO0FBQ0EsYUFBS04sZUFBTCxDQUFxQndFLEdBQXJCLElBQTRCLENBQTVCO0FBQ0EsWUFBTTZCLFNBQVMsR0FBRyxJQUFJQyxnREFBSixDQUFZLENBQUNGLE1BQUQsRUFBUyxHQUFULENBQVosRUFBMkI1QixHQUEzQixDQUFsQjtBQUNBLFlBQU0rQixLQUFLLEdBQUdGLFNBQVMsQ0FBQ04sS0FBVixHQUFrQixVQUFsQixHQUErQixPQUE3QztBQUNBTSxpQkFBUyxDQUFDRyxVQUFWLENBQXFCLEtBQUtoRixPQUExQixFQUFtQytFLEtBQW5DO0FBQ0EsYUFBS3pFLFVBQUwsQ0FBZ0JzRSxNQUFoQixJQUEwQkMsU0FBMUI7QUFDQUQsY0FBTSxJQUFJLEVBQVY7QUFDSDtBQUNKOzs7a0NBRWE7QUFBQTs7QUFDVkssWUFBTSxDQUFDQyxJQUFQLENBQVksS0FBSzVFLFVBQWpCLEVBQTZCNkUsT0FBN0IsQ0FBcUMsVUFBQ25CLEdBQUQsRUFBUztBQUMxQyxZQUFNb0IsRUFBRSxHQUFHLE1BQUksQ0FBQzlFLFVBQUwsQ0FBZ0IwRCxHQUFoQixDQUFYO0FBQ0EsWUFBTWUsS0FBSyxHQUFHSyxFQUFFLENBQUNiLEtBQUgsR0FBVyxVQUFYLEdBQXdCLE9BQXRDO0FBQ0FhLFVBQUUsQ0FBQ0osVUFBSCxDQUFjLE1BQUksQ0FBQ2hGLE9BQW5CLEVBQTRCK0UsS0FBNUI7QUFDSCxPQUpEO0FBS0FFLFlBQU0sQ0FBQ0ksTUFBUCxDQUFjLEtBQUs5RSxjQUFuQixFQUFtQzRFLE9BQW5DLENBQTJDLFVBQUNuQyxHQUFELEVBQVM7QUFDcEQsYUFBSyxJQUFJbEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2tFLEdBQUcsQ0FBQ2pFLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLGNBQU13RyxNQUFNLEdBQUd0QyxHQUFHLENBQUNsRSxDQUFELENBQUgsQ0FBT3lGLEtBQVAsR0FBZSxVQUFmLEdBQTRCLE9BQTNDO0FBQ0F2QixhQUFHLENBQUNsRSxDQUFELENBQUgsQ0FBT2tHLFVBQVAsQ0FBa0IsTUFBSSxDQUFDaEYsT0FBdkIsRUFBZ0NzRixNQUFoQztBQUNIO0FBQ0EsT0FMRDtBQU1IOzs7c0RBRWlDO0FBQzlCLFVBQU1sQyxDQUFDLEdBQUd2RCxLQUFLLENBQUMxQixJQUFJLENBQUNjLEtBQUwsQ0FBV2QsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQTNCLElBQWlDLEVBQWxDLENBQWY7QUFDQSxVQUFNb0YsQ0FBQyxHQUFHLEVBQVY7QUFDQSxhQUFPLENBQUNKLENBQUQsRUFBSUksQ0FBSixDQUFQO0FBQ0g7OztvQ0FFZTtBQUNaLFVBQU1RLEdBQUcsR0FBRyxLQUFLdUIsK0JBQUwsRUFBWjtBQUNBLFVBQU12QyxHQUFHLEdBQUc3RSxJQUFJLENBQUNxSCxLQUFMLENBQVdySCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBWjtBQUNBLFdBQUtJLGVBQUwsQ0FBcUJ3RSxHQUFyQixLQUE2QixDQUE3QjtBQUNBLFVBQU15QyxVQUFVLEdBQUcsSUFBSVgsZ0RBQUosQ0FBWWQsR0FBWixFQUFpQmhCLEdBQWpCLENBQW5CO0FBQ0F5QyxnQkFBVSxDQUFDVCxVQUFYLENBQXNCLEtBQUtoRixPQUEzQixFQUFvQyxPQUFwQztBQUNBLFdBQUtPLGNBQUwsQ0FBb0J5RCxHQUFHLENBQUMsQ0FBRCxDQUF2QixJQUE4QixLQUFLekQsY0FBTCxDQUFvQnlELEdBQUcsQ0FBQyxDQUFELENBQXZCLEtBQStCLEVBQTdEO0FBQ0EsV0FBS3pELGNBQUwsQ0FBb0J5RCxHQUFHLENBQUMsQ0FBRCxDQUF2QixFQUE0Qk0sSUFBNUIsQ0FBaUNtQixVQUFqQzs7QUFDQSxVQUFJLEtBQUtsRixjQUFMLENBQW9CeUQsR0FBRyxDQUFDLENBQUQsQ0FBdkIsRUFBNEJqRixNQUE1QixJQUFzQyxDQUExQyxFQUE2QztBQUN6QyxhQUFLMEMsUUFBTDtBQUNIO0FBQ0o7Ozs4QkFFUztBQUFBOztBQUNOLFVBQUksS0FBS1QsVUFBVCxFQUFxQjtBQUFFO0FBQVE7O0FBQ25DLFVBQUksS0FBS04sT0FBTCxLQUFpQixJQUFyQixFQUEyQjtBQUNuQixhQUFLRixNQUFMLElBQWUsQ0FBZjs7QUFDSixZQUFJLEtBQUtBLE1BQUwsR0FBYyxLQUFLTSxTQUF2QixFQUFrQztBQUM5QixlQUFLSyxhQUFMO0FBQ0EsZUFBS1gsTUFBTCxHQUFjLENBQWQ7QUFDSDs7QUFDRCxhQUFLUixPQUFMLENBQWFvQyxTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCdEMsS0FBN0IsRUFBb0NDLE1BQXBDO0FBQ0EsYUFBS3FCLFlBQUw7QUFDQSxhQUFLc0UsV0FBTDtBQUNBLGFBQUtyRSxXQUFMOztBQUNBLFlBQU1zRSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLGlCQUFNLE1BQUksQ0FBQ3JFLE9BQUwsRUFBTjtBQUFBLFNBQWpCOztBQUNBLGFBQUtYLE9BQUwsR0FBZWlGLHFCQUFxQixDQUFDRCxRQUFELENBQXBDO0FBQ0M7QUFDSjs7O29DQUVlM0IsRyxFQUFLNkIsc0IsRUFBd0I7QUFDekMsVUFBTUMsYUFBYSxHQUFHLEtBQUt2RixjQUFMLENBQW9CeUQsR0FBRyxDQUFDLENBQUQsQ0FBdkIsQ0FBdEI7QUFDQSxVQUFJK0IsV0FBSjs7QUFDQSxVQUFJRixzQkFBc0IsSUFBSSxDQUE5QixFQUFpQztBQUM3QixZQUFNN0MsR0FBRyxHQUFHOEMsYUFBYSxDQUFDRCxzQkFBRCxDQUF6QjtBQUNBRSxtQkFBVyxHQUFHRCxhQUFhLENBQUNELHNCQUFzQixHQUFHLENBQTFCLENBQTNCO0FBQ0EsZUFBTzdDLEdBQUcsQ0FBQ2dELGtCQUFKLENBQXVCRCxXQUF2QixDQUFQO0FBQ0g7QUFDSjs7O2tDQUVhO0FBQ1YsVUFBSXpJLE9BQU8sR0FBRzJILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjLEtBQUs5RSxjQUFuQixDQUFkOztBQUNBLFdBQUssSUFBSXpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd4QixPQUFPLENBQUN5QixNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxhQUFLLElBQUltSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHM0ksT0FBTyxDQUFDd0IsQ0FBRCxDQUFQLENBQVdDLE1BQS9CLEVBQXVDa0gsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxjQUFJLENBQUMsS0FBSzFFLGVBQUwsQ0FBcUJqRSxPQUFPLENBQUN3QixDQUFELENBQVAsQ0FBV21ILENBQVgsRUFBY2pDLEdBQW5DLEVBQXdDaUMsQ0FBeEMsQ0FBTCxFQUFpRDtBQUM3QyxnQkFBTUMsZUFBZSxHQUFHLEtBQUs1RixVQUFMLENBQWdCeUQsY0FBaEIsQ0FBK0IsQ0FDbkR6RyxPQUFPLENBQUN3QixDQUFELENBQVAsQ0FBV21ILENBQVgsRUFBY2pDLEdBQWQsQ0FBa0IsQ0FBbEIsQ0FEbUQsQ0FBL0IsQ0FBeEI7QUFHSjFHLG1CQUFPLENBQUN3QixDQUFELENBQVAsQ0FBV21ILENBQVgsRUFBY0UsSUFBZCxDQUFtQkQsZUFBbkIsRUFBb0MsS0FBS3JGLFNBQXpDO0FBQ0M7QUFDSjtBQUNKO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BUTDs7SUFFcUJ1RixRO0FBQ2pCLG9CQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2IsU0FBS3JKLElBQUwsR0FBWSxJQUFJQyw2Q0FBSixDQUFTb0osR0FBVCxDQUFaO0FBQ0EsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBVzdJLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYjtBQUNBLFNBQUs2RCxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhN0QsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0g7Ozs7NEJBRU87QUFDSixVQUFJOEksSUFBSSxHQUFHLElBQVg7O0FBQ0EsVUFBTVosUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBWTtBQUN6QlksWUFBSSxDQUFDdkosSUFBTCxDQUFVMEksV0FBVixJQUNBYSxJQUFJLENBQUN2SixJQUFMLENBQVV3SixJQUFWLENBQWVELElBQUksQ0FBQ0YsR0FBcEIsQ0FEQTtBQUVILE9BSEQ7O0FBSUFJLGlCQUFXLENBQUNkLFFBQVEsQ0FBQ2xJLElBQVQsQ0FBYzhJLElBQWQsQ0FBRCxFQUFzQixFQUF0QixDQUFYO0FBQ0g7Ozs4QkFFUztBQUNOLFdBQUt2SixJQUFMLENBQVUwSSxXQUFWO0FBQ0FFLDJCQUFxQixDQUFDLEtBQUt0RSxPQUFOLENBQXJCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdEJnQm9GLFk7QUFDakIsd0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDYixTQUFLM0MsR0FBTCxHQUFXMkMsR0FBRyxDQUFDLEtBQUQsQ0FBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0QsR0FBRyxDQUFDLEtBQUQsQ0FBZDtBQUNBLFNBQUs1QixLQUFMLEdBQWE0QixHQUFHLENBQUMsT0FBRCxDQUFoQjtBQUNBLFNBQUsvRCxJQUFMLEdBQVkrRCxHQUFHLENBQUMsTUFBRCxDQUFmO0FBQ0EsU0FBSzNCLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQnZILElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0EsU0FBSzBJLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVUxSSxJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0EsU0FBS3VJLGtCQUFMLEdBQTBCLEtBQUtBLGtCQUFMLENBQXdCdkksSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBMUI7QUFDSDs7OzsrQkFFVTRJLEcsRUFBS3RCLEssRUFBTztBQUNuQnNCLFNBQUcsQ0FBQzVCLFdBQUosR0FBa0IsS0FBbEI7QUFDQTRCLFNBQUcsQ0FBQ1EsVUFBSixDQUFlLEtBQUs3QyxHQUFMLENBQVMsQ0FBVCxDQUFmLEVBQTRCLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQTVCLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDO0FBQ0FxQyxTQUFHLENBQUNTLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQVQsU0FBRyxDQUFDekYsU0FBSixHQUFnQm1FLEtBQWhCO0FBQ0FzQixTQUFHLENBQUNVLFFBQUosQ0FBYSxLQUFLL0MsR0FBTCxDQUFTLENBQVQsQ0FBYixFQUEwQixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUExQixFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQztBQUNBcUMsU0FBRyxDQUFDekYsU0FBSixHQUFnQixLQUFLbUUsS0FBckI7QUFDQXNCLFNBQUcsQ0FBQzNCLElBQUosR0FBVyxjQUFYO0FBQ0EyQixTQUFHLENBQUNXLFNBQUosR0FBZ0IsUUFBaEI7QUFDQVgsU0FBRyxDQUFDWSxZQUFKLEdBQW1CLFFBQW5CO0FBQ0FaLFNBQUcsQ0FBQ2EsUUFBSixDQUFhLEtBQUt0RSxJQUFsQixFQUF3QixLQUFLb0IsR0FBTCxDQUFTLENBQVQsSUFBYyxFQUF0QyxFQUEwQyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFjLEVBQXhEO0FBQ0g7Ozt5QkFFSWtDLGUsRUFBaUJyRixTLEVBQVc7QUFDN0IsVUFBSXFGLGVBQWUsSUFBSSxLQUFLbEMsR0FBTCxDQUFTLENBQVQsS0FBZSxHQUF0QyxFQUEyQztBQUN2QyxhQUFLQSxHQUFMLENBQVMsQ0FBVDtBQUNILE9BRkQsTUFFTyxJQUFJLENBQUNrQyxlQUFELElBQW9CLEtBQUtsQyxHQUFMLENBQVMsQ0FBVCxLQUFlLEdBQXZDLEVBQTRDO0FBQy9DLGFBQUtBLEdBQUwsQ0FBUyxDQUFUO0FBQ0gsT0FGTSxNQUVBO0FBQ0wsYUFBS0EsR0FBTCxDQUFTLENBQVQsS0FBZW5ELFNBQWY7QUFDRDtBQUNKOzs7dUNBRWtCa0YsVyxFQUFhO0FBQzVCLGFBQU8sS0FBSy9CLEdBQUwsQ0FBUyxDQUFULEtBQWUrQixXQUFXLENBQUMvQixHQUFaLENBQWdCLENBQWhCLElBQXFCLEVBQTNDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENMOztBQUNBLElBQU16SCxJQUFJLEdBQUdDLG1CQUFPLENBQUMscUNBQUQsQ0FBcEIsQyxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTTJLLE1BQU0sR0FBRztBQUNiLEtBQUcsU0FEVTtBQUViLEtBQUcsU0FGVTtBQUdiLEtBQUcsU0FIVTtBQUliLEtBQUcsU0FKVTtBQUtiLEtBQUcsU0FMVTtBQU1iLEtBQUcsU0FOVTtBQU9iLEtBQUcsU0FQVTtBQVFiLEtBQUcsU0FSVTtBQVNiLEtBQUcsU0FUVTtBQVViLEtBQUc7QUFWVSxDQUFmOztJQVlxQnJDLE8sR0FDakIsaUJBQVlkLEdBQVosRUFBaUJwQixJQUFqQixFQUF1QjtBQUFBOztBQUNuQjtBQUNBLE9BQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUsyQixLQUFMLEdBQWEsS0FBYjtBQUNBLE1BQU1vQyxHQUFHLEdBQUc7QUFDVjNDLE9BQUcsRUFBRUEsR0FESztBQUVWNEMsT0FBRyxFQUFFckssSUFBSSxDQUFDNkssU0FBTCxDQUFlLENBQWYsQ0FGSztBQUdWckMsU0FBSyxFQUFFb0MsTUFBTSxDQUFDLEtBQUt2RSxJQUFOLENBSEg7QUFJVkEsUUFBSSxFQUFFLEtBQUtBO0FBSkQsR0FBWjtBQU1BOEQsd0RBQVksQ0FBQ1csSUFBYixDQUFrQixJQUFsQixFQUF3QlYsR0FBeEI7QUFDSCxDOzs7QUFDSjtBQUVEcEssSUFBSSxDQUFDK0ssUUFBTCxDQUFjeEMsT0FBZCxFQUF1QjRCLHNEQUF2QixFOzs7Ozs7Ozs7OztBQzFDQSxJQUFNbkssSUFBSSxHQUFHO0FBQ1Q2SyxXQURTLHFCQUNDckksTUFERCxFQUNTO0FBQ2QsV0FBT3hDLElBQUksQ0FBQ2dMLEtBQUwsQ0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsRUFBbUJ4SSxNQUFuQixDQUFQO0FBQ0gsR0FIUTtBQUlUd0ksT0FKUyxpQkFJSEMsR0FKRyxFQUlFQyxDQUpGLEVBSUs7QUFDVixXQUFPLENBQUMsQ0FBRCxFQUFJRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVFDLENBQVosQ0FBUDtBQUNILEdBTlE7QUFPVEMsUUFQUyxrQkFPRjFFLEdBUEUsRUFPRztBQUNSLFdBQU83RSxJQUFJLENBQUNjLEtBQUwsQ0FBV2QsSUFBSSxDQUFDQyxNQUFMLEtBQWdCNEUsR0FBM0IsQ0FBUDtBQUNIO0FBVFEsQ0FBYjs7QUFZQXpHLElBQUksQ0FBQytLLFFBQUwsR0FBZ0IsVUFBU0ssVUFBVCxFQUFxQkMsV0FBckIsRUFBa0M7QUFDOUMsV0FBU0MsU0FBVCxHQUFxQixDQUFFOztBQUFBO0FBQ3ZCQSxXQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7QUFDQUgsWUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUIxTCxJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiODAwcHhcIik7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI2MDBweFwiKTtcbiAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuICAgICAgICBnYW1lLnJlc3RhcnRHYW1lKCk7XG4gICAgfVxuICB9KVxuICBcbn0pIiwiY29uc3QgTUFUSE9QID0gW1xuICAgICcrJywgXG4gICAgJy0nLFxuICAgICcqJ1xuXVxuXG5jb25zdCBOVU1CRVJTID0gJzAxMjM0NTY3ODknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhdGlvbiB7XG4gICAgY29uc3RydWN0b3IobnVtYmVycykge1xuICAgICAgICB0aGlzLm51bWJlcnMgPSBudW1iZXJzO1xuICAgICAgICB0aGlzLm5ld0VxID0gJyc7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMucmlnaHRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld0VxdWF0aW9uID0gdGhpcy5nZW5lcmF0ZU5ld0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tBbnNvblNjcmVlbiA9IHRoaXMuY2hlY2tBbnNvblNjcmVlbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNodWZmbGVkICh1bnNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiB1bnNodWZmbGVkXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gKHsgc29ydDogTWF0aC5yYW5kb20oKSwgdmFsdWU6IGEgfSkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiBhLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH07XG5cbiAgICBjcmVhdGVFcXVhdGlvbihudW1iZXJzT25TY3JlZW4pIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld0VxdWF0aW9uKCk7XG4gICAgICAgIGlmIChudW1iZXJzT25TY3JlZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV3RXE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tBbnNvblNjcmVlbihudW1iZXJzT25TY3JlZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXdFcTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVxdWF0aW9uKG51bWJlcnNPblNjcmVlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0Fuc29uU2NyZWVuKG51bWJlcnNPblNjcmVlbil7XG4gICAgICAgIGxldCBhbnMgPSB0aGlzLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXEpO1xuICAgICAgICBsZXQgYW5zQXJyID0gYW5zLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgICAgICBsZXQgcmlnaHRBbnMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnNBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgcmlnaHRBbnNbcGFyc2VJbnQoYW5zQXJyW2ldKV0gPSByaWdodEFuc1twYXJzZUludChhbnNBcnJbaV0pXSArIDEgfHwgMVxuICAgICAgICAgICAgaWYgKG51bWJlcnNPblNjcmVlbltwYXJzZUludChhbnNBcnJbaV0pXSA8IHJpZ2h0QW5zW3BhcnNlSW50KGFuc0FycltpXSldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTmV3RXF1YXRpb24oKXtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0xID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0yID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3QgbWF0aE9wID0gTUFUSE9QW01hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyKV07XG4gICAgICAgIGxldCBudW0xID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMSxcbiAgICAgICAgICAgIHN0YXJ0TnVtMSArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBsZXQgbnVtMiA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTIsXG4gICAgICAgICAgICBzdGFydE51bTIgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KG51bTEpIDwgcGFyc2VJbnQobnVtMikgJiYgbWF0aE9wID09PSAnLScpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBudW0xO1xuICAgICAgICAgICAgbnVtMSA9IG51bTI7XG4gICAgICAgICAgICBudW0yID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcXVhdGlvbiA9IGBXaGF0IGlzICR7bnVtMX0gJHttYXRoT3B9ICR7bnVtMn0/YDtcbiAgICAgICAgdGhpcy5uZXdFcSA9IGVxdWF0aW9uXG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLm9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDsgLy8zMjAgMjk5XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7IC8vMzIwIDI5OVxuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMC4zO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IDI1MDtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbiA9IHt9O1xuXG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbiA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXJDaGVjayA9IHRoaXMucmlnaHRBbnN3ZXJDaGVjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIgPSB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlciA9IHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlciA9IHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyA9IHRoaXMucmVtb3ZlRnJvbVVzZXJDbGlja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja1NxUG9zaXRpb24gPSB0aGlzLmNoZWNrU3FQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrID0gdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB0aGlzLnJlZ2lzdGVyQ2xpY2soZSkpO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYXVzZS1wbGF5XCIpWzBdXG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lUGF1c2VkKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9ICF0aGlzLmdhbWVQYXVzZWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVQYXVzZWQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVQYXVzZWQpIHt0aGlzLmFuaW1hdGUoKX07XG5cbiAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0R2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgbGV0IHNvbHZlZEVxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvbHZlZEVxc1wiKTtcbiAgICAgICAgaWYgKHNvbHZlZEVxLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBzb2x2ZWRFcVswXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbih0aGlzLm51bWJlcnNPblNjcmVlbik7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDAuMztcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAyNTA7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgPSAwO1xuICAgICAgICB0aGlzLkluaXRpYWxMYXllcigpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBZb3Ugc29sdmVkICR7dGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZH0gZXF1YXRpb25zIWApO1xuICAgICAgICBoMy5jbGFzc0xpc3QuYWRkKFwic29sdmVkRXFzXCIpO1xuICAgICAgICBoMy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmFwcGVuZENoaWxkKGgzKTtcbiAgICB9XG5cbiAgICByaWdodEFuc3dlckNoZWNrKCkge1xuICAgICAgICBsZXQgYXJyO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHRoaXMudXNlckNsaWNrc1tpXTtcbiAgICAgICAgICAgIGFyciA9IG51bS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoYXJyWzJdKSA9PT0gdGhpcy5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIobnVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyArPSBhcnJbMl07XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNvbmNhdFN0cmluZykgPT09IHRoaXMucmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpe1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbih0aGlzLm51bWJlcnNPblNjcmVlbik7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLnVzZXJDbGlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5mYWxsU3BlZWQgKz0gMC4yO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9ICh0aGlzLmZyZXF1ZW5jeSA9PT0gNTAgPyB0aGlzLmZyZXF1ZW5jeSA6IHRoaXMuZnJlcXVlbmN5IC09IDI1KTtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCArPSAxO1xuICAgIH1cblxuICAgIHNpbmdsZURpZ2l0QW5zd2VyKHN0cmluZykge1xuICAgICAgICBsZXQgYXJyID0gc3RyaW5nLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgY29uc3QgaSA9IHBhcnNlSW50KGFyclsxXSk7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ib3R0b21saW5lW2FyclswXV07XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltwYXJzZUludChhcnJbMl0pXSAtPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1thcnJbMF1dLnNwbGljZShpIC0gMSwgMSk7XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltwYXJzZUludChhcnJbMl0pXSAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIodGhpcy51c2VyQ2xpY2tzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gKCh3aW5kb3cuaW5uZXJXaWR0aCAtIFdJRFRIKSAvIDIpLFxuICAgICAgICAgICAgeTogTWF0aC5hYnMoZS5jbGllbnRZIC0gdGhpcy5vZmZzZXRZKSAtIDI1LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sID0gdGhpcy5jdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKGNsaWNrZWRQb3MueCk7XG4gICAgICAgIGxldCBmTnVtYmVycztcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IGJOdW1iZXJzO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBiTnVtYmVycyA9IFt0aGlzLmJvdHRvbWxpbmVbY3VycmVudENvbF1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGJOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XzBfJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVycy5oYXNPd25Qcm9wZXJ0eShjdXJyZW50Q29sKSkge1xuICAgICAgICAgICAgZk51bWJlcnMgPSB0aGlzLmZhbGxpbmdOdW1iZXJzW2N1cnJlbnRDb2xdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGZOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XyR7aSArIDF9XyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gbnVtLnBvc1sxXTtcbiAgICAgICAgY29uc3QgdG9wID0gbnVtLnBvc1sxXSAtIDgwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPiBsZWZ0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy55ID4gdG9wICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPCBib3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzLmluY2x1ZGVzKGNvbmNhdFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3MucHVzaChjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlcihudW0sIGNvbmNhdFN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJDbGlja3NbaV0gPT09IGNvbmNhdFN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RVbnNlbGVjdE51bWJlcihudW0pIHtcbiAgICAgICAgbnVtLmNsaWNrID0gIW51bS5jbGljaztcbiAgICB9XG5cbiAgICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgICAgIGlmICh4T2ZDbGlja2VkID4geCAmJiB4T2ZDbGlja2VkIDwgeCArIDgwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGhpcy5uZXdFcXVhdGlvbiwgNDAwLCAxNSk7XG4gICAgfVxuXG4gICAgSW5pdGlhbExheWVyKCkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IGk7XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltudW1dID0gMTtcbiAgICAgICAgICAgIGNvbnN0IG5ld051bWJlciA9IG5ldyBOdW1iZXJzKFtwb3NBdFgsIDQ3MF0sIG51bSk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ld051bWJlci5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIG5ld051bWJlci5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21saW5lW3Bvc0F0WF0gPSBuZXdOdW1iZXI7XG4gICAgICAgICAgICBwb3NBdFggKz0gODA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3TnVtYmVycygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ib3R0b21saW5lKS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNxID0gdGhpcy5ib3R0b21saW5lW3Bvc107XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHNxLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgc3EuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycykuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvcjIgPSBudW1baV0uY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBudW1baV0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yMik7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpIHtcbiAgICAgICAgY29uc3QgeCA9IERJTV9YW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwXTtcbiAgICAgICAgY29uc3QgeSA9IDI1O1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIGZhbGxpbmdOdW1iZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpO1xuICAgICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuW251bV0gKz0gMTtcbiAgICAgICAgY29uc3QgZmFsbGluZ051bSA9IG5ldyBOdW1iZXJzKHBvcywgbnVtKTtcbiAgICAgICAgZmFsbGluZ051bS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgXCJibGFja1wiKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dIHx8IFtdO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ucHVzaChmYWxsaW5nTnVtKTtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5sZW5ndGggPj0gNykge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBhdXNlZCkgeyByZXR1cm4gfVxuICAgIGlmICh0aGlzLnBsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVIICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSCA+IHRoaXMuZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMoKTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdENvbGxpc2lvbihwb3MsIGN1cnJlbnRGYWxsaW5nUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgY3VycmVudENvbHVtbiA9IHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXTtcbiAgICAgICAgbGV0IG90aGVyTnVtYmVyO1xuICAgICAgICBpZiAoY3VycmVudEZhbGxpbmdQb3NpdGlvbiAhPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBjdXJyZW50Q29sdW1uW2N1cnJlbnRGYWxsaW5nUG9zaXRpb25dO1xuICAgICAgICAgICAgb3RoZXJOdW1iZXIgPSBjdXJyZW50Q29sdW1uW2N1cnJlbnRGYWxsaW5nUG9zaXRpb24gLSAxXTtcbiAgICAgICAgICAgIHJldHVybiBudW0uY2hlY2tDb2xsaXNpb25XaXRoKG90aGVyTnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICBsZXQgbnVtYmVycyA9IE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGVjdENvbGxpc2lvbihudW1iZXJzW2ldW2pdLnBvcywgaikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRCb3R0b21MaW5lID0gdGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNbaV1bal0ucG9zWzBdLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIG51bWJlcnNbaV1bal0ubW92ZShmb3VuZEJvdHRvbUxpbmUsIHRoaXMuZmFsbFNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmdhbWUubW92ZU9iamVjdHMoKSwgXG4gICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldEludGVydmFsKGNhbGxiYWNrLmJpbmQodGhhdCksIDIwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHRoaXMucG9zID0gb2JqW1wicG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IG9ialtcInZlbFwiXTtcbiAgICAgICAgdGhpcy5jb2xvciA9IG9ialtcImNvbG9yXCJdO1xuICAgICAgICB0aGlzLnRleHQgPSBvYmpbXCJ0ZXh0XCJdO1xuICAgICAgICB0aGlzLmRyYXdTcXVhcmUgPSB0aGlzLmRyYXdTcXVhcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoID0gdGhpcy5jaGVja0NvbGxpc2lvbldpdGguYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKGN0eCwgY29sb3IpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjQwcHggR2VvcmdpYVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRleHQsIHRoaXMucG9zWzBdICsgNDAsIHRoaXMucG9zWzFdICsgNDApO1xuICAgIH1cblxuICAgIG1vdmUoZm91bmRCb3R0b21MaW5lLCBmYWxsU3BlZWQpIHtcbiAgICAgICAgaWYgKGZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSAzOTApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKCFmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gNDcwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvc1sxXSArPSBmYWxsU3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zWzFdID49IG90aGVyTnVtYmVyLnBvc1sxXSAtIDgwO1xuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuLy8gY29uc3QgQ09MT1JTID0ge1xuLy8gICAwOiBcIiNDQ0ZGMDBcIixcbi8vICAgMTogXCIjZmYwMDAwXCIsXG4vLyAgIDI6IFwiI2ZmODAwMFwiLFxuLy8gICAzOiBcIiNmZmZmMDBcIixcbi8vICAgNDogXCIjMDBmZjgwXCIsXG4vLyAgIDU6IFwiI0ZCQUVEMlwiLFxuLy8gICA2OiBcIiNGRjUzNDlcIixcbi8vICAgNzogXCIjMDBmZmNjXCIsXG4vLyAgIDg6IFwiIzAwZjJmZlwiLFxuLy8gICA5OiBcIiNmZjAwNzNcIixcbi8vIH07XG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgMDogXCIjY2NmZjAwXCIsXG4gIDE6IFwiI2ZmMDAwMFwiLFxuICAyOiBcIiNmZjgwMDBcIixcbiAgMzogXCIjZmZmZjAwXCIsXG4gIDQ6IFwiIzAwZmY4MFwiLFxuICA1OiBcIiNmYmFlZDJcIixcbiAgNjogXCIjZmY1MzQ5XCIsXG4gIDc6IFwiIzAwZmZjY1wiLFxuICA4OiBcIiMwMGYyZmZcIixcbiAgOTogXCIjZmYwMDczXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVycyB7XG4gICAgY29uc3RydWN0b3IocG9zLCB0ZXh0KSB7XG4gICAgICAgIC8vIG51bWJlciBpbnNpZGUgc3F1YXJlXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuY2xpY2sgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgIHZlbDogVXRpbC5yYW5kb21WZWMoMiksXG4gICAgICAgICAgY29sb3I6IENPTE9SU1t0aGlzLnRleHRdLFxuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgfTtcbiAgICAgICAgTW92aW5nT2JqZWN0LmNhbGwodGhpcywgb2JqKTtcbiAgICB9XG59O1xuXG5VdGlsLmluaGVyaXRzKE51bWJlcnMsIE1vdmluZ09iamVjdCk7IiwiY29uc3QgVXRpbCA9IHtcbiAgICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBVdGlsLnNjYWxlKFswLCA1XSwgbGVuZ3RoKTtcbiAgICB9LFxuICAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgICByZXR1cm4gWzAsIHZlY1sxXSogbV1cbiAgICB9LFxuICAgIG51bWJlcihudW0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG51bSlcbiAgICB9XG59XG5cblV0aWwuaW5oZXJpdHMgPSBmdW5jdGlvbihjaGlsZENsYXNzLCBwYXJlbnRDbGFzcykge1xuICAgIGZ1bmN0aW9uIFN1cnJvZ2F0ZSgpIHt9O1xuICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnRDbGFzcy5wcm90b3R5cGU7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlKCk7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUuY29uc3RydXRvciA9IGNoaWxkQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9