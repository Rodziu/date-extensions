(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ml", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ml"] = factory();
	else
		root["i18n/ml"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ml"],{

/***/ "./.build/i18n/ml.js":
/*!***************************!*\
  !*** ./.build/i18n/ml.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Malayalam [ml]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ml', {
    monthNames: ['ജനുവരി', 'ഫെബ്രുവരി', 'മാർച്ച്', 'ഏപ്രിൽ', 'മേയ്', 'ജൂൺ', 'ജൂലൈ', 'ഓഗസ്റ്റ്', 'സെപ്റ്റംബർ', 'ഒക്ടോബർ', 'നവംബർ', 'ഡിസംബർ'],
    monthShortNames: ['ജനു.', 'ഫെബ്രു.', 'മാർ.', 'ഏപ്രി.', 'മേയ്', 'ജൂൺ', 'ജൂലൈ.', 'ഓഗ.', 'സെപ്റ്റ.', 'ഒക്ടോ.', 'നവം.', 'ഡിസം.'],
    dayNames: ['ഞായറാഴ്ച', 'തിങ്കളാഴ്ച', 'ചൊവ്വാഴ്ച', 'ബുധനാഴ്ച', 'വ്യാഴാഴ്ച', 'വെള്ളിയാഴ്ച', 'ശനിയാഴ്ച'],
    dayShortNames: ['ഞായർ', 'തിങ്കൾ', 'ചൊവ്വ', 'ബുധൻ', 'വ്യാഴം', 'വെള്ളി', 'ശനി']
});



/***/ })

},
0,[["./.build/i18n/ml.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ml.js.map