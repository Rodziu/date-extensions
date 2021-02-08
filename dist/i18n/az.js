(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/az", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/az"] = factory();
	else
		root["i18n/az"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/az"],{

/***/ "./.build/i18n/az.js":
/*!***************************!*\
  !*** ./.build/i18n/az.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Azerbaijani [az]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('az', {
    monthNames: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'],
    monthShortNames: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn', 'Iyl', 'Avq', 'Sen', 'Okt', 'Noy', 'Dek'],
    dayNames: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'],
    dayShortNames: ['Baz', 'BzE', 'ÇAx', 'Çər', 'CAx', 'Cüm', 'Şən']
});



/***/ })

},
0,[["./.build/i18n/az.js","DateExtended"]]]).default;
});
//# sourceMappingURL=az.js.map