(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/tlh", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/tlh"] = factory();
	else
		root["i18n/tlh"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/tlh"],{

/***/ "./.build/i18n/tlh.js":
/*!****************************!*\
  !*** ./.build/i18n/tlh.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Klingon [tlh]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('tlh', {
    monthNames: ['Tera’ jar wa’', 'Tera’ jar cha’', 'Tera’ jar wej', 'Tera’ jar loS', 'Tera’ jar vagh', 'Tera’ jar jav', 'Tera’ jar Soch', 'Tera’ jar chorgh', 'Tera’ jar Hut', 'Tera’ jar wa’maH', 'Tera’ jar wa’maH wa’', 'Tera’ jar wa’maH cha’'],
    monthShortNames: ['Jar wa’', 'Jar cha’', 'Jar wej', 'Jar loS', 'Jar vagh', 'Jar jav', 'Jar Soch', 'Jar chorgh', 'Jar Hut', 'Jar wa’maH', 'Jar wa’maH wa’', 'Jar wa’maH cha’'],
    dayNames: ['LojmItjaj', 'DaSjaj', 'Povjaj', 'GhItlhjaj', 'Loghjaj', 'Buqjaj', 'GhInjaj'],
    dayShortNames: ['LojmItjaj', 'DaSjaj', 'Povjaj', 'GhItlhjaj', 'Loghjaj', 'Buqjaj', 'GhInjaj']
});



/***/ })

},
0,[["./.build/i18n/tlh.js","DateExtended"]]]).default;
});
//# sourceMappingURL=tlh.js.map