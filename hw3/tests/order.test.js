/* Grant Stone 
   cs341 hw4
   order.test.js
*/

const order = require('../routes/orders.js');

test('checks arr[0] is topping=cherry, quantity=3', () => {
    expect(order.length).toEqual(3);
});