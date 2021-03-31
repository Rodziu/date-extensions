(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/zh-tw", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/zh-tw"] = factory();
	else
		root["i18n/zh-tw"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/zh-tw"],{

/***/ "./.build/i18n/zh-tw.js":
/*!******************************!*\
  !*** ./.build/i18n/zh-tw.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Chinese (Taiwan) [zh-tw]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('zh-tw', {
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthShortNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayShortNames: ['週日', '週一', '週二', '週三', '週四', '週五', '週六']
});



/***/ })

},
0,[["./.build/i18n/zh-tw.js","DateExtended"]]]).default;
});
//# sourceMappingURL=zh-tw.js.map