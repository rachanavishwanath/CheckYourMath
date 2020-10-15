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
  var offsetY = canvas.offsetTop; // console.log(`offsetX: ${offsetX} offsetY: ${offsetY}`);

  var clickedPos; // canvas.addEventListener("mousedown", (e) =>
  //   registerClick(e, clickedPos, offsetX, offsetY)
  // );
  // console.log(clickedPos);

  console.log('Its working');
  var num = new _scripts_numbers__WEBPACK_IMPORTED_MODULE_2__["default"]([80, 170], 0);
  window.num = num;
  num.drawSquare(context);
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_3__["default"](canvas); // const gameView = new GameView(context);
  // gameView.start();
  // game.InitialLayer(context);
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
      var num2 = this.shuffled(NUMBERS).slice(startNum2, startNum2 + length); // console.log(length, startNum1, startNum2, mathOp, num1, num2);

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

    var context = canvas.getContext("2d");
    var offsetX = canvas.offsetLeft;
    var offsetY = canvas.offsetTop;
    this.bottomline = {};
    this.fallingNumbers = {};
    this.frameH = 0;
    this.userClicks = {};
    this.InitialLayer = this.InitialLayer.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.fallingNumber = this.fallingNumber.bind(this);
    this.drawEquation = this.drawEquation.bind(this);
    this.drawNumbers = this.drawNumbers.bind(this);
    this.animate = this.animate.bind(this);
    this.detectCollision = this.detectCollision.bind(this);
    this.bottomline = this.InitialLayer(context, NumColumns, this.bottomline);
    this.fallingNumbers = this.fallingNumber(context, this.fallingNumbers);
    var equation = new _equation__WEBPACK_IMPORTED_MODULE_2__["default"]();
    var newEq = equation.createEquation();
    this.drawEquation(context, newEq);
    this.rightAnswer = equation.rightAnswer(newEq);
    this.animate(context, newEq, this.bottomline, this.fallingNumbers);
    canvas.addEventListener("mousedown", function (e) {
      return _this.registerClick(e, offsetX, offsetY, context);
    });
  }

  _createClass(Game, [{
    key: "registerClick",
    value: function registerClick(e, offsetX, offsetY, context) {
      // console.log(`offsetX: ${offsetX} offsetY: ${offsetY}`);
      debugger;
      var clickedPos = {
        x: e.clientX - offsetX,
        y: e.clientY // y: Math.abs(e.clientY - offsetY) - 25,

      };
      alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));
      var currenCol = this.currentColumnForUserClick(clickedPos.x);
      var numbers = this.fallingNumbers[currenCol];

      for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        debugger;
        var left = num.pos[0];
        var right = num.pos[0] + 80;
        var top = num.pos[1];
        var bottom = num.pos[1] + 80;

        if (clickedPos.x >= left && clickedPos.x <= right && // clickedPos.y >= top &&
        clickedPos.y <= bottom) {
          debugger;
          console.log(this.userClicks);
          this.userClicks[num.pos] = num;
          alert(num.text);
          console.log(this.userClicks);
          break;
        }
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
    value: function drawEquation(context, equation) {
      context.strokeStyle = "black";
      context.font = "20px Verdana";
      context.strokeText(equation, 400, 15);
    }
  }, {
    key: "InitialLayer",
    value: function InitialLayer(context, NumColumns, bottomline) {
      var num;
      var posAtX = 0;

      for (var i = 0; i < NumColumns; i++) {
        num = Math.round(Math.random() * 10) % 10;
        var newNumber = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"]([posAtX, 474], num);
        newNumber.drawSquare(context);
        bottomline[posAtX] = newNumber;
        posAtX += 80;
      }

      return bottomline;
    }
  }, {
    key: "drawNumbers",
    value: function drawNumbers(context, bottomline, fallingNumbers) {
      Object.keys(bottomline).forEach(function (pos) {
        var sq = bottomline[pos];
        sq.drawSquare(context);
      });
      Object.values(fallingNumbers).forEach(function (num) {
        for (var i = 0; i < num.length; i++) {
          num[i].drawSquare(context);
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
    value: function fallingNumber(context, fallingNumbers) {
      var pos = this.randomPositionforFallingNumbers();
      var num = Math.round(Math.random() * 10) % 10;
      var fallingNum = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"](pos, num);
      fallingNum.drawSquare(context);
      fallingNumbers[pos[0]] = fallingNumbers[pos[0]] || [];
      fallingNumbers[pos[0]].push(fallingNum);

      if (fallingNumbers[pos[0]].length === 6) {
        alert("Game Over");
      }

      return fallingNumbers;
    }
  }, {
    key: "animate",
    value: function animate(context, equation, bottomline, fallingNumbers) {
      var _this2 = this;

      this.frameH += 1;

      if (this.frameH > 50) {
        this.fallingNumber(context, fallingNumbers);
        this.frameH = 0;
      } // clear the canvas


      context.clearRect(0, 0, WIDTH, HEIGHT);
      console.log("Begin animate");
      this.drawEquation(context, equation); // update the pos

      this.moveObjects(); // redraw canvas

      this.drawNumbers(context, bottomline, fallingNumbers);

      var callback = function callback() {
        return _this2.animate(context, equation, bottomline, fallingNumbers);
      };

      requestAnimationFrame(callback);
    }
  }, {
    key: "detectCollision",
    value: function detectCollision(pos, currentFallingPosition) {
      var currentColumn = this.fallingNumbers[pos[0]];
      var otherNumber; // refactor and this will be perfect
      // const height = (currentColumn.length - 1) * 81
      // return pos[1] >= (393 - height)
      // for (let i = 0; i < currentColumn.length; i++) {

      if (currentFallingPosition != 0) {
        //   if (i < currentFallingPosition) {
        var num = currentColumn[currentFallingPosition];
        otherNumber = currentColumn[currentFallingPosition - 1];
        return num.checkCollisionWith(otherNumber);
      } // }

    }
  }, {
    key: "moveObjects",
    value: function moveObjects() {
      var numbers = Object.values(this.fallingNumbers);

      for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers[i].length; j++) {
          if (!this.detectCollision(numbers[i][j].pos, j)) {
            numbers[i][j].move();
          }
        }
      }
    }
  }, {
    key: "clickedNumber",
    value: function clickedNumber() {}
  }, {
    key: "stopFallingNumber",
    value: function stopFallingNumber() {}
  }, {
    key: "start",
    value: function start() {}
  }, {
    key: "gameOver",
    value: function gameOver() {}
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
      ctx.fillStyle = 'black';
      ctx.fillRect(this.pos[0], this.pos[1], 80, 80);
      ctx.fillStyle = this.color;
      ctx.font = "40px Georgia";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, this.pos[0] + 40, this.pos[1] + 40);
    }
  }, {
    key: "move",
    value: function move() {
      if (this.pos[1] >= 393) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwibnVtIiwiTnVtYmVycyIsIndpbmRvdyIsImRyYXdTcXVhcmUiLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsIkRJTV9ZIiwiYm90dG9tbGluZSIsImZhbGxpbmdOdW1iZXJzIiwiZnJhbWVIIiwidXNlckNsaWNrcyIsIkluaXRpYWxMYXllciIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJkZXRlY3RDb2xsaXNpb24iLCJuZXdFcSIsImN1cnJlbkNvbCIsImN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2siLCJpIiwibGVmdCIsInBvcyIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwidGV4dCIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzcSIsInZhbHVlcyIsInJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMiLCJmYWxsaW5nTnVtIiwicHVzaCIsImNsZWFyUmVjdCIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIiwiY3VycmVudENvbHVtbiIsIm90aGVyTnVtYmVyIiwiY2hlY2tDb2xsaXNpb25XaXRoIiwiaiIsIm1vdmUiLCJHYW1lVmlldyIsImN0eCIsInN0YXJ0IiwidGhhdCIsImRyYXciLCJzZXRJbnRlcnZhbCIsIk1vdmluZ09iamVjdCIsIm9iaiIsInZlbCIsImNvbG9yIiwic3Ryb2tlUmVjdCIsImxpbmVXaWR0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJDT0xPUlMiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJzY2FsZSIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5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QUwsR0FBZ0IsVUFBU0ssVUFBVCxFQUFxQkMsV0FBckIsRUFBa0M7QUFDOUMsV0FBU0MsU0FBVCxHQUFxQixDQUFFOztBQUFBO0FBQ3ZCQSxXQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7QUFDQUgsWUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUIzSSxJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgY2xpY2tlZFBvcyA9IHtcbiAgICB4OiBlLmNsaWVudFggLSBvZmZzZXRYLFxuICAgIHk6IGUuY2xpZW50WSAtIG9mZnNldFksXG4gIH07XG4gIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgcmV0dXJuIGNsaWNrZWRQb3M7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgY29uc3Qgb2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gIC8vIGNvbnNvbGUubG9nKGBvZmZzZXRYOiAke29mZnNldFh9IG9mZnNldFk6ICR7b2Zmc2V0WX1gKTtcbiAgbGV0IGNsaWNrZWRQb3M7XG4gIC8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PlxuICAvLyAgIHJlZ2lzdGVyQ2xpY2soZSwgY2xpY2tlZFBvcywgb2Zmc2V0WCwgb2Zmc2V0WSlcbiAgLy8gKTtcbiAgLy8gY29uc29sZS5sb2coY2xpY2tlZFBvcyk7XG4gIGNvbnNvbGUubG9nKCdJdHMgd29ya2luZycpO1xuICBjb25zdCBudW0gPSBuZXcgTnVtYmVycyhbODAsMTcwXSwgMCk7XG4gIHdpbmRvdy5udW0gPSBudW07XG4gIG51bS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgLy8gY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY29udGV4dCk7XG4gIC8vIGdhbWVWaWV3LnN0YXJ0KCk7XG4gIC8vIGdhbWUuSW5pdGlhbExheWVyKGNvbnRleHQpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMuY3JlYXRlRXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLnJpZ2h0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKCkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMykgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZW5ndGgsIHN0YXJ0TnVtMSwgc3RhcnROdW0yLCBtYXRoT3AsIG51bTEsIG51bTIpO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICByZXR1cm4gZXF1YXRpb247XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5jb25zdCBESU1fWSA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgICBjb25zdCBvZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDtcbiAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0ge307XG4gICAgdGhpcy5mcmFtZUggPSAwO1xuICAgIHRoaXMudXNlckNsaWNrcyA9IHt9O1xuXG4gICAgdGhpcy5Jbml0aWFsTGF5ZXIgPSB0aGlzLkluaXRpYWxMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJDbGljayA9IHRoaXMucmVnaXN0ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0VxdWF0aW9uID0gdGhpcy5kcmF3RXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdOdW1iZXJzID0gdGhpcy5kcmF3TnVtYmVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGV0ZWN0Q29sbGlzaW9uID0gdGhpcy5kZXRlY3RDb2xsaXNpb24uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYm90dG9tbGluZSA9IHRoaXMuSW5pdGlhbExheWVyKGNvbnRleHQsIE51bUNvbHVtbnMsIHRoaXMuYm90dG9tbGluZSk7XG4gICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IHRoaXMuZmFsbGluZ051bWJlcihjb250ZXh0LCB0aGlzLmZhbGxpbmdOdW1iZXJzKTtcblxuICAgIGNvbnN0IGVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgY29uc3QgbmV3RXEgPSBlcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgIHRoaXMuZHJhd0VxdWF0aW9uKGNvbnRleHQsIG5ld0VxKTtcbiAgICB0aGlzLnJpZ2h0QW5zd2VyID0gZXF1YXRpb24ucmlnaHRBbnN3ZXIobmV3RXEpO1xuXG4gICAgdGhpcy5hbmltYXRlKGNvbnRleHQsIG5ld0VxLCB0aGlzLmJvdHRvbWxpbmUsIHRoaXMuZmFsbGluZ051bWJlcnMpO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+XG4gICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2soZSwgb2Zmc2V0WCwgb2Zmc2V0WSwgY29udGV4dClcbiAgICApO1xuICB9XG5cbiAgcmVnaXN0ZXJDbGljayhlLCBvZmZzZXRYLCBvZmZzZXRZLCBjb250ZXh0KSB7XG4gICAgLy8gY29uc29sZS5sb2coYG9mZnNldFg6ICR7b2Zmc2V0WH0gb2Zmc2V0WTogJHtvZmZzZXRZfWApO1xuICAgIGRlYnVnZ2VyO1xuICAgIGNvbnN0IGNsaWNrZWRQb3MgPSB7XG4gICAgICB4OiBlLmNsaWVudFggLSBvZmZzZXRYLFxuICAgICAgeTogZS5jbGllbnRZLFxuICAgICAgLy8geTogTWF0aC5hYnMoZS5jbGllbnRZIC0gb2Zmc2V0WSkgLSAyNSxcbiAgICB9O1xuICAgIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgICBjb25zdCBjdXJyZW5Db2wgPSB0aGlzLmN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soY2xpY2tlZFBvcy54KTtcbiAgICBsZXQgbnVtYmVycyA9IHRoaXMuZmFsbGluZ051bWJlcnNbY3VycmVuQ29sXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBudW1iZXJzW2ldO1xuICAgICAgZGVidWdnZXJcbiAgICAgIGNvbnN0IGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgY29uc3QgcmlnaHQgPSBudW0ucG9zWzBdICsgODA7XG4gICAgICBjb25zdCB0b3AgPSBudW0ucG9zWzFdO1xuICAgICAgY29uc3QgYm90dG9tID0gbnVtLnBvc1sxXSArIDgwO1xuICAgICAgaWYgKFxuICAgICAgICBjbGlja2VkUG9zLnggPj0gbGVmdCAmJlxuICAgICAgICBjbGlja2VkUG9zLnggPD0gcmlnaHQgJiZcbiAgICAgICAgLy8gY2xpY2tlZFBvcy55ID49IHRvcCAmJlxuICAgICAgICBjbGlja2VkUG9zLnkgPD0gYm90dG9tXG4gICAgICApIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckNsaWNrcyk7XG4gICAgICAgIHRoaXMudXNlckNsaWNrc1tudW0ucG9zXSA9IG51bTtcbiAgICAgICAgYWxlcnQobnVtLnRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJDbGlja3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpe1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCAxMCl7XG4gICAgICAgICAgICBpZiAoeE9mQ2xpY2tlZCA+IHggJiYgeE9mQ2xpY2tlZCA8IHggKyA4MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IDgwO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gIH1cblxuICBkcmF3RXF1YXRpb24oY29udGV4dCwgZXF1YXRpb24pIHtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGNvbnRleHQuZm9udCA9IFwiMjBweCBWZXJkYW5hXCI7XG4gICAgY29udGV4dC5zdHJva2VUZXh0KGVxdWF0aW9uLCA0MDAsIDE1KTtcbiAgfVxuXG4gIEluaXRpYWxMYXllcihjb250ZXh0LCBOdW1Db2x1bW5zLCBib3R0b21saW5lKSB7XG4gICAgbGV0IG51bTtcbiAgICBsZXQgcG9zQXRYID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bUNvbHVtbnM7IGkrKykge1xuICAgICAgbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTA7XG4gICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzRdLCBudW0pO1xuICAgICAgbmV3TnVtYmVyLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgICBib3R0b21saW5lW3Bvc0F0WF0gPSBuZXdOdW1iZXI7XG4gICAgICBwb3NBdFggKz0gODA7XG4gICAgfVxuICAgIHJldHVybiBib3R0b21saW5lO1xuICB9XG5cbiAgZHJhd051bWJlcnMoY29udGV4dCwgYm90dG9tbGluZSwgZmFsbGluZ051bWJlcnMpIHtcbiAgICBPYmplY3Qua2V5cyhib3R0b21saW5lKS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICAgIGNvbnN0IHNxID0gYm90dG9tbGluZVtwb3NdO1xuICAgICAgc3EuZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICB9KTtcbiAgICBPYmplY3QudmFsdWVzKGZhbGxpbmdOdW1iZXJzKS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG51bVtpXS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpIHtcbiAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgIGNvbnN0IHkgPSAyNTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgZmFsbGluZ051bWJlcihjb250ZXh0LCBmYWxsaW5nTnVtYmVycykge1xuICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpO1xuICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgIGNvbnN0IGZhbGxpbmdOdW0gPSBuZXcgTnVtYmVycyhwb3MsIG51bSk7XG4gICAgZmFsbGluZ051bS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgIGZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gPSBmYWxsaW5nTnVtYmVyc1twb3NbMF1dIHx8IFtdO1xuICAgIGZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ucHVzaChmYWxsaW5nTnVtKTtcbiAgICBpZiAoZmFsbGluZ051bWJlcnNbcG9zWzBdXS5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgYWxlcnQoYEdhbWUgT3ZlcmApO1xuICAgIH0gXG4gICAgcmV0dXJuIGZhbGxpbmdOdW1iZXJzO1xuICB9XG5cbiAgYW5pbWF0ZShjb250ZXh0LCBlcXVhdGlvbiwgYm90dG9tbGluZSwgZmFsbGluZ051bWJlcnMpIHtcbiAgICB0aGlzLmZyYW1lSCArPSAxO1xuICAgIGlmICh0aGlzLmZyYW1lSCA+IDUwKSB7XG4gICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoY29udGV4dCwgZmFsbGluZ051bWJlcnMpO1xuICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgIH1cbiAgICAvLyBjbGVhciB0aGUgY2FudmFzXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgY29uc29sZS5sb2coXCJCZWdpbiBhbmltYXRlXCIpO1xuICAgIHRoaXMuZHJhd0VxdWF0aW9uKGNvbnRleHQsIGVxdWF0aW9uKTtcbiAgICAvLyB1cGRhdGUgdGhlIHBvc1xuICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAvLyByZWRyYXcgY2FudmFzXG4gICAgdGhpcy5kcmF3TnVtYmVycyhjb250ZXh0LCBib3R0b21saW5lLCBmYWxsaW5nTnVtYmVycyk7XG5cbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+XG4gICAgICB0aGlzLmFuaW1hdGUoY29udGV4dCwgZXF1YXRpb24sIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb24ocG9zLCBjdXJyZW50RmFsbGluZ1Bvc2l0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudENvbHVtbiA9IHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXTtcbiAgICBsZXQgb3RoZXJOdW1iZXI7XG4gICAgLy8gcmVmYWN0b3IgYW5kIHRoaXMgd2lsbCBiZSBwZXJmZWN0XG4gICAgLy8gY29uc3QgaGVpZ2h0ID0gKGN1cnJlbnRDb2x1bW4ubGVuZ3RoIC0gMSkgKiA4MVxuICAgIC8vIHJldHVybiBwb3NbMV0gPj0gKDM5MyAtIGhlaWdodClcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRDb2x1bW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjdXJyZW50RmFsbGluZ1Bvc2l0aW9uICE9IDApIHtcbiAgICAvLyAgIGlmIChpIDwgY3VycmVudEZhbGxpbmdQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBudW0gPSBjdXJyZW50Q29sdW1uW2N1cnJlbnRGYWxsaW5nUG9zaXRpb25dXG4gICAgICAgIG90aGVyTnVtYmVyID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIC0gMV07XG4gICAgICAgIHJldHVybiBudW0uY2hlY2tDb2xsaXNpb25XaXRoKG90aGVyTnVtYmVyKTtcbiAgICAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBtb3ZlT2JqZWN0cygpIHtcbiAgICBsZXQgbnVtYmVycyA9IE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKCF0aGlzLmRldGVjdENvbGxpc2lvbihudW1iZXJzW2ldW2pdLnBvcywgaikpIHtcbiAgICAgICAgICBudW1iZXJzW2ldW2pdLm1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsaWNrZWROdW1iZXIoKSB7fVxuXG4gIHN0b3BGYWxsaW5nTnVtYmVyKCkge31cbiAgc3RhcnQoKSB7fVxuICBnYW1lT3ZlcigpIHt9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmdhbWUubW92ZU9iamVjdHMoKSwgXG4gICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldEludGVydmFsKGNhbGxiYWNrLmJpbmQodGhhdCksIDIwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHRoaXMucG9zID0gb2JqW1wicG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IG9ialtcInZlbFwiXTtcbiAgICAgICAgdGhpcy5jb2xvciA9IG9ialtcImNvbG9yXCJdO1xuICAgICAgICB0aGlzLnRleHQgPSBvYmpbXCJ0ZXh0XCJdO1xuICAgICAgICB0aGlzLmRyYXdTcXVhcmUgPSB0aGlzLmRyYXdTcXVhcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoID0gdGhpcy5jaGVja0NvbGxpc2lvbldpdGguYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKGN0eCkge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLnBvc1swXSs0MCwgdGhpcy5wb3NbMV0rNDApO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA+PSAzOTMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSArPSAxMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcikgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zWzFdID49IChvdGhlck51bWJlci5wb3NbMV0gLSA4MClcbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmNvbnN0IENPTE9SUyA9IHtcbiAgMDogXCIjQ0NGRjAwXCIsXG4gIDE6IFwiI2ZmMDAwMFwiLFxuICAyOiBcIiNmZjgwMDBcIixcbiAgMzogXCIjZmZmZjAwXCIsXG4gIDQ6IFwiIzAwZmY4MFwiLFxuICA1OiBcIiNGQkFFRDJcIixcbiAgNjogXCIjRkY1MzQ5XCIsXG4gIDc6IFwiIzAwZmZjY1wiLFxuICA4OiBcIiMwMGYyZmZcIixcbiAgOTogXCIjZmYwMDczXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVycyB7XG4gICAgY29uc3RydWN0b3IocG9zLCB0ZXh0KSB7XG4gICAgICAgIC8vIG51bWJlciBpbnNpZGUgc3F1YXJlXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKDIpLFxuICAgICAgICAgIGNvbG9yOiBDT0xPUlNbdGhpcy50ZXh0XSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgIH07XG4gICAgICAgIE1vdmluZ09iamVjdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfVxufTtcblxuVXRpbC5pbmhlcml0cyhOdW1iZXJzLCBNb3ZpbmdPYmplY3QpOyIsImNvbnN0IFV0aWwgPSB7XG4gICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gVXRpbC5zY2FsZShbMCwgNV0sIGxlbmd0aCk7XG4gICAgfSxcbiAgICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgICAgcmV0dXJuIFswLCB2ZWNbMV0qIG1dXG4gICAgfSxcbiAgICBudW1iZXIobnVtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBudW0pXG4gICAgfVxufVxuXG5VdGlsLmluaGVyaXRzID0gZnVuY3Rpb24oY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTdXJyb2dhdGUoKSB7fTtcbiAgICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50Q2xhc3MucHJvdG90eXBlO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnV0b3IgPSBjaGlsZENsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==