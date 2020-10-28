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
  // document.addEventListener('keydown', (e) => {
  //   if (e.key === "Enter") {
  //       const game = new Game(canvas);
  //       game.restartGame();
  //   }
  // })

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
    this.playing = null;
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
    this.keyHandler = this.keyHandler.bind(this);
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
    document.getElementsByClassName("restart")[0].addEventListener("mousedown", function (e) {
      e.preventDefault();
      cancelAnimationFrame(_this.frameId);

      _this.restartGame();
    });
  }

  _createClass(Game, [{
    key: "keyHandler",
    value: function keyHandler(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        cancelAnimationFrame(this.frameId);

        if (this.playing) {
          this.animate();
          return;
        }

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

      this.numbersOnScreen = {};
      this.bottomline = {};
      this.fallingNumbers = {};
      this.frameH = 0;
      this.userClicks = [];
      this.fallSpeed = 0.3;
      this.frequency = 250;
      this.numOfEquationsSolved = 0;
      this.playing = true;
      this.InitialLayer();
      this.fallingNumber();
      this.gamePaused = false;
      this.newEquation = this.equation.createEquation(this.numbersOnScreen);
      this.rightAnswer = this.equation.rightAnswer(this.newEquation);
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
      var currentOffsetY = Math.abs(visualViewport.pageTop - this.offsetY);
      var clickedPos = {
        x: e.clientX - (window.innerWidth - WIDTH) / 2,
        y: Math.abs(e.clientY - currentOffsetY)
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

          if (this.checkSqPosition(num, clickedPos, concatString)) {
            break;
          }

          ;
        }
      }

      if (this.fallingNumbers.hasOwnProperty(currentCol)) {
        fNumbers = this.fallingNumbers[currentCol];

        for (var _i = 0; _i < fNumbers.length; _i++) {
          num = fNumbers[_i];
          concatString = "".concat(num.pos[0], "_").concat(_i + 1, "_").concat(num.text);

          if (this.checkSqPosition(num, clickedPos, concatString)) {
            break;
          }

          ;
        }
      }

      this.rightAnswerCheck();
    }
  }, {
    key: "checkSqPosition",
    value: function checkSqPosition(num, clickedPos, concatString) {
      var left = num.pos[0];
      var right = num.pos[0] + 81;
      var top = num.pos[1];
      var bottom = num.pos[1] + 80;

      if (clickedPos.x > left && clickedPos.x < right && clickedPos.y > top && clickedPos.y < bottom) {
        if (this.userClicks.includes(concatString)) {
          this.removeFromUserClicks(concatString);
        } else {
          this.userClicks.push(concatString);
        }

        this.selectUnselectNumber(num, concatString);
        return true;
      }

      return false;
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

      if (this.InitialLayer.hasOwnProperty(pos[0]) && this.fallingNumbers[pos[0]].length >= 6) {
        this.gameOver();
      } else if (this.fallingNumbers[pos[0]].length >= 7) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiZ2FtZSIsIkdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwibmV3RXEiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwiZ2VuZXJhdGVOZXdFcXVhdGlvbiIsImNoZWNrQW5zb25TY3JlZW4iLCJ1bnNodWZmbGVkIiwic3BsaXQiLCJtYXAiLCJhIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJ2YWx1ZSIsImIiLCJqb2luIiwibnVtYmVyc09uU2NyZWVuIiwidW5kZWZpbmVkIiwiYW5zIiwiYW5zQXJyIiwidG9TdHJpbmciLCJyaWdodEFucyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldFgiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0WSIsIm9mZnNldFRvcCIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsImZpbGxTdHlsZSIsImZhbGxTcGVlZCIsImZyZXF1ZW5jeSIsIm51bU9mRXF1YXRpb25zU29sdmVkIiwiZ2FtZVBhdXNlZCIsIkluaXRpYWxMYXllciIsInJlZ2lzdGVyQ2xpY2siLCJmYWxsaW5nTnVtYmVyIiwiZHJhd0VxdWF0aW9uIiwiZHJhd051bWJlcnMiLCJhbmltYXRlIiwiZGV0ZWN0Q29sbGlzaW9uIiwicmlnaHRBbnN3ZXJDaGVjayIsImdhbWVPdmVyIiwiY2hlY2tEb3VibGVEaWdpdEFuc3dlciIsInNlbGVjdFVuc2VsZWN0TnVtYmVyIiwic2luZ2xlRGlnaXRBbnN3ZXIiLCJyZW1vdmVGcm9tVXNlckNsaWNrcyIsImNoZWNrU3FQb3NpdGlvbiIsIlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrIiwia2V5SGFuZGxlciIsImUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlc3RhcnRHYW1lIiwia2V5IiwiY2xlYXJSZWN0IiwiY2xhc3NMaXN0IiwiYWRkIiwic29sdmVkRXEiLCJyZW1vdmUiLCJoMyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNvbmNhdFN0cmluZyIsIm51bSIsInN0cmluZyIsInNwbGljZSIsImN1cnJlbnRPZmZzZXRZIiwiYWJzIiwidmlzdWFsVmlld3BvcnQiLCJwYWdlVG9wIiwiY2xpY2tlZFBvcyIsIngiLCJjbGllbnRYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInkiLCJjbGllbnRZIiwiY3VycmVudENvbCIsImN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2siLCJmTnVtYmVycyIsImJOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJwb3MiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJpbmNsdWRlcyIsInB1c2giLCJjbGljayIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImNvbG9yIiwiZHJhd1NxdWFyZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3EiLCJ2YWx1ZXMiLCJjb2xvcjIiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmxvb3IiLCJmYWxsaW5nTnVtIiwibW92ZU9iamVjdHMiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN1cnJlbnRGYWxsaW5nUG9zaXRpb24iLCJjdXJyZW50Q29sdW1uIiwib3RoZXJOdW1iZXIiLCJjaGVja0NvbGxpc2lvbldpdGgiLCJqIiwiZm91bmRCb3R0b21MaW5lIiwibW92ZSIsIkdhbWVWaWV3IiwiY3R4Iiwic3RhcnQiLCJ0aGF0IiwiZHJhdyIsInNldEludGVydmFsIiwiTW92aW5nT2JqZWN0Iiwib2JqIiwidmVsIiwic3Ryb2tlUmVjdCIsImxpbmVXaWR0aCIsImZpbGxSZWN0IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJDT0xPUlMiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJzY2FsZSIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1dG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7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QUFBO0FBQ3ZCQSxXQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7QUFDQUgsWUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUI1TCxJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiODAwcHhcIik7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI2MDBweFwiKTtcbiAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAvLyAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gIC8vICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuICAvLyAgICAgICBnYW1lLnJlc3RhcnRHYW1lKCk7XG4gIC8vICAgfVxuICAvLyB9KVxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbn0pIiwiY29uc3QgTUFUSE9QID0gW1xuICAgICcrJywgXG4gICAgJy0nLFxuICAgICcqJ1xuXVxuXG5jb25zdCBOVU1CRVJTID0gJzAxMjM0NTY3ODknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhdGlvbiB7XG4gICAgY29uc3RydWN0b3IobnVtYmVycykge1xuICAgICAgICB0aGlzLm51bWJlcnMgPSBudW1iZXJzO1xuICAgICAgICB0aGlzLm5ld0VxID0gJyc7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMucmlnaHRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld0VxdWF0aW9uID0gdGhpcy5nZW5lcmF0ZU5ld0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tBbnNvblNjcmVlbiA9IHRoaXMuY2hlY2tBbnNvblNjcmVlbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNodWZmbGVkICh1bnNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiB1bnNodWZmbGVkXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gKHsgc29ydDogTWF0aC5yYW5kb20oKSwgdmFsdWU6IGEgfSkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiBhLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH07XG5cbiAgICBjcmVhdGVFcXVhdGlvbihudW1iZXJzT25TY3JlZW4pIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld0VxdWF0aW9uKCk7XG4gICAgICAgIGlmIChudW1iZXJzT25TY3JlZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV3RXE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tBbnNvblNjcmVlbihudW1iZXJzT25TY3JlZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXdFcTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVxdWF0aW9uKG51bWJlcnNPblNjcmVlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0Fuc29uU2NyZWVuKG51bWJlcnNPblNjcmVlbil7XG4gICAgICAgIGxldCBhbnMgPSB0aGlzLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXEpO1xuICAgICAgICBsZXQgYW5zQXJyID0gYW5zLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgICAgICBsZXQgcmlnaHRBbnMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnNBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgcmlnaHRBbnNbcGFyc2VJbnQoYW5zQXJyW2ldKV0gPSByaWdodEFuc1twYXJzZUludChhbnNBcnJbaV0pXSArIDEgfHwgMVxuICAgICAgICAgICAgaWYgKG51bWJlcnNPblNjcmVlbltwYXJzZUludChhbnNBcnJbaV0pXSA8IHJpZ2h0QW5zW3BhcnNlSW50KGFuc0FycltpXSldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTmV3RXF1YXRpb24oKXtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0xID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0yID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3QgbWF0aE9wID0gTUFUSE9QW01hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyKV07XG4gICAgICAgIGxldCBudW0xID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMSxcbiAgICAgICAgICAgIHN0YXJ0TnVtMSArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBsZXQgbnVtMiA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTIsXG4gICAgICAgICAgICBzdGFydE51bTIgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KG51bTEpIDwgcGFyc2VJbnQobnVtMikgJiYgbWF0aE9wID09PSAnLScpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBudW0xO1xuICAgICAgICAgICAgbnVtMSA9IG51bTI7XG4gICAgICAgICAgICBudW0yID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcXVhdGlvbiA9IGBXaGF0IGlzICR7bnVtMX0gJHttYXRoT3B9ICR7bnVtMn0/YDtcbiAgICAgICAgdGhpcy5uZXdFcSA9IGVxdWF0aW9uXG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLm9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDsgLy8zMjAgMjk5XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7IC8vMzIwIDI5OVxuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMC4zO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IDI1MDtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbiA9IHt9O1xuXG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbiA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXJDaGVjayA9IHRoaXMucmlnaHRBbnN3ZXJDaGVjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIgPSB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlciA9IHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlciA9IHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyA9IHRoaXMucmVtb3ZlRnJvbVVzZXJDbGlja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja1NxUG9zaXRpb24gPSB0aGlzLmNoZWNrU3FQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrID0gdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleUhhbmRsZXIgPSB0aGlzLmtleUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4gdGhpcy5yZWdpc3RlckNsaWNrKGUpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB0aGlzLmtleUhhbmRsZXIoZSkpXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYXVzZS1wbGF5XCIpWzBdXG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gIXRoaXMuZ2FtZVBhdXNlZDtcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lUGF1c2VkKSB7dGhpcy5hbmltYXRlKCl9O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVzdGFydFwiKVswXVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGtleUhhbmRsZXIoZSl7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZClcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5aW5nKSB7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgcmVzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBsZXQgc29sdmVkRXEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic29sdmVkRXFzXCIpO1xuICAgICAgICBpZiAoc29sdmVkRXEubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHNvbHZlZEVxWzBdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuID0ge31cbiAgICAgICAgdGhpcy5ib3R0b21saW5lID0ge307XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB0aGlzLnVzZXJDbGlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5mYWxsU3BlZWQgPSAwLjM7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gMjUwO1xuICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkID0gMDtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5Jbml0aWFsTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbih0aGlzLm51bWJlcnNPblNjcmVlbik7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVJZCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFlvdSBzb2x2ZWQgJHt0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkfSBlcXVhdGlvbnMhYCk7XG4gICAgICAgIGgzLmNsYXNzTGlzdC5hZGQoXCJzb2x2ZWRFcXNcIik7XG4gICAgICAgIGgzLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIH1cblxuICAgIHJpZ2h0QW5zd2VyQ2hlY2soKSB7XG4gICAgICAgIGxldCBhcnI7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gdGhpcy51c2VyQ2xpY2tzW2ldO1xuICAgICAgICAgICAgYXJyID0gbnVtLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChhcnJbMl0pID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlcihudW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nICs9IGFyclsyXTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY29uY2F0U3RyaW5nKSA9PT0gdGhpcy5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCl7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKHRoaXMubnVtYmVyc09uU2NyZWVuKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhpcy5uZXdFcXVhdGlvbik7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCArPSAwLjI7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gKHRoaXMuZnJlcXVlbmN5ID09PSA1MCA/IHRoaXMuZnJlcXVlbmN5IDogdGhpcy5mcmVxdWVuY3kgLT0gMjUpO1xuICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkICs9IDE7XG4gICAgfVxuXG4gICAgc2luZ2xlRGlnaXRBbnN3ZXIoc3RyaW5nKSB7XG4gICAgICAgIGxldCBhcnIgPSBzdHJpbmcuc3BsaXQoXCJfXCIpO1xuICAgICAgICBjb25zdCBpID0gcGFyc2VJbnQoYXJyWzFdKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJvdHRvbWxpbmVbYXJyWzBdXTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuW3BhcnNlSW50KGFyclsyXSldIC09IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW2FyclswXV0uc3BsaWNlKGkgLSAxLCAxKTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuW3BhcnNlSW50KGFyclsyXSldIC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0RvdWJsZURpZ2l0QW5zd2VyKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlcih0aGlzLnVzZXJDbGlja3NbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPZmZzZXRZID0gTWF0aC5hYnModmlzdWFsVmlld3BvcnQucGFnZVRvcCAtIHRoaXMub2Zmc2V0WSk7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRQb3MgPSB7XG4gICAgICAgICAgICB4OiBlLmNsaWVudFggLSAoKHdpbmRvdy5pbm5lcldpZHRoIC0gV0lEVEgpIC8gMiksXG4gICAgICAgICAgICB5OiBNYXRoLmFicyhlLmNsaWVudFkgLSBjdXJyZW50T2Zmc2V0WSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2wgPSB0aGlzLmN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soY2xpY2tlZFBvcy54KTtcbiAgICAgICAgbGV0IGZOdW1iZXJzO1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgYk51bWJlcnM7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmc7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgICAgICAgIGJOdW1iZXJzID0gW3RoaXMuYm90dG9tbGluZVtjdXJyZW50Q29sXV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbnVtID0gYk51bWJlcnNbaV07XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nID0gYCR7bnVtLnBvc1swXX1fMF8ke251bS50ZXh0fWA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSl7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnMuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgICAgICAgIGZOdW1iZXJzID0gdGhpcy5mYWxsaW5nTnVtYmVyc1tjdXJyZW50Q29sXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZk51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBudW0gPSBmTnVtYmVyc1tpXTtcbiAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgPSBgJHtudW0ucG9zWzBdfV8ke2kgKyAxfV8ke251bS50ZXh0fWA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSl7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MTtcbiAgICAgICAgY29uc3QgdG9wID0gbnVtLnBvc1sxXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gbnVtLnBvc1sxXSArIDgwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPiBsZWZ0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy55ID4gdG9wICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPCBib3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzLmluY2x1ZGVzKGNvbmNhdFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3MucHVzaChjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlcihudW0sIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJDbGlja3NbaV0gPT09IGNvbmNhdFN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RVbnNlbGVjdE51bWJlcihudW0pIHtcbiAgICAgICAgbnVtLmNsaWNrID0gIW51bS5jbGljaztcbiAgICB9XG5cbiAgICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgICAgIGlmICh4T2ZDbGlja2VkID4geCAmJiB4T2ZDbGlja2VkIDwgeCArIDgwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGhpcy5uZXdFcXVhdGlvbiwgNDAwLCAxNSk7XG4gICAgfVxuXG4gICAgSW5pdGlhbExheWVyKCkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IGk7XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltudW1dID0gMTtcbiAgICAgICAgICAgIGNvbnN0IG5ld051bWJlciA9IG5ldyBOdW1iZXJzKFtwb3NBdFgsIDQ3MF0sIG51bSk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ld051bWJlci5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIG5ld051bWJlci5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21saW5lW3Bvc0F0WF0gPSBuZXdOdW1iZXI7XG4gICAgICAgICAgICBwb3NBdFggKz0gODA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3TnVtYmVycygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ib3R0b21saW5lKS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNxID0gdGhpcy5ib3R0b21saW5lW3Bvc107XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHNxLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgc3EuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycykuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvcjIgPSBudW1baV0uY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBudW1baV0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yMik7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpIHtcbiAgICAgICAgY29uc3QgeCA9IERJTV9YW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwXTtcbiAgICAgICAgY29uc3QgeSA9IDI1O1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIGZhbGxpbmdOdW1iZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpO1xuICAgICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuW251bV0gKz0gMTtcbiAgICAgICAgY29uc3QgZmFsbGluZ051bSA9IG5ldyBOdW1iZXJzKHBvcywgbnVtKTtcbiAgICAgICAgZmFsbGluZ051bS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgXCJibGFja1wiKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dIHx8IFtdO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ucHVzaChmYWxsaW5nTnVtKTtcbiAgICAgICAgaWYgKHRoaXMuSW5pdGlhbExheWVyLmhhc093blByb3BlcnR5KHBvc1swXSkgJiYgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLmxlbmd0aCA+PSA3KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lUGF1c2VkKSB7IHJldHVybiB9XG4gICAgaWYgKHRoaXMucGxheWluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVIID4gdGhpcy5mcmVxdWVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycygpO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKHBvcywgY3VycmVudEZhbGxpbmdQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dO1xuICAgICAgICBsZXQgb3RoZXJOdW1iZXI7XG4gICAgICAgIGlmIChjdXJyZW50RmFsbGluZ1Bvc2l0aW9uICE9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbl07XG4gICAgICAgICAgICBvdGhlck51bWJlciA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuIG51bS5jaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIGxldCBudW1iZXJzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0ZWN0Q29sbGlzaW9uKG51bWJlcnNbaV1bal0ucG9zLCBqKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvdHRvbUxpbmUgPSB0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5wb3NbMF0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5tb3ZlKGZvdW5kQm90dG9tTGluZSwgdGhpcy5mYWxsU3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbldpdGggPSB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoY3R4LCBjb2xvcikge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0gKyA0MCwgdGhpcy5wb3NbMV0gKyA0MCk7XG4gICAgfVxuXG4gICAgbW92ZShmb3VuZEJvdHRvbUxpbmUsIGZhbGxTcGVlZCkge1xuICAgICAgICBpZiAoZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDM5MCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSBpZiAoIWZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSA0NzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9zWzFdICs9IGZhbGxTcGVlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NbMV0gPj0gb3RoZXJOdW1iZXIucG9zWzFdIC0gODA7XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG4vLyBjb25zdCBDT0xPUlMgPSB7XG4vLyAgIDA6IFwiI0NDRkYwMFwiLFxuLy8gICAxOiBcIiNmZjAwMDBcIixcbi8vICAgMjogXCIjZmY4MDAwXCIsXG4vLyAgIDM6IFwiI2ZmZmYwMFwiLFxuLy8gICA0OiBcIiMwMGZmODBcIixcbi8vICAgNTogXCIjRkJBRUQyXCIsXG4vLyAgIDY6IFwiI0ZGNTM0OVwiLFxuLy8gICA3OiBcIiMwMGZmY2NcIixcbi8vICAgODogXCIjMDBmMmZmXCIsXG4vLyAgIDk6IFwiI2ZmMDA3M1wiLFxuLy8gfTtcblxuY29uc3QgQ09MT1JTID0ge1xuICAwOiBcIiNjY2ZmMDBcIixcbiAgMTogXCIjZmYwMDAwXCIsXG4gIDI6IFwiI2ZmODAwMFwiLFxuICAzOiBcIiNmZmZmMDBcIixcbiAgNDogXCIjMDBmZjgwXCIsXG4gIDU6IFwiI2ZiYWVkMlwiLFxuICA2OiBcIiNmZjUzNDlcIixcbiAgNzogXCIjMDBmZmNjXCIsXG4gIDg6IFwiIzAwZjJmZlwiLFxuICA5OiBcIiNmZjAwNzNcIixcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHRleHQpIHtcbiAgICAgICAgLy8gbnVtYmVyIGluc2lkZSBzcXVhcmVcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5jbGljayA9IGZhbHNlO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=