

$(document).ready(function () {
	var template;
	Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});
	template = Handlebars.compile($('#titleTemplate').html()); 
	$('#top-memu-bar').append(template);

	template = Handlebars.compile($('#navTemplate').html()); 
	$('#nav-memu-bar').append(template(menu));


	template = Handlebars.compile($('#promoSliderTemplate').html()); 
	$('#promotion-slider-bar').append(template(data));

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
			speed: 600,
			sildes: 'div',
			next :'#next_banner',
			prev :'#prev_banner',
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
});