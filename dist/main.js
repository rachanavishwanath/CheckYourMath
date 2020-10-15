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
      debugger;
      alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));
      var numbers = Object.values(this.fallingNumbers);

      for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
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
      console.log(this.fallingNumbers);
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
      debugger;
      var currentColumn = this.fallingNumbers[pos[0]];
      var otherNumber;
      console.log(this.fallingNumbers);
      debugger; // refactor and this will be perfect
      // const height = (currentColumn.length - 1) * 81
      // return pos[1] >= (393 - height)
      // for (let i = 0; i < currentColumn.length; i++) {

      debugger;

      if (currentFallingPosition != 0) {
        //   if (i < currentFallingPosition) {
        var num = currentColumn[currentFallingPosition];
        debugger;
        otherNumber = currentColumn[currentFallingPosition - 1];
        return num.checkCollisionWith(otherNumber);
      } // }

    }
  }, {
    key: "moveObjects",
    value: function moveObjects() {
      var numbers = Object.values(this.fallingNumbers);
      console.log(numbers);

      for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers[i].length; j++) {
          debugger;

          if (!this.detectCollision(numbers[i][j].pos, j)) {
            debugger;
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
      debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwibnVtIiwiTnVtYmVycyIsIndpbmRvdyIsImRyYXdTcXVhcmUiLCJnYW1lIiwiR2FtZSIsIk1BVEhPUCIsIk5VTUJFUlMiLCJFcXVhdGlvbiIsIm51bWJlcnMiLCJjcmVhdGVFcXVhdGlvbiIsImJpbmQiLCJyaWdodEFuc3dlciIsIm5ld0VxdWF0aW9uIiwidW5zaHVmZmxlZCIsInNwbGl0IiwibWFwIiwiYSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwidmFsdWUiLCJiIiwiam9pbiIsImxlbmd0aCIsInJvdW5kIiwic3RhcnROdW0xIiwic3RhcnROdW0yIiwibWF0aE9wIiwibnVtMSIsInNodWZmbGVkIiwic2xpY2UiLCJudW0yIiwicGFyc2VJbnQiLCJ0ZW1wIiwiZXF1YXRpb24iLCJhcnIiLCJOdW1Db2x1bW5zIiwiRElNX1giLCJXSURUSCIsIkhFSUdIVCIsIkRJTV9ZIiwiYm90dG9tbGluZSIsImZhbGxpbmdOdW1iZXJzIiwiZnJhbWVIIiwidXNlckNsaWNrcyIsIkluaXRpYWxMYXllciIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJkZXRlY3RDb2xsaXNpb24iLCJuZXdFcSIsIk9iamVjdCIsInZhbHVlcyIsImkiLCJsZWZ0IiwicG9zIiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJ0ZXh0Iiwic3Ryb2tlU3R5bGUiLCJmb250Iiwic3Ryb2tlVGV4dCIsInBvc0F0WCIsIm5ld051bWJlciIsImtleXMiLCJmb3JFYWNoIiwic3EiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmFsbGluZ051bSIsInB1c2giLCJjbGVhclJlY3QiLCJtb3ZlT2JqZWN0cyIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudEZhbGxpbmdQb3NpdGlvbiIsImN1cnJlbnRDb2x1bW4iLCJvdGhlck51bWJlciIsImNoZWNrQ29sbGlzaW9uV2l0aCIsImoiLCJtb3ZlIiwiR2FtZVZpZXciLCJjdHgiLCJzdGFydCIsInRoYXQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJNb3ZpbmdPYmplY3QiLCJvYmoiLCJ2ZWwiLCJjb2xvciIsInN0cm9rZVJlY3QiLCJsaW5lV2lkdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwic2NhbGUiLCJ2ZWMiLCJtIiwibnVtYmVyIiwiY2hpbGRDbGFzcyIsInBhcmVudENsYXNzIiwiU3Vycm9nYXRlIiwicHJvdG90eXBlIiwiY29uc3RydXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFB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QUFsQztBQUNILENBTEQ7O0FBT0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnhJLElBQWpCLEM7Ozs7Ozs7Ozs7O0FDbkJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vc2NyaXB0cy9udW1iZXJzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vc2NyaXB0cy91dGlsJyk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xpY2soZSwgY2xpY2tlZFBvcywgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICBjbGlja2VkUG9zID0ge1xuICAgIHg6IGUuY2xpZW50WCAtIG9mZnNldFgsXG4gICAgeTogZS5jbGllbnRZIC0gb2Zmc2V0WSxcbiAgfTtcbiAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICByZXR1cm4gY2xpY2tlZFBvcztcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3Qgb2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICBjb25zdCBvZmZzZXRZID0gY2FudmFzLm9mZnNldFRvcDtcbiAgLy8gY29uc29sZS5sb2coYG9mZnNldFg6ICR7b2Zmc2V0WH0gb2Zmc2V0WTogJHtvZmZzZXRZfWApO1xuICBsZXQgY2xpY2tlZFBvcztcbiAgLy8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+XG4gIC8vICAgcmVnaXN0ZXJDbGljayhlLCBjbGlja2VkUG9zLCBvZmZzZXRYLCBvZmZzZXRZKVxuICAvLyApO1xuICAvLyBjb25zb2xlLmxvZyhjbGlja2VkUG9zKTtcbiAgY29uc29sZS5sb2coJ0l0cyB3b3JraW5nJyk7XG4gIGNvbnN0IG51bSA9IG5ldyBOdW1iZXJzKFs4MCwxNzBdLCAwKTtcbiAgd2luZG93Lm51bSA9IG51bTtcbiAgbnVtLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuICAvLyBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjb250ZXh0KTtcbiAgLy8gZ2FtZVZpZXcuc3RhcnQoKTtcbiAgLy8gZ2FtZS5Jbml0aWFsTGF5ZXIoY29udGV4dCk7XG59KSIsImNvbnN0IE1BVEhPUCA9IFtcbiAgICAnKycsIFxuICAgICctJyxcbiAgICAnKidcbl1cblxuY29uc3QgTlVNQkVSUyA9ICcwMTIzNDU2Nzg5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG51bWJlcnMpIHtcbiAgICAgICAgdGhpcy5udW1iZXJzID0gbnVtYmVycztcbiAgICAgICAgdGhpcy5jcmVhdGVFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEFuc3dlciA9IHRoaXMucmlnaHRBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5uZXdFcXVhdGlvbiA9IHRoaXMuY3JlYXRlRXF1YXRpb24oKTtcbiAgICB9XG5cbiAgICBzaHVmZmxlZCAodW5zaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gdW5zaHVmZmxlZFxuICAgICAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+ICh7IHNvcnQ6IE1hdGgucmFuZG9tKCksIHZhbHVlOiBhIH0pKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnQgLSBiLnNvcnQpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gYS52YWx1ZSlcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlRXF1YXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAzKSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0TnVtMiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMCkgJSA0KSArIDE7XG4gICAgICAgIGNvbnN0IG1hdGhPcCA9IE1BVEhPUFtNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMildO1xuICAgICAgICBsZXQgbnVtMSA9IHRoaXMuc2h1ZmZsZWQoTlVNQkVSUykuc2xpY2UoXG4gICAgICAgICAgICBzdGFydE51bTEsXG4gICAgICAgICAgICBzdGFydE51bTEgKyBsZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0yLFxuICAgICAgICAgICAgc3RhcnROdW0yICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxlbmd0aCwgc3RhcnROdW0xLCBzdGFydE51bTIsIG1hdGhPcCwgbnVtMSwgbnVtMik7XG4gICAgICAgIGlmIChwYXJzZUludChudW0xKSA8IHBhcnNlSW50KG51bTIpICYmIG1hdGhPcCA9PT0gJy0nKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gbnVtMTtcbiAgICAgICAgICAgIG51bTEgPSBudW0yO1xuICAgICAgICAgICAgbnVtMiA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXF1YXRpb24gPSBgV2hhdCBpcyAke251bTF9ICR7bWF0aE9wfSAke251bTJ9P2A7XG4gICAgICAgIHJldHVybiBlcXVhdGlvbjtcbiAgICB9XG5cbiAgICByaWdodEFuc3dlcihlcXVhdGlvbil7XG4gICAgICAgIGxldCBhcnIgPSBlcXVhdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtMSA9IHBhcnNlSW50KGFyclsyXSk7XG4gICAgICAgIGxldCBudW0yID0gcGFyc2VJbnQoYXJyWzRdKTtcbiAgICAgICAgc3dpdGNoKGFyclszXSkge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5pbXBvcnQgRXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gWzAsIDgwLCAxNjAsIDI0MCwgMzIwLCA0MDAsIDQ4MCwgNTYwLCA2NDAsIDcyMF07XG5jb25zdCBXSURUSCA9IDgwMDtcbmNvbnN0IEhFSUdIVCA9IDYwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IG9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgIHRoaXMuZmFsbGluZ051bWJlcnMgPSB7fTtcbiAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgdGhpcy51c2VyQ2xpY2tzID0ge307XG5cbiAgICB0aGlzLkluaXRpYWxMYXllciA9IHRoaXMuSW5pdGlhbExheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckNsaWNrID0gdGhpcy5yZWdpc3RlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mYWxsaW5nTnVtYmVyID0gdGhpcy5mYWxsaW5nTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3RXF1YXRpb24gPSB0aGlzLmRyYXdFcXVhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd051bWJlcnMgPSB0aGlzLmRyYXdOdW1iZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXRlY3RDb2xsaXNpb24gPSB0aGlzLmRldGVjdENvbGxpc2lvbi5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5ib3R0b21saW5lID0gdGhpcy5Jbml0aWFsTGF5ZXIoY29udGV4dCwgTnVtQ29sdW1ucywgdGhpcy5ib3R0b21saW5lKTtcbiAgICB0aGlzLmZhbGxpbmdOdW1iZXJzID0gdGhpcy5mYWxsaW5nTnVtYmVyKGNvbnRleHQsIHRoaXMuZmFsbGluZ051bWJlcnMpO1xuXG4gICAgY29uc3QgZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICBjb25zdCBuZXdFcSA9IGVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgdGhpcy5kcmF3RXF1YXRpb24oY29udGV4dCwgbmV3RXEpO1xuICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBlcXVhdGlvbi5yaWdodEFuc3dlcihuZXdFcSk7XG5cbiAgICB0aGlzLmFuaW1hdGUoY29udGV4dCwgbmV3RXEsIHRoaXMuYm90dG9tbGluZSwgdGhpcy5mYWxsaW5nTnVtYmVycyk7XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT5cbiAgICAgIHRoaXMucmVnaXN0ZXJDbGljayhlLCBvZmZzZXRYLCBvZmZzZXRZLCBjb250ZXh0KVxuICAgICk7XG4gIH1cblxuICByZWdpc3RlckNsaWNrKGUsIG9mZnNldFgsIG9mZnNldFksIGNvbnRleHQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgb2Zmc2V0WDogJHtvZmZzZXRYfSBvZmZzZXRZOiAke29mZnNldFl9YCk7XG4gICAgZGVidWdnZXI7XG4gICAgY29uc3QgY2xpY2tlZFBvcyA9IHtcbiAgICAgIHg6IGUuY2xpZW50WCAtIG9mZnNldFgsXG4gICAgICB5OiBlLmNsaWVudFksXG4gICAgICAvLyB5OiBNYXRoLmFicyhlLmNsaWVudFkgLSBvZmZzZXRZKSAtIDI1LFxuICAgIH07XG4gICAgZGVidWdnZXI7XG4gICAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICAgIGxldCBudW1iZXJzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBudW1iZXJzW2ldO1xuICAgICAgY29uc3QgbGVmdCA9IG51bS5wb3NbMF07XG4gICAgICBjb25zdCByaWdodCA9IG51bS5wb3NbMF0gKyA4MDtcbiAgICAgIGNvbnN0IHRvcCA9IG51bS5wb3NbMV07XG4gICAgICBjb25zdCBib3R0b20gPSBudW0ucG9zWzFdICsgODA7XG4gICAgICBpZiAoXG4gICAgICAgIGNsaWNrZWRQb3MueCA+PSBsZWZ0ICYmXG4gICAgICAgIGNsaWNrZWRQb3MueCA8PSByaWdodCAmJlxuICAgICAgICAvLyBjbGlja2VkUG9zLnkgPj0gdG9wICYmXG4gICAgICAgIGNsaWNrZWRQb3MueSA8PSBib3R0b21cbiAgICAgICkge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzW251bS5wb3NdID0gbnVtO1xuICAgICAgICBhbGVydChudW0udGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckNsaWNrcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdFcXVhdGlvbihjb250ZXh0LCBlcXVhdGlvbikge1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY29udGV4dC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcbiAgICBjb250ZXh0LnN0cm9rZVRleHQoZXF1YXRpb24sIDQwMCwgMTUpO1xuICB9XG5cbiAgSW5pdGlhbExheWVyKGNvbnRleHQsIE51bUNvbHVtbnMsIGJvdHRvbWxpbmUpIHtcbiAgICBsZXQgbnVtO1xuICAgIGxldCBwb3NBdFggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtQ29sdW1uczsgaSsrKSB7XG4gICAgICBudW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMDtcbiAgICAgIGNvbnN0IG5ld051bWJlciA9IG5ldyBOdW1iZXJzKFtwb3NBdFgsIDQ3NF0sIG51bSk7XG4gICAgICBuZXdOdW1iZXIuZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICAgIGJvdHRvbWxpbmVbcG9zQXRYXSA9IG5ld051bWJlcjtcbiAgICAgIHBvc0F0WCArPSA4MDtcbiAgICB9XG4gICAgcmV0dXJuIGJvdHRvbWxpbmU7XG4gIH1cblxuICBkcmF3TnVtYmVycyhjb250ZXh0LCBib3R0b21saW5lLCBmYWxsaW5nTnVtYmVycykge1xuICAgIE9iamVjdC5rZXlzKGJvdHRvbWxpbmUpLmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgY29uc3Qgc3EgPSBib3R0b21saW5lW3Bvc107XG4gICAgICBzcS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgIH0pO1xuICAgIE9iamVjdC52YWx1ZXMoZmFsbGluZ051bWJlcnMpLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbnVtW2ldLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCkge1xuICAgIGNvbnN0IHggPSBESU1fWFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAxMF07XG4gICAgY29uc29sZS5sb2codGhpcy5mYWxsaW5nTnVtYmVycyk7XG4gICAgY29uc3QgeSA9IDI1O1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBmYWxsaW5nTnVtYmVyKGNvbnRleHQsIGZhbGxpbmdOdW1iZXJzKSB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzKCk7XG4gICAgY29uc3QgbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTA7XG4gICAgY29uc3QgZmFsbGluZ051bSA9IG5ldyBOdW1iZXJzKHBvcywgbnVtKTtcbiAgICBmYWxsaW5nTnVtLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgZmFsbGluZ051bWJlcnNbcG9zWzBdXSA9IGZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gfHwgW107XG4gICAgZmFsbGluZ051bWJlcnNbcG9zWzBdXS5wdXNoKGZhbGxpbmdOdW0pO1xuICAgIGlmIChmYWxsaW5nTnVtYmVyc1twb3NbMF1dLmxlbmd0aCA9PT0gNikge1xuICAgICAgICBhbGVydChgR2FtZSBPdmVyYCk7XG4gICAgfSBcbiAgICByZXR1cm4gZmFsbGluZ051bWJlcnM7XG4gIH1cblxuICBhbmltYXRlKGNvbnRleHQsIGVxdWF0aW9uLCBib3R0b21saW5lLCBmYWxsaW5nTnVtYmVycykge1xuICAgIHRoaXMuZnJhbWVIICs9IDE7XG4gICAgaWYgKHRoaXMuZnJhbWVIID4gNTApIHtcbiAgICAgIHRoaXMuZmFsbGluZ051bWJlcihjb250ZXh0LCBmYWxsaW5nTnVtYmVycyk7XG4gICAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgfVxuICAgIC8vIGNsZWFyIHRoZSBjYW52YXNcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICBjb25zb2xlLmxvZyhcIkJlZ2luIGFuaW1hdGVcIik7XG4gICAgdGhpcy5kcmF3RXF1YXRpb24oY29udGV4dCwgZXF1YXRpb24pO1xuICAgIC8vIHVwZGF0ZSB0aGUgcG9zXG4gICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgIC8vIHJlZHJhdyBjYW52YXNcbiAgICB0aGlzLmRyYXdOdW1iZXJzKGNvbnRleHQsIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT5cbiAgICAgIHRoaXMuYW5pbWF0ZShjb250ZXh0LCBlcXVhdGlvbiwgYm90dG9tbGluZSwgZmFsbGluZ051bWJlcnMpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGRldGVjdENvbGxpc2lvbihwb3MsIGN1cnJlbnRGYWxsaW5nUG9zaXRpb24pIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gdGhpcy5mYWxsaW5nTnVtYmVyc1twb3NbMF1dO1xuICAgIGxldCBvdGhlck51bWJlcjtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZhbGxpbmdOdW1iZXJzKTtcbiAgICBkZWJ1Z2dlcjsgXG4gICAgLy8gcmVmYWN0b3IgYW5kIHRoaXMgd2lsbCBiZSBwZXJmZWN0XG4gICAgLy8gY29uc3QgaGVpZ2h0ID0gKGN1cnJlbnRDb2x1bW4ubGVuZ3RoIC0gMSkgKiA4MVxuICAgIC8vIHJldHVybiBwb3NbMV0gPj0gKDM5MyAtIGhlaWdodClcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRDb2x1bW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgaWYgKGN1cnJlbnRGYWxsaW5nUG9zaXRpb24gIT0gMCkge1xuICAgIC8vICAgaWYgKGkgPCBjdXJyZW50RmFsbGluZ1Bvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IG51bSA9IGN1cnJlbnRDb2x1bW5bY3VycmVudEZhbGxpbmdQb3NpdGlvbl1cbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIG90aGVyTnVtYmVyID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIC0gMV07XG4gICAgICAgIHJldHVybiBudW0uY2hlY2tDb2xsaXNpb25XaXRoKG90aGVyTnVtYmVyKTtcbiAgICAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBtb3ZlT2JqZWN0cygpIHtcbiAgICBsZXQgbnVtYmVycyA9IE9iamVjdC52YWx1ZXModGhpcy5mYWxsaW5nTnVtYmVycyk7XG4gICAgY29uc29sZS5sb2cobnVtYmVycyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGlmICghdGhpcy5kZXRlY3RDb2xsaXNpb24obnVtYmVyc1tpXVtqXS5wb3MsIGopKSB7XG4gICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgbnVtYmVyc1tpXVtqXS5tb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGlja2VkTnVtYmVyKCkge31cblxuICBzdG9wRmFsbGluZ051bWJlcigpIHt9XG4gIHN0YXJ0KCkge31cbiAgZ2FtZU92ZXIoKSB7fVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpe1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5nYW1lLm1vdmVPYmplY3RzKCksIFxuICAgICAgICAgICAgdGhhdC5nYW1lLmRyYXcodGhhdC5jdHgpO1xuICAgICAgICB9O1xuICAgICAgICBzZXRJbnRlcnZhbChjYWxsYmFjay5iaW5kKHRoYXQpLCAyMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuICAgICAgICB0aGlzLnBvcyA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgdGhpcy52ZWwgPSBvYmpbXCJ2ZWxcIl07XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmpbXCJjb2xvclwiXTtcbiAgICAgICAgdGhpcy50ZXh0ID0gb2JqW1widGV4dFwiXTtcbiAgICAgICAgdGhpcy5kcmF3U3F1YXJlID0gdGhpcy5kcmF3U3F1YXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aCA9IHRoaXMuY2hlY2tDb2xsaXNpb25XaXRoLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0rNDAsIHRoaXMucG9zWzFdKzQwKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPj0gMzkzKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gKz0gMTA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGgob3RoZXJOdW1iZXIpIHsgXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc1sxXSA+PSAob3RoZXJOdW1iZXIucG9zWzFdIC0gODApXG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI0NDRkYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjRkJBRUQyXCIsXG4gIDY6IFwiI0ZGNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=