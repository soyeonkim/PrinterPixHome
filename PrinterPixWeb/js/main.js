

var data = { 
	promotion: [
    	{ url: "./img/Themes/headBanner/Head-Banner.jpg", description: "Hello!" },
    	{ url: "./img/Themes/headBanner/Head-Banner.jpg", description: "Hello!" },
    	{ url: "./img/Themes/headBanner/Head-Banner.jpg", description: "Hello!" },
    	{ url: "./img/Themes/headBanner/Head-Banner.jpg", description: "Hello!" },
    	{ url: "./img/Themes/headBanner/Head-Banner.jpg", description: "World!" }
  ],
  bestSeller:[
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" },
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" },
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" },
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" },
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" }
  ],
  instagram: [
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" },
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" },
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" },
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" },
  		{ url: "./img/Themes/headBanner/Head-Banner.jpg", title:"poster", description: "Hello!" }
  ]

};


$(document).ready(function () {
	var template;
	template = Handlebars.compile($('#titleTemplate').html()); 
	$('#top-memu-bar').append(template);

	template = Handlebars.compile($('#NavTemplate').html()); 
	$('#nav-memu-bar').append(template);


	template = Handlebars.compile($('#SliderTemplate').html()); 
	$('#promotion-slider-bar').append(template(data));

	function initCycle () {
		$('#slider-source').cycle({
			fx: 'scrollVert',
			speed: 600,
			sildes: 'div',
			next :'#next_banner',
			prev :'#prev_banner',
			pager: '#page-pager',

		});

	}
	initCycle();

    $('.flag-drop-down').dropit();
});