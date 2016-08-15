//! easy-time.js
//! version : 0.0.1
//! authors : Smaranda Onutu and easy-time.js contributors
//! license : MIT
//! https://github.com/smaranda-onutu/easy-time
var EasyTime = function(date) {
    var iso8601 = require("./src/lib/iso8601.js");
    var _innerDate;

    this.offset = {};

    // Returns a ISO8601 string representation of the initial date for the offset that has been passed in
    // *********************************
    // TODO: handle half hour offsets
    this.toOffset = function(offset) {
        var nd = new Date(_innerDate.getTime() + (3600000 * offset));
        return nd.toISOString().split('Z')[0] + (offset > 0 ? "+" : "-") + (offset > 9 ? "" : "0") + offset + "00";
    };

    // Returns a ISO8601 string representation of the UTC date
    // Supports the following ISO8601 formats:
    // YYYY-MM-DDThh:mm:ssTZD (e.g. 1997-07-16T19:20:30+01:00)
    // *********************************
    // TODO: add the ability to support the following formats
    // Complete date plus hours and minutes:
    // YYYY-MM-DDThh:mmTZD (e.g. 1997-07-16T19:20+01:00)
    // Complete date plus hours, minutes and seconds:
    // YYYY-MM-DDThh:mm:ssTZD (e.g. 1997-07-16T19:20:30+01:00
    this.toUTCString = function() {
        return _innerDate.toISOString();
    };

    // Parses a ISO8601 string representation of a Complete date and time and returns a EasyTime object
    // Supports the following ISO8601 formats:
    // YYYY-MM-DDThh:mm:ssTZD (e.g. 1997-07-16T19:20:30+01:00)
    // Complete date plus hours, minutes, seconds and a decimal fraction of a second
    // ***********************************
    // TODO support the following formats:
    // Complete date plus hours and minutes:
    // YYYY-MM-DDThh:mmTZD (e.g. 1997-07-16T19:20+01:00)
    // Complete date plus hours, minutes and seconds:
    // YYYY-MM-DDThh:mm:ssTZD (e.g. 1997-07-16T19:20:30+01:00
    this.parse = function(date) {
        var parsedIso = iso8601.parse(date);
        if (parsedIso) {
            _innerDate = new Date(Date.parse(date));
            if (parsedIso[parsedIso.length - 3] === "+" || parsedIso[parsedIso.length - 3] === "-") {
                this.offset = parsedIso[parsedIso.length - 3] + parsedIso[parsedIso.length - 2] + parsedIso[parsedIso.length - 1];
            }

            return this;
        }

        return null;
    };

    // constructor
    if (date) {
        return this.parse(date);
    }

    return this;
};

module.exports = EasyTime;
