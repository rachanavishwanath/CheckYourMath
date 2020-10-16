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
      var length = Math.round(Math.random() * 10 % 3) + 1;
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
var DIM_Y = 600;

var Game = /*#__PURE__*/function () {
  function Game(canvas) {
    var _this = this;

    _classCallCheck(this, Game);

    this.context = canvas.getContext("2d");
    this.offsetX = canvas.offsetLeft;
    this.offsetY = canvas.offsetTop;
    this.bottomline = {};
    this.fallingNumbers = {};
    this.frameH = 0;
    this.userClicks = [];
    this.playing = false;
    this.frameId = null;
    this.equation = new _equation__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.newEquation = null;
    this.rightAnswer = null;
    this.InitialLayer = this.InitialLayer.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.fallingNumber = this.fallingNumber.bind(this);
    this.drawEquation = this.drawEquation.bind(this);
    this.drawNumbers = this.drawNumbers.bind(this);
    this.animate = this.animate.bind(this);
    this.detectCollision = this.detectCollision.bind(this);
    this.removeRightAnswerSquare = this.removeRightAnswerSquare.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    this.gameOver = this.gameOver.bind(this);
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
      document.getElementById("endGame").classList.add("hidden"); // const equation = new Equation();

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
    key: "removeRightAnswerSquare",
    value: function removeRightAnswerSquare(currentCol) {
      var _this2 = this;

      console.log(this.rightAnswer);
      var that = this;
      this.userClicks.forEach(function (num) {
        if (that.rightAnswer < 10) {
          debugger;

          if (num.text === _this2.rightAnswer && num.pos[1] === 474) {
            debugger;
            delete _this2.bottomline[num.pos[0]];
            _this2.userClicks = [];
            that.newEquation = that.equation.createEquation();
            console.log(_this2.bottomline);
            console.log("right answer");
          } else {
            _this2.fallingNumbers[currentCol];
          }
        }
      });
    }
  }, {
    key: "registerClick",
    value: function registerClick(e) {
      console.log(this.offsetX);
      console.log(this.offsetY);
      debugger;
      var clickedPos = {
        x: e.clientX - this.offsetX,
        // y: e.clientY
        y: Math.abs(e.clientY - this.offsetY) - 25
      };
      alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));
      var currentCol = this.currentColumnForUserClick(clickedPos.x);
      var fNumbers;
      var allNumbers;
      var left;
      var right;
      var top;
      var bottom;
      var bNumbers = [this.bottomline[currentCol]];

      if (this.fallingNumbers.hasOwnProperty(currentCol)) {
        fNumbers = this.fallingNumbers[currentCol];
        allNumbers = fNumbers.concat(bNumbers);
      } else {
        allNumbers = bNumbers;
      }

      debugger;
      console.log(allNumbers);

      for (var i = 0; i < allNumbers.length; i++) {
        var num = allNumbers[i];
        var _left = num.pos[0];

        var _right = num.pos[0] + 80;

        var _top = num.pos[1];

        var _bottom = num.pos[1] + 80;

        if (clickedPos.x >= _left && clickedPos.x <= _right && // clickedPos.y >= top &&
        clickedPos.y <= _bottom) {
          console.log(this.userClicks);
          this.userClicks.push(num);
          alert(num.text);
          console.log(this.userClicks);
          break;
        }
      }

      this.removeRightAnswerSquare(currentCol);
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
        num = Math.round(Math.random() * 10) % 10;
        var newNumber = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"]([posAtX, 474], num);
        newNumber.drawSquare(this.context);
        this.bottomline[posAtX] = newNumber;
        posAtX += 80;
      }
    }
  }, {
    key: "drawNumbers",
    value: function drawNumbers() {
      var _this3 = this;

      Object.keys(this.bottomline).forEach(function (pos) {
        var sq = _this3.bottomline[pos];
        sq.drawSquare(_this3.context);
      });
      Object.values(this.fallingNumbers).forEach(function (num) {
        for (var i = 0; i < num.length; i++) {
          num[i].drawSquare(_this3.context);
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
      fallingNum.drawSquare(this.context);
      this.fallingNumbers[pos[0]] = this.fallingNumbers[pos[0]] || [];
      this.fallingNumbers[pos[0]].push(fallingNum);

      if (this.fallingNumbers[pos[0]].length === 6) {
        this.gameOver();
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this4 = this;

      if (this.playing === true) {
        this.frameH += 1;

        if (this.frameH > 50) {
          this.fallingNumber();
          this.frameH = 0;
        }

        this.context.clearRect(0, 0, WIDTH, HEIGHT);
        this.drawEquation();
        this.moveObjects();
        this.drawNumbers();

        var callback = function callback() {
          return _this4.animate();
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
            numbers[i][j].move(foundBottomLine);
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
    value: function drawSquare(ctx) {
      ctx.strokeStyle = "red";
      ctx.strokeRect(this.pos[0], this.pos[1], 80, 80);
      ctx.lineWidth = 2;
      ctx.fillStyle = "black";
      ctx.fillRect(this.pos[0], this.pos[1], 80, 80);
      ctx.fillStyle = this.color;
      ctx.font = "40px Georgia";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, this.pos[0] + 40, this.pos[1] + 40);
    }
  }, {
    key: "move",
    value: function move(foundBottomLine) {
      if (foundBottomLine && this.pos[1] >= 393) {
        this.pos[1];
      } else if (!foundBottomLine && this.pos[1] >= 473) {
        this.pos[1];
      } else {
        this.pos[1] += 10;
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



var Util = __webpack_require__(/*! ./util */ "./src/scripts/util.js");

var COLORS = {
  0: "#CCFF00",
  1: "#ff0000",
  2: "#ff8000",
  3: "#ffff00",
  4: "#00ff80",
  5: "#FBAED2",
  6: "#FF5349",
  7: "#00ffcc",
  8: "#00f2ff",
  9: "#ff0073"
};

var Numbers = function Numbers(pos, text) {
  _classCallCheck(this, Numbers);

  // number inside square
  this.text = text;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwiY3JlYXRlRXF1YXRpb24iLCJiaW5kIiwicmlnaHRBbnN3ZXIiLCJuZXdFcXVhdGlvbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJsZW5ndGgiLCJyb3VuZCIsInN0YXJ0TnVtMSIsInN0YXJ0TnVtMiIsIm1hdGhPcCIsIm51bTEiLCJzaHVmZmxlZCIsInNsaWNlIiwibnVtMiIsInBhcnNlSW50IiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJESU1fWSIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsIkluaXRpYWxMYXllciIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJkZXRlY3RDb2xsaXNpb24iLCJyZW1vdmVSaWdodEFuc3dlclNxdWFyZSIsImtleUhhbmRsZXIiLCJnYW1lT3ZlciIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwicmVzdGFydEdhbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInJlbW92ZSIsImN1cnJlbnRDb2wiLCJ0aGF0IiwiZm9yRWFjaCIsIm51bSIsInRleHQiLCJwb3MiLCJhYnMiLCJjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrIiwiZk51bWJlcnMiLCJhbGxOdW1iZXJzIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYk51bWJlcnMiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbmNhdCIsImkiLCJwdXNoIiwieE9mQ2xpY2tlZCIsInN0cm9rZVN0eWxlIiwiZm9udCIsInN0cm9rZVRleHQiLCJwb3NBdFgiLCJuZXdOdW1iZXIiLCJOdW1iZXJzIiwiZHJhd1NxdWFyZSIsIk9iamVjdCIsImtleXMiLCJzcSIsInZhbHVlcyIsInJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMiLCJmYWxsaW5nTnVtIiwibW92ZU9iamVjdHMiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN1cnJlbnRGYWxsaW5nUG9zaXRpb24iLCJjdXJyZW50Q29sdW1uIiwib3RoZXJOdW1iZXIiLCJjaGVja0NvbGxpc2lvbldpdGgiLCJqIiwiZm91bmRCb3R0b21MaW5lIiwibW92ZSIsIkdhbWVWaWV3IiwiY3R4Iiwic3RhcnQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJjb2xvciIsInN0cm9rZVJlY3QiLCJsaW5lV2lkdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwic2NhbGUiLCJ2ZWMiLCJtIiwibnVtYmVyIiwiY2hpbGRDbGFzcyIsInBhcmVudENsYXNzIiwiU3Vycm9nYXRlIiwicHJvdG90eXBlIiwiY29uc3RydXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw2Q0FBRCxDQUFwQjs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxDQUF2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QkMsV0FBckIsRUFBa0M7QUFDOUMsV0FBU0MsU0FBVCxHQUFxQixDQUFFOztBQUFBO0FBQ3ZCQSxXQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7QUFDQUgsWUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUI1SixJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgY2xpY2tlZFBvcyA9IHtcbiAgICB4OiBlLmNsaWVudFggLSBvZmZzZXRYLFxuICAgIHk6IGUuY2xpZW50WSAtIG9mZnNldFksXG4gIH07XG4gIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgcmV0dXJuIGNsaWNrZWRQb3M7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgY29uc3Qgb2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gIGxldCBjbGlja2VkUG9zO1xuICBjb25zb2xlLmxvZygnSXRzIHdvcmtpbmcnKTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG59KSIsImNvbnN0IE1BVEhPUCA9IFtcbiAgICAnKycsIFxuICAgICctJyxcbiAgICAnKidcbl1cblxuY29uc3QgTlVNQkVSUyA9ICcwMTIzNDU2Nzg5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG51bWJlcnMpIHtcbiAgICAgICAgdGhpcy5udW1iZXJzID0gbnVtYmVycztcbiAgICAgICAgdGhpcy5jcmVhdGVFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMucmlnaHRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24oKTtcbiAgICB9XG5cbiAgICBzaHVmZmxlZCAodW5zaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gdW5zaHVmZmxlZFxuICAgICAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+ICh7IHNvcnQ6IE1hdGgucmFuZG9tKCksIHZhbHVlOiBhIH0pKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnQgLSBiLnNvcnQpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gYS52YWx1ZSlcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlRXF1YXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAzKSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IG1hdGhPcCA9IE1BVEhPUFtNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMildO1xuICAgICAgICBsZXQgbnVtMSA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTEsXG4gICAgICAgICAgICBzdGFydE51bTEgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0yLFxuICAgICAgICAgICAgc3RhcnROdW0yICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXJzZUludChudW0xKSA8IHBhcnNlSW50KG51bTIpICYmIG1hdGhPcCA9PT0gJy0nKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gbnVtMTtcbiAgICAgICAgICAgIG51bTEgPSBudW0yO1xuICAgICAgICAgICAgbnVtMiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBgV2hhdCBpcyAke251bTF9ICR7bWF0aE9wfSAke251bTJ9P2A7XG4gICAgICAgIHJldHVybiBlcXVhdGlvbjtcbiAgICB9XG5cbiAgICByaWdodEFuc3dlcihlcXVhdGlvbil7XG4gICAgICAgIGxldCBhcnIgPSBlcXVhdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtMSA9IHBhcnNlSW50KGFyclsyXSk7XG4gICAgICAgIGxldCBudW0yID0gcGFyc2VJbnQoYXJyWzRdKTtcbiAgICAgICAgc3dpdGNoKGFyclszXSkge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5pbXBvcnQgRXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gWzAsIDgwLCAxNjAsIDI0MCwgMzIwLCA0MDAsIDQ4MCwgNTYwLCA2NDAsIDcyMF07XG5jb25zdCBXSURUSCA9IDgwMDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gbnVsbDtcblxuXG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbiA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlUmlnaHRBbnN3ZXJTcXVhcmUgPSB0aGlzLnJlbW92ZVJpZ2h0QW5zd2VyU3F1YXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlciA9IHRoaXMua2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PlxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2soZSlcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+XG4gICAgICAgIHRoaXMua2V5SGFuZGxlcihlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGtleUhhbmRsZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydEdhbWUoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAvLyBjb25zdCBlcXVhdGlvbiA9IG5ldyBFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5lcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5lcXVhdGlvbi5yaWdodEFuc3dlcih0aGlzLm5ld0VxdWF0aW9uKTtcbiAgICAgICAgdGhpcy5Jbml0aWFsTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpOyBcbiAgICB9XG5cbiAgICByZW1vdmVSaWdodEFuc3dlclNxdWFyZShjdXJyZW50Q29sKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmlnaHRBbnN3ZXIpO1xuICAgICAgICBsZXQgdGhhdCAgPSB0aGlzO1xuICAgICAgICB0aGlzLnVzZXJDbGlja3MuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LnJpZ2h0QW5zd2VyIDwgMTApIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgaWYgKG51bS50ZXh0ID09PSB0aGlzLnJpZ2h0QW5zd2VyICYmIG51bS5wb3NbMV0gPT09IDQ3NCkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJvdHRvbWxpbmVbbnVtLnBvc1swXV07XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgICAgICAgICAgdGhhdC5uZXdFcXVhdGlvbiA9IHRoYXQuZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvdHRvbWxpbmUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByaWdodCBhbnN3ZXJgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1tjdXJyZW50Q29sXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNsaWNrKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vZmZzZXRYKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vZmZzZXRZKTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgY29uc3QgY2xpY2tlZFBvcyA9IHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgIC8vIHk6IGUuY2xpZW50WVxuICAgICAgICAgICAgeTogTWF0aC5hYnMoZS5jbGllbnRZIC0gdGhpcy5vZmZzZXRZKSAtIDI1LFxuICAgICAgICB9O1xuICAgICAgICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2wgPSB0aGlzLmN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soY2xpY2tlZFBvcy54KTtcbiAgICAgICAgbGV0IGZOdW1iZXJzO1xuICAgICAgICBsZXQgYWxsTnVtYmVycztcbiAgICAgICAgbGV0IGxlZnQ7XG4gICAgICAgIGxldCByaWdodDtcbiAgICAgICAgbGV0IHRvcDtcbiAgICAgICAgbGV0IGJvdHRvbTtcbiAgICAgICAgbGV0IGJOdW1iZXJzID0gW3RoaXMuYm90dG9tbGluZVtjdXJyZW50Q29sXV07XG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmdOdW1iZXJzLmhhc093blByb3BlcnR5KGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgICBmTnVtYmVycyA9IHRoaXMuZmFsbGluZ051bWJlcnNbY3VycmVudENvbF07XG4gICAgICAgICAgICBhbGxOdW1iZXJzID0gZk51bWJlcnMuY29uY2F0KGJOdW1iZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbE51bWJlcnMgPSBiTnVtYmVycztcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5sb2coYWxsTnVtYmVycyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbnVtID0gYWxsTnVtYmVyc1tpXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IG51bS5wb3NbMF07XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gbnVtLnBvc1swXSArIDgwO1xuICAgICAgICBjb25zdCB0b3AgPSBudW0ucG9zWzFdO1xuICAgICAgICBjb25zdCBib3R0b20gPSBudW0ucG9zWzFdICsgODA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueCA+PSBsZWZ0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPD0gcmlnaHQgJiZcbiAgICAgICAgICAgIC8vIGNsaWNrZWRQb3MueSA+PSB0b3AgJiZcbiAgICAgICAgICAgIGNsaWNrZWRQb3MueSA8PSBib3R0b21cbiAgICAgICAgKSAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJDbGlja3MpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrcy5wdXNoKG51bSk7XG4gICAgICAgICAgICAgICAgYWxlcnQobnVtLnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckNsaWNrcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVSaWdodEFuc3dlclNxdWFyZShjdXJyZW50Q29sKTtcbiAgICB9XG5cbiAgICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgaWYgKHhPZkNsaWNrZWQgPiB4ICYmIHhPZkNsaWNrZWQgPCB4ICsgODApIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgICAgIHggKz0gODA7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFcXVhdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMjBweCBWZXJkYW5hXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KHRoaXMubmV3RXF1YXRpb24sIDQwMCwgMTUpO1xuICAgIH1cblxuICAgIEluaXRpYWxMYXllcigpIHtcbiAgICAgICAgbGV0IG51bTtcbiAgICAgICAgbGV0IHBvc0F0WCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtQ29sdW1uczsgaSsrKSB7XG4gICAgICAgIG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzRdLCBudW0pO1xuICAgICAgICBuZXdOdW1iZXIuZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmJvdHRvbWxpbmVbcG9zQXRYXSA9IG5ld051bWJlcjtcbiAgICAgICAgcG9zQXRYICs9IDgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd051bWJlcnMoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuYm90dG9tbGluZSkuZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxID0gdGhpcy5ib3R0b21saW5lW3Bvc107XG4gICAgICAgIHNxLmRyYXdTcXVhcmUodGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycykuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBudW1baV0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKSB7XG4gICAgICAgIGNvbnN0IHggPSBESU1fWFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMF07XG4gICAgICAgIGNvbnN0IHkgPSAyNTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICBmYWxsaW5nTnVtYmVyKCkge1xuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKTtcbiAgICAgICAgY29uc3QgbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTA7XG4gICAgICAgIGNvbnN0IGZhbGxpbmdOdW0gPSBuZXcgTnVtYmVycyhwb3MsIG51bSk7XG4gICAgICAgIGZhbGxpbmdOdW0uZHJhd1NxdWFyZSh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gfHwgW107XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXS5wdXNoKGZhbGxpbmdOdW0pO1xuICAgICAgICBpZiAodGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dLmxlbmd0aCA9PT0gNikge1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5aW5nID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZnJhbWVIICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSCA+IDUwKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVIID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMoKTtcblxuICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcblxuICAgICAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKHBvcywgY3VycmVudEZhbGxpbmdQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dO1xuICAgICAgICBsZXQgb3RoZXJOdW1iZXI7XG4gICAgICAgIGlmIChjdXJyZW50RmFsbGluZ1Bvc2l0aW9uICE9IDApIHtcbiAgICAgICAgY29uc3QgbnVtID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uXTtcbiAgICAgICAgb3RoZXJOdW1iZXIgPSBjdXJyZW50Q29sdW1uW2N1cnJlbnRGYWxsaW5nUG9zaXRpb24gLSAxXTtcbiAgICAgICAgcmV0dXJuIG51bS5jaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIGxldCBudW1iZXJzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVyc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRldGVjdENvbGxpc2lvbihudW1iZXJzW2ldW2pdLnBvcywgaikpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kQm90dG9tTGluZSA9IHRoaXMuYm90dG9tbGluZS5oYXNPd25Qcm9wZXJ0eShbXG4gICAgICAgICAgICAgICAgbnVtYmVyc1tpXVtqXS5wb3NbMF0sXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIG51bWJlcnNbaV1bal0ubW92ZShmb3VuZEJvdHRvbUxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbldpdGggPSB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoY3R4KSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0gKyA0MCwgdGhpcy5wb3NbMV0gKyA0MCk7XG4gICAgfVxuXG4gICAgbW92ZShmb3VuZEJvdHRvbUxpbmUpIHtcbiAgICAgICAgaWYgKGZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSAzOTMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKCFmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gNDczKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvc1sxXSArPSAxMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NbMV0gPj0gb3RoZXJOdW1iZXIucG9zWzFdIC0gODA7XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI0NDRkYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjRkJBRUQyXCIsXG4gIDY6IFwiI0ZGNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=