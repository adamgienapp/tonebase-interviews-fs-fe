webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _reactEasyState = __webpack_require__(/*! @risingstack/react-easy-state */ "./node_modules/@risingstack/react-easy-state/dist/es.es6.js");

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js"));

var _jsxFileName = "/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js";

var Counter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Counter, _React$Component);

  function Counter() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Counter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Counter)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "counter", (0, _reactEasyState.store)({
      num: 0,
      increment: function increment() {
        return _this.counter.num++;
      },
      decrement: function decrement() {
        return _this.counter.num--;
      }
    }));
    return _this;
  }

  (0, _createClass2.default)(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.autoUpdate();
    }
  }, {
    key: "autoUpdate",
    value: function autoUpdate() {
      var date = new Date();
      var hour = date.getHours();

      if (hour >= 9 && hour <= 17) {
        this.counter.increment();
      }

      if (hour <= 8 || hour >= 18) {
        this.counter.decrement();
      }

      setTimeout(this.autoUpdate.bind(this), 3600000);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "jsx-3464217641",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, _react.default.createElement("title", {
        className: "jsx-3464217641",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Simple Counter by Adam Gienapp")), _react.default.createElement("div", {
        className: "jsx-3464217641" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "jsx-3464217641",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, _react.default.createElement("h1", {
        className: "jsx-3464217641" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Simple Counter"), _react.default.createElement("h3", {
        className: "jsx-3464217641" + " " + "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "By Adam Gienapp")), _react.default.createElement("div", {
        className: "jsx-3464217641" + " " + "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.counter.num), _react.default.createElement("div", {
        className: "jsx-3464217641" + " " + "btn-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, _react.default.createElement("button", {
        onClick: this.counter.increment,
        className: "jsx-3464217641" + " " + "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "+"), _react.default.createElement("button", {
        onClick: this.counter.decrement,
        className: "jsx-3464217641" + " " + "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "-"))), _react.default.createElement(_style.default, {
        id: "3464217641",
        __self: this
      }, "body{background:steelblue;color:#fff;font-family:Arial;}.container{width:70%;min-width:500px;margin:0 auto;}.title{width:500px;font-size:66px;margin:inherit auto 0;text-align:center;}.subtitle{width:470px;margin-top:0;text-align:right;}.number{font-size:150px;text-align:center;margin:75px 0;}.btn-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.btn{height:90px;width:90px;border-radius:50%;background:darkblue;color:#fff;font-size:60px;line-height:90px;text-align:center;box-shadow:0 1px 6px black;}.btn:hover{cursor:pointer;}.btn:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWVuYXBwYS9Eb2N1bWVudHMvSGFja1JlYWN0b3IvQ29kaW5nIENoYWxsZW5nZXMvVG9uZWJhc2UvdG9uZWJhc2UtaW50ZXJ2aWV3cy1mcy1mZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzJCLEFBR2tDLEFBTVgsQUFNRSxBQU9BLEFBTUksQUFNSCxBQU1ELEFBWUcsQUFJRixVQTlDRyxFQU1ELEFBT0YsQUFrQkYsQ0FnQmIsRUFKQSxDQXhCb0IsS0F6QlAsRUFzQ08sRUFsQkQsQ0FiSCxDQU1RLEtBWkosRUF5QkosTUFsQmhCLENBK0JzQixDQWxCdEIsTUFNQSxDQWJvQixDQVpwQixXQXNDYSxNQXpCYixLQTBCaUIsRUFWSSxhQVdGLGlCQUNDLGtCQUNTLHFCQVpFLE1BYS9CLHFIQVpBIiwiZmlsZSI6Ii9Vc2Vycy9naWVuYXBwYS9Eb2N1bWVudHMvSGFja1JlYWN0b3IvQ29kaW5nIENoYWxsZW5nZXMvVG9uZWJhc2UvdG9uZWJhc2UtaW50ZXJ2aWV3cy1mcy1mZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JlLCB2aWV3IH0gZnJvbSAnQHJpc2luZ3N0YWNrL3JlYWN0LWVhc3ktc3RhdGUnO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb3VudGVyID0gc3RvcmUoe1xuICAgIG51bTogMCxcbiAgICBpbmNyZW1lbnQ6ICgpID0+IHRoaXMuY291bnRlci5udW0rKyxcbiAgICBkZWNyZW1lbnQ6ICgpID0+IHRoaXMuY291bnRlci5udW0tLSxcbiAgfSk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hdXRvVXBkYXRlKCk7XG4gIH1cblxuICBhdXRvVXBkYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXIgPj0gOSAmJiBob3VyIDw9IDE3KSB7XG4gICAgICB0aGlzLmNvdW50ZXIuaW5jcmVtZW50KCk7XG4gICAgfVxuICAgIGlmIChob3VyIDw9IDggfHwgaG91ciA+PSAxOCkge1xuICAgICAgdGhpcy5jb3VudGVyLmRlY3JlbWVudCgpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHRoaXMuYXV0b1VwZGF0ZS5iaW5kKHRoaXMpLCAzNjAwMDAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlNpbXBsZSBDb3VudGVyIGJ5IEFkYW0gR2llbmFwcDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2ltcGxlIENvdW50ZXI8L2gxPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+QnkgQWRhbSBHaWVuYXBwPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyXCI+e3RoaXMuY291bnRlci5udW19PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5jb3VudGVyLmluY3JlbWVudH0+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmNvdW50ZXIuZGVjcmVtZW50fT4tPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjZweDtcbiAgICAgICAgICAgIG1hcmdpbjogaW5oZXJpdCBhdXRvIDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAubnVtYmVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDc1cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAuYnRuLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2JsdWU7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNnB4IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG46aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG46Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlldyhDb3VudGVyKTsiXX0= */\n/*@ sourceURL=/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js */"));
    }
  }]);
  return Counter;
}(_react.default.Component);

var _default = (0, _reactEasyState.view)(Counter);

exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.d996278dbd7451e1cd8a.hot-update.js.map