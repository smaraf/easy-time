var EasyTime = function() {
    var _offset, _innerDate;

    // assumes input is ISO 8601 full formatted date
    this.parse = function(dateISOString) {
        var parsedIso = dateISOString.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2}).(\d{3})([+-])(\d{2})(\d{2})/);
        if (parsedIso) {
            _innerDate = new Date(Date.parse(dateISOString));
            _offset = parsedIso[8] + parsedIso[9] + parsedIso[10]
        }

        return this;
    };

    this.toUTCString = function() {
        return _innerDate.toISOString();
    };

    this.offset = function() {
        return _offset;
    };

    this.toOffset = function(offset) {
        var nd = new Date(_innerDate.getTime() + (3600000 * offset));
        return nd.toISOString().split('Z')[0] + (offset > 0 ? "+" : "-") + (offset > 9 ? "" : "0") + offset + "00";
    };

    return this;
};

var inputDateISO = "2016-08-13T11:00:00.100-0500";
var myDate = EasyTime().parse(inputDateISO);
if (myDate) {
    console.log("My original date: " + inputDateISO);
    console.log("My date UTC: " + myDate.toUTCString());
    console.log("To R O

        time: " + myDate.toOffset(2));
    }
    else {
        console.log("Sorry we don't support this format for now.");
    }

    var inputDateISO = "2016-08-13T23:00:00.100-0500";
    var myDate = EasyTime().parse(inputDateISO);
    if (myDate) {
        console.log("My original date: " + inputDateISO);
        console.log("My date UTC: " + myDate.toUTCString());
        console.log("To RO time: " + myDate.toOffset(2));
    } else {
        console.log("Sorry we don't support this format for now.");
    }
