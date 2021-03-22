const db = require('./db');

// Testing numbers - absolute value
module.exports.absolute = function (number) {
    return (number >= 0) ? number : -number;
};

// Testing string
module.exports.greet = function (name) {
    return 'Hello, ' + name + '!';
}

// Testing rows
module.exports.getCurrencies = function () {
    return ['UZS', 'USD', 'ERO'];
}

// Testing objects
module.exports.getProduct = function(productId) {
    return { id: productId, title: 'bannana', price: 2 };
};

// Testing Exceptions
module.exports.registerUser = function (userName) {
    if (!userName) throw new Error('User is required');

    return { id: 111, userName: userName}
}

// Mock function
module.exports.applyDiscount = function (order) {
    const customer = db.getCustomer(order.customerId);
    if (customer.points > 100) {
        order.totalPrice = order.price - (order.price * 0.1);
    }
}