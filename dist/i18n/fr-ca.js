(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/fr-ca", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/fr-ca"] = factory();
	else
		root["i18n/fr-ca"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/fr-ca"],{

/***/ "./.build/i18n/fr-ca.js":
/*!******************************!*\
  !*** ./.build/i18n/fr-ca.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale French (Canada) [fr-ca]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('fr-ca', {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthShortNames: ['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayShortNames: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.']
});



/***/ })

},
0,[["./.build/i18n/fr-ca.js","DateExtended"]]]).default;
});
//# sourceMappingURL=fr-ca.js.map