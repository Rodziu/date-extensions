export interface DateExtendedLocale {
    monthNames: string[];
    monthShortNames: string[];
    dayNames: string[];
    dayShortNames: string[];
}
declare type DateInterval = 'day' | 'week' | 'month' | 'year' | 'hour' | 'minute' | 'second';
export default class DateExtended extends Date {
    private locale;
    constructor();
    constructor(value: number | string);
    constructor(value: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);
    /**
     * Add new locale
     */
    static addLocale(locale: string, data: DateExtendedLocale): void;
    static setDefaultLocale(locale: string): void;
    static getDefaultLocale(): string;
    static getMonthNames(locale?: string): string[];
    static getMonthShortNames(locale?: string): string[];
    static getDayNames(locale?: string): string[];
    static getDayShortNames(locale?: string): string[];
    setLocale(locale: string): this;
    /**
     * Return current date locale
     */
    getLocale(): string;
    static createFromDate(dateObject: Date): DateExtended;
    /**
     * Parses a date string according to a specified format
     *
     * @param format - The format that the passed in string should be in.
     * @param date - String representing the date
     */
    static createFromFormat(format: string, date: string): DateExtended;
    /**
     * Get name of day.
     */
    getDayName(): string;
    /**
     * Get short name of day.
     */
    getDayShortName(): string;
    /**
     * Get name of month.
     */
    getMonthName(): string;
    /**
     * Get short name of month.
     */
    getMonthShortName(): string;
    /**
     * Get day number in month (starting from 1).
     */
    getRealDay(): string;
    /**
     * Get month number in year (starting from 1).
     */
    getRealMonth(): string;
    /**
     * Subtract a number (amount) of `type` interval from date.
     */
    sub(amount: number, type?: DateInterval): this;
    /**
     * Add a number (amount) of `type` interval from date.
     */
    add(amount: number, type?: DateInterval): this;
    /**
     * Return date formatted by given format (PHP style formats).
     */
    format(format: string): string;
    /**
     * Return a new Date instance with same values as current Date.
     */
    clone(): DateExtended;
    /**
     * Check if this instance of Date is valid.
     */
    isValid(): boolean;
}
export {};
