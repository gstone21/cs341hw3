/* Grant Stone */

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

        // function for drop-down selection
        eventHandler = function(event){
          $(".dropbtn:first-child").text($(this).text());
          $(".dropbtn:first-child").val($(this).text());
        }

        $(function(){
          $(".dropdown-content a").click(eventHandler);
        });
        /*-External Citation-
          -Date: 2/10/2020
          -Problem: I did not know to make the button name change for the hover dropdown menu.
          -Resource: http://jsbin.com/owuyix/4/edit?html,js,output
          -Solution: I used code from this example to select and display values in the drop-down menu.
         */

