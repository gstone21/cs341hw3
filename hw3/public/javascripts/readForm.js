/* Grant Stone 
   cs341 hw4
*/

/*   -External Citation-
      -Date: 1/27/2020
      -Problem: I did not know how to get input from the form. 
      -Resource: https://www.w3schools.com/js/js_validation.asp
      -Solution: I used code from this example to solve my problem.
    
      -External Citation-
      -Date: 1/27/2020
      -Problem: I did not know the search, hide, and show functions 
      -Resource: https://www.w3schools.com/jsref/jsref_search.asp
      -Resource: https://www.w3schools.com/jquery/jquery_hide_show.asp
      -Solution: I used code from these examples to learn them.
*/

// order form function
$(document).ready(function(){
    $("p").hide();
});

function validateForm() {
    var x = document.forms["myForm"]["fnotes"].value;
    if (x.search("vegan")!= -1) {
        alert("Warning: Cheesecakes contain dairy.");
        return false;
    }else {
        $(document).ready(function(){
            $("form").hide();
            $("p").show();
        });
        var y = document.forms["myForm"]["fquantity"].value;
        var z = document.forms["myForm"]["ftopping"].value;
        alert("You ordered " + y + " " + z + " cheesecake(s). Notes: " + x);
        return false;
     }
}
// end of actual form


// function for drop-down month selection
$(function(){
    $(".dropdown-content a").click(eventHandler);
});

/*-External Citation-
  -Date: 2/10/2020
  -Problem: I did not know to make the button name change for the hover dropdown menu.
  -Resource: http://jsbin.com/owuyix/4/edit?html,js,output
  -Solution: I used code from this example to select and display values in the drop-down menu.
*/

var month;
eventHandler = function(event){
    $(".dropbtn:first-child").text($(this).text());
    $(".dropbtn:first-child").val($(this).text());

    month = $(this).text();
    $.post("http://localhost:3000/orders", {month: month}, function(data) {
        //alert("data? "+data);
        $("ul").empty();
        $("ul").append(data);
    });
};
/*-External Citation-
  -Date: 2/13/2020
  -Problem: I did not know how to issue/handle a post. This example helped.
  -Resource: https://codeforgeek.com/handle-get-post-request-express-4/
  -Solution: I followed the code from this example to make my post. 
             This example also helped in orders.js.
*/


        

