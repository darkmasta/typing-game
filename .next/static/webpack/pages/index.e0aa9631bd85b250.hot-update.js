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

/***/ "./components/Timer.tsx":
/*!******************************!*\
  !*** ./components/Timer.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_custom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-events */ \"./node_modules/react-custom-events/dist/index.js\");\n/* harmony import */ var _context_typer_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/typer_context */ \"./components/context/typer_context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst time = new Date();\ntime.setSeconds(time.getSeconds() + 30); // 30 sec timer\nconst Timer = (param)=>{\n    let { expiryTimestamp =time , isStartedData  } = param;\n    _s();\n    // @ts-ignore\n    const { seconds , minutes , hours , days , isRunning , start , pause , resume , restart , isStarted , setIsStarted  } = (0,_context_typer_context__WEBPACK_IMPORTED_MODULE_3__.useTyperContext)({\n        setIsStarted: function(value) {\n            throw new Error(\"Function not implemented.\");\n        },\n        isStarted: false\n    });\n    const firstRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n    const listener = (0,react_custom_events__WEBPACK_IMPORTED_MODULE_2__.useCustomEventListener)(\"gameStarted\", (data)=>{\n    // console.log(\"EVENT DATA\", data);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //console.log(\"isStarted\", isStarted);\n        if (firstRender.current) {\n            firstRender.current = false;\n            pause();\n            return;\n        }\n        if (isStarted) {\n            start();\n            setIsStarted(true);\n        }\n        if (isStarted) {\n            // start();\n            resume();\n        } else {\n            // start();\n            pause();\n        }\n    }, [\n        isStarted\n    ]);\n    /*\n  useEffect(() => {\n    if (firstRender.current) {\n      console.log(\"first render\");\n      pause();\n      firstRender.current = false;\n      return;\n    }\n\n    if (!isStartedData) {\n      console.log(\"asd false\");\n      start();\n    }\n\n    if (isStartedData) {\n      console.log(\"asd true\");\n      console.log(isStarted);\n      pause();\n    }\n\n    console.log(\"EFECT\", isStartedData);\n  }, [isStarted]);\n  */ const renderTimer = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                textAlign: \"center\"\n            },\n            ref: listener,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Is started: \",\n                        isStarted\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        fontSize: \"100px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: days\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        \":\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: hours\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 31\n                        }, undefined),\n                        \":\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: minutes\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 52\n                        }, undefined),\n                        \":\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: seconds\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: isRunning ? \"Running\" : \"Paused\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: start,\n                            children: \"Start\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: pause,\n                            children: \"Pause\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: resume,\n                            children: \"Resume\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                // Restarts to 5 minutes timer\n                                const time = new Date();\n                                time.setSeconds(time.getSeconds() + 300);\n                                restart(time);\n                            },\n                            children: \"Restart\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-[70px] max-w-[1200px]\",\n        children: renderTimer()\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alperen\\\\Documents\\\\typing-game-react-typescript\\\\components\\\\Timer.tsx\",\n        lineNumber: 111,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Timer, \"JcBa/Ys6wAbS+MWY4CR9dufuRMM=\", false, function() {\n    return [\n        _context_typer_context__WEBPACK_IMPORTED_MODULE_3__.useTyperContext,\n        react_custom_events__WEBPACK_IMPORTED_MODULE_2__.useCustomEventListener\n    ];\n});\n_c = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpbWVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTJEO0FBQ0U7QUFDSDtBQUUxRCxNQUFNSyxPQUFPLElBQUlDO0FBQ2pCRCxLQUFLRSxVQUFVLENBQUNGLEtBQUtHLFVBQVUsS0FBSyxLQUFLLGVBQWU7QUFFeEQsTUFBTUMsUUFBdUIsU0FBK0M7UUFBOUMsRUFBRUMsaUJBQWtCTCxLQUFJLEVBQUVNLGNBQWEsRUFBRTs7SUFDckUsYUFBYTtJQUNiLE1BQU0sRUFDSkMsUUFBTyxFQUNQQyxRQUFPLEVBQ1BDLE1BQUssRUFDTEMsS0FBSSxFQUNKQyxVQUFTLEVBQ1RDLE1BQUssRUFDTEMsTUFBSyxFQUNMQyxPQUFNLEVBQ05DLFFBQU8sRUFDUEMsVUFBUyxFQUNUQyxhQUFZLEVBQ2IsR0FBUWxCLHVFQUFlQSxDQUFDO1FBQ3ZCa0IsY0FBYyxTQUNaQyxLQUFrRCxFQUM1QztZQUNOLE1BQU0sSUFBSUMsTUFBTSw2QkFBNkI7UUFDL0M7UUFDQUgsV0FBVyxLQUFLO0lBQ2xCO0lBRUEsTUFBTUksY0FBY3ZCLDZDQUFNQSxDQUFDLElBQUk7SUFFL0IsTUFBTXdCLFdBQVd2QiwyRUFBc0JBLENBQUMsZUFBZSxDQUFDd0IsT0FBUztJQUMvRCxtQ0FBbUM7SUFDckM7SUFFQTFCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxzQ0FBc0M7UUFDdEMsSUFBSXdCLFlBQVlHLE9BQU8sRUFBRTtZQUN2QkgsWUFBWUcsT0FBTyxHQUFHLEtBQUs7WUFDM0JWO1lBQ0E7UUFDRixDQUFDO1FBRUQsSUFBSUcsV0FBVztZQUNiSjtZQUNBSyxhQUFhLElBQUk7UUFDbkIsQ0FBQztRQUVELElBQUlELFdBQVc7WUFDYixXQUFXO1lBQ1hGO1FBQ0YsT0FBTztZQUNMLFdBQVc7WUFDWEQ7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDRztLQUFVO0lBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQkEsR0FFQSxNQUFNUSxjQUFjLElBQW1CO1FBQ3JDLHFCQUNFLDhEQUFDQztZQUFJQyxPQUFPO2dCQUFFQyxXQUFXO1lBQVM7WUFBR0MsS0FBS1A7OzhCQUN4Qyw4REFBQ1E7O3dCQUFHO3dCQUFhYjs7Ozs7Ozs4QkFDakIsOERBQUNTO29CQUFJQyxPQUFPO3dCQUFFSSxVQUFVO29CQUFROztzQ0FDOUIsOERBQUNDO3NDQUFNckI7Ozs7Ozt3QkFBWTtzQ0FBQyw4REFBQ3FCO3NDQUFNdEI7Ozs7Ozt3QkFBYTtzQ0FBQyw4REFBQ3NCO3NDQUFNdkI7Ozs7Ozt3QkFBZTtzQ0FDL0QsOERBQUN1QjtzQ0FBTXhCOzs7Ozs7Ozs7Ozs7OEJBRVQsOERBQUN5Qjs4QkFBR3JCLFlBQVksWUFBWSxRQUFROzs7Ozs7OEJBQ3BDLDhEQUFDYztvQkFBSVEsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFPQyxTQUFTdkI7c0NBQU87Ozs7OztzQ0FDeEIsOERBQUNzQjs0QkFBT0MsU0FBU3RCO3NDQUFPOzs7Ozs7c0NBQ3hCLDhEQUFDcUI7NEJBQU9DLFNBQVNyQjtzQ0FBUTs7Ozs7O3NDQUN6Qiw4REFBQ29COzRCQUNDQyxTQUFTLElBQU07Z0NBQ2IsOEJBQThCO2dDQUM5QixNQUFNbkMsT0FBTyxJQUFJQztnQ0FDakJELEtBQUtFLFVBQVUsQ0FBQ0YsS0FBS0csVUFBVSxLQUFLO2dDQUNwQ1ksUUFBUWY7NEJBQ1Y7c0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1UO0lBRUEscUJBQU8sOERBQUN5QjtRQUFJUSxXQUFVO2tCQUE0QlQ7Ozs7OztBQUNwRDtHQXhHTXBCOztRQWNLTCxtRUFBZUE7UUFXUEQsdUVBQXNCQTs7O0tBekJuQ007QUEwR04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaW1lci50c3g/OTE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDdXN0b21FdmVudExpc3RlbmVyIH0gZnJvbSBcInJlYWN0LWN1c3RvbS1ldmVudHNcIjtcbmltcG9ydCB7IHVzZVR5cGVyQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQvdHlwZXJfY29udGV4dFwiO1xuXG5jb25zdCB0aW1lID0gbmV3IERhdGUoKTtcbnRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDMwKTsgLy8gMzAgc2VjIHRpbWVyXG5cbmNvbnN0IFRpbWVyOiBSZWFjdC5GQzxhbnk+ID0gKHsgZXhwaXJ5VGltZXN0YW1wID0gdGltZSwgaXNTdGFydGVkRGF0YSB9KSA9PiB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3Qge1xuICAgIHNlY29uZHMsXG4gICAgbWludXRlcyxcbiAgICBob3VycyxcbiAgICBkYXlzLFxuICAgIGlzUnVubmluZyxcbiAgICBzdGFydCxcbiAgICBwYXVzZSxcbiAgICByZXN1bWUsXG4gICAgcmVzdGFydCxcbiAgICBpc1N0YXJ0ZWQsXG4gICAgc2V0SXNTdGFydGVkLFxuICB9OiBhbnkgPSB1c2VUeXBlckNvbnRleHQoe1xuICAgIHNldElzU3RhcnRlZDogZnVuY3Rpb24gKFxuICAgICAgdmFsdWU6IGJvb2xlYW4gfCAoKHByZXZTdGF0ZTogYm9vbGVhbikgPT4gYm9vbGVhbilcbiAgICApOiB2b2lkIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfSxcbiAgICBpc1N0YXJ0ZWQ6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBmaXJzdFJlbmRlciA9IHVzZVJlZih0cnVlKTtcblxuICBjb25zdCBsaXN0ZW5lciA9IHVzZUN1c3RvbUV2ZW50TGlzdGVuZXIoXCJnYW1lU3RhcnRlZFwiLCAoZGF0YSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiRVZFTlQgREFUQVwiLCBkYXRhKTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKFwiaXNTdGFydGVkXCIsIGlzU3RhcnRlZCk7XG4gICAgaWYgKGZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcbiAgICAgIGZpcnN0UmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHBhdXNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzU3RhcnRlZCkge1xuICAgICAgc3RhcnQoKTtcbiAgICAgIHNldElzU3RhcnRlZCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTdGFydGVkKSB7XG4gICAgICAvLyBzdGFydCgpO1xuICAgICAgcmVzdW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN0YXJ0KCk7XG4gICAgICBwYXVzZSgpO1xuICAgIH1cbiAgfSwgW2lzU3RhcnRlZF0pO1xuXG4gIC8qXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3QgcmVuZGVyXCIpO1xuICAgICAgcGF1c2UoKTtcbiAgICAgIGZpcnN0UmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWlzU3RhcnRlZERhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXNkIGZhbHNlXCIpO1xuICAgICAgc3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTdGFydGVkRGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJhc2QgdHJ1ZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGlzU3RhcnRlZCk7XG4gICAgICBwYXVzZSgpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiRUZFQ1RcIiwgaXNTdGFydGVkRGF0YSk7XG4gIH0sIFtpc1N0YXJ0ZWRdKTtcbiAgKi9cblxuICBjb25zdCByZW5kZXJUaW1lciA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19IHJlZj17bGlzdGVuZXJ9PlxuICAgICAgICA8aDE+SXMgc3RhcnRlZDoge2lzU3RhcnRlZH08L2gxPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgPHNwYW4+e2RheXN9PC9zcGFuPjo8c3Bhbj57aG91cnN9PC9zcGFuPjo8c3Bhbj57bWludXRlc308L3NwYW4+OlxuICAgICAgICAgIDxzcGFuPntzZWNvbmRzfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPntpc1J1bm5pbmcgPyBcIlJ1bm5pbmdcIiA6IFwiUGF1c2VkXCJ9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNFwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnR9PlN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwYXVzZX0+UGF1c2U8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc3VtZX0+UmVzdW1lPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAvLyBSZXN0YXJ0cyB0byA1IG1pbnV0ZXMgdGltZXJcbiAgICAgICAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDMwMCk7XG4gICAgICAgICAgICAgIHJlc3RhcnQodGltZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlc3RhcnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1iLVs3MHB4XSBtYXgtdy1bMTIwMHB4XVwiPntyZW5kZXJUaW1lcigpfTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ3VzdG9tRXZlbnRMaXN0ZW5lciIsInVzZVR5cGVyQ29udGV4dCIsInRpbWUiLCJEYXRlIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJUaW1lciIsImV4cGlyeVRpbWVzdGFtcCIsImlzU3RhcnRlZERhdGEiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiZGF5cyIsImlzUnVubmluZyIsInN0YXJ0IiwicGF1c2UiLCJyZXN1bWUiLCJyZXN0YXJ0IiwiaXNTdGFydGVkIiwic2V0SXNTdGFydGVkIiwidmFsdWUiLCJFcnJvciIsImZpcnN0UmVuZGVyIiwibGlzdGVuZXIiLCJkYXRhIiwiY3VycmVudCIsInJlbmRlclRpbWVyIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJyZWYiLCJoMSIsImZvbnRTaXplIiwic3BhbiIsInAiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Timer.tsx\n"));

/***/ })

});