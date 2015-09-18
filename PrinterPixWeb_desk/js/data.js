var data = { 

  // --- top banners that vertical slider shows...
	promotion: [
    	{ 
    		url: "http://www.printerpix.co.uk/photo-books/PhotoHardCover",   // link to go
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg",               // images location
        title:"50",
        description:"Print Your Memories \r\n on an Elegant Photo Books", //promotion description
        promo_des:"now with 50% off",                                     //promotion title -bolc
    		button: "Personalise Now" ,                                       //pink button message
        customer_review:"./img/Themes/headBanner/Reviews.png"},           //customer review image location
    	{ 
    		url: "http://www.printerpix.co.uk/photo-calendar", 
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg", 
        title:"40",
    	  description:"Print Your Memories \r\n on an Elegant Photo Books",
        promo_des:"now with 00% off",
        button:"Personalise Now" ,       
        customer_review:"./img/Themes/headBanner/Reviews.png" },
    	{ 
    		url: "http://www.printerpix.co.uk/photo-canvas", 
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg",
        title:"40",
        description:"Print Your Memories \r\n on an Elegant Photo Books",
        promo_des:"now with 00% off",
        button: "Personalise Now" ,       
        customer_review:"./img/Themes/headBanner/Reviews.png" },    	
      { 
    		url: "http://www.printerpix.co.uk/iphone-cases", 
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg",
        title:"30",
        description:"Print Your Memories \r\n on an Elegant Photo Books",
        promo_des:"now with 50% off",
        button: "click here >",
        customer_review:"./img/Themes/headBanner/Reviews.png" },
    	{ 
    		url: "http://www.printerpix.co.uk/photo-instagram-prints", 
    		img_url: "./img/Themes/headBanner/Head-Banner.jpg",
        title:"10",
        description:"Print Your Memories \r\n on an Elegant Photo Books",
        promo_des:"now with 50% off",
        button: "click here >",
        customer_review:"./img/Themes/headBanner/Reviews.png" }
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
  ],
   advertise: [
      { 
          app_url: "www.printerpix.co.uk",  //TODO: need to modify
          app_img_url: "./img/Themes/banner/App-Banner.jpg", 
          app_title:"MobileApplication", 
          app_description: "Redirect to mobile application download page" ,

          getFree_url: "http://www.printerpix.co.uk/e40fp/",  
          getFree_img_url:"./img/Themes/banner/40-Prints-Banner.jpg", 
          getFree_titile: "Free Photos",
          getFree_description: "To get 40 Free Photos"
      }
    ] 
};

var menu = { 
  login: [
      { 
        url: "/ProjectListing", 
        title:"Login" 
 }
  ],
  nav:[
      { 
        url: "http://www.printerpix.co.uk/photo-books/PhotoHardCover/", 
        img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg", 
        title:"Photo Books", 
        description: "" },
      {   
        url: "http://www.printerpix.co.uk/photo-calendar", 
        img_url: " ",
        title:"Calendar", 
        description: "" },
      { 
        url: "http://www.printerpix.co.uk/posters", 
        img_url: " ",
        title:"Wall Decor", 
        description: "" },
      { 
        url: "http://www.printerpix.co.uk/gift?preselectedid=fefb800a-3235-4ed2-8e2b-871ac3d018e7", 
        img_url: " ",
        title:"Gifts", 
        description: "" },
      { 
        url: "http://www.printerpix.co.uk/iphone-cases/", 
        img_url: " ",
        title:"Cases", 
        description: "" },

      { 
        url: "http://www.printerpix.co.uk/photo-instagram-prints", 
        img_url: "",
        title:"Prints", 
        description: "" },

      { 
        url: "http://www.printerpix.co.uk/b2s", 
        img_url: "",
        title:"Occasions", 
        description: "" }

  ],
  nav_flag: [
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
  phone_number:[ {
      phone_message:"Call:0844 567 8228 Mon-Fri 9:00am to 5:00pm [UK]",
    }
  ]

};

var footer = { 
  Products: [
      { 
        url: "/photo-books/leather-cover", 
        title:"Photo Books" },
      { 
        url: "/CalendarLandingPage.aspx", 
        title:"Photo Calendars" },
      { 
        url: "/CanvasLandingPage.aspx", 
        title:"Photo Canvases" },
      { 
        url: "/posters",         
        title:"Posters" },
      { 
        url: "/posters",      // need to define
        title:"Stock Photography" },
      { 
        url: "/fineArts",     
        title:"Fine Art" }
  ],
  Pricing:[
      { 
        url: "/pricing",   
        title:"Prices" },
      { 
        url: "/Payment-Methods.html", 
        title:"Payment Methods" },
      { 
        url: "/Delivery.html", 
        title:"Delivery" }
  ],
  PhotoTips:[
      { 
        url: "/photoquality",  
        title:"Photo Quality" },
      { 
        url: "/Delivery.html", 
        title:"Image Resolution" }
  ],
  AboutUs: [
      { 
        url: "/printerpixsuppliers", 
        title:"Why Printpix?" },
      { 
        url: "/AboutUs.html", 
        title:"About Us" },
      { 
        url: "/testimonials.html", 
        title:"Testimoials" },
      { 
        url: "/terms-and-conditions.html",    
        title:"Terms and Conditions" },
      { 
        url: "/affiliates/",    
        title:"Partners" }

  ],
  CustomerCare: [
      { 
        url: "/ContactUs.html", 
        title:"Contact Us" },
      { 
        url: "/Privacy-Policy.html", 
        title:"Privacy Policy" },
      { 
        url: "/returns-policy.html", 
        title:"Returns Policy" },
      { 
        url: "/complaints-procedure-policy.html",    
        title:"Complaints Procedure" },
      { 
        url: "/",     // need to define
        title:"Frequently Questions" }

  ],
  SocialLink: [
      { 
        url: "https://twitter.com/printerpix", 
        img_url:  "./img/social/Social-Twitter.png",
        description: "twitter" },
      { 
        url: "https://www.facebook.com/PrinterPixUK", 
        img_url: "./img/social/Social-Facebook.png",
        description: "facebook" },
      { 
        url: "https://uk.pinterest.com/printerpixuk/", 
        img_url:  "./img/social/Social-Pinterest.png",
        description: "pinterest" },
      { 
        url: "https://instagram.com/printerpixuk/", 
        img_url: "./img/social/Social-Instagram.png",
        description: "instagram" },
     { 
        url: "http://printerpix.tumblr.com", 
        img_url:  "./img/social/Social-Tumbler.png",
        description: "tumblr" },
      { 
        url: "https://www.youtube.com/user/printerpix", 
        img_url:  "./img/social/Social-Youtube.png",
        description: "youtube" }
  ]
  

};
