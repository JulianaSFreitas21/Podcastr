webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/Player.Context.tsx":
/*!*****************************************!*\
  !*** ./src/contexts/Player.Context.tsx ***!
  \*****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContext", function() { return PlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContextProvider", function() { return PlayerContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Juliana\\Documents\\GitHub\\Podcastr\\src\\contexts\\Player.Context.tsx",
    _s = $RefreshSig$();


var PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({}); // definir o fromato do valor

function PlayerContextProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      episodeList = _useState[0],
      setEpisodeList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentEpisodeIndex = _useState2[0],
      setCurrentEpisodeIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPlaying = _useState3[0],
      setIsPlaying = _useState3[1];

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list, index) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayerContext.Provider, {
    value: {
      episodeList: episodeList,
      currentEpisodeIndex: currentEpisodeIndex,
      play: play,
      isPlaying: isPlaying,
      togglePlay: togglePlay,
      setPlayingState: setPlayingState
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(PlayerContextProvider, "LrQXJ4YCuKXOoMsmvRtpeyylJ9U=");

_c = PlayerContextProvider;

var _c;

$RefreshReg$(_c, "PlayerContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllci5Db250ZXh0LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlBsYXllckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJlcGlzb2RlTGlzdCIsInNldEVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsInNldEN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DLEMsQ0FBOEQ7O0FBTTlELFNBQVNDLHFCQUFULE9BQXVFO0FBQUE7O0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1Qzs7QUFBQSxrQkFDdENDLHNEQUFRLENBQUMsRUFBRCxDQUQ4QjtBQUFBLE1BQ3JFQyxXQURxRTtBQUFBLE1BQ3hEQyxjQUR3RDs7QUFBQSxtQkFFdEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZjO0FBQUEsTUFFckVHLG1CQUZxRTtBQUFBLE1BRWhEQyxzQkFGZ0Q7O0FBQUEsbUJBRzFDSixzREFBUSxDQUFDLEtBQUQsQ0FIa0M7QUFBQSxNQUdyRUssU0FIcUU7QUFBQSxNQUcxREMsWUFIMEQ7O0FBSzVFLFdBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUF1QjtBQUNyQk4sa0JBQWMsQ0FBQyxDQUFDTSxPQUFELENBQUQsQ0FBZDtBQUNBSiwwQkFBc0IsQ0FBQyxDQUFELENBQXRCO0FBQ0FFLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7O0FBRUQsV0FBU0csUUFBVCxDQUFrQkMsSUFBbEIsRUFBbUNDLEtBQW5DLEVBQWtEO0FBQ2hEVCxrQkFBYyxDQUFDUSxJQUFELENBQWQ7QUFDQU4sMEJBQXNCLENBQUNPLEtBQUQsQ0FBdEI7QUFDQUwsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFFRCxXQUFTTSxVQUFULEdBQXFCO0FBQ25CTixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNEOztBQUVELFdBQVNRLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXdDO0FBQ3RDUixnQkFBWSxDQUFDUSxLQUFELENBQVo7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUNFLFNBQUssRUFDSDtBQUNFYixpQkFBVyxFQUFYQSxXQURGO0FBRUVFLHlCQUFtQixFQUFuQkEsbUJBRkY7QUFHRUksVUFBSSxFQUFKQSxJQUhGO0FBSUVGLGVBQVMsRUFBVEEsU0FKRjtBQUtFTyxnQkFBVSxFQUFWQSxVQUxGO0FBTUVDLHFCQUFlLEVBQWZBO0FBTkYsS0FGSjtBQUFBLGNBV0dkO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBeENlRCxxQjs7S0FBQUEscUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMmVlYzE5NmIyOGI2YWYyZWU4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgRXBpc29kZSA9IHtcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIG1lbWJlcnM6IHN0cmluZyxcclxuICB0aHVtYm5haWw6IHN0cmluZyxcclxuICBkdXJhdGlvbjogbnVtYmVyLFxyXG4gIHVybDogc3RyaW5nLFxyXG59XHJcblxyXG50eXBlIFBsYXllckNvbnRleHREYXRhPSB7XHJcbiAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcclxuICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XHJcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xyXG4gIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSk7IC8vIGRlZmluaXIgbyBmcm9tYXRvIGRvIHZhbG9yXHJcblxyXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoe2NoaWxkcmVufTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGUpIHtcclxuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XHJcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xyXG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xyXG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpe1xyXG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOiBib29sZWFuKXtcclxuICAgIHNldElzUGxheWluZyhzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgIHZhbHVlPXtcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgZXBpc29kZUxpc3QsIFxyXG4gICAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCwgXHJcbiAgICAgICAgICBwbGF5LCBcclxuICAgICAgICAgIGlzUGxheWluZywgXHJcbiAgICAgICAgICB0b2dnbGVQbGF5LCBcclxuICAgICAgICAgIHNldFBsYXlpbmdTdGF0ZSBcclxuICAgICAgICB9XHJcbiAgICAgIH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==