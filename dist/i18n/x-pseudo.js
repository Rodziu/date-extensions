(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/x-pseudo", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/x-pseudo"] = factory();
	else
		root["i18n/x-pseudo"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/x-pseudo"],{

/***/ "./.build/i18n/x-pseudo.js":
/*!*********************************!*\
  !*** ./.build/i18n/x-pseudo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Pseudo [x-pseudo]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('x-pseudo', {
    monthNames: ['J~áñúá~rý', 'F~ébrú~árý', '~Márc~h', 'Áp~ríl', '~Máý', '~Júñé~', 'Júl~ý', 'Áú~gúst~', 'Sép~témb~ér', 'Ó~ctób~ér', 'Ñ~óvém~bér', '~Décé~mbér'],
    monthShortNames: ['J~áñ', '~Féb', '~Már', '~Ápr', '~Máý', '~Júñ', '~Júl', '~Áúg', '~Sép', '~Óct', '~Ñóv', '~Déc'],
    dayNames: ['S~úñdá~ý', 'Mó~ñdáý~', 'Túé~sdáý~', 'Wéd~ñésd~áý', 'T~húrs~dáý', '~Fríd~áý', 'S~átúr~dáý'],
    dayShortNames: ['S~úñ', '~Móñ', '~Túé', '~Wéd', '~Thú', '~Frí', '~Sát']
});



/***/ })

},
0,[["./.build/i18n/x-pseudo.js","DateExtended"]]]).default;
});
//# sourceMappingURL=x-pseudo.js.map