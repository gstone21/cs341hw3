/* Grant Stone 
   cs341 hw4
*/

var express = require('express');
var router = express.Router();
var ordObj = {data:[
               {topping: "cherry", quantity: 2},
               {topping: "plain", quantity: 6},
               {topping: "chocolate", quantity: 3}
             ]};
var ordJson = JSON.stringify(ordObj);

/* GET orders  
router.get('/', function(req, res, next) {
    res.send(ordJson);
}); */

var dbms = require('./dbms.js');
/* POST orders   */
router.post('/', function(req, res, next) {
    var month = req.body.month;
    var MON = month.toUpperCase();
    var query = 'SELECT * FROM ORDERS WHERE MONTH='+MON;
    dbquery(query, function(error, result) {
	    /*if(!error){
	    	res.send(result)
	    } */
        
	
});  
    //res.send(ordJson+MON);
});
/*-External Citation-
  -Date: 2/13/2020
  -Problem: I did not know how to issue/handle a post. This example helped.
  -Resource: https://codeforgeek.com/handle-get-post-request-express-4/
  -Solution: I followed the code from this example to make my post. 
             This example also helped in readForm.js.
*/
    
module.exports = router;  
