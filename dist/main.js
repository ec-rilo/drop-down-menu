/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/dropDown.js":
/*!*********************************!*\
  !*** ./src/modules/dropDown.js ***!
  \*********************************/
/***/ (() => {

/**
 * Drop Down Menu Module
 */

class DropDown {
  constructor(element) {
    this.element = element;
    this.currStatus = 'hidden';
  }

  status() {
    return this.currStatus;
  }

  toggleStatus() {
    if (this.currStatus === 'visible') {
      this.currStatus = 'hidden';
      return this.currStatus;
    }
    this.currStatus = 'visible';
    return this.currStatus;
  }

  makeVisible() {
    this.element.classList.add('expand-contract-expanded');
    this.element.classList.remove('expand-contract-contracted');
  }

  makeHidden() {
    this.element.classList.add('expand-contract-contracted');
    this.element.classList.remove('expand-contract-expanded');
  }
}

const initDDMenus = (() => {
  const navMenu = document.querySelector('.nav-menu');
  const navMenuChildren = navMenu.childNodes;
  navMenuChildren.forEach((menuChild) => {
    if (menuChild.nodeName === 'LI') {
      const menuChildrenElems = menuChild.childNodes;
      menuChildrenElems.forEach((menuChild) => {
        if (menuChild.nodeName === 'UL') {
          const menuParent = menuChild.parentNode;
          const menuParentText = menuParent.children[0].innerHTML;
          const menuChildDD = new DropDown(menuChild);
          menuParent.addEventListener('click', () => {
            navMenuChildren.forEach((menuChild) => {
              menuChild.addEventListener(
                'click',
                () => {
                  const menuChildText = menuChild.children[0].innerHTML;
                  if (
                    menuChildDD.status() === 'visible' &&
                    menuChildText !== menuParentText
                  ) {
                    menuChildDD.makeHidden();
                    menuChildDD.toggleStatus();
                  }
                },
                { once: true }
              );
            });
            if (menuChildDD.status() === 'visible') {
              menuChildDD.makeHidden();
              menuChildDD.toggleStatus();
            } else if (menuChildDD.status() === 'hidden') {
              menuChildDD.makeVisible();
              menuChildDD.toggleStatus();
            }
          });
        }
      });
    }
  });
})();


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_dropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dropDown */ "./src/modules/dropDown.js");
/* harmony import */ var _modules_dropDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_dropDown__WEBPACK_IMPORTED_MODULE_2__);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7OztVQzFFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNEO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcm9wLWRvd24tbWVudS8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLW1lbnUvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24tbWVudS8uL3NyYy9tb2R1bGVzL2Ryb3BEb3duLmpzIiwid2VicGFjazovL2Ryb3AtZG93bi1tZW51L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Ryb3AtZG93bi1tZW51L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Ryb3AtZG93bi1tZW51L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kcm9wLWRvd24tbWVudS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Ryb3AtZG93bi1tZW51L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLW1lbnUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXG4gKiBEcm9wIERvd24gTWVudSBNb2R1bGVcbiAqL1xuXG5jbGFzcyBEcm9wRG93biB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY3VyclN0YXR1cyA9ICdoaWRkZW4nO1xuICB9XG5cbiAgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJTdGF0dXM7XG4gIH1cblxuICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMuY3VyclN0YXR1cyA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICB0aGlzLmN1cnJTdGF0dXMgPSAnaGlkZGVuJztcbiAgICAgIHJldHVybiB0aGlzLmN1cnJTdGF0dXM7XG4gICAgfVxuICAgIHRoaXMuY3VyclN0YXR1cyA9ICd2aXNpYmxlJztcbiAgICByZXR1cm4gdGhpcy5jdXJyU3RhdHVzO1xuICB9XG5cbiAgbWFrZVZpc2libGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1jb250cmFjdC1leHBhbmRlZCcpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQtY29udHJhY3QtY29udHJhY3RlZCcpO1xuICB9XG5cbiAgbWFrZUhpZGRlbigpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWNvbnRyYWN0LWNvbnRyYWN0ZWQnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kLWNvbnRyYWN0LWV4cGFuZGVkJyk7XG4gIH1cbn1cblxuY29uc3QgaW5pdERETWVudXMgPSAoKCkgPT4ge1xuICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1tZW51Jyk7XG4gIGNvbnN0IG5hdk1lbnVDaGlsZHJlbiA9IG5hdk1lbnUuY2hpbGROb2RlcztcbiAgbmF2TWVudUNoaWxkcmVuLmZvckVhY2goKG1lbnVDaGlsZCkgPT4ge1xuICAgIGlmIChtZW51Q2hpbGQubm9kZU5hbWUgPT09ICdMSScpIHtcbiAgICAgIGNvbnN0IG1lbnVDaGlsZHJlbkVsZW1zID0gbWVudUNoaWxkLmNoaWxkTm9kZXM7XG4gICAgICBtZW51Q2hpbGRyZW5FbGVtcy5mb3JFYWNoKChtZW51Q2hpbGQpID0+IHtcbiAgICAgICAgaWYgKG1lbnVDaGlsZC5ub2RlTmFtZSA9PT0gJ1VMJykge1xuICAgICAgICAgIGNvbnN0IG1lbnVQYXJlbnQgPSBtZW51Q2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgICBjb25zdCBtZW51UGFyZW50VGV4dCA9IG1lbnVQYXJlbnQuY2hpbGRyZW5bMF0uaW5uZXJIVE1MO1xuICAgICAgICAgIGNvbnN0IG1lbnVDaGlsZEREID0gbmV3IERyb3BEb3duKG1lbnVDaGlsZCk7XG4gICAgICAgICAgbWVudVBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG5hdk1lbnVDaGlsZHJlbi5mb3JFYWNoKChtZW51Q2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgbWVudUNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtZW51Q2hpbGRUZXh0ID0gbWVudUNoaWxkLmNoaWxkcmVuWzBdLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbWVudUNoaWxkREQuc3RhdHVzKCkgPT09ICd2aXNpYmxlJyAmJlxuICAgICAgICAgICAgICAgICAgICBtZW51Q2hpbGRUZXh0ICE9PSBtZW51UGFyZW50VGV4dFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVDaGlsZERELm1ha2VIaWRkZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgbWVudUNoaWxkREQudG9nZ2xlU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobWVudUNoaWxkREQuc3RhdHVzKCkgPT09ICd2aXNpYmxlJykge1xuICAgICAgICAgICAgICBtZW51Q2hpbGRERC5tYWtlSGlkZGVuKCk7XG4gICAgICAgICAgICAgIG1lbnVDaGlsZERELnRvZ2dsZVN0YXR1cygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZW51Q2hpbGRERC5zdGF0dXMoKSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgbWVudUNoaWxkREQubWFrZVZpc2libGUoKTtcbiAgICAgICAgICAgICAgbWVudUNoaWxkREQudG9nZ2xlU3RhdHVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvZHJvcERvd24nO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9