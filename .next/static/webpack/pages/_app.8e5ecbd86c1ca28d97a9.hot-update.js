webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/componets/Player/index.tsx":
/*!****************************************!*\
  !*** ./src/componets/Player/index.tsx ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_Player_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/Player.Context */ "./src/contexts/Player.Context.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/componets/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Juliana\\Documents\\GitHub\\Podcastr\\podcastrnext\\src\\componets\\Player\\index.tsx",
    _s = $RefreshSig$();







function Player() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_Player_Context__WEBPACK_IMPORTED_MODULE_5__["PlayerContext"]),
      episodeList = _useContext.episodeList,
      currentEpisodeIndex = _useContext.currentEpisodeIndex,
      isPlaying = _useContext.isPlaying,
      togglePlay = _useContext.togglePlay;

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), episode ?
    /*#__PURE__*/
    // se existe algo em episode faça isso
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this) :
    /*#__PURE__*/
    // senão faça isso
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcastr para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 10
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          trackStyle: {
            backgroundColor: '#04d361'
          },
          railStyle: {
            backgroundColor: '#9f75ff'
          },
          handleStyle: {
            borderColor: '#04d361',
            borderWidth: 4
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), episode &&
      /*#__PURE__*/
      // && para fazer somente if verdadeiro e || para else
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: episode.url,
        autoPlay: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-previous.svg",
            alt: "Tocar anterior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,
          disabled: !episode,
          onClick: togglePlay,
          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/pause.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-next.svg",
            alt: "Tocar Pr\xF3xima"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(Player, "RiQcMfixu4zIhx39d30oJBJkGnU=");

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmV0cy9QbGF5ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBsYXllciIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0IiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwidG9nZ2xlUGxheSIsImVwaXNvZGUiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJwcm9ncmVzcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJzbGlkZXIiLCJlbXB0eVNsaWRlciIsInVybCIsImJ1dHRvbnMiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVPLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxvQkFNbkJDLHdEQUFVLENBQUNDLHNFQUFELENBTlM7QUFBQSxNQUVyQkMsV0FGcUIsZUFFckJBLFdBRnFCO0FBQUEsTUFHckJDLG1CQUhxQixlQUdyQkEsbUJBSHFCO0FBQUEsTUFJckJDLFNBSnFCLGVBSXJCQSxTQUpxQjtBQUFBLE1BS3JCQyxVQUxxQixlQUtyQkEsVUFMcUI7O0FBUXZCLE1BQU1DLE9BQU8sR0FBR0osV0FBVyxDQUFDQyxtQkFBRCxDQUEzQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFSSwwREFBTSxDQUFDQyxlQUF2QjtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUMsY0FBVDtBQUF3QixXQUFHLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFrQkU7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixrQkFBUSxFQUFFLENBQUNFLE9BQWpDO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCRixlQXFCRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGtCQUFRLEVBQUUsQ0FBQ0EsT0FBakM7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRFRDs7R0F0RmVQLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ZTVlY2JkODZjMWNhMjhkOTdhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xyXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJ1xyXG5cclxuaW1wb3J0IHtQbGF5ZXJDb250ZXh0fSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXIuQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKCkge1xyXG4gIGNvbnN0IHtcclxuICAgIGVwaXNvZGVMaXN0LCBcclxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxyXG4gICAgaXNQbGF5aW5nLCBcclxuICAgIHRvZ2dsZVBsYXlcclxuICB9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW5lcn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIvPlxyXG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSA8L3N0cm9uZz5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICB7IGVwaXNvZGUgPyAoIC8vIHNlIGV4aXN0ZSBhbGdvIGVtIGVwaXNvZGUgZmHDp2EgaXNzb1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHdpZHRoID17NTkyfVxyXG4gICAgICAgICAgICBoZWlnaHQgPXs1OTJ9XHJcbiAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIgIFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6ICggLy8gc2Vuw6NvIGZhw6dhIGlzc29cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5UGxheWVyfT5cclxuICAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdHIgcGFyYSBvdXZpcjwvc3Ryb25nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIH1cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXshZXBpc29kZT8gc3R5bGVzLmVtcHR5OiAnJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgPHNwYW4+MDA6MDA8L3NwYW4+XHJcbiAgICAgICAgICB7IGVwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgIDxTbGlkZXIgXHJcbiAgICAgICAgICAgICAgdHJhY2tTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDRkMzYxJyB9fVxyXG4gICAgICAgICAgICAgIHJhaWxTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOWY3NWZmJyB9fVxyXG4gICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7IGJvcmRlckNvbG9yOiAnIzA0ZDM2MScsIGJvcmRlcldpZHRoOiA0IH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICkgfVxyXG4gICAgICAgICAgPHNwYW4+MDA6MDA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsgZXBpc29kZSAmJiAoIC8vICYmIHBhcmEgZmF6ZXIgc29tZW50ZSBpZiB2ZXJkYWRlaXJvIGUgfHwgcGFyYSBlbHNlXHJcbiAgICAgICAgICA8YXVkaW8gXHJcbiAgICAgICAgICAgIHNyYz17ZXBpc29kZS51cmx9XHJcbiAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXshZXBpc29kZX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgYW50ZXJpb3JcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn0gXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsgaXNQbGF5aW5nXHJcbiAgICAgICAgICAgICAgPyA8aW1nIHNyYz1cIi9wYXVzZS5zdmdcIiBhbHQ9XCJUb2NhclwiLz5cclxuICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXJcIi8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIFByw7N4aW1hXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=