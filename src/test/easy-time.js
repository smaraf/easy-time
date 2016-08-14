var assert = require('assert');

exports["simple passing test"] = function() {
    assert.equal(3 + 2, 5, 'assert passes');
};

exports["simple failing test"] = function() {
    assert.equal(2 + 2, 5, 'assert fails');
};

if (module == require.main) { require('test').run(exports); }
