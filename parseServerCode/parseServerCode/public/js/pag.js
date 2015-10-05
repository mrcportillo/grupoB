$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("3DbnBfFyxWVKXkBgj7TSiIWo8kV8RAovKmTfEKTR", "jrTbOb44hcTm9kAYwndVj8o5NeS1cPOKbHTnBScj");

	$('.login-form').on('submit', function(e) {
	 
	    // Prevent Default Submit Event
	    e.preventDefault();
	 
	    // Get data from the form and put them into variables
	    var username = document.getElementById("login-username").value;
	    var password = document.getElementById("login-password").value;
	 	
	 	// Call Parse Login function with those variables
	    Parse.User.logIn(username, password, {
	        // If the username and password matches
	        success: function(user) {
	            window.location.assign('micuenta.html');
	        },
	        // If there is an error
	        error: function(user, error) {
	            console.log(error);
	        }
	    });
	 
	});
});