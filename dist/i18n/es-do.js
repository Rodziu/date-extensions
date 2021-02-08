(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/es-do", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/es-do"] = factory();
	else
		root["i18n/es-do"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/es-do"],{

/***/ "./.build/i18n/es-do.js":
/*!******************************!*\
  !*** ./.build/i18n/es-do.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Spanish (Dominican Republic) [es-do]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('es-do', {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthShortNames: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayShortNames: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.']
});



/***/ })

},
0,[["./.build/i18n/es-do.js","DateExtended"]]]).default;
});
//# sourceMappingURL=es-do.js.map