
$(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch([
        "static/login/assets/img/backgrounds/login-bg1.jpg"
        , "static/login/assets/img/backgrounds/login-bg2.jpg"
        , "static/login/assets/img/backgrounds/login-bg3.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('#login,#modify,#save').on('click', function(e) {
    	
    	$(".login-form").find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');

    		}
    		else {
    			$(this).removeClass('input-error');
                
    		}
    	});
    	
    });

});
