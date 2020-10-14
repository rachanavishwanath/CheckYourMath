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
  console.log(clickedPos);
  return clickedPos;
}

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var offsetX = canvas.offsetLeft;
  var offsetY = canvas.offsetTop;
  console.log("offsetX: ".concat(offsetX, " offsetY: ").concat(offsetY));
  var clickedPos; // canvas.addEventListener("mousedown", (e) =>
  //   registerClick(e, clickedPos, offsetX, offsetY)
  // );

  console.log(clickedPos);
  console.log('Its working');
  var num = new _scripts_numbers__WEBPACK_IMPORTED_MODULE_2__["default"]([80, 170], 0);
  window.num = num;
  num.drawSquare(context);
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_3__["default"](context); // const gameView = new GameView(context);
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
      var num2 = this.shuffled(NUMBERS).slice(startNum2, startNum2 + length);
      console.log(length, startNum1, startNum2, mathOp, num1, num2);

      if (parseInt(num1) < parseInt(num2) && mathOp === '-') {
        debugger;
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
  function Game(context) {
    _classCallCheck(this, Game);

    this.bottomline = {};
    this.fallingNumbers = [];
    this.InitialLayer = this.InitialLayer.bind(this);
    this.bottomline = this.InitialLayer(context, NumColumns, this.bottomline);
    this.fallingNumber = this.fallingNumber.bind(this);
    this.fallingNumber(context, this.fallingNumbers);
    var equation = new _equation__WEBPACK_IMPORTED_MODULE_2__["default"]();
    var newEq = equation.createEquation();
    this.drawEquation = this.drawEquation.bind(this);
    this.drawEquation(context, newEq);
    this.rightAnswer = equation.rightAnswer(newEq);
    console.log(newEq, this.rightAnswer);
    context.addEventListener('mousedown', function (e) {
      var clickedPos = {
        x: e.clientX - offsetX,
        y: e.clientY - offsetY
      };
      alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));
      console.log(clickedPos); //   return clickedPos;
    });
  }

  _createClass(Game, [{
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
    }
  }, {
    key: "randomPositionforFallingNumbers",
    value: function randomPositionforFallingNumbers() {
      var x = DIM_X[Math.round(Math.random() * 10) % 10];
      var y = 25;
      return [x, y];
    }
  }, {
    key: "detectCollision",
    value: function detectCollision() {}
  }, {
    key: "fallingNumber",
    value: function fallingNumber(context, fallingNumbers) {
      var pos = this.randomPositionforFallingNumbers();
      var num = Math.round(Math.random() * 10) % 10;
      var fallingNum = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"](pos, num);
      fallingNum.drawSquare(context);
      fallingNumbers.push(fallingNum);
      console.log(fallingNumbers);
      this.moveObjects();
    }
  }, {
    key: "moveObjects",
    value: function moveObjects() {
      for (var i = 0; i < this.fallingNumbers.length; i++) {
        while (this.fallingNumbers[i].pos[1] < 400) {
          this.fallingNumbers[i].move();
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      this.fallingNumbers.forEach(function (num) {
        num.drawSquare(context);
      });
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
      this.move();
    }
  }, {
    key: "move",
    value: function move() {
      this.pos[1] += this.vel[1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwibnVtIiwiTnVtYmVycyIsIndpbmRvdyIsImRyYXdTcXVhcmUiLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsIkRJTV9ZIiwiYm90dG9tbGluZSIsImZhbGxpbmdOdW1iZXJzIiwiSW5pdGlhbExheWVyIiwiZmFsbGluZ051bWJlciIsIm5ld0VxIiwiZHJhd0VxdWF0aW9uIiwic3Ryb2tlU3R5bGUiLCJmb250Iiwic3Ryb2tlVGV4dCIsInBvc0F0WCIsImkiLCJuZXdOdW1iZXIiLCJwb3MiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmFsbGluZ051bSIsInB1c2giLCJtb3ZlT2JqZWN0cyIsIm1vdmUiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwiR2FtZVZpZXciLCJjdHgiLCJzdGFydCIsImFuaW1hdGUiLCJ0aGF0IiwiY2FsbGJhY2siLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJjb2xvciIsInRleHQiLCJzdHJva2VSZWN0IiwibGluZVdpZHRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsIkNPTE9SUyIsInJhbmRvbVZlYyIsImNhbGwiLCJpbmhlcml0cyIsInNjYWxlIiwidmVjIiwibSIsIm51bWJlciIsImNoaWxkQ2xhc3MiLCJwYXJlbnRDbGFzcyIsIlN1cnJvZ2F0ZSIsInByb3RvdHlwZSIsImNvbnN0cnV0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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LFVBQVNLLFVBQVQsRUFBcUJDLFdBQXJCLEVBQWtDO0FBQzlDLFdBQVNDLFNBQVQsR0FBcUIsQ0FBRTs7QUFBQTtBQUN2QkEsV0FBUyxDQUFDQyxTQUFWLEdBQXNCRixXQUFXLENBQUNFLFNBQWxDO0FBQ0FILFlBQVUsQ0FBQ0csU0FBWCxHQUF1QixJQUFJRCxTQUFKLEVBQXZCO0FBQ0FGLFlBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsVUFBckIsR0FBa0NKLFVBQWxDO0FBQ0gsQ0FMRDs7QUFPQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkgsSUFBakIsQzs7Ozs7Ozs7Ozs7QUNuQkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9zY3JpcHRzL251bWJlcnMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuXG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi9zY3JpcHRzL3V0aWwnKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJDbGljayhlLCBjbGlja2VkUG9zLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gIGNsaWNrZWRQb3MgPSB7XG4gICAgeDogZS5jbGllbnRYIC0gb2Zmc2V0WCxcbiAgICB5OiBlLmNsaWVudFkgLSBvZmZzZXRZLFxuICB9O1xuICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gIGNvbnNvbGUubG9nKGNsaWNrZWRQb3MpO1xuICByZXR1cm4gY2xpY2tlZFBvcztcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3Qgb2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICBjb25zdCBvZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDtcbiAgY29uc29sZS5sb2coYG9mZnNldFg6ICR7b2Zmc2V0WH0gb2Zmc2V0WTogJHtvZmZzZXRZfWApO1xuICBsZXQgY2xpY2tlZFBvcztcbiAgLy8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+XG4gIC8vICAgcmVnaXN0ZXJDbGljayhlLCBjbGlja2VkUG9zLCBvZmZzZXRYLCBvZmZzZXRZKVxuICAvLyApO1xuICBjb25zb2xlLmxvZyhjbGlja2VkUG9zKTtcbiAgY29uc29sZS5sb2coJ0l0cyB3b3JraW5nJyk7XG4gIGNvbnN0IG51bSA9IG5ldyBOdW1iZXJzKFs4MCwxNzBdLCAwKTtcbiAgd2luZG93Lm51bSA9IG51bTtcbiAgbnVtLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjb250ZXh0KTtcbiAgLy8gY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY29udGV4dCk7XG4gIC8vIGdhbWVWaWV3LnN0YXJ0KCk7XG4gIC8vIGdhbWUuSW5pdGlhbExheWVyKGNvbnRleHQpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMuY3JlYXRlRXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLnJpZ2h0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGEpID0+ICh7IHNvcnQ6IE1hdGgucmFuZG9tKCksIHZhbHVlOiBhIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAubWFwKChhKSA9PiBhLnZhbHVlKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlRXF1YXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAzKSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IG1hdGhPcCA9IE1BVEhPUFtNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMildO1xuICAgICAgICBsZXQgbnVtMSA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTEsXG4gICAgICAgICAgICBzdGFydE51bTEgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0yLFxuICAgICAgICAgICAgc3RhcnROdW0yICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aCwgc3RhcnROdW0xLCBzdGFydE51bTIsIG1hdGhPcCwgbnVtMSwgbnVtMik7XG4gICAgICAgIGlmIChwYXJzZUludChudW0xKSA8IHBhcnNlSW50KG51bTIpICYmIG1hdGhPcCA9PT0gJy0nKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICByZXR1cm4gZXF1YXRpb247XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5jb25zdCBESU1fWSA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycyA9IFtdO1xuICAgICAgICB0aGlzLkluaXRpYWxMYXllciA9IHRoaXMuSW5pdGlhbExheWVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHRoaXMuSW5pdGlhbExheWVyKGNvbnRleHQsIE51bUNvbHVtbnMsIHRoaXMuYm90dG9tbGluZSk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlciA9IHRoaXMuZmFsbGluZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoY29udGV4dCwgdGhpcy5mYWxsaW5nTnVtYmVycyk7XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgICAgIGNvbnN0IG5ld0VxID0gZXF1YXRpb24uY3JlYXRlRXF1YXRpb24oKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24gPSB0aGlzLmRyYXdFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbihjb250ZXh0LCBuZXdFcSk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBlcXVhdGlvbi5yaWdodEFuc3dlcihuZXdFcSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0VxLCB0aGlzLnJpZ2h0QW5zd2VyKTtcbiAgICAgICAgY29udGV4dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjbGlja2VkUG9zID0ge1xuICAgICAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtIG9mZnNldFgsXG4gICAgICAgICAgICAgICAgeTogZS5jbGllbnRZIC0gb2Zmc2V0WSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjbGlja2VkUG9zKTtcbiAgICAgICAgICAgIC8vICAgcmV0dXJuIGNsaWNrZWRQb3M7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZHJhd0VxdWF0aW9uKGNvbnRleHQsIGVxdWF0aW9uKXtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgY29udGV4dC5zdHJva2VUZXh0KGVxdWF0aW9uLCA0MDAsIDE1KTtcbiAgICB9XG5cbiAgICBJbml0aWFsTGF5ZXIoY29udGV4dCwgTnVtQ29sdW1ucywgYm90dG9tbGluZSkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDc0XSwgbnVtKTtcbiAgICAgICAgICAgIG5ld051bWJlci5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgICAgICAgYm90dG9tbGluZVtwb3NBdFhdID0gbmV3TnVtYmVyO1xuICAgICAgICAgICAgcG9zQXRYICs9IDgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpIHtcbiAgICAgICAgY29uc3QgeCA9IERJTV9YW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwXTtcbiAgICAgICAgY29uc3QgeSA9IDI1O1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIGRldGVjdENvbGxpc2lvbigpIHt9XG5cbiAgICBmYWxsaW5nTnVtYmVyKGNvbnRleHQsIGZhbGxpbmdOdW1iZXJzKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpO1xuICAgICAgICBjb25zdCBudW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMDtcbiAgICAgICAgY29uc3QgZmFsbGluZ051bSA9IG5ldyBOdW1iZXJzKHBvcywgbnVtKTtcbiAgICAgICAgZmFsbGluZ051bS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgICBmYWxsaW5nTnVtYmVycy5wdXNoKGZhbGxpbmdOdW0pO1xuICAgICAgICBjb25zb2xlLmxvZyhmYWxsaW5nTnVtYmVycyk7XG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5mYWxsaW5nTnVtYmVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5mYWxsaW5nTnVtYmVyc1tpXS5wb3NbMV0gPCA0MDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW2ldLm1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycy5mb3JFYWNoKG51bSA9PiB7XG4gICAgICAgICAgICBudW0uZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbGlja2VkTnVtYmVyKCkge1xuXG4gICAgfVxuXG4gICAgc3RvcEZhbGxpbmdOdW1iZXIoKSB7fVxuICAgIHN0YXJ0KCkge31cbiAgICBnYW1lT3ZlcigpIHt9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmdhbWUubW92ZU9iamVjdHMoKSwgXG4gICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldEludGVydmFsKGNhbGxiYWNrLmJpbmQodGhhdCksIDIwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHRoaXMucG9zID0gb2JqW1wicG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IG9ialtcInZlbFwiXTtcbiAgICAgICAgdGhpcy5jb2xvciA9IG9ialtcImNvbG9yXCJdO1xuICAgICAgICB0aGlzLnRleHQgPSBvYmpbXCJ0ZXh0XCJdO1xuICAgICAgICB0aGlzLmRyYXdTcXVhcmUgPSB0aGlzLmRyYXdTcXVhcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0rNDAsIHRoaXMucG9zWzFdKzQwKTtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NbMV0gKz0gdGhpcy52ZWxbMV07XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI0NDRkYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjRkJBRUQyXCIsXG4gIDY6IFwiI0ZGNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=