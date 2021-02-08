(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/mk", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/mk"] = factory();
	else
		root["i18n/mk"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/mk"],{

/***/ "./.build/i18n/mk.js":
/*!***************************!*\
  !*** ./.build/i18n/mk.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Macedonian [mk]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('mk', {
    monthNames: ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември'],
    monthShortNames: ['јан', 'фев', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'ное', 'дек'],
    dayNames: ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота'],
    dayShortNames: ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб']
});



/***/ })

},
0,[["./.build/i18n/mk.js","DateExtended"]]]).default;
});
//# sourceMappingURL=mk.js.map