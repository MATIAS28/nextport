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

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Carousel\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Carousel = function(param) {\n    var display = param.display;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), img = ref[0], setImg = ref[1];\n    var imgs = [\n        \"/carousel/img1.png\",\n        \"/carousel/img2.png\",\n        \"/carousel/img3.png\",\n        \"/carousel/img4.png\",\n        \"/carousel/img5.png\",\n        \"/carousel/img6.png\",\n        \"/carousel/img7.png\",\n        \"/carousel/img8.png\",\n        \"/carousel/img9.png\", \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"d-block w-100\",\n                src: imgs[img],\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matias\\\\Desktop\\\\nextport\\\\components\\\\carousel.js\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setImg(function(prevImg) {\n                                return prevImg - 1;\n                            });\n                        },\n                        children: \"Anterior\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matias\\\\Desktop\\\\nextport\\\\components\\\\carousel.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setImg(function(prevImg) {\n                                return prevImg + 1;\n                            });\n                        },\n                        children: \"Siguiente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matias\\\\Desktop\\\\nextport\\\\components\\\\carousel.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Matias\\\\Desktop\\\\nextport\\\\components\\\\carousel.js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matias\\\\Desktop\\\\nextport\\\\components\\\\carousel.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this);\n};\n_s(Carousel, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWdDOztBQUV6QixJQUFPQyxRQUFRLEdBQUcsZ0JBQWU7UUFBYkMsT0FBTyxTQUFQQSxPQUFPOztJQUNoQyxJQUFzQkYsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUhuQyxHQUdZLEdBQVlBLEdBQVcsR0FBdkIsRUFIWixNQUdvQixHQUFJQSxHQUFXLEdBQWY7SUFDbEIsSUFBTUssSUFBSSxHQUFHO1FBQUMsb0JBQW9CO1FBQUUsb0JBQW9CO1FBQUUsb0JBQW9CO1FBQUUsb0JBQW9CO1FBQUUsb0JBQW9CO1FBQUUsb0JBQW9CO1FBQUUsb0JBQW9CO1FBQUUsb0JBQW9CO1FBQUUsb0JBQW9CO0tBQUc7SUFDbk4scUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDSCxLQUFHO2dCQUFDSSxTQUFTLEVBQUMsZUFBZTtnQkFBQ0MsR0FBRyxFQUFFSCxJQUFJLENBQUNGLEdBQUcsQ0FBQztnQkFBRU0sR0FBRyxFQUFDLEVBQUU7Ozs7O3FCQUFFOzBCQUN2RCw4REFBQ0gsS0FBRzs7a0NBQ0osOERBQUNJLFFBQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBTVAsTUFBTSxDQUFDUSxTQUFBQSxPQUFPO3VDQUFJQSxPQUFPLEdBQUMsQ0FBQzs2QkFBQSxDQUFDO3lCQUFBO2tDQUFFLFVBQVE7Ozs7OzZCQUFTO2tDQUN0RSw4REFBQ0YsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNUCxNQUFNLENBQUNRLFNBQUFBLE9BQU87dUNBQUlBLE9BQU8sR0FBQyxDQUFDOzZCQUFBLENBQUM7eUJBQUE7a0NBQUUsV0FBUzs7Ozs7NkJBQVM7Ozs7OztxQkFDakU7Ozs7OzthQUNGLENBQ1Q7Q0FDSjtHQVphWCxRQUFRO0FBQVJBLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz9jM2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCAgQ2Fyb3VzZWwgPSAoe2Rpc3BsYXl9KSA9PiB7XHJcbiAgY29uc3QgW2ltZywgc2V0SW1nXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgaW1ncyA9IFsnL2Nhcm91c2VsL2ltZzEucG5nJywgJy9jYXJvdXNlbC9pbWcyLnBuZycsICcvY2Fyb3VzZWwvaW1nMy5wbmcnLCAnL2Nhcm91c2VsL2ltZzQucG5nJywgJy9jYXJvdXNlbC9pbWc1LnBuZycsICcvY2Fyb3VzZWwvaW1nNi5wbmcnLCAnL2Nhcm91c2VsL2ltZzcucG5nJywgJy9jYXJvdXNlbC9pbWc4LnBuZycsICcvY2Fyb3VzZWwvaW1nOS5wbmcnLCBdXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBzcmM9e2ltZ3NbaW1nXX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SW1nKHByZXZJbWcgPT4gcHJldkltZy0xKX0+QW50ZXJpb3I8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SW1nKHByZXZJbWcgPT4gcHJldkltZysxKX0+U2lndWllbnRlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDYXJvdXNlbCIsImRpc3BsYXkiLCJpbWciLCJzZXRJbWciLCJpbWdzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayIsInByZXZJbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ })

});