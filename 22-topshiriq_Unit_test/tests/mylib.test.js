const myLib = require('../myLib');
const db = require('../db');

describe('absolute', () => {

    it('should return a positive number if input is positive', () => {
        const result = myLib.absolute(1);
        expect(result).toBe(1);
    });

    it('should return a positive number if input is negative', () => {
        const result = myLib.absolute(-1);
        expect(result).toBe(1);
    });

    it('should return 0 if input is 0', () => {
        const result = myLib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return the greeting massage', () => {
        const result = myLib.greet('Linc');

        // expect(result).toContain('Linc');
        expect(result).toMatch(/Linc/);
    });
});

describe('getCurrencies', () => {
    it('should return default currencies', () => {
        const result = myLib.getCurrencies();

        // too general tests
        // expect(result).toBeDefined();
        // expect(result).not.toBeNull();

        // // too exact test
        // expect(result[0]).toBe('UZS');
        // expect(result[1]).toBe('USD');
        // expect(result[2]).toBe('ERO');

        // // proper testing
        // expect(result).toContain('UZS');
        // expect(result).toContain('USD');
        // expect(result).toContain('ERO');
        expect(result).toEqual(expect.arrayContaining(['UZS', 'USD', 'ERO']));
    });
});

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = myLib.getProduct(11);

        expect(result).toEqual({ id: 11, title: 'bannana', price: 2 });
        expect(result).toMatchObject({ id: 11, price: 2 });
        expect(result).toHaveProperty('price', 2);
    });
});

describe('registerUser', () => {
    it('should throw error if userName is falsy', () => {
        // null, undefined, NaN, "", 0 va false
        const falsyItems = [null, undefined, NaN, "", 0, false];
        falsyItems.forEach(fi => {
            expect(() => { myLib.registerUser(fi) }).toThrow();
        })
    });

    it('should return user object if userName is valid', () => {
        const result = myLib.registerUser('Admin');

        expect(result).toMatchObject({ userName: 'Admin' });
        expect(result.id).toBeGreaterThan(0);
    });
});

describe('applyDiscount', () => {
    it('should apply 10% discount if customer has more than 100 points', () => {

        db.getCustomer = function (customerId) {
            console.log('Mocked getting customer...');
            return { id: customerId, points: 101 };
        };

        const order = { customerId: 7, price: 100, totalPrice: 100 };
        myLib.applyDiscount(order);
        expect(order.totalPrice).toBe(90);
    });

    it('should not apply any discount if customer has less than 100 points', () => {

        db.getCustomer = function (customerId) {
            console.log('Mocked getting customer...');
            return { id: customerId, points: 55 };
        };

        const order = { customerId: 7, price: 100, totalPrice: 100 };
        myLib.applyDiscount(order);
        expect(order.totalPrice).toBe(100);
    });
});