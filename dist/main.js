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

/***/ "./src/images/yoda-stitch.jpg":
/*!************************************!*\
  !*** ./src/images/yoda-stitch.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/yoda-stitch.jpg");

/***/ }),

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
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/square */ "./src/scripts/square.js");
/* harmony import */ var _scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/DOMExample */ "./src/scripts/DOMExample.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var currentStateObj = {
  currentExample: null,
  currentEventListeners: []
};
document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
document.querySelector("#DOM-demo").addEventListener("click", startDOM);

function startDOM() {
  unregisterEventListeners();
  clearDemo();
  currentStateObj.currentExample = "DOMDEMO";
  Object(_scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__["DOMExample"])();
}

function startCanvas() {
  clearDemo();
  unregisterEventListeners();
  currentStateObj.currentExample = "CANVASDEMO";
  var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__["default"]();
  canvas.createCanvas();
  var squares = [new _scripts_square__WEBPACK_IMPORTED_MODULE_3__["default"](canvas.ctx, canvas.coords, canvas.fillColor)];
  var animating = true;

  var animation = function animation() {
    canvas.clearCanvas();
    if (animating) squares.forEach(function (sq) {
      return sq.updateSquare(canvas.fillColor);
    });
    squares.forEach(function (sq) {
      return sq.drawSquare();
    });
    window.requestAnimationFrame(animation);
    squares.forEach(function (sq) {
      if (sq.coords[0] + sq.coords[2] > window.innerWidth) sq.reverseAnimation();
      if (sq.coords[0] < 0) sq.reverseAnimation();
    });
  };

  window.requestAnimationFrame(animation);
  window.addEventListener("keydown", handleKeyDown);
  currentStateObj.currentEventListeners.push(["window", "keydown", handleKeyDown]);
  window.addEventListener("mousedown", handleMouseDown);
  currentStateObj.currentEventListeners.push(["window", "mousedown", handleMouseDown]);

  function handleKeyDown(event) {
    if (event.which === 32) {
      event.preventDefault();
      squares.forEach(function (sq) {
        return sq.reverseAnimation();
      });
      canvas.setColor("#".concat(Math.floor(Math.random() * 16777215).toString(16)));
    }
  }

  function handleMouseDown(event) {
    event.preventDefault();
    squares.push(new _scripts_square__WEBPACK_IMPORTED_MODULE_3__["default"](canvas.ctx, canvas.coords.map(function (co) {
      return co + 25;
    }), canvas.fillColor)); // animating = !animating;
  }
}

function unregisterEventListeners() {
  while (currentStateObj.currentEventListeners.length) {
    var _currentStateObj$curr = currentStateObj.currentEventListeners.pop(),
        _currentStateObj$curr2 = _slicedToArray(_currentStateObj$curr, 3),
        selector = _currentStateObj$curr2[0],
        event = _currentStateObj$curr2[1],
        handler = _currentStateObj$curr2[2];

    if (selector === "window") {
      window.removeEventListener(event, handler);
      console.log(handler);
    } else {
      document.querySelector(selector).removeEventListener(event, handler);
    }
  }
}

function clearDemo() {
  if (currentStateObj.currentExample === "CANVASDEMO") document.body.removeChild(document.querySelector("canvas"));

  if (currentStateObj.currentExample === "DOMDEMO") {
    _toConsumableArray(document.querySelectorAll(".card")).forEach(function (elem) {
      return document.body.removeChild(elem);
    });
  }
}

/***/ }),

/***/ "./src/scripts/DOMExample.js":
/*!***********************************!*\
  !*** ./src/scripts/DOMExample.js ***!
  \***********************************/
/*! exports provided: DOMExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMExample", function() { return DOMExample; });
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");

var DOMExample = function DOMExample() {
  var _testObj$key;

  var testObj = {
    key1: "hi",
    key2: {
      key3: "Hello"
    }
  };
  var greeting = (testObj === null || testObj === void 0 ? void 0 : (_testObj$key = testObj.key2) === null || _testObj$key === void 0 ? void 0 : _testObj$key.key3) || testObj.key1;
  document.body.classList.add("center");
  var card = document.createElement("div");
  card.classList.add("card", "center");
  card.innerHTML = "<h2>".concat(greeting, " World!</h2>");
  document.body.append(card);
  var imgCard = document.createElement("div");
  imgCard.classList.add("card", "center", "image-card");
  document.body.appendChild(imgCard);
  var imgElement = document.createElement("img");
  imgElement.src = buildAssetPath(_images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  imgElement.classList.add("card", "center");
  imgElement.style.objectFit = "cover";
  imgElement.style.filter = "grayscale(80%)";
  document.body.appendChild(imgElement);
}; // to resolve path issues for images in JS

function buildAssetPath(imgSrc) {
  return "./dist/".concat(imgSrc);
}

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvasExample = /*#__PURE__*/function () {
  function canvasExample(props) {
    _classCallCheck(this, canvasExample);

    this.coords = [10, 10, 150, 100];
    this.animationDir = 1;
    this.fillColor = "green";
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * 0.75;
    this.canvas.height = this.canvas.width / 2;
    this.ctx = this.canvas.getContext("2d");
  }

  _createClass(canvasExample, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    } // drawSquare() {
    //   this.ctx.fillStyle = this.fillColor;
    //   this.ctx.fillRect(...this.coords);
    // }
    // updateSquare() {
    //   this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
    // }
    // clearSquare() {
    //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }
    // reverseAnimation() {
    //   this.animationDir *= -1;
    // }

  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.fillColor = color;
      document.body.style.backgroundColor = color;
      document.body.style.filter = "brightness(150%)";
    }
  }]);

  return canvasExample;
}();

/* harmony default export */ __webpack_exports__["default"] = (canvasExample);

/***/ }),

/***/ "./src/scripts/square.js":
/*!*******************************!*\
  !*** ./src/scripts/square.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square = /*#__PURE__*/function () {
  function Square(ctx, coords) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "green";

    _classCallCheck(this, Square);

    this.ctx = ctx;
    this.coords = coords;
    this.color = color;
    this.animationDir = 1;
  }

  _createClass(Square, [{
    key: "drawSquare",
    value: function drawSquare() {
      var _this$ctx;

      this.ctx.fillStyle = this.color;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }, {
    key: "updateSquare",
    value: function updateSquare(color) {
      var _this = this;

      this.color = color;
      this.coords = this.coords.map(function (coord) {
        return coord += 1 * _this.animationDir;
      });
    }
  }, {
    key: "reverseAnimation",
    value: function reverseAnimation() {
      this.animationDir *= -1;
    }
  }]);

  return Square;
}();

/* harmony default export */ __webpack_exports__["default"] = (Square);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy95b2RhLXN0aXRjaC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0RPTUV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJjdXJyZW50U3RhdGVPYmoiLCJjdXJyZW50RXhhbXBsZSIsImN1cnJlbnRFdmVudExpc3RlbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydENhbnZhcyIsInN0YXJ0RE9NIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwiY2xlYXJEZW1vIiwiRE9NRXhhbXBsZSIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJzcXVhcmVzIiwiU3F1YXJlIiwiY3R4IiwiY29vcmRzIiwiZmlsbENvbG9yIiwiYW5pbWF0aW5nIiwiYW5pbWF0aW9uIiwiY2xlYXJDYW52YXMiLCJmb3JFYWNoIiwic3EiLCJ1cGRhdGVTcXVhcmUiLCJkcmF3U3F1YXJlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5uZXJXaWR0aCIsInJldmVyc2VBbmltYXRpb24iLCJoYW5kbGVLZXlEb3duIiwicHVzaCIsImhhbmRsZU1vdXNlRG93biIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInNldENvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJtYXAiLCJjbyIsImxlbmd0aCIsInBvcCIsInNlbGVjdG9yIiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJ0ZXN0T2JqIiwia2V5MSIsImtleTIiLCJrZXkzIiwiZ3JlZXRpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZCIsImltZ0NhcmQiLCJhcHBlbmRDaGlsZCIsImltZ0VsZW1lbnQiLCJzcmMiLCJidWlsZEFzc2V0UGF0aCIsInN0aXRjaEFuZFlvZGEiLCJzdHlsZSIsIm9iamVjdEZpdCIsImZpbHRlciIsImltZ1NyYyIsInByb3BzIiwiYW5pbWF0aW9uRGlyIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNvb3JkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxnQkFBYyxFQUFFLElBRE07QUFFdEJDLHVCQUFxQixFQUFFO0FBRkQsQ0FBeEI7QUFLQUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUVDLFdBQWpFO0FBQ0FILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixFQUFvQ0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThERSxRQUE5RDs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCQywwQkFBd0I7QUFDeEJDLFdBQVM7QUFDVFQsaUJBQWUsQ0FBQ0MsY0FBaEIsR0FBaUMsU0FBakM7QUFDQVMsd0VBQVU7QUFDWDs7QUFFRCxTQUFTSixXQUFULEdBQXVCO0FBQ3JCRyxXQUFTO0FBQ1RELDBCQUF3QjtBQUN4QlIsaUJBQWUsQ0FBQ0MsY0FBaEIsR0FBaUMsWUFBakM7QUFDQSxNQUFNVSxNQUFNLEdBQUcsSUFBSUMsdURBQUosRUFBZjtBQUNBRCxRQUFNLENBQUNFLFlBQVA7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQyxJQUFJQyx1REFBSixDQUFXSixNQUFNLENBQUNLLEdBQWxCLEVBQXVCTCxNQUFNLENBQUNNLE1BQTlCLEVBQXNDTixNQUFNLENBQUNPLFNBQTdDLENBQUQsQ0FBaEI7QUFFQSxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QlQsVUFBTSxDQUFDVSxXQUFQO0FBQ0EsUUFBSUYsU0FBSixFQUFlTCxPQUFPLENBQUNRLE9BQVIsQ0FBZ0IsVUFBQ0MsRUFBRDtBQUFBLGFBQVFBLEVBQUUsQ0FBQ0MsWUFBSCxDQUFnQmIsTUFBTSxDQUFDTyxTQUF2QixDQUFSO0FBQUEsS0FBaEI7QUFDZkosV0FBTyxDQUFDUSxPQUFSLENBQWdCLFVBQUNDLEVBQUQ7QUFBQSxhQUFRQSxFQUFFLENBQUNFLFVBQUgsRUFBUjtBQUFBLEtBQWhCO0FBQ0FDLFVBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJQLFNBQTdCO0FBQ0FOLFdBQU8sQ0FBQ1EsT0FBUixDQUFnQixVQUFDQyxFQUFELEVBQVE7QUFDdEIsVUFBSUEsRUFBRSxDQUFDTixNQUFILENBQVUsQ0FBVixJQUFlTSxFQUFFLENBQUNOLE1BQUgsQ0FBVSxDQUFWLENBQWYsR0FBOEJTLE1BQU0sQ0FBQ0UsVUFBekMsRUFDRUwsRUFBRSxDQUFDTSxnQkFBSDtBQUNGLFVBQUlOLEVBQUUsQ0FBQ04sTUFBSCxDQUFVLENBQVYsSUFBZSxDQUFuQixFQUFzQk0sRUFBRSxDQUFDTSxnQkFBSDtBQUN2QixLQUpEO0FBS0QsR0FWRDs7QUFZQUgsUUFBTSxDQUFDQyxxQkFBUCxDQUE2QlAsU0FBN0I7QUFFQU0sUUFBTSxDQUFDckIsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUN5QixhQUFuQztBQUNBOUIsaUJBQWUsQ0FBQ0UscUJBQWhCLENBQXNDNkIsSUFBdEMsQ0FBMkMsQ0FDekMsUUFEeUMsRUFFekMsU0FGeUMsRUFHekNELGFBSHlDLENBQTNDO0FBTUFKLFFBQU0sQ0FBQ3JCLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDMkIsZUFBckM7QUFDQWhDLGlCQUFlLENBQUNFLHFCQUFoQixDQUFzQzZCLElBQXRDLENBQTJDLENBQ3pDLFFBRHlDLEVBRXpDLFdBRnlDLEVBR3pDQyxlQUh5QyxDQUEzQzs7QUFNQSxXQUFTRixhQUFULENBQXVCRyxLQUF2QixFQUE4QjtBQUM1QixRQUFJQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsRUFBcEIsRUFBd0I7QUFDdEJELFdBQUssQ0FBQ0UsY0FBTjtBQUNBckIsYUFBTyxDQUFDUSxPQUFSLENBQWdCLFVBQUNDLEVBQUQ7QUFBQSxlQUFRQSxFQUFFLENBQUNNLGdCQUFILEVBQVI7QUFBQSxPQUFoQjtBQUNBbEIsWUFBTSxDQUFDeUIsUUFBUCxZQUFvQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixRQUEzQixFQUFxQ0MsUUFBckMsQ0FBOEMsRUFBOUMsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFdBQVNSLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzlCQSxTQUFLLENBQUNFLGNBQU47QUFDQXJCLFdBQU8sQ0FBQ2lCLElBQVIsQ0FDRSxJQUFJaEIsdURBQUosQ0FDRUosTUFBTSxDQUFDSyxHQURULEVBRUVMLE1BQU0sQ0FBQ00sTUFBUCxDQUFjd0IsR0FBZCxDQUFrQixVQUFDQyxFQUFEO0FBQUEsYUFBUUEsRUFBRSxHQUFHLEVBQWI7QUFBQSxLQUFsQixDQUZGLEVBR0UvQixNQUFNLENBQUNPLFNBSFQsQ0FERixFQUY4QixDQVM5QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1Ysd0JBQVQsR0FBb0M7QUFDbEMsU0FBT1IsZUFBZSxDQUFDRSxxQkFBaEIsQ0FBc0N5QyxNQUE3QyxFQUFxRDtBQUFBLGdDQUsvQzNDLGVBQWUsQ0FBQ0UscUJBQWhCLENBQXNDMEMsR0FBdEMsRUFMK0M7QUFBQTtBQUFBLFFBRWpEQyxRQUZpRDtBQUFBLFFBR2pEWixLQUhpRDtBQUFBLFFBSWpEYSxPQUppRDs7QUFNbkQsUUFBSUQsUUFBUSxLQUFLLFFBQWpCLEVBQTJCO0FBQ3pCbkIsWUFBTSxDQUFDcUIsbUJBQVAsQ0FBMkJkLEtBQTNCLEVBQWtDYSxPQUFsQztBQUNBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNELEtBSEQsTUFHTztBQUNMM0MsY0FBUSxDQUFDQyxhQUFULENBQXVCeUMsUUFBdkIsRUFBaUNFLG1CQUFqQyxDQUFxRGQsS0FBckQsRUFBNERhLE9BQTVEO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQVNyQyxTQUFULEdBQXFCO0FBQ25CLE1BQUlULGVBQWUsQ0FBQ0MsY0FBaEIsS0FBbUMsWUFBdkMsRUFDRUUsUUFBUSxDQUFDK0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCaEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQTFCOztBQUNGLE1BQUlKLGVBQWUsQ0FBQ0MsY0FBaEIsS0FBbUMsU0FBdkMsRUFBa0Q7QUFDaEQsdUJBQUlFLFFBQVEsQ0FBQ2lELGdCQUFULENBQTBCLE9BQTFCLENBQUosRUFBd0M5QixPQUF4QyxDQUFnRCxVQUFDK0IsSUFBRDtBQUFBLGFBQzlDbEQsUUFBUSxDQUFDK0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCRSxJQUExQixDQUQ4QztBQUFBLEtBQWhEO0FBR0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUN2R0Q7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNM0MsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUM5QixNQUFNNEMsT0FBTyxHQUFHO0FBQ2RDLFFBQUksRUFBRSxJQURRO0FBRWRDLFFBQUksRUFBRTtBQUNKQyxVQUFJLEVBQUU7QUFERjtBQUZRLEdBQWhCO0FBT0EsTUFBTUMsUUFBUSxHQUFHLENBQUFKLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsNEJBQUFBLE9BQU8sQ0FBRUUsSUFBVCw4REFBZUMsSUFBZixLQUF1QkgsT0FBTyxDQUFDQyxJQUFoRDtBQUNBcEQsVUFBUSxDQUFDK0MsSUFBVCxDQUFjUyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixRQUE1QjtBQUNBLE1BQU1DLElBQUksR0FBRzFELFFBQVEsQ0FBQzJELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBRCxNQUFJLENBQUNGLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixNQUFuQixFQUEyQixRQUEzQjtBQUNBQyxNQUFJLENBQUNFLFNBQUwsaUJBQXdCTCxRQUF4QjtBQUNBdkQsVUFBUSxDQUFDK0MsSUFBVCxDQUFjYyxNQUFkLENBQXFCSCxJQUFyQjtBQUNBLE1BQU1JLE9BQU8sR0FBRzlELFFBQVEsQ0FBQzJELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQUcsU0FBTyxDQUFDTixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixNQUF0QixFQUE4QixRQUE5QixFQUF3QyxZQUF4QztBQUNBekQsVUFBUSxDQUFDK0MsSUFBVCxDQUFjZ0IsV0FBZCxDQUEwQkQsT0FBMUI7QUFDQSxNQUFNRSxVQUFVLEdBQUdoRSxRQUFRLENBQUMyRCxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0FLLFlBQVUsQ0FBQ0MsR0FBWCxHQUFpQkMsY0FBYyxDQUFDQywrREFBRCxDQUEvQjtBQUNBSCxZQUFVLENBQUNSLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLE1BQXpCLEVBQWlDLFFBQWpDO0FBQ0FPLFlBQVUsQ0FBQ0ksS0FBWCxDQUFpQkMsU0FBakIsR0FBNkIsT0FBN0I7QUFDQUwsWUFBVSxDQUFDSSxLQUFYLENBQWlCRSxNQUFqQixHQUEwQixnQkFBMUI7QUFDQXRFLFVBQVEsQ0FBQytDLElBQVQsQ0FBY2dCLFdBQWQsQ0FBMEJDLFVBQTFCO0FBQ0QsQ0F2Qk0sQyxDQXlCUDs7QUFFQSxTQUFTRSxjQUFULENBQXdCSyxNQUF4QixFQUFnQztBQUM5QiwwQkFBaUJBLE1BQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzlCSzlELGE7QUFDSix5QkFBWStELEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBSzFELE1BQUwsR0FBYyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsR0FBVCxFQUFjLEdBQWQsQ0FBZDtBQUNBLFNBQUsyRCxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBSzFELFNBQUw7QUFDQSxTQUFLUCxNQUFMLEdBQWNSLFFBQVEsQ0FBQzJELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLFNBQUtuRCxNQUFMLENBQVlrRSxLQUFaLEdBQW9CbkQsTUFBTSxDQUFDRSxVQUFQLEdBQW9CLElBQXhDO0FBQ0EsU0FBS2pCLE1BQUwsQ0FBWW1FLE1BQVosR0FBcUIsS0FBS25FLE1BQUwsQ0FBWWtFLEtBQVosR0FBb0IsQ0FBekM7QUFDQSxTQUFLN0QsR0FBTCxHQUFXLEtBQUtMLE1BQUwsQ0FBWW9FLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNEOzs7O21DQUNjO0FBQ2I1RSxjQUFRLENBQUMrQyxJQUFULENBQWNjLE1BQWQsQ0FBcUIsS0FBS3JELE1BQTFCO0FBQ0QsSyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O2tDQUNjO0FBQ1osV0FBS0ssR0FBTCxDQUFTZ0UsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLckUsTUFBTCxDQUFZa0UsS0FBckMsRUFBNEMsS0FBS2xFLE1BQUwsQ0FBWW1FLE1BQXhEO0FBQ0Q7Ozs2QkFDUUcsSyxFQUFPO0FBQ2QsV0FBSy9ELFNBQUwsR0FBaUIrRCxLQUFqQjtBQUNBOUUsY0FBUSxDQUFDK0MsSUFBVCxDQUFjcUIsS0FBZCxDQUFvQlcsZUFBcEIsR0FBc0NELEtBQXRDO0FBQ0E5RSxjQUFRLENBQUMrQyxJQUFULENBQWNxQixLQUFkLENBQW9CRSxNQUFwQjtBQUNEOzs7Ozs7QUFHWTdELDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0Q01HLE07QUFDSixrQkFBWUMsR0FBWixFQUFpQkMsTUFBakIsRUFBMEM7QUFBQSxRQUFqQmdFLEtBQWlCLHVFQUFULE9BQVM7O0FBQUE7O0FBQ3hDLFNBQUtqRSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLZ0UsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0wsWUFBTCxHQUFvQixDQUFwQjtBQUNEOzs7O2lDQUVZO0FBQUE7O0FBQ1gsV0FBSzVELEdBQUwsQ0FBU21FLFNBQVQsR0FBcUIsS0FBS0YsS0FBMUI7O0FBQ0Esd0JBQUtqRSxHQUFMLEVBQVNvRSxRQUFULHFDQUFxQixLQUFLbkUsTUFBMUI7QUFDRDs7O2lDQUNZZ0UsSyxFQUFPO0FBQUE7O0FBQ2xCLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtoRSxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZd0IsR0FBWixDQUFnQixVQUFDNEMsS0FBRDtBQUFBLGVBQVlBLEtBQUssSUFBSSxJQUFJLEtBQUksQ0FBQ1QsWUFBOUI7QUFBQSxPQUFoQixDQUFkO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBS0EsWUFBTCxJQUFxQixDQUFDLENBQXRCO0FBQ0Q7Ozs7OztBQUdZN0QscUVBQWYsRTs7Ozs7Ozs7Ozs7QUN0QkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7XG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IHsgRE9NRXhhbXBsZSB9IGZyb20gXCIuL3NjcmlwdHMvRE9NRXhhbXBsZVwiO1xuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzLWRlbW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0Q2FudmFzKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjRE9NLWRlbW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0RE9NKTtcblxuZnVuY3Rpb24gc3RhcnRET00oKSB7XG4gIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICBjbGVhckRlbW8oKTtcbiAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJET01ERU1PXCI7XG4gIERPTUV4YW1wbGUoKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRDYW52YXMoKSB7XG4gIGNsZWFyRGVtbygpO1xuICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJDQU5WQVNERU1PXCI7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4gIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbiAgY29uc3Qgc3F1YXJlcyA9IFtuZXcgU3F1YXJlKGNhbnZhcy5jdHgsIGNhbnZhcy5jb29yZHMsIGNhbnZhcy5maWxsQ29sb3IpXTtcblxuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgaWYgKGFuaW1hdGluZykgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EudXBkYXRlU3F1YXJlKGNhbnZhcy5maWxsQ29sb3IpKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4gICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbiAgICBcIndpbmRvd1wiLFxuICAgIFwia2V5ZG93blwiLFxuICAgIGhhbmRsZUtleURvd24sXG4gIF0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgXCJ3aW5kb3dcIixcbiAgICBcIm1vdXNlZG93blwiLFxuICAgIGhhbmRsZU1vdXNlRG93bixcbiAgXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5yZXZlcnNlQW5pbWF0aW9uKCkpO1xuICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3F1YXJlcy5wdXNoKFxuICAgICAgbmV3IFNxdWFyZShcbiAgICAgICAgY2FudmFzLmN0eCxcbiAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbiAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuICAgICAgKVxuICAgICk7XG4gICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgIGxldCBbXG4gICAgICBzZWxlY3RvcixcbiAgICAgIGV2ZW50LFxuICAgICAgaGFuZGxlcixcbiAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHN0aXRjaEFuZFlvZGEgZnJvbSBcIi4uL2ltYWdlcy95b2RhLXN0aXRjaC5qcGdcIjtcbmV4cG9ydCBjb25zdCBET01FeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCB0ZXN0T2JqID0ge1xuICAgIGtleTE6IFwiaGlcIixcbiAgICBrZXkyOiB7XG4gICAgICBrZXkzOiBcIkhlbGxvXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBncmVldGluZyA9IHRlc3RPYmo/LmtleTI/LmtleTMgfHwgdGVzdE9iai5rZXkxO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuICBjYXJkLmlubmVySFRNTCA9IGA8aDI+JHtncmVldGluZ30gV29ybGQhPC9oMj5gO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcbiAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJpbWFnZS1jYXJkXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nRWxlbWVudC5zcmMgPSBidWlsZEFzc2V0UGF0aChzdGl0Y2hBbmRZb2RhKTtcbiAgaW1nRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiKTtcbiAgaW1nRWxlbWVudC5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG4gIGltZ0VsZW1lbnQuc3R5bGUuZmlsdGVyID0gXCJncmF5c2NhbGUoODAlKVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xufTtcblxuLy8gdG8gcmVzb2x2ZSBwYXRoIGlzc3VlcyBmb3IgaW1hZ2VzIGluIEpTXG5cbmZ1bmN0aW9uIGJ1aWxkQXNzZXRQYXRoKGltZ1NyYykge1xuICByZXR1cm4gYC4vZGlzdC8ke2ltZ1NyY31gO1xufVxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jb29yZHMgPSBbMTAsIDEwLCAxNTAsIDEwMF07XG4gICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIHRoaXMuZmlsbENvbG9yID0gYGdyZWVuYDtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNzU7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gIH1cbiAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gIC8vIH1cbiAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAvLyB9XG5cbiAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAvLyB9XG5cbiAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgLy8gfVxuICBjbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cbiAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTtcbiIsImNsYXNzIFNxdWFyZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gIH1cblxuICBkcmF3U3F1YXJlKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICB9XG4gIHVwZGF0ZVNxdWFyZShjb2xvcikge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgfVxuXG4gIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==