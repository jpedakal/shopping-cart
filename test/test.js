const { assert, expect, should, use } = require('chai');
const foo = 'boo';
const languages= {software_lan: ['C', 'Java', 'Javascript']}

// assert test cases

describe('#typeOf', function () {
    it('type of value should be string', function () {
        assert.typeOf(foo, 'string');   // Without optional message
    });
});

describe('#typeOf', function () {
    it('type of value should be string', function () {
        assert.typeOf(foo, 'string', 'foo is a string');   // With optional message
    });
});

describe('#equal', function () {
    it('it shoud give true if both strings are equal', function () {
        assert.equal(foo, 'boo');
    });
});

describe('#length', function () {
    it('length of array', function () {
        assert.lengthOf(foo, 3);
    });
});

describe('#length', function () {
    it('length of array', function () {
        assert.lengthOf(languages.software_lan, 3);
    });
});

// expect test cases

describe('#expect to be', function () {
    it('length of array', function () {
        expect(foo).to.be.a('string');
    });
});
