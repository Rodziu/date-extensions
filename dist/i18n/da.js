(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/da", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/da"] = factory();
	else
		root["i18n/da"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/da"],{

/***/ "./.build/i18n/da.js":
/*!***************************!*\
  !*** ./.build/i18n/da.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Danish [da]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('da', {
    monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
    monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
    dayShortNames: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør']
});



/***/ })

},
0,[["./.build/i18n/da.js","DateExtended"]]]).default;
});
//# sourceMappingURL=da.js.map