(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/de-ch", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/de-ch"] = factory();
	else
		root["i18n/de-ch"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/de-ch"],{

/***/ "./.build/i18n/de-ch.js":
/*!******************************!*\
  !*** ./.build/i18n/de-ch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale German (Switzerland) [de-ch]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('de-ch', {
    monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthShortNames: ['Jan.', 'Febr.', 'März', 'April', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayShortNames: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/de-ch.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=de-ch.js.map