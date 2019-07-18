/**
 * JavaScript DateExtended.
 * (c) 2016-2019 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
// eslint-disable-next-line no-unused-vars
const DateExtended = (function(){
	'use strict';
	const locales = {
		'en-us': {
			monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			dayShortNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		}
	};
	let defaultLocale = 'en-us';

	class DateExtended extends Date {
		/**
		 * @param {String|number} [value]
		 * @param {number} [month]
		 * @param {number} [date]
		 * @param {number} [hours]
		 * @param {number} [minutes]
		 * @param {number} [seconds]
		 * @param {number} [ms]
		 */
		// eslint-disable-next-line no-unused-vars
		constructor(value, month, date, hours, minutes, seconds, ms){
			// noinspection JSCheckFunctionSignatures
			super(...arguments);
			this.locale = defaultLocale;
		}

		/**
		 * Add new locale
		 * @param {string} locale
		 * @param {{monthShortNames: string[], dayNames: string[], monthNames: string[], dayShortNames: string[]}} data
		 */
		static addLocale(locale, data){
			locales[locale] = data;
		}

		/**
		 * @param {string} locale
		 */
		static setDefaultLocale(locale){
			if(!(locale in locales)){
				throw new Error(`Locale ${locale} was not defined!`);
			}
			defaultLocale = locale;
		}

		/**
		 * @returns {string}
		 */
		static getDefaultLocale(){
			return defaultLocale;
		}

		/**
		 * @param [locale]
		 * @returns {string[]}
		 */
		static getMonthNames(locale){
			return _getLocaleData(locale, 'monthNames');
		}

		/**
		 * @param [locale]
		 * @returns {string[]}
		 */
		static getMonthShortNames(locale){
			return _getLocaleData(locale, 'monthShortNames');
		}

		/**
		 * @param [locale]
		 * @returns {string[]}
		 */
		static getDayNames(locale){
			return _getLocaleData(locale, 'dayNames');
		}

		/**
		 * @param [locale]
		 * @returns {string[]}
		 */
		static getDayShortNames(locale){
			return _getLocaleData(locale, 'dayShortNames');
		}

		/**
		 * @param {string} locale
		 * @returns {DateExtended}
		 */
		setLocale(locale){
			if(!(locale in locales)){
				throw new Error(`Locale ${locale} was not defined!`);
			}
			this.locale = locale;
			return this;
		}

		/**
		 * Return current date locale
		 * @returns {string}
		 */
		getLocale(){
			return this.locale;
		}

		/**
		 * @param {Date} dateObject
		 * @returns {DateExtended}
		 */
		static createFromDate(dateObject){
			return new DateExtended(dateObject.getTime());
		}

		/**
		 * Parses a date string according to a specified format
		 *
		 * @param {string} format - The format that the passed in string should be in.
		 * @param {string} date - String representing the date
		 * @returns {DateExtended}
		 */
		static createFromFormat(format, date){
			const result = new DateExtended();
			for(let i = 0; i < format.length; i++){
				let match = null;
				switch(format[i]){
					case 'd':
					case 'j':
						match = date.match(
							format[i] === 'd' ? /^[0-9]{2}/ : /^[0-9]{1,2}/
						);
						if(match !== null){
							match = match[0];
							if(match > 0 && match < 32){
								result.setDate(parseInt(match));
							}else{
								match = null;
							}
						}
						break;
					case 'F':
					case 'M':{
						const array = format[i] === 'F'
							? locales[result.getLocale()].monthNames
							: locales[result.getLocale()].monthShortNames;
						for(let m = 0; m < array.length; m++){
							match = date.match(new RegExp("^" + array[m]));
							if(match !== null){
								match = match[0];
								result.setMonth(m);
								break;
							}
						}
						break;
					}
					case 'm':
					case 'n':
						match = date.match(
							format[i] === 'm' ? /^[0-9]{2}/ : /^[0-9]{1,2}/
						);
						if(match !== null){
							match = match[0];
							if(match > 0 && match < 13){
								result.setMonth(match - 1);
							}else{
								match = null;
							}
						}
						break;
					case 'Y':
					case 'y':
						match = date.match(
							format[i] === 'Y' ? /^[0-9]{4}/ : /^[0-9]{2}/
						);
						if(match !== null){
							match = match[0];
							result.setFullYear(parseInt(format[i] === 'Y' ? match : '20' + match));
						}
						break;
					case 'g':
					case 'G':
					case 'h':
					case 'H':
						match = date.match(format[i] === 'h' || format[i] === 'H' ? /^[0-9]{2}/ : /^[0-9]{1,2}/);
						if(match !== null){
							match = match[0];
							if(
								match >= 0
								&& (
									((format[i] === 'g' || format[i] === 'h') && match < 13)
									|| ((format[i] === 'G' || format[i] === 'H') && match < 24)
								)
							){
								result.setHours(parseInt(match));
							}else{
								match = null;
							}
						}
						break;
					case 'i':
					case 's':
						match = date.match(/^[0-9]{2}/);
						if(match !== null){
							match = match[0];
							if(match > 0 && match < 60){
								if(format[i] === 'i'){
									result.setMinutes(parseInt(match));
								}else{
									result.setSeconds(parseInt(match));
								}
							}
						}
						break;
					default:
						match = format[i];
						break;
				}
				if(match === null){
					// noinspection JSCheckFunctionSignatures
					result.setTime('a'); // make it an invalid date
					break;
				}
				date = date.replace(match, '');
			}
			return result;
		}

		/**
		 * Get name of day.
		 * @returns {string}
		 */
		getDayName(){
			return locales[this.locale].dayNames[this.getDay()];
		}

		/**
		 * Get short name of day.
		 * @returns {string}
		 */
		getDayShortName(){
			return locales[this.locale].dayShortNames[this.getDay()];
		}

		/**
		 * Get name of month.
		 * @returns {string}
		 */
		getMonthName(){
			return locales[this.locale].monthNames[this.getMonth()];
		}

		/**
		 * Get short name of month.
		 * @returns {string}
		 */
		getMonthShortName(){
			return locales[this.locale].monthShortNames[this.getMonth()];
		}

		/**
		 * Get day number in month (starting from 1).
		 *
		 * @returns {string}
		 */
		getRealDay(){
			return _datePad(this.getDate());
		}

		/**
		 * Get month number in year (starting from 1).
		 * @returns {string}
		 */
		getRealMonth(){
			return _datePad(this.getMonth() + 1);
		}

		/**
		 * Subtract a number (amount) of `type` interval from date.
		 * @param {number} amount
		 * @param {string} [type] - day|week|month|year|hour|minute|second
		 * @returns {Date}
		 */
		sub(amount, type){
			if(typeof type === 'undefined'){
				type = 'day';
			}
			switch(type){
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
					throw new Error("Invalid interval type");
			}
			return this;
		}

		/**
		 * Add a number (amount) of `type` interval from date.
		 * @param {number} amount
		 * @param {string} [type] - day|week|month|year|hour|minute|second
		 * @returns {Date}
		 */
		add(amount, type){
			this.sub(-amount, type);
			return this;
		}

		/**
		 * Return date formatted by given format (PHP style formats).
		 * @param {string} format
		 * @returns {string}
		 */
		format(format){
			const cache = {};
			let result = "",
				cur;
			for(let i = 0; i < format.length; i++){
				if(format[i] in cache){
					cur = cache[format[i]];
				}else{
					cur = _formatOne(this, format[i]);
				}
				result += cur;
				cache[format[i]] = cur;
			}
			return result;
		}

		/**
		 * Return a new Date instance with same values as current Date.
		 * @returns {DateExtended}
		 */
		clone(){
			return new DateExtended(this.getTime());
		}

		/**
		 * Check if this instance of Date is valid.
		 * @returns {boolean}
		 */
		isValid(){
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
	function _datePad(v){
		return v < 10 ? '0' + v : v;
	}

	/**
	 * Format date by given char (PHP style formats).
	 * @private
	 */
	function _formatOne(date, format){
		switch(format){
			case 'd':
				return date.getRealDay();
			case 'D':
				return date.getDayShortName();
			case 'j':
				return date.getDate();
			case 'l':
				return date.getDayName();
			case 'N':{
				const d = date.getDay();
				if(d === 0){
					return '7';
				}
				return d;
			}
			case 'w':
				return date.getDay();
			case 'z':{
				const ys = new DateExtended(date.getFullYear() + '-01-01'),
					cmp = new DateExtended(`${date.getFullYear()}-${date.getRealMonth()}-${date.getRealDay()}`);
				return ((cmp - ys) / oneDay);
			}
			case 'F':
				return date.getMonthName();
			case 'm':
				return date.getRealMonth();
			case 'M':
				return date.getMonthShortName();
			case 'n':
				return date.getMonth() + 1;
			case 't':
				return (new DateExtended(date.getFullYear(), date.getMonth() + 1, 0)).getRealDay();
			case 'L':
				return date.getFullYear() - (Math.floor(date.getFullYear() / 4) * 4) === 0 ? 1 : 0;
			case 'Y':
				return date.getFullYear();
			case 'y':
				return date.getFullYear().toString().substr(2);
			case 'g':{
				const g = date.getHours();
				if(g > 12){
					return g - 12;
				}else if(g === 0){
					return 12;
				}
				return g;
			}
			case 'G':
				return date.getHours();
			case 'h':
				return _datePad(_formatOne(date, 'g'));
			case 'H':
				return _datePad(date.getHours());
			case 'i':
				return _datePad(date.getMinutes());
			case 's':
				return _datePad(date.getSeconds());
		}
		return format;
	}

	/**
	 * @param {string} locale
	 * @param {string} dataKey
	 * @returns {string[]}
	 * @private
	 */
	function _getLocaleData(locale, dataKey){
		if(typeof locale === 'undefined'){
			locale = defaultLocale;
		}
		if(!(locale in locales)){
			throw new Error(`Locale ${locale} was not defined!`);
		}
		return locales[locale][dataKey].slice(0);
	}

	return DateExtended;
})();
