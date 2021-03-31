(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/sr-cyrl", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/sr-cyrl"] = factory();
	else
		root["i18n/sr-cyrl"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/sr-cyrl"],{

/***/ "./.build/i18n/sr-cyrl.js":
/*!********************************!*\
  !*** ./.build/i18n/sr-cyrl.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Serbian Cyrillic [sr-cyrl]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('sr-cyrl', {
    monthNames: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
    monthShortNames: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'],
    dayNames: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
    dayShortNames: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/sr-cyrl.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=sr-cyrl.js.map