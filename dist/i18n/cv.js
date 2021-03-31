(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/cv", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/cv"] = factory();
	else
		root["i18n/cv"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/cv"],{

/***/ "./.build/i18n/cv.js":
/*!***************************!*\
  !*** ./.build/i18n/cv.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Chuvash [cv]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('cv', {
    monthNames: ['кӑрлач', 'нарӑс', 'пуш', 'ака', 'май', 'ҫӗртме', 'утӑ', 'ҫурла', 'авӑн', 'юпа', 'чӳк', 'раштав'],
    monthShortNames: ['кӑр', 'нар', 'пуш', 'ака', 'май', 'ҫӗр', 'утӑ', 'ҫур', 'авн', 'юпа', 'чӳк', 'раш'],
    dayNames: ['вырсарникун', 'тунтикун', 'ытларикун', 'юнкун', 'кӗҫнерникун', 'эрнекун', 'шӑматкун'],
    dayShortNames: ['выр', 'тун', 'ытл', 'юн', 'кӗҫ', 'эрн', 'шӑм']
});



/***/ })

},
0,[["./.build/i18n/cv.js","DateExtended"]]]).default;
});
//# sourceMappingURL=cv.js.map