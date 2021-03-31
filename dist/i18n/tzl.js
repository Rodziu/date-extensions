(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/tzl", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/tzl"] = factory();
	else
		root["i18n/tzl"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/tzl"],{

/***/ "./.build/i18n/tzl.js":
/*!****************************!*\
  !*** ./.build/i18n/tzl.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Talossan [tzl]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('tzl', {
    monthNames: ['Januar', 'Fevraglh', 'Març', 'Avrïu', 'Mai', 'Gün', 'Julia', 'Guscht', 'Setemvar', 'Listopäts', 'Noemvar', 'Zecemvar'],
    monthShortNames: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Gün', 'Jul', 'Gus', 'Set', 'Lis', 'Noe', 'Zec'],
    dayNames: ['Súladi', 'Lúneçi', 'Maitzi', 'Márcuri', 'Xhúadi', 'Viénerçi', 'Sáturi'],
    dayShortNames: ['Súl', 'Lún', 'Mai', 'Már', 'Xhú', 'Vié', 'Sát']
});



/***/ })

},
0,[["./.build/i18n/tzl.js","DateExtended"]]]).default;
});
//# sourceMappingURL=tzl.js.map