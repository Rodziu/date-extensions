(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/yo", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/yo"] = factory();
	else
		root["i18n/yo"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/yo"],{

/***/ "./.build/i18n/yo.js":
/*!***************************!*\
  !*** ./.build/i18n/yo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Yoruba Nigeria [yo]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('yo', {
    monthNames: ['Sẹ́rẹ́', 'Èrèlè', 'Ẹrẹ̀nà', 'Ìgbé', 'Èbibi', 'Òkùdu', 'Agẹmo', 'Ògún', 'Owewe', 'Ọ̀wàrà', 'Bélú', 'Ọ̀pẹ̀̀'],
    monthShortNames: ['Sẹ́r', 'Èrl', 'Ẹrn', 'Ìgb', 'Èbi', 'Òkù', 'Agẹ', 'Ògú', 'Owe', 'Ọ̀wà', 'Bél', 'Ọ̀pẹ̀̀'],
    dayNames: ['Àìkú', 'Ajé', 'Ìsẹ́gun', 'Ọjọ́rú', 'Ọjọ́bọ', 'Ẹtì', 'Àbámẹ́ta'],
    dayShortNames: ['Àìk', 'Ajé', 'Ìsẹ́', 'Ọjr', 'Ọjb', 'Ẹtì', 'Àbá']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/yo.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=yo.js.map