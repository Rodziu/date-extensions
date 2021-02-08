(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ss", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ss"] = factory();
	else
		root["i18n/ss"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ss"],{

/***/ "./.build/i18n/ss.js":
/*!***************************!*\
  !*** ./.build/i18n/ss.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale siSwati [ss]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ss', {
    monthNames: ['Bhimbidvwane', 'Indlovana', 'Indlov\'lenkhulu', 'Mabasa', 'Inkhwekhweti', 'Inhlaba', 'Kholwane', 'Ingci', 'Inyoni', 'Imphala', 'Lweti', 'Ingongoni'],
    monthShortNames: ['Bhi', 'Ina', 'Inu', 'Mab', 'Ink', 'Inh', 'Kho', 'Igc', 'Iny', 'Imp', 'Lwe', 'Igo'],
    dayNames: ['Lisontfo', 'Umsombuluko', 'Lesibili', 'Lesitsatfu', 'Lesine', 'Lesihlanu', 'Umgcibelo'],
    dayShortNames: ['Lis', 'Umb', 'Lsb', 'Les', 'Lsi', 'Lsh', 'Umg']
});



/***/ })

},
0,[["./.build/i18n/ss.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ss.js.map