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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar Home = function() {\n    function test(address, limit) {\n        return _test.apply(this, arguments);\n    }\n    function _test() {\n        _test = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(address, limit) {\n            var fetchAssetsRequest, data1, thingy, _thingy;\n            return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        thingy = function _thingy1(slug) {\n                            return _thingy.apply(this, arguments);\n                        };\n                        _thingy = function __thingy() {\n                            _thingy = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(slug) {\n                                var fetchFloorRequest, data;\n                                return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return fetch(\"https://api.opensea.io/api/v1/collection/\".concat(slug, \"/stats\"));\n                                        case 2:\n                                            fetchFloorRequest = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return fetchFloorRequest.json();\n                                        case 5:\n                                            data = _ctx.sent;\n                                            console.log(data.floor_price);\n                                        case 7:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return _thingy.apply(this, arguments);\n                        };\n                        console.log(address, limit);\n                        _ctx1.next = 5;\n                        return fetch(\"https://api.opensea.io/api/v1/assets/?owner=\".concat(address, \"&order_direction=asc&limit=\").concat(limit));\n                    case 5:\n                        fetchAssetsRequest = _ctx1.sent;\n                        _ctx1.next = 8;\n                        return fetchAssetsRequest.json();\n                    case 8:\n                        data1 = _ctx1.sent;\n                        //data.assets.forEach((element) => {\n                        //  console.log(element.collection.slug);\n                        //});\n                        console.log(data1);\n                        ;\n                        ;\n                        ;\n                        data1.assets.forEach(function(element) {\n                            thingy(element.slug);\n                        });\n                    case 14:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        /*\r\n    const fetchFloor = async (slug) => {\r\n      const fetchFloorRequest = await fetch(`https://api.opensea.io/api/v1/collection/${slug}`);\r\n      const data = await fetchFloorRequest.json();\r\n      console.log(data);\r\n    };\r\n\r\n\r\n\r\n    console.log(fetchFloor(\"superlativeapes\"));\r\n    */ }));\n        return _test.apply(this, arguments);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Floor Checker - Find The Total Price For Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return test(\"0x148089038088cC49CDcF26e0f96776c25e5CfACd\", \"10\");\n                    },\n                    className: \"text-white bg-blue-600 py-4 px-6\",\n                    children: \"Click this\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBRTdCLElBQU1DLElBQUksR0FBRyxXQUFNO2FBRUZDLElBQUksQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLO2VBQW5CRixLQUFJOzthQUFKQSxLQUFJO1FBQUpBLEtBQUksR0FBbkIsK0tBQW9CQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtnQkFHNUJDLGtCQUFrQixFQUNsQkMsS0FBSSxFQU9LQyxNQUFNLEVBQU5BLE9BQU07Ozs7d0JBQU5BLE1BQU0sWUFBTkEsUUFBTSxDQUFDQyxJQUFJO21DQUFYRCxPQUFNOzt3QkFBTkEsT0FBTSxZQUFOQSxRQUFNOzRCQUFOQSxPQUFNLEdBQXJCLDhLQUFzQkMsSUFBSSxFQUFFO29DQUNwQkMsaUJBQWlCLEVBQ2pCSCxJQUFJOzs7OzttREFEc0JJLEtBQUssQ0FBQywyQ0FBMEMsQ0FBTyxNQUFNLENBQVhGLElBQUksRUFBQyxRQUFNLENBQUMsQ0FBQzs7NENBQXpGQyxpQkFBaUIsWUFBd0U7O21EQUM1RUEsaUJBQWlCLENBQUNFLElBQUksRUFBRTs7NENBQXJDTCxJQUFJLFlBQWlDOzRDQUMzQ00sT0FBTyxDQUFDQyxHQUFHLENBQUNQLElBQUksQ0FBQ1EsV0FBVyxDQUFDLENBQUM7Ozs7Ozs2QkFDL0I7bUNBSmNQLE9BQU07O3dCQVZyQkssT0FBTyxDQUFDQyxHQUFHLENBQUNWLE9BQU8sRUFBRUMsS0FBSyxDQUFDLENBQUM7OytCQUVLTSxLQUFLLENBQUMsOENBQTZDLENBQXVDTixNQUFLLENBQTFDRCxPQUFPLEVBQUMsNkJBQTJCLENBQVEsUUFBTkMsS0FBSyxDQUFFLENBQUM7O3dCQUE3SEMsa0JBQWtCLGFBQTJHOzsrQkFDaEhBLGtCQUFrQixDQUFDTSxJQUFJLEVBQUU7O3dCQUF0Q0wsS0FBSSxhQUFrQzt3QkFFNUMsb0NBQW9DO3dCQUNwQyx5Q0FBeUM7d0JBQ3pDLEtBQUs7d0JBQ0xNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxLQUFJLENBQUM7Ozs7d0JBUWpCQSxLQUFJLENBQUNTLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBSzs0QkFDL0JWLE1BQU0sQ0FBQ1UsT0FBTyxDQUFDVCxJQUFJLENBQUMsQ0FBQzt5QkFDdEIsQ0FBQyxDQUFDOzs7Ozs7UUFJSDtlQXZCYU4sS0FBSTs7O0lBcUNuQixxQkFDRTs7Ozs7a0NBRVc7Ozs7O3NGQUE0RDs7d0JBQzdEbUIsRUFBQUEsNkRBQUksbURBQU07d0JBQUNDOzs7Ozs2QkFBc0I7Ozs7OztxQkFDbEM7MEJBQ1AsUUFBQ0osS0FBRzswQkFDRjtvQkFBUU0sT0FBTyxFQUFFOzs7b0JBQWdFQyxTQUFTOzhCQUFvQyxZQUU5SDs7Ozs7eUJBQVM7Ozs7O3FCQUNMOzs7Ozs7YUFDRixDQUNOO0NBQ0g7QUFwREt4QixLQUFBQSxJQUFJO0FBc0RWLGVBQWVBLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiB0ZXN0KGFkZHJlc3MsIGxpbWl0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzLCBsaW1pdCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hBc3NldHNSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW5zZWEuaW8vYXBpL3YxL2Fzc2V0cy8/b3duZXI9JHthZGRyZXNzfSZvcmRlcl9kaXJlY3Rpb249YXNjJmxpbWl0PSR7bGltaXR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBc3NldHNSZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAvL2RhdGEuYXNzZXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIC8vICBjb25zb2xlLmxvZyhlbGVtZW50LmNvbGxlY3Rpb24uc2x1Zyk7XHJcbiAgICAvL30pO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB0aGluZ3koc2x1Zykge1xyXG4gICAgICBjb25zdCBmZXRjaEZsb29yUmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuc2VhLmlvL2FwaS92MS9jb2xsZWN0aW9uLyR7c2x1Z30vc3RhdHNgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRmxvb3JSZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5mbG9vcl9wcmljZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEuYXNzZXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgdGhpbmd5KGVsZW1lbnQuc2x1Zyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8qXHJcbiAgICBjb25zdCBmZXRjaEZsb29yID0gYXN5bmMgKHNsdWcpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hGbG9vclJlcXVlc3QgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbnNlYS5pby9hcGkvdjEvY29sbGVjdGlvbi8ke3NsdWd9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEZsb29yUmVxdWVzdC5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKGZldGNoRmxvb3IoXCJzdXBlcmxhdGl2ZWFwZXNcIikpO1xyXG4gICAgKi9cclxuXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5GbG9vciBDaGVja2VyIC0gRmluZCBUaGUgVG90YWwgUHJpY2UgRm9yIFlvdXIgV2FsbGV0PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRlc3QoXCIweDE0ODA4OTAzODA4OGNDNDlDRGNGMjZlMGY5Njc3NmMyNWU1Q2ZBQ2RcIiwgXCIxMFwiKX0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTYwMCBweS00IHB4LTZcIj5cclxuICAgICAgICAgIENsaWNrIHRoaXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiSGVhZCIsIkhvbWUiLCJ0ZXN0IiwiYWRkcmVzcyIsImxpbWl0IiwiZmV0Y2hBc3NldHNSZXF1ZXN0IiwiZGF0YSIsInRoaW5neSIsInNsdWciLCJmZXRjaEZsb29yUmVxdWVzdCIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJmbG9vcl9wcmljZSIsImFzc2V0cyIsImZvckVhY2giLCJlbGVtZW50IiwiZGl2IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});