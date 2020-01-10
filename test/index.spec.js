const assert = require('assert');
const {isPalindrome, unique, isReallyNaN, howMuchILoveYou, factorial, greet} = require('../index.js');

const {expect} = require('chai');


describe('Testing function unique(array)', () => {
    it('should function unique return unique array [1,2,4,3] ' +
        'for [1,2,2,4,3,3])', () => {
        assert.deepStrictEqual(unique([1,2,2,4,3,3]), [1,2,4,3]);
    });

    it('should function unique return unique array for array with 1 element ' +
        'only, [4] for [4]', () => {
        assert.deepStrictEqual(unique([4]), [4]);
    });

    it('should function unique return unique string array ["a","b"] ' +
        'for string ["a","b","a"]', () => {
        assert.deepStrictEqual(unique(["a","b","a"]), ["a","b"]);
    });

    it('should function unique do not return not unique array [1,2,2,5] ' +
        'for [1,2,2,5,5]', () => {
        assert.notDeepStrictEqual(unique([1,2,2,5,5]), [1,2,2,5]);
    });

    it('should function unique do not accept empty array', () => {
        assert.equal(unique([]), false);
    });

    it('should function unique do not work with no argument', () => {
        assert.equal(unique(), false);
    });

    it('should function unique accept only arrays like arguments, not strings', () => {
        assert.equal(unique('String'), false);
    });

    it('should function unique accept only arrays like arguments, not numbers', () => {
        assert.equal(unique(2345), false);
    });
});



describe('Testing function isReallyNaN, that returns true only if passed in ' +
    'an argument that evaluates to NaN,and returns false otherwise', () => {

    it('should function isReallyNaN return false for number 10', () => {
        assert.equal(isReallyNaN(10), false);
    });

    it('should function isReallyNaN return false for number -∞', () => {
        assert.equal(isReallyNaN(-Infinity), false);
    });

    it('should function isReallyNaN return false for String', () => {
        assert.equal(isReallyNaN('100'), false);
    });

    it('should function isReallyNaN return false for undefined', () => {
        assert.equal(isReallyNaN(undefined), false);
    });

    it('should function isReallyNaN return false for null', () => {
        assert.equal(isReallyNaN(null), false);
    });

    it('should function isReallyNaN return false for object', () => {
        assert.equal(isReallyNaN({name: "Irina"}), false);
    });

    it('should function isReallyNaN return false for Boolean value false', () => {
        assert.equal(isReallyNaN(false), false);
    });

    it('should function isReallyNaN do not return false for value NaN. ' +
        'isReallyNan(NaN) should return true', () => {
        assert.notEqual(isReallyNaN(NaN), false);
    });
});



describe('Testing function howMuchILoveYou()', () => {
    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for calling function with no argument', () => {

    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for number -1', () => {

    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for number 0', () => {

    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for not a number argument, String "2"', () => {

    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for null', () => {

    });

    it('should function howMuchILoveYou() return "I love you" ' +
        'for 1', () => {

    });

    it('should function howMuchILoveYou() return "a little" ' +
        'for 2', () => {

    });

    it('should function howMuchILoveYou() return "a lot" ' +
        'for 9', () => {

    });

    it('should function howMuchILoveYou() return "passionately" ' +
        'for 10', () => {

    });

    it('should function howMuchILoveYou() return "madly" ' +
        'for 11', () => {

    });

    it('should function howMuchILoveYou() return "not at all" ' +
        'for 18', () => {

    });
});



describe('Testing function factorial', () => {
    it('should function factorial return factorial of number 0 equals 1 ', () => {

    });

    it('should function factorial return factorial of number 1 equals 1 ', () => {

    });

    it('should function factorial return factorial of number 5 equals 120 ', () => {

    });

    it('should function factorial return factorial of number 12 equals 479001600', () => {

    });

    it('should function factorial throw RangeError for number 13', () => {

    });

    it('should function factorial throw RangeError for number -1', () => {

    });
});



describe('Testing function greet()', () => {
    it('should function greet return "Welkom" for dutch language, ' +
        'which exist in our database', () => {

    });

    it('should function greet return "Welcome" for english language, ' +
        'which exist in our database', () => {

    });

    it('should function greet return "Welcome" for russian language, ' +
        'which does not exist in our database', () => {

    });

    it('should function greet return "Welcome" for invalid input - ' +
        'string "Hello",', () => {

    });

    it('should function greet return "Welcome" for no argument,', () => {

    });

    it('should function greet return "Welcome" for data type argument ' +
        'different than string, for array', () => {

    });

    it('should function greet return "Welcome" for data type argument ' +
        'different than string, for null', () => {

    });
});



describe('Testing function howMuchILoveYou()', () => {
    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for calling function with no argument', () => {

    });
});



describe('Testing function howMuchILoveYou()', () => {
    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for calling function with no argument', () => {

    });
});



describe('Testing function howMuchILoveYou()', () => {
    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for calling function with no argument', () => {

    });
});



describe('Testing function howMuchILoveYou()', () => {
    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for calling function with no argument', () => {

    });
});

