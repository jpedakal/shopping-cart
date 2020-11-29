const { assert, expect, should } = require('chai');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('It should return value -1 if value is not present', function () {
            assert.equal([1, 2, 3].indexOf(2), -1);
        });
    });
});