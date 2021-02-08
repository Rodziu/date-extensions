(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/vi", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/vi"] = factory();
	else
		root["i18n/vi"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/vi"],{

/***/ "./.build/i18n/vi.js":
/*!***************************!*\
  !*** ./.build/i18n/vi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Vietnamese [vi]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('vi', {
    monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    monthShortNames: ['Th01', 'Th02', 'Th03', 'Th04', 'Th05', 'Th06', 'Th07', 'Th08', 'Th09', 'Th10', 'Th11', 'Th12'],
    dayNames: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
    dayShortNames: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
});



/***/ })

},
0,[["./.build/i18n/vi.js","DateExtended"]]]).default;
});
//# sourceMappingURL=vi.js.map