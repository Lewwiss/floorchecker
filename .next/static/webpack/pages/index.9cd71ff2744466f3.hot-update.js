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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar Home = function() {\n    function test(address, limit) {\n        return _test.apply(this, arguments);\n    }\n    function _test() {\n        _test = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(address, limit) {\n            var fetchAssetsRequest, assetsData, floorArr, fetchFloorPrice, _fetchFloorPrice;\n            return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        fetchFloorPrice = function _fetchFloorPrice1(element) {\n                            return _fetchFloorPrice.apply(this, arguments);\n                        };\n                        _fetchFloorPrice = function __fetchFloorPrice() {\n                            _fetchFloorPrice = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(element) {\n                                var fetchFloorRequest, floorData, floorElement;\n                                return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return fetch(\"https://api.opensea.io/api/v1/collection/\".concat(element.collection.slug, \"/stats\"));\n                                        case 2:\n                                            fetchFloorRequest = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return fetchFloorRequest.json();\n                                        case 5:\n                                            floorData = _ctx.sent;\n                                            floorElement = {\n                                                image: element.image,\n                                                name: element.name,\n                                                collection: element.collection.name,\n                                                description: element.collection.description,\n                                                banner_image_url: element.collection.banner_image_url,\n                                                slug: element.collection.slug,\n                                                floor: floorData.stats.floor_price\n                                            };\n                                            return _ctx.abrupt(\"return\", floorArr.push(floorElement));\n                                        case 8:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return _fetchFloorPrice.apply(this, arguments);\n                        };\n                        _ctx1.next = 4;\n                        return fetch(\"https://api.opensea.io/api/v1/assets/?owner=\".concat(address, \"&order_direction=asc&limit=\").concat(limit));\n                    case 4:\n                        fetchAssetsRequest = _ctx1.sent;\n                        _ctx1.next = 7;\n                        return fetchAssetsRequest.json();\n                    case 7:\n                        assetsData = _ctx1.sent;\n                        floorArr = [];\n                        ;\n                        ;\n                        ;\n                        assetsData.assets.forEach(function(element) {\n                            fetchFloorPrice(element);\n                        });\n                        console.log(floorArr);\n                    case 14:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return _test.apply(this, arguments);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Floor Checker - Find The Total Price For Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return test(\"0x148089038088cC49CDcF26e0f96776c25e5CfACd\", \"10\");\n                    },\n                    className: \"text-white bg-blue-600 py-4 px-6\",\n                    children: \"Click this\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lewis\\\\Desktop\\\\floor-mvp\\\\pages\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiB0ZXN0KGFkZHJlc3MsIGxpbWl0KSB7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hBc3NldHNSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW5zZWEuaW8vYXBpL3YxL2Fzc2V0cy8/b3duZXI9JHthZGRyZXNzfSZvcmRlcl9kaXJlY3Rpb249YXNjJmxpbWl0PSR7bGltaXR9YCk7XHJcbiAgICBjb25zdCBhc3NldHNEYXRhID0gYXdhaXQgZmV0Y2hBc3NldHNSZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBmbG9vckFyciA9IFtdO1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEZsb29yUHJpY2UoZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBmZXRjaEZsb29yUmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuc2VhLmlvL2FwaS92MS9jb2xsZWN0aW9uLyR7ZWxlbWVudC5jb2xsZWN0aW9uLnNsdWd9L3N0YXRzYCk7XHJcbiAgICAgIGNvbnN0IGZsb29yRGF0YSA9IGF3YWl0IGZldGNoRmxvb3JSZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IGZsb29yRWxlbWVudCA9IHtcclxuICAgICAgICBpbWFnZTogZWxlbWVudC5pbWFnZSxcclxuICAgICAgICBuYW1lOiBlbGVtZW50Lm5hbWUsXHJcbiAgICAgICAgY29sbGVjdGlvbjogZWxlbWVudC5jb2xsZWN0aW9uLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGVsZW1lbnQuY29sbGVjdGlvbi5kZXNjcmlwdGlvbixcclxuICAgICAgICBiYW5uZXJfaW1hZ2VfdXJsOiBlbGVtZW50LmNvbGxlY3Rpb24uYmFubmVyX2ltYWdlX3VybCxcclxuICAgICAgICBzbHVnOiBlbGVtZW50LmNvbGxlY3Rpb24uc2x1ZyxcclxuICAgICAgICBmbG9vcjogZmxvb3JEYXRhLnN0YXRzLmZsb29yX3ByaWNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gZmxvb3JBcnIucHVzaChmbG9vckVsZW1lbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3NldHNEYXRhLmFzc2V0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGZldGNoRmxvb3JQcmljZShlbGVtZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZsb29yQXJyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkZsb29yIENoZWNrZXIgLSBGaW5kIFRoZSBUb3RhbCBQcmljZSBGb3IgWW91ciBXYWxsZXQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGVzdChcIjB4MTQ4MDg5MDM4MDg4Y0M0OUNEY0YyNmUwZjk2Nzc2YzI1ZTVDZkFDZFwiLCBcIjEwXCIpfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIHB5LTQgcHgtNlwiPlxyXG4gICAgICAgICAgQ2xpY2sgdGhpc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJIZWFkIiwiSG9tZSIsInRlc3QiLCJhZGRyZXNzIiwibGltaXQiLCJmZXRjaEFzc2V0c1JlcXVlc3QiLCJhc3NldHNEYXRhIiwiZmxvb3JBcnIiLCJmZXRjaEZsb29yUHJpY2UiLCJlbGVtZW50IiwiZmV0Y2hGbG9vclJlcXVlc3QiLCJmbG9vckRhdGEiLCJmbG9vckVsZW1lbnQiLCJmZXRjaCIsImNvbGxlY3Rpb24iLCJzbHVnIiwianNvbiIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYmFubmVyX2ltYWdlX3VybCIsImZsb29yIiwic3RhdHMiLCJmbG9vcl9wcmljZSIsInB1c2giLCJhc3NldHMiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});