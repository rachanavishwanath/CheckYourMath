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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJuZXdFcSIsImNyZWF0ZUVxdWF0aW9uIiwiYmluZCIsInJpZ2h0QW5zd2VyIiwibmV3RXF1YXRpb24iLCJnZW5lcmF0ZU5ld0VxdWF0aW9uIiwiY2hlY2tBbnNvblNjcmVlbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJudW1iZXJzT25TY3JlZW4iLCJ1bmRlZmluZWQiLCJhbnMiLCJhbnNBcnIiLCJ0b1N0cmluZyIsInJpZ2h0QW5zIiwiaSIsImxlbmd0aCIsInBhcnNlSW50Iiwicm91bmQiLCJzdGFydE51bTEiLCJzdGFydE51bTIiLCJtYXRoT3AiLCJudW0xIiwic2h1ZmZsZWQiLCJzbGljZSIsIm51bTIiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwib2Zmc2V0WCIsIm9mZnNldExlZnQiLCJvZmZzZXRZIiwib2Zmc2V0VG9wIiwiYm90dG9tbGluZSIsImZhbGxpbmdOdW1iZXJzIiwiZnJhbWVIIiwidXNlckNsaWNrcyIsInBsYXlpbmciLCJmcmFtZUlkIiwiZmlsbFN0eWxlIiwiZmFsbFNwZWVkIiwiZnJlcXVlbmN5IiwibnVtT2ZFcXVhdGlvbnNTb2x2ZWQiLCJnYW1lUGF1c2VkIiwiSW5pdGlhbExheWVyIiwicmVnaXN0ZXJDbGljayIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJkZXRlY3RDb2xsaXNpb24iLCJyaWdodEFuc3dlckNoZWNrIiwiZ2FtZU92ZXIiLCJjaGVja0RvdWJsZURpZ2l0QW5zd2VyIiwic2VsZWN0VW5zZWxlY3ROdW1iZXIiLCJzaW5nbGVEaWdpdEFuc3dlciIsInJlbW92ZUZyb21Vc2VyQ2xpY2tzIiwiY2hlY2tTcVBvc2l0aW9uIiwiU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2siLCJrZXlIYW5kbGVyIiwiZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVzdGFydEdhbWUiLCJrZXkiLCJjbGVhclJlY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJzb2x2ZWRFcSIsInJlbW92ZSIsImgzIiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiY29uY2F0U3RyaW5nIiwibnVtIiwic3RyaW5nIiwic3BsaWNlIiwiY3VycmVudE9mZnNldFkiLCJhYnMiLCJ2aXN1YWxWaWV3cG9ydCIsInBhZ2VUb3AiLCJjbGlja2VkUG9zIiwieCIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwieSIsImNsaWVudFkiLCJjdXJyZW50Q29sIiwiY3VycmVudENvbHVtbkZvclVzZXJDbGljayIsImZOdW1iZXJzIiwiYk51bWJlcnMiLCJoYXNPd25Qcm9wZXJ0eSIsInBvcyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImluY2x1ZGVzIiwicHVzaCIsImNsaWNrIiwieE9mQ2xpY2tlZCIsInN0cm9rZVN0eWxlIiwiZm9udCIsInN0cm9rZVRleHQiLCJwb3NBdFgiLCJuZXdOdW1iZXIiLCJOdW1iZXJzIiwiY29sb3IiLCJkcmF3U3F1YXJlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzcSIsInZhbHVlcyIsImNvbG9yMiIsInJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMiLCJmbG9vciIsImZhbGxpbmdOdW0iLCJtb3ZlT2JqZWN0cyIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudEZhbGxpbmdQb3NpdGlvbiIsImN1cnJlbnRDb2x1bW4iLCJvdGhlck51bWJlciIsImNoZWNrQ29sbGlzaW9uV2l0aCIsImoiLCJmb3VuZEJvdHRvbUxpbmUiLCJtb3ZlIiwiR2FtZVZpZXciLCJjdHgiLCJzdGFydCIsInRoYXQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJzdHJva2VSZWN0IiwibGluZVdpZHRoIiwiZmlsbFJlY3QiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsIkNPTE9SUyIsInJhbmRvbVZlYyIsImNhbGwiLCJpbmhlcml0cyIsInNjYWxlIiwidmVjIiwibSIsIm51bWJlciIsImNoaWxkQ2xhc3MiLCJwYXJlbnRDbGFzcyIsIlN1cnJvZ2F0ZSIsInByb3RvdHlwZSIsImNvbnN0cnV0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7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QUU7O0FBQUE7QUFDdkJBLFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkYsV0FBVyxDQUFDRSxTQUFsQztBQUNBSCxZQUFVLENBQUNHLFNBQVgsR0FBdUIsSUFBSUQsU0FBSixFQUF2QjtBQUNBRixZQUFVLENBQUNHLFNBQVgsQ0FBcUJDLFVBQXJCLEdBQWtDSixVQUFsQztBQUNILENBTEQ7O0FBT0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVMLElBQWpCLEM7Ozs7Ozs7Ozs7O0FDbkJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vc2NyaXB0cy9udW1iZXJzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vc2NyaXB0cy91dGlsJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI4MDBweFwiKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjYwMHB4XCIpO1xuICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIC8vICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgLy8gICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG4gIC8vICAgICAgIGdhbWUucmVzdGFydEdhbWUoKTtcbiAgLy8gICB9XG4gIC8vIH0pXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMubmV3RXEgPSAnJztcblxuICAgICAgICB0aGlzLmNyZWF0ZUVxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5yaWdodEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV3RXF1YXRpb24gPSB0aGlzLmdlbmVyYXRlTmV3RXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0Fuc29uU2NyZWVuID0gdGhpcy5jaGVja0Fuc29uU2NyZWVuLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKG51bWJlcnNPblNjcmVlbikge1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV3RXF1YXRpb24oKTtcbiAgICAgICAgaWYgKG51bWJlcnNPblNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXdFcTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGVja0Fuc29uU2NyZWVuKG51bWJlcnNPblNjcmVlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld0VxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXF1YXRpb24obnVtYmVyc09uU2NyZWVuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQW5zb25TY3JlZW4obnVtYmVyc09uU2NyZWVuKXtcbiAgICAgICAgbGV0IGFucyA9IHRoaXMucmlnaHRBbnN3ZXIodGhpcy5uZXdFcSk7XG4gICAgICAgIGxldCBhbnNBcnIgPSBhbnMudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgICAgIGxldCByaWdodEFucyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICByaWdodEFuc1twYXJzZUludChhbnNBcnJbaV0pXSA9IHJpZ2h0QW5zW3BhcnNlSW50KGFuc0FycltpXSldICsgMSB8fCAxXG4gICAgICAgICAgICBpZiAobnVtYmVyc09uU2NyZWVuW3BhcnNlSW50KGFuc0FycltpXSldIDwgcmlnaHRBbnNbcGFyc2VJbnQoYW5zQXJyW2ldKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVOZXdFcXVhdGlvbigpe1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMSkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICB0aGlzLm5ld0VxID0gZXF1YXRpb25cbiAgICB9XG5cbiAgICByaWdodEFuc3dlcihlcXVhdGlvbil7XG4gICAgICAgIGxldCBhcnIgPSBlcXVhdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtMSA9IHBhcnNlSW50KGFyclsyXSk7XG4gICAgICAgIGxldCBudW0yID0gcGFyc2VJbnQoYXJyWzRdKTtcbiAgICAgICAgc3dpdGNoKGFyclszXSkge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5pbXBvcnQgRXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gWzAsIDgwLCAxNjAsIDI0MCwgMzIwLCA0MDAsIDQ4MCwgNTYwLCA2NDAsIDcyMF07XG5jb25zdCBXSURUSCA9IDgwMDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0OyAvLzMyMCAyOTlcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDsgLy8zMjAgMjk5XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMucGxheWluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5mYWxsU3BlZWQgPSAwLjM7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gMjUwO1xuICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkID0gMDtcbiAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuID0ge307XG5cbiAgICAgICAgdGhpcy5Jbml0aWFsTGF5ZXIgPSB0aGlzLkluaXRpYWxMYXllci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2sgPSB0aGlzLnJlZ2lzdGVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyID0gdGhpcy5mYWxsaW5nTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uID0gdGhpcy5kcmF3RXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycyA9IHRoaXMuZHJhd051bWJlcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9uID0gdGhpcy5kZXRlY3RDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrID0gdGhpcy5yaWdodEFuc3dlckNoZWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlciA9IHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyID0gdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyID0gdGhpcy5zaW5nbGVEaWdpdEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUZyb21Vc2VyQ2xpY2tzID0gdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbiA9IHRoaXMuY2hlY2tTcVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2sgPSB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlciA9IHRoaXMua2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB0aGlzLnJlZ2lzdGVyQ2xpY2soZSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHRoaXMua2V5SGFuZGxlcihlKSlcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhdXNlLXBsYXlcIilbMF1cbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVQYXVzZWQgPSAhdGhpcy5nYW1lUGF1c2VkO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVQYXVzZWQpIHt0aGlzLmFuaW1hdGUoKX07XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyZXN0YXJ0XCIpWzBdXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAga2V5SGFuZGxlcihlKXtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlpbmcpIHsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICByZXN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGxldCBzb2x2ZWRFcSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzb2x2ZWRFcXNcIik7XG4gICAgICAgIGlmIChzb2x2ZWRFcS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgc29sdmVkRXFbMF0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5udW1iZXJzT25TY3JlZW4gPSB7fVxuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDAuMztcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAyNTA7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgPSAwO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLkluaXRpYWxMYXllcigpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKHRoaXMubnVtYmVyc09uU2NyZWVuKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhpcy5uZXdFcXVhdGlvbik7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5mcmFtZUlkKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lSWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgWW91IHNvbHZlZCAke3RoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWR9IGVxdWF0aW9ucyFgKTtcbiAgICAgICAgaDMuY2xhc3NMaXN0LmFkZChcInNvbHZlZEVxc1wiKTtcbiAgICAgICAgaDMuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5hcHBlbmRDaGlsZChoMyk7XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXJDaGVjaygpIHtcbiAgICAgICAgbGV0IGFycjtcbiAgICAgICAgbGV0IGNvbmNhdFN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSB0aGlzLnVzZXJDbGlja3NbaV07XG4gICAgICAgICAgICBhcnIgPSBudW0uc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGFyclsyXSkgPT09IHRoaXMucmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyKG51bSk7XG4gICAgICAgICAgICAgICAgdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgKz0gYXJyWzJdO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjb25jYXRTdHJpbmcpID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKXtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24odGhpcy5udW1iZXJzT25TY3JlZW4pO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5lcXVhdGlvbi5yaWdodEFuc3dlcih0aGlzLm5ld0VxdWF0aW9uKTtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkICs9IDAuMjtcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAodGhpcy5mcmVxdWVuY3kgPT09IDUwID8gdGhpcy5mcmVxdWVuY3kgOiB0aGlzLmZyZXF1ZW5jeSAtPSAyNSk7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgKz0gMTtcbiAgICB9XG5cbiAgICBzaW5nbGVEaWdpdEFuc3dlcihzdHJpbmcpIHtcbiAgICAgICAgbGV0IGFyciA9IHN0cmluZy5zcGxpdChcIl9cIik7XG4gICAgICAgIGNvbnN0IGkgPSBwYXJzZUludChhcnJbMV0pO1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYm90dG9tbGluZVthcnJbMF1dO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJzT25TY3JlZW5bcGFyc2VJbnQoYXJyWzJdKV0gLT0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbYXJyWzBdXS5zcGxpY2UoaSAtIDEsIDEpO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJzT25TY3JlZW5bcGFyc2VJbnQoYXJyWzJdKV0gLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyKHRoaXMudXNlckNsaWNrc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckNsaWNrKGUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudE9mZnNldFkgPSBNYXRoLmFicyh2aXN1YWxWaWV3cG9ydC5wYWdlVG9wIC0gdGhpcy5vZmZzZXRZKTtcbiAgICAgICAgY29uc3QgY2xpY2tlZFBvcyA9IHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtICgod2luZG93LmlubmVyV2lkdGggLSBXSURUSCkgLyAyKSxcbiAgICAgICAgICAgIHk6IE1hdGguYWJzKGUuY2xpZW50WSAtIGN1cnJlbnRPZmZzZXRZKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY3VycmVudENvbCA9IHRoaXMuY3VycmVudENvbHVtbkZvclVzZXJDbGljayhjbGlja2VkUG9zLngpO1xuICAgICAgICBsZXQgZk51bWJlcnM7XG4gICAgICAgIGxldCBudW07XG4gICAgICAgIGxldCBiTnVtYmVycztcbiAgICAgICAgbGV0IGNvbmNhdFN0cmluZztcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tbGluZS5oYXNPd25Qcm9wZXJ0eShjdXJyZW50Q29sKSkge1xuICAgICAgICAgICAgYk51bWJlcnMgPSBbdGhpcy5ib3R0b21saW5lW2N1cnJlbnRDb2xdXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYk51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBudW0gPSBiTnVtYmVyc1tpXTtcbiAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgPSBgJHtudW0ucG9zWzBdfV8wXyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1NxUG9zaXRpb24obnVtLCBjbGlja2VkUG9zLCBjb25jYXRTdHJpbmcpKXtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVycy5oYXNPd25Qcm9wZXJ0eShjdXJyZW50Q29sKSkge1xuICAgICAgICAgICAgZk51bWJlcnMgPSB0aGlzLmZhbGxpbmdOdW1iZXJzW2N1cnJlbnRDb2xdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGZOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XyR7aSArIDF9XyR7bnVtLnRleHR9YDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1NxUG9zaXRpb24obnVtLCBjbGlja2VkUG9zLCBjb25jYXRTdHJpbmcpKXtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjaGVja1NxUG9zaXRpb24obnVtLCBjbGlja2VkUG9zLCBjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IG51bS5wb3NbMF07XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gbnVtLnBvc1swXSArIDgxO1xuICAgICAgICBjb25zdCB0b3AgPSBudW0ucG9zWzFdO1xuICAgICAgICBjb25zdCBib3R0b20gPSBudW0ucG9zWzFdICsgODA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueCA+IGxlZnQgJiZcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueCA8IHJpZ2h0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPiB0b3AgJiZcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueSA8IGJvdHRvbVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJDbGlja3MuaW5jbHVkZXMoY29uY2F0U3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21Vc2VyQ2xpY2tzKGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5wdXNoKGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyKG51bSwgY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlbW92ZUZyb21Vc2VyQ2xpY2tzKGNvbmNhdFN0cmluZykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlckNsaWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlckNsaWNrc1tpXSA9PT0gY29uY2F0U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdFVuc2VsZWN0TnVtYmVyKG51bSkge1xuICAgICAgICBudW0uY2xpY2sgPSAhbnVtLmNsaWNrO1xuICAgIH1cblxuICAgIGN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soeE9mQ2xpY2tlZCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCAxMCkge1xuICAgICAgICAgICAgaWYgKHhPZkNsaWNrZWQgPiB4ICYmIHhPZkNsaWNrZWQgPCB4ICsgODApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHggKz0gODA7XG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3RXF1YXRpb24oKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjIwcHggVmVyZGFuYVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlVGV4dCh0aGlzLm5ld0VxdWF0aW9uLCA0MDAsIDE1KTtcbiAgICB9XG5cbiAgICBJbml0aWFsTGF5ZXIoKSB7XG4gICAgICAgIGxldCBudW07XG4gICAgICAgIGxldCBwb3NBdFggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bUNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgbnVtID0gaTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuW251bV0gPSAxO1xuICAgICAgICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDcwXSwgbnVtKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3TnVtYmVyLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgbmV3TnVtYmVyLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbWxpbmVbcG9zQXRYXSA9IG5ld051bWJlcjtcbiAgICAgICAgICAgIHBvc0F0WCArPSA4MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdOdW1iZXJzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmJvdHRvbWxpbmUpLmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3EgPSB0aGlzLmJvdHRvbWxpbmVbcG9zXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3EuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBzcS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yMiA9IG51bVtpXS5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIG51bVtpXS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IyKTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgICAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgICAgICBjb25zdCB5ID0gMjU7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgZmFsbGluZ051bWJlcigpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgdGhpcy5udW1iZXJzT25TY3JlZW5bbnVtXSArPSAxO1xuICAgICAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgICAgICBmYWxsaW5nTnVtLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBcImJsYWNrXCIpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gfHwgW107XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5wdXNoKGZhbGxpbmdOdW0pO1xuICAgICAgICBpZiAodGhpcy5Jbml0aWFsTGF5ZXIuaGFzT3duUHJvcGVydHkocG9zWzBdKSAmJiB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ubGVuZ3RoID49IDYpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ubGVuZ3RoID49IDcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVQYXVzZWQpIHsgcmV0dXJuIH1cbiAgICBpZiAodGhpcy5wbGF5aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lSCArPSAxO1xuICAgICAgICBpZiAodGhpcy5mcmFtZUggPiB0aGlzLmZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyKCk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmRyYXdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4gdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXRlY3RDb2xsaXNpb24ocG9zLCBjdXJyZW50RmFsbGluZ1Bvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV07XG4gICAgICAgIGxldCBvdGhlck51bWJlcjtcbiAgICAgICAgaWYgKGN1cnJlbnRGYWxsaW5nUG9zaXRpb24gIT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uXTtcbiAgICAgICAgICAgIG90aGVyTnVtYmVyID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIC0gMV07XG4gICAgICAgICAgICByZXR1cm4gbnVtLmNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgbGV0IG51bWJlcnMgPSBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZXRlY3RDb2xsaXNpb24obnVtYmVyc1tpXVtqXS5wb3MsIGopKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQm90dG9tTGluZSA9IHRoaXMuYm90dG9tbGluZS5oYXNPd25Qcm9wZXJ0eShbXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLnBvc1swXSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBudW1iZXJzW2ldW2pdLm1vdmUoZm91bmRCb3R0b21MaW5lLCB0aGlzLmZhbGxTcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5nYW1lLm1vdmVPYmplY3RzKCksIFxuICAgICAgICAgICAgdGhhdC5nYW1lLmRyYXcodGhhdC5jdHgpO1xuICAgICAgICB9O1xuICAgICAgICBzZXRJbnRlcnZhbChjYWxsYmFjay5iaW5kKHRoYXQpLCAyMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuICAgICAgICB0aGlzLnBvcyA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgdGhpcy52ZWwgPSBvYmpbXCJ2ZWxcIl07XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmpbXCJjb2xvclwiXTtcbiAgICAgICAgdGhpcy50ZXh0ID0gb2JqW1widGV4dFwiXTtcbiAgICAgICAgdGhpcy5kcmF3U3F1YXJlID0gdGhpcy5kcmF3U3F1YXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aCA9IHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgsIGNvbG9yKSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLnBvc1swXSArIDQwLCB0aGlzLnBvc1sxXSArIDQwKTtcbiAgICB9XG5cbiAgICBtb3ZlKGZvdW5kQm90dG9tTGluZSwgZmFsbFNwZWVkKSB7XG4gICAgICAgIGlmIChmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gMzkwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIGlmICghZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDQ3MCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3NbMV0gKz0gZmFsbFNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb25XaXRoKG90aGVyTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1sxXSA+PSBvdGhlck51bWJlci5wb3NbMV0gLSA4MDtcbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbi8vIGNvbnN0IENPTE9SUyA9IHtcbi8vICAgMDogXCIjQ0NGRjAwXCIsXG4vLyAgIDE6IFwiI2ZmMDAwMFwiLFxuLy8gICAyOiBcIiNmZjgwMDBcIixcbi8vICAgMzogXCIjZmZmZjAwXCIsXG4vLyAgIDQ6IFwiIzAwZmY4MFwiLFxuLy8gICA1OiBcIiNGQkFFRDJcIixcbi8vICAgNjogXCIjRkY1MzQ5XCIsXG4vLyAgIDc6IFwiIzAwZmZjY1wiLFxuLy8gICA4OiBcIiMwMGYyZmZcIixcbi8vICAgOTogXCIjZmYwMDczXCIsXG4vLyB9O1xuXG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI2NjZmYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjZmJhZWQyXCIsXG4gIDY6IFwiI2ZmNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmNsaWNrID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKDIpLFxuICAgICAgICAgIGNvbG9yOiBDT0xPUlNbdGhpcy50ZXh0XSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgIH07XG4gICAgICAgIE1vdmluZ09iamVjdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfVxufTtcblxuVXRpbC5pbmhlcml0cyhOdW1iZXJzLCBNb3ZpbmdPYmplY3QpOyIsImNvbnN0IFV0aWwgPSB7XG4gICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gVXRpbC5zY2FsZShbMCwgNV0sIGxlbmd0aCk7XG4gICAgfSxcbiAgICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgICAgcmV0dXJuIFswLCB2ZWNbMV0qIG1dXG4gICAgfSxcbiAgICBudW1iZXIobnVtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBudW0pXG4gICAgfVxufVxuXG5VdGlsLmluaGVyaXRzID0gZnVuY3Rpb24oY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTdXJyb2dhdGUoKSB7fTtcbiAgICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50Q2xhc3MucHJvdG90eXBlO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnV0b3IgPSBjaGlsZENsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==