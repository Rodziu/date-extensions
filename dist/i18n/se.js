(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/se", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/se"] = factory();
	else
		root["i18n/se"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/se"],{

/***/ "./.build/i18n/se.js":
/*!***************************!*\
  !*** ./.build/i18n/se.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Northern Sami [se]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('se', {
    monthNames: ['Ođđajagemánnu', 'Guovvamánnu', 'Njukčamánnu', 'Cuoŋománnu', 'Miessemánnu', 'Geassemánnu', 'Suoidnemánnu', 'Borgemánnu', 'čakčamánnu', 'Golggotmánnu', 'Skábmamánnu', 'Juovlamánnu'],
    monthShortNames: ['Ođđj', 'Guov', 'Njuk', 'Cuo', 'Mies', 'Geas', 'Suoi', 'Borg', 'čakč', 'Golg', 'Skáb', 'Juov'],
    dayNames: ['Sotnabeaivi', 'Vuossárga', 'Maŋŋebárga', 'Gaskavahkku', 'Duorastat', 'Bearjadat', 'Lávvardat'],
    dayShortNames: ['Sotn', 'Vuos', 'Maŋ', 'Gask', 'Duor', 'Bear', 'Láv']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/se.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=se.js.map