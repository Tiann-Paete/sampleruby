/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/CartContext.js":
/*!************************************!*\
  !*** ./src/context/CartContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction CartProvider({ children }) {\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Load cart from localStorage on initial render\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedCart = localStorage.getItem(\"cart\");\n        if (savedCart) {\n            setCartItems(JSON.parse(savedCart));\n        }\n    }, []);\n    // Save cart to localStorage whenever it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cart\", JSON.stringify(cartItems));\n        calculateTotal();\n    }, [\n        cartItems\n    ]);\n    const calculateTotal = ()=>{\n        const newTotal = cartItems.reduce((sum, item)=>sum + item.price * item.quantity, 0);\n        setTotal(newTotal);\n    };\n    const addToCart = (item)=>{\n        setCartItems((prevItems)=>{\n            const existingItem = prevItems.find((i)=>i.priceid === item.priceid);\n            if (existingItem) {\n                return prevItems.map((i)=>i.priceid === item.priceid ? {\n                        ...i,\n                        quantity: i.quantity + 1\n                    } : i);\n            }\n            return [\n                ...prevItems,\n                {\n                    ...item,\n                    quantity: 1\n                }\n            ];\n        });\n    };\n    const removeFromCart = (priceid)=>{\n        setCartItems((prevItems)=>prevItems.filter((item)=>item.priceid !== priceid));\n    };\n    const updateQuantity = (priceid, newQuantity)=>{\n        if (newQuantity < 1) return;\n        setCartItems((prevItems)=>prevItems.map((item)=>item.priceid === priceid ? {\n                    ...item,\n                    quantity: newQuantity\n                } : item));\n    };\n    const clearCart = ()=>{\n        setCartItems([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartItems,\n            total,\n            addToCart,\n            removeFromCart,\n            updateQuantity,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\1franz\\\\customerwanamao\\\\src\\\\context\\\\CartContext.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\nfunction useCart() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) {\n        throw new Error(\"useCart must be used within a CartProvider\");\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DYXJ0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVFO0FBRXZFLE1BQU1JLDRCQUFjSixvREFBYUE7QUFFMUIsU0FBU0ssYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBRW5DLGdEQUFnRDtJQUNoREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFDdkMsSUFBSUYsV0FBVztZQUNiSCxhQUFhTSxLQUFLQyxLQUFLLENBQUNKO1FBQzFCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsZ0RBQWdEO0lBQ2hEUixnREFBU0EsQ0FBQztRQUNSUyxhQUFhSSxPQUFPLENBQUMsUUFBUUYsS0FBS0csU0FBUyxDQUFDVjtRQUM1Q1c7SUFDRixHQUFHO1FBQUNYO0tBQVU7SUFFZCxNQUFNVyxpQkFBaUI7UUFDckIsTUFBTUMsV0FBV1osVUFBVWEsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNELE1BQU9DLEtBQUtDLEtBQUssR0FBR0QsS0FBS0UsUUFBUSxFQUFHO1FBQ3JGZCxTQUFTUztJQUNYO0lBRUEsTUFBTU0sWUFBWSxDQUFDSDtRQUNqQmQsYUFBYWtCLENBQUFBO1lBQ1gsTUFBTUMsZUFBZUQsVUFBVUUsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxPQUFPLEtBQUtSLEtBQUtRLE9BQU87WUFFbkUsSUFBSUgsY0FBYztnQkFDaEIsT0FBT0QsVUFBVUssR0FBRyxDQUFDRixDQUFBQSxJQUNuQkEsRUFBRUMsT0FBTyxLQUFLUixLQUFLUSxPQUFPLEdBQ3RCO3dCQUFFLEdBQUdELENBQUM7d0JBQUVMLFVBQVVLLEVBQUVMLFFBQVEsR0FBRztvQkFBRSxJQUNqQ0s7WUFFUjtZQUVBLE9BQU87bUJBQUlIO2dCQUFXO29CQUFFLEdBQUdKLElBQUk7b0JBQUVFLFVBQVU7Z0JBQUU7YUFBRTtRQUNqRDtJQUNGO0lBRUEsTUFBTVEsaUJBQWlCLENBQUNGO1FBQ3RCdEIsYUFBYWtCLENBQUFBLFlBQWFBLFVBQVVPLE1BQU0sQ0FBQ1gsQ0FBQUEsT0FBUUEsS0FBS1EsT0FBTyxLQUFLQTtJQUN0RTtJQUVBLE1BQU1JLGlCQUFpQixDQUFDSixTQUFTSztRQUMvQixJQUFJQSxjQUFjLEdBQUc7UUFFckIzQixhQUFha0IsQ0FBQUEsWUFDWEEsVUFBVUssR0FBRyxDQUFDVCxDQUFBQSxPQUNaQSxLQUFLUSxPQUFPLEtBQUtBLFVBQ2I7b0JBQUUsR0FBR1IsSUFBSTtvQkFBRUUsVUFBVVc7Z0JBQVksSUFDakNiO0lBR1Y7SUFFQSxNQUFNYyxZQUFZO1FBQ2hCNUIsYUFBYSxFQUFFO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNKLFlBQVlpQyxRQUFRO1FBQUNDLE9BQU87WUFDM0IvQjtZQUNBRTtZQUNBZ0I7WUFDQU87WUFDQUU7WUFDQUU7UUFDRjtrQkFDRzlCOzs7Ozs7QUFHUDtBQUVPLFNBQVNpQztJQUNkLE1BQU1DLFVBQVV2QyxpREFBVUEsQ0FBQ0c7SUFDM0IsSUFBSSxDQUFDb0MsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydWJ5LWxldGNob24vLi9zcmMvY29udGV4dC9DYXJ0Q29udGV4dC5qcz9iOGQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAvLyBMb2FkIGNhcnQgZnJvbSBsb2NhbFN0b3JhZ2Ugb24gaW5pdGlhbCByZW5kZXJcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZWRDYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcclxuICAgIGlmIChzYXZlZENhcnQpIHtcclxuICAgICAgc2V0Q2FydEl0ZW1zKEpTT04ucGFyc2Uoc2F2ZWRDYXJ0KSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBTYXZlIGNhcnQgdG8gbG9jYWxTdG9yYWdlIHdoZW5ldmVyIGl0IGNoYW5nZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcclxuICAgIGNhbGN1bGF0ZVRvdGFsKCk7XHJcbiAgfSwgW2NhcnRJdGVtc10pO1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGVUb3RhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RvdGFsID0gY2FydEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpLCAwKTtcclxuICAgIHNldFRvdGFsKG5ld1RvdGFsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUb0NhcnQgPSAoaXRlbSkgPT4ge1xyXG4gICAgc2V0Q2FydEl0ZW1zKHByZXZJdGVtcyA9PiB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IHByZXZJdGVtcy5maW5kKGkgPT4gaS5wcmljZWlkID09PSBpdGVtLnByaWNlaWQpO1xyXG4gICAgICBcclxuICAgICAgaWYgKGV4aXN0aW5nSXRlbSkge1xyXG4gICAgICAgIHJldHVybiBwcmV2SXRlbXMubWFwKGkgPT5cclxuICAgICAgICAgIGkucHJpY2VpZCA9PT0gaXRlbS5wcmljZWlkXHJcbiAgICAgICAgICAgID8geyAuLi5pLCBxdWFudGl0eTogaS5xdWFudGl0eSArIDEgfVxyXG4gICAgICAgICAgICA6IGlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gWy4uLnByZXZJdGVtcywgeyAuLi5pdGVtLCBxdWFudGl0eTogMSB9XTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKHByaWNlaWQpID0+IHtcclxuICAgIHNldENhcnRJdGVtcyhwcmV2SXRlbXMgPT4gcHJldkl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJpY2VpZCAhPT0gcHJpY2VpZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVF1YW50aXR5ID0gKHByaWNlaWQsIG5ld1F1YW50aXR5KSA9PiB7XHJcbiAgICBpZiAobmV3UXVhbnRpdHkgPCAxKSByZXR1cm47XHJcbiAgICBcclxuICAgIHNldENhcnRJdGVtcyhwcmV2SXRlbXMgPT5cclxuICAgICAgcHJldkl0ZW1zLm1hcChpdGVtID0+XHJcbiAgICAgICAgaXRlbS5wcmljZWlkID09PSBwcmljZWlkXHJcbiAgICAgICAgICA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IG5ld1F1YW50aXR5IH1cclxuICAgICAgICAgIDogaXRlbVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyQ2FydCA9ICgpID0+IHtcclxuICAgIHNldENhcnRJdGVtcyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICBjYXJ0SXRlbXMsXHJcbiAgICAgIHRvdGFsLFxyXG4gICAgICBhZGRUb0NhcnQsXHJcbiAgICAgIHJlbW92ZUZyb21DYXJ0LFxyXG4gICAgICB1cGRhdGVRdWFudGl0eSxcclxuICAgICAgY2xlYXJDYXJ0XHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUNhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENhcnRQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInRvdGFsIiwic2V0VG90YWwiLCJzYXZlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNhbGN1bGF0ZVRvdGFsIiwibmV3VG90YWwiLCJyZWR1Y2UiLCJzdW0iLCJpdGVtIiwicHJpY2UiLCJxdWFudGl0eSIsImFkZFRvQ2FydCIsInByZXZJdGVtcyIsImV4aXN0aW5nSXRlbSIsImZpbmQiLCJpIiwicHJpY2VpZCIsIm1hcCIsInJlbW92ZUZyb21DYXJ0IiwiZmlsdGVyIiwidXBkYXRlUXVhbnRpdHkiLCJuZXdRdWFudGl0eSIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/CartContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CartContext */ \"./src/context/CartContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\1franz\\\\customerwanamao\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\1franz\\\\customerwanamao\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBQ3dCO0FBRXRELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnVieS1sZXRjaG9uLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9DYXJ0Q29udGV4dCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DYXJ0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJDYXJ0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();