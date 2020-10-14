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
      var clickedPos = {
        x: e.clientX,
        y: e.clientY
      };
      alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));

      for (var i = 0; i < this.fallingNumbers.length; i++) {
        var num = this.fallingNumbers[i];
        var left = num.pos[0];
        var right = num.pos[0] + 80;
        var top = num.pos[1];
        var bottom = num.pos[1] + 80;

        if (clickedPos.x >= left && clickedPos.x <= right && clickedPos.y >= top && clickedPos.y <= bottom) {
          alert(num.text);
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
        console.log('redraw bottomLine');
        console.log(bottomline);
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


      context.clearRect(0, 0, 800, 600);
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
      this.pos[1] += 0.3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwibnVtIiwiTnVtYmVycyIsIndpbmRvdyIsImRyYXdTcXVhcmUiLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsIkRJTV9ZIiwiYm90dG9tbGluZSIsImZhbGxpbmdOdW1iZXJzIiwiZnJhbWVIIiwiSW5pdGlhbExheWVyIiwiZmFsbGluZ051bWJlciIsImRyYXdFcXVhdGlvbiIsImRyYXdOdW1iZXJzIiwiYW5pbWF0ZSIsIm5ld0VxIiwiaSIsImxlZnQiLCJwb3MiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInRleHQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzcSIsInJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMiLCJmYWxsaW5nTnVtIiwicHVzaCIsImNsZWFyUmVjdCIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlIiwiR2FtZVZpZXciLCJjdHgiLCJzdGFydCIsInRoYXQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJjb2xvciIsInN0cm9rZVJlY3QiLCJsaW5lV2lkdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0Iiwib3RoZXJOdW1iZXIiLCJDT0xPUlMiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJzY2FsZSIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1dG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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LENBQUNNLEtBQUwsQ0FBV04sSUFBSSxDQUFDQyxNQUFMLEtBQWdCcEIsR0FBM0IsQ0FBUDtBQUNIO0FBVFEsQ0FBYjs7QUFZQXRCLElBQUksQ0FBQ3NILFFBQUwsR0FBZ0IsVUFBU0ssVUFBVCxFQUFxQkMsV0FBckIsRUFBa0M7QUFDOUMsV0FBU0MsU0FBVCxHQUFxQixDQUFFOztBQUFBO0FBQ3ZCQSxXQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7QUFDQUgsWUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqSSxJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgY2xpY2tlZFBvcyA9IHtcbiAgICB4OiBlLmNsaWVudFggLSBvZmZzZXRYLFxuICAgIHk6IGUuY2xpZW50WSAtIG9mZnNldFksXG4gIH07XG4gIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgcmV0dXJuIGNsaWNrZWRQb3M7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgY29uc3Qgb2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gIC8vIGNvbnNvbGUubG9nKGBvZmZzZXRYOiAke29mZnNldFh9IG9mZnNldFk6ICR7b2Zmc2V0WX1gKTtcbiAgbGV0IGNsaWNrZWRQb3M7XG4gIC8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PlxuICAvLyAgIHJlZ2lzdGVyQ2xpY2soZSwgY2xpY2tlZFBvcywgb2Zmc2V0WCwgb2Zmc2V0WSlcbiAgLy8gKTtcbiAgLy8gY29uc29sZS5sb2coY2xpY2tlZFBvcyk7XG4gIGNvbnNvbGUubG9nKCdJdHMgd29ya2luZycpO1xuICBjb25zdCBudW0gPSBuZXcgTnVtYmVycyhbODAsMTcwXSwgMCk7XG4gIHdpbmRvdy5udW0gPSBudW07XG4gIG51bS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgLy8gY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY29udGV4dCk7XG4gIC8vIGdhbWVWaWV3LnN0YXJ0KCk7XG4gIC8vIGdhbWUuSW5pdGlhbExheWVyKGNvbnRleHQpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMuY3JlYXRlRXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLnJpZ2h0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGEpID0+ICh7IHNvcnQ6IE1hdGgucmFuZG9tKCksIHZhbHVlOiBhIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAubWFwKChhKSA9PiBhLnZhbHVlKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlRXF1YXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAzKSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IG1hdGhPcCA9IE1BVEhPUFtNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMildO1xuICAgICAgICBsZXQgbnVtMSA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTEsXG4gICAgICAgICAgICBzdGFydE51bTEgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0yLFxuICAgICAgICAgICAgc3RhcnROdW0yICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlbmd0aCwgc3RhcnROdW0xLCBzdGFydE51bTIsIG1hdGhPcCwgbnVtMSwgbnVtMik7XG4gICAgICAgIGlmIChwYXJzZUludChudW0xKSA8IHBhcnNlSW50KG51bTIpICYmIG1hdGhPcCA9PT0gJy0nKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gbnVtMTtcbiAgICAgICAgICAgIG51bTEgPSBudW0yO1xuICAgICAgICAgICAgbnVtMiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBgV2hhdCBpcyAke251bTF9ICR7bWF0aE9wfSAke251bTJ9P2A7XG4gICAgICAgIHJldHVybiBlcXVhdGlvbjtcbiAgICB9XG5cbiAgICByaWdodEFuc3dlcihlcXVhdGlvbil7XG4gICAgICAgIGxldCBhcnIgPSBlcXVhdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtMSA9IHBhcnNlSW50KGFyclsyXSk7XG4gICAgICAgIGxldCBudW0yID0gcGFyc2VJbnQoYXJyWzRdKTtcbiAgICAgICAgc3dpdGNoKGFyclszXSkge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5pbXBvcnQgRXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gWzAsIDgwLCAxNjAsIDI0MCwgMzIwLCA0MDAsIDQ4MCwgNTYwLCA2NDAsIDcyMF07XG5jb25zdCBXSURUSCA9IDgwMDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gICAgICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0gW107XG4gICAgICAgIHRoaXMuZnJhbWVIID0gMDtcblxuICAgICAgICB0aGlzLkluaXRpYWxMYXllciA9IHRoaXMuSW5pdGlhbExheWVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDbGljayA9IHRoaXMucmVnaXN0ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIgPSB0aGlzLmZhbGxpbmdOdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3RXF1YXRpb24gPSB0aGlzLmRyYXdFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdOdW1iZXJzID0gdGhpcy5kcmF3TnVtYmVycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJvdHRvbWxpbmUgPSB0aGlzLkluaXRpYWxMYXllcihjb250ZXh0LCBOdW1Db2x1bW5zLCB0aGlzLmJvdHRvbWxpbmUpO1xuICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoY29udGV4dCwgdGhpcy5mYWxsaW5nTnVtYmVycyk7XG5cbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICAgICAgY29uc3QgbmV3RXEgPSBlcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgICAgICB0aGlzLmRyYXdFcXVhdGlvbihjb250ZXh0LCBuZXdFcSk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBlcXVhdGlvbi5yaWdodEFuc3dlcihuZXdFcSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKGNvbnRleHQsIG5ld0VxLCB0aGlzLmJvdHRvbWxpbmUsIHRoaXMuZmFsbGluZ051bWJlcnMpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PlxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNsaWNrKGUsIG9mZnNldFgsIG9mZnNldFksIGNvbnRleHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDbGljayhlLCBvZmZzZXRYLCBvZmZzZXRZLCBjb250ZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvZmZzZXRYOiAke29mZnNldFh9IG9mZnNldFk6ICR7b2Zmc2V0WX1gKTtcbiAgICAgICAgY29uc3QgY2xpY2tlZFBvcyA9IHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgIHk6IGUuY2xpZW50WSxcbiAgICAgICAgfTtcbiAgICAgICAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmFsbGluZ051bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG51bSA9IHRoaXMuZmFsbGluZ051bWJlcnNbaV07XG4gICAgICAgIGNvbnN0IGxlZnQgPSBudW0ucG9zWzBdO1xuICAgICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgICAgY29uc3QgdG9wID0gbnVtLnBvc1sxXTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gbnVtLnBvc1sxXSArIDgwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja2VkUG9zLnggPj0gbGVmdCAmJlxuICAgICAgICAgICAgY2xpY2tlZFBvcy54IDw9IHJpZ2h0ICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPj0gdG9wICYmXG4gICAgICAgICAgICBjbGlja2VkUG9zLnkgPD0gYm90dG9tXG4gICAgICAgICkge1xuICAgICAgICAgICAgYWxlcnQobnVtLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3RXF1YXRpb24oY29udGV4dCwgZXF1YXRpb24pIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICAgICAgY29udGV4dC5zdHJva2VUZXh0KGVxdWF0aW9uLCA0MDAsIDE1KTtcbiAgICB9XG5cbiAgICBJbml0aWFsTGF5ZXIoY29udGV4dCwgTnVtQ29sdW1ucywgYm90dG9tbGluZSkge1xuICAgICAgICBsZXQgbnVtO1xuICAgICAgICBsZXQgcG9zQXRYID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgICAgICAgIG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDc0XSwgbnVtKTtcbiAgICAgICAgICAgIG5ld051bWJlci5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgICAgICAgYm90dG9tbGluZVtwb3NBdFhdID0gbmV3TnVtYmVyO1xuICAgICAgICAgICAgcG9zQXRYICs9IDgwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3R0b21saW5lO1xuICAgIH1cblxuICAgIGRyYXdOdW1iZXJzKGNvbnRleHQsIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKSB7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYm90dG9tbGluZSkuZm9yRWFjaChwb3MgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHJhdyBib3R0b21MaW5lJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvdHRvbWxpbmUpO1xuICAgICAgICAgICAgY29uc3Qgc3EgPSBib3R0b21saW5lW3Bvc107IFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3EpO1xuICAgICAgICAgICAgc3EuZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICAgICAgfSlcbiAgICAgICAgZmFsbGluZ051bWJlcnMuZm9yRWFjaChudW0gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmFsbGluZ051bWJlcnMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobnVtLnBvcyk7XG4gICAgICAgICAgICBudW0uZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgICAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgICAgICBjb25zdCB5ID0gMjU7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBmYWxsaW5nTnVtYmVyKGNvbnRleHQsIGZhbGxpbmdOdW1iZXJzKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpO1xuICAgICAgICBjb25zdCBudW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMDtcbiAgICAgICAgY29uc3QgZmFsbGluZ051bSA9IG5ldyBOdW1iZXJzKHBvcywgbnVtKTtcbiAgICAgICAgZmFsbGluZ051bS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgICBmYWxsaW5nTnVtYmVycy5wdXNoKGZhbGxpbmdOdW0pO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY29udGV4dCwgZXF1YXRpb24sIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKSB7XG5cbiAgICAgICAgdGhpcy5mcmFtZUggKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVIID4gMjUwKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdOdW1iZXIoY29udGV4dCwgZmFsbGluZ051bWJlcnMpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNsZWFyIHRoZSBjYW52YXNcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgODAwLCA2MDApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJlZ2luIGFuaW1hdGVcIik7XG4gICAgICAgIHRoaXMuZHJhd0VxdWF0aW9uKGNvbnRleHQsIGVxdWF0aW9uKTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBwb3NcbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICAvLyByZWRyYXcgY2FudmFzXG4gICAgICAgIHRoaXMuZHJhd051bWJlcnMoY29udGV4dCwgYm90dG9tbGluZSwgZmFsbGluZ051bWJlcnMpO1xuXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT5cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZShjb250ZXh0LCBlcXVhdGlvbiwgYm90dG9tbGluZSwgZmFsbGluZ051bWJlcnMpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mYWxsaW5nTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyc1tpXS5tb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnMuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgIG51bS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGlja2VkTnVtYmVyKCkge31cblxuICAgIHN0b3BGYWxsaW5nTnVtYmVyKCkge1xuXG4gICAgfVxuICAgIHN0YXJ0KCkge31cbiAgICBnYW1lT3ZlcigpIHt9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmdhbWUubW92ZU9iamVjdHMoKSwgXG4gICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldEludGVydmFsKGNhbGxiYWNrLmJpbmQodGhhdCksIDIwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHRoaXMucG9zID0gb2JqW1wicG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IG9ialtcInZlbFwiXTtcbiAgICAgICAgdGhpcy5jb2xvciA9IG9ialtcImNvbG9yXCJdO1xuICAgICAgICB0aGlzLnRleHQgPSBvYmpbXCJ0ZXh0XCJdO1xuICAgICAgICB0aGlzLmRyYXdTcXVhcmUgPSB0aGlzLmRyYXdTcXVhcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0rNDAsIHRoaXMucG9zWzFdKzQwKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvc1sxXSArPSAwLjM7XG4gICAgfVxuXG4gICAgaXNDb2xsaWRlZFdpdGgob3RoZXJOdW1iZXIpIHsgXG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI0NDRkYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjRkJBRUQyXCIsXG4gIDY6IFwiI0ZGNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=