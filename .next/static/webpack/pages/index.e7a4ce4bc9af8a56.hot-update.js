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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar Home = function() {\n    function test(address, limit) {\n        return _test.apply(this, arguments);\n    }\n    function _test() {\n        _test = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address, limit) {\n            var fetchAssets, data;\n            return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(address, limit);\n                        _ctx.next = 3;\n                        return fetch(\"https://api.opensea.io/api/v1/assets/?owner=\".concat(address, \"&order_direction=asc&limit=\").concat(limit));\n                    case 3:\n                        fetchAssets = _ctx.sent;\n                        _ctx.next = 6;\n                        return fetchAssets.json();\n                    case 6:\n                        data = _ctx.sent;\n                        console.log(data);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _test.apply(this, arguments);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Floor Checker - Find The Total Price For Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return test(\"0x148089038088cC49CDcF26e0f96776c25e5CfACd\", \"10\");\n                    },\n                    className: \"text-white bg-blue-600 py-4 px-6\",\n                    children: \"Click this\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBRTdCLElBQU1DLElBQUksR0FBRyxXQUFNO2FBRUZDLElBQUksQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLO2VBQW5CRixLQUFJOzthQUFKQSxLQUFJO1FBQUpBLEtBQUksR0FBbkIsOEtBQW9CQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtnQkFHNUJDLFdBQVcsRUFDWEMsSUFBSTs7Ozt3QkFIVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLE9BQU8sRUFBRUMsS0FBSyxDQUFDLENBQUM7OytCQUVGSyxLQUFLLENBQUMsOENBQTZDLENBQXVDTCxNQUFLLENBQTFDRCxPQUFPLEVBQUMsNkJBQTJCLENBQVEsUUFBTkMsS0FBSyxDQUFFLENBQUM7O3dCQUF0SEMsV0FBVyxZQUEyRzs7K0JBQ3pHQSxXQUFXLENBQUNLLElBQUksRUFBRTs7d0JBQS9CSixJQUFJLFlBQTJCO3dCQUVyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDOzs7Ozs7U0FHbkI7ZUFUY0osS0FBSTs7O0lBV25CLHFCQUNFLDhEQUFDUyxLQUFHOzswQkFDRiw4REFBQ1gsa0RBQUk7O2tDQUNILDhEQUFDWSxPQUFLO2tDQUFDLHNEQUFvRDs7Ozs7NkJBQVE7a0NBQ25FLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzZCQUFHOzs7Ozs7cUJBQ2xDOzBCQUNQLDhEQUFDSixLQUFHOzBCQUNGLDRFQUFDSyxRQUFNO29CQUFDQyxPQUFPLEVBQUU7K0JBQU1mLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxJQUFJLENBQUM7cUJBQUE7b0JBQUVnQixTQUFTLEVBQUMsa0NBQWtDOzhCQUFDLFlBRTlIOzs7Ozt5QkFBUzs7Ozs7cUJBQ0w7Ozs7OzthQUNGLENBQ047Q0FDSDtBQTFCS2pCLEtBQUFBLElBQUk7QUE0QlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiB0ZXN0KGFkZHJlc3MsIGxpbWl0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzLCBsaW1pdCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hBc3NldHMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbnNlYS5pby9hcGkvdjEvYXNzZXRzLz9vd25lcj0ke2FkZHJlc3N9Jm9yZGVyX2RpcmVjdGlvbj1hc2MmbGltaXQ9JHtsaW1pdH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFzc2V0cy5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkZsb29yIENoZWNrZXIgLSBGaW5kIFRoZSBUb3RhbCBQcmljZSBGb3IgWW91ciBXYWxsZXQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGVzdChcIjB4MTQ4MDg5MDM4MDg4Y0M0OUNEY0YyNmUwZjk2Nzc2YzI1ZTVDZkFDZFwiLCBcIjEwXCIpfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIHB5LTQgcHgtNlwiPlxyXG4gICAgICAgICAgQ2xpY2sgdGhpc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJIZWFkIiwiSG9tZSIsInRlc3QiLCJhZGRyZXNzIiwibGltaXQiLCJmZXRjaEFzc2V0cyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});