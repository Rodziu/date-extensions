(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/hy-am", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/hy-am"] = factory();
	else
		root["i18n/hy-am"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/hy-am"],{

/***/ "./.build/i18n/hy-am.js":
/*!******************************!*\
  !*** ./.build/i18n/hy-am.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Armenian [hy-am]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('hy-am', {
    monthNames: ['հունվար', 'փետրվար', 'մարտ', 'ապրիլ', 'մայիս', 'հունիս', 'հուլիս', 'օգոստոս', 'սեպտեմբեր', 'հոկտեմբեր', 'նոյեմբեր', 'դեկտեմբեր'],
    monthShortNames: ['հնվ', 'փտր', 'մրտ', 'ապր', 'մյս', 'հնս', 'հլս', 'օգս', 'սպտ', 'հկտ', 'նմբ', 'դկտ'],
    dayNames: ['կիրակի', 'երկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի', 'հինգշաբթի', 'ուրբաթ', 'շաբաթ'],
    dayShortNames: ['կրկ', 'երկ', 'երք', 'չրք', 'հնգ', 'ուրբ', 'շբթ']
});



/***/ })

},
0,[["./.build/i18n/hy-am.js","DateExtended"]]]).default;
});
//# sourceMappingURL=hy-am.js.map