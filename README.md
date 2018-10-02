# JavaScript Date Extensions

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

Default locale is Polish, you can change it by including selected locale file from `dist/i18n/*.js`

```javascript
date = new Date('2018-09-01');
date.getDayName(); // Sobota
date.getDayShortName(); // Sb
date.getMonthName(); // Wrzesień
date.getMonthShortName(); // Wrz
```

### Date.add & Date.sub

Supported interval types are: `day week month year hour minute second`

```javascript
date = new Date('2018-09-01');
date.add(1, 'year'); // Sun Sep 01 2019 02:00:00 GMT+0200 (CEST)
date.sub(1, 'week'); // Sat Aug 25 2018 02:00:00 GMT+0200 (CEST)
```

### Date.format

Allows one to easily format date object into a string in [PHP way](http://php.net/manual/en/function.date.php).

```javascript
date = new Date('2018-09-01');
date.format('Y-m-d H:i:s l F'); // 2018-09-01 02:00:00, Sobota Wrzesień
```

### Date.clone

Clones date object into new one.

```javascript
date = new Date('2018-09-01');
date.clone().add(1, 'month'); // Mon Oct 01 2018 02:00:00 GMT+0200 (CEST)
// date is still Sat Sep 01 2018 02:00:00 GMT+0200 (CEST)
```

### Date.isValid

Checks if Date object is valid

```javascript
(new Date('2018-09-01')).isValid(); // true
(new Date('0000-00-00')).isValid(); // false
```

### Date.createFromFormat

Parses a date string according to a specified format.
Supported format tokens are: d, j, F, M, m, n, Y, y, G, g, H, h, i, s. Any other characters are being ignored.
Token meanings are the same as in [PHP language](http://php.net/manual/en/datetime.createfromformat.php).

```javascript
(new Date()).createFromFormat('H:i:s j F Y', '12:59:03 4 Listopad 2017'); // Sat Nov 04 2017 12:59:03 GMT+0100 (CET)
```