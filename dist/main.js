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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwicmVnaXN0ZXJDbGljayIsImUiLCJjbGlja2VkUG9zIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJudW0iLCJOdW1iZXJzIiwid2luZG93IiwiZHJhd1NxdWFyZSIsImdhbWUiLCJHYW1lIiwiTUFUSE9QIiwiTlVNQkVSUyIsIkVxdWF0aW9uIiwibnVtYmVycyIsImNyZWF0ZUVxdWF0aW9uIiwiYmluZCIsInJpZ2h0QW5zd2VyIiwibmV3RXF1YXRpb24iLCJ1bnNodWZmbGVkIiwic3BsaXQiLCJtYXAiLCJhIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJ2YWx1ZSIsImIiLCJqb2luIiwibGVuZ3RoIiwicm91bmQiLCJzdGFydE51bTEiLCJzdGFydE51bTIiLCJtYXRoT3AiLCJudW0xIiwic2h1ZmZsZWQiLCJzbGljZSIsIm51bTIiLCJwYXJzZUludCIsInRlbXAiLCJlcXVhdGlvbiIsImFyciIsIk51bUNvbHVtbnMiLCJESU1fWCIsIldJRFRIIiwiSEVJR0hUIiwiRElNX1kiLCJib3R0b21saW5lIiwiZmFsbGluZ051bWJlcnMiLCJJbml0aWFsTGF5ZXIiLCJmYWxsaW5nTnVtYmVyIiwibmV3RXEiLCJkcmF3RXF1YXRpb24iLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwiaSIsIm5ld051bWJlciIsInBvcyIsInJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMiLCJmYWxsaW5nTnVtIiwicHVzaCIsIm1vdmVPYmplY3RzIiwibW92ZSIsImNsZWFyUmVjdCIsImZvckVhY2giLCJHYW1lVmlldyIsImN0eCIsInN0YXJ0IiwiYW5pbWF0ZSIsInRoYXQiLCJjYWxsYmFjayIsImRyYXciLCJzZXRJbnRlcnZhbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIk1vdmluZ09iamVjdCIsIm9iaiIsInZlbCIsImNvbG9yIiwidGV4dCIsInN0cm9rZVJlY3QiLCJsaW5lV2lkdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwic2NhbGUiLCJ2ZWMiLCJtIiwibnVtYmVyIiwiY2hpbGRDbGFzcyIsInBhcmVudENsYXNzIiwiU3Vycm9nYXRlIiwicHJvdG90eXBlIiwiY29uc3RydXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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R0FBZ0IsVUFBU0ssVUFBVCxFQUFxQkMsV0FBckIsRUFBa0M7QUFDOUMsV0FBU0MsU0FBVCxHQUFxQixDQUFFOztBQUFBO0FBQ3ZCQSxXQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7QUFDQUgsWUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2SCxJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgY2xpY2tlZFBvcyA9IHtcbiAgICB4OiBlLmNsaWVudFggLSBvZmZzZXRYLFxuICAgIHk6IGUuY2xpZW50WSAtIG9mZnNldFksXG4gIH07XG4gIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgY29uc29sZS5sb2coY2xpY2tlZFBvcyk7XG4gIHJldHVybiBjbGlja2VkUG9zO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBvZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7XG4gIGNvbnN0IG9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICBjb25zb2xlLmxvZyhgb2Zmc2V0WDogJHtvZmZzZXRYfSBvZmZzZXRZOiAke29mZnNldFl9YCk7XG4gIGxldCBjbGlja2VkUG9zO1xuICAvLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT5cbiAgLy8gICByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpXG4gIC8vICk7XG4gIGNvbnNvbGUubG9nKGNsaWNrZWRQb3MpO1xuICBjb25zb2xlLmxvZygnSXRzIHdvcmtpbmcnKTtcbiAgY29uc3QgbnVtID0gbmV3IE51bWJlcnMoWzgwLDE3MF0sIDApO1xuICB3aW5kb3cubnVtID0gbnVtO1xuICBudW0uZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNvbnRleHQpO1xuICAvLyBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjb250ZXh0KTtcbiAgLy8gZ2FtZVZpZXcuc3RhcnQoKTtcbiAgLy8gZ2FtZS5Jbml0aWFsTGF5ZXIoY29udGV4dCk7XG59KSIsImNvbnN0IE1BVEhPUCA9IFtcbiAgICAnKycsIFxuICAgICctJyxcbiAgICAnKidcbl1cblxuY29uc3QgTlVNQkVSUyA9ICcwMTIzNDU2Nzg5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG51bWJlcnMpIHtcbiAgICAgICAgdGhpcy5udW1iZXJzID0gbnVtYmVycztcbiAgICAgICAgdGhpcy5jcmVhdGVFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMucmlnaHRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24oKTtcbiAgICB9XG5cbiAgICBzaHVmZmxlZCAodW5zaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gdW5zaHVmZmxlZFxuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLm1hcCgoYSkgPT4gKHsgc29ydDogTWF0aC5yYW5kb20oKSwgdmFsdWU6IGEgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnQgLSBiLnNvcnQpXG4gICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH07XG5cbiAgICBjcmVhdGVFcXVhdGlvbigpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDMpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0xID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0yID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3QgbWF0aE9wID0gTUFUSE9QW01hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyKV07XG4gICAgICAgIGxldCBudW0xID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMSxcbiAgICAgICAgICAgIHN0YXJ0TnVtMSArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBsZXQgbnVtMiA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTIsXG4gICAgICAgICAgICBzdGFydE51bTIgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoLCBzdGFydE51bTEsIHN0YXJ0TnVtMiwgbWF0aE9wLCBudW0xLCBudW0yKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KG51bTEpIDwgcGFyc2VJbnQobnVtMikgJiYgbWF0aE9wID09PSAnLScpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gbnVtMTtcbiAgICAgICAgICAgIG51bTEgPSBudW0yO1xuICAgICAgICAgICAgbnVtMiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBgV2hhdCBpcyAke251bTF9ICR7bWF0aE9wfSAke251bTJ9P2A7XG4gICAgICAgIHJldHVybiBlcXVhdGlvbjtcbiAgICB9XG5cbiAgICByaWdodEFuc3dlcihlcXVhdGlvbil7XG4gICAgICAgIGxldCBhcnIgPSBlcXVhdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtMSA9IHBhcnNlSW50KGFyclsyXSk7XG4gICAgICAgIGxldCBudW0yID0gcGFyc2VJbnQoYXJyWzRdKTtcbiAgICAgICAgc3dpdGNoKGFyclszXSkge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5pbXBvcnQgRXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gWzAsIDgwLCAxNjAsIDI0MCwgMzIwLCA0MDAsIDQ4MCwgNTYwLCA2NDAsIDcyMF07XG5jb25zdCBXSURUSCA9IDgwMDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0gW107XG4gICAgICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3R0b21saW5lID0gdGhpcy5Jbml0aWFsTGF5ZXIoY29udGV4dCwgTnVtQ29sdW1ucywgdGhpcy5ib3R0b21saW5lKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyID0gdGhpcy5mYWxsaW5nTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcihjb250ZXh0LCB0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICAgICAgY29uc3QgbmV3RXEgPSBlcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uKGNvbnRleHQsIG5ld0VxKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IGVxdWF0aW9uLnJpZ2h0QW5zd2VyKG5ld0VxKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3RXEsIHRoaXMucmlnaHRBbnN3ZXIpO1xuICAgICAgICBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRQb3MgPSB7XG4gICAgICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gb2Zmc2V0WCxcbiAgICAgICAgICAgICAgICB5OiBlLmNsaWVudFkgLSBvZmZzZXRZLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRQb3MpO1xuICAgICAgICAgICAgLy8gICByZXR1cm4gY2xpY2tlZFBvcztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkcmF3RXF1YXRpb24oY29udGV4dCwgZXF1YXRpb24pe1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBcIjIwcHggVmVyZGFuYVwiO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVRleHQoZXF1YXRpb24sIDQwMCwgMTUpO1xuICAgIH1cblxuICAgIEluaXRpYWxMYXllcihjb250ZXh0LCBOdW1Db2x1bW5zLCBib3R0b21saW5lKSB7XG4gICAgICAgIGxldCBudW07XG4gICAgICAgIGxldCBwb3NBdFggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bUNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTA7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzRdLCBudW0pO1xuICAgICAgICAgICAgbmV3TnVtYmVyLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgICAgICAgICBib3R0b21saW5lW3Bvc0F0WF0gPSBuZXdOdW1iZXI7XG4gICAgICAgICAgICBwb3NBdFggKz0gODA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgICAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgICAgICBjb25zdCB5ID0gMjU7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKCkge31cblxuICAgIGZhbGxpbmdOdW1iZXIoY29udGV4dCwgZmFsbGluZ051bWJlcnMpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgICAgICBmYWxsaW5nTnVtLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgICAgIGZhbGxpbmdOdW1iZXJzLnB1c2goZmFsbGluZ051bSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmZhbGxpbmdOdW1iZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmZhbGxpbmdOdW1iZXJzW2ldLnBvc1sxXSA8IDQwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbaV0ubW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzLmZvckVhY2gobnVtID0+IHtcbiAgICAgICAgICAgIG51bS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsaWNrZWROdW1iZXIoKSB7XG5cbiAgICB9XG5cbiAgICBzdG9wRmFsbGluZ051bWJlcigpIHt9XG4gICAgc3RhcnQoKSB7fVxuICAgIGdhbWVPdmVyKCkge31cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKGN0eCkge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLnBvc1swXSs0MCwgdGhpcy5wb3NbMV0rNDApO1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvc1sxXSArPSB0aGlzLnZlbFsxXTtcbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmNvbnN0IENPTE9SUyA9IHtcbiAgMDogXCIjQ0NGRjAwXCIsXG4gIDE6IFwiI2ZmMDAwMFwiLFxuICAyOiBcIiNmZjgwMDBcIixcbiAgMzogXCIjZmZmZjAwXCIsXG4gIDQ6IFwiIzAwZmY4MFwiLFxuICA1OiBcIiNGQkFFRDJcIixcbiAgNjogXCIjRkY1MzQ5XCIsXG4gIDc6IFwiIzAwZmZjY1wiLFxuICA4OiBcIiMwMGYyZmZcIixcbiAgOTogXCIjZmYwMDczXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVycyB7XG4gICAgY29uc3RydWN0b3IocG9zLCB0ZXh0KSB7XG4gICAgICAgIC8vIG51bWJlciBpbnNpZGUgc3F1YXJlXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKDIpLFxuICAgICAgICAgIGNvbG9yOiBDT0xPUlNbdGhpcy50ZXh0XSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgIH07XG4gICAgICAgIE1vdmluZ09iamVjdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfVxufTtcblxuVXRpbC5pbmhlcml0cyhOdW1iZXJzLCBNb3ZpbmdPYmplY3QpOyIsImNvbnN0IFV0aWwgPSB7XG4gICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gVXRpbC5zY2FsZShbMCwgNV0sIGxlbmd0aCk7XG4gICAgfSxcbiAgICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgICAgcmV0dXJuIFswLCB2ZWNbMV0qIG1dXG4gICAgfSxcbiAgICBudW1iZXIobnVtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBudW0pXG4gICAgfVxufVxuXG5VdGlsLmluaGVyaXRzID0gZnVuY3Rpb24oY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTdXJyb2dhdGUoKSB7fTtcbiAgICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50Q2xhc3MucHJvdG90eXBlO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnV0b3IgPSBjaGlsZENsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==