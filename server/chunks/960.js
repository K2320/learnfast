exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 64978:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 49045:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26839))

/***/ }),

/***/ 26839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12456);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38012);
/* __next_internal_client_entry_do_not_use__ Navigation auto */ 



function Navigation() {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "bg-white shadow-md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between h-16",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                className: "flex-shrink-0 flex items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-2xl font-bold text-blue-600",
                                    children: "Learn Fast"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden sm:ml-6 sm:flex sm:space-x-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/home",
                                    className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/lessons",
                                    className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                                    children: "Lessons"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/dashboard",
                                    className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                                    children: "Dashboard"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "-mr-2 flex items-center sm:hidden",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sr-only",
                                        children: "Open main menu"
                                    }),
                                    isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        className: "block h-6 w-6"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        className: "block h-6 w-6"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pt-2 pb-3 space-y-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/home",
                            className: "block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                            children: "Home"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/lessons",
                            className: "block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                            children: "Lessons"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/dashboard",
                            className: "block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                            children: "Dashboard"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 82309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(59077);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./src/components/Navigation.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/workspaces/learnfast/src/components/Navigation.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Navigation"];

;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Learn Fast - Interactive Electricity Education",
    description: "A modern platform for learning about electricity with interactive 3D elements"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;