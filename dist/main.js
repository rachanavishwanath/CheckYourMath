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
      var num2 = this.shuffled(NUMBERS).slice(startNum2, startNum2 + length);
      console.log(length, startNum1, startNum2, mathOp, num1, num2);

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
      console.log("offsetX: ".concat(offsetX, " offsetY: ").concat(offsetY));
      debugger;
      var clickedPos = {
        x: e.clientX,
        y: e.clientY
      };
      alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));

      for (var i = 0; i < this.fallingNumbers.length; i++) {
        debugger;
        var num = this.fallingNumbers[i];
        var left = num.pos[0];
        var right = num.pos[0] + 80;
        var top = num.pos[1];
        var bottom = num.pos[1] + 80;

        if (clickedPos.x >= left && clickedPos.x <= right && clickedPos.y >= top && clickedPos.y <= bottom) {
          alert(num.text);
        }
      }

      console.log(this.fallingNumbers);
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

      console.log(bottomline);
      return bottomline;
    }
  }, {
    key: "drawNumbers",
    value: function drawNumbers(context, bottomline, fallingNumbers) {
      debugger;
      console.log(bottomline);
      Object.keys(bottomline).forEach(function (pos) {
        var sq = bottomline[pos];
        console.log(sq);
        sq.drawSquare(context);
      });
      fallingNumbers.forEach(function (num) {
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
      console.log(fallingNumbers); // this.moveObjects();
    }
  }, {
    key: "animate",
    value: function animate(context, equation, bottomline, fallingNumbers) {
      var _this2 = this;

      context.clearRect(0, 0, 800, 600);
      console.log('Begin animate');
      this.drawEquation(context, equation);
      this.moveObjects();
      this.drawNumbers(context, bottomline, fallingNumbers);

      var callback = function callback() {
        return _this2.animate(context, equation, bottomline, fallingNumbers);
      }; // clear the canvas
      // update the pos
      // redraw canvas


      requestAnimationFrame(callback);
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
      console.log(this.pos);
      ctx.strokeStyle = "red";
      ctx.strokeRect(this.pos[0], this.pos[1], 80, 80);
      ctx.lineWidth = 2;
      ctx.fillStyle = 'black';
      ctx.fillRect(this.pos[0], this.pos[1], 80, 80);
      ctx.fillStyle = this.color;
      ctx.font = "40px Georgia";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, this.pos[0] + 40, this.pos[1] + 40); // this.move();

      console.log(this.pos);
    }
  }, {
    key: "move",
    value: function move() {
      this.pos[1] += 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwibnVtIiwiTnVtYmVycyIsIndpbmRvdyIsImRyYXdTcXVhcmUiLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsIkRJTV9ZIiwiYm90dG9tbGluZSIsImZhbGxpbmdOdW1iZXJzIiwiSW5pdGlhbExheWVyIiwiZmFsbGluZ051bWJlciIsImRyYXdFcXVhdGlvbiIsImRyYXdOdW1iZXJzIiwiYW5pbWF0ZSIsIm5ld0VxIiwiaSIsImxlZnQiLCJwb3MiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInRleHQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzcSIsInJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMiLCJmYWxsaW5nTnVtIiwicHVzaCIsImNsZWFyUmVjdCIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlIiwiR2FtZVZpZXciLCJjdHgiLCJzdGFydCIsInRoYXQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJjb2xvciIsInN0cm9rZVJlY3QiLCJsaW5lV2lkdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwic2NhbGUiLCJ2ZWMiLCJtIiwibnVtYmVyIiwiY2hpbGRDbGFzcyIsInBhcmVudENsYXNzIiwiU3Vycm9nYXRlIiwicHJvdG90eXBlIiwiY29uc3RydXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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LEtBQUwsQ0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsRUFBbUJ2RSxNQUFuQixDQUFQO0FBQ0gsR0FIUTtBQUlUdUUsT0FKUyxpQkFJSEMsR0FKRyxFQUlFQyxDQUpGLEVBSUs7QUFDVixXQUFPLENBQUMsQ0FBRCxFQUFJRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVFDLENBQVosQ0FBUDtBQUNILEdBTlE7QUFPVEMsUUFQUyxrQkFPRmxHLEdBUEUsRUFPRztBQUNSLFdBQU9tQixJQUFJLENBQUNNLEtBQUwsQ0FBV04sSUFBSSxDQUFDQyxNQUFMLEtBQWdCcEIsR0FBM0IsQ0FBUDtBQUNIO0FBVFEsQ0FBYjs7QUFZQXRCLElBQUksQ0FBQ29ILFFBQUwsR0FBZ0IsVUFBU0ssVUFBVCxFQUFxQkMsV0FBckIsRUFBa0M7QUFDOUMsV0FBU0MsU0FBVCxHQUFxQixDQUFFOztBQUFBO0FBQ3ZCQSxXQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7QUFDQUgsWUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUIvSCxJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgY2xpY2tlZFBvcyA9IHtcbiAgICB4OiBlLmNsaWVudFggLSBvZmZzZXRYLFxuICAgIHk6IGUuY2xpZW50WSAtIG9mZnNldFksXG4gIH07XG4gIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgY29uc29sZS5sb2coY2xpY2tlZFBvcyk7XG4gIHJldHVybiBjbGlja2VkUG9zO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zdCBvZmZzZXRYID0gY2FudmFzLm9mZnNldExlZnQ7XG4gIGNvbnN0IG9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICBjb25zb2xlLmxvZyhgb2Zmc2V0WDogJHtvZmZzZXRYfSBvZmZzZXRZOiAke29mZnNldFl9YCk7XG4gIGxldCBjbGlja2VkUG9zO1xuICAvLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT5cbiAgLy8gICByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpXG4gIC8vICk7XG4gIGNvbnNvbGUubG9nKGNsaWNrZWRQb3MpO1xuICBjb25zb2xlLmxvZygnSXRzIHdvcmtpbmcnKTtcbiAgY29uc3QgbnVtID0gbmV3IE51bWJlcnMoWzgwLDE3MF0sIDApO1xuICB3aW5kb3cubnVtID0gbnVtO1xuICBudW0uZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG4gIC8vIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNvbnRleHQpO1xuICAvLyBnYW1lVmlldy5zdGFydCgpO1xuICAvLyBnYW1lLkluaXRpYWxMYXllcihjb250ZXh0KTtcbn0pIiwiY29uc3QgTUFUSE9QID0gW1xuICAgICcrJywgXG4gICAgJy0nLFxuICAgICcqJ1xuXVxuXG5jb25zdCBOVU1CRVJTID0gJzAxMjM0NTY3ODknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhdGlvbiB7XG4gICAgY29uc3RydWN0b3IobnVtYmVycykge1xuICAgICAgICB0aGlzLm51bWJlcnMgPSBudW1iZXJzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJpZ2h0QW5zd2VyID0gdGhpcy5yaWdodEFuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5ld0VxdWF0aW9uID0gdGhpcy5jcmVhdGVFcXVhdGlvbigpO1xuICAgIH1cblxuICAgIHNodWZmbGVkICh1bnNodWZmbGVkKSB7XG4gICAgICAgIHJldHVybiB1bnNodWZmbGVkXG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAgICAgLm1hcCgoYSkgPT4gYS52YWx1ZSlcbiAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKCkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMykgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgsIHN0YXJ0TnVtMSwgc3RhcnROdW0yLCBtYXRoT3AsIG51bTEsIG51bTIpO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICByZXR1cm4gZXF1YXRpb247XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5jb25zdCBESU1fWSA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgICBjb25zdCBvZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDtcbiAgICB0aGlzLmJvdHRvbWxpbmUgPSB7fTtcbiAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0gW107XG5cbiAgICB0aGlzLkluaXRpYWxMYXllciA9IHRoaXMuSW5pdGlhbExheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mYWxsaW5nTnVtYmVyID0gdGhpcy5mYWxsaW5nTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3RXF1YXRpb24gPSB0aGlzLmRyYXdFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmJvdHRvbWxpbmUgPSB0aGlzLkluaXRpYWxMYXllcihjb250ZXh0LCBOdW1Db2x1bW5zLCB0aGlzLmJvdHRvbWxpbmUpO1xuICAgIHRoaXMuZmFsbGluZ051bWJlcihjb250ZXh0LCB0aGlzLmZhbGxpbmdOdW1iZXJzKTtcblxuICAgIGNvbnN0IGVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgY29uc3QgbmV3RXEgPSBlcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgIHRoaXMuZHJhd0VxdWF0aW9uKGNvbnRleHQsIG5ld0VxKTtcbiAgICB0aGlzLnJpZ2h0QW5zd2VyID0gZXF1YXRpb24ucmlnaHRBbnN3ZXIobmV3RXEpO1xuXG4gICAgdGhpcy5hbmltYXRlKGNvbnRleHQsIG5ld0VxLCB0aGlzLmJvdHRvbWxpbmUsIHRoaXMuZmFsbGluZ051bWJlcnMpO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+XG4gICAgICB0aGlzLnJlZ2lzdGVyQ2xpY2soZSwgb2Zmc2V0WCwgb2Zmc2V0WSwgY29udGV4dClcbiAgICApO1xuICB9XG5cbiAgcmVnaXN0ZXJDbGljayhlLCBvZmZzZXRYLCBvZmZzZXRZLCBjb250ZXh0KSB7XG4gICAgY29uc29sZS5sb2coYG9mZnNldFg6ICR7b2Zmc2V0WH0gb2Zmc2V0WTogJHtvZmZzZXRZfWApO1xuICAgIGRlYnVnZ2VyO1xuICAgIGNvbnN0IGNsaWNrZWRQb3MgPSB7XG4gICAgICB4OiBlLmNsaWVudFgsXG4gICAgICB5OiBlLmNsaWVudFksXG4gICAgfTtcbiAgICBhbGVydChgY2xpY2tlZCBhdCAke2NsaWNrZWRQb3MueH0gJHtjbGlja2VkUG9zLnl9YCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhbGxpbmdOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIGxldCBudW0gPSB0aGlzLmZhbGxpbmdOdW1iZXJzW2ldO1xuICAgICAgY29uc3QgbGVmdCA9IG51bS5wb3NbMF07XG4gICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgIGNvbnN0IHRvcCA9IG51bS5wb3NbMV07XG4gICAgICBjb25zdCBib3R0b20gPSBudW0ucG9zWzFdICsgODA7XG4gICAgICBpZiAoXG4gICAgICAgIGNsaWNrZWRQb3MueCA+PSBsZWZ0ICYmXG4gICAgICAgIGNsaWNrZWRQb3MueCA8PSByaWdodCAmJlxuICAgICAgICBjbGlja2VkUG9zLnkgPj0gdG9wICYmXG4gICAgICAgIGNsaWNrZWRQb3MueSA8PSBib3R0b21cbiAgICAgICkge1xuICAgICAgICBhbGVydChudW0udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmFsbGluZ051bWJlcnMpO1xuICB9XG5cbiAgZHJhd0VxdWF0aW9uKGNvbnRleHQsIGVxdWF0aW9uKSB7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjb250ZXh0LmZvbnQgPSBcIjIwcHggVmVyZGFuYVwiO1xuICAgIGNvbnRleHQuc3Ryb2tlVGV4dChlcXVhdGlvbiwgNDAwLCAxNSk7XG4gIH1cblxuICBJbml0aWFsTGF5ZXIoY29udGV4dCwgTnVtQ29sdW1ucywgYm90dG9tbGluZSkge1xuICAgIGxldCBudW07XG4gICAgbGV0IHBvc0F0WCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1Db2x1bW5zOyBpKyspIHtcbiAgICAgIG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDc0XSwgbnVtKTtcbiAgICAgIG5ld051bWJlci5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgYm90dG9tbGluZVtwb3NBdFhdID0gbmV3TnVtYmVyO1xuICAgICAgcG9zQXRYICs9IDgwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhib3R0b21saW5lKTtcbiAgICByZXR1cm4gYm90dG9tbGluZTtcbiAgfVxuXG4gIGRyYXdOdW1iZXJzKGNvbnRleHQsIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgY29uc29sZS5sb2coYm90dG9tbGluZSk7XG4gICAgT2JqZWN0LmtleXMoYm90dG9tbGluZSkuZm9yRWFjaChwb3MgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3EgPSBib3R0b21saW5lW3Bvc107IFxuICAgICAgICAgICAgY29uc29sZS5sb2coc3EpO1xuICAgICAgICAgICAgc3EuZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICAgfSlcbiAgICAgZmFsbGluZ051bWJlcnMuZm9yRWFjaChudW0gPT4ge1xuICAgICAgICAgbnVtLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgIH0pXG4gIH1cblxuICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgIGNvbnN0IHggPSBESU1fWFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMF07XG4gICAgY29uc3QgeSA9IDI1O1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb24oKSB7fVxuXG4gIGZhbGxpbmdOdW1iZXIoY29udGV4dCwgZmFsbGluZ051bWJlcnMpIHtcbiAgICBjb25zdCBwb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uZm9yRmFsbGluZ051bWJlcnMoKTtcbiAgICBjb25zdCBudW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMDtcbiAgICBjb25zdCBmYWxsaW5nTnVtID0gbmV3IE51bWJlcnMocG9zLCBudW0pO1xuICAgIGZhbGxpbmdOdW0uZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICBmYWxsaW5nTnVtYmVycy5wdXNoKGZhbGxpbmdOdW0pO1xuICAgIGNvbnNvbGUubG9nKGZhbGxpbmdOdW1iZXJzKTtcbiAgICAvLyB0aGlzLm1vdmVPYmplY3RzKCk7XG4gIH1cblxuICBhbmltYXRlKGNvbnRleHQsIGVxdWF0aW9uLCBib3R0b21saW5lLCBmYWxsaW5nTnVtYmVycykge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgODAwLCA2MDApO1xuICAgICAgY29uc29sZS5sb2coJ0JlZ2luIGFuaW1hdGUnKTtcbiAgICAgIHRoaXMuZHJhd0VxdWF0aW9uKGNvbnRleHQsIGVxdWF0aW9uKTtcbiAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5kcmF3TnVtYmVycyhjb250ZXh0LCBib3R0b21saW5lLCBmYWxsaW5nTnVtYmVycyk7XG4gICAgICAgIFxuICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PlxuICAgICAgICB0aGlzLmFuaW1hdGUoY29udGV4dCwgZXF1YXRpb24sIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKTtcbiAgICAvLyBjbGVhciB0aGUgY2FudmFzXG4gICAgXG4gICAgLy8gdXBkYXRlIHRoZSBwb3NcbiAgICAvLyByZWRyYXcgY2FudmFzXG4gICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIG1vdmVPYmplY3RzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mYWxsaW5nTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2hpbGUgKHRoaXMuZmFsbGluZ051bWJlcnNbaV0ucG9zWzFdIDwgNDAwKSB7XG4gICAgICAgIHRoaXMuZmFsbGluZ051bWJlcnNbaV0ubW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgIHRoaXMuZmFsbGluZ051bWJlcnMuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICBudW0uZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrZWROdW1iZXIoKSB7fVxuXG4gIHN0b3BGYWxsaW5nTnVtYmVyKCkge31cbiAgc3RhcnQoKSB7fVxuICBnYW1lT3ZlcigpIHt9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmdhbWUubW92ZU9iamVjdHMoKSwgXG4gICAgICAgICAgICB0aGF0LmdhbWUuZHJhdyh0aGF0LmN0eCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldEludGVydmFsKGNhbGxiYWNrLmJpbmQodGhhdCksIDIwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHRoaXMucG9zID0gb2JqW1wicG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IG9ialtcInZlbFwiXTtcbiAgICAgICAgdGhpcy5jb2xvciA9IG9ialtcImNvbG9yXCJdO1xuICAgICAgICB0aGlzLnRleHQgPSBvYmpbXCJ0ZXh0XCJdO1xuICAgICAgICB0aGlzLmRyYXdTcXVhcmUgPSB0aGlzLmRyYXdTcXVhcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3MpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLnBvc1swXSs0MCwgdGhpcy5wb3NbMV0rNDApO1xuICAgICAgICAvLyB0aGlzLm1vdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3MpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMucG9zWzFdICs9IDE7XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI0NDRkYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjRkJBRUQyXCIsXG4gIDY6IFwiI0ZGNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=