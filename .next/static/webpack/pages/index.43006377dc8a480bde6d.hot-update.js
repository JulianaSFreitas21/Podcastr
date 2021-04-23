webpackHotUpdate_N_E("pages/index",{

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

  function playList(List, index) {
    setEpisodeList(list);
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
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllci5Db250ZXh0LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlBsYXllckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJlcGlzb2RlTGlzdCIsInNldEVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsInNldEN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwiTGlzdCIsImluZGV4IiwibGlzdCIsInRvZ2dsZVBsYXkiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQyxDLENBQThEOztBQU05RCxTQUFTQyxxQkFBVCxPQUF1RTtBQUFBOztBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7O0FBQUEsa0JBQ3RDQyxzREFBUSxDQUFDLEVBQUQsQ0FEOEI7QUFBQSxNQUNyRUMsV0FEcUU7QUFBQSxNQUN4REMsY0FEd0Q7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFDLENBQUQsQ0FGYztBQUFBLE1BRXJFRyxtQkFGcUU7QUFBQSxNQUVoREMsc0JBRmdEOztBQUFBLG1CQUcxQ0osc0RBQVEsQ0FBQyxLQUFELENBSGtDO0FBQUEsTUFHckVLLFNBSHFFO0FBQUEsTUFHMURDLFlBSDBEOztBQUs1RSxXQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBdUI7QUFDckJOLGtCQUFjLENBQUMsQ0FBQ00sT0FBRCxDQUFELENBQWQ7QUFDQUosMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQUVELFdBQVNHLFFBQVQsQ0FBa0JDLElBQWxCLEVBQW1DQyxLQUFuQyxFQUFrRDtBQUNoRFQsa0JBQWMsQ0FBQ1UsSUFBRCxDQUFkO0FBQ0FSLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDQUUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFFRCxXQUFTTyxVQUFULEdBQXFCO0FBQ25CUCxnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNEOztBQUVELFdBQVNTLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXdDO0FBQ3RDVCxnQkFBWSxDQUFDUyxLQUFELENBQVo7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUNFLFNBQUssRUFDSDtBQUNFZCxpQkFBVyxFQUFYQSxXQURGO0FBRUVFLHlCQUFtQixFQUFuQkEsbUJBRkY7QUFHRUksVUFBSSxFQUFKQSxJQUhGO0FBSUVGLGVBQVMsRUFBVEEsU0FKRjtBQUtFUSxnQkFBVSxFQUFWQSxVQUxGO0FBTUVDLHFCQUFlLEVBQWZBO0FBTkYsS0FGSjtBQUFBLGNBV0dmO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBeENlRCxxQjs7S0FBQUEscUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDMwMDYzNzdkYzhhNDgwYmRlNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIEVwaXNvZGUgPSB7XHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBtZW1iZXJzOiBzdHJpbmcsXHJcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXHJcbiAgZHVyYXRpb246IG51bWJlcixcclxuICB1cmw6IHN0cmluZyxcclxufVxyXG5cclxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YT0ge1xyXG4gIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XHJcbiAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xyXG4gIGlzUGxheWluZzogYm9vbGVhbjtcclxuICBwbGF5OiAoZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcclxuICBzZXRQbGF5aW5nU3RhdGU6IChzdGF0ZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpOyAvLyBkZWZpbmlyIG8gZnJvbWF0byBkbyB2YWxvclxyXG5cclxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn06IFBsYXllckNvbnRleHRQcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlKSB7XHJcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcclxuICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlMaXN0KExpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XHJcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xyXG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpe1xyXG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOiBib29sZWFuKXtcclxuICAgIHNldElzUGxheWluZyhzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgIHZhbHVlPXtcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgZXBpc29kZUxpc3QsIFxyXG4gICAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCwgXHJcbiAgICAgICAgICBwbGF5LCBcclxuICAgICAgICAgIGlzUGxheWluZywgXHJcbiAgICAgICAgICB0b2dnbGVQbGF5LCBcclxuICAgICAgICAgIHNldFBsYXlpbmdTdGF0ZSBcclxuICAgICAgICB9XHJcbiAgICAgIH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==