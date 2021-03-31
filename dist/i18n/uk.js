(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/uk", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/uk"] = factory();
	else
		root["i18n/uk"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/uk"],{

/***/ "./.build/i18n/uk.js":
/*!***************************!*\
  !*** ./.build/i18n/uk.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Ukrainian [uk]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('uk', {
    monthNames: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'],
    monthShortNames: ['січ', 'лют', 'бер', 'квіт', 'трав', 'черв', 'лип', 'серп', 'вер', 'жовт', 'лист', 'груд'],
    dayNames: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'],
    dayShortNames: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/uk.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=uk.js.map