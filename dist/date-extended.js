(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DateExtended", [], factory);
	else if(typeof exports === 'object')
		exports["DateExtended"] = factory();
	else
		root["DateExtended"] = factory();
})(window, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.build/date-extended.js":
/*!*********************************!*\
  !*** ./.build/date-extended.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateExtended)
/* harmony export */ });
/**
 * JavaScript DateExtended.
 * (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
const locales = {
    'en-us': {
        monthNames: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
            'November', 'December'
        ],
        monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayShortNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
};
let defaultLocale = 'en-us';
class DateExtended extends Date {
    constructor(...params) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        super(...params);
        this.locale = defaultLocale;
    }
    /**
     * Add new locale
     */
    static addLocale(locale, data) {
        locales[locale] = data;
    }
    static setDefaultLocale(locale) {
        if (!(locale in locales)) {
            throw new Error(`Locale ${locale} was not defined!`);
        }
        defaultLocale = locale;
    }
    static getDefaultLocale() {
        return defaultLocale;
    }
    static getMonthNames(locale) {
        return _getLocaleData(locale, 'monthNames');
    }
    static getMonthShortNames(locale) {
        return _getLocaleData(locale, 'monthShortNames');
    }
    static getDayNames(locale) {
        return _getLocaleData(locale, 'dayNames');
    }
    static getDayShortNames(locale) {
        return _getLocaleData(locale, 'dayShortNames');
    }
    setLocale(locale) {
        if (!(locale in locales)) {
            throw new Error(`Locale ${locale} was not defined!`);
        }
        this.locale = locale;
        return this;
    }
    /**
     * Return current date locale
     */
    getLocale() {
        return this.locale;
    }
    static createFromDate(dateObject) {
        return new DateExtended(dateObject.getTime());
    }
    /**
     * Parses a date string according to a specified format
     *
     * @param format - The format that the passed in string should be in.
     * @param date - String representing the date
     */
    static createFromFormat(format, date) {
        const result = new DateExtended();
        for (let i = 0; i < format.length; i++) {
            let match = null;
            switch (format[i]) {
                case 'd':
                case 'j':
                    match = date.match(format[i] === 'd' ? /^[0-9]{2}/ : /^[0-9]{1,2}/);
                    if (match !== null) {
                        match = match[0];
                        if (match > 0 && match < 32) {
                            result.setDate(parseInt(match));
                        }
                        else {
                            match = null;
                        }
                    }
                    break;
                case 'F':
                case 'M': {
                    const array = format[i] === 'F'
                        ? locales[result.getLocale()].monthNames
                        : locales[result.getLocale()].monthShortNames;
                    for (let m = 0; m < array.length; m++) {
                        match = date.match(new RegExp('^' + array[m]));
                        if (match !== null) {
                            match = match[0];
                            result.setMonth(m);
                            break;
                        }
                    }
                    break;
                }
                case 'm':
                case 'n':
                    match = date.match(format[i] === 'm' ? /^[0-9]{2}/ : /^[0-9]{1,2}/);
                    if (match !== null) {
                        match = match[0];
                        if (match > 0 && match < 13) {
                            result.setMonth(match - 1);
                        }
                        else {
                            match = null;
                        }
                    }
                    break;
                case 'Y':
                case 'y':
                    match = date.match(format[i] === 'Y' ? /^[0-9]{4}/ : /^[0-9]{2}/);
                    if (match !== null) {
                        match = match[0];
                        result.setFullYear(parseInt(format[i] === 'Y' ? match : '20' + match));
                    }
                    break;
                case 'g':
                case 'G':
                case 'h':
                case 'H':
                    match = date.match(format[i] === 'h' || format[i] === 'H' ? /^[0-9]{2}/ : /^[0-9]{1,2}/);
                    if (match !== null) {
                        match = match[0];
                        if (match >= 0
                            && (((format[i] === 'g' || format[i] === 'h') && match < 13)
                                || ((format[i] === 'G' || format[i] === 'H') && match < 24))) {
                            result.setHours(parseInt(match));
                        }
                        else {
                            match = null;
                        }
                    }
                    break;
                case 'i':
                case 's':
                    match = date.match(/^[0-9]{2}/);
                    if (match !== null) {
                        match = match[0];
                        if (match > 0 && match < 60) {
                            if (format[i] === 'i') {
                                result.setMinutes(parseInt(match));
                            }
                            else {
                                result.setSeconds(parseInt(match));
                            }
                        }
                    }
                    break;
                default:
                    match = format[i];
                    break;
            }
            if (match === null) {
                result.setTime(NaN); // make it an invalid date
                break;
            }
            date = date.replace(match, '');
        }
        return result;
    }
    /**
     * Get name of day.
     */
    getDayName() {
        return locales[this.locale].dayNames[this.getDay()];
    }
    /**
     * Get short name of day.
     */
    getDayShortName() {
        return locales[this.locale].dayShortNames[this.getDay()];
    }
    /**
     * Get name of month.
     */
    getMonthName() {
        return locales[this.locale].monthNames[this.getMonth()];
    }
    /**
     * Get short name of month.
     */
    getMonthShortName() {
        return locales[this.locale].monthShortNames[this.getMonth()];
    }
    /**
     * Get day number in month (starting from 1).
     */
    getRealDay() {
        return _datePad(this.getDate());
    }
    /**
     * Get month number in year (starting from 1).
     */
    getRealMonth() {
        return _datePad(this.getMonth() + 1);
    }
    /**
     * Subtract a number (amount) of `type` interval from date.
     */
    sub(amount, type = 'day') {
        switch (type) {
            case 'day':
                this.setDate(this.getDate() - amount);
                break;
            case 'week':
                this.setDate(this.getDate() - (amount * 7));
                break;
            case 'month':
                this.setMonth(this.getMonth() - amount);
                break;
            case 'year':
                this.setFullYear(this.getFullYear() - amount);
                break;
            case 'hour':
                this.setHours(this.getHours() - amount);
                break;
            case 'minute':
                this.setMinutes(this.getMinutes() - amount);
                break;
            case 'second':
                this.setSeconds(this.getSeconds() - amount);
                break;
            default:
                throw new Error('Invalid interval type');
        }
        return this;
    }
    /**
     * Add a number (amount) of `type` interval from date.
     */
    add(amount, type = 'day') {
        this.sub(-amount, type);
        return this;
    }
    /**
     * Return date formatted by given format (PHP style formats).
     */
    format(format) {
        const cache = {};
        let result = '', cur;
        for (let i = 0; i < format.length; i++) {
            if (format[i] in cache) {
                cur = cache[format[i]];
            }
            else {
                cur = _formatOne(this, format[i]);
            }
            result += cur;
            cache[format[i]] = cur;
        }
        return result;
    }
    /**
     * Return a new Date instance with same values as current Date.
     */
    clone() {
        return new DateExtended(this.getTime());
    }
    /**
     * Check if this instance of Date is valid.
     */
    isValid() {
        return !isNaN(this.getTime());
    }
}
//////
const oneDay = 1000 * 60 * 60 * 24;
/**
 * Add leading zero if v is less than 10
 * @param v
 * @returns {string}
 * @private
 */
function _datePad(v) {
    return v < 10 ? '0' + v : v;
}
/**
 * Format date by given char (PHP style formats).
 */
function _formatOne(date, format) {
    switch (format) {
        // Day
        case 'd':
            return date.getRealDay();
        case 'D':
            return date.getDayShortName();
        case 'j':
            return date.getDate().toString();
        case 'l':
            return date.getDayName();
        case 'N': {
            const d = date.getDay();
            if (d === 0) {
                return '7';
            }
            return d.toString();
        }
        case 'S': {
            const d = date.getDate();
            if (d > 3 && d < 21) {
                return 'th';
            }
            switch (d % 10) {
                case 1:
                    return 'st';
                case 2:
                    return 'nd';
                case 3:
                    return 'rd';
                default:
                    return 'th';
            }
        }
        case 'w':
            return date.getDay().toString();
        case 'z': {
            const yearStart = new DateExtended(date.getFullYear() + '-01-01'), cmp = new DateExtended(`${date.getFullYear()}-${date.getRealMonth()}-${date.getRealDay()}`);
            return ((cmp.getTime() - yearStart.getTime()) / oneDay).toString();
        }
        // Week
        case 'W':
            return _getWeekNumber(date).week.toString();
        // Month
        case 'F':
            return date.getMonthName();
        case 'm':
            return date.getRealMonth();
        case 'M':
            return date.getMonthShortName();
        case 'n':
            return (date.getMonth() + 1).toString();
        case 't':
            return (new DateExtended(date.getFullYear(), date.getMonth() + 1, 0)).getRealDay();
        // Year
        case 'L':
            return date.getFullYear() - (Math.floor(date.getFullYear() / 4) * 4) === 0 ? '1' : '0';
        case 'o':
            return _getWeekNumber(date).year.toString();
        case 'Y':
            return date.getFullYear().toString();
        case 'y':
            return date.getFullYear().toString().substr(2);
        // Time
        case 'a':
            return date.getHours() >= 12 ? 'pm' : 'am';
        case 'A':
            return date.getHours() >= 12 ? 'PM' : 'AM';
        case 'B':
            return Math.floor((((date.getUTCHours() + 1) % 24)
                + date.getUTCMinutes() / 60
                + date.getUTCSeconds() / 3600) * 1000 / 24).toString();
        case 'g': {
            const g = date.getHours();
            if (g > 12) {
                return (g - 12).toString();
            }
            else if (g === 0) {
                return '12';
            }
            return g.toString();
        }
        case 'G':
            return date.getHours().toString();
        case 'h':
            return _datePad(_formatOne(date, 'g'));
        case 'H':
            return _datePad(date.getHours());
        case 'i':
            return _datePad(date.getMinutes());
        case 's':
            return _datePad(date.getSeconds());
        case 'u':
            break; // unsupported
        case 'v':
            return date.getUTCMilliseconds().toString();
        // Timezone
        case 'e':
            break; // unsupported
        case 'I':
            break; // unsupported
        case 'O':
        case 'P': {
            const offset = -date.getTimezoneOffset(), hours = offset / 60, minutes = offset - (hours * 60), sign = offset > 0 ? '+' : '-', colon = format === 'P' ? ':' : '';
            return sign + _datePad(Math.floor(hours)) + colon + _datePad(minutes);
        }
        case 'T': // unsupported
            break;
        case 'Z':
            return (-date.getTimezoneOffset() * 60).toString();
        // Full Date/Time
        case 'c':
            return date.format('Y-m-dTH:i:sP');
        case 'r':
            return date.format('D, d M Y H:i:s O');
        case 'U':
            return Math.floor(date.getTime() / 1000).toString();
    }
    return format;
}
function _getWeekNumber(date) {
    const yearStart = new DateExtended(date.getFullYear() + '-01-01'), nearestThursday = new DateExtended(Date.UTC(date.getFullYear(), date.getMonth() + 1, 0));
    nearestThursday.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    return {
        year: nearestThursday.getUTCFullYear(),
        week: Math.ceil((((nearestThursday.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
    };
}
function _getLocaleData(locale, dataKey) {
    if (typeof locale === 'undefined') {
        locale = defaultLocale;
    }
    if (!(locale in locales)) {
        throw new Error(`Locale ${locale} was not defined!`);
    }
    return locales[locale][dataKey].slice(0);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"DateExtended": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./.build/date-extended.js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = window["webpackChunk_name_"] = window["webpackChunk_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
.default;
});
//# sourceMappingURL=date-extended.js.map