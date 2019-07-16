# JavaScript DateExtended Extensions

JavaScript Date class extensions that allows one to easily interact with Dates.

## Prerequisites

None :).

## Installation

```
yarn add date-extensions
yarn install
```

## Features

### Localized day and month names

Default locale is en-us.

```javascript
date = new DateExtended('2018-09-01');
date.getDayName(); // Saturday
date.getDayShortName(); // Sat
date.getMonthName(); // September
date.getMonthShortName(); // Sep
```

You can add other locales by including selected locale file from `dist/i18n/*.js`. Locale can be changed at runtime using `DateExtended.setDefaultLocale` or `(DateExtendedInstance).setLocale` functions.

```javascript
date = new DateExtended('2018-09-01');
date.getDayName(); // Saturday
date.setLocale('pl');
date.getDayName(); // Sobota
```

### DateExtended.add & DateExtended.sub

Supported interval types are: `day week month year hour minute second`

```javascript
date = new DateExtended('2018-09-01');
date.add(1, 'year'); // Sun Sep 01 2019 02:00:00 GMT+0200 (CEST)
date.sub(1, 'week'); // Sat Aug 25 2018 02:00:00 GMT+0200 (CEST)
```

### DateExtended.format

Allows one to easily format date object into a string in [PHP way](http://php.net/manual/en/function.date.php).

```javascript
date = new DateExtended('2018-09-01');
date.format('Y-m-d H:i:s l F'); // 2018-09-01 02:00:00, Sobota Wrzesień
```

### DateExtended.clone

Clones date object into new one.

```javascript
date = new DateExtended('2018-09-01');
date.clone().add(1, 'month'); // Mon Oct 01 2018 02:00:00 GMT+0200 (CEST)
// date is still Sat Sep 01 2018 02:00:00 GMT+0200 (CEST)
```

### DateExtended.isValid

Checks if DateExtended object is valid

```javascript
(new DateExtended('2018-09-01')).isValid(); // true
(new DateExtended('0000-00-00')).isValid(); // false
```

### DateExtended.createFromFormat

Parses a date string according to a specified format.
Supported format tokens are: d, j, F, M, m, n, Y, y, G, g, H, h, i, s. Any other characters are being ignored.
Token meanings are the same as in [PHP language](http://php.net/manual/en/datetime.createfromformat.php).

```javascript
DateExtended.createFromFormat('H:i:s j F Y', '12:59:03 4 Listopad 2017'); // Sat Nov 04 2017 12:59:03 GMT+0100 (CET)
```

### DateExtended.createFromDate

You can create DateExtended instance from Date instance.

```javascript
DateExtended.createFromDate(new Date);
```
