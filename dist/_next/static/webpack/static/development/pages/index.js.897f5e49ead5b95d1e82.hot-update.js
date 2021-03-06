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
        style: styles.container,
        className: "jsx-1603708866",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "jsx-1603708866",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, _react.default.createElement("h1", {
        style: styles.title,
        className: "jsx-1603708866",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Simple Counter"), _react.default.createElement("h3", {
        style: styles.subtitle,
        className: "jsx-1603708866",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "By Adam Gienapp")), _react.default.createElement("div", {
        style: styles.number,
        className: "jsx-1603708866",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.counter.num), _react.default.createElement("div", {
        style: styles.btnContainer,
        className: "jsx-1603708866",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, _react.default.createElement("div", {
        style: styles.btn,
        onClick: this.counter.increment,
        className: "jsx-1603708866",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "+"), _react.default.createElement("div", {
        style: styles.btn,
        onClick: this.counter.decrement,
        className: "jsx-1603708866",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "-")), _react.default.createElement(_style.default, {
        id: "1603708866",
        __self: this
      }, "body{background:steelblue;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWVuYXBwYS9Eb2N1bWVudHMvSGFja1JlYWN0b3IvQ29kaW5nIENoYWxsZW5nZXMvVG9uZWJhc2UvdG9uZWJhc2UtaW50ZXJ2aWV3cy1mcy1mZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QzJCLEFBR2tDLHFCQUNWLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2dpZW5hcHBhL0RvY3VtZW50cy9IYWNrUmVhY3Rvci9Db2RpbmcgQ2hhbGxlbmdlcy9Ub25lYmFzZS90b25lYmFzZS1pbnRlcnZpZXdzLWZzLWZlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RvcmUsIHZpZXcgfSBmcm9tICdAcmlzaW5nc3RhY2svcmVhY3QtZWFzeS1zdGF0ZSc7XG5cblxuY2xhc3MgQ291bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvdW50ZXIgPSBzdG9yZSh7XG4gICAgbnVtOiAwLFxuICAgIGluY3JlbWVudDogKCkgPT4gdGhpcy5jb3VudGVyLm51bSsrLFxuICAgIGRlY3JlbWVudDogKCkgPT4gdGhpcy5jb3VudGVyLm51bS0tLFxuICB9KTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmF1dG9VcGRhdGUoKTtcbiAgfVxuXG4gIGF1dG9VcGRhdGUoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91ciA+PSA5ICYmIGhvdXIgPD0gMTcpIHtcbiAgICAgIHRoaXMuY291bnRlci5pbmNyZW1lbnQoKTtcbiAgICB9XG4gICAgaWYgKGhvdXIgPD0gOCB8fCBob3VyID49IDE4KSB7XG4gICAgICB0aGlzLmNvdW50ZXIuZGVjcmVtZW50KCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQodGhpcy5hdXRvVXBkYXRlLmJpbmQodGhpcyksIDM2MDAwMDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgc3R5bGU9e3N0eWxlcy50aXRsZX0+U2ltcGxlIENvdW50ZXI8L2gxPlxuICAgICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLnN1YnRpdGxlfT5CeSBBZGFtIEdpZW5hcHA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubnVtYmVyfT57dGhpcy5jb3VudGVyLm51bX08L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYnRuQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYnRufSBvbkNsaWNrPXt0aGlzLmNvdW50ZXIuaW5jcmVtZW50fT4rPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJ0bn0gb25DbGljaz17dGhpcy5jb3VudGVyLmRlY3JlbWVudH0+LTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlldyhDb3VudGVyKTtcblxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjcwJVwiLFxuICAgIG1pbldpZHRoOiBcIjUwMHB4XCIsXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICB9LFxuXG4gIHRpdGxlOiB7XG4gICAgd2lkdGg6IFwiNTAwcHhcIixcbiAgICBmb250U2l6ZTogXCI2NnB4XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG5cbiAgc3VidGl0bGU6IHtcbiAgICB3aWR0aDogXCI0NzBweFwiLFxuICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4gIH0sXG5cbiAgbnVtYmVyOiB7XG4gICAgZm9udFNpemU6IFwiMTUwcHhcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luOiBcIjc1cHggMFwiLFxuICB9LFxuXG4gIGJ0bkNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gIH0sXG5cbiAgYnRuOiB7XG4gICAgaGVpZ2h0OiBcIjkwcHhcIixcbiAgICB3aWR0aDogXCI5MHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIGJhY2tncm91bmQ6IFwiZGFya2JsdWVcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgZm9udFNpemU6IFwiNjBweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiMjAwXCIsXG4gICAgbGluZUhlaWdodDogXCI5MHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxufSJdfQ== */\n/*@ sourceURL=/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js */"));
    }
  }]);
  return Counter;
}(_react.default.Component);

var _default = (0, _reactEasyState.view)(Counter);

exports.default = _default;
var styles = {
  container: {
    width: "70%",
    minWidth: "500px",
    margin: "0 auto"
  },
  title: {
    width: "500px",
    fontSize: "66px",
    marginBottom: "0",
    textAlign: "center"
  },
  subtitle: {
    width: "470px",
    marginTop: "0",
    textAlign: "right"
  },
  number: {
    fontSize: "150px",
    textAlign: "center",
    margin: "75px 0"
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  btn: {
    height: "90px",
    width: "90px",
    borderRadius: "50%",
    background: "darkblue",
    color: "#fff",
    fontSize: "60px",
    fontWeight: "200",
    lineHeight: "90px",
    textAlign: "center"
  }
};

/***/ })

})
//# sourceMappingURL=index.js.897f5e49ead5b95d1e82.hot-update.js.map