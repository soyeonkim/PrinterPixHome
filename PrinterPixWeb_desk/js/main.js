

$(document).ready(function () {
	var template;
	var windowSize=window.innerWidth;

	template = Handlebars.compile($('#titleTemplate').html()); 
	$('#top-memu-bar').append(template);

	template = Handlebars.compile($('#navTemplate').html()); 
	$('#nav-memu-bar').append(template(menu));


	template = Handlebars.compile($('#promoSliderTemplate').html()); 
	$('#promotion-slider-bar').append(template(data));



	template = Handlebars.compile($('#bestSellerTemplate').html()); 
	$('#best-seller').append(template(data));
	template = Handlebars.compile($('#bestSellerTemplate2').html()); 
	$('#best-seller2').append(template(data));

	template = Handlebars.compile($('#instagramSellerTemplate').html()); 
	$('#instagram-seller').append(template(data));
	template = Handlebars.compile($('#instagramSellerTemplate2').html()); 
	$('#instagram-seller2').append(template(data));

   template = Handlebars.compile($('#promotionSellerTemplate').html()); 
   $('#promo-seller').append(template(data));

	template = Handlebars.compile($('#footerTemplate').html()); 
	$('#footer-main').append(template(footer));




	function initCycle (windowSize) {
		 
		var numberSlide=4;

		if(windowSize <1200){
			numberSlide=2;
		}
		 
		else {
			numberSlide = 4;
		}

		$('#slider-source').cycle({
			fx: 'fadeout',
			timeout: 3000,
			speed:800,
			manualSpeed:300,
			sildes: 'div',
			pager: '#page-pager',

		});
 		$('#best-slider').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_PhotoBookPage',
			prev :'#next_PhotoBookPage',
			startingSlide: 0,
			carouselVisible:numberSlide
		});
		 $('#best-slider2').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_PhotoBookPage',
			prev :'#next_PhotoBookPage',
			startingSlide: 2,
			carouselVisible:numberSlide
		});

		$('#instagram-slider').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_InstagramPage',
			prev :'#nex_InstagramPage',
			startingSlide: 0,
			carouselVisible:numberSlide
		});
		$('#instagram-slider2').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_InstagramPage',
			prev :'#nex_InstagramPage',
			startingSlide: 2,
			carouselVisible:numberSlide
		});


	}

	initCycle(windowSize);

	function dependSize(windowSize) {
		if(windowSize >1200){
	 		$('#best-seller2').addClass('hidden');
	 		$('#instagram-seller2').addClass('hidden');
	 		$('#horz-social-link').addClass('hidden');
	  		$('.social-box-img').removeClass('hidden');
	  		$('.phone-number a').text("Call:0844 567 8228 Mon-Fri 9:00am to 5:00pm [UK]");
	 		
	    } 
	    else {
	  		 $('#best-seller2').removeClass('hidden');
	  		 $('#instagram-seller2').removeClass('hidden');
	  		 $('#horz-social-link').removeClass('hidden');
	  		 $('.social-box-img').addClass('hidden');
	  		// $('.phone-number a').text("Call:0844 567 8228 Mon-Fri 9am-5pm[UK]");
	  		$('.phone-number a').text("0844 567 8228 Mon-Fri 9am-5pm");	  		  
	    }	    
	    $('.promo-vert').css("top",(Math.abs($('#slider-source').height()-$('.promo-vert').height()))/2+"px");

	}

    $('.flag-drop-down').dropit();
    $('.pager-box').click(function () {
    	$("body").animate({ scrollTop: $('.main-manu-box').height()+$('.top-bar-up').height()+$('#promotion-slider-bar').height()}, "slow");
    	return false;
    });
   
    $(window).resize(function () {
    	// body...
    		windowSize=window.innerWidth;
    		initCycle(windowSize);    	
	    	//$('#top-memu-bar').window(windowSize);
	    	$('.slider-container').width(windowSize+"px");
	    	
	 		dependSize(windowSize);
		    
    });
	dependSize(windowSize);
    
   // $('#top-memu-bar').width(windowSize);
    $('.slider-container').width(windowSize+"px");

});