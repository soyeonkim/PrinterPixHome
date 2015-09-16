/*
var data = { 
	promotion: [
    	{ 
    		url: "http://www.printerpix.co.uk/photo-books/PhotoHardCover", 
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg",
    		description: "Hello!" },
    	{ 
    		url: "http://www.printerpix.co.uk/photo-calendar", 
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg", 
    		description: "Hello!" },
    	{ 
    		url: "http://www.printerpix.co.uk/photo-canvas", 
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg",
    		description: "Hello!" },
    	{ 
    		url: "http://www.printerpix.co.uk/iphone-cases", 
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg",
    		description: "Hello!" },
    	{ 
    		url: "http://www.printerpix.co.uk/photo-instagram-prints", 
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg",
    		description: "World!" }
  ],
  bestSeller:[
  		{ 
  			url: "/photo-books/PhotoHardCover", 
  		  	img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg", 
  		  	title:"Instagram Calendars", 
  		  	description: "Relieve the moments of your holidays every day with our new calendars!" },
  		{ 	
  			url: "/photo-books/leather-cover", 
  			img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
  			title:"Instagram Poster", 
  			description: "Perfect ornaments for the wall, really nice gift every occasion!" },
  		{ 
  			url: "/photo-books/SoftCover/", 
  			img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
  			title:"Instagram Photo Books", 
  			description: "The perfect gift for a birthday, wedding, birth of a child or other occasion" },
  		{ 
  			url: "/photo-canvas/", 
  			img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
  			title:"Instagram Calendars", 
  			description: "Relieve the moments of your holidays every day with out new calendars!" },

  		{ 
  			url: "/shape-collage/", 
  			img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
  			title:"Instagram Poster", 
  			description: "Perfect ornaments for the wall, really nice gift every occasion" }
  ],
  instagram: [
  		{ 
  			url: "/photo-books/PhotoHardCover", 
  		  	img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg", 
  		  	title:"Instagram Calendars", 
  		  	description: "Relieve the moments of your holidays every day with our new calendars!" },
  		{ 	
  			url: "/photo-books/leather-cover", 
  			img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
  			title:"Instagram Poster", 
  			description: "Perfect ornaments for the wall, really nice gift every occasion!" },
  		{ 
  			url: "/photo-books/SoftCover/", 
  			img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
  			title:"Instagram Photo Books", 
  			description: "The perfect gift for a birthday, wedding, birth of a child or other occasion" },
  		{ 
  			url: "/photo-canvas/", 
  			img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
  			title:"Instagram Calendars", 
  			description: "Relieve the moments of your holidays every day with out new calendars!" },

  		{ 
  			url: "/shape-collage/", 
  			img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
  			title:"Instagram Poster", 
  			description: "Perfect ornaments for the wall, really nice gift every occasion" }
  ]

};
*/

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

	template = Handlebars.compile($('#instagramSellerTemplate').html()); 
	$('#instagram-seller').append(template(data));

	template = Handlebars.compile($('#footerTemplate').html()); 
	$('#footer-main').append(template(footer));


	function initCycle () {
		$('#slider-source').cycle({
			fx: 'scrollVert',
			speed: 600,
			sildes: 'div',
			next :'#next_banner',
			prev :'#prev_banner',
			pager: '#page-pager',

		});
       // data-cycle-prev="#prev_PhotoBookPage" data-cycle-next="#next_PhotoBookPage" data-cycle-slides="div">
		$('#best-slider').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_PhotoBookPage',
			prev :'#next_PhotoBookPage',
			carouselVisible:3
		});
		$('#instagram-slider').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_InstagramPage',
			prev :'#nex_InstagramPage',
			carouselVisible:3
		});


	}
	initCycle();

    $('.flag-drop-down').dropit();
});