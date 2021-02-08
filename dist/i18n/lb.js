(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/lb", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/lb"] = factory();
	else
		root["i18n/lb"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/lb"],{

/***/ "./.build/i18n/lb.js":
/*!***************************!*\
  !*** ./.build/i18n/lb.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Luxembourgish [lb]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('lb', {
    monthNames: ['Januar', 'Februar', 'Mäerz', 'Abrëll', 'Mee', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthShortNames: ['Jan.', 'Febr.', 'Mrz.', 'Abr.', 'Mee', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
    dayNames: ['Sonndeg', 'Méindeg', 'Dënschdeg', 'Mëttwoch', 'Donneschdeg', 'Freideg', 'Samschdeg'],
    dayShortNames: ['So.', 'Mé.', 'Dë.', 'Më.', 'Do.', 'Fr.', 'Sa.']
});



/***/ })

},
0,[["./.build/i18n/lb.js","DateExtended"]]]).default;
});
//# sourceMappingURL=lb.js.map