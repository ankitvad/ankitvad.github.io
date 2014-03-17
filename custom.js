$(function(){
	
	$('.nav').click(function(ev){
		ev.preventDefault();
	$('#monkey a').hover(function(){
		$(this).animate({backgroundColor: '#5f8419'}, 500);
	}, function(){
		$(this).animate({backgroundColor: '#444'}, 500);
	});
		if($(this).hasClass('home')) {
			$('body').animate({ backgroundColor: "#13c2e2" }, 500);
			$('#content').scrollTo( '#home', 500, {queue:true} );
		} else if($(this).hasClass('about')) {
			$('body').animate({ backgroundColor: "#e03112" }, 500);
			$('#content').scrollTo( '#about', 500, {queue:true} );
		} else if($(this).hasClass('networks')) {
			$('body').animate({ backgroundColor: "#a5c023" }, 500);
			$('#content').scrollTo( '#networks', 500, {queue:true} );
		} else if($(this).hasClass('contact')) {
			$('body').animate({ backgroundColor: "#9a32b0" }, 500);
			$('#content').scrollTo( '#contact', 500, {queue:true} );
		} else if($(this).hasClass('monkey')) {
			$('body').animate({ backgroundColor: "#666" }, 500);
			$('#content').scrollTo( '#monkey', 500, {queue:true} );
		}
	});
});