(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/id", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/id"] = factory();
	else
		root["i18n/id"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/id"],{

/***/ "./.build/i18n/id.js":
/*!***************************!*\
  !*** ./.build/i18n/id.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Indonesian [id]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('id', {
    monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
    dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    dayShortNames: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
});



/***/ })

},
0,[["./.build/i18n/id.js","DateExtended"]]]).default;
});
//# sourceMappingURL=id.js.map