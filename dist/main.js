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
      if (e.key === "Enter") {
        e.preventDefault();
        cancelAnimationFrame(this.frameId); // if (this.playing === true && this.endGame === false) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJuZXdFcSIsImNyZWF0ZUVxdWF0aW9uIiwiYmluZCIsInJpZ2h0QW5zd2VyIiwibmV3RXF1YXRpb24iLCJnZW5lcmF0ZU5ld0VxdWF0aW9uIiwiY2hlY2tBbnNvblNjcmVlbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJudW1iZXJzT25TY3JlZW4iLCJ1bmRlZmluZWQiLCJhbnMiLCJhbnNBcnIiLCJ0b1N0cmluZyIsInJpZ2h0QW5zIiwiaSIsImxlbmd0aCIsInBhcnNlSW50Iiwicm91bmQiLCJzdGFydE51bTEiLCJzdGFydE51bTIiLCJtYXRoT3AiLCJudW0xIiwic2h1ZmZsZWQiLCJzbGljZSIsIm51bTIiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwib2Zmc2V0WCIsIm9mZnNldExlZnQiLCJvZmZzZXRZIiwib2Zmc2V0VG9wIiwiYm90dG9tbGluZSIsImZhbGxpbmdOdW1iZXJzIiwiZnJhbWVIIiwidXNlckNsaWNrcyIsInBsYXlpbmciLCJmcmFtZUlkIiwiZmlsbFN0eWxlIiwiZmFsbFNwZWVkIiwiZnJlcXVlbmN5IiwibnVtT2ZFcXVhdGlvbnNTb2x2ZWQiLCJnYW1lUGF1c2VkIiwiZW5kR2FtZSIsIkluaXRpYWxMYXllciIsInJlZ2lzdGVyQ2xpY2siLCJmYWxsaW5nTnVtYmVyIiwiZHJhd0VxdWF0aW9uIiwiZHJhd051bWJlcnMiLCJhbmltYXRlIiwiZGV0ZWN0Q29sbGlzaW9uIiwicmlnaHRBbnN3ZXJDaGVjayIsImdhbWVPdmVyIiwiY2hlY2tEb3VibGVEaWdpdEFuc3dlciIsInNlbGVjdFVuc2VsZWN0TnVtYmVyIiwic2luZ2xlRGlnaXRBbnN3ZXIiLCJyZW1vdmVGcm9tVXNlckNsaWNrcyIsImNoZWNrU3FQb3NpdGlvbiIsIlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrIiwia2V5SGFuZGxlciIsImUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwia2V5IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXN0YXJ0R2FtZSIsImNsZWFyUmVjdCIsImNsYXNzTGlzdCIsImFkZCIsInNvbHZlZEVxIiwicmVtb3ZlIiwiaDMiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJjb25jYXRTdHJpbmciLCJudW0iLCJzdHJpbmciLCJzcGxpY2UiLCJjdXJyZW50T2Zmc2V0WSIsImFicyIsInZpc3VhbFZpZXdwb3J0IiwicGFnZVRvcCIsImNsaWNrZWRQb3MiLCJ4IiwiY2xpZW50WCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ5IiwiY2xpZW50WSIsImN1cnJlbnRDb2wiLCJjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrIiwiZk51bWJlcnMiLCJiTnVtYmVycyIsImhhc093blByb3BlcnR5IiwicG9zIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaW5jbHVkZXMiLCJwdXNoIiwiY2xpY2siLCJ4T2ZDbGlja2VkIiwic3Ryb2tlU3R5bGUiLCJmb250Iiwic3Ryb2tlVGV4dCIsInBvc0F0WCIsIm5ld051bWJlciIsIk51bWJlcnMiLCJjb2xvciIsImRyYXdTcXVhcmUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNxIiwidmFsdWVzIiwiY29sb3IyIiwicmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycyIsImZsb29yIiwiZmFsbGluZ051bSIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIiwiY3VycmVudENvbHVtbiIsIm90aGVyTnVtYmVyIiwiY2hlY2tDb2xsaXNpb25XaXRoIiwiaiIsImZvdW5kQm90dG9tTGluZSIsIm1vdmUiLCJHYW1lVmlldyIsImN0eCIsInN0YXJ0IiwidGhhdCIsImRyYXciLCJzZXRJbnRlcnZhbCIsIk1vdmluZ09iamVjdCIsIm9iaiIsInZlbCIsInN0cm9rZVJlY3QiLCJsaW5lV2lkdGgiLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwic2NhbGUiLCJ2ZWMiLCJtIiwibnVtYmVyIiwiY2hpbGRDbGFzcyIsInBhcmVudENsYXNzIiwiU3Vycm9nYXRlIiwicHJvdG90eXBlIiwiY29uc3RydXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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Q0FBQ0csU0FBWCxHQUF1QixJQUFJRCxTQUFKLEVBQXZCO0FBQ0FGLFlBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsVUFBckIsR0FBa0NKLFVBQWxDO0FBQ0gsQ0FMRDs7QUFPQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0wsSUFBakIsQzs7Ozs7Ozs7Ozs7QUNuQkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9zY3JpcHRzL251bWJlcnMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuXG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi9zY3JpcHRzL3V0aWwnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjgwMHB4XCIpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNjAwcHhcIik7XG4gIC8vIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgLy8gICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAvLyAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgLy8gICAgICAgZ2FtZS5yZXN0YXJ0R2FtZSgpO1xuICAvLyAgIH1cbiAgLy8gfSlcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG59KSIsImNvbnN0IE1BVEhPUCA9IFtcbiAgICAnKycsIFxuICAgICctJyxcbiAgICAnKidcbl1cblxuY29uc3QgTlVNQkVSUyA9ICcwMTIzNDU2Nzg5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG51bWJlcnMpIHtcbiAgICAgICAgdGhpcy5udW1iZXJzID0gbnVtYmVycztcbiAgICAgICAgdGhpcy5uZXdFcSA9ICcnO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlRXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLnJpZ2h0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVOZXdFcXVhdGlvbiA9IHRoaXMuZ2VuZXJhdGVOZXdFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQW5zb25TY3JlZW4gPSB0aGlzLmNoZWNrQW5zb25TY3JlZW4uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaHVmZmxlZCAodW5zaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gdW5zaHVmZmxlZFxuICAgICAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+ICh7IHNvcnQ6IE1hdGgucmFuZG9tKCksIHZhbHVlOiBhIH0pKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnQgLSBiLnNvcnQpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gYS52YWx1ZSlcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlRXF1YXRpb24obnVtYmVyc09uU2NyZWVuKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVOZXdFcXVhdGlvbigpO1xuICAgICAgICBpZiAobnVtYmVyc09uU2NyZWVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld0VxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoZWNrQW5zb25TY3JlZW4obnVtYmVyc09uU2NyZWVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV3RXE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcXVhdGlvbihudW1iZXJzT25TY3JlZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tBbnNvblNjcmVlbihudW1iZXJzT25TY3JlZW4pe1xuICAgICAgICBsZXQgYW5zID0gdGhpcy5yaWdodEFuc3dlcih0aGlzLm5ld0VxKTtcbiAgICAgICAgbGV0IGFuc0FyciA9IGFucy50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgICAgICAgbGV0IHJpZ2h0QW5zID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHJpZ2h0QW5zW3BhcnNlSW50KGFuc0FycltpXSldID0gcmlnaHRBbnNbcGFyc2VJbnQoYW5zQXJyW2ldKV0gKyAxIHx8IDFcbiAgICAgICAgICAgIGlmIChudW1iZXJzT25TY3JlZW5bcGFyc2VJbnQoYW5zQXJyW2ldKV0gPCByaWdodEFuc1twYXJzZUludChhbnNBcnJbaV0pXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU5ld0VxdWF0aW9uKCl7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxKSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IG1hdGhPcCA9IE1BVEhPUFtNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMildO1xuICAgICAgICBsZXQgbnVtMSA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTEsXG4gICAgICAgICAgICBzdGFydE51bTEgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0yLFxuICAgICAgICAgICAgc3RhcnROdW0yICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXJzZUludChudW0xKSA8IHBhcnNlSW50KG51bTIpICYmIG1hdGhPcCA9PT0gJy0nKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gbnVtMTtcbiAgICAgICAgICAgIG51bTEgPSBudW0yO1xuICAgICAgICAgICAgbnVtMiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBgV2hhdCBpcyAke251bTF9ICR7bWF0aE9wfSAke251bTJ9P2A7XG4gICAgICAgIHRoaXMubmV3RXEgPSBlcXVhdGlvblxuICAgIH1cblxuICAgIHJpZ2h0QW5zd2VyKGVxdWF0aW9uKXtcbiAgICAgICAgbGV0IGFyciA9IGVxdWF0aW9uLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBudW0xID0gcGFyc2VJbnQoYXJyWzJdKTtcbiAgICAgICAgbGV0IG51bTIgPSBwYXJzZUludChhcnJbNF0pO1xuICAgICAgICBzd2l0Y2goYXJyWzNdKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9udW1iZXJzJztcbmltcG9ydCBFcXVhdGlvbiBmcm9tICcuL2VxdWF0aW9uJztcbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgTnVtQ29sdW1ucyA9IDEwO1xuY29uc3QgRElNX1ggPSBbMCwgODAsIDE2MCwgMjQwLCAzMjAsIDQwMCwgNDgwLCA1NjAsIDY0MCwgNzIwXTtcbmNvbnN0IFdJRFRIID0gODAwO1xuY29uc3QgSEVJR0hUID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7IC8vMzIwIDI5OVxuICAgICAgICB0aGlzLm9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wOyAvLzMyMCAyOTlcbiAgICAgICAgdGhpcy5ib3R0b21saW5lID0ge307XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB0aGlzLnVzZXJDbGlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcXVhdGlvbiA9IG5ldyBFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDAuMztcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAyNTA7XG4gICAgICAgIHRoaXMubnVtT2ZFcXVhdGlvbnNTb2x2ZWQgPSAwO1xuICAgICAgICB0aGlzLmdhbWVQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5udW1iZXJzT25TY3JlZW4gPSB7fTtcbiAgICAgICAgdGhpcy5lbmRHYW1lID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5Jbml0aWFsTGF5ZXIgPSB0aGlzLkluaXRpYWxMYXllci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2sgPSB0aGlzLnJlZ2lzdGVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyID0gdGhpcy5mYWxsaW5nTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uID0gdGhpcy5kcmF3RXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycyA9IHRoaXMuZHJhd051bWJlcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9uID0gdGhpcy5kZXRlY3RDb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlckNoZWNrID0gdGhpcy5yaWdodEFuc3dlckNoZWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlciA9IHRoaXMuY2hlY2tEb3VibGVEaWdpdEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdFVuc2VsZWN0TnVtYmVyID0gdGhpcy5zZWxlY3RVbnNlbGVjdE51bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNpbmdsZURpZ2l0QW5zd2VyID0gdGhpcy5zaW5nbGVEaWdpdEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUZyb21Vc2VyQ2xpY2tzID0gdGhpcy5yZW1vdmVGcm9tVXNlckNsaWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrU3FQb3NpdGlvbiA9IHRoaXMuY2hlY2tTcVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2sgPSB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlciA9IHRoaXMua2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB0aGlzLnJlZ2lzdGVyQ2xpY2soZSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHRoaXMua2V5SGFuZGxlcihlKSlcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhdXNlLXBsYXlcIilbMF1cbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVQYXVzZWQpO1xuICAgICAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gIXRoaXMuZ2FtZVBhdXNlZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2FtZVBhdXNlZCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZVBhdXNlZCkge3RoaXMuYW5pbWF0ZSgpfTtcbiAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGtleUhhbmRsZXIoZSl7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZClcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnBsYXlpbmcgPT09IHRydWUgJiYgdGhpcy5lbmRHYW1lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc3RhcnQgdGhlIGdhbWU/YCk7XG4gICAgICAgICAgICAvLyAgICAgaDMuY2xhc3NMaXN0LmFkZChcImFyZVlvdVN1cmVcIik7XG4gICAgICAgICAgICAvLyAgICAgaDMuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVcIikuYXBwZW5kQ2hpbGQoaDMpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0R2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgbGV0IHNvbHZlZEVxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvbHZlZEVxc1wiKTtcbiAgICAgICAgaWYgKHNvbHZlZEVxLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBzb2x2ZWRFcVswXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbiA9IHt9XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMC4zO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IDI1MDtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCA9IDA7XG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyKCk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcigpO1xuICAgICAgICB0aGlzLmVuZEdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24odGhpcy5udW1iZXJzT25TY3JlZW4pO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5lcXVhdGlvbi5yaWdodEFuc3dlcih0aGlzLm5ld0VxdWF0aW9uKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5kR2FtZSA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBZb3Ugc29sdmVkICR7dGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZH0gZXF1YXRpb25zIWApO1xuICAgICAgICBoMy5jbGFzc0xpc3QuYWRkKFwic29sdmVkRXFzXCIpO1xuICAgICAgICBoMy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRHYW1lXCIpLmFwcGVuZENoaWxkKGgzKTtcbiAgICB9XG5cbiAgICByaWdodEFuc3dlckNoZWNrKCkge1xuICAgICAgICBsZXQgYXJyO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHRoaXMudXNlckNsaWNrc1tpXTtcbiAgICAgICAgICAgIGFyciA9IG51bS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoYXJyWzJdKSA9PT0gdGhpcy5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIobnVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLlN0ZXBzQWZ0ZXJSaWdodEFuc3dlckNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyArPSBhcnJbMl07XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNvbmNhdFN0cmluZykgPT09IHRoaXMucmlnaHRBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0RvdWJsZURpZ2l0QW5zd2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RlcHNBZnRlclJpZ2h0QW5zd2VyQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTdGVwc0FmdGVyUmlnaHRBbnN3ZXJDbGljaygpe1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbih0aGlzLm51bWJlcnNPblNjcmVlbik7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLmVxdWF0aW9uLnJpZ2h0QW5zd2VyKHRoaXMubmV3RXF1YXRpb24pO1xuICAgICAgICB0aGlzLnVzZXJDbGlja3MgPSBbXTtcbiAgICAgICAgdGhpcy5mYWxsU3BlZWQgKz0gMC4yO1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9ICh0aGlzLmZyZXF1ZW5jeSA9PT0gNTAgPyB0aGlzLmZyZXF1ZW5jeSA6IHRoaXMuZnJlcXVlbmN5IC09IDI1KTtcbiAgICAgICAgdGhpcy5udW1PZkVxdWF0aW9uc1NvbHZlZCArPSAxO1xuICAgIH1cblxuICAgIHNpbmdsZURpZ2l0QW5zd2VyKHN0cmluZykge1xuICAgICAgICBsZXQgYXJyID0gc3RyaW5nLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgY29uc3QgaSA9IHBhcnNlSW50KGFyclsxXSk7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ib3R0b21saW5lW2FyclswXV07XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltwYXJzZUludChhcnJbMl0pXSAtPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1thcnJbMF1dLnNwbGljZShpIC0gMSwgMSk7XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltwYXJzZUludChhcnJbMl0pXSAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tEb3VibGVEaWdpdEFuc3dlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJDbGlja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlRGlnaXRBbnN3ZXIodGhpcy51c2VyQ2xpY2tzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2xpY2soZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50T2Zmc2V0WSA9IE1hdGguYWJzKHZpc3VhbFZpZXdwb3J0LnBhZ2VUb3AgLSB0aGlzLm9mZnNldFkpO1xuICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gKCh3aW5kb3cuaW5uZXJXaWR0aCAtIFdJRFRIKSAvIDIpLFxuICAgICAgICAgICAgeTogTWF0aC5hYnMoZS5jbGllbnRZIC0gY3VycmVudE9mZnNldFkpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sID0gdGhpcy5jdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKGNsaWNrZWRQb3MueCk7XG4gICAgICAgIGxldCBmTnVtYmVycztcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IGJOdW1iZXJzO1xuICAgICAgICBsZXQgY29uY2F0U3RyaW5nO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBiTnVtYmVycyA9IFt0aGlzLmJvdHRvbWxpbmVbY3VycmVudENvbF1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bSA9IGJOdW1iZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbmNhdFN0cmluZyA9IGAke251bS5wb3NbMF19XzBfJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZykpe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBmTnVtYmVycyA9IHRoaXMuZmFsbGluZ051bWJlcnNbY3VycmVudENvbF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbnVtID0gZk51bWJlcnNbaV07XG4gICAgICAgICAgICAgICAgY29uY2F0U3RyaW5nID0gYCR7bnVtLnBvc1swXX1fJHtpICsgMX1fJHtudW0udGV4dH1gO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZykpe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXJDaGVjaygpO1xuICAgIH1cblxuICAgIGNoZWNrU3FQb3NpdGlvbihudW0sIGNsaWNrZWRQb3MsIGNvbmNhdFN0cmluZykge1xuICAgICAgICBjb25zdCBsZWZ0ID0gbnVtLnBvc1swXTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBudW0ucG9zWzBdICsgODE7XG4gICAgICAgIGNvbnN0IHRvcCA9IG51bS5wb3NbMV07XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IG51bS5wb3NbMV0gKyA4MDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2xpY2tlZFBvcy54ID4gbGVmdCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy54IDwgcmlnaHQgJiZcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueSA+IHRvcCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy55IDwgYm90dG9tXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlckNsaWNrcy5pbmNsdWRlcyhjb25jYXRTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVVzZXJDbGlja3MoY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzLnB1c2goY29uY2F0U3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VW5zZWxlY3ROdW1iZXIobnVtLCBjb25jYXRTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVtb3ZlRnJvbVVzZXJDbGlja3MoY29uY2F0U3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyQ2xpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyQ2xpY2tzW2ldID09PSBjb25jYXRTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDbGlja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0VW5zZWxlY3ROdW1iZXIobnVtKSB7XG4gICAgICAgIG51bS5jbGljayA9ICFudW0uY2xpY2s7XG4gICAgfVxuXG4gICAgY3VycmVudENvbHVtbkZvclVzZXJDbGljayh4T2ZDbGlja2VkKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICAgICAgICBpZiAoeE9mQ2xpY2tlZCA+IHggJiYgeE9mQ2xpY2tlZCA8IHggKyA4MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeCArPSA4MDtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFcXVhdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMjBweCBWZXJkYW5hXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KHRoaXMubmV3RXF1YXRpb24sIDQwMCwgMTUpO1xuICAgIH1cblxuICAgIEluaXRpYWxMYXllcigpIHtcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IHBvc0F0WCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtQ29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICBudW0gPSBpO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJzT25TY3JlZW5bbnVtXSA9IDE7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzBdLCBudW0pO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXdOdW1iZXIuY2xpY2sgPyBcImRhcmtncmV5XCIgOiBcImJsYWNrXCI7XG4gICAgICAgICAgICBuZXdOdW1iZXIuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIGNvbG9yKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tbGluZVtwb3NBdFhdID0gbmV3TnVtYmVyO1xuICAgICAgICAgICAgcG9zQXRYICs9IDgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd051bWJlcnMoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuYm90dG9tbGluZSkuZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcSA9IHRoaXMuYm90dG9tbGluZVtwb3NdO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzcS5jbGljayA/IFwiZGFya2dyZXlcIiA6IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIHNxLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3IyID0gbnVtW2ldLmNsaWNrID8gXCJkYXJrZ3JleVwiIDogXCJibGFja1wiO1xuICAgICAgICAgICAgbnVtW2ldLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0LCBjb2xvcjIpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKSB7XG4gICAgICAgIGNvbnN0IHggPSBESU1fWFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMF07XG4gICAgICAgIGNvbnN0IHkgPSAyNTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICBmYWxsaW5nTnVtYmVyKCkge1xuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKTtcbiAgICAgICAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB0aGlzLm51bWJlcnNPblNjcmVlbltudW1dICs9IDE7XG4gICAgICAgIGNvbnN0IGZhbGxpbmdOdW0gPSBuZXcgTnVtYmVycyhwb3MsIG51bSk7XG4gICAgICAgIGZhbGxpbmdOdW0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQsIFwiYmxhY2tcIik7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXSA9IHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXSB8fCBbXTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLnB1c2goZmFsbGluZ051bSk7XG4gICAgICAgIGlmICh0aGlzLkluaXRpYWxMYXllci5oYXNPd25Qcm9wZXJ0eShwb3NbMF0pICYmIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5sZW5ndGggPj0gNikge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5sZW5ndGggPj0gNykge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBhdXNlZCkgeyByZXR1cm4gfVxuICAgIGlmICh0aGlzLnBsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVIICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSCA+IHRoaXMuZnJlcXVlbmN5KSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMoKTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdENvbGxpc2lvbihwb3MsIGN1cnJlbnRGYWxsaW5nUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgY3VycmVudENvbHVtbiA9IHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXTtcbiAgICAgICAgbGV0IG90aGVyTnVtYmVyO1xuICAgICAgICBpZiAoY3VycmVudEZhbGxpbmdQb3NpdGlvbiAhPSAwKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBjdXJyZW50Q29sdW1uW2N1cnJlbnRGYWxsaW5nUG9zaXRpb25dO1xuICAgICAgICAgICAgb3RoZXJOdW1iZXIgPSBjdXJyZW50Q29sdW1uW2N1cnJlbnRGYWxsaW5nUG9zaXRpb24gLSAxXTtcbiAgICAgICAgICAgIHJldHVybiBudW0uY2hlY2tDb2xsaXNpb25XaXRoKG90aGVyTnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICBsZXQgbnVtYmVycyA9IE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRldGVjdENvbGxpc2lvbihudW1iZXJzW2ldW2pdLnBvcywgaikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRCb3R0b21MaW5lID0gdGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNbaV1bal0ucG9zWzBdLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIG51bWJlcnNbaV1bal0ubW92ZShmb3VuZEJvdHRvbUxpbmUsIHRoaXMuZmFsbFNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmdhbWUubW92ZU9iamVjdHMoKSwgXG4gICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldEludGVydmFsKGNhbGxiYWNrLmJpbmQodGhhdCksIDIwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHRoaXMucG9zID0gb2JqW1wicG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IG9ialtcInZlbFwiXTtcbiAgICAgICAgdGhpcy5jb2xvciA9IG9ialtcImNvbG9yXCJdO1xuICAgICAgICB0aGlzLnRleHQgPSBvYmpbXCJ0ZXh0XCJdO1xuICAgICAgICB0aGlzLmRyYXdTcXVhcmUgPSB0aGlzLmRyYXdTcXVhcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoID0gdGhpcy5jaGVja0NvbGxpc2lvbldpdGguYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKGN0eCwgY29sb3IpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjQwcHggR2VvcmdpYVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRleHQsIHRoaXMucG9zWzBdICsgNDAsIHRoaXMucG9zWzFdICsgNDApO1xuICAgIH1cblxuICAgIG1vdmUoZm91bmRCb3R0b21MaW5lLCBmYWxsU3BlZWQpIHtcbiAgICAgICAgaWYgKGZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSAzOTApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKCFmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gNDcwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvc1sxXSArPSBmYWxsU3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zWzFdID49IG90aGVyTnVtYmVyLnBvc1sxXSAtIDgwO1xuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuLy8gY29uc3QgQ09MT1JTID0ge1xuLy8gICAwOiBcIiNDQ0ZGMDBcIixcbi8vICAgMTogXCIjZmYwMDAwXCIsXG4vLyAgIDI6IFwiI2ZmODAwMFwiLFxuLy8gICAzOiBcIiNmZmZmMDBcIixcbi8vICAgNDogXCIjMDBmZjgwXCIsXG4vLyAgIDU6IFwiI0ZCQUVEMlwiLFxuLy8gICA2OiBcIiNGRjUzNDlcIixcbi8vICAgNzogXCIjMDBmZmNjXCIsXG4vLyAgIDg6IFwiIzAwZjJmZlwiLFxuLy8gICA5OiBcIiNmZjAwNzNcIixcbi8vIH07XG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgMDogXCIjY2NmZjAwXCIsXG4gIDE6IFwiI2ZmMDAwMFwiLFxuICAyOiBcIiNmZjgwMDBcIixcbiAgMzogXCIjZmZmZjAwXCIsXG4gIDQ6IFwiIzAwZmY4MFwiLFxuICA1OiBcIiNmYmFlZDJcIixcbiAgNjogXCIjZmY1MzQ5XCIsXG4gIDc6IFwiIzAwZmZjY1wiLFxuICA4OiBcIiMwMGYyZmZcIixcbiAgOTogXCIjZmYwMDczXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVycyB7XG4gICAgY29uc3RydWN0b3IocG9zLCB0ZXh0KSB7XG4gICAgICAgIC8vIG51bWJlciBpbnNpZGUgc3F1YXJlXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuY2xpY2sgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgIHZlbDogVXRpbC5yYW5kb21WZWMoMiksXG4gICAgICAgICAgY29sb3I6IENPTE9SU1t0aGlzLnRleHRdLFxuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgfTtcbiAgICAgICAgTW92aW5nT2JqZWN0LmNhbGwodGhpcywgb2JqKTtcbiAgICB9XG59O1xuXG5VdGlsLmluaGVyaXRzKE51bWJlcnMsIE1vdmluZ09iamVjdCk7IiwiY29uc3QgVXRpbCA9IHtcbiAgICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBVdGlsLnNjYWxlKFswLCA1XSwgbGVuZ3RoKTtcbiAgICB9LFxuICAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgICByZXR1cm4gWzAsIHZlY1sxXSogbV1cbiAgICB9LFxuICAgIG51bWJlcihudW0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG51bSlcbiAgICB9XG59XG5cblV0aWwuaW5oZXJpdHMgPSBmdW5jdGlvbihjaGlsZENsYXNzLCBwYXJlbnRDbGFzcykge1xuICAgIGZ1bmN0aW9uIFN1cnJvZ2F0ZSgpIHt9O1xuICAgIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnRDbGFzcy5wcm90b3R5cGU7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlKCk7XG4gICAgY2hpbGRDbGFzcy5wcm90b3R5cGUuY29uc3RydXRvciA9IGNoaWxkQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9