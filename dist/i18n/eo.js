(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/eo", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/eo"] = factory();
	else
		root["i18n/eo"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/eo"],{

/***/ "./.build/i18n/eo.js":
/*!***************************!*\
  !*** ./.build/i18n/eo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Esperanto [eo]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('eo', {
    monthNames: ['Januaro', 'Februaro', 'Marto', 'Aprilo', 'Majo', 'Junio', 'Julio', 'Aŭgusto', 'Septembro', 'Oktobro', 'Novembro', 'Decembro'],
    monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aŭg', 'Sep', 'Okt', 'Nov', 'Dec'],
    dayNames: ['Dimanĉo', 'Lundo', 'Mardo', 'Merkredo', 'ĵaŭdo', 'Vendredo', 'Sabato'],
    dayShortNames: ['Dim', 'Lun', 'Mard', 'Merk', 'ĵaŭ', 'Ven', 'Sab']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/eo.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=eo.js.map