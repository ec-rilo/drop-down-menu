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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7OztVQzFFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNEO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY2FycmlsbG8wNDYtZHJvcC1kb3duLW1lbnUvLi9zcmMvc3R5bGVzL21haW4uY3NzPzU4NDYiLCJ3ZWJwYWNrOi8vZWNhcnJpbGxvMDQ2LWRyb3AtZG93bi1tZW51Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3M/ZGQ1MSIsIndlYnBhY2s6Ly9lY2FycmlsbG8wNDYtZHJvcC1kb3duLW1lbnUvLi9zcmMvbW9kdWxlcy9kcm9wRG93bi5qcyIsIndlYnBhY2s6Ly9lY2FycmlsbG8wNDYtZHJvcC1kb3duLW1lbnUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWNhcnJpbGxvMDQ2LWRyb3AtZG93bi1tZW51L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VjYXJyaWxsbzA0Ni1kcm9wLWRvd24tbWVudS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWNhcnJpbGxvMDQ2LWRyb3AtZG93bi1tZW51L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWNhcnJpbGxvMDQ2LWRyb3AtZG93bi1tZW51L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWNhcnJpbGxvMDQ2LWRyb3AtZG93bi1tZW51Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogRHJvcCBEb3duIE1lbnUgTW9kdWxlXG4gKi9cblxuY2xhc3MgRHJvcERvd24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmN1cnJTdGF0dXMgPSAnaGlkZGVuJztcbiAgfVxuXG4gIHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyU3RhdHVzO1xuICB9XG5cbiAgdG9nZ2xlU3RhdHVzKCkge1xuICAgIGlmICh0aGlzLmN1cnJTdGF0dXMgPT09ICd2aXNpYmxlJykge1xuICAgICAgdGhpcy5jdXJyU3RhdHVzID0gJ2hpZGRlbic7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyU3RhdHVzO1xuICAgIH1cbiAgICB0aGlzLmN1cnJTdGF0dXMgPSAndmlzaWJsZSc7XG4gICAgcmV0dXJuIHRoaXMuY3VyclN0YXR1cztcbiAgfVxuXG4gIG1ha2VWaXNpYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdleHBhbmQtY29udHJhY3QtZXhwYW5kZWQnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kLWNvbnRyYWN0LWNvbnRyYWN0ZWQnKTtcbiAgfVxuXG4gIG1ha2VIaWRkZW4oKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1jb250cmFjdC1jb250cmFjdGVkJyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZC1jb250cmFjdC1leHBhbmRlZCcpO1xuICB9XG59XG5cbmNvbnN0IGluaXRERE1lbnVzID0gKCgpID0+IHtcbiAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbWVudScpO1xuICBjb25zdCBuYXZNZW51Q2hpbGRyZW4gPSBuYXZNZW51LmNoaWxkTm9kZXM7XG4gIG5hdk1lbnVDaGlsZHJlbi5mb3JFYWNoKChtZW51Q2hpbGQpID0+IHtcbiAgICBpZiAobWVudUNoaWxkLm5vZGVOYW1lID09PSAnTEknKSB7XG4gICAgICBjb25zdCBtZW51Q2hpbGRyZW5FbGVtcyA9IG1lbnVDaGlsZC5jaGlsZE5vZGVzO1xuICAgICAgbWVudUNoaWxkcmVuRWxlbXMuZm9yRWFjaCgobWVudUNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChtZW51Q2hpbGQubm9kZU5hbWUgPT09ICdVTCcpIHtcbiAgICAgICAgICBjb25zdCBtZW51UGFyZW50ID0gbWVudUNoaWxkLnBhcmVudE5vZGU7XG4gICAgICAgICAgY29uc3QgbWVudVBhcmVudFRleHQgPSBtZW51UGFyZW50LmNoaWxkcmVuWzBdLmlubmVySFRNTDtcbiAgICAgICAgICBjb25zdCBtZW51Q2hpbGRERCA9IG5ldyBEcm9wRG93bihtZW51Q2hpbGQpO1xuICAgICAgICAgIG1lbnVQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBuYXZNZW51Q2hpbGRyZW4uZm9yRWFjaCgobWVudUNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgIG1lbnVDaGlsZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbWVudUNoaWxkVGV4dCA9IG1lbnVDaGlsZC5jaGlsZHJlblswXS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIG1lbnVDaGlsZERELnN0YXR1cygpID09PSAndmlzaWJsZScgJiZcbiAgICAgICAgICAgICAgICAgICAgbWVudUNoaWxkVGV4dCAhPT0gbWVudVBhcmVudFRleHRcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBtZW51Q2hpbGRERC5tYWtlSGlkZGVuKCk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVDaGlsZERELnRvZ2dsZVN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG1lbnVDaGlsZERELnN0YXR1cygpID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgICAgICAgbWVudUNoaWxkREQubWFrZUhpZGRlbigpO1xuICAgICAgICAgICAgICBtZW51Q2hpbGRERC50b2dnbGVTdGF0dXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVudUNoaWxkREQuc3RhdHVzKCkgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgIG1lbnVDaGlsZERELm1ha2VWaXNpYmxlKCk7XG4gICAgICAgICAgICAgIG1lbnVDaGlsZERELnRvZ2dsZVN0YXR1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL2Ryb3BEb3duJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==