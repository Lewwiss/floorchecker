"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Navigation = function(param) {\n    var selected = param.selected;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), top = ref[0], setTop = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset === 0) {\n                setTop(true);\n            } else {\n                setTop(false);\n            }\n            ;\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"z-50 w-full fixed px-10 duration-300 \".concat(top ? \"py-7\" : \"bg-neutral-900 py-5 drop-shadow-2xl\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-2 md:grid-cols-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-start\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\components\\\\Navigation.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/download\",\n                        className: \"py-3.5 px-6 rounded-full border-white border-2 text-white font-bold text-md hover:bg-white hover:text-neutral-900 hover:scale-95 duration-300\",\n                        children: \"Get the app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\components\\\\Navigation.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\components\\\\Navigation.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\components\\\\Navigation.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\components\\\\Navigation.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navigation, \"3+L5C4BXCkvfI+CLvYAvKVZ7bm8=\");\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBNEM7O0FBRTVDLElBQU1FLFVBQVUsR0FBRyxnQkFBZ0I7UUFBZEMsUUFBUSxTQUFSQSxRQUFROztJQUN6QixJQUFzQkgsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUh4QyxHQUdjLEdBQVlBLEdBQWMsR0FBMUIsRUFIZCxNQUdzQixHQUFJQSxHQUFjLEdBQWxCO0lBRWxCQyxnREFBUyxDQUFDLFdBQU07UUFDWkssTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBTTtZQUNwQyxJQUFJRCxNQUFNLENBQUNFLFdBQVcsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCSCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEIsTUFBTTtnQkFDSEEsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pCOztTQUNKLENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztJQUVILHFCQUNJLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBRSx1Q0FBc0MsQ0FBdUQsT0FBckROLEdBQUcsR0FBRyxNQUFNLEdBQUcscUNBQXFDLENBQUU7a0JBQzFHLDRFQUFDSyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxpQ0FBaUM7OzhCQUM1Qyw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDBDQUEwQzs7Ozs7eUJBRW5EOzhCQUNOLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsd0NBQXdDOzhCQUNuRCw0RUFBQ0MsR0FBQzt3QkFBQ0MsSUFBSSxFQUFDLFdBQVc7d0JBQUNGLFNBQVMsRUFBQywrSUFBK0k7a0NBQUMsYUFBVzs7Ozs7NkJBQUk7Ozs7O3lCQUMzTDs7Ozs7O2lCQUNKOzs7OzthQUNKLENBQ1Q7Q0FDSjtHQXpCS1IsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBMkJoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcz9iMDViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKHtzZWxlY3RlZH0pID0+IHtcclxuICAgIGNvbnN0IFt0b3AsIHNldFRvcF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VG9wKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VG9wKGZhbHNlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B6LTUwIHctZnVsbCBmaXhlZCBweC0xMCBkdXJhdGlvbi0zMDAgJHt0b3AgPyBcInB5LTdcIiA6IFwiYmctbmV1dHJhbC05MDAgcHktNSBkcm9wLXNoYWRvdy0yeGxcIn1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZG93bmxvYWRcIiBjbGFzc05hbWU9XCJweS0zLjUgcHgtNiByb3VuZGVkLWZ1bGwgYm9yZGVyLXdoaXRlIGJvcmRlci0yIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtbWQgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCBob3ZlcjpzY2FsZS05NSBkdXJhdGlvbi0zMDBcIj5HZXQgdGhlIGFwcDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2aWdhdGlvbiIsInNlbGVjdGVkIiwidG9wIiwic2V0VG9wIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZ2VZT2Zmc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.js\n");

/***/ })

});