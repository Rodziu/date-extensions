(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/gl", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/gl"] = factory();
	else
		root["i18n/gl"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/gl"],{

/***/ "./.build/i18n/gl.js":
/*!***************************!*\
  !*** ./.build/i18n/gl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Galician [gl]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('gl', {
    monthNames: ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'],
    monthShortNames: ['Xan.', 'Feb.', 'Mar.', 'Abr.', 'Mai.', 'Xuñ.', 'Xul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dec.'],
    dayNames: ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'],
    dayShortNames: ['Dom.', 'Lun.', 'Mar.', 'Mér.', 'Xov.', 'Ven.', 'Sáb.']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/gl.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=gl.js.map