$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("3DbnBfFyxWVKXkBgj7TSiIWo8kV8RAovKmTfEKTR", "jrTbOb44hcTm9kAYwndVj8o5NeS1cPOKbHTnBScj");

	$( document ).ready(function() { 
	    // Verifico que el usuario se haya identificado
	    if (!Parse.User.current()) {
	        // Si no esta autenticado redirecciono al inicio
	        window.location.assign('index.html');
	    };	 
	});

	$('#logOut').click(function() {	 
		// Cerrar sesión
	    Parse.User.logOut();	
	    // Volver al inicio
	    window.location.assign('index.html');
	});
});