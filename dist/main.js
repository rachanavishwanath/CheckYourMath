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

    this.context = canvas.getContext("2d");
    var offsetX = canvas.offsetLeft;
    var offsetY = canvas.offsetTop;
    this.bottomline = {};
    this.fallingNumbers = {};
    this.frameH = 0;
    this.userClicks = [];
    this.playing = false;
    this.frameId = null;
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
    this.bottomline = this.InitialLayer(this.context, NumColumns, this.bottomline);
    this.fallingNumbers = this.fallingNumber(this.context, this.fallingNumbers);
    var equation = new _equation__WEBPACK_IMPORTED_MODULE_2__["default"]();
    var newEq = equation.createEquation(); // this.drawEquation(this.context, newEq);

    this.rightAnswer = equation.rightAnswer(newEq);
    this.animate(this.context, newEq, this.bottomline, this.fallingNumbers);
    canvas.addEventListener("mousedown", function (e) {
      return _this.registerClick(e, offsetX, offsetY, _this.context);
    });
    document.addEventListener("keydown", function (e) {
      return _this.keyHandler(e, _this.context, _this.bottomline, _this.fallingNumbers);
    });
  }

  _createClass(Game, [{
    key: "keyHandler",
    value: function keyHandler(e, context, bottomline, fallingNumbers) {
      debugger;
      e.preventDefault();

      if (e.key == "Enter") {
        this.playing = true;
        this.restartGame(context, bottomline, fallingNumbers);
      }
    }
  }, {
    key: "restartGame",
    value: function restartGame(context, bottomline, fallingNumbers) {
      document.getElementById("startGame").classList.add("hidden");
      var equation = new _equation__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var newEq = equation.createEquation();
      this.animate(context, newEq, bottomline, fallingNumbers);
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      if (this.frameId) {
        cancelAnimationFrame(this.frameId);
      }

      debugger;
      this.playing = false;
      console.log(this.context);
      this.context.clearRect(0, 0, WIDTH, HEIGHT);
      document.getElementById("endGame").classList.add("visible");
    }
  }, {
    key: "updateCanvas",
    value: function updateCanvas() {}
  }, {
    key: "removeRightAnswerSquare",
    value: function removeRightAnswerSquare(currentCol) {
      var _this2 = this;

      console.log(this.userClicks);
      console.log(this.bottomline);
      this.userClicks.forEach(function (num) {
        if (_this2.rightAnswer < 10) {
          if (num.text === _this2.rightAnswer && num.pos[1] === 474) {
            delete _this2.bottomline[num.pos[0]];
            _this2.userClicks = [];
            console.log(_this2.bottomline);
            console.log("right answer");
          } else if (num.text === _this2.rightAnswer) {}
        }
      });
      console.log(this.rightAnswer);
    }
  }, {
    key: "registerClick",
    value: function registerClick(e, offsetX, offsetY) {
      var clickedPos = {
        x: e.clientX - offsetX,
        y: Math.abs(e.clientY - offsetY) - 25
      };
      alert("clicked at ".concat(clickedPos.x, " ").concat(clickedPos.y));
      var currentCol = this.currentColumnForUserClick(clickedPos.x);
      var fNumbers;
      var allNumbers;
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
        var left = num.pos[0];
        var right = num.pos[0] + 80;
        var top = num.pos[1];
        var bottom = num.pos[1] + 80;

        if (clickedPos.x >= left && clickedPos.x <= right && clickedPos.y >= top && clickedPos.y <= bottom) {
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
        debugger;
        this.gameOver();
      }

      return fallingNumbers;
    }
  }, {
    key: "animate",
    value: function animate(context, equation, bottomline, fallingNumbers) {
      var _this3 = this;

      if (this.playing === true) {
        this.frameH += 1;

        if (this.frameH > 50) {
          this.fallingNumber(context, fallingNumbers);
          this.frameH = 0;
        }

        context.clearRect(0, 0, WIDTH, HEIGHT);
        this.drawEquation(context, equation);
        this.moveObjects();
        this.drawNumbers(context, bottomline, fallingNumbers);

        var callback = function callback() {
          return _this3.animate(context, equation, bottomline, fallingNumbers);
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
      console.log(foundBottomLine);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VxdWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsInJlZ2lzdGVyQ2xpY2siLCJlIiwiY2xpY2tlZFBvcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkdhbWUiLCJNQVRIT1AiLCJOVU1CRVJTIiwiRXF1YXRpb24iLCJudW1iZXJzIiwiY3JlYXRlRXF1YXRpb24iLCJiaW5kIiwicmlnaHRBbnN3ZXIiLCJuZXdFcXVhdGlvbiIsInVuc2h1ZmZsZWQiLCJzcGxpdCIsIm1hcCIsImEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiYiIsImpvaW4iLCJsZW5ndGgiLCJyb3VuZCIsInN0YXJ0TnVtMSIsInN0YXJ0TnVtMiIsIm1hdGhPcCIsIm51bTEiLCJzaHVmZmxlZCIsInNsaWNlIiwibnVtMiIsInBhcnNlSW50IiwidGVtcCIsImVxdWF0aW9uIiwiYXJyIiwiTnVtQ29sdW1ucyIsIkRJTV9YIiwiV0lEVEgiLCJIRUlHSFQiLCJESU1fWSIsImJvdHRvbWxpbmUiLCJmYWxsaW5nTnVtYmVycyIsImZyYW1lSCIsInVzZXJDbGlja3MiLCJwbGF5aW5nIiwiZnJhbWVJZCIsIkluaXRpYWxMYXllciIsImZhbGxpbmdOdW1iZXIiLCJkcmF3RXF1YXRpb24iLCJkcmF3TnVtYmVycyIsImFuaW1hdGUiLCJkZXRlY3RDb2xsaXNpb24iLCJyZW1vdmVSaWdodEFuc3dlclNxdWFyZSIsImtleUhhbmRsZXIiLCJnYW1lT3ZlciIsIm5ld0VxIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJyZXN0YXJ0R2FtZSIsImNsYXNzTGlzdCIsImFkZCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiY3VycmVudENvbCIsImZvckVhY2giLCJudW0iLCJ0ZXh0IiwicG9zIiwiYWJzIiwiY3VycmVudENvbHVtbkZvclVzZXJDbGljayIsImZOdW1iZXJzIiwiYWxsTnVtYmVycyIsImJOdW1iZXJzIiwiaGFzT3duUHJvcGVydHkiLCJjb25jYXQiLCJpIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwicHVzaCIsInhPZkNsaWNrZWQiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwicG9zQXRYIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImRyYXdTcXVhcmUiLCJPYmplY3QiLCJrZXlzIiwic3EiLCJ2YWx1ZXMiLCJyYW5kb21Qb3NpdGlvbmZvckZhbGxpbmdOdW1iZXJzIiwiZmFsbGluZ051bSIsIm1vdmVPYmplY3RzIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIiwiY3VycmVudENvbHVtbiIsIm90aGVyTnVtYmVyIiwiY2hlY2tDb2xsaXNpb25XaXRoIiwiaiIsImZvdW5kQm90dG9tTGluZSIsIm1vdmUiLCJHYW1lVmlldyIsImN0eCIsInN0YXJ0IiwidGhhdCIsImRyYXciLCJzZXRJbnRlcnZhbCIsIk1vdmluZ09iamVjdCIsIm9iaiIsInZlbCIsImNvbG9yIiwic3Ryb2tlUmVjdCIsImxpbmVXaWR0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJDT0xPUlMiLCJyYW5kb21WZWMiLCJjYWxsIiwiaW5oZXJpdHMiLCJzY2FsZSIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1dG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCQyxVQUExQixFQUFzQ0MsT0FBdEMsRUFBK0NDLE9BQS9DLEVBQXdEO0FBQ3RERixZQUFVLEdBQUc7QUFDWEcsS0FBQyxFQUFFSixDQUFDLENBQUNLLE9BQUYsR0FBWUgsT0FESjtBQUVYSSxLQUFDLEVBQUVOLENBQUMsQ0FBQ08sT0FBRixHQUFZSjtBQUZKLEdBQWI7QUFJQUssT0FBSyxzQkFBZVAsVUFBVSxDQUFDRyxDQUExQixjQUErQkgsVUFBVSxDQUFDSyxDQUExQyxFQUFMO0FBQ0EsU0FBT0wsVUFBUDtBQUNEOztBQUVEUSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNBLE1BQU1aLE9BQU8sR0FBR1MsTUFBTSxDQUFDSSxVQUF2QjtBQUNBLE1BQU1aLE9BQU8sR0FBR1EsTUFBTSxDQUFDSyxTQUF2QixDQUprRCxDQUtsRDs7QUFDQSxNQUFJZixVQUFKLENBTmtELENBT2xEO0FBQ0E7QUFDQTtBQUNBOztBQUNBZ0IsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJQyxxREFBSixDQUFTVCxNQUFULENBQWIsQ0Faa0QsQ0FhbEQ7QUFDQTtBQUNBO0FBQ0QsQ0FoQkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsSUFBTVUsTUFBTSxHQUFHLENBQ1gsR0FEVyxFQUVYLEdBRlcsRUFHWCxHQUhXLENBQWY7QUFNQSxJQUFNQyxPQUFPLEdBQUcsWUFBaEI7O0lBRXFCQyxRO0FBQ2pCLG9CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0UsV0FBTCxHQUFtQixLQUFLSCxjQUFMLEVBQW5CO0FBQ0g7Ozs7NkJBRVNJLFUsRUFBWTtBQUNsQixhQUFPQSxVQUFVLENBQ1JDLEtBREYsQ0FDUSxFQURSLEVBRUVDLEdBRkYsQ0FFTSxVQUFDQyxDQUFEO0FBQUEsZUFBUTtBQUFFQyxjQUFJLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxFQUFSO0FBQXVCQyxlQUFLLEVBQUVKO0FBQTlCLFNBQVI7QUFBQSxPQUZOLEVBR0VDLElBSEYsQ0FHTyxVQUFDRCxDQUFELEVBQUlLLENBQUo7QUFBQSxlQUFVTCxDQUFDLENBQUNDLElBQUYsR0FBU0ksQ0FBQyxDQUFDSixJQUFyQjtBQUFBLE9BSFAsRUFJRUYsR0FKRixDQUlNLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNJLEtBQVQ7QUFBQSxPQUpOLEVBS0VFLElBTEYsQ0FLTyxFQUxQLENBQVA7QUFNSDs7O3FDQUVnQjtBQUNiLFVBQU1DLE1BQU0sR0FBR0wsSUFBSSxDQUFDTSxLQUFMLENBQVlOLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUFqQixHQUF1QixDQUFsQyxJQUF1QyxDQUF0RDtBQUNBLFVBQU1NLFNBQVMsR0FBR1AsSUFBSSxDQUFDTSxLQUFMLENBQVlOLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUFqQixHQUF1QixDQUFsQyxJQUF1QyxDQUF6RDtBQUNBLFVBQU1PLFNBQVMsR0FBR1IsSUFBSSxDQUFDTSxLQUFMLENBQVlOLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUFqQixHQUF1QixDQUFsQyxJQUF1QyxDQUF6RDtBQUNBLFVBQU1RLE1BQU0sR0FBR3RCLE1BQU0sQ0FBQ2EsSUFBSSxDQUFDTSxLQUFMLENBQVlOLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUFqQixHQUF1QixDQUFsQyxDQUFELENBQXJCO0FBQ0EsVUFBSVMsSUFBSSxHQUFHLEtBQUtDLFFBQUwsQ0FBY3ZCLE9BQWQsRUFBdUJ3QixLQUF2QixDQUNQTCxTQURPLEVBRVBBLFNBQVMsR0FBR0YsTUFGTCxDQUFYO0FBSUEsVUFBSVEsSUFBSSxHQUFHLEtBQUtGLFFBQUwsQ0FBY3ZCLE9BQWQsRUFBdUJ3QixLQUF2QixDQUNQSixTQURPLEVBRVBBLFNBQVMsR0FBR0gsTUFGTCxDQUFYLENBVGEsQ0FhYjs7QUFDQSxVQUFJUyxRQUFRLENBQUNKLElBQUQsQ0FBUixHQUFpQkksUUFBUSxDQUFDRCxJQUFELENBQXpCLElBQW1DSixNQUFNLEtBQUssR0FBbEQsRUFBdUQ7QUFDbkQsWUFBTU0sSUFBSSxHQUFHTCxJQUFiO0FBQ0FBLFlBQUksR0FBR0csSUFBUDtBQUNBQSxZQUFJLEdBQUdFLElBQVA7QUFDSDs7QUFDRCxVQUFNQyxRQUFRLHFCQUFjTixJQUFkLGNBQXNCRCxNQUF0QixjQUFnQ0ksSUFBaEMsTUFBZDtBQUNBLGFBQU9HLFFBQVA7QUFDSDs7O2dDQUVXQSxRLEVBQVM7QUFDakIsVUFBSUMsR0FBRyxHQUFHRCxRQUFRLENBQUNwQixLQUFULENBQWUsR0FBZixDQUFWO0FBQ0EsVUFBSWMsSUFBSSxHQUFHSSxRQUFRLENBQUNHLEdBQUcsQ0FBQyxDQUFELENBQUosQ0FBbkI7QUFDQSxVQUFJSixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLENBQUQsQ0FBSixDQUFuQjs7QUFDQSxjQUFPQSxHQUFHLENBQUMsQ0FBRCxDQUFWO0FBQ0ksYUFBSyxHQUFMO0FBQ0ksaUJBQU9QLElBQUksR0FBR0csSUFBZDs7QUFDSixhQUFLLEdBQUw7QUFDSSxpQkFBT0gsSUFBSSxHQUFHRyxJQUFkOztBQUNKLGFBQUssR0FBTDtBQUNJLGlCQUFPSCxJQUFJLEdBQUdHLElBQWQ7QUFOUjtBQVFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVETDtBQUNBO0FBQ0E7O0FBQ0EsSUFBTWxELElBQUksR0FBR0MsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFFQSxJQUFNc0QsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxHQUFSLEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixHQUF2QixFQUE0QixHQUE1QixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0QyxFQUEyQyxHQUEzQyxDQUFkO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLEdBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsR0FBZjtBQUNBLElBQU1DLEtBQUssR0FBRyxHQUFkOztJQUVxQnBDLEk7QUFDbkIsZ0JBQVlULE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDbEIsU0FBS0UsT0FBTCxHQUFlRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLFFBQU1aLE9BQU8sR0FBR1MsTUFBTSxDQUFDSSxVQUF2QjtBQUNBLFFBQU1aLE9BQU8sR0FBR1EsTUFBTSxDQUFDSyxTQUF2QjtBQUNBLFNBQUt5QyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQWY7QUFFQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JyQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUszQixhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUIyQixJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUtzQyxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJ0QyxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUt1QyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0J2QyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUt3QyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJ4QyxJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNBLFNBQUt5QyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhekMsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0EsU0FBSzBDLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQjFDLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsU0FBSzJDLHVCQUFMLEdBQStCLEtBQUtBLHVCQUFMLENBQTZCM0MsSUFBN0IsQ0FBa0MsSUFBbEMsQ0FBL0I7QUFDQSxTQUFLNEMsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCNUMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQSxTQUFLNkMsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWM3QyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBRUEsU0FBSytCLFVBQUwsR0FBa0IsS0FBS00sWUFBTCxDQUFrQixLQUFLbEQsT0FBdkIsRUFBZ0N1QyxVQUFoQyxFQUE0QyxLQUFLSyxVQUFqRCxDQUFsQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsS0FBS00sYUFBTCxDQUFtQixLQUFLbkQsT0FBeEIsRUFBaUMsS0FBSzZDLGNBQXRDLENBQXRCO0FBRUEsUUFBTVIsUUFBUSxHQUFHLElBQUkzQixpREFBSixFQUFqQjtBQUNBLFFBQU1pRCxLQUFLLEdBQUd0QixRQUFRLENBQUN6QixjQUFULEVBQWQsQ0ExQmtCLENBMkJsQjs7QUFDQSxTQUFLRSxXQUFMLEdBQW1CdUIsUUFBUSxDQUFDdkIsV0FBVCxDQUFxQjZDLEtBQXJCLENBQW5CO0FBRUEsU0FBS0wsT0FBTCxDQUFhLEtBQUt0RCxPQUFsQixFQUEyQjJELEtBQTNCLEVBQWtDLEtBQUtmLFVBQXZDLEVBQW1ELEtBQUtDLGNBQXhEO0FBRUEvQyxVQUFNLENBQUNELGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLFVBQUNWLENBQUQ7QUFBQSxhQUNuQyxLQUFJLENBQUNELGFBQUwsQ0FBbUJDLENBQW5CLEVBQXNCRSxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0MsS0FBSSxDQUFDVSxPQUE3QyxDQURtQztBQUFBLEtBQXJDO0FBR0FKLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ1YsQ0FBRDtBQUFBLGFBQ25DLEtBQUksQ0FBQ3NFLFVBQUwsQ0FBZ0J0RSxDQUFoQixFQUFtQixLQUFJLENBQUNhLE9BQXhCLEVBQWlDLEtBQUksQ0FBQzRDLFVBQXRDLEVBQWtELEtBQUksQ0FBQ0MsY0FBdkQsQ0FEbUM7QUFBQSxLQUFyQztBQUdEOzs7OytCQUVVMUQsQyxFQUFHYSxPLEVBQVM0QyxVLEVBQVlDLGMsRUFBZ0I7QUFDakQ7QUFDQTFELE9BQUMsQ0FBQ3lFLGNBQUY7O0FBQ0EsVUFBSXpFLENBQUMsQ0FBQzBFLEdBQUYsSUFBUyxPQUFiLEVBQXNCO0FBQ3BCLGFBQUtiLE9BQUwsR0FBZSxJQUFmO0FBQ0EsYUFBS2MsV0FBTCxDQUFpQjlELE9BQWpCLEVBQTBCNEMsVUFBMUIsRUFBc0NDLGNBQXRDO0FBQ0Q7QUFDRjs7O2dDQUVXN0MsTyxFQUFTNEMsVSxFQUFZQyxjLEVBQWdCO0FBQy9DakQsY0FBUSxDQUFDRyxjQUFULENBQXdCLFdBQXhCLEVBQXFDZ0UsU0FBckMsQ0FBK0NDLEdBQS9DLENBQW1ELFFBQW5EO0FBQ0EsVUFBTTNCLFFBQVEsR0FBRyxJQUFJM0IsaURBQUosRUFBakI7QUFDQSxVQUFNaUQsS0FBSyxHQUFHdEIsUUFBUSxDQUFDekIsY0FBVCxFQUFkO0FBQ0EsV0FBSzBDLE9BQUwsQ0FBYXRELE9BQWIsRUFBc0IyRCxLQUF0QixFQUE2QmYsVUFBN0IsRUFBeUNDLGNBQXpDO0FBQ0Q7OzsrQkFFVztBQUNOLFVBQUksS0FBS0ksT0FBVCxFQUFrQjtBQUNkZ0IsNEJBQW9CLENBQUMsS0FBS2hCLE9BQU4sQ0FBcEI7QUFDSDs7QUFDRDtBQUNBLFdBQUtELE9BQUwsR0FBZSxLQUFmO0FBQ0E1QyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTCxPQUFqQjtBQUNBLFdBQUtBLE9BQUwsQ0FBYWtFLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkJ6QixLQUE3QixFQUFvQ0MsTUFBcEM7QUFDQTlDLGNBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixFQUFtQ2dFLFNBQW5DLENBQTZDQyxHQUE3QyxDQUFpRCxTQUFqRDtBQUNIOzs7bUNBRWEsQ0FFYjs7OzRDQUV1QkcsVSxFQUFZO0FBQUE7O0FBQ2hDL0QsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBSzBDLFVBQWpCO0FBQ0EzQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLdUMsVUFBakI7QUFDQSxXQUFLRyxVQUFMLENBQWdCcUIsT0FBaEIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pDLFlBQUksTUFBSSxDQUFDdkQsV0FBTCxHQUFtQixFQUF2QixFQUEyQjtBQUN2QixjQUFJdUQsR0FBRyxDQUFDQyxJQUFKLEtBQWEsTUFBSSxDQUFDeEQsV0FBbEIsSUFBaUN1RCxHQUFHLENBQUNFLEdBQUosQ0FBUSxDQUFSLE1BQWUsR0FBcEQsRUFBeUQ7QUFDekQsbUJBQU8sTUFBSSxDQUFDM0IsVUFBTCxDQUFnQnlCLEdBQUcsQ0FBQ0UsR0FBSixDQUFRLENBQVIsQ0FBaEIsQ0FBUDtBQUNBLGtCQUFJLENBQUN4QixVQUFMLEdBQWtCLEVBQWxCO0FBQ0EzQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBSSxDQUFDdUMsVUFBakI7QUFDQXhDLG1CQUFPLENBQUNDLEdBQVI7QUFDQyxXQUxELE1BS08sSUFBSWdFLEdBQUcsQ0FBQ0MsSUFBSixLQUFhLE1BQUksQ0FBQ3hELFdBQXRCLEVBQW1DLENBQ3pDO0FBQ0o7QUFDQSxPQVZEO0FBV0FWLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtTLFdBQWpCO0FBQ0g7OztrQ0FFVzNCLEMsRUFBR0UsTyxFQUFTQyxPLEVBQVM7QUFDakMsVUFBTUYsVUFBVSxHQUFHO0FBQ2pCRyxTQUFDLEVBQUVKLENBQUMsQ0FBQ0ssT0FBRixHQUFZSCxPQURFO0FBRWpCSSxTQUFDLEVBQUU0QixJQUFJLENBQUNtRCxHQUFMLENBQVNyRixDQUFDLENBQUNPLE9BQUYsR0FBWUosT0FBckIsSUFBZ0M7QUFGbEIsT0FBbkI7QUFJQUssV0FBSyxzQkFBZVAsVUFBVSxDQUFDRyxDQUExQixjQUErQkgsVUFBVSxDQUFDSyxDQUExQyxFQUFMO0FBQ0EsVUFBTTBFLFVBQVUsR0FBRyxLQUFLTSx5QkFBTCxDQUErQnJGLFVBQVUsQ0FBQ0csQ0FBMUMsQ0FBbkI7QUFDQSxVQUFJbUYsUUFBSjtBQUNBLFVBQUlDLFVBQUo7QUFDQSxVQUFJQyxRQUFRLEdBQUcsQ0FBQyxLQUFLaEMsVUFBTCxDQUFnQnVCLFVBQWhCLENBQUQsQ0FBZjs7QUFDQSxVQUFJLEtBQUt0QixjQUFMLENBQW9CZ0MsY0FBcEIsQ0FBbUNWLFVBQW5DLENBQUosRUFBb0Q7QUFDbERPLGdCQUFRLEdBQUcsS0FBSzdCLGNBQUwsQ0FBb0JzQixVQUFwQixDQUFYO0FBQ0FRLGtCQUFVLEdBQUdELFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQkYsUUFBaEIsQ0FBYjtBQUNELE9BSEQsTUFHTztBQUNMRCxrQkFBVSxHQUFHQyxRQUFiO0FBQ0Q7O0FBQ0Q7QUFDQXhFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZc0UsVUFBWjs7QUFDQSxXQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLFVBQVUsQ0FBQ2pELE1BQS9CLEVBQXVDcUQsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQyxZQUFJVixHQUFHLEdBQUdNLFVBQVUsQ0FBQ0ksQ0FBRCxDQUFwQjtBQUNBLFlBQU1DLElBQUksR0FBR1gsR0FBRyxDQUFDRSxHQUFKLENBQVEsQ0FBUixDQUFiO0FBQ0EsWUFBTVUsS0FBSyxHQUFHWixHQUFHLENBQUNFLEdBQUosQ0FBUSxDQUFSLElBQWEsRUFBM0I7QUFDQSxZQUFNVyxHQUFHLEdBQUdiLEdBQUcsQ0FBQ0UsR0FBSixDQUFRLENBQVIsQ0FBWjtBQUNBLFlBQU1ZLE1BQU0sR0FBR2QsR0FBRyxDQUFDRSxHQUFKLENBQVEsQ0FBUixJQUFhLEVBQTVCOztBQUNBLFlBQ0VuRixVQUFVLENBQUNHLENBQVgsSUFBZ0J5RixJQUFoQixJQUNBNUYsVUFBVSxDQUFDRyxDQUFYLElBQWdCMEYsS0FEaEIsSUFFQTdGLFVBQVUsQ0FBQ0ssQ0FBWCxJQUFnQnlGLEdBRmhCLElBR0E5RixVQUFVLENBQUNLLENBQVgsSUFBZ0IwRixNQUpsQixFQUtFO0FBQ0EvRSxpQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBSzBDLFVBQWpCO0FBQ0EsZUFBS0EsVUFBTCxDQUFnQnFDLElBQWhCLENBQXFCZixHQUFyQjtBQUNBMUUsZUFBSyxDQUFDMEUsR0FBRyxDQUFDQyxJQUFMLENBQUw7QUFDQWxFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLMEMsVUFBakI7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0QsV0FBS1MsdUJBQUwsQ0FBNkJXLFVBQTdCO0FBQ0Q7Ozs4Q0FFeUJrQixVLEVBQVk7QUFDcEMsVUFBSU4sQ0FBQyxHQUFHLENBQVI7QUFDQSxVQUFJeEYsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsYUFBT3dGLENBQUMsR0FBRyxFQUFYLEVBQWU7QUFDYixZQUFJTSxVQUFVLEdBQUc5RixDQUFiLElBQWtCOEYsVUFBVSxHQUFHOUYsQ0FBQyxHQUFHLEVBQXZDLEVBQTJDO0FBQ3pDLGlCQUFPQSxDQUFQO0FBQ0Q7O0FBQ0RBLFNBQUMsSUFBSSxFQUFMO0FBQ0F3RixTQUFDLElBQUksQ0FBTDtBQUNEO0FBQ0Y7OztpQ0FFWS9FLE8sRUFBU3FDLFEsRUFBVTtBQUM5QnJDLGFBQU8sQ0FBQ3NGLFdBQVIsR0FBc0IsT0FBdEI7QUFDQXRGLGFBQU8sQ0FBQ3VGLElBQVIsR0FBZSxjQUFmO0FBQ0F2RixhQUFPLENBQUN3RixVQUFSLENBQW1CbkQsUUFBbkIsRUFBNkIsR0FBN0IsRUFBa0MsRUFBbEM7QUFDRDs7O2lDQUVZckMsTyxFQUFTdUMsVSxFQUFZSyxVLEVBQVk7QUFDNUMsVUFBSXlCLEdBQUo7QUFDQSxVQUFJb0IsTUFBTSxHQUFHLENBQWI7O0FBQ0EsV0FBSyxJQUFJVixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeEMsVUFBcEIsRUFBZ0N3QyxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DVixXQUFHLEdBQUdoRCxJQUFJLENBQUNNLEtBQUwsQ0FBV04sSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQTNCLElBQWlDLEVBQXZDO0FBQ0EsWUFBTW9FLFNBQVMsR0FBRyxJQUFJQyxnREFBSixDQUFZLENBQUNGLE1BQUQsRUFBUyxHQUFULENBQVosRUFBMkJwQixHQUEzQixDQUFsQjtBQUNBcUIsaUJBQVMsQ0FBQ0UsVUFBVixDQUFxQjVGLE9BQXJCO0FBQ0E0QyxrQkFBVSxDQUFDNkMsTUFBRCxDQUFWLEdBQXFCQyxTQUFyQjtBQUNBRCxjQUFNLElBQUksRUFBVjtBQUNEOztBQUNELGFBQU83QyxVQUFQO0FBQ0Q7OztnQ0FFVzVDLE8sRUFBUzRDLFUsRUFBWUMsYyxFQUFnQjtBQUMvQ2dELFlBQU0sQ0FBQ0MsSUFBUCxDQUFZbEQsVUFBWixFQUF3QndCLE9BQXhCLENBQWdDLFVBQUNHLEdBQUQsRUFBUztBQUN2QyxZQUFNd0IsRUFBRSxHQUFHbkQsVUFBVSxDQUFDMkIsR0FBRCxDQUFyQjtBQUNBd0IsVUFBRSxDQUFDSCxVQUFILENBQWM1RixPQUFkO0FBQ0QsT0FIRDtBQUlBNkYsWUFBTSxDQUFDRyxNQUFQLENBQWNuRCxjQUFkLEVBQThCdUIsT0FBOUIsQ0FBc0MsVUFBQ0MsR0FBRCxFQUFTO0FBQzdDLGFBQUssSUFBSVUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsR0FBRyxDQUFDM0MsTUFBeEIsRUFBZ0NxRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DVixhQUFHLENBQUNVLENBQUQsQ0FBSCxDQUFPYSxVQUFQLENBQWtCNUYsT0FBbEI7QUFDRDtBQUNGLE9BSkQ7QUFLRDs7O3NEQUVpQztBQUNoQyxVQUFNVCxDQUFDLEdBQUdpRCxLQUFLLENBQUNuQixJQUFJLENBQUNNLEtBQUwsQ0FBV04sSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQTNCLElBQWlDLEVBQWxDLENBQWY7QUFDQSxVQUFNN0IsQ0FBQyxHQUFHLEVBQVY7QUFDQSxhQUFPLENBQUNGLENBQUQsRUFBSUUsQ0FBSixDQUFQO0FBQ0Q7OztrQ0FFYU8sTyxFQUFTNkMsYyxFQUFnQjtBQUNyQyxVQUFNMEIsR0FBRyxHQUFHLEtBQUswQiwrQkFBTCxFQUFaO0FBQ0EsVUFBTTVCLEdBQUcsR0FBR2hELElBQUksQ0FBQ00sS0FBTCxDQUFXTixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsRUFBN0M7QUFDQSxVQUFNNEUsVUFBVSxHQUFHLElBQUlQLGdEQUFKLENBQVlwQixHQUFaLEVBQWlCRixHQUFqQixDQUFuQjtBQUNBNkIsZ0JBQVUsQ0FBQ04sVUFBWCxDQUFzQjVGLE9BQXRCO0FBQ0E2QyxvQkFBYyxDQUFDMEIsR0FBRyxDQUFDLENBQUQsQ0FBSixDQUFkLEdBQXlCMUIsY0FBYyxDQUFDMEIsR0FBRyxDQUFDLENBQUQsQ0FBSixDQUFkLElBQTBCLEVBQW5EO0FBQ0ExQixvQkFBYyxDQUFDMEIsR0FBRyxDQUFDLENBQUQsQ0FBSixDQUFkLENBQXVCYSxJQUF2QixDQUE0QmMsVUFBNUI7O0FBQ0EsVUFBSXJELGNBQWMsQ0FBQzBCLEdBQUcsQ0FBQyxDQUFELENBQUosQ0FBZCxDQUF1QjdDLE1BQXZCLEtBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQ0YsYUFBS2dDLFFBQUw7QUFDRDs7QUFDRCxhQUFPYixjQUFQO0FBQ0Q7Ozs0QkFFTzdDLE8sRUFBU3FDLFEsRUFBVU8sVSxFQUFZQyxjLEVBQWdCO0FBQUE7O0FBQ3JELFVBQUksS0FBS0csT0FBTCxLQUFpQixJQUFyQixFQUEyQjtBQUN6QixhQUFLRixNQUFMLElBQWUsQ0FBZjs7QUFDQSxZQUFJLEtBQUtBLE1BQUwsR0FBYyxFQUFsQixFQUFzQjtBQUNwQixlQUFLSyxhQUFMLENBQW1CbkQsT0FBbkIsRUFBNEI2QyxjQUE1QjtBQUNBLGVBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0Q7O0FBQ0Q5QyxlQUFPLENBQUNrRSxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCekIsS0FBeEIsRUFBK0JDLE1BQS9CO0FBQ0EsYUFBS1UsWUFBTCxDQUFrQnBELE9BQWxCLEVBQTJCcUMsUUFBM0I7QUFDQSxhQUFLOEQsV0FBTDtBQUNBLGFBQUs5QyxXQUFMLENBQWlCckQsT0FBakIsRUFBMEI0QyxVQUExQixFQUFzQ0MsY0FBdEM7O0FBRUEsWUFBTXVELFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsaUJBQ2YsTUFBSSxDQUFDOUMsT0FBTCxDQUFhdEQsT0FBYixFQUFzQnFDLFFBQXRCLEVBQWdDTyxVQUFoQyxFQUE0Q0MsY0FBNUMsQ0FEZTtBQUFBLFNBQWpCOztBQUdBLGFBQUtJLE9BQUwsR0FBZW9ELHFCQUFxQixDQUFDRCxRQUFELENBQXBDO0FBQ0Q7QUFDRjs7O29DQUVlN0IsRyxFQUFLK0Isc0IsRUFBd0I7QUFDM0MsVUFBTUMsYUFBYSxHQUFHLEtBQUsxRCxjQUFMLENBQW9CMEIsR0FBRyxDQUFDLENBQUQsQ0FBdkIsQ0FBdEI7QUFDQSxVQUFJaUMsV0FBSjs7QUFDQSxVQUFJRixzQkFBc0IsSUFBSSxDQUE5QixFQUFpQztBQUMvQixZQUFNakMsR0FBRyxHQUFHa0MsYUFBYSxDQUFDRCxzQkFBRCxDQUF6QjtBQUNBRSxtQkFBVyxHQUFHRCxhQUFhLENBQUNELHNCQUFzQixHQUFHLENBQTFCLENBQTNCO0FBQ0EsZUFBT2pDLEdBQUcsQ0FBQ29DLGtCQUFKLENBQXVCRCxXQUF2QixDQUFQO0FBQ0Q7QUFDRjs7O2tDQUVhO0FBQ1osVUFBSTdGLE9BQU8sR0FBR2tGLE1BQU0sQ0FBQ0csTUFBUCxDQUFjLEtBQUtuRCxjQUFuQixDQUFkOztBQUNBLFdBQUssSUFBSWtDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwRSxPQUFPLENBQUNlLE1BQTVCLEVBQW9DcUQsQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxhQUFLLElBQUkyQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHL0YsT0FBTyxDQUFDb0UsQ0FBRCxDQUFQLENBQVdyRCxNQUEvQixFQUF1Q2dGLENBQUMsRUFBeEMsRUFBNEM7QUFDMUMsY0FBSSxDQUFDLEtBQUtuRCxlQUFMLENBQXFCNUMsT0FBTyxDQUFDb0UsQ0FBRCxDQUFQLENBQVcyQixDQUFYLEVBQWNuQyxHQUFuQyxFQUF3Q21DLENBQXhDLENBQUwsRUFBaUQ7QUFDL0MsZ0JBQU1DLGVBQWUsR0FBRyxLQUFLL0QsVUFBTCxDQUFnQmlDLGNBQWhCLENBQStCLENBQ3JEbEUsT0FBTyxDQUFDb0UsQ0FBRCxDQUFQLENBQVcyQixDQUFYLEVBQWNuQyxHQUFkLENBQWtCLENBQWxCLENBRHFELENBQS9CLENBQXhCO0FBR0E1RCxtQkFBTyxDQUFDb0UsQ0FBRCxDQUFQLENBQVcyQixDQUFYLEVBQWNFLElBQWQsQ0FBbUJELGVBQW5CO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BQSDs7SUFFcUJFLFE7QUFDakIsb0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDYixTQUFLeEcsSUFBTCxHQUFZLElBQUlDLDZDQUFKLENBQVN1RyxHQUFULENBQVo7QUFDQSxTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXbEcsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0EsU0FBS3lDLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWF6QyxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDSDs7Ozs0QkFFTztBQUNKLFVBQUltRyxJQUFJLEdBQUcsSUFBWDs7QUFDQSxVQUFNWixRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3pCWSxZQUFJLENBQUMxRyxJQUFMLENBQVU2RixXQUFWLElBQ0FhLElBQUksQ0FBQzFHLElBQUwsQ0FBVTJHLElBQVYsQ0FBZUQsSUFBSSxDQUFDRixHQUFwQixDQURBO0FBRUgsT0FIRDs7QUFJQUksaUJBQVcsQ0FBQ2QsUUFBUSxDQUFDdkYsSUFBVCxDQUFjbUcsSUFBZCxDQUFELEVBQXNCLEVBQXRCLENBQVg7QUFDSDs7OzhCQUVTO0FBQ04sV0FBSzFHLElBQUwsQ0FBVTZGLFdBQVY7QUFDQUUsMkJBQXFCLENBQUMsS0FBSy9DLE9BQU4sQ0FBckI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0QmdCNkQsWTtBQUNqQix3QkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNiLFNBQUs3QyxHQUFMLEdBQVc2QyxHQUFHLENBQUMsS0FBRCxDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXRCxHQUFHLENBQUMsS0FBRCxDQUFkO0FBQ0EsU0FBS0UsS0FBTCxHQUFhRixHQUFHLENBQUMsT0FBRCxDQUFoQjtBQUNBLFNBQUs5QyxJQUFMLEdBQVk4QyxHQUFHLENBQUMsTUFBRCxDQUFmO0FBQ0EsU0FBS3hCLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQi9FLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0EsU0FBSytGLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVUvRixJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0EsU0FBSzRGLGtCQUFMLEdBQTBCLEtBQUtBLGtCQUFMLENBQXdCNUYsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBMUI7QUFDSDs7OzsrQkFFVWlHLEcsRUFBSztBQUNaQSxTQUFHLENBQUN4QixXQUFKLEdBQWtCLEtBQWxCO0FBQ0F3QixTQUFHLENBQUNTLFVBQUosQ0FBZSxLQUFLaEQsR0FBTCxDQUFTLENBQVQsQ0FBZixFQUE0QixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUE1QixFQUF5QyxFQUF6QyxFQUE2QyxFQUE3QztBQUNBdUMsU0FBRyxDQUFDVSxTQUFKLEdBQWdCLENBQWhCO0FBQ0FWLFNBQUcsQ0FBQ1csU0FBSixHQUFnQixPQUFoQjtBQUNBWCxTQUFHLENBQUNZLFFBQUosQ0FBYSxLQUFLbkQsR0FBTCxDQUFTLENBQVQsQ0FBYixFQUEwQixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUExQixFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQztBQUNBdUMsU0FBRyxDQUFDVyxTQUFKLEdBQWdCLEtBQUtILEtBQXJCO0FBQ0FSLFNBQUcsQ0FBQ3ZCLElBQUosR0FBVyxjQUFYO0FBQ0F1QixTQUFHLENBQUNhLFNBQUosR0FBZ0IsUUFBaEI7QUFDQWIsU0FBRyxDQUFDYyxZQUFKLEdBQW1CLFFBQW5CO0FBQ0FkLFNBQUcsQ0FBQ2UsUUFBSixDQUFhLEtBQUt2RCxJQUFsQixFQUF3QixLQUFLQyxHQUFMLENBQVMsQ0FBVCxJQUFjLEVBQXRDLEVBQTBDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULElBQWMsRUFBeEQ7QUFDSDs7O3lCQUVJb0MsZSxFQUFpQjtBQUNsQnZHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZc0csZUFBWjs7QUFDQSxVQUFJQSxlQUFlLElBQUksS0FBS3BDLEdBQUwsQ0FBUyxDQUFULEtBQWUsR0FBdEMsRUFBMkM7QUFDdkMsYUFBS0EsR0FBTCxDQUFTLENBQVQ7QUFDSCxPQUZELE1BRU8sSUFBSSxDQUFDb0MsZUFBRCxJQUFvQixLQUFLcEMsR0FBTCxDQUFTLENBQVQsS0FBZSxHQUF2QyxFQUE0QztBQUMvQyxhQUFLQSxHQUFMLENBQVMsQ0FBVDtBQUNILE9BRk0sTUFFQTtBQUNMLGFBQUtBLEdBQUwsQ0FBUyxDQUFULEtBQWUsRUFBZjtBQUNEO0FBQ0o7Ozt1Q0FFa0JpQyxXLEVBQWE7QUFDNUIsYUFBTyxLQUFLakMsR0FBTCxDQUFTLENBQVQsS0FBZWlDLFdBQVcsQ0FBQ2pDLEdBQVosQ0FBZ0IsQ0FBaEIsSUFBcUIsRUFBM0M7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0w7O0FBQ0EsSUFBTXZGLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFDQSxJQUFNNkksTUFBTSxHQUFHO0FBQ2IsS0FBRyxTQURVO0FBRWIsS0FBRyxTQUZVO0FBR2IsS0FBRyxTQUhVO0FBSWIsS0FBRyxTQUpVO0FBS2IsS0FBRyxTQUxVO0FBTWIsS0FBRyxTQU5VO0FBT2IsS0FBRyxTQVBVO0FBUWIsS0FBRyxTQVJVO0FBU2IsS0FBRyxTQVRVO0FBVWIsS0FBRztBQVZVLENBQWY7O0lBWXFCbkMsTyxHQUNqQixpQkFBWXBCLEdBQVosRUFBaUJELElBQWpCLEVBQXVCO0FBQUE7O0FBQ25CO0FBQ0EsT0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsTUFBTThDLEdBQUcsR0FBRztBQUNWN0MsT0FBRyxFQUFFQSxHQURLO0FBRVY4QyxPQUFHLEVBQUVySSxJQUFJLENBQUMrSSxTQUFMLENBQWUsQ0FBZixDQUZLO0FBR1ZULFNBQUssRUFBRVEsTUFBTSxDQUFDLEtBQUt4RCxJQUFOLENBSEg7QUFJVkEsUUFBSSxFQUFFLEtBQUtBO0FBSkQsR0FBWjtBQU1BNkMsd0RBQVksQ0FBQ2EsSUFBYixDQUFrQixJQUFsQixFQUF3QlosR0FBeEI7QUFDSCxDOzs7QUFDSjtBQUVEcEksSUFBSSxDQUFDaUosUUFBTCxDQUFjdEMsT0FBZCxFQUF1QndCLHNEQUF2QixFOzs7Ozs7Ozs7OztBQzVCQSxJQUFNbkksSUFBSSxHQUFHO0FBQ1QrSSxXQURTLHFCQUNDckcsTUFERCxFQUNTO0FBQ2QsV0FBTzFDLElBQUksQ0FBQ2tKLEtBQUwsQ0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsRUFBbUJ4RyxNQUFuQixDQUFQO0FBQ0gsR0FIUTtBQUlUd0csT0FKUyxpQkFJSEMsR0FKRyxFQUlFQyxDQUpGLEVBSUs7QUFDVixXQUFPLENBQUMsQ0FBRCxFQUFJRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVFDLENBQVosQ0FBUDtBQUNILEdBTlE7QUFPVEMsUUFQUyxrQkFPRmhFLEdBUEUsRUFPRztBQUNSLFdBQU9oRCxJQUFJLENBQUNNLEtBQUwsQ0FBV04sSUFBSSxDQUFDQyxNQUFMLEtBQWdCK0MsR0FBM0IsQ0FBUDtBQUNIO0FBVFEsQ0FBYjs7QUFZQXJGLElBQUksQ0FBQ2lKLFFBQUwsR0FBZ0IsVUFBU0ssVUFBVCxFQUFxQkMsV0FBckIsRUFBa0M7QUFDOUMsV0FBU0MsU0FBVCxHQUFxQixDQUFFOztBQUFBO0FBQ3ZCQSxXQUFTLENBQUNDLFNBQVYsR0FBc0JGLFdBQVcsQ0FBQ0UsU0FBbEM7QUFDQUgsWUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELFNBQUosRUFBdkI7QUFDQUYsWUFBVSxDQUFDRyxTQUFYLENBQXFCQyxVQUFyQixHQUFrQ0osVUFBbEM7QUFDSCxDQUxEOztBQU9BSyxNQUFNLENBQUNDLE9BQVAsR0FBaUI1SixJQUFqQixDOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL3NjcmlwdHMvbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL3NjcmlwdHMvbnVtYmVycyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrKGUsIGNsaWNrZWRQb3MsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgY2xpY2tlZFBvcyA9IHtcbiAgICB4OiBlLmNsaWVudFggLSBvZmZzZXRYLFxuICAgIHk6IGUuY2xpZW50WSAtIG9mZnNldFksXG4gIH07XG4gIGFsZXJ0KGBjbGlja2VkIGF0ICR7Y2xpY2tlZFBvcy54fSAke2NsaWNrZWRQb3MueX1gKTtcbiAgcmV0dXJuIGNsaWNrZWRQb3M7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IG9mZnNldFggPSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgY29uc3Qgb2Zmc2V0WSA9IGNhbnZhcy5vZmZzZXRUb3A7XG4gIC8vIGNvbnNvbGUubG9nKGBvZmZzZXRYOiAke29mZnNldFh9IG9mZnNldFk6ICR7b2Zmc2V0WX1gKTtcbiAgbGV0IGNsaWNrZWRQb3M7XG4gIC8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PlxuICAvLyAgIHJlZ2lzdGVyQ2xpY2soZSwgY2xpY2tlZFBvcywgb2Zmc2V0WCwgb2Zmc2V0WSlcbiAgLy8gKTtcbiAgLy8gY29uc29sZS5sb2coY2xpY2tlZFBvcyk7XG4gIGNvbnNvbGUubG9nKCdJdHMgd29ya2luZycpO1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgLy8gY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY29udGV4dCk7XG4gIC8vIGdhbWVWaWV3LnN0YXJ0KCk7XG4gIC8vIGdhbWUuSW5pdGlhbExheWVyKGNvbnRleHQpO1xufSkiLCJjb25zdCBNQVRIT1AgPSBbXG4gICAgJysnLCBcbiAgICAnLScsXG4gICAgJyonXG5dXG5cbmNvbnN0IE5VTUJFUlMgPSAnMDEyMzQ1Njc4OSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJzKSB7XG4gICAgICAgIHRoaXMubnVtYmVycyA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMuY3JlYXRlRXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRBbnN3ZXIgPSB0aGlzLnJpZ2h0QW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RXF1YXRpb24gPSB0aGlzLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZWQgKHVuc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuc2h1ZmZsZWRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoeyBzb3J0OiBNYXRoLnJhbmRvbSgpLCB2YWx1ZTogYSB9KSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0IC0gYi5zb3J0KVxuICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IGEudmFsdWUpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZUVxdWF0aW9uKCkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgMykgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTEgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBzdGFydE51bTIgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTApICUgNCkgKyAxO1xuICAgICAgICBjb25zdCBtYXRoT3AgPSBNQVRIT1BbTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIpXTtcbiAgICAgICAgbGV0IG51bTEgPSB0aGlzLnNodWZmbGVkKE5VTUJFUlMpLnNsaWNlKFxuICAgICAgICAgICAgc3RhcnROdW0xLFxuICAgICAgICAgICAgc3RhcnROdW0xICsgbGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxldCBudW0yID0gdGhpcy5zaHVmZmxlZChOVU1CRVJTKS5zbGljZShcbiAgICAgICAgICAgIHN0YXJ0TnVtMixcbiAgICAgICAgICAgIHN0YXJ0TnVtMiArIGxlbmd0aFxuICAgICAgICApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZW5ndGgsIHN0YXJ0TnVtMSwgc3RhcnROdW0yLCBtYXRoT3AsIG51bTEsIG51bTIpO1xuICAgICAgICBpZiAocGFyc2VJbnQobnVtMSkgPCBwYXJzZUludChudW0yKSAmJiBtYXRoT3AgPT09ICctJykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IG51bTE7XG4gICAgICAgICAgICBudW0xID0gbnVtMjtcbiAgICAgICAgICAgIG51bTIgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVxdWF0aW9uID0gYFdoYXQgaXMgJHtudW0xfSAke21hdGhPcH0gJHtudW0yfT9gO1xuICAgICAgICByZXR1cm4gZXF1YXRpb247XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIoZXF1YXRpb24pe1xuICAgICAgICBsZXQgYXJyID0gZXF1YXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bTEgPSBwYXJzZUludChhcnJbMl0pO1xuICAgICAgICBsZXQgbnVtMiA9IHBhcnNlSW50KGFycls0XSk7XG4gICAgICAgIHN3aXRjaChhcnJbM10pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL251bWJlcnMnO1xuaW1wb3J0IEVxdWF0aW9uIGZyb20gJy4vZXF1YXRpb24nO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBOdW1Db2x1bW5zID0gMTA7XG5jb25zdCBESU1fWCA9IFswLCA4MCwgMTYwLCAyNDAsIDMyMCwgNDAwLCA0ODAsIDU2MCwgNjQwLCA3MjBdO1xuY29uc3QgV0lEVEggPSA4MDA7XG5jb25zdCBIRUlHSFQgPSA2MDA7XG5jb25zdCBESU1fWSA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IG9mZnNldFkgPSBjYW52YXMub2Zmc2V0VG9wO1xuICAgIHRoaXMuYm90dG9tbGluZSA9IHt9O1xuICAgIHRoaXMuZmFsbGluZ051bWJlcnMgPSB7fTtcbiAgICB0aGlzLmZyYW1lSCA9IDA7XG4gICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcblxuICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVyQ2xpY2sgPSB0aGlzLnJlZ2lzdGVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmZhbGxpbmdOdW1iZXIgPSB0aGlzLmZhbGxpbmdOdW1iZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdFcXVhdGlvbiA9IHRoaXMuZHJhd0VxdWF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3TnVtYmVycyA9IHRoaXMuZHJhd051bWJlcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRldGVjdENvbGxpc2lvbiA9IHRoaXMuZGV0ZWN0Q29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVSaWdodEFuc3dlclNxdWFyZSA9IHRoaXMucmVtb3ZlUmlnaHRBbnN3ZXJTcXVhcmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleUhhbmRsZXIgPSB0aGlzLmtleUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5ib3R0b21saW5lID0gdGhpcy5Jbml0aWFsTGF5ZXIodGhpcy5jb250ZXh0LCBOdW1Db2x1bW5zLCB0aGlzLmJvdHRvbWxpbmUpO1xuICAgIHRoaXMuZmFsbGluZ051bWJlcnMgPSB0aGlzLmZhbGxpbmdOdW1iZXIodGhpcy5jb250ZXh0LCB0aGlzLmZhbGxpbmdOdW1iZXJzKTtcblxuICAgIGNvbnN0IGVxdWF0aW9uID0gbmV3IEVxdWF0aW9uKCk7XG4gICAgY29uc3QgbmV3RXEgPSBlcXVhdGlvbi5jcmVhdGVFcXVhdGlvbigpO1xuICAgIC8vIHRoaXMuZHJhd0VxdWF0aW9uKHRoaXMuY29udGV4dCwgbmV3RXEpO1xuICAgIHRoaXMucmlnaHRBbnN3ZXIgPSBlcXVhdGlvbi5yaWdodEFuc3dlcihuZXdFcSk7XG5cbiAgICB0aGlzLmFuaW1hdGUodGhpcy5jb250ZXh0LCBuZXdFcSwgdGhpcy5ib3R0b21saW5lLCB0aGlzLmZhbGxpbmdOdW1iZXJzKTtcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PlxuICAgICAgdGhpcy5yZWdpc3RlckNsaWNrKGUsIG9mZnNldFgsIG9mZnNldFksIHRoaXMuY29udGV4dClcbiAgICApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PlxuICAgICAgdGhpcy5rZXlIYW5kbGVyKGUsIHRoaXMuY29udGV4dCwgdGhpcy5ib3R0b21saW5lLCB0aGlzLmZhbGxpbmdOdW1iZXJzKVxuICAgICk7XG4gIH1cblxuICBrZXlIYW5kbGVyKGUsIGNvbnRleHQsIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKSB7XG4gICAgZGVidWdnZXI7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICB0aGlzLnJlc3RhcnRHYW1lKGNvbnRleHQsIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKTtcbiAgICB9XG4gIH1cblxuICByZXN0YXJ0R2FtZShjb250ZXh0LCBib3R0b21saW5lLCBmYWxsaW5nTnVtYmVycykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgY29uc3QgZXF1YXRpb24gPSBuZXcgRXF1YXRpb24oKTtcbiAgICBjb25zdCBuZXdFcSA9IGVxdWF0aW9uLmNyZWF0ZUVxdWF0aW9uKCk7XG4gICAgdGhpcy5hbmltYXRlKGNvbnRleHQsIG5ld0VxLCBib3R0b21saW5lLCBmYWxsaW5nTnVtYmVycyk7XG4gIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kR2FtZVwiKS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDYW52YXMoKXtcblxuICAgIH1cblxuICAgIHJlbW92ZVJpZ2h0QW5zd2VyU3F1YXJlKGN1cnJlbnRDb2wpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ib3R0b21saW5lKTtcbiAgICAgICAgdGhpcy51c2VyQ2xpY2tzLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5yaWdodEFuc3dlciA8IDEwKSB7XG4gICAgICAgICAgICBpZiAobnVtLnRleHQgPT09IHRoaXMucmlnaHRBbnN3ZXIgJiYgbnVtLnBvc1sxXSA9PT0gNDc0KSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5ib3R0b21saW5lW251bS5wb3NbMF1dO1xuICAgICAgICAgICAgdGhpcy51c2VyQ2xpY2tzID0gW107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvdHRvbWxpbmUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHJpZ2h0IGFuc3dlcmApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW0udGV4dCA9PT0gdGhpcy5yaWdodEFuc3dlcikge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJpZ2h0QW5zd2VyKTtcbiAgICB9XG5cbiAgcmVnaXN0ZXJDbGljayhlLCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgY29uc3QgY2xpY2tlZFBvcyA9IHtcbiAgICAgIHg6IGUuY2xpZW50WCAtIG9mZnNldFgsXG4gICAgICB5OiBNYXRoLmFicyhlLmNsaWVudFkgLSBvZmZzZXRZKSAtIDI1LFxuICAgIH07XG4gICAgYWxlcnQoYGNsaWNrZWQgYXQgJHtjbGlja2VkUG9zLnh9ICR7Y2xpY2tlZFBvcy55fWApO1xuICAgIGNvbnN0IGN1cnJlbnRDb2wgPSB0aGlzLmN1cnJlbnRDb2x1bW5Gb3JVc2VyQ2xpY2soY2xpY2tlZFBvcy54KTtcbiAgICBsZXQgZk51bWJlcnM7XG4gICAgbGV0IGFsbE51bWJlcnM7XG4gICAgbGV0IGJOdW1iZXJzID0gW3RoaXMuYm90dG9tbGluZVtjdXJyZW50Q29sXV07XG4gICAgaWYgKHRoaXMuZmFsbGluZ051bWJlcnMuaGFzT3duUHJvcGVydHkoY3VycmVudENvbCkpIHtcbiAgICAgIGZOdW1iZXJzID0gdGhpcy5mYWxsaW5nTnVtYmVyc1tjdXJyZW50Q29sXTtcbiAgICAgIGFsbE51bWJlcnMgPSBmTnVtYmVycy5jb25jYXQoYk51bWJlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGxOdW1iZXJzID0gYk51bWJlcnM7XG4gICAgfVxuICAgIGRlYnVnZ2VyO1xuICAgIGNvbnNvbGUubG9nKGFsbE51bWJlcnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG51bSA9IGFsbE51bWJlcnNbaV07XG4gICAgICBjb25zdCBsZWZ0ID0gbnVtLnBvc1swXTtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gbnVtLnBvc1swXSArIDgwO1xuICAgICAgY29uc3QgdG9wID0gbnVtLnBvc1sxXTtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IG51bS5wb3NbMV0gKyA4MDtcbiAgICAgIGlmIChcbiAgICAgICAgY2xpY2tlZFBvcy54ID49IGxlZnQgJiZcbiAgICAgICAgY2xpY2tlZFBvcy54IDw9IHJpZ2h0ICYmXG4gICAgICAgIGNsaWNrZWRQb3MueSA+PSB0b3AgJiZcbiAgICAgICAgY2xpY2tlZFBvcy55IDw9IGJvdHRvbVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckNsaWNrcyk7XG4gICAgICAgIHRoaXMudXNlckNsaWNrcy5wdXNoKG51bSk7XG4gICAgICAgIGFsZXJ0KG51bS50ZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyQ2xpY2tzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlUmlnaHRBbnN3ZXJTcXVhcmUoY3VycmVudENvbCk7XG4gIH1cblxuICBjdXJyZW50Q29sdW1uRm9yVXNlckNsaWNrKHhPZkNsaWNrZWQpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHggPSAwO1xuICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgIGlmICh4T2ZDbGlja2VkID4geCAmJiB4T2ZDbGlja2VkIDwgeCArIDgwKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfVxuICAgICAgeCArPSA4MDtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gIH1cblxuICBkcmF3RXF1YXRpb24oY29udGV4dCwgZXF1YXRpb24pIHtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGNvbnRleHQuZm9udCA9IFwiMjBweCBWZXJkYW5hXCI7XG4gICAgY29udGV4dC5zdHJva2VUZXh0KGVxdWF0aW9uLCA0MDAsIDE1KTtcbiAgfVxuXG4gIEluaXRpYWxMYXllcihjb250ZXh0LCBOdW1Db2x1bW5zLCBib3R0b21saW5lKSB7XG4gICAgbGV0IG51bTtcbiAgICBsZXQgcG9zQXRYID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bUNvbHVtbnM7IGkrKykge1xuICAgICAgbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTA7XG4gICAgICBjb25zdCBuZXdOdW1iZXIgPSBuZXcgTnVtYmVycyhbcG9zQXRYLCA0NzRdLCBudW0pO1xuICAgICAgbmV3TnVtYmVyLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gICAgICBib3R0b21saW5lW3Bvc0F0WF0gPSBuZXdOdW1iZXI7XG4gICAgICBwb3NBdFggKz0gODA7XG4gICAgfVxuICAgIHJldHVybiBib3R0b21saW5lO1xuICB9XG5cbiAgZHJhd051bWJlcnMoY29udGV4dCwgYm90dG9tbGluZSwgZmFsbGluZ051bWJlcnMpIHtcbiAgICBPYmplY3Qua2V5cyhib3R0b21saW5lKS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICAgIGNvbnN0IHNxID0gYm90dG9tbGluZVtwb3NdO1xuICAgICAgc3EuZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICB9KTtcbiAgICBPYmplY3QudmFsdWVzKGZhbGxpbmdOdW1iZXJzKS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG51bVtpXS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpIHtcbiAgICBjb25zdCB4ID0gRElNX1hbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICUgMTBdO1xuICAgIGNvbnN0IHkgPSAyNTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgZmFsbGluZ051bWJlcihjb250ZXh0LCBmYWxsaW5nTnVtYmVycykge1xuICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb25mb3JGYWxsaW5nTnVtYmVycygpO1xuICAgIGNvbnN0IG51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDEwO1xuICAgIGNvbnN0IGZhbGxpbmdOdW0gPSBuZXcgTnVtYmVycyhwb3MsIG51bSk7XG4gICAgZmFsbGluZ051bS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAgIGZhbGxpbmdOdW1iZXJzW3Bvc1swXV0gPSBmYWxsaW5nTnVtYmVyc1twb3NbMF1dIHx8IFtdO1xuICAgIGZhbGxpbmdOdW1iZXJzW3Bvc1swXV0ucHVzaChmYWxsaW5nTnVtKTtcbiAgICBpZiAoZmFsbGluZ051bWJlcnNbcG9zWzBdXS5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbGxpbmdOdW1iZXJzO1xuICB9XG5cbiAgYW5pbWF0ZShjb250ZXh0LCBlcXVhdGlvbiwgYm90dG9tbGluZSwgZmFsbGluZ051bWJlcnMpIHtcbiAgICBpZiAodGhpcy5wbGF5aW5nID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmZyYW1lSCArPSAxO1xuICAgICAgaWYgKHRoaXMuZnJhbWVIID4gNTApIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nTnVtYmVyKGNvbnRleHQsIGZhbGxpbmdOdW1iZXJzKTtcbiAgICAgICAgdGhpcy5mcmFtZUggPSAwO1xuICAgICAgfVxuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICB0aGlzLmRyYXdFcXVhdGlvbihjb250ZXh0LCBlcXVhdGlvbik7XG4gICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICB0aGlzLmRyYXdOdW1iZXJzKGNvbnRleHQsIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKTtcblxuICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PlxuICAgICAgICB0aGlzLmFuaW1hdGUoY29udGV4dCwgZXF1YXRpb24sIGJvdHRvbWxpbmUsIGZhbGxpbmdOdW1iZXJzKTtcblxuICAgICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb24ocG9zLCBjdXJyZW50RmFsbGluZ1Bvc2l0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudENvbHVtbiA9IHRoaXMuZmFsbGluZ051bWJlcnNbcG9zWzBdXTtcbiAgICBsZXQgb3RoZXJOdW1iZXI7XG4gICAgaWYgKGN1cnJlbnRGYWxsaW5nUG9zaXRpb24gIT0gMCkge1xuICAgICAgY29uc3QgbnVtID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uXTtcbiAgICAgIG90aGVyTnVtYmVyID0gY3VycmVudENvbHVtbltjdXJyZW50RmFsbGluZ1Bvc2l0aW9uIC0gMV07XG4gICAgICByZXR1cm4gbnVtLmNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgbW92ZU9iamVjdHMoKSB7XG4gICAgbGV0IG51bWJlcnMgPSBPYmplY3QudmFsdWVzKHRoaXMuZmFsbGluZ051bWJlcnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICghdGhpcy5kZXRlY3RDb2xsaXNpb24obnVtYmVyc1tpXVtqXS5wb3MsIGopKSB7XG4gICAgICAgICAgY29uc3QgZm91bmRCb3R0b21MaW5lID0gdGhpcy5ib3R0b21saW5lLmhhc093blByb3BlcnR5KFtcbiAgICAgICAgICAgIG51bWJlcnNbaV1bal0ucG9zWzBdLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIG51bWJlcnNbaV1bal0ubW92ZShmb3VuZEJvdHRvbUxpbmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5tb3ZlT2JqZWN0cygpLCBcbiAgICAgICAgICAgIHRoYXQuZ2FtZS5kcmF3KHRoYXQuY3R4KTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2suYmluZCh0aGF0KSwgMjApO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmpbXCJwb3NcIl07XG4gICAgICAgIHRoaXMudmVsID0gb2JqW1widmVsXCJdO1xuICAgICAgICB0aGlzLmNvbG9yID0gb2JqW1wiY29sb3JcIl07XG4gICAgICAgIHRoaXMudGV4dCA9IG9ialtcInRleHRcIl07XG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSA9IHRoaXMuZHJhd1NxdWFyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbldpdGggPSB0aGlzLmNoZWNrQ29sbGlzaW9uV2l0aC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoY3R4KSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgODAsIDgwKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0gKyA0MCwgdGhpcy5wb3NbMV0gKyA0MCk7XG4gICAgfVxuXG4gICAgbW92ZShmb3VuZEJvdHRvbUxpbmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZm91bmRCb3R0b21MaW5lKTtcbiAgICAgICAgaWYgKGZvdW5kQm90dG9tTGluZSAmJiB0aGlzLnBvc1sxXSA+PSAzOTMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKCFmb3VuZEJvdHRvbUxpbmUgJiYgdGhpcy5wb3NbMV0gPj0gNDczKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvc1sxXSArPSAxMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aChvdGhlck51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NbMV0gPj0gb3RoZXJOdW1iZXIucG9zWzFdIC0gODA7XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI0NDRkYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjRkJBRUQyXCIsXG4gIDY6IFwiI0ZGNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoWzAsIDVdLCBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICAgIHJldHVybiBbMCwgdmVjWzFdKiBtXVxuICAgIH0sXG4gICAgbnVtYmVyKG51bSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbnVtKVxuICAgIH1cbn1cblxuVXRpbC5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ2xhc3MsIHBhcmVudENsYXNzKSB7XG4gICAgZnVuY3Rpb24gU3Vycm9nYXRlKCkge307XG4gICAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudENsYXNzLnByb3RvdHlwZTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGUoKTtcbiAgICBjaGlsZENsYXNzLnByb3RvdHlwZS5jb25zdHJ1dG9yID0gY2hpbGRDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=