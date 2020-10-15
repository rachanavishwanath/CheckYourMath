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
    this.fallingNumbers = [];
    this.frameH = 0;
    this.userClicks = {};
    this.InitialLayer = this.InitialLayer.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.fallingNumber = this.fallingNumber.bind(this);
    this.drawEquation = this.drawEquation.bind(this);
    this.drawNumbers = this.drawNumbers.bind(this);
    this.animate = this.animate.bind(this);
    this.bottomline = this.InitialLayer(context, NumColumns, this.bottomline);
    this.fallingNumber(context, this.fallingNumbers);
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
      debugger;
      alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));

      for (var i = 0; i < this.fallingNumbers.length; i++) {
        var num = this.fallingNumbers[i];
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
        // console.log('redraw bottomLine')
        // console.log(bottomline);
        var sq = bottomline[pos]; // console.log(sq);

        sq.drawSquare(context);
      });
      fallingNumbers.forEach(function (num) {
        console.log(fallingNumbers);
        console.log(num.pos);
        num.drawSquare(context);
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
    }
  }, {
    key: "animate",
    value: function animate(context, equation, bottomline, fallingNumbers) {
      var _this2 = this;

      this.frameH += 1;

      if (this.frameH > 250) {
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
    key: "moveObjects",
    value: function moveObjects() {
      for (var i = 0; i < this.fallingNumbers.length; i++) {
        this.fallingNumbers[i].move();
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
    }
  }, {
    key: "move",
    value: function move() {
      if (this.pos[1] >= 393) {
        this.pos[1];
      } else {
        this.pos[1] += 0.3;
      }
    }
  }, {
    key: "isCollidedWith",
    value: function isCollidedWith(otherNumber) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwibnVtIiwiTnVtYmVycyIsIndpbmRvdyIsImRyYXdTcXVhcmUiLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsIkRJTV9ZIiwiYm90dG9tbGluZSIsImZhbGxpbmdOdW1iZXJzIiwiZnJhbWVIIiwidXNlckNsaWNrcyIsIkluaXRpYWxMYXllciIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJuZXdFcSIsImkiLCJsZWZ0IiwicG9zIiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJ0ZXh0Iiwic3Ryb2tlU3R5bGUiLCJmb250Iiwic3Ryb2tlVGV4dCIsInBvc0F0WCIsIm5ld051bWJlciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3EiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmFsbGluZ051bSIsInB1c2giLCJjbGVhclJlY3QiLCJtb3ZlT2JqZWN0cyIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZSIsIkdhbWVWaWV3IiwiY3R4Iiwic3RhcnQiLCJ0aGF0IiwiZHJhdyIsInNldEludGVydmFsIiwiTW92aW5nT2JqZWN0Iiwib2JqIiwidmVsIiwiY29sb3IiLCJzdHJva2VSZWN0IiwibGluZVdpZHRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsIm90aGVyTnVtYmVyIiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwic2NhbGUiLCJ2ZWMiLCJtIiwibnVtYmVyIiwiY2hpbGRDbGFzcyIsInBhcmVudENsYXNzIiwiU3Vycm9nYXRlIiwicHJvdG90eXBlIiwiY29uc3RydXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztR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QUFJLENBQUN3SCxLQUFMLENBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFYLEVBQW1CMUUsTUFBbkIsQ0FBUDtBQUNILEdBSFE7QUFJVDBFLE9BSlMsaUJBSUhDLEdBSkcsRUFJRUMsQ0FKRixFQUlLO0FBQ1YsV0FBTyxDQUFDLENBQUQsRUFBSUQsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFRQyxDQUFaLENBQVA7QUFDSCxHQU5RO0FBT1RDLFFBUFMsa0JBT0ZyRyxHQVBFLEVBT0c7QUFDUixXQUFPbUIsSUFBSSxDQUFDTSxLQUFMLENBQVdOLElBQUksQ0FBQ0MsTUFBTCxLQUFnQnBCLEdBQTNCLENBQVA7QUFDSDtBQVRRLENBQWI7O0FBWUF0QixJQUFJLENBQUN1SCxRQUFMLEdBQWdCLFVBQVNLLFVBQVQsRUFBcUJDLFdBQXJCLEVBQWtDO0FBQzlDLFdBQVNDLFNBQVQsR0FBcUIsQ0FBRTs7QUFBQTtBQUN2QkEsV0FBUyxDQUFDQyxTQUFWLEdBQXNCRixXQUFXLENBQUNFLFNBQWxDO0FBQ0FILFlBQVUsQ0FBQ0csU0FBWCxHQUF1QixJQUFJRCxTQUFKLEVBQXZCO0FBQ0FGLFlBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsVUFBckIsR0FBa0NKLFVBQWxDO0FBQ0gsQ0FMRDs7QUFPQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEksSUFBakIsQzs7Ozs7Ozs7Ozs7QUNuQkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9zY3JpcHRzL251bWJlcnMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuXG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi9zY3JpcHRzL3V0aWwnKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJDbGljayhlLCBjbGlja2VkUG9zLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gIGNsaWNrZWRQb3MgPSB7XG4gICAgeDogZS5jbGllbnRYIC0gb2Zmc2V0WCxcbiAgICB5OiBlLmNsaWVudFkgLSBvZmZzZXRZLFxuICB9O1xuICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gIHJldHVybiBjbGlja2VkUG9zO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBvZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7XG4gIGNvbnN0IG9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICAvLyBjb25zb2xlLmxvZyhgb2Zmc2V0WDogJHtvZmZzZXRYfSBvZmZzZXRZOiAke29mZnNldFl9YCk7XG4gIGxldCBjbGlja2VkUG9zO1xuICAvLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT5cbiAgLy8gICByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpXG4gIC8vICk7XG4gIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRQb3MpO1xuICBjb25zb2xlLmxvZygnSXRzIHdvcmtpbmcnKTtcbiAgY29uc3QgbnVtID0gbmV3IE51bWJlcnMoWzgwLDE3MF0sIDApO1xuICB3aW5kb3cubnVtID0gbnVtO1xuICBudW0uZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG4gIC8vIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNvbnRleHQpO1xuICAvLyBnYW1lVmlldy5zdGFydCgpO1xuICAvLyBnYW1lLkluaXRpYWxMYXllcihjb250ZXh0KTtcbn0pIiwiY29uc3QgTUFUSE9QID0gW1xuICAgICcrJywgXG4gICAgJy0nLFxuICAgICcqJ1xuXVxuXG5jb25zdCBOVU1CRVJTID0gJzAxMjM0NTY3ODknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhdGlvbiB7XG4gICAgY29uc3RydWN0b3IobnVtYmVycykge1xuICAgICAgICB0aGlzLm51bWJlcnMgPSBudW1iZXJzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5yaWdodEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbigpO1xuICAgIH1cblxuICAgIHNodWZmbGVkICh1bnNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiB1bnNodWZmbGVkXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gKHsgc29ydDogTWF0aC5yYW5kb20oKSwgdmFsdWU6IGEgfSkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiBhLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH07XG5cbiAgICBjcmVhdGVFcXVhdGlvbigpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDMpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0xID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0yID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDQpICsgMTtcbiAgICAgICAgY29uc3QgbWF0aE9wID0gTUFUSE9QW01hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyKV07XG4gICAgICAgIGxldCBudW0xID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMSxcbiAgICAgICAgICAgIHN0YXJ0TnVtMSArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBsZXQgbnVtMiA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTIsXG4gICAgICAgICAgICBzdGFydE51bTIgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGVuZ3RoLCBzdGFydE51bTEsIHN0YXJ0TnVtMiwgbWF0aE9wLCBudW0xLCBudW0yKTtcbiAgICAgICAgaWYgKHBhcnNlSW50KG51bTEpIDwgcGFyc2VJbnQobnVtMikgJiYgbWF0aE9wID09PSAnLScpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBudW0xO1xuICAgICAgICAgICAgbnVtMSA9IG51bTI7XG4gICAgICAgICAgICBudW0yID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcXVhdGlvbiA9IGBXaGF0IGlzICR7bnVtMX0gJHttYXRoT3B9ICR7bnVtMn0/YDtcbiAgICAgICAgcmV0dXJuIGVxdWF0aW9uO1xuICAgIH1cblxuICAgIHJpZ2h0QW5zd2VyKGVxdWF0aW9uKXtcbiAgICAgICAgbGV0IGFyciA9IGVxdWF0aW9uLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBudW0xID0gcGFyc2VJbnQoYXJyWzJdKTtcbiAgICAgICAgbGV0IG51bTIgPSBwYXJzZUludChhcnJbNF0pO1xuICAgICAgICBzd2l0Y2goYXJyWzNdKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IE51bWJlcnMgZnJvbSAnLi9udW1iZXJzJztcbmltcG9ydCBFcXVhdGlvbiBmcm9tICcuL2VxdWF0aW9uJztcbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgTnVtQ29sdW1ucyA9IDEwO1xuY29uc3QgRElNX1ggPSBbMCwgODAsIDE2MCwgMjQwLCAzMjAsIDQwMCwgNDgwLCA1NjAsIDY0MCwgNzIwXTtcbmNvbnN0IFdJRFRIID0gODAwO1xuY29uc3QgSEVJR0hUID0gNjAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDtcbiAgICAgICAgdGhpcy5ib3R0b21saW5lID0ge307XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB0aGlzLnVzZXJDbGlja3MgPSB7fTtcblxuICAgICAgICB0aGlzLkluaXRpYWxMYXllciA9IHRoaXMuSW5pdGlhbExheWVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDbGljayA9IHRoaXMucmVnaXN0ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIgPSB0aGlzLmZhbGxpbmdOdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24gPSB0aGlzLmRyYXdFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdOdW1iZXJzID0gdGhpcy5kcmF3TnVtYmVycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB0aGlzLkluaXRpYWxMYXllcihjb250ZXh0LCBOdW1Db2x1bW5zLCB0aGlzLmJvdHRvbWxpbmUpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoY29udGV4dCwgdGhpcy5mYWxsaW5nTnVtYmVycyk7XG5cbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICAgICAgY29uc3QgbmV3RXEgPSBlcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbihjb250ZXh0LCBuZXdFcSk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBlcXVhdGlvbi5yaWdodEFuc3dlcihuZXdFcSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKGNvbnRleHQsIG5ld0VxLCB0aGlzLmJvdHRvbWxpbmUsIHRoaXMuZmFsbGluZ051bWJlcnMpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PlxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrKGUsIG9mZnNldFgsIG9mZnNldFksIGNvbnRleHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDbGljayhlLCBvZmZzZXRYLCBvZmZzZXRZLCBjb250ZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvZmZzZXRYOiAke29mZnNldFh9IG9mZnNldFk6ICR7b2Zmc2V0WX1gKTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgY29uc3QgY2xpY2tlZFBvcyA9IHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtIG9mZnNldFgsXG4gICAgICAgICAgICB5OiBlLmNsaWVudFksXG4gICAgICAgICAgLy8geTogTWF0aC5hYnMoZS5jbGllbnRZIC0gb2Zmc2V0WSkgLSAyNSxcbiAgICAgICAgfTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmFsbGluZ051bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBudW0gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW2ldO1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IG51bS5wb3NbMF07XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IG51bS5wb3NbMV07XG4gICAgICAgICAgICBjb25zdCBib3R0b20gPSBudW0ucG9zWzFdICsgODA7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY2xpY2tlZFBvcy54ID49IGxlZnQgJiZcbiAgICAgICAgICAgICAgICBjbGlja2VkUG9zLnggPD0gcmlnaHQgJiZcbiAgICAgICAgICAgICAgICAvLyBjbGlja2VkUG9zLnkgPj0gdG9wICYmXG4gICAgICAgICAgICAgICAgY2xpY2tlZFBvcy55IDw9IGJvdHRvbVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJDbGlja3MpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckNsaWNrc1tudW0ucG9zXSA9IG51bTtcbiAgICAgICAgICAgICAgICBhbGVydChudW0udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFcXVhdGlvbihjb250ZXh0LCBlcXVhdGlvbikge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBcIjIwcHggVmVyZGFuYVwiO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVRleHQoZXF1YXRpb24sIDQwMCwgMTUpO1xuICAgIH1cblxuICAgIEluaXRpYWxMYXllcihjb250ZXh0LCBOdW1Db2x1bW5zLCBib3R0b21saW5lKSB7XG4gICAgICAgIGxldCBudW07XG4gICAgICAgIGxldCBwb3NBdFggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bUNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTA7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzRdLCBudW0pO1xuICAgICAgICAgICAgbmV3TnVtYmVyLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgICAgICAgICBib3R0b21saW5lW3Bvc0F0WF0gPSBuZXdOdW1iZXI7XG4gICAgICAgICAgICBwb3NBdFggKz0gODA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdHRvbWxpbmU7XG4gICAgfVxuXG4gICAgZHJhd051bWJlcnMoY29udGV4dCwgYm90dG9tbGluZSwgZmFsbGluZ051bWJlcnMpIHtcblxuICAgICAgICBPYmplY3Qua2V5cyhib3R0b21saW5lKS5mb3JFYWNoKHBvcyA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVkcmF3IGJvdHRvbUxpbmUnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYm90dG9tbGluZSk7XG4gICAgICAgICAgICBjb25zdCBzcSA9IGJvdHRvbWxpbmVbcG9zXTsgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzcSk7XG4gICAgICAgICAgICBzcS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgICB9KVxuICAgICAgICBmYWxsaW5nTnVtYmVycy5mb3JFYWNoKG51bSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmYWxsaW5nTnVtYmVycyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhudW0ucG9zKTtcbiAgICAgICAgICAgIG51bS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKSB7XG4gICAgICAgIGNvbnN0IHggPSBESU1fWFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMF07XG4gICAgICAgIGNvbnN0IHkgPSAyNTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICBkZXRlY3RDb2xsaXNpb24oKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZhbGxpbmdOdW1iZXIoY29udGV4dCwgZmFsbGluZ051bWJlcnMpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgICAgICBmYWxsaW5nTnVtLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgICAgIGZhbGxpbmdOdW1iZXJzLnB1c2goZmFsbGluZ051bSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjb250ZXh0LCBlcXVhdGlvbiwgYm90dG9tbGluZSwgZmFsbGluZ051bWJlcnMpIHtcbiAgICAgICAgdGhpcy5mcmFtZUggKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVIID4gMjUwKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoY29udGV4dCwgZmFsbGluZ051bWJlcnMpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNsZWFyIHRoZSBjYW52YXNcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmVnaW4gYW5pbWF0ZVwiKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24oY29udGV4dCwgZXF1YXRpb24pO1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHBvc1xuICAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIC8vIHJlZHJhdyBjYW52YXNcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycyhjb250ZXh0LCBib3R0b21saW5lLCBmYWxsaW5nTnVtYmVycyk7XG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PlxuICAgICAgICAgICAgdGhpcy5hbmltYXRlKGNvbnRleHQsIGVxdWF0aW9uLCBib3R0b21saW5lLCBmYWxsaW5nTnVtYmVycyk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhbGxpbmdOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzW2ldLm1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVycy5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgbnVtLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrZWROdW1iZXIoKSB7fVxuXG4gICAgc3RvcEZhbGxpbmdOdW1iZXIoKSB7XG5cbiAgICB9XG4gICAgc3RhcnQoKSB7fVxuICAgIGdhbWVPdmVyKCkge31cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKGN0eCkge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLnBvc1swXSs0MCwgdGhpcy5wb3NbMV0rNDApO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA+PSAzOTMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSArPSAwLjM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxpZGVkV2l0aChvdGhlck51bWJlcikgeyBcbiAgICB9XG59IiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmNvbnN0IENPTE9SUyA9IHtcbiAgMDogXCIjQ0NGRjAwXCIsXG4gIDE6IFwiI2ZmMDAwMFwiLFxuICAyOiBcIiNmZjgwMDBcIixcbiAgMzogXCIjZmZmZjAwXCIsXG4gIDQ6IFwiIzAwZmY4MFwiLFxuICA1OiBcIiNGQkFFRDJcIixcbiAgNjogXCIjRkY1MzQ5XCIsXG4gIDc6IFwiIzAwZmZjY1wiLFxuICA4OiBcIiMwMGYyZmZcIixcbiAgOTogXCIjZmYwMDczXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVycyB7XG4gICAgY29uc3RydWN0b3IocG9zLCB0ZXh0KSB7XG4gICAgICAgIC8vIG51bWJlciBpbnNpZGUgc3F1YXJlXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKDIpLFxuICAgICAgICAgIGNvbG9yOiBDT0xPUlNbdGhpcy50ZXh0XSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgIH07XG4gICAgICAgIE1vdmluZ09iamVjdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfVxufTtcblxuVXRpbC5pbmhlcml0cyhOdW1iZXJzLCBNb3ZpbmdPYmplY3QpOyIsImNvbnN0IFV0aWwgPSB7XG4gICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gVXRpbC5zY2FsZShbMCwgNV0sIGxlbmd0aCk7XG4gICAgfSxcbiAgICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgICAgcmV0dXJuIFswLCB2ZWNbMV0qIG1dXG4gICAgfSxcbiAgICBudW1iZXIobnVtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBudW0pXG4gICAgfVxufVxuXG5VdGlsLmluaGVyaXRzID0gZnVuY3Rpb24oY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTdXJyb2dhdGUoKSB7fTtcbiAgICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50Q2xhc3MucHJvdG90eXBlO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnV0b3IgPSBjaGlsZENsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==