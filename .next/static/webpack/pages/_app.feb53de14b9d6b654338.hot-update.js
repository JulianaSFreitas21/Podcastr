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
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllci5Db250ZXh0LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlBsYXllckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJlcGlzb2RlTGlzdCIsInNldEVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsInNldEN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJwbGF5IiwiZXBpc29kZSIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQyxDLENBQThEOztBQU05RCxTQUFTQyxxQkFBVCxPQUEyQztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxFQUFELENBREU7QUFBQSxNQUN6Q0MsV0FEeUM7QUFBQSxNQUM1QkMsY0FENEI7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUMsQ0FBRCxDQUZkO0FBQUEsTUFFekNHLG1CQUZ5QztBQUFBLE1BRXBCQyxzQkFGb0I7O0FBQUEsbUJBR2RKLHNEQUFRLENBQUMsS0FBRCxDQUhNO0FBQUEsTUFHekNLLFNBSHlDO0FBQUEsTUFHOUJDLFlBSDhCOztBQUtoRCxXQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBdUI7QUFDckJOLGtCQUFjLENBQUMsQ0FBQ00sT0FBRCxDQUFELENBQWQ7QUFDQUosMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQUVELFdBQVNHLFVBQVQsR0FBcUI7QUFDbkJILGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0Q7O0FBRUQsV0FBU0ssZUFBVCxDQUF5QkMsS0FBekIsRUFBd0M7QUFDdENMLGdCQUFZLENBQUNLLEtBQUQsQ0FBWjtBQUNEOztBQUVELHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFVixpQkFBVyxFQUFYQSxXQUFGO0FBQWVFLHlCQUFtQixFQUFuQkEsbUJBQWY7QUFBb0NJLFVBQUksRUFBSkEsSUFBcEM7QUFBMENGLGVBQVMsRUFBVEEsU0FBMUM7QUFBcURJLGdCQUFVLEVBQVZBLFVBQXJEO0FBQWlFQyxxQkFBZSxFQUFmQTtBQUFqRSxLQUEvQjtBQUFBLGNBQ0dYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBeEJlRCxxQjs7S0FBQUEscUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZWI1M2RlMTRiOWQ2YjY1NDMzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgRXBpc29kZSA9IHtcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIG1lbWJlcnM6IHN0cmluZyxcclxuICB0aHVtYm5haWw6IHN0cmluZyxcclxuICBkdXJhdGlvbjogbnVtYmVyLFxyXG4gIHVybDogc3RyaW5nLFxyXG59XHJcblxyXG50eXBlIFBsYXllckNvbnRleHREYXRhPSB7XHJcbiAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcclxuICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XHJcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xyXG4gIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSk7IC8vIGRlZmluaXIgbyBmcm9tYXRvIGRvIHZhbG9yXHJcblxyXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckNvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlKSB7XHJcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcclxuICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKXtcclxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFBsYXlpbmdTdGF0ZShzdGF0ZTogYm9vbGVhbil7XHJcbiAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQbGF5ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGVwaXNvZGVMaXN0LCBjdXJyZW50RXBpc29kZUluZGV4LCBwbGF5LCBpc1BsYXlpbmcsIHRvZ2dsZVBsYXksIHNldFBsYXlpbmdTdGF0ZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9