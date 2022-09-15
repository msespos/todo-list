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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoBuilder */ \"./src/todoBuilder.js\");\n/* harmony import */ var _modalHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalHandlers */ \"./src/modalHandlers.js\");\n/* harmony import */ var _projectBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectBuilder */ \"./src/projectBuilder.js\");\n\n//import { modalLayout } from './modalLayout';\n\n\n\n//const div = document.getElementById(\"content\");\n//div.appendChild(modalLayout());\n\n(0,_modalHandlers__WEBPACK_IMPORTED_MODULE_1__.projectModalHandlers)();\n(0,_modalHandlers__WEBPACK_IMPORTED_MODULE_1__.todoModalHandlers)();\n(0,_todoBuilder__WEBPACK_IMPORTED_MODULE_0__.makeTodo)();\n(0,_projectBuilder__WEBPACK_IMPORTED_MODULE_2__.makeProject)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modalHandlers.js":
/*!******************************!*\
  !*** ./src/modalHandlers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectModalHandlers\": () => (/* binding */ projectModalHandlers),\n/* harmony export */   \"todoModalHandlers\": () => (/* binding */ todoModalHandlers)\n/* harmony export */ });\nconst todoModalHandlers = () => {\n  const modal = document.querySelector(\".todo-modal\");\n  const trigger = document.querySelector(\".todo-trigger\");\n  const closeButton = document.querySelector(\".todo-close-button\");\n  const makeTodoButton = document.querySelector(\"#make-todo-button\")\n  const toggleModal = () => {\n    modal.classList.toggle(\"show-modal\");\n  }\n  const windowOnClick = (event) => {\n    if (event.target === modal) {\n      toggleModal();\n    }\n  }\n  trigger.addEventListener(\"click\", toggleModal);\n  closeButton.addEventListener(\"click\", toggleModal);\n  makeTodoButton.addEventListener(\"click\", toggleModal);\n  window.addEventListener(\"click\", windowOnClick);\n}\n\nconst projectModalHandlers = () => {\n  const modal = document.querySelector(\".project-modal\");\n  const trigger = document.querySelector(\".project-trigger\");\n  const closeButton = document.querySelector(\".project-close-button\");\n  const makeTodoButton = document.querySelector(\"#make-project-button\")\n  const toggleModal = () => {\n    modal.classList.toggle(\"show-modal\");\n  }\n  const windowOnClick = (event) => {\n    if (event.target === modal) {\n      toggleModal();\n    }\n  }\n  trigger.addEventListener(\"click\", toggleModal);\n  closeButton.addEventListener(\"click\", toggleModal);\n  makeTodoButton.addEventListener(\"click\", toggleModal);\n  window.addEventListener(\"click\", windowOnClick);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modalHandlers.js?");

/***/ }),

/***/ "./src/projectBuilder.js":
/*!*******************************!*\
  !*** ./src/projectBuilder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeProject\": () => (/* binding */ makeProject)\n/* harmony export */ });\nconst Project = (title, todos) => {\n  return { title, todos }\n};\n\nconst makeProject = () => {\n  const makeProjectButton = document.getElementById(\"make-project-button\");\n  makeProjectButton.onclick = () => {\n    const project = Project(document.getElementById(\"project-title\").value, []);\n    //displayProject(project);\n    console.log(project);\n    console.log(\"HELLO\");\n  }\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectBuilder.js?");

/***/ }),

/***/ "./src/todoBuilder.js":
/*!****************************!*\
  !*** ./src/todoBuilder.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeTodo\": () => (/* binding */ makeTodo)\n/* harmony export */ });\n/* harmony import */ var _todoLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLayout */ \"./src/todoLayout.js\");\n\n\nconst Todo = (title, description, dueDate, priority, notes) => {\n  return { title, description, dueDate, priority, notes }\n};\n\nlet project = [];\n\nconst makeTodo = () => {\n  const makeTodoButton = document.getElementById(\"make-todo-button\");\n  makeTodoButton.onclick = () => {\n    const todo = Todo(document.getElementById(\"todo-title\").value,\n                      document.getElementById(\"todo-description\").value,\n                      document.getElementById(\"todo-due-date\").value,\n                      document.getElementById(\"todo-priority\").value,\n                      document.getElementById(\"todo-notes\").value);\n    project.push(todo);\n    (0,_todoLayout__WEBPACK_IMPORTED_MODULE_0__.clearTodoTitleDisplay)(project);\n    (0,_todoLayout__WEBPACK_IMPORTED_MODULE_0__.displayTodoTitles)(project);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoBuilder.js?");

/***/ }),

/***/ "./src/todoLayout.js":
/*!***************************!*\
  !*** ./src/todoLayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearTodoTitleDisplay\": () => (/* binding */ clearTodoTitleDisplay),\n/* harmony export */   \"displayTodo\": () => (/* binding */ displayTodo),\n/* harmony export */   \"displayTodoTitles\": () => (/* binding */ displayTodoTitles)\n/* harmony export */ });\nconst clearTodoTitleDisplay = () => {\n  const titles = document.querySelectorAll('.todo-title');\n  titles.forEach((title) => {\n    title.remove();\n  });\n}\n\nconst displayTodoTitles = (project) => {\n  project.forEach((todo, index) => {\n    const div = document.getElementById(\"content\");\n    const title = document.createElement(\"div\");\n    title.classList.add(\"todo-title\");\n    title.id = \"todo-title-\" + index;\n    title.textContent = todo.title;\n    div.appendChild(title);\n    title.onclick = () => {\n      toggleTodo(todo, index);\n    }\n  });\n};\n\nconst toggleTodo = (todo, index) => {\n  if (document.querySelector(\".todo\")) {\n    clearTodo();\n  } else {\n    displayTodo(todo, index);\n  }\n};\n\nconst clearTodo = () => {\n  const todoElements = document.querySelectorAll(\".todo\");\n  todoElements.forEach((todoElement) => {\n    todoElement.remove();\n  });\n}\n\nconst displayTodo = (todo, index) => {\n  const div = document.getElementById(\"todo-title-\" + index);\n  const description = document.createElement(\"div\");\n  description.textContent = todo.description;\n  description.classList.add(\"todo\");\n  div.appendChild(description);\n  const dueDate = document.createElement(\"div\");\n  dueDate.textContent = todo.dueDate;\n  dueDate.classList.add(\"todo\");\n  div.appendChild(dueDate);\n  const priority = document.createElement(\"div\");\n  priority.textContent = todo.priority;\n  priority.classList.add(\"todo\");\n  div.appendChild(priority);\n  const notes = document.createElement(\"div\");\n  notes.textContent = todo.notes;\n  notes.classList.add(\"todo\");\n  div.appendChild(notes);\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoLayout.js?");

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