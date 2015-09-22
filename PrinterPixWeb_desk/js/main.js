

$(document).ready(function () {
	var template;
 
	template = Handlebars.compile($('#titleTemplate').html()); 
	$('#top-memu-bar').append(template);

	template = Handlebars.compile($('#navTemplate').html()); 
	$('#nav-memu-bar').append(template(menu));


	template = Handlebars.compile($('#promoSliderTemplate').html()); 
	$('#promotion-slider-bar').append(template(data));

	$('.banner-img').width(window.innerWidth);



 	for(var i =0; i< data.promotion.length ; i++) {
 		if(data.promotion[i].button.length<1) {
 			console.log(data.promotion[i].button.length);
 			console.log(data.promotion[i].id);
 		//	$('#'+data.promotion[i].id).addClass('hidden');
 		} 
 		
 		console.log(data.promotion[i].img_url);
 	}

 	//

	template = Handlebars.compile($('#bestSellerTemplate').html()); 
	$('#best-seller').append(template(data));

	template = Handlebars.compile($('#instagramSellerTemplate').html()); 
	$('#instagram-seller').append(template(data));


   template = Handlebars.compile($('#promotionSellerTemplate').html()); 
   $('#promo-seller').append(template(data));

	template = Handlebars.compile($('#footerTemplate').html()); 
	$('#footer-main').append(template(footer));




	function initCycle () {
		var iw = window.innerWidth;
		var numberSlide=4;

		if(iw <768){
			numberSlide=2;
		}
		else if(iw <960){
			numberSlide = 3;
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

    $('.flag-drop-down').dropit();
    $('.pager-box').click(function () {
    	$("body").animate({ scrollTop: $('.main-manu-box').height()+$('.top-bar-up').height()+$('#promotion-slider-bar').height()}, "slow");
    	return false;
    })
});