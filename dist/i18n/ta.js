(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ta", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ta"] = factory();
	else
		root["i18n/ta"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ta"],{

/***/ "./.build/i18n/ta.js":
/*!***************************!*\
  !*** ./.build/i18n/ta.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Tamil [ta]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ta', {
    monthNames: ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டெம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'],
    monthShortNames: ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டெம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'],
    dayNames: ['ஞாயிற்றுக்கிழமை', 'திங்கட்கிழமை', 'செவ்வாய்கிழமை', 'புதன்கிழமை', 'வியாழக்கிழமை', 'வெள்ளிக்கிழமை', 'சனிக்கிழமை'],
    dayShortNames: ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி']
});



/***/ })

},
0,[["./.build/i18n/ta.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ta.js.map