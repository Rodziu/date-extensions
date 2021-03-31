(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/it", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/it"] = factory();
	else
		root["i18n/it"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/it"],{

/***/ "./.build/i18n/it.js":
/*!***************************!*\
  !*** ./.build/i18n/it.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Italian [it]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('it', {
    monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    monthShortNames: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    dayNames: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    dayShortNames: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
});



/***/ })

},
0,[["./.build/i18n/it.js","DateExtended"]]]).default;
});
//# sourceMappingURL=it.js.map