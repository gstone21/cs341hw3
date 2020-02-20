/* 
   Grant Stone 
   cs341 hw4
   neworder.js 
*/


var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');
var orderid = 63;

/* POST new orders */
router.post('/', function(req, res, next) { 
    var quantity = req.body.quantity;
    var topping = req.body.topping;
    var notes = req.body.notes;
    var query = "INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) "+
                "VALUES ("+orderid+", \'OCT\', 10, "+quantity+", \'"+topping+"\', \'"+notes+"\')";
                
    orderid+=1; 
    
    dbms.dbquery(query, function(error, result) { /*
	    var data = JSON.stringify(result);
	    if(!error){
	    	res.send(data);
	    }else {
		    res.send("Error. ");
	    } */
    });  
}); 

module.exports = router;  

