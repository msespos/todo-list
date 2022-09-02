/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoBuilder */ \"./src/todoBuilder.js\");\n/* harmony import */ var _modalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalLayout */ \"./src/modalLayout.js\");\n/* harmony import */ var _modalHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalHandlers */ \"./src/modalHandlers.js\");\n\n\n\n\n(0,_todoBuilder__WEBPACK_IMPORTED_MODULE_0__.makeFirstTodo)();\n\nconst div = document.getElementById(\"content\");\ndiv.appendChild((0,_modalLayout__WEBPACK_IMPORTED_MODULE_1__.modalLayout)());\n\n(0,_modalHandlers__WEBPACK_IMPORTED_MODULE_2__.modalHandlers)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modalHandlers.js":
/*!******************************!*\
  !*** ./src/modalHandlers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalHandlers\": () => (/* binding */ modalHandlers)\n/* harmony export */ });\nconst modalHandlers = () => {\nconst modal = document.querySelector(\".modal\");\nconst trigger = document.querySelector(\".trigger\");\nconst closeButton = document.querySelector(\".close-button\");\n\nconst toggleModal = () => {\n  modal.classList.toggle(\"show-modal\");\n}\n\nconst windowOnClick = (event) => {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\n\n  trigger.addEventListener(\"click\", toggleModal);\n  closeButton.addEventListener(\"click\", toggleModal);\n  window.addEventListener(\"click\", windowOnClick);  \n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modalHandlers.js?");

/***/ }),

/***/ "./src/modalLayout.js":
/*!****************************!*\
  !*** ./src/modalLayout.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalLayout\": () => (/* binding */ modalLayout)\n/* harmony export */ });\n{/* <button class=\"trigger\">New Todo</button>\n  <div class=\"modal\">\n    <div class=\"modal-content\">\n      <span class=\"close-button\">&times;</span>\n      <h1>This is where the todo form will go.</h1>\n    </div>\n  </div> */}\n\nconst modalLayout = () => {\n  const div = document.createElement(\"div\");\n  const btn = document.createElement(\"button\");\n  btn.classList.add(\"trigger\");\n  btn.textContent = \"New Todo\";\n  const modalDiv = document.createElement(\"div\");\n  modalDiv.classList.add(\"modal\");\n  const modalContentDiv = document.createElement(\"div\");\n  modalContentDiv.classList.add(\"modal-content\");\n  const span = document.createElement(\"span\");\n  span.classList.add(\"close-button\");\n  span.textContent = \"x\";\n  const formStandIn = document.createElement(\"h1\");\n  formStandIn.textContent = \"This is where the todo form will go.\";\n  modalDiv.appendChild(modalContentDiv);\n  modalContentDiv.appendChild(span);\n  modalContentDiv.appendChild(formStandIn);\n  div.appendChild(btn);\n  div.appendChild(modalDiv);\n  return div;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modalLayout.js?");

/***/ }),

/***/ "./src/todoBuilder.js":
/*!****************************!*\
  !*** ./src/todoBuilder.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeFirstTodo\": () => (/* binding */ makeFirstTodo)\n/* harmony export */ });\nconst Todo = (title, description, dueDate, priority, notes, checklist) => {\n  return { title, description, dueDate, priority, notes, checklist }\n};\n\nconst makeFirstTodo = () => {\n  const todo1 = Todo();\n  todo1.title = \"Make music\"\n  todo1.description = \"Make some dang music\";\n  todo1.dueDate = \"SOON\"\n  console.log(todo1.title, todo1.description, todo1.dueDate);\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoBuilder.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;