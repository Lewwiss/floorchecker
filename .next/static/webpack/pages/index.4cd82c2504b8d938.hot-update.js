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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar Home = function() {\n    function test(address, limit) {\n        return _test.apply(this, arguments);\n    }\n    function _test() {\n        _test = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(address, limit) {\n            var fetchAssetsRequest, data1, fetchFloor;\n            return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        console.log(address, limit);\n                        _ctx1.next = 3;\n                        return fetch(\"https://api.opensea.io/api/v1/assets/?owner=\".concat(address, \"&order_direction=asc&limit=\").concat(limit));\n                    case 3:\n                        fetchAssetsRequest = _ctx1.sent;\n                        _ctx1.next = 6;\n                        return fetchAssetsRequest.json();\n                    case 6:\n                        data1 = _ctx1.sent;\n                        console.log(data1.assets[0].collection);\n                        fetchFloor = function() {\n                            var _ref = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(slug) {\n                                var fetchFloorRequest, data;\n                                return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return fetch(\"https://api.opensea.io/api/v1/collection/\".concat(slug));\n                                        case 2:\n                                            fetchFloorRequest = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return fetchFloorRequest.json();\n                                        case 5:\n                                            data = _ctx.sent;\n                                        case 6:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function fetchFloor(slug) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }();\n                        console.log(fetchFloor(\"superlative-apes\"));\n                    case 10:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return _test.apply(this, arguments);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Floor Checker - Find The Total Price For Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return test(\"0x148089038088cC49CDcF26e0f96776c25e5CfACd\", \"10\");\n                    },\n                    className: \"text-white bg-blue-600 py-4 px-6\",\n                    children: \"Click this\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBRTdCLElBQU1DLElBQUksR0FBRyxXQUFNO2FBRUZDLElBQUksQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLO2VBQW5CRixLQUFJOzthQUFKQSxLQUFJO1FBQUpBLEtBQUksR0FBbkIsK0tBQW9CQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtnQkFHNUJDLGtCQUFrQixFQUNsQkMsS0FBSSxFQUlKQyxVQUFVOzs7O3dCQVBoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLE9BQU8sRUFBRUMsS0FBSyxDQUFDLENBQUM7OytCQUVLTSxLQUFLLENBQUMsOENBQTZDLENBQXVDTixNQUFLLENBQTFDRCxPQUFPLEVBQUMsNkJBQTJCLENBQVEsUUFBTkMsS0FBSyxDQUFFLENBQUM7O3dCQUE3SEMsa0JBQWtCLGFBQTJHOzsrQkFDaEhBLGtCQUFrQixDQUFDTSxJQUFJLEVBQUU7O3dCQUF0Q0wsS0FBSSxhQUFrQzt3QkFFNUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFJLENBQUNNLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7d0JBRWpDTixVQUFVO3VDQUFHLDhLQUFPTyxJQUFJLEVBQUs7b0NBQzNCQyxpQkFBaUIsRUFDakJULElBQUk7Ozs7O21EQURzQkksS0FBSyxDQUFDLDJDQUEwQyxDQUFPLE9BQUxJLElBQUksQ0FBRSxDQUFDOzs0Q0FBbkZDLGlCQUFpQixZQUFrRTs7bURBQ3RFQSxpQkFBaUIsQ0FBQ0osSUFBSSxFQUFFOzs0Q0FBckNMLElBQUksWUFBaUM7Ozs7Ozs2QkFDNUM7NENBSEtDLFVBQVUsQ0FBVU8sSUFBSTs7OzJCQUc3QixDQUFDO3dCQUVGTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQzs7Ozs7O1NBRzdDO2VBaEJjTCxLQUFJOzs7SUFrQm5CLHFCQUNFLDhEQUFDYyxLQUFHOzswQkFDRiw4REFBQ2hCLGtEQUFJOztrQ0FDSCw4REFBQ2lCLE9BQUs7a0NBQUMsc0RBQW9EOzs7Ozs2QkFBUTtrQ0FDbkUsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDbEM7MEJBQ1AsOERBQUNKLEtBQUc7MEJBQ0YsNEVBQUNLLFFBQU07b0JBQUNDLE9BQU8sRUFBRTsrQkFBTXBCLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxJQUFJLENBQUM7cUJBQUE7b0JBQUVxQixTQUFTLEVBQUMsa0NBQWtDOzhCQUFDLFlBRTlIOzs7Ozt5QkFBUzs7Ozs7cUJBQ0w7Ozs7OzthQUNGLENBQ047Q0FDSDtBQWpDS3RCLEtBQUFBLElBQUk7QUFtQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiB0ZXN0KGFkZHJlc3MsIGxpbWl0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzLCBsaW1pdCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hBc3NldHNSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW5zZWEuaW8vYXBpL3YxL2Fzc2V0cy8/b3duZXI9JHthZGRyZXNzfSZvcmRlcl9kaXJlY3Rpb249YXNjJmxpbWl0PSR7bGltaXR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBc3NldHNSZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmFzc2V0c1swXS5jb2xsZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEZsb29yID0gYXN5bmMgKHNsdWcpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hGbG9vclJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbnNlYS5pby9hcGkvdjEvY29sbGVjdGlvbi8ke3NsdWd9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEZsb29yUmVxdWVzdC5qc29uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZldGNoRmxvb3IoXCJzdXBlcmxhdGl2ZS1hcGVzXCIpKTtcclxuXHJcblxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Rmxvb3IgQ2hlY2tlciAtIEZpbmQgVGhlIFRvdGFsIFByaWNlIEZvciBZb3VyIFdhbGxldDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0ZXN0KFwiMHgxNDgwODkwMzgwODhjQzQ5Q0RjRjI2ZTBmOTY3NzZjMjVlNUNmQUNkXCIsIFwiMTBcIil9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctYmx1ZS02MDAgcHktNCBweC02XCI+XHJcbiAgICAgICAgICBDbGljayB0aGlzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkhlYWQiLCJIb21lIiwidGVzdCIsImFkZHJlc3MiLCJsaW1pdCIsImZldGNoQXNzZXRzUmVxdWVzdCIsImRhdGEiLCJmZXRjaEZsb29yIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwianNvbiIsImFzc2V0cyIsImNvbGxlY3Rpb24iLCJzbHVnIiwiZmV0Y2hGbG9vclJlcXVlc3QiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});