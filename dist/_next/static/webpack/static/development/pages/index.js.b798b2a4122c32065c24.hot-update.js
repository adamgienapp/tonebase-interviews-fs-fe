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
      }, _react.default.createElement("link", {
        type: "text/css",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), _react.default.createElement("div", {
        style: styles.container,
        className: "jsx-1751302857",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "jsx-1751302857",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, _react.default.createElement("h1", {
        style: styles.title,
        className: "jsx-1751302857",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Simple Counter"), _react.default.createElement("h3", {
        style: styles.subtitle,
        className: "jsx-1751302857",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "By Adam Gienapp")), _react.default.createElement("div", {
        style: styles.number,
        className: "jsx-1751302857",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.counter.num), _react.default.createElement("div", {
        style: styles.btnContainer,
        className: "jsx-1751302857",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, _react.default.createElement("div", {
        style: styles.btn,
        onClick: this.counter.increment,
        className: "jsx-1751302857",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "+"), _react.default.createElement("div", {
        style: styles.btn,
        onClick: this.counter.decrement,
        className: "jsx-1751302857",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "-")), _react.default.createElement(_style.default, {
        id: "1751302857",
        __self: this
      }, "body{background:steelblue;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWVuYXBwYS9Eb2N1bWVudHMvSGFja1JlYWN0b3IvQ29kaW5nIENoYWxsZW5nZXMvVG9uZWJhc2UvdG9uZWJhc2UtaW50ZXJ2aWV3cy1mcy1mZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QzZCLEFBR29DLHFCQUNWLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2dpZW5hcHBhL0RvY3VtZW50cy9IYWNrUmVhY3Rvci9Db2RpbmcgQ2hhbGxlbmdlcy9Ub25lYmFzZS90b25lYmFzZS1pbnRlcnZpZXdzLWZzLWZlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RvcmUsIHZpZXcgfSBmcm9tICdAcmlzaW5nc3RhY2svcmVhY3QtZWFzeS1zdGF0ZSc7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cblxuY2xhc3MgQ291bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvdW50ZXIgPSBzdG9yZSh7XG4gICAgbnVtOiAwLFxuICAgIGluY3JlbWVudDogKCkgPT4gdGhpcy5jb3VudGVyLm51bSsrLFxuICAgIGRlY3JlbWVudDogKCkgPT4gdGhpcy5jb3VudGVyLm51bS0tLFxuICB9KTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmF1dG9VcGRhdGUoKTtcbiAgfVxuXG4gIGF1dG9VcGRhdGUoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91ciA+PSA5ICYmIGhvdXIgPD0gMTcpIHtcbiAgICAgIHRoaXMuY291bnRlci5pbmNyZW1lbnQoKTtcbiAgICB9XG4gICAgaWYgKGhvdXIgPD0gOCB8fCBob3VyID49IDE4KSB7XG4gICAgICB0aGlzLmNvdW50ZXIuZGVjcmVtZW50KCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQodGhpcy5hdXRvVXBkYXRlLmJpbmQodGhpcyksIDM2MDAwMDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiXCIvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3N0eWxlcy50aXRsZX0+U2ltcGxlIENvdW50ZXI8L2gxPlxuICAgICAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMuc3VidGl0bGV9PkJ5IEFkYW0gR2llbmFwcDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubnVtYmVyfT57dGhpcy5jb3VudGVyLm51bX08L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5idG5Db250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJ0bn0gb25DbGljaz17dGhpcy5jb3VudGVyLmluY3JlbWVudH0+KzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJ0bn0gb25DbGljaz17dGhpcy5jb3VudGVyLmRlY3JlbWVudH0+LTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB2aWV3KENvdW50ZXIpO1xuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6IFwiNzAlXCIsXG4gICAgbWluV2lkdGg6IFwiNTAwcHhcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gIH0sXG5cbiAgdGl0bGU6IHtcbiAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgIGZvbnRTaXplOiBcIjY2cHhcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcblxuICBzdWJ0aXRsZToge1xuICAgIHdpZHRoOiBcIjQ3MHB4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjBcIixcbiAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgfSxcblxuICBudW1iZXI6IHtcbiAgICBmb250U2l6ZTogXCIxNTBweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBtYXJnaW46IFwiNzVweCAwXCIsXG4gIH0sXG5cbiAgYnRuQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcbiAgfSxcblxuICBidG46IHtcbiAgICBoZWlnaHQ6IFwiOTBweFwiLFxuICAgIHdpZHRoOiBcIjkwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgYmFja2dyb3VuZDogXCJkYXJrYmx1ZVwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBmb250U2l6ZTogXCI2MHB4XCIsXG4gICAgbGluZUhlaWdodDogXCI5MHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGJveFNoYWRvdzogXCIwIDFweCA2cHggYmxhY2tcIixcbiAgfSxcbn0iXX0= */\n/*@ sourceURL=/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js */")));
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
    lineHeight: "90px",
    textAlign: "center",
    boxShadow: "0 1px 6px black"
  }
};

/***/ })

})
//# sourceMappingURL=index.js.b798b2a4122c32065c24.hot-update.js.map