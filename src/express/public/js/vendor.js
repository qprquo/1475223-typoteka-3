/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/libs/vendor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* flatpickr v4.6.3, @license MIT */\n(function (global, factory) {\n     true ? module.exports = factory() :\n    undefined;\n}(this, function () { 'use strict';\n\n    /*! *****************************************************************************\r\n    Copyright (c) Microsoft Corporation. All rights reserved.\r\n    Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\n    this file except in compliance with the License. You may obtain a copy of the\r\n    License at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\n    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\n    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\n    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\n    MERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\n    See the Apache Version 2.0 License for specific language governing permissions\r\n    and limitations under the License.\r\n    ***************************************************************************** */\r\n\r\n    var __assign = function() {\r\n        __assign = Object.assign || function __assign(t) {\r\n            for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n                s = arguments[i];\r\n                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n            }\r\n            return t;\r\n        };\r\n        return __assign.apply(this, arguments);\r\n    };\n\n    var HOOKS = [\n        \"onChange\",\n        \"onClose\",\n        \"onDayCreate\",\n        \"onDestroy\",\n        \"onKeyDown\",\n        \"onMonthChange\",\n        \"onOpen\",\n        \"onParseConfig\",\n        \"onReady\",\n        \"onValueUpdate\",\n        \"onYearChange\",\n        \"onPreCalendarPosition\",\n    ];\n    var defaults = {\n        _disable: [],\n        _enable: [],\n        allowInput: false,\n        altFormat: \"F j, Y\",\n        altInput: false,\n        altInputClass: \"form-control input\",\n        animate: typeof window === \"object\" &&\n            window.navigator.userAgent.indexOf(\"MSIE\") === -1,\n        ariaDateFormat: \"F j, Y\",\n        clickOpens: true,\n        closeOnSelect: true,\n        conjunction: \", \",\n        dateFormat: \"Y-m-d\",\n        defaultHour: 12,\n        defaultMinute: 0,\n        defaultSeconds: 0,\n        disable: [],\n        disableMobile: false,\n        enable: [],\n        enableSeconds: false,\n        enableTime: false,\n        errorHandler: function (err) {\n            return typeof console !== \"undefined\" && console.warn(err);\n        },\n        getWeek: function (givenDate) {\n            var date = new Date(givenDate.getTime());\n            date.setHours(0, 0, 0, 0);\n            // Thursday in current week decides the year.\n            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));\n            // January 4 is always in week 1.\n            var week1 = new Date(date.getFullYear(), 0, 4);\n            // Adjust to Thursday in week 1 and count number of weeks from date to week1.\n            return (1 +\n                Math.round(((date.getTime() - week1.getTime()) / 86400000 -\n                    3 +\n                    ((week1.getDay() + 6) % 7)) /\n                    7));\n        },\n        hourIncrement: 1,\n        ignoredFocusElements: [],\n        inline: false,\n        locale: \"default\",\n        minuteIncrement: 5,\n        mode: \"single\",\n        monthSelectorType: \"dropdown\",\n        nextArrow: \"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>\",\n        noCalendar: false,\n        now: new Date(),\n        onChange: [],\n        onClose: [],\n        onDayCreate: [],\n        onDestroy: [],\n        onKeyDown: [],\n        onMonthChange: [],\n        onOpen: [],\n        onParseConfig: [],\n        onReady: [],\n        onValueUpdate: [],\n        onYearChange: [],\n        onPreCalendarPosition: [],\n        plugins: [],\n        position: \"auto\",\n        positionElement: undefined,\n        prevArrow: \"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>\",\n        shorthandCurrentMonth: false,\n        showMonths: 1,\n        static: false,\n        time_24hr: false,\n        weekNumbers: false,\n        wrap: false\n    };\n\n    var english = {\n        weekdays: {\n            shorthand: [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"],\n            longhand: [\n                \"Sunday\",\n                \"Monday\",\n                \"Tuesday\",\n                \"Wednesday\",\n                \"Thursday\",\n                \"Friday\",\n                \"Saturday\",\n            ]\n        },\n        months: {\n            shorthand: [\n                \"Jan\",\n                \"Feb\",\n                \"Mar\",\n                \"Apr\",\n                \"May\",\n                \"Jun\",\n                \"Jul\",\n                \"Aug\",\n                \"Sep\",\n                \"Oct\",\n                \"Nov\",\n                \"Dec\",\n            ],\n            longhand: [\n                \"January\",\n                \"February\",\n                \"March\",\n                \"April\",\n                \"May\",\n                \"June\",\n                \"July\",\n                \"August\",\n                \"September\",\n                \"October\",\n                \"November\",\n                \"December\",\n            ]\n        },\n        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],\n        firstDayOfWeek: 0,\n        ordinal: function (nth) {\n            var s = nth % 100;\n            if (s > 3 && s < 21)\n                return \"th\";\n            switch (s % 10) {\n                case 1:\n                    return \"st\";\n                case 2:\n                    return \"nd\";\n                case 3:\n                    return \"rd\";\n                default:\n                    return \"th\";\n            }\n        },\n        rangeSeparator: \" to \",\n        weekAbbreviation: \"Wk\",\n        scrollTitle: \"Scroll to increment\",\n        toggleTitle: \"Click to toggle\",\n        amPM: [\"AM\", \"PM\"],\n        yearAriaLabel: \"Year\",\n        hourAriaLabel: \"Hour\",\n        minuteAriaLabel: \"Minute\",\n        time_24hr: false\n    };\n\n    var pad = function (number) { return (\"0\" + number).slice(-2); };\n    var int = function (bool) { return (bool === true ? 1 : 0); };\n    /* istanbul ignore next */\n    function debounce(func, wait, immediate) {\n        if (immediate === void 0) { immediate = false; }\n        var timeout;\n        return function () {\n            var context = this, args = arguments;\n            timeout !== null && clearTimeout(timeout);\n            timeout = window.setTimeout(function () {\n                timeout = null;\n                if (!immediate)\n                    func.apply(context, args);\n            }, wait);\n            if (immediate && !timeout)\n                func.apply(context, args);\n        };\n    }\n    var arrayify = function (obj) {\n        return obj instanceof Array ? obj : [obj];\n    };\n\n    function toggleClass(elem, className, bool) {\n        if (bool === true)\n            return elem.classList.add(className);\n        elem.classList.remove(className);\n    }\n    function createElement(tag, className, content) {\n        var e = window.document.createElement(tag);\n        className = className || \"\";\n        content = content || \"\";\n        e.className = className;\n        if (content !== undefined)\n            e.textContent = content;\n        return e;\n    }\n    function clearNode(node) {\n        while (node.firstChild)\n            node.removeChild(node.firstChild);\n    }\n    function findParent(node, condition) {\n        if (condition(node))\n            return node;\n        else if (node.parentNode)\n            return findParent(node.parentNode, condition);\n        return undefined; // nothing found\n    }\n    function createNumberInput(inputClassName, opts) {\n        var wrapper = createElement(\"div\", \"numInputWrapper\"), numInput = createElement(\"input\", \"numInput \" + inputClassName), arrowUp = createElement(\"span\", \"arrowUp\"), arrowDown = createElement(\"span\", \"arrowDown\");\n        if (navigator.userAgent.indexOf(\"MSIE 9.0\") === -1) {\n            numInput.type = \"number\";\n        }\n        else {\n            numInput.type = \"text\";\n            numInput.pattern = \"\\\\d*\";\n        }\n        if (opts !== undefined)\n            for (var key in opts)\n                numInput.setAttribute(key, opts[key]);\n        wrapper.appendChild(numInput);\n        wrapper.appendChild(arrowUp);\n        wrapper.appendChild(arrowDown);\n        return wrapper;\n    }\n    function getEventTarget(event) {\n        if (typeof event.composedPath === \"function\") {\n            var path = event.composedPath();\n            return path[0];\n        }\n        return event.target;\n    }\n\n    var doNothing = function () { return undefined; };\n    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? \"shorthand\" : \"longhand\"][monthNumber]; };\n    var revFormat = {\n        D: doNothing,\n        F: function (dateObj, monthName, locale) {\n            dateObj.setMonth(locale.months.longhand.indexOf(monthName));\n        },\n        G: function (dateObj, hour) {\n            dateObj.setHours(parseFloat(hour));\n        },\n        H: function (dateObj, hour) {\n            dateObj.setHours(parseFloat(hour));\n        },\n        J: function (dateObj, day) {\n            dateObj.setDate(parseFloat(day));\n        },\n        K: function (dateObj, amPM, locale) {\n            dateObj.setHours((dateObj.getHours() % 12) +\n                12 * int(new RegExp(locale.amPM[1], \"i\").test(amPM)));\n        },\n        M: function (dateObj, shortMonth, locale) {\n            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));\n        },\n        S: function (dateObj, seconds) {\n            dateObj.setSeconds(parseFloat(seconds));\n        },\n        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },\n        W: function (dateObj, weekNum, locale) {\n            var weekNumber = parseInt(weekNum);\n            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);\n            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);\n            return date;\n        },\n        Y: function (dateObj, year) {\n            dateObj.setFullYear(parseFloat(year));\n        },\n        Z: function (_, ISODate) { return new Date(ISODate); },\n        d: function (dateObj, day) {\n            dateObj.setDate(parseFloat(day));\n        },\n        h: function (dateObj, hour) {\n            dateObj.setHours(parseFloat(hour));\n        },\n        i: function (dateObj, minutes) {\n            dateObj.setMinutes(parseFloat(minutes));\n        },\n        j: function (dateObj, day) {\n            dateObj.setDate(parseFloat(day));\n        },\n        l: doNothing,\n        m: function (dateObj, month) {\n            dateObj.setMonth(parseFloat(month) - 1);\n        },\n        n: function (dateObj, month) {\n            dateObj.setMonth(parseFloat(month) - 1);\n        },\n        s: function (dateObj, seconds) {\n            dateObj.setSeconds(parseFloat(seconds));\n        },\n        u: function (_, unixMillSeconds) {\n            return new Date(parseFloat(unixMillSeconds));\n        },\n        w: doNothing,\n        y: function (dateObj, year) {\n            dateObj.setFullYear(2000 + parseFloat(year));\n        }\n    };\n    var tokenRegex = {\n        D: \"(\\\\w+)\",\n        F: \"(\\\\w+)\",\n        G: \"(\\\\d\\\\d|\\\\d)\",\n        H: \"(\\\\d\\\\d|\\\\d)\",\n        J: \"(\\\\d\\\\d|\\\\d)\\\\w+\",\n        K: \"\",\n        M: \"(\\\\w+)\",\n        S: \"(\\\\d\\\\d|\\\\d)\",\n        U: \"(.+)\",\n        W: \"(\\\\d\\\\d|\\\\d)\",\n        Y: \"(\\\\d{4})\",\n        Z: \"(.+)\",\n        d: \"(\\\\d\\\\d|\\\\d)\",\n        h: \"(\\\\d\\\\d|\\\\d)\",\n        i: \"(\\\\d\\\\d|\\\\d)\",\n        j: \"(\\\\d\\\\d|\\\\d)\",\n        l: \"(\\\\w+)\",\n        m: \"(\\\\d\\\\d|\\\\d)\",\n        n: \"(\\\\d\\\\d|\\\\d)\",\n        s: \"(\\\\d\\\\d|\\\\d)\",\n        u: \"(.+)\",\n        w: \"(\\\\d\\\\d|\\\\d)\",\n        y: \"(\\\\d{2})\"\n    };\n    var formats = {\n        // get the date in UTC\n        Z: function (date) { return date.toISOString(); },\n        // weekday name, short, e.g. Thu\n        D: function (date, locale, options) {\n            return locale.weekdays.shorthand[formats.w(date, locale, options)];\n        },\n        // full month name e.g. January\n        F: function (date, locale, options) {\n            return monthToStr(formats.n(date, locale, options) - 1, false, locale);\n        },\n        // padded hour 1-12\n        G: function (date, locale, options) {\n            return pad(formats.h(date, locale, options));\n        },\n        // hours with leading zero e.g. 03\n        H: function (date) { return pad(date.getHours()); },\n        // day (1-30) with ordinal suffix e.g. 1st, 2nd\n        J: function (date, locale) {\n            return locale.ordinal !== undefined\n                ? date.getDate() + locale.ordinal(date.getDate())\n                : date.getDate();\n        },\n        // AM/PM\n        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },\n        // shorthand month e.g. Jan, Sep, Oct, etc\n        M: function (date, locale) {\n            return monthToStr(date.getMonth(), true, locale);\n        },\n        // seconds 00-59\n        S: function (date) { return pad(date.getSeconds()); },\n        // unix timestamp\n        U: function (date) { return date.getTime() / 1000; },\n        W: function (date, _, options) {\n            return options.getWeek(date);\n        },\n        // full year e.g. 2016\n        Y: function (date) { return date.getFullYear(); },\n        // day in month, padded (01-30)\n        d: function (date) { return pad(date.getDate()); },\n        // hour from 1-12 (am/pm)\n        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },\n        // minutes, padded with leading zero e.g. 09\n        i: function (date) { return pad(date.getMinutes()); },\n        // day in month (1-30)\n        j: function (date) { return date.getDate(); },\n        // weekday name, full, e.g. Thursday\n        l: function (date, locale) {\n            return locale.weekdays.longhand[date.getDay()];\n        },\n        // padded month number (01-12)\n        m: function (date) { return pad(date.getMonth() + 1); },\n        // the month number (1-12)\n        n: function (date) { return date.getMonth() + 1; },\n        // seconds 0-59\n        s: function (date) { return date.getSeconds(); },\n        // Unix Milliseconds\n        u: function (date) { return date.getTime(); },\n        // number of the day of the week\n        w: function (date) { return date.getDay(); },\n        // last two digits of year e.g. 16 for 2016\n        y: function (date) { return String(date.getFullYear()).substring(2); }\n    };\n\n    var createDateFormatter = function (_a) {\n        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;\n        return function (dateObj, frmt, overrideLocale) {\n            var locale = overrideLocale || l10n;\n            if (config.formatDate !== undefined) {\n                return config.formatDate(dateObj, frmt, locale);\n            }\n            return frmt\n                .split(\"\")\n                .map(function (c, i, arr) {\n                return formats[c] && arr[i - 1] !== \"\\\\\"\n                    ? formats[c](dateObj, locale, config)\n                    : c !== \"\\\\\"\n                        ? c\n                        : \"\";\n            })\n                .join(\"\");\n        };\n    };\n    var createDateParser = function (_a) {\n        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;\n        return function (date, givenFormat, timeless, customLocale) {\n            if (date !== 0 && !date)\n                return undefined;\n            var locale = customLocale || l10n;\n            var parsedDate;\n            var dateOrig = date;\n            if (date instanceof Date)\n                parsedDate = new Date(date.getTime());\n            else if (typeof date !== \"string\" &&\n                date.toFixed !== undefined // timestamp\n            )\n                // create a copy\n                parsedDate = new Date(date);\n            else if (typeof date === \"string\") {\n                // date string\n                var format = givenFormat || (config || defaults).dateFormat;\n                var datestr = String(date).trim();\n                if (datestr === \"today\") {\n                    parsedDate = new Date();\n                    timeless = true;\n                }\n                else if (/Z$/.test(datestr) ||\n                    /GMT$/.test(datestr) // datestrings w/ timezone\n                )\n                    parsedDate = new Date(date);\n                else if (config && config.parseDate)\n                    parsedDate = config.parseDate(date, format);\n                else {\n                    parsedDate =\n                        !config || !config.noCalendar\n                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)\n                            : new Date(new Date().setHours(0, 0, 0, 0));\n                    var matched = void 0, ops = [];\n                    for (var i = 0, matchIndex = 0, regexStr = \"\"; i < format.length; i++) {\n                        var token_1 = format[i];\n                        var isBackSlash = token_1 === \"\\\\\";\n                        var escaped = format[i - 1] === \"\\\\\" || isBackSlash;\n                        if (tokenRegex[token_1] && !escaped) {\n                            regexStr += tokenRegex[token_1];\n                            var match = new RegExp(regexStr).exec(date);\n                            if (match && (matched = true)) {\n                                ops[token_1 !== \"Y\" ? \"push\" : \"unshift\"]({\n                                    fn: revFormat[token_1],\n                                    val: match[++matchIndex]\n                                });\n                            }\n                        }\n                        else if (!isBackSlash)\n                            regexStr += \".\"; // don't really care\n                        ops.forEach(function (_a) {\n                            var fn = _a.fn, val = _a.val;\n                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);\n                        });\n                    }\n                    parsedDate = matched ? parsedDate : undefined;\n                }\n            }\n            /* istanbul ignore next */\n            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {\n                config.errorHandler(new Error(\"Invalid date provided: \" + dateOrig));\n                return undefined;\n            }\n            if (timeless === true)\n                parsedDate.setHours(0, 0, 0, 0);\n            return parsedDate;\n        };\n    };\n    /**\n     * Compute the difference in dates, measured in ms\n     */\n    function compareDates(date1, date2, timeless) {\n        if (timeless === void 0) { timeless = true; }\n        if (timeless !== false) {\n            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -\n                new Date(date2.getTime()).setHours(0, 0, 0, 0));\n        }\n        return date1.getTime() - date2.getTime();\n    }\n    var isBetween = function (ts, ts1, ts2) {\n        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);\n    };\n    var duration = {\n        DAY: 86400000\n    };\n\n    if (typeof Object.assign !== \"function\") {\n        Object.assign = function (target) {\n            var args = [];\n            for (var _i = 1; _i < arguments.length; _i++) {\n                args[_i - 1] = arguments[_i];\n            }\n            if (!target) {\n                throw TypeError(\"Cannot convert undefined or null to object\");\n            }\n            var _loop_1 = function (source) {\n                if (source) {\n                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });\n                }\n            };\n            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {\n                var source = args_1[_a];\n                _loop_1(source);\n            }\n            return target;\n        };\n    }\n\n    var DEBOUNCED_CHANGE_MS = 300;\n    function FlatpickrInstance(element, instanceConfig) {\n        var self = {\n            config: __assign({}, defaults, flatpickr.defaultConfig),\n            l10n: english\n        };\n        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });\n        self._handlers = [];\n        self.pluginElements = [];\n        self.loadedPlugins = [];\n        self._bind = bind;\n        self._setHoursFromDate = setHoursFromDate;\n        self._positionCalendar = positionCalendar;\n        self.changeMonth = changeMonth;\n        self.changeYear = changeYear;\n        self.clear = clear;\n        self.close = close;\n        self._createElement = createElement;\n        self.destroy = destroy;\n        self.isEnabled = isEnabled;\n        self.jumpToDate = jumpToDate;\n        self.open = open;\n        self.redraw = redraw;\n        self.set = set;\n        self.setDate = setDate;\n        self.toggle = toggle;\n        function setupHelperFunctions() {\n            self.utils = {\n                getDaysInMonth: function (month, yr) {\n                    if (month === void 0) { month = self.currentMonth; }\n                    if (yr === void 0) { yr = self.currentYear; }\n                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))\n                        return 29;\n                    return self.l10n.daysInMonth[month];\n                }\n            };\n        }\n        function init() {\n            self.element = self.input = element;\n            self.isOpen = false;\n            parseConfig();\n            setupLocale();\n            setupInputs();\n            setupDates();\n            setupHelperFunctions();\n            if (!self.isMobile)\n                build();\n            bindEvents();\n            if (self.selectedDates.length || self.config.noCalendar) {\n                if (self.config.enableTime) {\n                    setHoursFromDate(self.config.noCalendar\n                        ? self.latestSelectedDateObj || self.config.minDate\n                        : undefined);\n                }\n                updateValue(false);\n            }\n            setCalendarWidth();\n            self.showTimeInput =\n                self.selectedDates.length > 0 || self.config.noCalendar;\n            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);\n            /* TODO: investigate this further\n        \n              Currently, there is weird positioning behavior in safari causing pages\n              to scroll up. https://github.com/chmln/flatpickr/issues/563\n        \n              However, most browsers are not Safari and positioning is expensive when used\n              in scale. https://github.com/chmln/flatpickr/issues/1096\n            */\n            if (!self.isMobile && isSafari) {\n                positionCalendar();\n            }\n            triggerEvent(\"onReady\");\n        }\n        function bindToInstance(fn) {\n            return fn.bind(self);\n        }\n        function setCalendarWidth() {\n            var config = self.config;\n            if (config.weekNumbers === false && config.showMonths === 1)\n                return;\n            else if (config.noCalendar !== true) {\n                window.requestAnimationFrame(function () {\n                    if (self.calendarContainer !== undefined) {\n                        self.calendarContainer.style.visibility = \"hidden\";\n                        self.calendarContainer.style.display = \"block\";\n                    }\n                    if (self.daysContainer !== undefined) {\n                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;\n                        self.daysContainer.style.width = daysWidth + \"px\";\n                        self.calendarContainer.style.width =\n                            daysWidth +\n                                (self.weekWrapper !== undefined\n                                    ? self.weekWrapper.offsetWidth\n                                    : 0) +\n                                \"px\";\n                        self.calendarContainer.style.removeProperty(\"visibility\");\n                        self.calendarContainer.style.removeProperty(\"display\");\n                    }\n                });\n            }\n        }\n        /**\n         * The handler for all events targeting the time inputs\n         */\n        function updateTime(e) {\n            if (self.selectedDates.length === 0) {\n                setDefaultTime();\n            }\n            if (e !== undefined && e.type !== \"blur\") {\n                timeWrapper(e);\n            }\n            var prevValue = self._input.value;\n            setHoursFromInputs();\n            updateValue();\n            if (self._input.value !== prevValue) {\n                self._debouncedChange();\n            }\n        }\n        function ampm2military(hour, amPM) {\n            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);\n        }\n        function military2ampm(hour) {\n            switch (hour % 24) {\n                case 0:\n                case 12:\n                    return 12;\n                default:\n                    return hour % 12;\n            }\n        }\n        /**\n         * Syncs the selected date object time with user's time input\n         */\n        function setHoursFromInputs() {\n            if (self.hourElement === undefined || self.minuteElement === undefined)\n                return;\n            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined\n                ? (parseInt(self.secondElement.value, 10) || 0) % 60\n                : 0;\n            if (self.amPM !== undefined) {\n                hours = ampm2military(hours, self.amPM.textContent);\n            }\n            var limitMinHours = self.config.minTime !== undefined ||\n                (self.config.minDate &&\n                    self.minDateHasTime &&\n                    self.latestSelectedDateObj &&\n                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===\n                        0);\n            var limitMaxHours = self.config.maxTime !== undefined ||\n                (self.config.maxDate &&\n                    self.maxDateHasTime &&\n                    self.latestSelectedDateObj &&\n                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===\n                        0);\n            if (limitMaxHours) {\n                var maxTime = self.config.maxTime !== undefined\n                    ? self.config.maxTime\n                    : self.config.maxDate;\n                hours = Math.min(hours, maxTime.getHours());\n                if (hours === maxTime.getHours())\n                    minutes = Math.min(minutes, maxTime.getMinutes());\n                if (minutes === maxTime.getMinutes())\n                    seconds = Math.min(seconds, maxTime.getSeconds());\n            }\n            if (limitMinHours) {\n                var minTime = self.config.minTime !== undefined\n                    ? self.config.minTime\n                    : self.config.minDate;\n                hours = Math.max(hours, minTime.getHours());\n                if (hours === minTime.getHours())\n                    minutes = Math.max(minutes, minTime.getMinutes());\n                if (minutes === minTime.getMinutes())\n                    seconds = Math.max(seconds, minTime.getSeconds());\n            }\n            setHours(hours, minutes, seconds);\n        }\n        /**\n         * Syncs time input values with a date\n         */\n        function setHoursFromDate(dateObj) {\n            var date = dateObj || self.latestSelectedDateObj;\n            if (date)\n                setHours(date.getHours(), date.getMinutes(), date.getSeconds());\n        }\n        function setDefaultHours() {\n            var hours = self.config.defaultHour;\n            var minutes = self.config.defaultMinute;\n            var seconds = self.config.defaultSeconds;\n            if (self.config.minDate !== undefined) {\n                var minHr = self.config.minDate.getHours();\n                var minMinutes = self.config.minDate.getMinutes();\n                hours = Math.max(hours, minHr);\n                if (hours === minHr)\n                    minutes = Math.max(minMinutes, minutes);\n                if (hours === minHr && minutes === minMinutes)\n                    seconds = self.config.minDate.getSeconds();\n            }\n            if (self.config.maxDate !== undefined) {\n                var maxHr = self.config.maxDate.getHours();\n                var maxMinutes = self.config.maxDate.getMinutes();\n                hours = Math.min(hours, maxHr);\n                if (hours === maxHr)\n                    minutes = Math.min(maxMinutes, minutes);\n                if (hours === maxHr && minutes === maxMinutes)\n                    seconds = self.config.maxDate.getSeconds();\n            }\n            setHours(hours, minutes, seconds);\n        }\n        /**\n         * Sets the hours, minutes, and optionally seconds\n         * of the latest selected date object and the\n         * corresponding time inputs\n         * @param {Number} hours the hour. whether its military\n         *                 or am-pm gets inferred from config\n         * @param {Number} minutes the minutes\n         * @param {Number} seconds the seconds (optional)\n         */\n        function setHours(hours, minutes, seconds) {\n            if (self.latestSelectedDateObj !== undefined) {\n                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);\n            }\n            if (!self.hourElement || !self.minuteElement || self.isMobile)\n                return;\n            self.hourElement.value = pad(!self.config.time_24hr\n                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)\n                : hours);\n            self.minuteElement.value = pad(minutes);\n            if (self.amPM !== undefined)\n                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];\n            if (self.secondElement !== undefined)\n                self.secondElement.value = pad(seconds);\n        }\n        /**\n         * Handles the year input and incrementing events\n         * @param {Event} event the keyup or increment event\n         */\n        function onYearInput(event) {\n            var year = parseInt(event.target.value) + (event.delta || 0);\n            if (year / 1000 > 1 ||\n                (event.key === \"Enter\" && !/[^\\d]/.test(year.toString()))) {\n                changeYear(year);\n            }\n        }\n        /**\n         * Essentially addEventListener + tracking\n         * @param {Element} element the element to addEventListener to\n         * @param {String} event the event name\n         * @param {Function} handler the event handler\n         */\n        function bind(element, event, handler, options) {\n            if (event instanceof Array)\n                return event.forEach(function (ev) { return bind(element, ev, handler, options); });\n            if (element instanceof Array)\n                return element.forEach(function (el) { return bind(el, event, handler, options); });\n            element.addEventListener(event, handler, options);\n            self._handlers.push({\n                element: element,\n                event: event,\n                handler: handler,\n                options: options\n            });\n        }\n        /**\n         * A mousedown handler which mimics click.\n         * Minimizes latency, since we don't need to wait for mouseup in most cases.\n         * Also, avoids handling right clicks.\n         *\n         * @param {Function} handler the event handler\n         */\n        function onClick(handler) {\n            return function (evt) {\n                evt.which === 1 && handler(evt);\n            };\n        }\n        function triggerChange() {\n            triggerEvent(\"onChange\");\n        }\n        /**\n         * Adds all the necessary event listeners\n         */\n        function bindEvents() {\n            if (self.config.wrap) {\n                [\"open\", \"close\", \"toggle\", \"clear\"].forEach(function (evt) {\n                    Array.prototype.forEach.call(self.element.querySelectorAll(\"[data-\" + evt + \"]\"), function (el) {\n                        return bind(el, \"click\", self[evt]);\n                    });\n                });\n            }\n            if (self.isMobile) {\n                setupMobile();\n                return;\n            }\n            var debouncedResize = debounce(onResize, 50);\n            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);\n            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))\n                bind(self.daysContainer, \"mouseover\", function (e) {\n                    if (self.config.mode === \"range\")\n                        onMouseOver(e.target);\n                });\n            bind(window.document.body, \"keydown\", onKeyDown);\n            if (!self.config.inline && !self.config.static)\n                bind(window, \"resize\", debouncedResize);\n            if (window.ontouchstart !== undefined)\n                bind(window.document, \"touchstart\", documentClick);\n            else\n                bind(window.document, \"mousedown\", onClick(documentClick));\n            bind(window.document, \"focus\", documentClick, { capture: true });\n            if (self.config.clickOpens === true) {\n                bind(self._input, \"focus\", self.open);\n                bind(self._input, \"mousedown\", onClick(self.open));\n            }\n            if (self.daysContainer !== undefined) {\n                bind(self.monthNav, \"mousedown\", onClick(onMonthNavClick));\n                bind(self.monthNav, [\"keyup\", \"increment\"], onYearInput);\n                bind(self.daysContainer, \"mousedown\", onClick(selectDate));\n            }\n            if (self.timeContainer !== undefined &&\n                self.minuteElement !== undefined &&\n                self.hourElement !== undefined) {\n                var selText = function (e) {\n                    return e.target.select();\n                };\n                bind(self.timeContainer, [\"increment\"], updateTime);\n                bind(self.timeContainer, \"blur\", updateTime, { capture: true });\n                bind(self.timeContainer, \"mousedown\", onClick(timeIncrement));\n                bind([self.hourElement, self.minuteElement], [\"focus\", \"click\"], selText);\n                if (self.secondElement !== undefined)\n                    bind(self.secondElement, \"focus\", function () { return self.secondElement && self.secondElement.select(); });\n                if (self.amPM !== undefined) {\n                    bind(self.amPM, \"mousedown\", onClick(function (e) {\n                        updateTime(e);\n                        triggerChange();\n                    }));\n                }\n            }\n        }\n        /**\n         * Set the calendar view to a particular date.\n         * @param {Date} jumpDate the date to set the view to\n         * @param {boolean} triggerChange if change events should be triggered\n         */\n        function jumpToDate(jumpDate, triggerChange) {\n            var jumpTo = jumpDate !== undefined\n                ? self.parseDate(jumpDate)\n                : self.latestSelectedDateObj ||\n                    (self.config.minDate && self.config.minDate > self.now\n                        ? self.config.minDate\n                        : self.config.maxDate && self.config.maxDate < self.now\n                            ? self.config.maxDate\n                            : self.now);\n            var oldYear = self.currentYear;\n            var oldMonth = self.currentMonth;\n            try {\n                if (jumpTo !== undefined) {\n                    self.currentYear = jumpTo.getFullYear();\n                    self.currentMonth = jumpTo.getMonth();\n                }\n            }\n            catch (e) {\n                /* istanbul ignore next */\n                e.message = \"Invalid date supplied: \" + jumpTo;\n                self.config.errorHandler(e);\n            }\n            if (triggerChange && self.currentYear !== oldYear) {\n                triggerEvent(\"onYearChange\");\n                buildMonthSwitch();\n            }\n            if (triggerChange &&\n                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {\n                triggerEvent(\"onMonthChange\");\n            }\n            self.redraw();\n        }\n        /**\n         * The up/down arrow handler for time inputs\n         * @param {Event} e the click event\n         */\n        function timeIncrement(e) {\n            if (~e.target.className.indexOf(\"arrow\"))\n                incrementNumInput(e, e.target.classList.contains(\"arrowUp\") ? 1 : -1);\n        }\n        /**\n         * Increments/decrements the value of input associ-\n         * ated with the up/down arrow by dispatching an\n         * \"increment\" event on the input.\n         *\n         * @param {Event} e the click event\n         * @param {Number} delta the diff (usually 1 or -1)\n         * @param {Element} inputElem the input element\n         */\n        function incrementNumInput(e, delta, inputElem) {\n            var target = e && e.target;\n            var input = inputElem ||\n                (target && target.parentNode && target.parentNode.firstChild);\n            var event = createEvent(\"increment\");\n            event.delta = delta;\n            input && input.dispatchEvent(event);\n        }\n        function build() {\n            var fragment = window.document.createDocumentFragment();\n            self.calendarContainer = createElement(\"div\", \"flatpickr-calendar\");\n            self.calendarContainer.tabIndex = -1;\n            if (!self.config.noCalendar) {\n                fragment.appendChild(buildMonthNav());\n                self.innerContainer = createElement(\"div\", \"flatpickr-innerContainer\");\n                if (self.config.weekNumbers) {\n                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;\n                    self.innerContainer.appendChild(weekWrapper);\n                    self.weekNumbers = weekNumbers;\n                    self.weekWrapper = weekWrapper;\n                }\n                self.rContainer = createElement(\"div\", \"flatpickr-rContainer\");\n                self.rContainer.appendChild(buildWeekdays());\n                if (!self.daysContainer) {\n                    self.daysContainer = createElement(\"div\", \"flatpickr-days\");\n                    self.daysContainer.tabIndex = -1;\n                }\n                buildDays();\n                self.rContainer.appendChild(self.daysContainer);\n                self.innerContainer.appendChild(self.rContainer);\n                fragment.appendChild(self.innerContainer);\n            }\n            if (self.config.enableTime) {\n                fragment.appendChild(buildTime());\n            }\n            toggleClass(self.calendarContainer, \"rangeMode\", self.config.mode === \"range\");\n            toggleClass(self.calendarContainer, \"animate\", self.config.animate === true);\n            toggleClass(self.calendarContainer, \"multiMonth\", self.config.showMonths > 1);\n            self.calendarContainer.appendChild(fragment);\n            var customAppend = self.config.appendTo !== undefined &&\n                self.config.appendTo.nodeType !== undefined;\n            if (self.config.inline || self.config.static) {\n                self.calendarContainer.classList.add(self.config.inline ? \"inline\" : \"static\");\n                if (self.config.inline) {\n                    if (!customAppend && self.element.parentNode)\n                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);\n                    else if (self.config.appendTo !== undefined)\n                        self.config.appendTo.appendChild(self.calendarContainer);\n                }\n                if (self.config.static) {\n                    var wrapper = createElement(\"div\", \"flatpickr-wrapper\");\n                    if (self.element.parentNode)\n                        self.element.parentNode.insertBefore(wrapper, self.element);\n                    wrapper.appendChild(self.element);\n                    if (self.altInput)\n                        wrapper.appendChild(self.altInput);\n                    wrapper.appendChild(self.calendarContainer);\n                }\n            }\n            if (!self.config.static && !self.config.inline)\n                (self.config.appendTo !== undefined\n                    ? self.config.appendTo\n                    : window.document.body).appendChild(self.calendarContainer);\n        }\n        function createDay(className, date, dayNumber, i) {\n            var dateIsEnabled = isEnabled(date, true), dayElement = createElement(\"span\", \"flatpickr-day \" + className, date.getDate().toString());\n            dayElement.dateObj = date;\n            dayElement.$i = i;\n            dayElement.setAttribute(\"aria-label\", self.formatDate(date, self.config.ariaDateFormat));\n            if (className.indexOf(\"hidden\") === -1 &&\n                compareDates(date, self.now) === 0) {\n                self.todayDateElem = dayElement;\n                dayElement.classList.add(\"today\");\n                dayElement.setAttribute(\"aria-current\", \"date\");\n            }\n            if (dateIsEnabled) {\n                dayElement.tabIndex = -1;\n                if (isDateSelected(date)) {\n                    dayElement.classList.add(\"selected\");\n                    self.selectedDateElem = dayElement;\n                    if (self.config.mode === \"range\") {\n                        toggleClass(dayElement, \"startRange\", self.selectedDates[0] &&\n                            compareDates(date, self.selectedDates[0], true) === 0);\n                        toggleClass(dayElement, \"endRange\", self.selectedDates[1] &&\n                            compareDates(date, self.selectedDates[1], true) === 0);\n                        if (className === \"nextMonthDay\")\n                            dayElement.classList.add(\"inRange\");\n                    }\n                }\n            }\n            else {\n                dayElement.classList.add(\"flatpickr-disabled\");\n            }\n            if (self.config.mode === \"range\") {\n                if (isDateInRange(date) && !isDateSelected(date))\n                    dayElement.classList.add(\"inRange\");\n            }\n            if (self.weekNumbers &&\n                self.config.showMonths === 1 &&\n                className !== \"prevMonthDay\" &&\n                dayNumber % 7 === 1) {\n                self.weekNumbers.insertAdjacentHTML(\"beforeend\", \"<span class='flatpickr-day'>\" + self.config.getWeek(date) + \"</span>\");\n            }\n            triggerEvent(\"onDayCreate\", dayElement);\n            return dayElement;\n        }\n        function focusOnDayElem(targetNode) {\n            targetNode.focus();\n            if (self.config.mode === \"range\")\n                onMouseOver(targetNode);\n        }\n        function getFirstAvailableDay(delta) {\n            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;\n            var endMonth = delta > 0 ? self.config.showMonths : -1;\n            for (var m = startMonth; m != endMonth; m += delta) {\n                var month = self.daysContainer.children[m];\n                var startIndex = delta > 0 ? 0 : month.children.length - 1;\n                var endIndex = delta > 0 ? month.children.length : -1;\n                for (var i = startIndex; i != endIndex; i += delta) {\n                    var c = month.children[i];\n                    if (c.className.indexOf(\"hidden\") === -1 && isEnabled(c.dateObj))\n                        return c;\n                }\n            }\n            return undefined;\n        }\n        function getNextAvailableDay(current, delta) {\n            var givenMonth = current.className.indexOf(\"Month\") === -1\n                ? current.dateObj.getMonth()\n                : self.currentMonth;\n            var endMonth = delta > 0 ? self.config.showMonths : -1;\n            var loopDelta = delta > 0 ? 1 : -1;\n            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {\n                var month = self.daysContainer.children[m];\n                var startIndex = givenMonth - self.currentMonth === m\n                    ? current.$i + delta\n                    : delta < 0\n                        ? month.children.length - 1\n                        : 0;\n                var numMonthDays = month.children.length;\n                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {\n                    var c = month.children[i];\n                    if (c.className.indexOf(\"hidden\") === -1 &&\n                        isEnabled(c.dateObj) &&\n                        Math.abs(current.$i - i) >= Math.abs(delta))\n                        return focusOnDayElem(c);\n                }\n            }\n            self.changeMonth(loopDelta);\n            focusOnDay(getFirstAvailableDay(loopDelta), 0);\n            return undefined;\n        }\n        function focusOnDay(current, offset) {\n            var dayFocused = isInView(document.activeElement || document.body);\n            var startElem = current !== undefined\n                ? current\n                : dayFocused\n                    ? document.activeElement\n                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)\n                        ? self.selectedDateElem\n                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)\n                            ? self.todayDateElem\n                            : getFirstAvailableDay(offset > 0 ? 1 : -1);\n            if (startElem === undefined)\n                return self._input.focus();\n            if (!dayFocused)\n                return focusOnDayElem(startElem);\n            getNextAvailableDay(startElem, offset);\n        }\n        function buildMonthDays(year, month) {\n            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;\n            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);\n            var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? \"prevMonthDay hidden\" : \"prevMonthDay\", nextMonthDayClass = isMultiMonth ? \"nextMonthDay hidden\" : \"nextMonthDay\";\n            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;\n            // prepend days from the ending of previous month\n            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {\n                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));\n            }\n            // Start at 1 since there is no 0th day\n            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {\n                days.appendChild(createDay(\"\", new Date(year, month, dayNumber), dayNumber, dayIndex));\n            }\n            // append days from the next month\n            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&\n                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {\n                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));\n            }\n            //updateNavigationCurrentMonth();\n            var dayContainer = createElement(\"div\", \"dayContainer\");\n            dayContainer.appendChild(days);\n            return dayContainer;\n        }\n        function buildDays() {\n            if (self.daysContainer === undefined) {\n                return;\n            }\n            clearNode(self.daysContainer);\n            // TODO: week numbers for each month\n            if (self.weekNumbers)\n                clearNode(self.weekNumbers);\n            var frag = document.createDocumentFragment();\n            for (var i = 0; i < self.config.showMonths; i++) {\n                var d = new Date(self.currentYear, self.currentMonth, 1);\n                d.setMonth(self.currentMonth + i);\n                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));\n            }\n            self.daysContainer.appendChild(frag);\n            self.days = self.daysContainer.firstChild;\n            if (self.config.mode === \"range\" && self.selectedDates.length === 1) {\n                onMouseOver();\n            }\n        }\n        function buildMonthSwitch() {\n            if (self.config.showMonths > 1 ||\n                self.config.monthSelectorType !== \"dropdown\")\n                return;\n            var shouldBuildMonth = function (month) {\n                if (self.config.minDate !== undefined &&\n                    self.currentYear === self.config.minDate.getFullYear() &&\n                    month < self.config.minDate.getMonth()) {\n                    return false;\n                }\n                return !(self.config.maxDate !== undefined &&\n                    self.currentYear === self.config.maxDate.getFullYear() &&\n                    month > self.config.maxDate.getMonth());\n            };\n            self.monthsDropdownContainer.tabIndex = -1;\n            self.monthsDropdownContainer.innerHTML = \"\";\n            for (var i = 0; i < 12; i++) {\n                if (!shouldBuildMonth(i))\n                    continue;\n                var month = createElement(\"option\", \"flatpickr-monthDropdown-month\");\n                month.value = new Date(self.currentYear, i).getMonth().toString();\n                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);\n                month.tabIndex = -1;\n                if (self.currentMonth === i) {\n                    month.selected = true;\n                }\n                self.monthsDropdownContainer.appendChild(month);\n            }\n        }\n        function buildMonth() {\n            var container = createElement(\"div\", \"flatpickr-month\");\n            var monthNavFragment = window.document.createDocumentFragment();\n            var monthElement;\n            if (self.config.showMonths > 1 ||\n                self.config.monthSelectorType === \"static\") {\n                monthElement = createElement(\"span\", \"cur-month\");\n            }\n            else {\n                self.monthsDropdownContainer = createElement(\"select\", \"flatpickr-monthDropdown-months\");\n                bind(self.monthsDropdownContainer, \"change\", function (e) {\n                    var target = e.target;\n                    var selectedMonth = parseInt(target.value, 10);\n                    self.changeMonth(selectedMonth - self.currentMonth);\n                    triggerEvent(\"onMonthChange\");\n                });\n                buildMonthSwitch();\n                monthElement = self.monthsDropdownContainer;\n            }\n            var yearInput = createNumberInput(\"cur-year\", { tabindex: \"-1\" });\n            var yearElement = yearInput.getElementsByTagName(\"input\")[0];\n            yearElement.setAttribute(\"aria-label\", self.l10n.yearAriaLabel);\n            if (self.config.minDate) {\n                yearElement.setAttribute(\"min\", self.config.minDate.getFullYear().toString());\n            }\n            if (self.config.maxDate) {\n                yearElement.setAttribute(\"max\", self.config.maxDate.getFullYear().toString());\n                yearElement.disabled =\n                    !!self.config.minDate &&\n                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();\n            }\n            var currentMonth = createElement(\"div\", \"flatpickr-current-month\");\n            currentMonth.appendChild(monthElement);\n            currentMonth.appendChild(yearInput);\n            monthNavFragment.appendChild(currentMonth);\n            container.appendChild(monthNavFragment);\n            return {\n                container: container,\n                yearElement: yearElement,\n                monthElement: monthElement\n            };\n        }\n        function buildMonths() {\n            clearNode(self.monthNav);\n            self.monthNav.appendChild(self.prevMonthNav);\n            if (self.config.showMonths) {\n                self.yearElements = [];\n                self.monthElements = [];\n            }\n            for (var m = self.config.showMonths; m--;) {\n                var month = buildMonth();\n                self.yearElements.push(month.yearElement);\n                self.monthElements.push(month.monthElement);\n                self.monthNav.appendChild(month.container);\n            }\n            self.monthNav.appendChild(self.nextMonthNav);\n        }\n        function buildMonthNav() {\n            self.monthNav = createElement(\"div\", \"flatpickr-months\");\n            self.yearElements = [];\n            self.monthElements = [];\n            self.prevMonthNav = createElement(\"span\", \"flatpickr-prev-month\");\n            self.prevMonthNav.innerHTML = self.config.prevArrow;\n            self.nextMonthNav = createElement(\"span\", \"flatpickr-next-month\");\n            self.nextMonthNav.innerHTML = self.config.nextArrow;\n            buildMonths();\n            Object.defineProperty(self, \"_hidePrevMonthArrow\", {\n                get: function () { return self.__hidePrevMonthArrow; },\n                set: function (bool) {\n                    if (self.__hidePrevMonthArrow !== bool) {\n                        toggleClass(self.prevMonthNav, \"flatpickr-disabled\", bool);\n                        self.__hidePrevMonthArrow = bool;\n                    }\n                }\n            });\n            Object.defineProperty(self, \"_hideNextMonthArrow\", {\n                get: function () { return self.__hideNextMonthArrow; },\n                set: function (bool) {\n                    if (self.__hideNextMonthArrow !== bool) {\n                        toggleClass(self.nextMonthNav, \"flatpickr-disabled\", bool);\n                        self.__hideNextMonthArrow = bool;\n                    }\n                }\n            });\n            self.currentYearElement = self.yearElements[0];\n            updateNavigationCurrentMonth();\n            return self.monthNav;\n        }\n        function buildTime() {\n            self.calendarContainer.classList.add(\"hasTime\");\n            if (self.config.noCalendar)\n                self.calendarContainer.classList.add(\"noCalendar\");\n            self.timeContainer = createElement(\"div\", \"flatpickr-time\");\n            self.timeContainer.tabIndex = -1;\n            var separator = createElement(\"span\", \"flatpickr-time-separator\", \":\");\n            var hourInput = createNumberInput(\"flatpickr-hour\", {\n                \"aria-label\": self.l10n.hourAriaLabel\n            });\n            self.hourElement = hourInput.getElementsByTagName(\"input\")[0];\n            var minuteInput = createNumberInput(\"flatpickr-minute\", {\n                \"aria-label\": self.l10n.minuteAriaLabel\n            });\n            self.minuteElement = minuteInput.getElementsByTagName(\"input\")[0];\n            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;\n            self.hourElement.value = pad(self.latestSelectedDateObj\n                ? self.latestSelectedDateObj.getHours()\n                : self.config.time_24hr\n                    ? self.config.defaultHour\n                    : military2ampm(self.config.defaultHour));\n            self.minuteElement.value = pad(self.latestSelectedDateObj\n                ? self.latestSelectedDateObj.getMinutes()\n                : self.config.defaultMinute);\n            self.hourElement.setAttribute(\"step\", self.config.hourIncrement.toString());\n            self.minuteElement.setAttribute(\"step\", self.config.minuteIncrement.toString());\n            self.hourElement.setAttribute(\"min\", self.config.time_24hr ? \"0\" : \"1\");\n            self.hourElement.setAttribute(\"max\", self.config.time_24hr ? \"23\" : \"12\");\n            self.minuteElement.setAttribute(\"min\", \"0\");\n            self.minuteElement.setAttribute(\"max\", \"59\");\n            self.timeContainer.appendChild(hourInput);\n            self.timeContainer.appendChild(separator);\n            self.timeContainer.appendChild(minuteInput);\n            if (self.config.time_24hr)\n                self.timeContainer.classList.add(\"time24hr\");\n            if (self.config.enableSeconds) {\n                self.timeContainer.classList.add(\"hasSeconds\");\n                var secondInput = createNumberInput(\"flatpickr-second\");\n                self.secondElement = secondInput.getElementsByTagName(\"input\")[0];\n                self.secondElement.value = pad(self.latestSelectedDateObj\n                    ? self.latestSelectedDateObj.getSeconds()\n                    : self.config.defaultSeconds);\n                self.secondElement.setAttribute(\"step\", self.minuteElement.getAttribute(\"step\"));\n                self.secondElement.setAttribute(\"min\", \"0\");\n                self.secondElement.setAttribute(\"max\", \"59\");\n                self.timeContainer.appendChild(createElement(\"span\", \"flatpickr-time-separator\", \":\"));\n                self.timeContainer.appendChild(secondInput);\n            }\n            if (!self.config.time_24hr) {\n                // add self.amPM if appropriate\n                self.amPM = createElement(\"span\", \"flatpickr-am-pm\", self.l10n.amPM[int((self.latestSelectedDateObj\n                    ? self.hourElement.value\n                    : self.config.defaultHour) > 11)]);\n                self.amPM.title = self.l10n.toggleTitle;\n                self.amPM.tabIndex = -1;\n                self.timeContainer.appendChild(self.amPM);\n            }\n            return self.timeContainer;\n        }\n        function buildWeekdays() {\n            if (!self.weekdayContainer)\n                self.weekdayContainer = createElement(\"div\", \"flatpickr-weekdays\");\n            else\n                clearNode(self.weekdayContainer);\n            for (var i = self.config.showMonths; i--;) {\n                var container = createElement(\"div\", \"flatpickr-weekdaycontainer\");\n                self.weekdayContainer.appendChild(container);\n            }\n            updateWeekdays();\n            return self.weekdayContainer;\n        }\n        function updateWeekdays() {\n            if (!self.weekdayContainer) {\n                return;\n            }\n            var firstDayOfWeek = self.l10n.firstDayOfWeek;\n            var weekdays = self.l10n.weekdays.shorthand.slice();\n            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {\n                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));\n            }\n            for (var i = self.config.showMonths; i--;) {\n                self.weekdayContainer.children[i].innerHTML = \"\\n      <span class='flatpickr-weekday'>\\n        \" + weekdays.join(\"</span><span class='flatpickr-weekday'>\") + \"\\n      </span>\\n      \";\n            }\n        }\n        /* istanbul ignore next */\n        function buildWeeks() {\n            self.calendarContainer.classList.add(\"hasWeeks\");\n            var weekWrapper = createElement(\"div\", \"flatpickr-weekwrapper\");\n            weekWrapper.appendChild(createElement(\"span\", \"flatpickr-weekday\", self.l10n.weekAbbreviation));\n            var weekNumbers = createElement(\"div\", \"flatpickr-weeks\");\n            weekWrapper.appendChild(weekNumbers);\n            return {\n                weekWrapper: weekWrapper,\n                weekNumbers: weekNumbers\n            };\n        }\n        function changeMonth(value, isOffset) {\n            if (isOffset === void 0) { isOffset = true; }\n            var delta = isOffset ? value : value - self.currentMonth;\n            if ((delta < 0 && self._hidePrevMonthArrow === true) ||\n                (delta > 0 && self._hideNextMonthArrow === true))\n                return;\n            self.currentMonth += delta;\n            if (self.currentMonth < 0 || self.currentMonth > 11) {\n                self.currentYear += self.currentMonth > 11 ? 1 : -1;\n                self.currentMonth = (self.currentMonth + 12) % 12;\n                triggerEvent(\"onYearChange\");\n                buildMonthSwitch();\n            }\n            buildDays();\n            triggerEvent(\"onMonthChange\");\n            updateNavigationCurrentMonth();\n        }\n        function clear(triggerChangeEvent, toInitial) {\n            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }\n            if (toInitial === void 0) { toInitial = true; }\n            self.input.value = \"\";\n            if (self.altInput !== undefined)\n                self.altInput.value = \"\";\n            if (self.mobileInput !== undefined)\n                self.mobileInput.value = \"\";\n            self.selectedDates = [];\n            self.latestSelectedDateObj = undefined;\n            if (toInitial === true) {\n                self.currentYear = self._initialDate.getFullYear();\n                self.currentMonth = self._initialDate.getMonth();\n            }\n            self.showTimeInput = false;\n            if (self.config.enableTime === true) {\n                setDefaultHours();\n            }\n            self.redraw();\n            if (triggerChangeEvent)\n                // triggerChangeEvent is true (default) or an Event\n                triggerEvent(\"onChange\");\n        }\n        function close() {\n            self.isOpen = false;\n            if (!self.isMobile) {\n                if (self.calendarContainer !== undefined) {\n                    self.calendarContainer.classList.remove(\"open\");\n                }\n                if (self._input !== undefined) {\n                    self._input.classList.remove(\"active\");\n                }\n            }\n            triggerEvent(\"onClose\");\n        }\n        function destroy() {\n            if (self.config !== undefined)\n                triggerEvent(\"onDestroy\");\n            for (var i = self._handlers.length; i--;) {\n                var h = self._handlers[i];\n                h.element.removeEventListener(h.event, h.handler, h.options);\n            }\n            self._handlers = [];\n            if (self.mobileInput) {\n                if (self.mobileInput.parentNode)\n                    self.mobileInput.parentNode.removeChild(self.mobileInput);\n                self.mobileInput = undefined;\n            }\n            else if (self.calendarContainer && self.calendarContainer.parentNode) {\n                if (self.config.static && self.calendarContainer.parentNode) {\n                    var wrapper = self.calendarContainer.parentNode;\n                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);\n                    if (wrapper.parentNode) {\n                        while (wrapper.firstChild)\n                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);\n                        wrapper.parentNode.removeChild(wrapper);\n                    }\n                }\n                else\n                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);\n            }\n            if (self.altInput) {\n                self.input.type = \"text\";\n                if (self.altInput.parentNode)\n                    self.altInput.parentNode.removeChild(self.altInput);\n                delete self.altInput;\n            }\n            if (self.input) {\n                self.input.type = self.input._type;\n                self.input.classList.remove(\"flatpickr-input\");\n                self.input.removeAttribute(\"readonly\");\n                self.input.value = \"\";\n            }\n            [\n                \"_showTimeInput\",\n                \"latestSelectedDateObj\",\n                \"_hideNextMonthArrow\",\n                \"_hidePrevMonthArrow\",\n                \"__hideNextMonthArrow\",\n                \"__hidePrevMonthArrow\",\n                \"isMobile\",\n                \"isOpen\",\n                \"selectedDateElem\",\n                \"minDateHasTime\",\n                \"maxDateHasTime\",\n                \"days\",\n                \"daysContainer\",\n                \"_input\",\n                \"_positionElement\",\n                \"innerContainer\",\n                \"rContainer\",\n                \"monthNav\",\n                \"todayDateElem\",\n                \"calendarContainer\",\n                \"weekdayContainer\",\n                \"prevMonthNav\",\n                \"nextMonthNav\",\n                \"monthsDropdownContainer\",\n                \"currentMonthElement\",\n                \"currentYearElement\",\n                \"navigationCurrentMonth\",\n                \"selectedDateElem\",\n                \"config\",\n            ].forEach(function (k) {\n                try {\n                    delete self[k];\n                }\n                catch (_) { }\n            });\n        }\n        function isCalendarElem(elem) {\n            if (self.config.appendTo && self.config.appendTo.contains(elem))\n                return true;\n            return self.calendarContainer.contains(elem);\n        }\n        function documentClick(e) {\n            if (self.isOpen && !self.config.inline) {\n                var eventTarget_1 = getEventTarget(e);\n                var isCalendarElement = isCalendarElem(eventTarget_1);\n                var isInput = eventTarget_1 === self.input ||\n                    eventTarget_1 === self.altInput ||\n                    self.element.contains(eventTarget_1) ||\n                    // web components\n                    // e.path is not present in all browsers. circumventing typechecks\n                    (e.path &&\n                        e.path.indexOf &&\n                        (~e.path.indexOf(self.input) ||\n                            ~e.path.indexOf(self.altInput)));\n                var lostFocus = e.type === \"blur\"\n                    ? isInput &&\n                        e.relatedTarget &&\n                        !isCalendarElem(e.relatedTarget)\n                    : !isInput &&\n                        !isCalendarElement &&\n                        !isCalendarElem(e.relatedTarget);\n                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {\n                    return elem.contains(eventTarget_1);\n                });\n                if (lostFocus && isIgnored) {\n                    if (self.timeContainer !== undefined &&\n                        self.minuteElement !== undefined &&\n                        self.hourElement !== undefined) {\n                        updateTime();\n                    }\n                    self.close();\n                    if (self.config.mode === \"range\" && self.selectedDates.length === 1) {\n                        self.clear(false);\n                        self.redraw();\n                    }\n                }\n            }\n        }\n        function changeYear(newYear) {\n            if (!newYear ||\n                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||\n                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))\n                return;\n            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;\n            self.currentYear = newYearNum || self.currentYear;\n            if (self.config.maxDate &&\n                self.currentYear === self.config.maxDate.getFullYear()) {\n                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);\n            }\n            else if (self.config.minDate &&\n                self.currentYear === self.config.minDate.getFullYear()) {\n                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);\n            }\n            if (isNewYear) {\n                self.redraw();\n                triggerEvent(\"onYearChange\");\n                buildMonthSwitch();\n            }\n        }\n        function isEnabled(date, timeless) {\n            if (timeless === void 0) { timeless = true; }\n            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless\n            if ((self.config.minDate &&\n                dateToCheck &&\n                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||\n                (self.config.maxDate &&\n                    dateToCheck &&\n                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))\n                return false;\n            if (self.config.enable.length === 0 && self.config.disable.length === 0)\n                return true;\n            if (dateToCheck === undefined)\n                return false;\n            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;\n            for (var i = 0, d = void 0; i < array.length; i++) {\n                d = array[i];\n                if (typeof d === \"function\" &&\n                    d(dateToCheck) // disabled by function\n                )\n                    return bool;\n                else if (d instanceof Date &&\n                    dateToCheck !== undefined &&\n                    d.getTime() === dateToCheck.getTime())\n                    // disabled by date\n                    return bool;\n                else if (typeof d === \"string\" && dateToCheck !== undefined) {\n                    // disabled by date string\n                    var parsed = self.parseDate(d, undefined, true);\n                    return parsed && parsed.getTime() === dateToCheck.getTime()\n                        ? bool\n                        : !bool;\n                }\n                else if (\n                // disabled by range\n                typeof d === \"object\" &&\n                    dateToCheck !== undefined &&\n                    d.from &&\n                    d.to &&\n                    dateToCheck.getTime() >= d.from.getTime() &&\n                    dateToCheck.getTime() <= d.to.getTime())\n                    return bool;\n            }\n            return !bool;\n        }\n        function isInView(elem) {\n            if (self.daysContainer !== undefined)\n                return (elem.className.indexOf(\"hidden\") === -1 &&\n                    self.daysContainer.contains(elem));\n            return false;\n        }\n        function onKeyDown(e) {\n            // e.key                      e.keyCode\n            // \"Backspace\"                        8\n            // \"Tab\"                              9\n            // \"Enter\"                           13\n            // \"Escape\"     (IE \"Esc\")           27\n            // \"ArrowLeft\"  (IE \"Left\")          37\n            // \"ArrowUp\"    (IE \"Up\")            38\n            // \"ArrowRight\" (IE \"Right\")         39\n            // \"ArrowDown\"  (IE \"Down\")          40\n            // \"Delete\"     (IE \"Del\")           46\n            var isInput = e.target === self._input;\n            var allowInput = self.config.allowInput;\n            var allowKeydown = self.isOpen && (!allowInput || !isInput);\n            var allowInlineKeydown = self.config.inline && isInput && !allowInput;\n            if (e.keyCode === 13 && isInput) {\n                if (allowInput) {\n                    self.setDate(self._input.value, true, e.target === self.altInput\n                        ? self.config.altFormat\n                        : self.config.dateFormat);\n                    return e.target.blur();\n                }\n                else {\n                    self.open();\n                }\n            }\n            else if (isCalendarElem(e.target) ||\n                allowKeydown ||\n                allowInlineKeydown) {\n                var isTimeObj = !!self.timeContainer &&\n                    self.timeContainer.contains(e.target);\n                switch (e.keyCode) {\n                    case 13:\n                        if (isTimeObj) {\n                            e.preventDefault();\n                            updateTime();\n                            focusAndClose();\n                        }\n                        else\n                            selectDate(e);\n                        break;\n                    case 27: // escape\n                        e.preventDefault();\n                        focusAndClose();\n                        break;\n                    case 8:\n                    case 46:\n                        if (isInput && !self.config.allowInput) {\n                            e.preventDefault();\n                            self.clear();\n                        }\n                        break;\n                    case 37:\n                    case 39:\n                        if (!isTimeObj && !isInput) {\n                            e.preventDefault();\n                            if (self.daysContainer !== undefined &&\n                                (allowInput === false ||\n                                    (document.activeElement && isInView(document.activeElement)))) {\n                                var delta_1 = e.keyCode === 39 ? 1 : -1;\n                                if (!e.ctrlKey)\n                                    focusOnDay(undefined, delta_1);\n                                else {\n                                    e.stopPropagation();\n                                    changeMonth(delta_1);\n                                    focusOnDay(getFirstAvailableDay(1), 0);\n                                }\n                            }\n                        }\n                        else if (self.hourElement)\n                            self.hourElement.focus();\n                        break;\n                    case 38:\n                    case 40:\n                        e.preventDefault();\n                        var delta = e.keyCode === 40 ? 1 : -1;\n                        if ((self.daysContainer && e.target.$i !== undefined) ||\n                            e.target === self.input ||\n                            e.target === self.altInput) {\n                            if (e.ctrlKey) {\n                                e.stopPropagation();\n                                changeYear(self.currentYear - delta);\n                                focusOnDay(getFirstAvailableDay(1), 0);\n                            }\n                            else if (!isTimeObj)\n                                focusOnDay(undefined, delta * 7);\n                        }\n                        else if (e.target === self.currentYearElement) {\n                            changeYear(self.currentYear - delta);\n                        }\n                        else if (self.config.enableTime) {\n                            if (!isTimeObj && self.hourElement)\n                                self.hourElement.focus();\n                            updateTime(e);\n                            self._debouncedChange();\n                        }\n                        break;\n                    case 9:\n                        if (isTimeObj) {\n                            var elems = [\n                                self.hourElement,\n                                self.minuteElement,\n                                self.secondElement,\n                                self.amPM,\n                            ]\n                                .concat(self.pluginElements)\n                                .filter(function (x) { return x; });\n                            var i = elems.indexOf(e.target);\n                            if (i !== -1) {\n                                var target = elems[i + (e.shiftKey ? -1 : 1)];\n                                e.preventDefault();\n                                (target || self._input).focus();\n                            }\n                        }\n                        else if (!self.config.noCalendar &&\n                            self.daysContainer &&\n                            self.daysContainer.contains(e.target) &&\n                            e.shiftKey) {\n                            e.preventDefault();\n                            self._input.focus();\n                        }\n                        break;\n                    default:\n                        break;\n                }\n            }\n            if (self.amPM !== undefined && e.target === self.amPM) {\n                switch (e.key) {\n                    case self.l10n.amPM[0].charAt(0):\n                    case self.l10n.amPM[0].charAt(0).toLowerCase():\n                        self.amPM.textContent = self.l10n.amPM[0];\n                        setHoursFromInputs();\n                        updateValue();\n                        break;\n                    case self.l10n.amPM[1].charAt(0):\n                    case self.l10n.amPM[1].charAt(0).toLowerCase():\n                        self.amPM.textContent = self.l10n.amPM[1];\n                        setHoursFromInputs();\n                        updateValue();\n                        break;\n                }\n            }\n            if (isInput || isCalendarElem(e.target)) {\n                triggerEvent(\"onKeyDown\", e);\n            }\n        }\n        function onMouseOver(elem) {\n            if (self.selectedDates.length !== 1 ||\n                (elem &&\n                    (!elem.classList.contains(\"flatpickr-day\") ||\n                        elem.classList.contains(\"flatpickr-disabled\"))))\n                return;\n            var hoverDate = elem\n                ? elem.dateObj.getTime()\n                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());\n            var containsDisabled = false;\n            var minRange = 0, maxRange = 0;\n            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {\n                if (!isEnabled(new Date(t), true)) {\n                    containsDisabled =\n                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);\n                    if (t < initialDate && (!minRange || t > minRange))\n                        minRange = t;\n                    else if (t > initialDate && (!maxRange || t < maxRange))\n                        maxRange = t;\n                }\n            }\n            for (var m = 0; m < self.config.showMonths; m++) {\n                var month = self.daysContainer.children[m];\n                var _loop_1 = function (i, l) {\n                    var dayElem = month.children[i], date = dayElem.dateObj;\n                    var timestamp = date.getTime();\n                    var outOfRange = (minRange > 0 && timestamp < minRange) ||\n                        (maxRange > 0 && timestamp > maxRange);\n                    if (outOfRange) {\n                        dayElem.classList.add(\"notAllowed\");\n                        [\"inRange\", \"startRange\", \"endRange\"].forEach(function (c) {\n                            dayElem.classList.remove(c);\n                        });\n                        return \"continue\";\n                    }\n                    else if (containsDisabled && !outOfRange)\n                        return \"continue\";\n                    [\"startRange\", \"inRange\", \"endRange\", \"notAllowed\"].forEach(function (c) {\n                        dayElem.classList.remove(c);\n                    });\n                    if (elem !== undefined) {\n                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()\n                            ? \"startRange\"\n                            : \"endRange\");\n                        if (initialDate < hoverDate && timestamp === initialDate)\n                            dayElem.classList.add(\"startRange\");\n                        else if (initialDate > hoverDate && timestamp === initialDate)\n                            dayElem.classList.add(\"endRange\");\n                        if (timestamp >= minRange &&\n                            (maxRange === 0 || timestamp <= maxRange) &&\n                            isBetween(timestamp, initialDate, hoverDate))\n                            dayElem.classList.add(\"inRange\");\n                    }\n                };\n                for (var i = 0, l = month.children.length; i < l; i++) {\n                    _loop_1(i, l);\n                }\n            }\n        }\n        function onResize() {\n            if (self.isOpen && !self.config.static && !self.config.inline)\n                positionCalendar();\n        }\n        function setDefaultTime() {\n            self.setDate(self.config.minDate !== undefined\n                ? new Date(self.config.minDate.getTime())\n                : new Date(), true);\n            setDefaultHours();\n            updateValue();\n        }\n        function open(e, positionElement) {\n            if (positionElement === void 0) { positionElement = self._positionElement; }\n            if (self.isMobile === true) {\n                if (e) {\n                    e.preventDefault();\n                    e.target && e.target.blur();\n                }\n                if (self.mobileInput !== undefined) {\n                    self.mobileInput.focus();\n                    self.mobileInput.click();\n                }\n                triggerEvent(\"onOpen\");\n                return;\n            }\n            if (self._input.disabled || self.config.inline)\n                return;\n            var wasOpen = self.isOpen;\n            self.isOpen = true;\n            if (!wasOpen) {\n                self.calendarContainer.classList.add(\"open\");\n                self._input.classList.add(\"active\");\n                triggerEvent(\"onOpen\");\n                positionCalendar(positionElement);\n            }\n            if (self.config.enableTime === true && self.config.noCalendar === true) {\n                if (self.selectedDates.length === 0) {\n                    setDefaultTime();\n                }\n                if (self.config.allowInput === false &&\n                    (e === undefined ||\n                        !self.timeContainer.contains(e.relatedTarget))) {\n                    setTimeout(function () { return self.hourElement.select(); }, 50);\n                }\n            }\n        }\n        function minMaxDateSetter(type) {\n            return function (date) {\n                var dateObj = (self.config[\"_\" + type + \"Date\"] = self.parseDate(date, self.config.dateFormat));\n                var inverseDateObj = self.config[\"_\" + (type === \"min\" ? \"max\" : \"min\") + \"Date\"];\n                if (dateObj !== undefined) {\n                    self[type === \"min\" ? \"minDateHasTime\" : \"maxDateHasTime\"] =\n                        dateObj.getHours() > 0 ||\n                            dateObj.getMinutes() > 0 ||\n                            dateObj.getSeconds() > 0;\n                }\n                if (self.selectedDates) {\n                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });\n                    if (!self.selectedDates.length && type === \"min\")\n                        setHoursFromDate(dateObj);\n                    updateValue();\n                }\n                if (self.daysContainer) {\n                    redraw();\n                    if (dateObj !== undefined)\n                        self.currentYearElement[type] = dateObj.getFullYear().toString();\n                    else\n                        self.currentYearElement.removeAttribute(type);\n                    self.currentYearElement.disabled =\n                        !!inverseDateObj &&\n                            dateObj !== undefined &&\n                            inverseDateObj.getFullYear() === dateObj.getFullYear();\n                }\n            };\n        }\n        function parseConfig() {\n            var boolOpts = [\n                \"wrap\",\n                \"weekNumbers\",\n                \"allowInput\",\n                \"clickOpens\",\n                \"time_24hr\",\n                \"enableTime\",\n                \"noCalendar\",\n                \"altInput\",\n                \"shorthandCurrentMonth\",\n                \"inline\",\n                \"static\",\n                \"enableSeconds\",\n                \"disableMobile\",\n            ];\n            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));\n            var formats = {};\n            self.config.parseDate = userConfig.parseDate;\n            self.config.formatDate = userConfig.formatDate;\n            Object.defineProperty(self.config, \"enable\", {\n                get: function () { return self.config._enable; },\n                set: function (dates) {\n                    self.config._enable = parseDateRules(dates);\n                }\n            });\n            Object.defineProperty(self.config, \"disable\", {\n                get: function () { return self.config._disable; },\n                set: function (dates) {\n                    self.config._disable = parseDateRules(dates);\n                }\n            });\n            var timeMode = userConfig.mode === \"time\";\n            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {\n                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;\n                formats.dateFormat =\n                    userConfig.noCalendar || timeMode\n                        ? \"H:i\" + (userConfig.enableSeconds ? \":S\" : \"\")\n                        : defaultDateFormat + \" H:i\" + (userConfig.enableSeconds ? \":S\" : \"\");\n            }\n            if (userConfig.altInput &&\n                (userConfig.enableTime || timeMode) &&\n                !userConfig.altFormat) {\n                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;\n                formats.altFormat =\n                    userConfig.noCalendar || timeMode\n                        ? \"h:i\" + (userConfig.enableSeconds ? \":S K\" : \" K\")\n                        : defaultAltFormat + (\" h:i\" + (userConfig.enableSeconds ? \":S\" : \"\") + \" K\");\n            }\n            if (!userConfig.altInputClass) {\n                self.config.altInputClass =\n                    self.input.className + \" \" + self.config.altInputClass;\n            }\n            Object.defineProperty(self.config, \"minDate\", {\n                get: function () { return self.config._minDate; },\n                set: minMaxDateSetter(\"min\")\n            });\n            Object.defineProperty(self.config, \"maxDate\", {\n                get: function () { return self.config._maxDate; },\n                set: minMaxDateSetter(\"max\")\n            });\n            var minMaxTimeSetter = function (type) { return function (val) {\n                self.config[type === \"min\" ? \"_minTime\" : \"_maxTime\"] = self.parseDate(val, \"H:i:S\");\n            }; };\n            Object.defineProperty(self.config, \"minTime\", {\n                get: function () { return self.config._minTime; },\n                set: minMaxTimeSetter(\"min\")\n            });\n            Object.defineProperty(self.config, \"maxTime\", {\n                get: function () { return self.config._maxTime; },\n                set: minMaxTimeSetter(\"max\")\n            });\n            if (userConfig.mode === \"time\") {\n                self.config.noCalendar = true;\n                self.config.enableTime = true;\n            }\n            Object.assign(self.config, formats, userConfig);\n            for (var i = 0; i < boolOpts.length; i++)\n                self.config[boolOpts[i]] =\n                    self.config[boolOpts[i]] === true ||\n                        self.config[boolOpts[i]] === \"true\";\n            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {\n                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);\n            });\n            self.isMobile =\n                !self.config.disableMobile &&\n                    !self.config.inline &&\n                    self.config.mode === \"single\" &&\n                    !self.config.disable.length &&\n                    !self.config.enable.length &&\n                    !self.config.weekNumbers &&\n                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);\n            for (var i = 0; i < self.config.plugins.length; i++) {\n                var pluginConf = self.config.plugins[i](self) || {};\n                for (var key in pluginConf) {\n                    if (HOOKS.indexOf(key) > -1) {\n                        self.config[key] = arrayify(pluginConf[key])\n                            .map(bindToInstance)\n                            .concat(self.config[key]);\n                    }\n                    else if (typeof userConfig[key] === \"undefined\")\n                        self.config[key] = pluginConf[key];\n                }\n            }\n            triggerEvent(\"onParseConfig\");\n        }\n        function setupLocale() {\n            if (typeof self.config.locale !== \"object\" &&\n                typeof flatpickr.l10ns[self.config.locale] === \"undefined\")\n                self.config.errorHandler(new Error(\"flatpickr: invalid locale \" + self.config.locale));\n            self.l10n = __assign({}, flatpickr.l10ns[\"default\"], (typeof self.config.locale === \"object\"\n                ? self.config.locale\n                : self.config.locale !== \"default\"\n                    ? flatpickr.l10ns[self.config.locale]\n                    : undefined));\n            tokenRegex.K = \"(\" + self.l10n.amPM[0] + \"|\" + self.l10n.amPM[1] + \"|\" + self.l10n.amPM[0].toLowerCase() + \"|\" + self.l10n.amPM[1].toLowerCase() + \")\";\n            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));\n            if (userConfig.time_24hr === undefined &&\n                flatpickr.defaultConfig.time_24hr === undefined) {\n                self.config.time_24hr = self.l10n.time_24hr;\n            }\n            self.formatDate = createDateFormatter(self);\n            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });\n        }\n        function positionCalendar(customPositionElement) {\n            if (self.calendarContainer === undefined)\n                return;\n            triggerEvent(\"onPreCalendarPosition\");\n            var positionElement = customPositionElement || self._positionElement;\n            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(\" \"), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === \"above\" ||\n                (configPosVertical !== \"below\" &&\n                    distanceFromBottom < calendarHeight &&\n                    inputBounds.top > calendarHeight);\n            var top = window.pageYOffset +\n                inputBounds.top +\n                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);\n            toggleClass(self.calendarContainer, \"arrowTop\", !showOnTop);\n            toggleClass(self.calendarContainer, \"arrowBottom\", showOnTop);\n            if (self.config.inline)\n                return;\n            var left = window.pageXOffset +\n                inputBounds.left -\n                (configPosHorizontal != null && configPosHorizontal === \"center\"\n                    ? (calendarWidth - inputBounds.width) / 2\n                    : 0);\n            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);\n            var rightMost = left + calendarWidth > window.document.body.offsetWidth;\n            var centerMost = right + calendarWidth > window.document.body.offsetWidth;\n            toggleClass(self.calendarContainer, \"rightMost\", rightMost);\n            if (self.config.static)\n                return;\n            self.calendarContainer.style.top = top + \"px\";\n            if (!rightMost) {\n                self.calendarContainer.style.left = left + \"px\";\n                self.calendarContainer.style.right = \"auto\";\n            }\n            else if (!centerMost) {\n                self.calendarContainer.style.left = \"auto\";\n                self.calendarContainer.style.right = right + \"px\";\n            }\n            else {\n                var doc = document.styleSheets[0];\n                // some testing environments don't have css support\n                if (doc === undefined)\n                    return;\n                var bodyWidth = window.document.body.offsetWidth;\n                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);\n                var centerBefore = \".flatpickr-calendar.centerMost:before\";\n                var centerAfter = \".flatpickr-calendar.centerMost:after\";\n                var centerIndex = doc.cssRules.length;\n                var centerStyle = \"{left:\" + inputBounds.left + \"px;right:auto;}\";\n                toggleClass(self.calendarContainer, \"rightMost\", false);\n                toggleClass(self.calendarContainer, \"centerMost\", true);\n                doc.insertRule(centerBefore + \",\" + centerAfter + centerStyle, centerIndex);\n                self.calendarContainer.style.left = centerLeft + \"px\";\n                self.calendarContainer.style.right = \"auto\";\n            }\n        }\n        function redraw() {\n            if (self.config.noCalendar || self.isMobile)\n                return;\n            updateNavigationCurrentMonth();\n            buildDays();\n        }\n        function focusAndClose() {\n            self._input.focus();\n            if (window.navigator.userAgent.indexOf(\"MSIE\") !== -1 ||\n                navigator.msMaxTouchPoints !== undefined) {\n                // hack - bugs in the way IE handles focus keeps the calendar open\n                setTimeout(self.close, 0);\n            }\n            else {\n                self.close();\n            }\n        }\n        function selectDate(e) {\n            e.preventDefault();\n            e.stopPropagation();\n            var isSelectable = function (day) {\n                return day.classList &&\n                    day.classList.contains(\"flatpickr-day\") &&\n                    !day.classList.contains(\"flatpickr-disabled\") &&\n                    !day.classList.contains(\"notAllowed\");\n            };\n            var t = findParent(e.target, isSelectable);\n            if (t === undefined)\n                return;\n            var target = t;\n            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));\n            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||\n                selectedDate.getMonth() >\n                    self.currentMonth + self.config.showMonths - 1) &&\n                self.config.mode !== \"range\";\n            self.selectedDateElem = target;\n            if (self.config.mode === \"single\")\n                self.selectedDates = [selectedDate];\n            else if (self.config.mode === \"multiple\") {\n                var selectedIndex = isDateSelected(selectedDate);\n                if (selectedIndex)\n                    self.selectedDates.splice(parseInt(selectedIndex), 1);\n                else\n                    self.selectedDates.push(selectedDate);\n            }\n            else if (self.config.mode === \"range\") {\n                if (self.selectedDates.length === 2) {\n                    self.clear(false, false);\n                }\n                self.latestSelectedDateObj = selectedDate;\n                self.selectedDates.push(selectedDate);\n                // unless selecting same date twice, sort ascendingly\n                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)\n                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });\n            }\n            setHoursFromInputs();\n            if (shouldChangeMonth) {\n                var isNewYear = self.currentYear !== selectedDate.getFullYear();\n                self.currentYear = selectedDate.getFullYear();\n                self.currentMonth = selectedDate.getMonth();\n                if (isNewYear) {\n                    triggerEvent(\"onYearChange\");\n                    buildMonthSwitch();\n                }\n                triggerEvent(\"onMonthChange\");\n            }\n            updateNavigationCurrentMonth();\n            buildDays();\n            updateValue();\n            if (self.config.enableTime)\n                setTimeout(function () { return (self.showTimeInput = true); }, 50);\n            // maintain focus\n            if (!shouldChangeMonth &&\n                self.config.mode !== \"range\" &&\n                self.config.showMonths === 1)\n                focusOnDayElem(target);\n            else if (self.selectedDateElem !== undefined &&\n                self.hourElement === undefined) {\n                self.selectedDateElem && self.selectedDateElem.focus();\n            }\n            if (self.hourElement !== undefined)\n                self.hourElement !== undefined && self.hourElement.focus();\n            if (self.config.closeOnSelect) {\n                var single = self.config.mode === \"single\" && !self.config.enableTime;\n                var range = self.config.mode === \"range\" &&\n                    self.selectedDates.length === 2 &&\n                    !self.config.enableTime;\n                if (single || range) {\n                    focusAndClose();\n                }\n            }\n            triggerChange();\n        }\n        var CALLBACKS = {\n            locale: [setupLocale, updateWeekdays],\n            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],\n            minDate: [jumpToDate],\n            maxDate: [jumpToDate]\n        };\n        function set(option, value) {\n            if (option !== null && typeof option === \"object\") {\n                Object.assign(self.config, option);\n                for (var key in option) {\n                    if (CALLBACKS[key] !== undefined)\n                        CALLBACKS[key].forEach(function (x) { return x(); });\n                }\n            }\n            else {\n                self.config[option] = value;\n                if (CALLBACKS[option] !== undefined)\n                    CALLBACKS[option].forEach(function (x) { return x(); });\n                else if (HOOKS.indexOf(option) > -1)\n                    self.config[option] = arrayify(value);\n            }\n            self.redraw();\n            updateValue(false);\n        }\n        function setSelectedDate(inputDate, format) {\n            var dates = [];\n            if (inputDate instanceof Array)\n                dates = inputDate.map(function (d) { return self.parseDate(d, format); });\n            else if (inputDate instanceof Date || typeof inputDate === \"number\")\n                dates = [self.parseDate(inputDate, format)];\n            else if (typeof inputDate === \"string\") {\n                switch (self.config.mode) {\n                    case \"single\":\n                    case \"time\":\n                        dates = [self.parseDate(inputDate, format)];\n                        break;\n                    case \"multiple\":\n                        dates = inputDate\n                            .split(self.config.conjunction)\n                            .map(function (date) { return self.parseDate(date, format); });\n                        break;\n                    case \"range\":\n                        dates = inputDate\n                            .split(self.l10n.rangeSeparator)\n                            .map(function (date) { return self.parseDate(date, format); });\n                        break;\n                    default:\n                        break;\n                }\n            }\n            else\n                self.config.errorHandler(new Error(\"Invalid date supplied: \" + JSON.stringify(inputDate)));\n            self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });\n            if (self.config.mode === \"range\")\n                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });\n        }\n        function setDate(date, triggerChange, format) {\n            if (triggerChange === void 0) { triggerChange = false; }\n            if (format === void 0) { format = self.config.dateFormat; }\n            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))\n                return self.clear(triggerChange);\n            setSelectedDate(date, format);\n            self.showTimeInput = self.selectedDates.length > 0;\n            self.latestSelectedDateObj =\n                self.selectedDates[self.selectedDates.length - 1];\n            self.redraw();\n            jumpToDate();\n            setHoursFromDate();\n            if (self.selectedDates.length === 0) {\n                self.clear(false);\n            }\n            updateValue(triggerChange);\n            if (triggerChange)\n                triggerEvent(\"onChange\");\n        }\n        function parseDateRules(arr) {\n            return arr\n                .slice()\n                .map(function (rule) {\n                if (typeof rule === \"string\" ||\n                    typeof rule === \"number\" ||\n                    rule instanceof Date) {\n                    return self.parseDate(rule, undefined, true);\n                }\n                else if (rule &&\n                    typeof rule === \"object\" &&\n                    rule.from &&\n                    rule.to)\n                    return {\n                        from: self.parseDate(rule.from, undefined),\n                        to: self.parseDate(rule.to, undefined)\n                    };\n                return rule;\n            })\n                .filter(function (x) { return x; }); // remove falsy values\n        }\n        function setupDates() {\n            self.selectedDates = [];\n            self.now = self.parseDate(self.config.now) || new Date();\n            // Workaround IE11 setting placeholder as the input's value\n            var preloadedDate = self.config.defaultDate ||\n                ((self.input.nodeName === \"INPUT\" ||\n                    self.input.nodeName === \"TEXTAREA\") &&\n                    self.input.placeholder &&\n                    self.input.value === self.input.placeholder\n                    ? null\n                    : self.input.value);\n            if (preloadedDate)\n                setSelectedDate(preloadedDate, self.config.dateFormat);\n            self._initialDate =\n                self.selectedDates.length > 0\n                    ? self.selectedDates[0]\n                    : self.config.minDate &&\n                        self.config.minDate.getTime() > self.now.getTime()\n                        ? self.config.minDate\n                        : self.config.maxDate &&\n                            self.config.maxDate.getTime() < self.now.getTime()\n                            ? self.config.maxDate\n                            : self.now;\n            self.currentYear = self._initialDate.getFullYear();\n            self.currentMonth = self._initialDate.getMonth();\n            if (self.selectedDates.length > 0)\n                self.latestSelectedDateObj = self.selectedDates[0];\n            if (self.config.minTime !== undefined)\n                self.config.minTime = self.parseDate(self.config.minTime, \"H:i\");\n            if (self.config.maxTime !== undefined)\n                self.config.maxTime = self.parseDate(self.config.maxTime, \"H:i\");\n            self.minDateHasTime =\n                !!self.config.minDate &&\n                    (self.config.minDate.getHours() > 0 ||\n                        self.config.minDate.getMinutes() > 0 ||\n                        self.config.minDate.getSeconds() > 0);\n            self.maxDateHasTime =\n                !!self.config.maxDate &&\n                    (self.config.maxDate.getHours() > 0 ||\n                        self.config.maxDate.getMinutes() > 0 ||\n                        self.config.maxDate.getSeconds() > 0);\n            Object.defineProperty(self, \"showTimeInput\", {\n                get: function () { return self._showTimeInput; },\n                set: function (bool) {\n                    self._showTimeInput = bool;\n                    if (self.calendarContainer)\n                        toggleClass(self.calendarContainer, \"showTimeInput\", bool);\n                    self.isOpen && positionCalendar();\n                }\n            });\n        }\n        function setupInputs() {\n            self.input = self.config.wrap\n                ? element.querySelector(\"[data-input]\")\n                : element;\n            /* istanbul ignore next */\n            if (!self.input) {\n                self.config.errorHandler(new Error(\"Invalid input element specified\"));\n                return;\n            }\n            // hack: store previous type to restore it after destroy()\n            self.input._type = self.input.type;\n            self.input.type = \"text\";\n            self.input.classList.add(\"flatpickr-input\");\n            self._input = self.input;\n            if (self.config.altInput) {\n                // replicate self.element\n                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);\n                self._input = self.altInput;\n                self.altInput.placeholder = self.input.placeholder;\n                self.altInput.disabled = self.input.disabled;\n                self.altInput.required = self.input.required;\n                self.altInput.tabIndex = self.input.tabIndex;\n                self.altInput.type = \"text\";\n                self.input.setAttribute(\"type\", \"hidden\");\n                if (!self.config.static && self.input.parentNode)\n                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);\n            }\n            if (!self.config.allowInput)\n                self._input.setAttribute(\"readonly\", \"readonly\");\n            self._positionElement = self.config.positionElement || self._input;\n        }\n        function setupMobile() {\n            var inputType = self.config.enableTime\n                ? self.config.noCalendar\n                    ? \"time\"\n                    : \"datetime-local\"\n                : \"date\";\n            self.mobileInput = createElement(\"input\", self.input.className + \" flatpickr-mobile\");\n            self.mobileInput.step = self.input.getAttribute(\"step\") || \"any\";\n            self.mobileInput.tabIndex = 1;\n            self.mobileInput.type = inputType;\n            self.mobileInput.disabled = self.input.disabled;\n            self.mobileInput.required = self.input.required;\n            self.mobileInput.placeholder = self.input.placeholder;\n            self.mobileFormatStr =\n                inputType === \"datetime-local\"\n                    ? \"Y-m-d\\\\TH:i:S\"\n                    : inputType === \"date\"\n                        ? \"Y-m-d\"\n                        : \"H:i:S\";\n            if (self.selectedDates.length > 0) {\n                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);\n            }\n            if (self.config.minDate)\n                self.mobileInput.min = self.formatDate(self.config.minDate, \"Y-m-d\");\n            if (self.config.maxDate)\n                self.mobileInput.max = self.formatDate(self.config.maxDate, \"Y-m-d\");\n            self.input.type = \"hidden\";\n            if (self.altInput !== undefined)\n                self.altInput.type = \"hidden\";\n            try {\n                if (self.input.parentNode)\n                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);\n            }\n            catch (_a) { }\n            bind(self.mobileInput, \"change\", function (e) {\n                self.setDate(e.target.value, false, self.mobileFormatStr);\n                triggerEvent(\"onChange\");\n                triggerEvent(\"onClose\");\n            });\n        }\n        function toggle(e) {\n            if (self.isOpen === true)\n                return self.close();\n            self.open(e);\n        }\n        function triggerEvent(event, data) {\n            // If the instance has been destroyed already, all hooks have been removed\n            if (self.config === undefined)\n                return;\n            var hooks = self.config[event];\n            if (hooks !== undefined && hooks.length > 0) {\n                for (var i = 0; hooks[i] && i < hooks.length; i++)\n                    hooks[i](self.selectedDates, self.input.value, self, data);\n            }\n            if (event === \"onChange\") {\n                self.input.dispatchEvent(createEvent(\"change\"));\n                // many front-end frameworks bind to the input event\n                self.input.dispatchEvent(createEvent(\"input\"));\n            }\n        }\n        function createEvent(name) {\n            var e = document.createEvent(\"Event\");\n            e.initEvent(name, true, true);\n            return e;\n        }\n        function isDateSelected(date) {\n            for (var i = 0; i < self.selectedDates.length; i++) {\n                if (compareDates(self.selectedDates[i], date) === 0)\n                    return \"\" + i;\n            }\n            return false;\n        }\n        function isDateInRange(date) {\n            if (self.config.mode !== \"range\" || self.selectedDates.length < 2)\n                return false;\n            return (compareDates(date, self.selectedDates[0]) >= 0 &&\n                compareDates(date, self.selectedDates[1]) <= 0);\n        }\n        function updateNavigationCurrentMonth() {\n            if (self.config.noCalendar || self.isMobile || !self.monthNav)\n                return;\n            self.yearElements.forEach(function (yearElement, i) {\n                var d = new Date(self.currentYear, self.currentMonth, 1);\n                d.setMonth(self.currentMonth + i);\n                if (self.config.showMonths > 1 ||\n                    self.config.monthSelectorType === \"static\") {\n                    self.monthElements[i].textContent =\n                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + \" \";\n                }\n                else {\n                    self.monthsDropdownContainer.value = d.getMonth().toString();\n                }\n                yearElement.value = d.getFullYear().toString();\n            });\n            self._hidePrevMonthArrow =\n                self.config.minDate !== undefined &&\n                    (self.currentYear === self.config.minDate.getFullYear()\n                        ? self.currentMonth <= self.config.minDate.getMonth()\n                        : self.currentYear < self.config.minDate.getFullYear());\n            self._hideNextMonthArrow =\n                self.config.maxDate !== undefined &&\n                    (self.currentYear === self.config.maxDate.getFullYear()\n                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()\n                        : self.currentYear > self.config.maxDate.getFullYear());\n        }\n        function getDateStr(format) {\n            return self.selectedDates\n                .map(function (dObj) { return self.formatDate(dObj, format); })\n                .filter(function (d, i, arr) {\n                return self.config.mode !== \"range\" ||\n                    self.config.enableTime ||\n                    arr.indexOf(d) === i;\n            })\n                .join(self.config.mode !== \"range\"\n                ? self.config.conjunction\n                : self.l10n.rangeSeparator);\n        }\n        /**\n         * Updates the values of inputs associated with the calendar\n         */\n        function updateValue(triggerChange) {\n            if (triggerChange === void 0) { triggerChange = true; }\n            if (self.mobileInput !== undefined && self.mobileFormatStr) {\n                self.mobileInput.value =\n                    self.latestSelectedDateObj !== undefined\n                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)\n                        : \"\";\n            }\n            self.input.value = getDateStr(self.config.dateFormat);\n            if (self.altInput !== undefined) {\n                self.altInput.value = getDateStr(self.config.altFormat);\n            }\n            if (triggerChange !== false)\n                triggerEvent(\"onValueUpdate\");\n        }\n        function onMonthNavClick(e) {\n            var isPrevMonth = self.prevMonthNav.contains(e.target);\n            var isNextMonth = self.nextMonthNav.contains(e.target);\n            if (isPrevMonth || isNextMonth) {\n                changeMonth(isPrevMonth ? -1 : 1);\n            }\n            else if (self.yearElements.indexOf(e.target) >= 0) {\n                e.target.select();\n            }\n            else if (e.target.classList.contains(\"arrowUp\")) {\n                self.changeYear(self.currentYear + 1);\n            }\n            else if (e.target.classList.contains(\"arrowDown\")) {\n                self.changeYear(self.currentYear - 1);\n            }\n        }\n        function timeWrapper(e) {\n            e.preventDefault();\n            var isKeyDown = e.type === \"keydown\", input = e.target;\n            if (self.amPM !== undefined && e.target === self.amPM) {\n                self.amPM.textContent =\n                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];\n            }\n            var min = parseFloat(input.getAttribute(\"min\")), max = parseFloat(input.getAttribute(\"max\")), step = parseFloat(input.getAttribute(\"step\")), curValue = parseInt(input.value, 10), delta = e.delta ||\n                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);\n            var newValue = curValue + step * delta;\n            if (typeof input.value !== \"undefined\" && input.value.length === 2) {\n                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;\n                if (newValue < min) {\n                    newValue =\n                        max +\n                            newValue +\n                            int(!isHourElem) +\n                            (int(isHourElem) && int(!self.amPM));\n                    if (isMinuteElem)\n                        incrementNumInput(undefined, -1, self.hourElement);\n                }\n                else if (newValue > max) {\n                    newValue =\n                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;\n                    if (isMinuteElem)\n                        incrementNumInput(undefined, 1, self.hourElement);\n                }\n                if (self.amPM &&\n                    isHourElem &&\n                    (step === 1\n                        ? newValue + curValue === 23\n                        : Math.abs(newValue - curValue) > step)) {\n                    self.amPM.textContent =\n                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];\n                }\n                input.value = pad(newValue);\n            }\n        }\n        init();\n        return self;\n    }\n    /* istanbul ignore next */\n    function _flatpickr(nodeList, config) {\n        // static list\n        var nodes = Array.prototype.slice\n            .call(nodeList)\n            .filter(function (x) { return x instanceof HTMLElement; });\n        var instances = [];\n        for (var i = 0; i < nodes.length; i++) {\n            var node = nodes[i];\n            try {\n                if (node.getAttribute(\"data-fp-omit\") !== null)\n                    continue;\n                if (node._flatpickr !== undefined) {\n                    node._flatpickr.destroy();\n                    node._flatpickr = undefined;\n                }\n                node._flatpickr = FlatpickrInstance(node, config || {});\n                instances.push(node._flatpickr);\n            }\n            catch (e) {\n                console.error(e);\n            }\n        }\n        return instances.length === 1 ? instances[0] : instances;\n    }\n    /* istanbul ignore next */\n    if (typeof HTMLElement !== \"undefined\" &&\n        typeof HTMLCollection !== \"undefined\" &&\n        typeof NodeList !== \"undefined\") {\n        // browser env\n        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {\n            return _flatpickr(this, config);\n        };\n        HTMLElement.prototype.flatpickr = function (config) {\n            return _flatpickr([this], config);\n        };\n    }\n    /* istanbul ignore next */\n    var flatpickr = function (selector, config) {\n        if (typeof selector === \"string\") {\n            return _flatpickr(window.document.querySelectorAll(selector), config);\n        }\n        else if (selector instanceof Node) {\n            return _flatpickr([selector], config);\n        }\n        else {\n            return _flatpickr(selector, config);\n        }\n    };\n    /* istanbul ignore next */\n    flatpickr.defaultConfig = {};\n    flatpickr.l10ns = {\n        en: __assign({}, english),\n        \"default\": __assign({}, english)\n    };\n    flatpickr.localize = function (l10n) {\n        flatpickr.l10ns[\"default\"] = __assign({}, flatpickr.l10ns[\"default\"], l10n);\n    };\n    flatpickr.setDefaults = function (config) {\n        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);\n    };\n    flatpickr.parseDate = createDateParser({});\n    flatpickr.formatDate = createDateFormatter({});\n    flatpickr.compareDates = compareDates;\n    /* istanbul ignore next */\n    if (typeof jQuery !== \"undefined\" && typeof jQuery.fn !== \"undefined\") {\n        jQuery.fn.flatpickr = function (config) {\n            return _flatpickr(this, config);\n        };\n    }\n    // eslint-disable-next-line @typescript-eslint/camelcase\n    Date.prototype.fp_incr = function (days) {\n        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === \"string\" ? parseInt(days, 10) : days));\n    };\n    if (typeof window !== \"undefined\") {\n        window.flatpickr = flatpickr;\n    }\n\n    return flatpickr;\n\n}));\n\n\n//# sourceURL=webpack:///./node_modules/flatpickr/dist/flatpickr.js?");

/***/ }),

/***/ "./node_modules/flatpickr/dist/l10n/ru.js":
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/ru.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n   true ? factory(exports) :\n  undefined;\n}(this, function (exports) { 'use strict';\n\n  var fp = typeof window !== \"undefined\" && window.flatpickr !== undefined\n      ? window.flatpickr\n      : {\n          l10ns: {}\n      };\n  var Russian = {\n      weekdays: {\n          shorthand: [\"Вс\", \"Пн\", \"Вт\", \"Ср\", \"Чт\", \"Пт\", \"Сб\"],\n          longhand: [\n              \"Воскресенье\",\n              \"Понедельник\",\n              \"Вторник\",\n              \"Среда\",\n              \"Четверг\",\n              \"Пятница\",\n              \"Суббота\",\n          ]\n      },\n      months: {\n          shorthand: [\n              \"Янв\",\n              \"Фев\",\n              \"Март\",\n              \"Апр\",\n              \"Май\",\n              \"Июнь\",\n              \"Июль\",\n              \"Авг\",\n              \"Сен\",\n              \"Окт\",\n              \"Ноя\",\n              \"Дек\",\n          ],\n          longhand: [\n              \"Январь\",\n              \"Февраль\",\n              \"Март\",\n              \"Апрель\",\n              \"Май\",\n              \"Июнь\",\n              \"Июль\",\n              \"Август\",\n              \"Сентябрь\",\n              \"Октябрь\",\n              \"Ноябрь\",\n              \"Декабрь\",\n          ]\n      },\n      firstDayOfWeek: 1,\n      ordinal: function () {\n          return \"\";\n      },\n      rangeSeparator: \" — \",\n      weekAbbreviation: \"Нед.\",\n      scrollTitle: \"Прокрутите для увеличения\",\n      toggleTitle: \"Нажмите для переключения\",\n      amPM: [\"ДП\", \"ПП\"],\n      yearAriaLabel: \"Год\",\n      time_24hr: true\n  };\n  fp.l10ns.ru = Russian;\n  var ru = fp.l10ns;\n\n  exports.Russian = Russian;\n  exports.default = ru;\n\n  Object.defineProperty(exports, '__esModule', { value: true });\n\n}));\n\n\n//# sourceURL=webpack:///./node_modules/flatpickr/dist/l10n/ru.js?");

/***/ }),

/***/ "./source/js/libs/vendor.js":
/*!**********************************!*\
  !*** ./source/js/libs/vendor.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ \"./node_modules/flatpickr/dist/flatpickr.js\");\n/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/l10n/ru.js */ \"./node_modules/flatpickr/dist/l10n/ru.js\");\n/* harmony import */ var flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar dateInput = document.querySelector(\".new-publication__date-form input\");\n\nif (dateInput) {\n  flatpickr__WEBPACK_IMPORTED_MODULE_0___default()(dateInput, {\n    dateFormat: \"d.m.Y\",\n    \"locale\": flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_1__[\"Russian\"]\n  });\n}\n\nvar imageLoader = document.querySelector(\".form__image-loader input\");\nvar imageNameInput = document.querySelector(\"#image-name-field\");\nvar body = document.querySelector(\"body\");\n\nvar getScrollbarWidth = function getScrollbarWidth() {\n  var outer = document.createElement(\"div\");\n  outer.style.visibility = \"hidden\";\n  outer.style.overflow = \"scroll\";\n  outer.style.msOverflowStyle = \"scrollbar\";\n  body.appendChild(outer);\n  var inner = document.createElement(\"div\");\n  outer.appendChild(inner);\n  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;\n  outer.parentNode.removeChild(outer);\n  return scrollbarWidth;\n};\n\nvar disableScrolling = function disableScrolling() {\n  var scrollWidth = getScrollbarWidth();\n  body.setAttribute('style', 'padding-right: ' + scrollWidth + 'px;');\n  body.classList.add('body-fixed');\n};\n\nvar enableScrolling = function enableScrolling() {\n  body.removeAttribute(\"style\");\n  body.classList.remove(\"body-fixed\");\n};\n\ndisableScrolling();\n\nvar reverseString = function reverseString(str) {\n  return str.split(\"\").reverse().join(\"\");\n};\n\nvar clearString = function clearString(str) {\n  var newString = reverseString(str);\n\n  if (newString.indexOf(\"\\\\\") === -1) {\n    return reverseString(newString);\n  } else {\n    var number = newString.indexOf(\"\\\\\");\n    return reverseString(newString.slice(0, number));\n  }\n};\n\nif (imageLoader) {\n  imageLoader.addEventListener(\"change\", function (evt) {\n    evt.preventDefault();\n    imageNameInput.value = clearString(imageLoader.value);\n  });\n}\n\n//# sourceURL=webpack:///./source/js/libs/vendor.js?");

/***/ })

/******/ });

/*
 Selectr 2.4.13
 http://mobius.ovh/docs/selectr

 Released under the MIT license
*/
(function (g, k) {
  "function" === typeof define && define.amd ? define([], k) : "object" === typeof exports ? module.exports = k("Selectr") : g.Selectr = k("Selectr")
})(this, function (g) {
  function k(a, c) {
    return a.hasOwnProperty(c) && (!0 === a[c] || a[c].length)
  }

  function n(a, c, e) {
    a.parentNode ? a.parentNode.parentNode || c.appendChild(a.parentNode) : c.appendChild(a);
    b.removeClass(a, "excluded");
    e || (a.innerHTML = a.textContent)
  }

  var l = function () {
  };
  l.prototype = {
    on: function (a, c) {
      this._events = this._events || {};
      this._events[a] = this._events[a] ||
        [];
      this._events[a].push(c)
    }, off: function (a, c) {
      this._events = this._events || {};
      !1 !== a in this._events && this._events[a].splice(this._events[a].indexOf(c), 1)
    }, emit: function (a) {
      this._events = this._events || {};
      if (!1 !== a in this._events) for (var c = 0; c < this._events[a].length; c++) this._events[a][c].apply(this, Array.prototype.slice.call(arguments, 1))
    }
  };
  l.mixin = function (a) {
    for (var c = ["on", "off", "emit"], b = 0; b < c.length; b++) "function" === typeof a ? a.prototype[c[b]] = l.prototype[c[b]] : a[c[b]] = l.prototype[c[b]];
    return a
  };
  var b = {
    extend: function (a, c) {
      for (var e in c) if (c.hasOwnProperty(e)) {
        var d = c[e];
        d && "[object Object]" === Object.prototype.toString.call(d) ? (a[e] = a[e] || {}, b.extend(a[e], d)) : a[e] = d
      }
      return a
    }, each: function (a, c, b) {
      if ("[object Object]" === Object.prototype.toString.call(a)) for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && c.call(b, d, a[d], a); else {
        d = 0;
        for (var e = a.length; d < e; d++) c.call(b, d, a[d], a)
      }
    }, createElement: function (a, c) {
      var b = document, d = b.createElement(a);
      if (c && "[object Object]" === Object.prototype.toString.call(c)) for (var f in c) if (f in
        d) d[f] = c[f]; else if ("html" === f) d.innerHTML = c[f]; else if ("text" === f) {
        var h = b.createTextNode(c[f]);
        d.appendChild(h)
      } else d.setAttribute(f, c[f]);
      return d
    }, hasClass: function (a, b) {
      if (a) return a.classList ? a.classList.contains(b) : !!a.className && !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"))
    }, addClass: function (a, c) {
      b.hasClass(a, c) || (a.classList ? a.classList.add(c) : a.className = a.className.trim() + " " + c)
    }, removeClass: function (a, c) {
      b.hasClass(a, c) && (a.classList ? a.classList.remove(c) : a.className = a.className.replace(new RegExp("(^|\\s)" +
        c.split(" ").join("|") + "(\\s|$)", "gi"), " "))
    }, closest: function (a, c) {
      return a && a !== document.body && (c(a) ? a : b.closest(a.parentNode, c))
    }, isInt: function (a) {
      return "number" === typeof a && isFinite(a) && Math.floor(a) === a
    }, debounce: function (a, b, e) {
      var d;
      return function () {
        var c = this, h = arguments, g = e && !d;
        clearTimeout(d);
        d = setTimeout(function () {
          d = null;
          e || a.apply(c, h)
        }, b);
        g && a.apply(c, h)
      }
    }, rect: function (a, b) {
      var c = window, d = a.getBoundingClientRect(), f = b ? c.pageXOffset : 0;
      c = b ? c.pageYOffset : 0;
      return {
        bottom: d.bottom + c, height: d.height,
        left: d.left + f, right: d.right + f, top: d.top + c, width: d.width
      }
    }, includes: function (a, b) {
      return -1 < a.indexOf(b)
    }, startsWith: function (a, b) {
      return a.substr(0, b.length) === b
    }, truncate: function (a) {
      for (; a.firstChild;) a.removeChild(a.firstChild)
    }
  }, p = function () {
    if (this.items.length) {
      var a = document.createDocumentFragment();
      if (this.config.pagination) {
        var c = this.pages.slice(0, this.pageIndex);
        b.each(c, function (c, d) {
          b.each(d, function (d, b) {
            n(b, a, this.customOption)
          }, this)
        }, this)
      } else b.each(this.items, function (b, d) {
        n(d,
          a, this.customOption)
      }, this);
      a.childElementCount && (b.removeClass(this.items[this.navIndex], "active"), this.navIndex = (a.querySelector(".selectr-option.selected") || a.querySelector(".selectr-option")).idx, b.addClass(this.items[this.navIndex], "active"));
      this.tree.appendChild(a)
    }
  }, t = function (a) {
    this.container.contains(a.target) || !this.opened && !b.hasClass(this.container, "notice") || this.close()
  }, m = function (a, c) {
    var e = this.customOption ? this.config.renderOption(c || a) : a.textContent;
    e = b.createElement("li", {
      "class": "selectr-option",
      html: e, role: "treeitem", "aria-selected": !1
    });
    e.idx = a.idx;
    this.items.push(e);
    a.defaultSelected && this.defaultSelected.push(a.idx);
    a.disabled && (e.disabled = !0, b.addClass(e, "disabled"));
    return e
  }, u = function () {
    this.requiresPagination = this.config.pagination && 0 < this.config.pagination;
    k(this.config, "width") && (b.isInt(this.config.width) ? this.width = this.config.width + "px" : "auto" === this.config.width ? this.width = "100%" : b.includes(this.config.width, "%") && (this.width = this.config.width));
    this.container = b.createElement("div",
      {"class": "selectr-container"});
    this.config.customClass && b.addClass(this.container, this.config.customClass);
    this.mobileDevice ? b.addClass(this.container, "selectr-mobile") : b.addClass(this.container, "selectr-desktop");
    this.el.tabIndex = -1;
    this.config.nativeDropdown || this.mobileDevice ? b.addClass(this.el, "selectr-visible") : b.addClass(this.el, "selectr-hidden");
    this.selected = b.createElement("div", {
      "class": "selectr-selected",
      disabled: this.disabled,
      tabIndex: 0,
      "aria-expanded": !1
    });
    this.label = b.createElement(this.el.multiple ?
      "ul" : "span", {"class": "selectr-label"});
    var a = b.createElement("div", {"class": "selectr-options-container"});
    this.tree = b.createElement("ul", {
      "class": "selectr-options",
      role: "tree",
      "aria-hidden": !0,
      "aria-expanded": !1
    });
    this.notice = b.createElement("div", {"class": "selectr-notice"});
    this.el.setAttribute("aria-hidden", !0);
    this.disabled && (this.el.disabled = !0);
    this.el.multiple && (b.addClass(this.label, "selectr-tags"), b.addClass(this.container, "multiple"), this.tags = [], this.selectedValues = this.getSelectedProperties("value"),
      this.selectedIndexes = this.getSelectedProperties("idx"));
    this.selected.appendChild(this.label);
    this.config.clearable && (this.selectClear = b.createElement("button", {
      "class": "selectr-clear",
      type: "button"
    }), this.container.appendChild(this.selectClear), b.addClass(this.container, "clearable"));
    if (this.config.taggable) {
      var c = b.createElement("li", {"class": "input-tag"});
      this.input = b.createElement("input", {
        "class": "selectr-tag-input",
        placeholder: this.config.tagPlaceholder,
        tagIndex: 0,
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        spellcheck: "false",
        role: "textbox",
        type: "search"
      });
      c.appendChild(this.input);
      this.label.appendChild(c);
      b.addClass(this.container, "taggable");
      this.tagSeperators = [","];
      this.config.tagSeperators && (this.tagSeperators = this.tagSeperators.concat(this.config.tagSeperators))
    }
    this.config.searchable && (this.input = b.createElement("input", {
      "class": "selectr-input",
      tagIndex: -1,
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false",
      role: "textbox",
      type: "search"
    }), this.inputClear =
      b.createElement("button", {
        "class": "selectr-input-clear",
        type: "button"
      }), this.inputContainer = b.createElement("div", {"class": "selectr-input-container"}), this.inputContainer.appendChild(this.input), this.inputContainer.appendChild(this.inputClear), a.appendChild(this.inputContainer));
    a.appendChild(this.notice);
    a.appendChild(this.tree);
    this.items = [];
    this.options = [];
    this.el.options.length && (this.options = [].slice.call(this.el.options));
    var e = !1, d = 0;
    this.el.children.length && b.each(this.el.children, function (a,
                                                                  c) {
      "OPTGROUP" === c.nodeName ? (e = b.createElement("ul", {
        "class": "selectr-optgroup",
        role: "group",
        html: "<li class='selectr-optgroup--label'>" + c.label + "</li>"
      }), b.each(c.children, function (a, b) {
        b.idx = d;
        e.appendChild(m.call(this, b, e));
        d++
      }, this)) : (c.idx = d, m.call(this, c), d++)
    }, this);
    if (this.config.data && Array.isArray(this.config.data)) {
      this.data = [];
      var f = !1, h;
      e = !1;
      d = 0;
      b.each(this.config.data, function (a, c) {
        k(c, "children") ? (f = b.createElement("optgroup", {label: c.text}), e = b.createElement("ul", {
          "class": "selectr-optgroup",
          role: "group", html: "<li class='selectr-optgroup--label'>" + c.text + "</li>"
        }), b.each(c.children, function (a, b) {
          h = new Option(b.text, b.value, !1, b.hasOwnProperty("selected") && !0 === b.selected);
          h.disabled = k(b, "disabled");
          this.options.push(h);
          f.appendChild(h);
          h.idx = d;
          e.appendChild(m.call(this, h, b));
          this.data[d] = b;
          d++
        }, this), this.el.appendChild(f)) : (h = new Option(c.text, c.value, !1, c.hasOwnProperty("selected") && !0 === c.selected), h.disabled = k(c, "disabled"), this.options.push(h), h.idx = d, m.call(this, h, c), this.data[d] =
          c, d++)
      }, this)
    }
    this.setSelected(!0);
    for (var g = this.navIndex = 0; g < this.items.length; g++) if (c = this.items[g], !b.hasClass(c, "disabled")) {
      b.addClass(c, "active");
      this.navIndex = g;
      break
    }
    this.requiresPagination && (this.pageIndex = 1, this.paginate());
    this.container.appendChild(this.selected);
    this.container.appendChild(a);
    this.placeEl = b.createElement("div", {"class": "selectr-placeholder"});
    this.setPlaceholder();
    this.selected.appendChild(this.placeEl);
    this.disabled && this.disable();
    this.el.parentNode.insertBefore(this.container,
      this.el);
    this.container.appendChild(this.el)
  }, v = function (a) {
    a = a || window.event;
    if (this.items.length && this.opened && b.includes([13, 38, 40], a.which)) {
      a.preventDefault();
      if (13 === a.which) return this.noResults || this.config.taggable && 0 < this.input.value.length ? !1 : this.change(this.navIndex);
      var c = this.items[this.navIndex], e = this.navIndex;
      switch (a.which) {
        case 38:
          var d = 0;
          0 < this.navIndex && this.navIndex--;
          break;
        case 40:
          d = 1, this.navIndex < this.items.length - 1 && this.navIndex++
      }
      for (this.navigating = !0; b.hasClass(this.items[this.navIndex],
        "disabled") || b.hasClass(this.items[this.navIndex], "excluded");) {
        if (0 < this.navIndex && this.navIndex < this.items.length - 1) d ? this.navIndex++ : this.navIndex--; else {
          this.navIndex = e;
          break
        }
        if (this.searching) if (this.navIndex > this.tree.lastElementChild.idx) {
          this.navIndex = this.tree.lastElementChild.idx;
          break
        } else if (this.navIndex < this.tree.firstElementChild.idx) {
          this.navIndex = this.tree.firstElementChild.idx;
          break
        }
      }
      a = b.rect(this.items[this.navIndex]);
      d ? (0 === this.navIndex ? this.tree.scrollTop = 0 : a.top + a.height > this.optsRect.top +
        this.optsRect.height && (this.tree.scrollTop += a.top + a.height - (this.optsRect.top + this.optsRect.height)), this.navIndex === this.tree.childElementCount - 1 && this.requiresPagination && r.call(this)) : 0 === this.navIndex ? this.tree.scrollTop = 0 : 0 > a.top - this.optsRect.top && (this.tree.scrollTop += a.top - this.optsRect.top);
      c && b.removeClass(c, "active");
      b.addClass(this.items[this.navIndex], "active")
    } else this.navigating = !1
  }, w = function (a) {
    var c = this, e = document.createDocumentFragment(), d = this.options[a.idx], f = this.data ? this.data[a.idx] :
      d;
    f = this.customSelected ? this.config.renderSelection(f) : d.textContent;
    f = b.createElement("li", {"class": "selectr-tag", html: f});
    var h = b.createElement("button", {"class": "selectr-tag-remove", type: "button"});
    f.appendChild(h);
    f.idx = a.idx;
    f.tag = d.value;
    this.tags.push(f);
    if (this.config.sortSelected) {
      a = this.tags.slice();
      var g = function (a, b) {
        a.replace(/(\d+)|(\D+)/g, function (a, d, c) {
          b.push([d || Infinity, c || ""])
        })
      };
      a.sort(function (a, b) {
        var d = [], e = [];
        if (!0 === c.config.sortSelected) {
          var f = a.tag;
          var h = b.tag
        } else "text" ===
        c.config.sortSelected && (f = a.textContent, h = b.textContent);
        g(f, d);
        for (g(h, e); d.length && e.length;) if (f = d.shift(), h = e.shift(), f = f[0] - h[0] || f[1].localeCompare(h[1])) return f;
        return d.length - e.length
      });
      b.each(a, function (a, b) {
        e.appendChild(b)
      });
      this.label.innerHTML = ""
    } else e.appendChild(f);
    this.config.taggable ? this.label.insertBefore(e, this.input.parentNode) : this.label.appendChild(e)
  }, x = function (a) {
    var c = !1;
    b.each(this.tags, function (b, d) {
      d.idx === a.idx && (c = d)
    }, this);
    c && (this.label.removeChild(c), this.tags.splice(this.tags.indexOf(c),
      1))
  }, r = function () {
    var a = this.tree;
    if (a.scrollTop >= a.scrollHeight - a.offsetHeight && this.pageIndex < this.pages.length) {
      var c = document.createDocumentFragment();
      b.each(this.pages[this.pageIndex], function (a, b) {
        n(b, c, this.customOption)
      }, this);
      a.appendChild(c);
      this.pageIndex++;
      this.emit("selectr.paginate", {
        items: this.items.length,
        total: this.data.length,
        page: this.pageIndex,
        pages: this.pages.length
      })
    }
  }, q = function () {
    if (this.config.searchable || this.config.taggable) this.input.value = null, this.searching = !1, this.config.searchable &&
    b.removeClass(this.inputContainer, "active"), b.hasClass(this.container, "notice") && (b.removeClass(this.container, "notice"), b.addClass(this.container, "open"), this.input.focus()), b.each(this.items, function (a, c) {
      b.removeClass(c, "excluded");
      this.customOption || (c.innerHTML = c.textContent)
    }, this)
  };
  g = function (a, b) {
    this.defaultConfig = {
      defaultSelected: !0,
      width: "auto",
      disabled: !1,
      searchable: !0,
      clearable: !1,
      sortSelected: !1,
      allowDeselect: !1,
      closeOnScroll: !1,
      nativeDropdown: !1,
      nativeKeyboard: !1,
      placeholder: "Select an option...",
      taggable: !1,
      tagPlaceholder: "Enter a tag...",
      messages: {
        noResults: "No results.",
        noOptions: "No options available.",
        maxSelections: "A maximum of {max} items can be selected.",
        tagDuplicate: "That tag is already in use."
      }
    };
    if (!a) throw Error("You must supply either a HTMLSelectElement or a CSS3 selector string.");
    this.el = a;
    "string" === typeof a && (this.el = document.querySelector(a));
    if (null === this.el) throw Error("The element you passed to Selectr can not be found.");
    if ("select" !== this.el.nodeName.toLowerCase()) throw Error("The element you passed to Selectr is not a HTMLSelectElement.");
    this.render(b)
  };
  g.prototype.render = function (a) {
    if (!this.rendered) {
      this.el.selectr = this;
      this.config = b.extend(this.defaultConfig, a);
      this.originalType = this.el.type;
      this.originalIndex = this.el.tabIndex;
      this.defaultSelected = [];
      this.originalOptionCount = this.el.options.length;
      if (this.config.multiple || this.config.taggable) this.el.multiple = !0;
      this.disabled = k(this.config, "disabled");
      this.opened = !1;
      this.config.taggable && (this.config.searchable = !1);
      this.mobileDevice = this.navigating = !1;
      /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) &&
      (this.mobileDevice = !0);
      this.customOption = this.config.hasOwnProperty("renderOption") && "function" === typeof this.config.renderOption;
      this.customSelected = this.config.hasOwnProperty("renderSelection") && "function" === typeof this.config.renderSelection;
      this.supportsEventPassiveOption = this.detectEventPassiveOption();
      l.mixin(this);
      u.call(this);
      this.bindEvents();
      this.update();
      this.optsRect = b.rect(this.tree);
      this.rendered = !0;
      this.el.multiple || (this.el.selectedIndex = this.selectedIndex);
      var c = this;
      setTimeout(function () {
          c.emit("selectr.init")
        },
        20)
    }
  };
  g.prototype.getSelected = function () {
    return this.el.querySelectorAll("option:checked")
  };
  g.prototype.getSelectedProperties = function (a) {
    var b = this.getSelected();
    return [].slice.call(b).map(function (b) {
      return b[a]
    }).filter(function (a) {
      return null !== a && void 0 !== a
    })
  };
  g.prototype.detectEventPassiveOption = function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0
        }
      });
      window.addEventListener("test", null, b)
    } catch (e) {
    }
    return a
  };
  g.prototype.bindEvents = function () {
    var a = this;
    this.events =
      {};
    this.events.dismiss = t.bind(this);
    this.events.navigate = v.bind(this);
    this.events.reset = this.reset.bind(this);
    if (this.config.nativeDropdown || this.mobileDevice) {
      this.container.addEventListener("touchstart", function (b) {
        b.changedTouches[0].target === a.el && a.toggle()
      }, this.supportsEventPassiveOption ? {passive: !0} : !1);
      this.container.addEventListener("click", function (b) {
        b.target === a.el && a.toggle()
      });
      var c = function (a, b) {
        for (var d = [], c = a.slice(0), e, f = 0; f < b.length; f++) e = c.indexOf(b[f]), -1 < e ? c.splice(e, 1) : d.push(b[f]);
        return [d, c]
      };
      this.el.addEventListener("change", function (d) {
        a.el.multiple ? (d = a.getSelectedProperties("idx"), d = c(a.selectedIndexes, d), b.each(d[0], function (b, d) {
          a.select(d)
        }, a), b.each(d[1], function (b, d) {
          a.deselect(d)
        }, a)) : -1 < a.el.selectedIndex && a.select(a.el.selectedIndex)
      })
    }
    this.container.addEventListener("keydown", function (b) {
      "Escape" === b.key && a.close();
      "Enter" === b.key && a.selected === document.activeElement && "undefined" !== typeof a.el.form.submit && a.el.form.submit();
      " " !== b.key && "ArrowUp" !== b.key && "ArrowDown" !==
      b.key || a.selected !== document.activeElement || (setTimeout(function () {
        a.toggle()
      }, 200), a.config.nativeDropdown && setTimeout(function () {
        a.el.focus()
      }, 200))
    });
    this.selected.addEventListener("click", function (b) {
      a.disabled || a.toggle();
      b.preventDefault()
    });
    if (this.config.nativeKeyboard) {
      var e = "";
      this.selected.addEventListener("keydown", function (b) {
        if (!(a.disabled || a.selected !== document.activeElement || b.altKey || b.ctrlKey || b.metaKey)) if (" " === b.key || !a.opened && -1 < ["Enter", "ArrowUp", "ArrowDown"].indexOf(b.key)) a.toggle(),
          b.preventDefault(), b.stopPropagation(); else if (2 >= b.key.length && String[String.fromCodePoint ? "fromCodePoint" : "fromCharCode"](b.key[String.codePointAt ? "codePointAt" : "charCodeAt"](0)) === b.key) {
          if (a.config.multiple) a.open(), a.config.searchable && (a.input.value = b.key, a.input.focus(), a.search(null, !0)); else {
            e += b.key;
            var c = a.search(e, !0);
            c && c.length && (a.clear(), a.setValue(c[0].value));
            setTimeout(function () {
              e = ""
            }, 1E3)
          }
          b.preventDefault();
          b.stopPropagation()
        }
      });
      this.container.addEventListener("keyup", function (b) {
        a.opened &&
        "Escape" === b.key && (a.close(), b.stopPropagation(), a.selected.focus())
      })
    }
    this.label.addEventListener("click", function (c) {
      b.hasClass(c.target, "selectr-tag-remove") && a.deselect(c.target.parentNode.idx)
    });
    this.selectClear && this.selectClear.addEventListener("click", this.clear.bind(this));
    this.tree.addEventListener("mousedown", function (a) {
      a.preventDefault()
    });
    this.tree.addEventListener("click", function (c) {
      var d = b.closest(c.target, function (a) {
        return a && b.hasClass(a, "selectr-option")
      });
      d && !b.hasClass(d, "disabled") &&
      (b.hasClass(d, "selected") ? (a.el.multiple || !a.el.multiple && a.config.allowDeselect) && a.deselect(d.idx) : a.select(d.idx), a.opened && !a.el.multiple && a.close());
      c.preventDefault();
      c.stopPropagation()
    });
    this.tree.addEventListener("mouseover", function (c) {
      b.hasClass(c.target, "selectr-option") && !b.hasClass(c.target, "disabled") && (b.removeClass(a.items[a.navIndex], "active"), b.addClass(c.target, "active"), a.navIndex = [].slice.call(a.items).indexOf(c.target))
    });
    this.config.searchable && (this.input.addEventListener("focus",
      function (b) {
        a.searching = !0
      }), this.input.addEventListener("blur", function (b) {
      a.searching = !1
    }), this.input.addEventListener("keyup", function (c) {
      a.search();
      a.config.taggable || (this.value.length ? b.addClass(this.parentNode, "active") : b.removeClass(this.parentNode, "active"))
    }), this.inputClear.addEventListener("click", function (b) {
      a.input.value = null;
      q.call(a);
      a.tree.childElementCount || p.call(a)
    }));
    this.config.taggable && this.input.addEventListener("keyup", function (c) {
      a.search();
      if (a.config.taggable && this.value.length) {
        var d =
          this.value.trim();
        if (13 === c.which || b.includes(a.tagSeperators, c.key)) b.each(a.tagSeperators, function (a, b) {
          d = d.replace(b, "")
        }), a.add({
          value: d,
          text: d,
          selected: !0
        }, !0) ? (a.close(), q.call(a)) : (this.value = "", a.setMessage(a.config.messages.tagDuplicate))
      }
    });
    this.update = b.debounce(function () {
      a.opened && a.config.closeOnScroll && a.close();
      a.width && (a.container.style.width = a.width);
      a.invert()
    }, 50);
    this.requiresPagination && (this.paginateItems = b.debounce(function () {
      r.call(this)
    }, 50), this.tree.addEventListener("scroll",
      this.paginateItems.bind(this)));
    document.addEventListener("click", this.events.dismiss);
    window.addEventListener("keydown", this.events.navigate);
    window.addEventListener("resize", this.update);
    window.addEventListener("scroll", this.update);
    this.on("selectr.destroy", function () {
      document.removeEventListener("click", this.events.dismiss);
      window.removeEventListener("keydown", this.events.navigate);
      window.removeEventListener("resize", this.update);
      window.removeEventListener("scroll", this.update)
    });
    this.el.form &&
    (this.el.form.addEventListener("reset", this.events.reset), this.on("selectr.destroy", function () {
      this.el.form.removeEventListener("reset", this.events.reset)
    }))
  };
  g.prototype.setSelected = function (a) {
    this.config.data || this.el.multiple || !this.el.options.length || (0 !== this.el.selectedIndex || this.el.options[0].defaultSelected || this.config.defaultSelected || (this.el.selectedIndex = -1), this.selectedIndex = this.el.selectedIndex, -1 < this.selectedIndex && this.select(this.selectedIndex));
    this.config.multiple && "select-one" ===
    this.originalType && !this.config.data && this.el.options[0].selected && !this.el.options[0].defaultSelected && (this.el.options[0].selected = !1);
    b.each(this.options, function (a, b) {
      b.selected && b.defaultSelected && this.select(b.idx)
    }, this);
    this.config.selectedValue && this.setValue(this.config.selectedValue);
    if (this.config.data) {
      !this.el.multiple && this.config.defaultSelected && 0 > this.el.selectedIndex && this.select(0);
      var c = 0;
      b.each(this.config.data, function (a, d) {
        k(d, "children") ? b.each(d.children, function (a, b) {
          b.hasOwnProperty("selected") &&
          !0 === b.selected && this.select(c);
          c++
        }, this) : (d.hasOwnProperty("selected") && !0 === d.selected && this.select(c), c++)
      }, this)
    }
  };
  g.prototype.destroy = function () {
    this.rendered && (this.emit("selectr.destroy"), "select-one" === this.originalType && (this.el.multiple = !1), this.config.data && (this.el.innerHTML = ""), b.removeClass(this.el, "selectr-hidden"), this.container.parentNode.replaceChild(this.el, this.container), this.rendered = !1, delete this.el.selectr)
  };
  g.prototype.change = function (a) {
    var c = this.items[a], e = this.options[a];
    e.disabled || (e.selected && b.hasClass(c, "selected") ? this.deselect(a) : this.select(a), this.opened && !this.el.multiple && this.close())
  };
  g.prototype.select = function (a) {
    var c = this.items[a], e = [].slice.call(this.el.options), d = this.options[a];
    if (this.el.multiple) {
      if (b.includes(this.selectedIndexes, a)) return !1;
      if (this.config.maxSelections && this.tags.length === this.config.maxSelections) return this.setMessage(this.config.messages.maxSelections.replace("{max}", this.config.maxSelections), !0), !1;
      this.selectedValues.push(d.value);
      this.selectedIndexes.push(a);
      w.call(this, c)
    } else {
      var f = this.data ? this.data[a] : d;
      this.label.innerHTML = this.customSelected ? this.config.renderSelection(f) : d.textContent;
      this.selectedValue = d.value;
      this.selectedIndex = a;
      b.each(this.options, function (c, d) {
        var e = this.items[c];
        c !== a && (e && b.removeClass(e, "selected"), d.selected = !1, d.removeAttribute("selected"))
      }, this)
    }
    b.includes(e, d) || this.el.add(d);
    c.setAttribute("aria-selected", !0);
    b.addClass(c, "selected");
    b.addClass(this.container, "has-selected");
    d.selected =
      !0;
    d.setAttribute("selected", "");
    this.emit("selectr.change", d);
    this.emit("selectr.select", d);
    "createEvent" in document ? (c = document.createEvent("HTMLEvents"), c.initEvent("change", !0, !0), this.el.dispatchEvent(c)) : this.el.fireEvent("onchange")
  };
  g.prototype.deselect = function (a, c) {

    var e = this.items[a], d = this.options[a];
    if (this.el.multiple) {
      var f = this.selectedIndexes.indexOf(a);
      this.selectedIndexes.splice(f, 1);
      f = this.selectedValues.indexOf(d.value);
      this.selectedValues.splice(f, 1);
      x.call(this, e);
      this.tags.length ||
      b.removeClass(this.container, "has-selected")
    } else {
      if (!c && !this.config.clearable && !this.config.allowDeselect) return !1;
      this.label.innerHTML = "";
      this.selectedValue = null;
      this.el.selectedIndex = this.selectedIndex = -1;
      b.removeClass(this.container, "has-selected")
    }
    this.items[a].setAttribute("aria-selected", !1);
    b.removeClass(this.items[a], "selected");
    d.selected = !1;
    d.removeAttribute("selected");
    this.emit("selectr.change", null);
    this.emit("selectr.deselect", d);
    "createEvent" in document ? (e = document.createEvent("HTMLEvents"),
      e.initEvent("change", !0, !0), this.el.dispatchEvent(e)) : this.el.fireEvent("onchange")
  };
  g.prototype.setValue = function (a) {
    var c = Array.isArray(a);
    c || (a = a.toString().trim());
    if (!this.el.multiple && c) return !1;
    b.each(this.options, function (b, d) {
      (c && -1 < a.indexOf(d.value) || d.value === a) && this.change(d.idx)
    }, this)
  };
  g.prototype.getValue = function (a, c) {
    if (this.el.multiple) if (a) {
      if (this.selectedIndexes.length) {
        var e = {values: []};
        b.each(this.selectedIndexes, function (a, b) {
          var c = this.options[b];
          e.values[a] = {
            value: c.value,
            text: c.textContent
          }
        }, this)
      }
    } else e = this.selectedValues.slice(); else if (a) {
      var d = this.options[this.selectedIndex];
      e = {value: d.value, text: d.textContent}
    } else e = this.selectedValue;
    a && c && (e = JSON.stringify(e));
    return e
  };

  g.prototype.add = function (a, c) {
    if (a) {
      this.data = this.data || [];
      this.items = this.items || [];
      this.options = this.options || [];
      if (Array.isArray(a)) b.each(a, function (a, b) {
        this.add(b, c)
      }, this); else if ("[object Object]" === Object.prototype.toString.call(a)) {
        if (c) {
          var e = !1;
          b.each(this.options, function (b,
                                         c) {
            c.value.toLowerCase() === a.value.toLowerCase() && (e = !0)
          });
          if (e) return !1
        }
        var d = b.createElement("option", a);
        this.data.push(a);
        this.options.push(d);
        d.idx = 0 < this.options.length ? this.options.length - 1 : 0;
        m.call(this, d);
        a.selected && this.select(d.idx);
        this.setPlaceholder();
        return d
      }
      this.config.pagination && this.paginate();
      return !0
    }
  };
  g.prototype.remove = function (a) {
    var c = [];
    Array.isArray(a) ? b.each(a, function (a, e) {
        b.isInt(e) ? c.push(this.getOptionByIndex(e)) : "string" === typeof e && c.push(this.getOptionByValue(e))
      },
      this) : b.isInt(a) ? c.push(this.getOptionByIndex(a)) : "string" === typeof a && c.push(this.getOptionByValue(a));
    if (c.length) {
      var e;
      b.each(c, function (a, c) {
        e = c.idx;
        this.el.remove(c);
        this.options.splice(e, 1);
        var d = this.items[e].parentNode;
        d && d.removeChild(this.items[e]);
        this.items.splice(e, 1);
        b.each(this.options, function (a, b) {
          b.idx = a;
          this.items[a].idx = a
        }, this)
      }, this);
      this.setPlaceholder();
      this.config.pagination && this.paginate()
    }
  };
  g.prototype.removeAll = function () {
    this.clear(!0);
    b.each(this.el.options, function (a,
                                      b) {
      this.el.remove(b)
    }, this);
    b.truncate(this.tree);
    this.items = [];
    this.options = [];
    this.data = [];
    this.navIndex = 0;
    this.requiresPagination && (this.requiresPagination = !1, this.pageIndex = 1, this.pages = []);
    this.setPlaceholder()
  };
  g.prototype.search = function (a, c) {
    if (!this.navigating) {
      var e = !1;
      a || (a = this.input.value, e = !0, this.removeMessage(), b.truncate(this.tree));
      var d = [], f = document.createDocumentFragment();
      a = a.trim().toLowerCase();
      if (0 < a.length) {
        var g = c ? b.startsWith : b.includes;
        b.each(this.options, function (c, h) {
          var k =
            this.items[h.idx];
          if (g(h.textContent.trim().toLowerCase(), a) && !h.disabled) {
            if (d.push({
              text: h.textContent,
              value: h.value
            }), e && (n(k, f, this.customOption), b.removeClass(k, "excluded"), !this.customOption)) {
              var l = (l = (new RegExp(a, "i")).exec(h.textContent)) ? h.textContent.replace(l[0], "<span class='selectr-match'>" + l[0] + "</span>") : !1;
              k.innerHTML = l
            }
          } else e && b.addClass(k, "excluded")
        }, this);
        if (e) {
          if (f.childElementCount) {
            var k = this.items[this.navIndex], l = f.querySelector(".selectr-option:not(.excluded)");
            this.noResults =
              !1;
            b.removeClass(k, "active");
            this.navIndex = l.idx;
            b.addClass(l, "active")
          } else this.config.taggable || (this.noResults = !0, this.setMessage(this.config.messages.noResults));
          this.tree.appendChild(f)
        }
      } else p.call(this);
      return d
    }
  };
  g.prototype.toggle = function () {
    this.disabled || (this.opened ? this.close() : this.open())
  };
  g.prototype.open = function () {
    var a = this;
    if (!this.options.length) return !1;
    this.opened || this.emit("selectr.open");
    this.opened = !0;
    this.mobileDevice || this.config.nativeDropdown ? (b.addClass(this.container,
      "native-open"), this.config.data && b.each(this.options, function (a, b) {
      this.el.add(b)
    }, this)) : (b.addClass(this.container, "open"), p.call(this), this.invert(), this.tree.scrollTop = 0, b.removeClass(this.container, "notice"), this.selected.setAttribute("aria-expanded", !0), this.tree.setAttribute("aria-hidden", !1), this.tree.setAttribute("aria-expanded", !0), this.config.searchable && !this.config.taggable && setTimeout(function () {
      a.input.focus();
      a.input.tabIndex = 0
    }, 10))
  };
  g.prototype.close = function () {
    this.opened && this.emit("selectr.close");
    this.navigating = this.opened = !1;
    if (this.mobileDevice || this.config.nativeDropdown) b.removeClass(this.container, "native-open"); else {
      var a = b.hasClass(this.container, "notice");
      this.config.searchable && !a && (this.input.blur(), this.input.tabIndex = -1, this.searching = !1);
      a && (b.removeClass(this.container, "notice"), this.notice.textContent = "");
      b.removeClass(this.container, "open");
      b.removeClass(this.container, "native-open");
      this.selected.setAttribute("aria-expanded", !1);
      this.tree.setAttribute("aria-hidden", !0);
      this.tree.setAttribute("aria-expanded",
        !1);
      b.truncate(this.tree);
      q.call(this)
    }
  };
  g.prototype.enable = function () {
    this.disabled = !1;
    this.el.disabled = !1;
    this.selected.tabIndex = this.originalIndex;
    this.el.multiple && b.each(this.tags, function (a, b) {
      b.lastElementChild.tabIndex = 0
    });
    b.removeClass(this.container, "selectr-disabled")
  };
  g.prototype.disable = function (a) {
    a || (this.el.disabled = !0);
    this.selected.tabIndex = -1;
    this.el.multiple && b.each(this.tags, function (a, b) {
      b.lastElementChild.tabIndex = -1
    });
    this.disabled = !0;
    b.addClass(this.container,
      "selectr-disabled")
  };
  g.prototype.reset = function () {
    this.disabled || (this.clear(), this.setSelected(!0), b.each(this.defaultSelected, function (a, b) {
      this.select(b)
    }, this), this.emit("selectr.reset"))
  };
  g.prototype.clear = function (a) {
    this.el.multiple ? this.selectedIndexes.length && (a = this.selectedIndexes.slice(), b.each(a, function (a, b) {
      this.deselect(b)
    }, this)) : -1 < this.selectedIndex && this.deselect(this.selectedIndex, a);
    this.emit("selectr.clear")
  };
  g.prototype.serialise = function (a) {
    var c = [];
    b.each(this.options, function (a,
                                   b) {
      var d = {value: b.value, text: b.textContent};
      b.selected && (d.selected = !0);
      b.disabled && (d.disabled = !0);
      c[a] = d
    });
    return a ? JSON.stringify(c) : c
  };
  g.prototype.serialize = function (a) {
    return this.serialise(a)
  };
  g.prototype.setPlaceholder = function (a) {
    a = a || this.config.placeholder || this.el.getAttribute("placeholder");
    this.options.length || (a = this.config.messages.noOptions);
    this.placeEl.innerHTML = a
  };
  g.prototype.paginate = function () {
    if (this.items.length) {
      var a = this;
      return this.pages = this.items.map(function (b, e) {
        return 0 ===
        e % a.config.pagination ? a.items.slice(e, e + a.config.pagination) : null
      }).filter(function (a) {
        return a
      })
    }
  };
  g.prototype.setMessage = function (a, c) {
    c && this.close();
    b.addClass(this.container, "notice");
    this.notice.textContent = a
  };
  g.prototype.removeMessage = function () {
    b.removeClass(this.container, "notice");
    this.notice.innerHTML = ""
  };
  g.prototype.invert = function () {
    var a = b.rect(this.selected);
    a.top + a.height + this.tree.parentNode.offsetHeight > window.innerHeight ? (b.addClass(this.container, "inverted"), this.isInverted = !0) :
      (b.removeClass(this.container, "inverted"), this.isInverted = !1);
    this.optsRect = b.rect(this.tree)
  };
  g.prototype.getOptionByIndex = function (a) {
    return this.options[a]
  };
  g.prototype.getOptionByValue = function (a) {
    for (var b = !1, e = 0, d = this.options.length; e < d; e++) if (this.options[e].value.trim() === a.toString().trim()) {
      b = this.options[e];
      break
    }
    return b
  };
  return g
});
