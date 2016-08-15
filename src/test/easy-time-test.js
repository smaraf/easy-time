var assert = require('assert');
var EasyTime = require('../../easy-time.js');
var exports = {};

exports["test instantiate with ISO 6601 complete date plus hours, minutes, seconds and a 3 decimal fraction of a second"] = {
    testShouldNotBeNull: function() {
        assert.notEqual(new EasyTime("2016-08-13T11:00:00.100-0500"), null, "should not be null");
    },
    testShouldParseTheCorrectDate: function() {
        assert.equal(new EasyTime("2016-08-13T11:00:00.100-0500").toUTCString(), "2016-08-13T16:00:00.100Z");
    },
    testShouldHaveTheCorrectOffeet: function() {
        assert.equal(new EasyTime("2016-08-13T11:00:00.100-0500").offset, "-0500");
    },
    testShouldConvertToPositiveOffset: function() {
        assert.equal(new EasyTime("2016-08-13T11:00:00.100-0500").toOffset(2), "2016-08-13T18:00:00.100+0200");
    },
};

exports["test parse ISO 6601 complete date plus hours, minutes, seconds and a 3 decimal fraction of a second"] = {
    testShouldNotBeNull: function() {
        assert.notEqual(EasyTime().parse("2016-08-13T11:00:00.100-0500"), null, "should not be null");
    },
    testShouldParseTheCorrectDate: function() {
        assert.equal(new EasyTime().parse("2016-08-13T11:00:00.100-0500").toUTCString(), "2016-08-13T16:00:00.100Z");
    },
    testShouldHaveTheCorrectOffeet: function() {
        assert.equal(EasyTime().parse("2016-08-13T11:00:00.100-0500").offset, "-0500");
    },
    testShouldConvertToPositiveOffset: function() {
        assert.equal(EasyTime().parse("2016-08-13T11:00:00.100-0500").toOffset(2), "2016-08-13T18:00:00.100+0200");
    }
};

exports["test parse ISO 6601 complete date plus hours, minutes, seconds and less than 3 decimal fraction of a second"] = {
    testShouldNotBeNull: function() {
        assert.equal(EasyTime().parse("2016-08-13T11:00:00.10-0500"), null, "should not be null");
        // todo: update use case to return a not null object
    }
};

require('test').run(exports);
