var express = require('express');
var router = express.Router();
var ordObj = {data:[
               {topping: "cherry", quantity: 2},
               {topping: "plain", quantity: 6},
               {topping: "chocolate", quantity: 3}
             ]};
var ordJSON = JSON.stringify(ordObj);

/* GET orders   */
router.get('/', function(req, res, next) {
  //for(x in ordObj.data) {
    res.json(ordObj);

});

module.exports = router;
