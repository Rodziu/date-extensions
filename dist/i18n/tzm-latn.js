(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/tzm-latn", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/tzm-latn"] = factory();
	else
		root["i18n/tzm-latn"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/tzm-latn"],{

/***/ "./.build/i18n/tzm-latn.js":
/*!*********************************!*\
  !*** ./.build/i18n/tzm-latn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Central Atlas Tamazight Latin [tzm-latn]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('tzm-latn', {
    monthNames: ['Innayr', 'Brˤayrˤ', 'Marˤsˤ', 'Ibrir', 'Mayyw', 'Ywnyw', 'Ywlywz', 'ɣwšt', 'šwtanbir', 'Ktˤwbrˤ', 'Nwwanbir', 'Dwjnbir'],
    monthShortNames: ['Innayr', 'Brˤayrˤ', 'Marˤsˤ', 'Ibrir', 'Mayyw', 'Ywnyw', 'Ywlywz', 'ɣwšt', 'šwtanbir', 'Ktˤwbrˤ', 'Nwwanbir', 'Dwjnbir'],
    dayNames: ['Asamas', 'Aynas', 'Asinas', 'Akras', 'Akwas', 'Asimwas', 'Asiḍyas'],
    dayShortNames: ['Asamas', 'Aynas', 'Asinas', 'Akras', 'Akwas', 'Asimwas', 'Asiḍyas']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/tzm-latn.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=tzm-latn.js.map