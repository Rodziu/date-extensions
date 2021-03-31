(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ms", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ms"] = factory();
	else
		root["i18n/ms"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ms"],{

/***/ "./.build/i18n/ms.js":
/*!***************************!*\
  !*** ./.build/i18n/ms.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Malay [ms]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ms', {
    monthNames: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
    monthShortNames: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogs', 'Sep', 'Okt', 'Nov', 'Dis'],
    dayNames: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
    dayShortNames: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab']
});



/***/ })

},
0,[["./.build/i18n/ms.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ms.js.map