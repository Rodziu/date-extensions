(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/tl-ph", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/tl-ph"] = factory();
	else
		root["i18n/tl-ph"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/tl-ph"],{

/***/ "./.build/i18n/tl-ph.js":
/*!******************************!*\
  !*** ./.build/i18n/tl-ph.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Tagalog (Philippines) [tl-ph]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('tl-ph', {
    monthNames: ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
    monthShortNames: ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
    dayNames: ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado'],
    dayShortNames: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab']
});



/***/ })

},
0,[["./.build/i18n/tl-ph.js","DateExtended"]]]).default;
});
//# sourceMappingURL=tl-ph.js.map