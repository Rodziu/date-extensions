(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/be", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/be"] = factory();
	else
		root["i18n/be"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/be"],{

/***/ "./.build/i18n/be.js":
/*!***************************!*\
  !*** ./.build/i18n/be.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Belarusian [be]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('be', {
    monthNames: ['студзень', 'люты', 'сакавік', 'красавік', 'травень', 'чэрвень', 'ліпень', 'жнівень', 'верасень', 'кастрычнік', 'лістапад', 'снежань'],
    monthShortNames: ['студ', 'лют', 'сак', 'крас', 'трав', 'чэрв', 'ліп', 'жнів', 'вер', 'каст', 'ліст', 'снеж'],
    dayNames: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацвер', 'пятніца', 'субота'],
    dayShortNames: ['нд', 'пн', 'ат', 'ср', 'чц', 'пт', 'сб']
});



/***/ })

},
0,[["./.build/i18n/be.js","DateExtended"]]]).default;
});
//# sourceMappingURL=be.js.map