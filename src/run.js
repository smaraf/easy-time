var EasyTime = require("/easy-time.js");

var inputDateISO = "2016-08-13T11:00:00.100-0500";
var myDate = EasyTime().parse(inputDateISO);
if (myDate) {
    console.log("My original date: " + inputDateISO);
    console.log("My date UTC: " + myDate.toUTCString());
    console.log("To RO time: " + myDate.toOffset(2));
} else {
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
