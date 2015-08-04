$(function() {
        $('.nav li a').click(function() {
        	
           	$('.nav li a.active').removeClass('active');

          	$(this).addClass('active');
          	console.log(this)
        });
     });