const fizzBuzz = require('../fizzBuzz');

describe('fizzBuzz', () => {
    it('should throw error if input is not a number', () => {
        // null, undefined, NaN, "", "String" va false
        const falsyItems = [null, undefined, "", 'String', false];
        falsyItems.forEach(fi => {
            expect(() => { fizzBuzz.fizzBuzz(fi) }).toThrow();
        });
    });

    it('should return Fizz if input is divisible by 3', () => {
        const result = fizzBuzz.fizzBuzz(9);
        expect(result).toMatch(/Fizz/);
    });

    it('should return Buzz if input is divisible by 5', () => {
        const result = fizzBuzz.fizzBuzz(10);
        expect(result).toMatch(/Buzz/);
    });

    it('should return FizzBuzz if input is divisible by 3 and 5', () => {
        const result = fizzBuzz.fizzBuzz(15);
        expect(result).toMatch(/FizzBuzz/);
    });

    it('should return input if input is not divisible by 3 and 5', () => {
        const result = fizzBuzz.fizzBuzz(17);
        expect(result).toBe(17);
    });
});