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





var Util = __webpack_require__(/*! ./scripts/util */ "./src/scripts/util.js");

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  console.log('Its working'); // const num = new Numbers([0,474], 0);
  // const num1 = new Numbers([80, 474], 1);
  // const num2 = new Numbers([160, 474], 2);
  // const num3 = new Numbers([240, 474], 3);
  // const num4 = new Numbers([320, 474], 4);
  // const num5 = new Numbers([400, 474], 5);
  // const num6 = new Numbers([480, 474], 6);
  // const num7 = new Numbers([560, 474], 7);
  // const num8 = new Numbers([640, 474], 8);
  // const num9 = new Numbers([720, 474], 9);
  // window.num = num;
  // num.drawSquare(context);
  // num1.drawSquare(context);
  // num2.drawSquare(context);
  // num3.drawSquare(context);
  // num4.drawSquare(context);
  // num5.drawSquare(context);
  // num6.drawSquare(context);
  // num7.drawSquare(context);
  // num8.drawSquare(context);
  // num9.drawSquare(context);

  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_3__["default"](context); // game.InitialLayer(context);
});

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Util = __webpack_require__(/*! ./util */ "./src/scripts/util.js");

var NumColumns = 10;
var DIM_X = 800;
var DIM_Y = 600;

var Game = /*#__PURE__*/function () {
  function Game(context) {
    _classCallCheck(this, Game);

    this.bottomline = [];
    this.InitialLayer = this.InitialLayer.bind(this);
    this.bottomline = this.InitialLayer(context, NumColumns, this.bottomline);
  }

  _createClass(Game, [{
    key: "InitialLayer",
    value: function InitialLayer(context, NumColumns, bottomline) {
      debugger;
      var num;
      var posAtX = 0;
      console.log(bottomline);

      for (var i = 0; i < NumColumns; i++) {
        debugger;
        num = Math.round(Math.random() * 10);
        var newNumber = new _numbers__WEBPACK_IMPORTED_MODULE_1__["default"]([posAtX, 474], num);
        console.log(newNumber);
        newNumber.drawSquare(context);
        bottomline.push(newNumber);
        posAtX += 80;
      }
    }
  }, {
    key: "randomPositionforInitialLayer",
    value: function randomPositionforInitialLayer() {}
  }, {
    key: "detectCollision",
    value: function detectCollision() {}
  }, {
    key: "fallingNumber",
    value: function fallingNumber() {}
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
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([0, Math.cos(deg)], length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW92aW5nX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9udW1iZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIlV0aWwiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiR2FtZSIsIk51bUNvbHVtbnMiLCJESU1fWCIsIkRJTV9ZIiwiYm90dG9tbGluZSIsIkluaXRpYWxMYXllciIsImJpbmQiLCJudW0iLCJwb3NBdFgiLCJpIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3TnVtYmVyIiwiTnVtYmVycyIsImRyYXdTcXVhcmUiLCJwdXNoIiwiTW92aW5nT2JqZWN0Iiwib2JqIiwicG9zIiwidmVsIiwiY29sb3IiLCJ0ZXh0IiwiY3R4Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwibGluZVdpZHRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJtb3ZlIiwiQ09MT1JTIiwicmFuZG9tVmVjIiwiY2FsbCIsImluaGVyaXRzIiwibGVuZ3RoIiwiZGVnIiwiUEkiLCJzY2FsZSIsImNvcyIsInZlYyIsIm0iLCJudW1iZXIiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJTdXJyb2dhdGUiLCJwcm90b3R5cGUiLCJjb25zdHJ1dG9yIiwibW9kdWxlIiwiZXhwb3J0cyJd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RUFDUztBQUNkLFFBQU1DLEdBQUcsR0FBRyxJQUFJN0IsSUFBSSxDQUFDOEIsRUFBVCxHQUFjOUIsSUFBSSxDQUFDRSxNQUFMLEVBQTFCO0FBQ0EsV0FBT3ZCLElBQUksQ0FBQ29ELEtBQUwsQ0FBVyxDQUFDLENBQUQsRUFBSS9CLElBQUksQ0FBQ2dDLEdBQUwsQ0FBU0gsR0FBVCxDQUFKLENBQVgsRUFBK0JELE1BQS9CLENBQVA7QUFDSCxHQUpRO0FBS1RHLE9BTFMsaUJBS0hFLEdBTEcsRUFLRUMsQ0FMRixFQUtLO0FBQ1YsV0FBTyxDQUFDLENBQUQsRUFBSUQsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFRQyxDQUFaLENBQVA7QUFDSCxHQVBRO0FBUVRDLFFBUlMsa0JBUUZ0QyxHQVJFLEVBUUc7QUFDUixXQUFPRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTCxHQUEzQixDQUFQO0FBQ0g7QUFWUSxDQUFiOztBQWFBbEIsSUFBSSxDQUFDZ0QsUUFBTCxHQUFnQixVQUFTUyxVQUFULEVBQXFCQyxXQUFyQixFQUFrQztBQUM5QyxXQUFTQyxTQUFULEdBQXFCLENBQUU7O0FBQUE7QUFDdkJBLFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkYsV0FBVyxDQUFDRSxTQUFsQztBQUNBSCxZQUFVLENBQUNHLFNBQVgsR0FBdUIsSUFBSUQsU0FBSixFQUF2QjtBQUNBRixZQUFVLENBQUNHLFNBQVgsQ0FBcUJDLFVBQXJCLEdBQWtDSixVQUFsQztBQUNILENBTEQ7O0FBT0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9ELElBQWpCLEM7Ozs7Ozs7Ozs7O0FDcEJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vc2NyaXB0cy9udW1iZXJzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3NjcmlwdHMvdXRpbCcpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb25zb2xlLmxvZygnSXRzIHdvcmtpbmcnKTtcbiAgLy8gY29uc3QgbnVtID0gbmV3IE51bWJlcnMoWzAsNDc0XSwgMCk7XG4gIC8vIGNvbnN0IG51bTEgPSBuZXcgTnVtYmVycyhbODAsIDQ3NF0sIDEpO1xuICAvLyBjb25zdCBudW0yID0gbmV3IE51bWJlcnMoWzE2MCwgNDc0XSwgMik7XG4gIC8vIGNvbnN0IG51bTMgPSBuZXcgTnVtYmVycyhbMjQwLCA0NzRdLCAzKTtcbiAgLy8gY29uc3QgbnVtNCA9IG5ldyBOdW1iZXJzKFszMjAsIDQ3NF0sIDQpO1xuICAvLyBjb25zdCBudW01ID0gbmV3IE51bWJlcnMoWzQwMCwgNDc0XSwgNSk7XG4gIC8vIGNvbnN0IG51bTYgPSBuZXcgTnVtYmVycyhbNDgwLCA0NzRdLCA2KTtcbiAgLy8gY29uc3QgbnVtNyA9IG5ldyBOdW1iZXJzKFs1NjAsIDQ3NF0sIDcpO1xuICAvLyBjb25zdCBudW04ID0gbmV3IE51bWJlcnMoWzY0MCwgNDc0XSwgOCk7XG4gIC8vIGNvbnN0IG51bTkgPSBuZXcgTnVtYmVycyhbNzIwLCA0NzRdLCA5KTtcbiAgLy8gd2luZG93Lm51bSA9IG51bTtcbiAgLy8gbnVtLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gIC8vIG51bTEuZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgLy8gbnVtMi5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAvLyBudW0zLmRyYXdTcXVhcmUoY29udGV4dCk7XG4gIC8vIG51bTQuZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgLy8gbnVtNS5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAvLyBudW02LmRyYXdTcXVhcmUoY29udGV4dCk7XG4gIC8vIG51bTcuZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgLy8gbnVtOC5kcmF3U3F1YXJlKGNvbnRleHQpO1xuICAvLyBudW05LmRyYXdTcXVhcmUoY29udGV4dCk7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjb250ZXh0KTtcbiAgLy8gZ2FtZS5Jbml0aWFsTGF5ZXIoY29udGV4dCk7XG59KSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCBOdW1iZXJzIGZyb20gJy4vbnVtYmVycyc7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNvbnN0IE51bUNvbHVtbnMgPSAxMDtcbmNvbnN0IERJTV9YID0gODAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgIHRoaXMuYm90dG9tbGluZSA9IFtdO1xuICAgIHRoaXMuSW5pdGlhbExheWVyID0gdGhpcy5Jbml0aWFsTGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvdHRvbWxpbmUgPSB0aGlzLkluaXRpYWxMYXllcihjb250ZXh0LCBOdW1Db2x1bW5zLCB0aGlzLmJvdHRvbWxpbmUpO1xuICB9XG4gIEluaXRpYWxMYXllcihjb250ZXh0LCBOdW1Db2x1bW5zLCBib3R0b21saW5lKSB7XG4gICAgZGVidWdnZXI7XG4gICAgbGV0IG51bTtcbiAgICBsZXQgcG9zQXRYID0gMDtcbiAgICBjb25zb2xlLmxvZyhib3R0b21saW5lKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bUNvbHVtbnM7IGkrKykge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgbnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgbmV3TnVtYmVyID0gbmV3IE51bWJlcnMoW3Bvc0F0WCwgNDc0XSwgbnVtKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld051bWJlcik7XG4gICAgICBuZXdOdW1iZXIuZHJhd1NxdWFyZShjb250ZXh0KTtcbiAgICAgIGJvdHRvbWxpbmUucHVzaChuZXdOdW1iZXIpO1xuICAgICAgcG9zQXRYICs9IDgwO1xuICAgIH1cbiAgfVxuXG4gIHJhbmRvbVBvc2l0aW9uZm9ySW5pdGlhbExheWVyKCkge31cblxuICBkZXRlY3RDb2xsaXNpb24oKSB7fVxuICBmYWxsaW5nTnVtYmVyKCkge31cbiAgc3RvcEZhbGxpbmdOdW1iZXIoKSB7fVxuICBzdGFydCgpIHt9XG4gIGdhbWVPdmVyKCkge31cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuICAgICAgICB0aGlzLnBvcyA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgdGhpcy52ZWwgPSBvYmpbXCJ2ZWxcIl07XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmpbXCJjb2xvclwiXTtcbiAgICAgICAgdGhpcy50ZXh0ID0gb2JqW1widGV4dFwiXTtcbiAgICAgICAgdGhpcy5kcmF3U3F1YXJlID0gdGhpcy5kcmF3U3F1YXJlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZShjdHgpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA4MCwgODApO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDgwLCA4MCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZm9udCA9IFwiNDBweCBHZW9yZ2lhXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy5wb3NbMF0rNDAsIHRoaXMucG9zWzFdKzQwKTtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3NbMV0gKz0gdGhpcy52ZWxbMV07XG4gICAgfVxufSIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jb25zdCBDT0xPUlMgPSB7XG4gIDA6IFwiI0NDRkYwMFwiLFxuICAxOiBcIiNmZjAwMDBcIixcbiAgMjogXCIjZmY4MDAwXCIsXG4gIDM6IFwiI2ZmZmYwMFwiLFxuICA0OiBcIiMwMGZmODBcIixcbiAgNTogXCIjRkJBRUQyXCIsXG4gIDY6IFwiI0ZGNTM0OVwiLFxuICA3OiBcIiMwMGZmY2NcIixcbiAgODogXCIjMDBmMmZmXCIsXG4gIDk6IFwiI2ZmMDA3M1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcnMge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdGV4dCkge1xuICAgICAgICAvLyBudW1iZXIgaW5zaWRlIHNxdWFyZVxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYygyKSxcbiAgICAgICAgICBjb2xvcjogQ09MT1JTW3RoaXMudGV4dF0sXG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBNb3ZpbmdPYmplY3QuY2FsbCh0aGlzLCBvYmopO1xuICAgIH1cbn07XG5cblV0aWwuaW5oZXJpdHMoTnVtYmVycywgTW92aW5nT2JqZWN0KTsiLCJjb25zdCBVdGlsID0ge1xuICAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICByZXR1cm4gVXRpbC5zY2FsZShbMCwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XG4gICAgfSxcbiAgICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgICAgcmV0dXJuIFswLCB2ZWNbMV0qIG1dXG4gICAgfSxcbiAgICBudW1iZXIobnVtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBudW0pXG4gICAgfVxufVxuXG5VdGlsLmluaGVyaXRzID0gZnVuY3Rpb24oY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTdXJyb2dhdGUoKSB7fTtcbiAgICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50Q2xhc3MucHJvdG90eXBlO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZSgpO1xuICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnV0b3IgPSBjaGlsZENsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==