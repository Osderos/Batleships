/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ (() => {

throw new Error("Module parse failed: Export 'gameBoard' is not defined (99:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| \n| export {\n>   gameBoard,\n|   setRow,\n|   initializeBoard,");

/***/ }),

/***/ "./src/models/gameboard.js":
/*!*********************************!*\
  !*** ./src/models/gameboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
class Gameboard {
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.isEmpty = true;
    this.isHit = false;
    this.isMiss = false;
    this.shipCell = -1;
    this.shipType = ''
  }

  receiveAttack(onX, onY) {
    if (this.positionX == onX && this.positionY == onY && this.isEmpty) {
      this.isMiss = true;
    } else if (
      this.positionX == onX &&
      this.positionY == onY &&
      !this.isEmpty
    ) {
      this.isHit = true;
      return this.shipCell;
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/gameboard.js */ "./src/models/gameboard.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");



(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.initializeBoard)();
// deployShip("carrier", 1, 1, checkDeployAreaVertical);
(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.deployShip)("patrol", 1, 1, _logic_js__WEBPACK_IMPORTED_MODULE_1__.checkDeployAreaHorizontal);
(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.deployShip)("submarine", 3, 1, _logic_js__WEBPACK_IMPORTED_MODULE_1__.checkDeployAreaHorizontal);
(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.attackTarget)(1,1)
// attackTarget(2,1)
// attackTarget(3,1)
;(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.attackTarget)(4,1)
console.log((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.winCondtion)());

console.log(_logic_js__WEBPACK_IMPORTED_MODULE_1__.shipsContainer);



console.table(_logic_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjhDO0FBWTFCOztBQUVwQiwwREFBZTtBQUNmO0FBQ0EscURBQVUsaUJBQWlCLGdFQUF5QjtBQUNwRCxxREFBVSxvQkFBb0IsZ0VBQXlCO0FBQ3ZELHVEQUFZO0FBQ1o7QUFDQTtBQUNBLHdEQUFZO0FBQ1osWUFBWSxzREFBVzs7QUFFdkIsWUFBWSxxREFBYzs7OztBQUkxQixjQUFjLGdEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kZWxzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvblgsIHBvc2l0aW9uWSkge1xuICAgIHRoaXMucG9zaXRpb25YID0gcG9zaXRpb25YO1xuICAgIHRoaXMucG9zaXRpb25ZID0gcG9zaXRpb25ZO1xuICAgIHRoaXMuaXNFbXB0eSA9IHRydWU7XG4gICAgdGhpcy5pc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMuaXNNaXNzID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwQ2VsbCA9IC0xO1xuICAgIHRoaXMuc2hpcFR5cGUgPSAnJ1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhvblgsIG9uWSkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uWCA9PSBvblggJiYgdGhpcy5wb3NpdGlvblkgPT0gb25ZICYmIHRoaXMuaXNFbXB0eSkge1xuICAgICAgdGhpcy5pc01pc3MgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLnBvc2l0aW9uWCA9PSBvblggJiZcbiAgICAgIHRoaXMucG9zaXRpb25ZID09IG9uWSAmJlxuICAgICAgIXRoaXMuaXNFbXB0eVxuICAgICkge1xuICAgICAgdGhpcy5pc0hpdCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5zaGlwQ2VsbDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9tb2RlbHMvZ2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQge1xuICBnYW1lQm9hcmQsXG4gIHNoaXBzQ29udGFpbmVyLFxuICBzZXRSb3csXG4gIGluaXRpYWxpemVCb2FyZCxcbiAgZGVwbG95U2hpcCxcbiAgY2hlY2tEZXBsb3lBcmVhSG9yaXpvbnRhbCxcbiAgY2hlY2tEZXBsb3lBcmVhVmVydGljYWwsXG4gIGF0dGFja1RhcmdldCxcbiAgY2hlY2tJZlN1bmssXG4gIHdpbkNvbmR0aW9uXG59IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5cbmluaXRpYWxpemVCb2FyZCgpO1xuLy8gZGVwbG95U2hpcChcImNhcnJpZXJcIiwgMSwgMSwgY2hlY2tEZXBsb3lBcmVhVmVydGljYWwpO1xuZGVwbG95U2hpcChcInBhdHJvbFwiLCAxLCAxLCBjaGVja0RlcGxveUFyZWFIb3Jpem9udGFsKTtcbmRlcGxveVNoaXAoXCJzdWJtYXJpbmVcIiwgMywgMSwgY2hlY2tEZXBsb3lBcmVhSG9yaXpvbnRhbCk7XG5hdHRhY2tUYXJnZXQoMSwxKVxuLy8gYXR0YWNrVGFyZ2V0KDIsMSlcbi8vIGF0dGFja1RhcmdldCgzLDEpXG5hdHRhY2tUYXJnZXQoNCwxKVxuY29uc29sZS5sb2cod2luQ29uZHRpb24oKSk7XG5cbmNvbnNvbGUubG9nKHNoaXBzQ29udGFpbmVyKTtcblxuXG5cbmNvbnNvbGUudGFibGUoZ2FtZUJvYXJkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==