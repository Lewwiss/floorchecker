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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar Home = function() {\n    function test(address, limit) {\n        return _test.apply(this, arguments);\n    }\n    function _test() {\n        _test = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(address, limit) {\n            var floorArr, fetchAssetsRequest, assetsData, fetchFloorPrice, _fetchFloorPrice;\n            return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        fetchFloorPrice = function _fetchFloorPrice1(slug) {\n                            return _fetchFloorPrice.apply(this, arguments);\n                        };\n                        _fetchFloorPrice = function __fetchFloorPrice() {\n                            _fetchFloorPrice = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(slug) {\n                                var fetchFloorRequest, floorData;\n                                return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return fetch(\"https://api.opensea.io/api/v1/collection/\".concat(slug, \"/stats\"));\n                                        case 2:\n                                            fetchFloorRequest = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return fetchFloorRequest.json();\n                                        case 5:\n                                            floorData = _ctx.sent;\n                                            return _ctx.abrupt(\"return\", floorArr.push({\n                                                slug: slug,\n                                                floor: floorData.stats.floor_price\n                                            }));\n                                        case 7:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return _fetchFloorPrice.apply(this, arguments);\n                        };\n                        console.log(address, limit);\n                        floorArr = [];\n                        _ctx1.next = 6;\n                        return fetch(\"https://api.opensea.io/api/v1/assets/?owner=\".concat(address, \"&order_direction=asc&limit=\").concat(limit));\n                    case 6:\n                        fetchAssetsRequest = _ctx1.sent;\n                        _ctx1.next = 9;\n                        return fetchAssetsRequest.json();\n                    case 9:\n                        assetsData = _ctx1.sent;\n                        ;\n                        ;\n                        ;\n                        assetsData.assets.forEach(function(element) {\n                            fetchFloorPrice(element.collection.slug);\n                        });\n                        console.log(floorArr);\n                    case 15:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return _test.apply(this, arguments);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Floor Checker - Find The Total Price For Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return test(\"0x148089038088cC49CDcF26e0f96776c25e5CfACd\", \"10\");\n                    },\n                    className: \"text-white bg-blue-600 py-4 px-6\",\n                    children: \"Click this\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBRTdCLElBQU1DLElBQUksR0FBRyxXQUFNO2FBRUZDLElBQUksQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLO2VBQW5CRixLQUFJOzthQUFKQSxLQUFJO1FBQUpBLEtBQUksR0FBbkIsK0tBQW9CQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtnQkFFOUJDLFFBQVEsRUFFTkMsa0JBQWtCLEVBQ2xCQyxVQUFVLEVBRURDLGVBQWUsRUFBZkEsZ0JBQWU7Ozs7d0JBQWZBLGVBQWUsWUFBZkEsaUJBQWUsQ0FBQ0MsSUFBSTttQ0FBcEJELGdCQUFlOzt3QkFBZkEsZ0JBQWUsWUFBZkEsaUJBQWU7NEJBQWZBLGdCQUFlLEdBQTlCLDhLQUErQkMsSUFBSSxFQUFFO29DQUMzQkMsaUJBQWlCLEVBQ2pCQyxTQUFTOzs7OzttREFEaUJDLEtBQUssQ0FBQywyQ0FBMEMsQ0FBTyxNQUFNLENBQVhILElBQUksRUFBQyxRQUFNLENBQUMsQ0FBQzs7NENBQXpGQyxpQkFBaUIsWUFBd0U7O21EQUN2RUEsaUJBQWlCLENBQUNHLElBQUksRUFBRTs7NENBQTFDRixTQUFTLFlBQWlDO3lFQUV6Q04sUUFBUSxDQUFDUyxJQUFJLENBQUM7Z0RBQUNMLElBQUksRUFBRUEsSUFBSTtnREFBRU0sS0FBSyxFQUFFSixTQUFTLENBQUNLLEtBQUssQ0FBQ0MsV0FBVzs2Q0FBQyxDQUFDOzs7Ozs7NkJBQ3pFO21DQUxjVCxnQkFBZTs7d0JBTjlCVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLE9BQU8sRUFBRUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzsrQkFFZU8sS0FBSyxDQUFDLDhDQUE2QyxDQUF1Q1IsTUFBSyxDQUExQ0QsT0FBTyxFQUFDLDZCQUEyQixDQUFRLFFBQU5DLEtBQUssQ0FBRSxDQUFDOzt3QkFBN0hFLGtCQUFrQixhQUEyRzs7K0JBQzFHQSxrQkFBa0IsQ0FBQ08sSUFBSSxFQUFFOzt3QkFBNUNOLFVBQVUsYUFBa0M7Ozs7d0JBU2xEQSxVQUFVLENBQUNhLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBSzs0QkFDbkNkLGVBQWUsQ0FBQ2MsT0FBTyxDQUFDQyxVQUFVLENBQUNkLElBQUksQ0FBQyxDQUFDO3lCQUM1QyxDQUFDLENBQUM7d0JBRUhTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxRQUFRLENBQUMsQ0FBQzs7Ozs7O1NBRXpCO2VBcEJnQkgsS0FBSTs7O0lBc0JuQixxQkFDRSw4REFBQ3NCLEtBQUc7OzBCQUNGLDhEQUFDeEIsa0RBQUk7O2tDQUNILDhEQUFDeUIsT0FBSztrQ0FBQyxzREFBb0Q7Ozs7OzZCQUFRO2tDQUNuRSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs2QkFBRzs7Ozs7O3FCQUNsQzswQkFDUCw4REFBQ0osS0FBRzswQkFDRiw0RUFBQ0ssUUFBTTtvQkFBQ0MsT0FBTyxFQUFFOytCQUFNNUIsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLElBQUksQ0FBQztxQkFBQTtvQkFBRTZCLFNBQVMsRUFBQyxrQ0FBa0M7OEJBQUMsWUFFOUg7Ozs7O3lCQUFTOzs7OztxQkFDTDs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBckNLOUIsS0FBQUEsSUFBSTtBQXVDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHRlc3QoYWRkcmVzcywgbGltaXQpIHtcclxuICAgIGNvbnNvbGUubG9nKGFkZHJlc3MsIGxpbWl0KTtcclxuICAgIGxldCBmbG9vckFyciA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQXNzZXRzUmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuc2VhLmlvL2FwaS92MS9hc3NldHMvP293bmVyPSR7YWRkcmVzc30mb3JkZXJfZGlyZWN0aW9uPWFzYyZsaW1pdD0ke2xpbWl0fWApO1xyXG4gICAgY29uc3QgYXNzZXRzRGF0YSA9IGF3YWl0IGZldGNoQXNzZXRzUmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hGbG9vclByaWNlKHNsdWcpIHtcclxuICAgICAgICBjb25zdCBmZXRjaEZsb29yUmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuc2VhLmlvL2FwaS92MS9jb2xsZWN0aW9uLyR7c2x1Z30vc3RhdHNgKTtcclxuICAgICAgICBjb25zdCBmbG9vckRhdGEgPSBhd2FpdCBmZXRjaEZsb29yUmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmbG9vckRhdGEuc3RhdHMuZmxvb3JfcHJpY2UpO1xyXG4gICAgICAgIHJldHVybiBmbG9vckFyci5wdXNoKHtzbHVnOiBzbHVnLCBmbG9vcjogZmxvb3JEYXRhLnN0YXRzLmZsb29yX3ByaWNlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzc2V0c0RhdGEuYXNzZXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBmZXRjaEZsb29yUHJpY2UoZWxlbWVudC5jb2xsZWN0aW9uLnNsdWcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmxvb3JBcnIpO1xyXG5cclxufTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5GbG9vciBDaGVja2VyIC0gRmluZCBUaGUgVG90YWwgUHJpY2UgRm9yIFlvdXIgV2FsbGV0PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRlc3QoXCIweDE0ODA4OTAzODA4OGNDNDlDRGNGMjZlMGY5Njc3NmMyNWU1Q2ZBQ2RcIiwgXCIxMFwiKX0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTYwMCBweS00IHB4LTZcIj5cclxuICAgICAgICAgIENsaWNrIHRoaXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiSGVhZCIsIkhvbWUiLCJ0ZXN0IiwiYWRkcmVzcyIsImxpbWl0IiwiZmxvb3JBcnIiLCJmZXRjaEFzc2V0c1JlcXVlc3QiLCJhc3NldHNEYXRhIiwiZmV0Y2hGbG9vclByaWNlIiwic2x1ZyIsImZldGNoRmxvb3JSZXF1ZXN0IiwiZmxvb3JEYXRhIiwiZmV0Y2giLCJqc29uIiwicHVzaCIsImZsb29yIiwic3RhdHMiLCJmbG9vcl9wcmljZSIsImNvbnNvbGUiLCJsb2ciLCJhc3NldHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNvbGxlY3Rpb24iLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});