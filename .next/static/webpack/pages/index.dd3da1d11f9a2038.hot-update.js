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

/***/ "./util/functions.js":
/*!***************************!*\
  !*** ./util/functions.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchFloorArr\": function() { return /* binding */ fetchFloorArr; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nfunction fetchFloorArr(address, start) {\n    return _fetchFloorArr.apply(this, arguments);\n}\nfunction _fetchFloorArr() {\n    _fetchFloorArr = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(address, start) {\n        var fetchAssetsRequest, assetsData, floorArr, fetchFloorPrice, _fetchFloorPrice;\n        return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n            while(1)switch(_ctx1.prev = _ctx1.next){\n                case 0:\n                    fetchFloorPrice = function _fetchFloorPrice1(element) {\n                        return _fetchFloorPrice.apply(this, arguments);\n                    };\n                    _fetchFloorPrice = function __fetchFloorPrice() {\n                        _fetchFloorPrice = _asyncToGenerator(C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(element) {\n                            var fetchFloorRequest, floorData, floorElement;\n                            return C_Users_Lewis_Desktop_floor_mvp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return fetch(\"https://api.opensea.io/api/v1/collection/\".concat(element.collection.slug, \"/stats\"));\n                                    case 2:\n                                        fetchFloorRequest = _ctx.sent;\n                                        _ctx.next = 5;\n                                        return fetchFloorRequest.json();\n                                    case 5:\n                                        floorData = _ctx.sent;\n                                        floorElement = {\n                                            image: element.image_url,\n                                            name: element.name,\n                                            collection: element.collection.name,\n                                            description: element.collection.description,\n                                            banner_image_url: element.collection.banner_image_url,\n                                            slug: element.collection.slug,\n                                            floor: floorData.stats.floor_price\n                                        };\n                                        return _ctx.abrupt(\"return\", floorArr.push(floorElement));\n                                    case 8:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        }));\n                        return _fetchFloorPrice.apply(this, arguments);\n                    };\n                    _ctx1.next = 4;\n                    return fetch(\"https://api.opensea.io/api/v1/assets/?owner=\".concat(address, \"&order_direction=asc&limit=10\"));\n                case 4:\n                    fetchAssetsRequest = _ctx1.sent;\n                    _ctx1.next = 7;\n                    return fetchAssetsRequest.json();\n                case 7:\n                    assetsData = _ctx1.sent;\n                    floorArr = [];\n                    ;\n                    ;\n                    ;\n                    assetsData.assets.forEach(function(element) {\n                        fetchFloorPrice(element);\n                    });\n                    return _ctx1.abrupt(\"return\", floorArr);\n                case 14:\n                case \"end\":\n                    return _ctx1.stop();\n            }\n        }, _callee1);\n    }));\n    return _fetchFloorArr.apply(this, arguments);\n}\n;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2Z1bmN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBZUEsYUFBYSxDQUFDQyxPQUFPLEVBQUVDLEtBQUs7V0FBNUJGLGNBQWE7Q0EyQmxDO1NBM0JxQkEsY0FBYTtJQUFiQSxjQUFhLEdBQTVCLCtLQUE2QkMsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDMUNDLGtCQUFrQixFQUNsQkMsVUFBVSxFQUNWQyxRQUFRLEVBRUNDLGVBQWUsRUFBZkEsZ0JBQWU7Ozs7b0JBQWZBLGVBQWUsWUFBZkEsaUJBQWUsQ0FBQ0MsT0FBTzsrQkFBdkJELGdCQUFlOztvQkFBZkEsZ0JBQWUsWUFBZkEsaUJBQWU7d0JBQWZBLGdCQUFlLEdBQTlCLDhLQUErQkMsT0FBTyxFQUFFO2dDQUNoQ0MsaUJBQWlCLEVBQ2pCQyxTQUFTLEVBRVRDLFlBQVk7Ozs7OytDQUhjQyxLQUFLLENBQUMsMkNBQTBDLENBQTBCLE1BQU0sQ0FBOUJKLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDQyxJQUFJLEVBQUMsUUFBTSxDQUFDLENBQUM7O3dDQUE1R0wsaUJBQWlCLFlBQTJGOzsrQ0FDMUZBLGlCQUFpQixDQUFDTSxJQUFJLEVBQUU7O3dDQUExQ0wsU0FBUyxZQUFpQzt3Q0FFMUNDLFlBQVksR0FBRzs0Q0FDbkJLLEtBQUssRUFBRVIsT0FBTyxDQUFDUyxTQUFTOzRDQUN4QkMsSUFBSSxFQUFFVixPQUFPLENBQUNVLElBQUk7NENBQ2xCTCxVQUFVLEVBQUVMLE9BQU8sQ0FBQ0ssVUFBVSxDQUFDSyxJQUFJOzRDQUNuQ0MsV0FBVyxFQUFFWCxPQUFPLENBQUNLLFVBQVUsQ0FBQ00sV0FBVzs0Q0FDM0NDLGdCQUFnQixFQUFFWixPQUFPLENBQUNLLFVBQVUsQ0FBQ08sZ0JBQWdCOzRDQUNyRE4sSUFBSSxFQUFFTixPQUFPLENBQUNLLFVBQVUsQ0FBQ0MsSUFBSTs0Q0FDN0JPLEtBQUssRUFBRVgsU0FBUyxDQUFDWSxLQUFLLENBQUNDLFdBQVc7eUNBQ25DLENBQUM7cUVBRUtqQixRQUFRLENBQUNrQixJQUFJLENBQUNiLFlBQVksQ0FBQzs7Ozs7O3lCQUNuQzsrQkFmY0osZ0JBQWU7OzsyQkFKR0ssS0FBSyxDQUFDLDhDQUE2QyxDQUFVLE1BQTZCLENBQXJDVixPQUFPLEVBQUMsK0JBQTZCLENBQUMsQ0FBQzs7b0JBQXZIRSxrQkFBa0IsYUFBcUc7OzJCQUNwR0Esa0JBQWtCLENBQUNXLElBQUksRUFBRTs7b0JBQTVDVixVQUFVLGFBQWtDO29CQUM1Q0MsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7OztvQkFtQnBCRCxVQUFVLENBQUNvQixNQUFNLENBQUNDLE9BQU8sQ0FBQyxTQUFDbEIsT0FBTyxFQUFLO3dCQUNyQ0QsZUFBZSxDQUFDQyxPQUFPLENBQUMsQ0FBQztxQkFDMUIsQ0FBQyxDQUFDO2tEQUVJRixRQUFROzs7Ozs7S0FDbEI7V0EzQnFCTCxjQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWwvZnVuY3Rpb25zLmpzP2RjNTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRmxvb3JBcnIoYWRkcmVzcywgc3RhcnQpIHtcclxuICAgIGNvbnN0IGZldGNoQXNzZXRzUmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuc2VhLmlvL2FwaS92MS9hc3NldHMvP293bmVyPSR7YWRkcmVzc30mb3JkZXJfZGlyZWN0aW9uPWFzYyZsaW1pdD0xMGApO1xyXG4gICAgY29uc3QgYXNzZXRzRGF0YSA9IGF3YWl0IGZldGNoQXNzZXRzUmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zdCBmbG9vckFyciA9IFtdO1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEZsb29yUHJpY2UoZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBmZXRjaEZsb29yUmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuc2VhLmlvL2FwaS92MS9jb2xsZWN0aW9uLyR7ZWxlbWVudC5jb2xsZWN0aW9uLnNsdWd9L3N0YXRzYCk7XHJcbiAgICAgIGNvbnN0IGZsb29yRGF0YSA9IGF3YWl0IGZldGNoRmxvb3JSZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IGZsb29yRWxlbWVudCA9IHtcclxuICAgICAgICBpbWFnZTogZWxlbWVudC5pbWFnZV91cmwsXHJcbiAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxyXG4gICAgICAgIGNvbGxlY3Rpb246IGVsZW1lbnQuY29sbGVjdGlvbi5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlbGVtZW50LmNvbGxlY3Rpb24uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYmFubmVyX2ltYWdlX3VybDogZWxlbWVudC5jb2xsZWN0aW9uLmJhbm5lcl9pbWFnZV91cmwsXHJcbiAgICAgICAgc2x1ZzogZWxlbWVudC5jb2xsZWN0aW9uLnNsdWcsXHJcbiAgICAgICAgZmxvb3I6IGZsb29yRGF0YS5zdGF0cy5mbG9vcl9wcmljZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIGZsb29yQXJyLnB1c2goZmxvb3JFbGVtZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgYXNzZXRzRGF0YS5hc3NldHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBmZXRjaEZsb29yUHJpY2UoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmxvb3JBcnI7XHJcbn07Il0sIm5hbWVzIjpbImZldGNoRmxvb3JBcnIiLCJhZGRyZXNzIiwic3RhcnQiLCJmZXRjaEFzc2V0c1JlcXVlc3QiLCJhc3NldHNEYXRhIiwiZmxvb3JBcnIiLCJmZXRjaEZsb29yUHJpY2UiLCJlbGVtZW50IiwiZmV0Y2hGbG9vclJlcXVlc3QiLCJmbG9vckRhdGEiLCJmbG9vckVsZW1lbnQiLCJmZXRjaCIsImNvbGxlY3Rpb24iLCJzbHVnIiwianNvbiIsImltYWdlIiwiaW1hZ2VfdXJsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYmFubmVyX2ltYWdlX3VybCIsImZsb29yIiwic3RhdHMiLCJmbG9vcl9wcmljZSIsInB1c2giLCJhc3NldHMiLCJmb3JFYWNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/functions.js\n");

/***/ })

});