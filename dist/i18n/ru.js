(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ru", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ru"] = factory();
	else
		root["i18n/ru"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ru"],{

/***/ "./.build/i18n/ru.js":
/*!***************************!*\
  !*** ./.build/i18n/ru.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Russian [ru]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ru', {
    monthNames: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
    monthShortNames: ['янв.', 'февр.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayShortNames: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
});



/***/ })

},
0,[["./.build/i18n/ru.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ru.js.map