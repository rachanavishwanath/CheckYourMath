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
    this.endGame = false;
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
    key: "keyHandler",
    value: function keyHandler(e) {
      e.preventDefault();

      if (e.key === "Enter") {
        debugger; // if (this.playing === true && this.endGame === false) {
        //     debugger
        //     const h3 = document.createElement("h3");
        //     const text = document.createTextNode(`Are you sure you want to restart the game?`);
        //     h3.classList.add("areYouSure");
        //     h3.appendChild(text);
        //     document.getElementById("startGame").appendChild(h3);
        // }

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
      this.InitialLayer();
      this.fallingNumber();
      this.endGame = false;
      this.newEquation = this.equation.createEquation(this.numbersOnScreen);
      this.rightAnswer = this.equation.rightAnswer(this.newEquation);
      this.animate();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      debugger;

      if (this.frameId) {
        cancelAnimationFrame(this.frameId);
      }

      this.playing = false;
      this.endGame = true;
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
        y: Math.abs(e.clientY - this.offsetY)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiZ2FtZSIsIkdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwibmV3RXEiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwiZ2VuZXJhdGVOZXdFcXVhdGlvbiIsImNoZWNrQW5zb25TY3JlZW4iLCJ1bnNodWZmbGVkIiwic3BsaXQiLCJtYXAiLCJhIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJ2YWx1ZSIsImIiLCJqb2luIiwibnVtYmVyc09uU2NyZWVuIiwidW5kZWZpbmVkIiwiYW5zIiwiYW5zQXJyIiwidG9TdHJpbmciLCJyaWdodEFucyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldFgiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0WSIsIm9mZnNldFRvcCIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsImZpbGxTdHlsZSIsImZhbGxTcGVlZCIsImZyZXF1ZW5jeSIsIm51bU9mRXF1YXRpb25zU29sdmVkIiwiZ2FtZVBhdXNlZCIsImVuZEdhbWUiLCJJbml0aWFsTGF5ZXIiLCJyZWdpc3RlckNsaWNrIiwiZmFsbGluZ051bWJlciIsImRyYXdFcXVhdGlvbiIsImRyYXdOdW1iZXJzIiwiYW5pbWF0ZSIsImRldGVjdENvbGxpc2lvbiIsInJpZ2h0QW5zd2VyQ2hlY2siLCJnYW1lT3ZlciIsImNoZWNrRG91YmxlRGlnaXRBbnN3ZXIiLCJzZWxlY3RVbnNlbGVjdE51bWJlciIsInNpbmdsZURpZ2l0QW5zd2VyIiwicmVtb3ZlRnJvbVVzZXJDbGlja3MiLCJjaGVja1NxUG9zaXRpb24iLCJTdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljayIsImtleUhhbmRsZXIiLCJlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImtleSIsInJlc3RhcnRHYW1lIiwiY2xlYXJSZWN0IiwiY2xhc3NMaXN0IiwiYWRkIiwic29sdmVkRXEiLCJyZW1vdmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImgzIiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiY29uY2F0U3RyaW5nIiwibnVtIiwic3RyaW5nIiwic3BsaWNlIiwiY2xpY2tlZFBvcyIsIngiLCJjbGllbnRYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInkiLCJhYnMiLCJjbGllbnRZIiwiY3VycmVudENvbCIsImN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2siLCJmTnVtYmVycyIsImJOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJwb3MiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJpbmNsdWRlcyIsInB1c2giLCJjbGljayIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImNvbG9yIiwiZHJhd1NxdWFyZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3EiLCJ2YWx1ZXMiLCJjb2xvcjIiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmxvb3IiLCJmYWxsaW5nTnVtIiwibW92ZU9iamVjdHMiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN1cnJlbnRGYWxsaW5nUG9zaXRpb24iLCJjdXJyZW50Q29sdW1uIiwib3RoZXJOdW1iZXIiLCJjaGVja0NvbGxpc2lvbldpdGgiLCJqIiwiZm91bmRCb3R0b21MaW5lIiwibW92ZSIsIkdhbWVWaWV3IiwiY3R4Iiwic3RhcnQiLCJ0aGF0IiwiZHJhdyIsInNldEludGVydmFsIiwiTW92aW5nT2JqZWN0Iiwib2JqIiwidmVsIiwic3Ryb2tlUmVjdCIsImxpbmVXaWR0aCIsImZpbGxSZWN0IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJDT0xPUlMiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJzY2FsZSIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1dG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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IiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vc2NyaXB0cy9udW1iZXJzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vc2NyaXB0cy91dGlsJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI4MDBweFwiKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjYwMHB4XCIpO1xuICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIC8vICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgLy8gICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG4gIC8vICAgICAgIGdhbWUucmVzdGFydEdhbWUoKTtcbiAgLy8gICB9XG4gIC8vIH0pXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMubmV3RXEgPSAnJztcblxuICAgICAgICB0aGlzLmNyZWF0ZUVxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5yaWdodEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV3RXF1YXRpb24gPSB0aGlzLmdlbmVyYXRlTmV3RXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0Fuc29uU2NyZWVuID0gdGhpcy5jaGVja0Fuc29uU2NyZWVuLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKG51bWJlcnNPblNjcmVlbikge1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV3RXF1YXRpb24oKTtcbiAgICAgICAgaWYgKG51bWJlcnNPblNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXdFcTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGVja0Fuc29uU2NyZWVuKG51bWJlcnNPblNjcmVlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld0VxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXF1YXRpb24obnVtYmVyc09uU2NyZWVuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQW5zb25TY3JlZW4obnVtYmVyc09uU2NyZWVuKXtcbiAgICAgICAgbGV0IGFucyA9IHRoaXMucmlnaHRBbnN3ZXIodGhpcy5uZXdFcSk7XG4gICAgICAgIGxldCBhbnNBcnIgPSBhbnMudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgICAgIGxldCByaWdodEFucyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICByaWdodEFuc1twYXJzZUludChhbnNBcnJbaV0pXSA9IHJpZ2h0QW5zW3BhcnNlSW50KGFuc0FycltpXSldICsgMSB8fCAxXG4gICAgICAgICAgICBpZiAobnVtYmVyc09uU2NyZWVuW3BhcnNlSW50KGFuc0FycltpXSldIDwgcmlnaHRBbnNbcGFyc2VJbnQoYW5zQXJyW2ldKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVOZXdFcXVhdGlvbigpe1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMSkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICB0aGlzLm5ld0VxID0gZXF1YXRpb25cbiAgICB9XG5cbiAgICByaWdodEFuc3dlcihlcXVhdGlvbil7XG4gICAgICAgIGxldCBhcnIgPSBlcXVhdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtMSA9IHBhcnNlSW50KGFyclsyXSk7XG4gICAgICAgIGxldCBudW0yID0gcGFyc2VJbnQoYXJyWzRdKTtcbiAgICAgICAgc3dpdGNoKGFyclszXSkge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5pbXBvcnQgRXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gWzAsIDgwLCAxNjAsIDI0MCwgMzIwLCA0MDAsIDQ4MCwgNTYwLCA2NDAsIDcyMF07XG5jb25zdCBXSURUSCA9IDgwMDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0OyAvLzMyMCAyOTlcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDsgLy8zMjAgMjk5XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5mYWxsU3BlZWQgPSAwLjM7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gMjUwO1xuICAgICAgICB0aGlzLm51bU9mRXF1YXRpb25zU29sdmVkID0gMDtcbiAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuID0ge307XG4gICAgICAgIHRoaXMuZW5kR2FtZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbiA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXJDaGVjayA9IHRoaXMucmlnaHRBbnN3ZXJDaGVjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIgPSB0aGlzLmNoZWNrRG91YmxlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlciA9IHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaW5nbGVEaWdpdEFuc3dlciA9IHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyA9IHRoaXMucmVtb3ZlRnJvbVVzZXJDbGlja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja1NxUG9zaXRpb24gPSB0aGlzLmNoZWNrU3FQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrID0gdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleUhhbmRsZXIgPSB0aGlzLmtleUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4gdGhpcy5yZWdpc3RlckNsaWNrKGUpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB0aGlzLmtleUhhbmRsZXIoZSkpXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYXVzZS1wbGF5XCIpWzBdXG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lUGF1c2VkKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBhdXNlZCA9ICF0aGlzLmdhbWVQYXVzZWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVQYXVzZWQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVQYXVzZWQpIHt0aGlzLmFuaW1hdGUoKX07XG5cbiAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGtleUhhbmRsZXIoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5wbGF5aW5nID09PSB0cnVlICYmIHRoaXMuZW5kR2FtZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc3RhcnQgdGhlIGdhbWU/YCk7XG4gICAgICAgICAgICAvLyAgICAgaDMuY2xhc3NMaXN0LmFkZChcImFyZVlvdVN1cmVcIik7XG4gICAgICAgICAgICAvLyAgICAgaDMuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVcIikuYXBwZW5kQ2hpbGQoaDMpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICByZXN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGxldCBzb2x2ZWRFcSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzb2x2ZWRFcXNcIik7XG4gICAgICAgIGlmIChzb2x2ZWRFcS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgc29sdmVkRXFbMF0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5udW1iZXJzT25TY3JlZW4gPSB7fVxuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDAuMztcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAyNTA7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgPSAwO1xuICAgICAgICB0aGlzLkluaXRpYWxMYXllcigpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgdGhpcy5lbmRHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKHRoaXMubnVtYmVyc09uU2NyZWVuKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMuZXF1YXRpb24ucmlnaHRBbnN3ZXIodGhpcy5uZXdFcXVhdGlvbik7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBpZiAodGhpcy5mcmFtZUlkKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lSWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuZEdhbWUgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgWW91IHNvbHZlZCAke3RoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWR9IGVxdWF0aW9ucyFgKTtcbiAgICAgICAgaDMuY2xhc3NMaXN0LmFkZChcInNvbHZlZEVxc1wiKTtcbiAgICAgICAgaDMuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5hcHBlbmRDaGlsZChoMyk7XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXJDaGVjaygpIHtcbiAgICAgICAgbGV0IGFycjtcbiAgICAgICAgbGV0IGNvbmNhdFN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSB0aGlzLnVzZXJDbGlja3NbaV07XG4gICAgICAgICAgICBhcnIgPSBudW0uc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGFyclsyXSkgPT09IHRoaXMucmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyKG51bSk7XG4gICAgICAgICAgICAgICAgdGhpcy5TdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgKz0gYXJyWzJdO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjb25jYXRTdHJpbmcpID09PSB0aGlzLnJpZ2h0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKXtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24odGhpcy5udW1iZXJzT25TY3JlZW4pO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5lcXVhdGlvbi5yaWdodEFuc3dlcih0aGlzLm5ld0VxdWF0aW9uKTtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkICs9IDAuMjtcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAodGhpcy5mcmVxdWVuY3kgPT09IDUwID8gdGhpcy5mcmVxdWVuY3kgOiB0aGlzLmZyZXF1ZW5jeSAtPSAyNSk7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgKz0gMTtcbiAgICB9XG5cbiAgICBzaW5nbGVEaWdpdEFuc3dlcihzdHJpbmcpIHtcbiAgICAgICAgbGV0IGFyciA9IHN0cmluZy5zcGxpdChcIl9cIik7XG4gICAgICAgIGNvbnN0IGkgPSBwYXJzZUludChhcnJbMV0pO1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYm90dG9tbGluZVthcnJbMF1dO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJzT25TY3JlZW5bcGFyc2VJbnQoYXJyWzJdKV0gLT0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbYXJyWzBdXS5zcGxpY2UoaSAtIDEsIDEpO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJzT25TY3JlZW5bcGFyc2VJbnQoYXJyWzJdKV0gLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrRG91YmxlRGlnaXRBbnN3ZXIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyKHRoaXMudXNlckNsaWNrc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckNsaWNrKGUpIHtcbiAgICAgICAgY29uc3QgY2xpY2tlZFBvcyA9IHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtICgod2luZG93LmlubmVyV2lkdGggLSBXSURUSCkgLyAyKSxcbiAgICAgICAgICAgIHk6IE1hdGguYWJzKGUuY2xpZW50WSAtIHRoaXMub2Zmc2V0WSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2wgPSB0aGlzLmN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soY2xpY2tlZFBvcy54KTtcbiAgICAgICAgbGV0IGZOdW1iZXJzO1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgYk51bWJlcnM7XG4gICAgICAgIGxldCBjb25jYXRTdHJpbmc7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgICAgICAgIGJOdW1iZXJzID0gW3RoaXMuYm90dG9tbGluZVtjdXJyZW50Q29sXV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbnVtID0gYk51bWJlcnNbaV07XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nID0gYCR7bnVtLnBvc1swXX1fMF8ke251bS50ZXh0fWA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSl7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnMuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgICAgICAgIGZOdW1iZXJzID0gdGhpcy5mYWxsaW5nTnVtYmVyc1tjdXJyZW50Q29sXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZk51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBudW0gPSBmTnVtYmVyc1tpXTtcbiAgICAgICAgICAgICAgICBjb25jYXRTdHJpbmcgPSBgJHtudW0ucG9zWzBdfV8ke2kgKyAxfV8ke251bS50ZXh0fWA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSl7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTcVBvc2l0aW9uKG51bSwgY2xpY2tlZFBvcywgY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MTtcbiAgICAgICAgY29uc3QgdG9wID0gbnVtLnBvc1sxXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gbnVtLnBvc1sxXSArIDgwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPiBsZWZ0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPCByaWdodCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy55ID4gdG9wICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPCBib3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzLmluY2x1ZGVzKGNvbmNhdFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3MucHVzaChjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlcihudW0sIGNvbmNhdFN0cmluZyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW1vdmVGcm9tVXNlckNsaWNrcyhjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJDbGlja3NbaV0gPT09IGNvbmNhdFN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RVbnNlbGVjdE51bWJlcihudW0pIHtcbiAgICAgICAgbnVtLmNsaWNrID0gIW51bS5jbGljaztcbiAgICB9XG5cbiAgICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgICAgIGlmICh4T2ZDbGlja2VkID4geCAmJiB4T2ZDbGlja2VkIDwgeCArIDgwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGhpcy5uZXdFcXVhdGlvbiwgNDAwLCAxNSk7XG4gICAgfVxuXG4gICAgSW5pdGlhbExheWVyKCkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IGk7XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltudW1dID0gMTtcbiAgICAgICAgICAgIGNvbnN0IG5ld051bWJlciA9IG5ldyBOdW1iZXJzKFtwb3NBdFgsIDQ3MF0sIG51bSk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ld051bWJlci5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIG5ld051bWJlci5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgY29sb3IpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21saW5lW3Bvc0F0WF0gPSBuZXdOdW1iZXI7XG4gICAgICAgICAgICBwb3NBdFggKz0gODA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3TnVtYmVycygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ib3R0b21saW5lKS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNxID0gdGhpcy5ib3R0b21saW5lW3Bvc107XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHNxLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgc3EuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycykuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvcjIgPSBudW1baV0uY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBudW1baV0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yMik7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpIHtcbiAgICAgICAgY29uc3QgeCA9IERJTV9YW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwXTtcbiAgICAgICAgY29uc3QgeSA9IDI1O1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIGZhbGxpbmdOdW1iZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpO1xuICAgICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHRoaXMubnVtYmVyc09uU2NyZWVuW251bV0gKz0gMTtcbiAgICAgICAgY29uc3QgZmFsbGluZ051bSA9IG5ldyBOdW1iZXJzKHBvcywgbnVtKTtcbiAgICAgICAgZmFsbGluZ051bS5kcmF3U3F1YXJlKHRoaXMuY29udGV4dCwgXCJibGFja1wiKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dIHx8IFtdO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ucHVzaChmYWxsaW5nTnVtKTtcbiAgICAgICAgaWYgKHRoaXMuSW5pdGlhbExheWVyLmhhc093blByb3BlcnR5KHBvc1swXSkgJiYgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLmxlbmd0aCA+PSA3KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lUGF1c2VkKSB7IHJldHVybiB9XG4gICAgaWYgKHRoaXMucGxheWluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVIID4gdGhpcy5mcmVxdWVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycygpO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKHBvcywgY3VycmVudEZhbGxpbmdQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dO1xuICAgICAgICBsZXQgb3RoZXJOdW1iZXI7XG4gICAgICAgIGlmIChjdXJyZW50RmFsbGluZ1Bvc2l0aW9uICE9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbl07XG4gICAgICAgICAgICBvdGhlck51bWJlciA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuIG51bS5jaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIGxldCBudW1iZXJzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGV0ZWN0Q29sbGlzaW9uKG51bWJlcnNbaV1bal0ucG9zLCBqKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvdHRvbUxpbmUgPSB0aGlzLmJvdHRvbWxpbmUuaGFzT3duUHJvcGVydHkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5wb3NbMF0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5tb3ZlKGZvdW5kQm90dG9tTGluZSwgdGhpcy5mYWxsU3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbldpdGggPSB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoY3R4LCBjb2xvcikge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0gKyA0MCwgdGhpcy5wb3NbMV0gKyA0MCk7XG4gICAgfVxuXG4gICAgbW92ZShmb3VuZEJvdHRvbUxpbmUsIGZhbGxTcGVlZCkge1xuICAgICAgICBpZiAoZm91bmRCb3R0b21MaW5lICYmIHRoaXMucG9zWzFdID49IDM5MCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV07XG4gICAgICAgIH0gZWxzZSBpZiAoIWZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSA0NzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9zWzFdICs9IGZhbGxTcGVlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NbMV0gPj0gb3RoZXJOdW1iZXIucG9zWzFdIC0gODA7XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG4vLyBjb25zdCBDT0xPUlMgPSB7XG4vLyAgIDA6IFwiI0NDRkYwMFwiLFxuLy8gICAxOiBcIiNmZjAwMDBcIixcbi8vICAgMjogXCIjZmY4MDAwXCIsXG4vLyAgIDM6IFwiI2ZmZmYwMFwiLFxuLy8gICA0OiBcIiMwMGZmODBcIixcbi8vICAgNTogXCIjRkJBRUQyXCIsXG4vLyAgIDY6IFwiI0ZGNTM0OVwiLFxuLy8gICA3OiBcIiMwMGZmY2NcIixcbi8vICAgODogXCIjMDBmMmZmXCIsXG4vLyAgIDk6IFwiI2ZmMDA3M1wiLFxuLy8gfTtcblxuY29uc3QgQ09MT1JTID0ge1xuICAwOiBcIiNjY2ZmMDBcIixcbiAgMTogXCIjZmYwMDAwXCIsXG4gIDI6IFwiI2ZmODAwMFwiLFxuICAzOiBcIiNmZmZmMDBcIixcbiAgNDogXCIjMDBmZjgwXCIsXG4gIDU6IFwiI2ZiYWVkMlwiLFxuICA2OiBcIiNmZjUzNDlcIixcbiAgNzogXCIjMDBmZmNjXCIsXG4gIDg6IFwiIzAwZjJmZlwiLFxuICA5OiBcIiNmZjAwNzNcIixcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHRleHQpIHtcbiAgICAgICAgLy8gbnVtYmVyIGluc2lkZSBzcXVhcmVcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5jbGljayA9IGZhbHNlO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=