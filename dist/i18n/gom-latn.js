(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/gom-latn", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/gom-latn"] = factory();
	else
		root["i18n/gom-latn"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/gom-latn"],{

/***/ "./.build/i18n/gom-latn.js":
/*!*********************************!*\
  !*** ./.build/i18n/gom-latn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Konkani Latin script [gom-latn]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('gom-latn', {
    monthNames: ['Janer', 'Febrer', 'Mars', 'Abril', 'Mai', 'Jun', 'Julai', 'Agost', 'Setembr', 'Otubr', 'Novembr', 'Dezembr'],
    monthShortNames: ['Jan.', 'Feb.', 'Mars', 'Abr.', 'Mai', 'Jun', 'Jul.', 'Ago.', 'Set.', 'Otu.', 'Nov.', 'Dez.'],
    dayNames: ['Aitar', 'Somar', 'Mongllar', 'Budvar', 'Brestar', 'Sukrar', 'Son\'var'],
    dayShortNames: ['Ait.', 'Som.', 'Mon.', 'Bud.', 'Bre.', 'Suk.', 'Son.']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/gom-latn.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=gom-latn.js.map