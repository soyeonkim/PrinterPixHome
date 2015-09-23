

$(document).ready(function () {
	var template;
 
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


   template = Handlebars.compile($('#promotionSellerTemplate').html()); 
   $('#promo-seller').append(template(data));

	template = Handlebars.compile($('#footerTemplate').html()); 
	$('#footer-main').append(template(footer));




	function initCycle () {
		var iw = window.innerWidth;
		var numberSlide=4;

		if(iw <1200){
			numberSlide=2;
		}
		 
		else {
			numberSlide = 4;
		}

		$('#slider-source').cycle({
			fx: 'scrollVert',
			timeout: 1000,
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
			carouselVisible:numberSlide
		});


	}

	initCycle();

	function dependSize(windowSize) {
		if(windowSize >1200){
	 		$('#best-seller2').addClass('hidden');
	 		console.log("add");
	 		$('#horz-social-link').addClass('hidden');
	  		$('.social-box-img').removeClass('hidden');
	 		
	    } 
	    else {
	  		 $('#best-seller2').removeClass('hidden');
	  		 console.log("remove");
	  		 $('#horz-social-link').removeClass('hidden');
	  		 $('.social-box-img').addClass('hidden');
	    }

	}

    $('.flag-drop-down').dropit();
    $('.pager-box').click(function () {
    	$("body").animate({ scrollTop: $('.main-manu-box').height()+$('.top-bar-up').height()+$('#promotion-slider-bar').height()}, "slow");
    	return false;
    });
    var windowSize=window.innerWidth;
    $(window).resize(function () {
    	// body...
    		windowSize=window.innerWidth;
	    	//$('#top-memu-bar').window(windowSize);
	    	$('.slider-container').width(windowSize+"px");
	    	console.log(windowSize);
	 		dependSize(windowSize);
		    initCycle();    	

    });
	dependSize(windowSize);
    
   // $('#top-memu-bar').width(windowSize);
    $('.slider-container').width(windowSize+"px");
    //	$('.top-bar-center').width(windowSize);
	console.log(windowSize);
   // $('.slider-container').width(window.innerWidth);
});