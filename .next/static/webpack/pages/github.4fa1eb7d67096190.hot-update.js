"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./pages/github.js":
/*!*************************!*\
  !*** ./pages/github.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar GitHub = function(param) {\n    var user = param.user, repos = param.repos;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"col-md-4 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"card card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: user.avatar_url,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                                lineNumber: 9,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center text-danger\",\n                                children: [\n                                    \" \",\n                                    user.login,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                                lineNumber: 10,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"col-md-8\",\n                    children: repos.map(function(repo, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card w-75 bg-dark my-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        class: \"card-title text-white\",\n                                        children: repo.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 33\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"card-text text-warning\",\n                                        children: \"la mayor\\xeda son repositorios viejos!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 33\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: repo.html_url,\n                                        target: \"_blank\",\n                                        class: \"btn btn-light\",\n                                        children: \"ver repositorio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 33\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                                lineNumber: 19,\n                                columnNumber: 33\n                            }, _this1)\n                        }, i, false, {\n                            fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                            lineNumber: 18,\n                            columnNumber: 29\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\$\\\\portafolio\\\\pages\\\\github.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_c = GitHub;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GitHub);\nvar _c;\n$RefreshReg$(_c, \"GitHub\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naXRodWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBcUM7QUFFckMsSUFBTUMsTUFBTSxHQUFHLGdCQUFtQjtRQUFqQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLEtBQUssU0FBTEEsS0FBSzs7SUFDeEIscUJBQ0k7a0JBQ0EsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEtBQUs7OzhCQUNoQiw4REFBQ0MsU0FBTztvQkFBQ0QsU0FBUyxFQUFDLFdBQVc7OEJBQzFCLDRFQUFDRSxTQUFPO3dCQUFDRixTQUFTLEVBQUMsZ0JBQWdCOzswQ0FDL0IsOERBQUNHLEtBQUc7Z0NBQUNDLEdBQUcsRUFBRVAsSUFBSSxDQUFDUSxVQUFVO2dDQUFFQyxHQUFHLEVBQUMsRUFBRTs7Ozs7cUNBQUc7MENBQ3BDLDhEQUFDQyxJQUFFO2dDQUFDUCxTQUFTLEVBQUMseUJBQXlCOztvQ0FBQyxHQUFDO29DQUFDSCxJQUFJLENBQUNXLEtBQUs7b0NBQUMsR0FBQzs7Ozs7O3FDQUFLOzs7Ozs7NkJBQ3JEOzs7Ozt5QkFDSjs4QkFFViw4REFBQ1AsU0FBTztvQkFBQ0QsU0FBUyxFQUFDLFVBQVU7OEJBRXJCRixLQUFLLENBQUNXLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLENBQUMsRUFBSzt3QkFDbkIscUJBQ0ksOERBQUNaLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx3QkFBd0I7c0NBQ25DLDRFQUFDRSxTQUFPO2dDQUFDRixTQUFTLEVBQUMsV0FBVzs7a0RBQzlCLDhEQUFDWSxJQUFFO3dDQUFDQyxLQUFLLEVBQUMsdUJBQXVCO2tEQUFFSCxJQUFJLENBQUNJLElBQUk7Ozs7OzhDQUFNO2tEQUNsRCw4REFBQ0MsR0FBQzt3Q0FBQ0YsS0FBSyxFQUFDLHdCQUF3QjtrREFBQyx3Q0FBbUM7Ozs7OzhDQUFJO2tEQUN6RSw4REFBQ0csR0FBQzt3Q0FBQ0MsSUFBSSxFQUFFUCxJQUFJLENBQUNRLFFBQVE7d0NBQUVDLE1BQU0sRUFBQyxRQUFRO3dDQUFDTixLQUFLLEVBQUMsZUFBZTtrREFBQyxpQkFBZTs7Ozs7OENBQUk7Ozs7OztzQ0FDdkU7MkJBTCtCRixDQUFDOzs7O2tDQU14QyxDQUNUO3FCQUNKLENBQUM7Ozs7O3lCQUVBOzs7Ozs7aUJBQ1I7cUJBQ0gsQ0FDTjtDQUNKO0FBN0JLZixLQUFBQSxNQUFNOztBQWtEWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dpdGh1Yi5qcz8zNTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0bWwgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xyXG5cclxuY29uc3QgR2l0SHViID0gKHt1c2VyLCByZXBvc30pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1tZC00IFwiPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWRhbmdlclwiPiB7dXNlci5sb2dpbn0gPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcy5tYXAoKHJlcG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHctNzUgYmctZGFyayBteS0yXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtd2hpdGVcIj57cmVwby5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC13YXJuaW5nXCI+bGEgbWF5b3LDrWEgc29uIHJlcG9zaXRvcmlvcyB2aWVqb3MhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3JlcG8uaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYnRuIGJ0bi1saWdodFwiPnZlciByZXBvc2l0b3JpbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCByZXFfdXNlciA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL01BVElBUzI4JylcclxuICAgIGNvbnN0IHJlcV9yZXBvcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL01BVElBUzI4L3JlcG9zJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXFfdXNlci5qc29uKClcclxuICAgIGNvbnN0IHJlcG9zID0gYXdhaXQgcmVxX3JlcG9zLmpzb24oKVxyXG5cclxuICAgIHZhciByZXBvc19zdGF0dXMgPSByZXFfcmVwb3MgPT09IDIwMCA/IHJlcV9yZXBvcyA6IGZhbHNlO1xyXG4gICAgdmFyIHVzZXJfc3RhdHVzID0gcmVxX3VzZXIgPT09IDIwMCA/IHJlcV91c2VyIDogZmFsc2U7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVwb3Nfc3RhdHVzLCB1c2VyX3N0YXR1cyk7XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IGRhdGEsXHJcbiAgICAgICAgICAgIHJlcG9zOiByZXBvc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0SHViOyJdLCJuYW1lcyI6WyJIdG1sIiwiR2l0SHViIiwidXNlciIsInJlcG9zIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImFydGljbGUiLCJpbWciLCJzcmMiLCJhdmF0YXJfdXJsIiwiYWx0IiwiaDEiLCJsb2dpbiIsIm1hcCIsInJlcG8iLCJpIiwiaDUiLCJjbGFzcyIsIm5hbWUiLCJwIiwiYSIsImhyZWYiLCJodG1sX3VybCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/github.js\n");

/***/ })

});