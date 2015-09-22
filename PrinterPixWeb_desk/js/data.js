var data = { 

  // --- top banners that vertical slider shows...
	promotion: [
    	 { 
        id:"promo1",
        url: "#"/*"http://www.printerpix.co.uk/photo-books/PhotoHardCover" */,  // link to go
        img_url: "./img/Themes/headBanner/Photo-Book.jpg", 
        title:"",
        description:"Print Your Memories<br> on an Elegant Cutomizable<br>Photo Book", //promotion description
        text_color:"#414141",
        promo_des:"",
        button: "Customize Now" , 
        button_color:"#cf207e",       
        customer_review:"" },     
    	 { 
        id:"promo2",
        url: "http://www.printerpix.co.uk/photo-canvas", 
        img_url: "./img/Themes/headBanner/Canvas.jpg",
        title:"",
        description:"<strong>NeverForget<br> Your Special Days</strong><br> with our customized <br> Luxury Canvas",
        text_color:"#414141",
        promo_des:"",
        button: "Customize Now" ,     
        button_color:"#cf207e", 
        customer_review:"" },     
    	{ 
        id:"promo3",
    		url: "http://www.printerpix.co.uk/aluminium-dibonds/", 
    		img_url: "./img/Themes/headBanner/Metal-Print.jpg",
        title:"",
        description:"Print Your Memories<br> on an Elegant, Cutomizable<br>Metal Print", //promotion description
        text_color:"#414141",
        promo_des:"",
        button: "Customize Now" ,  
        button_color:"#cf207e",        
        customer_review:"" },    	
      { 
        id:"promo4",
    		url: "http://www.printerpix.co.uk/CreateGreetingCard/", 
    		img_url: "./img/Themes/headBanner/Greeting-Cards.jpg",
        title:"",
        description:"<stong>Make Unique<br> Your Gift </stong><br> with our Customizable<br> Geeting Cards",
        text_color:"#fff",
        promo_des:"",
        button: "Customize Now",
        button_color:"#cf207e",   
        customer_review:"" },
    	{ 
        id:"promo5",
    		url: "http://www.printerpix.co.uk/photo-instagram-prints", 
    		img_url: "./img/Themes/headBanner/Instagram-Prints.jpg",
        title:"",
        description:"Print Your <stong>Instagram</stong><br> Memories on <br><stong>Instagram</stong> Prints",
        text_color:"#414141",
        promo_des:"",
        button: "Print Now",
        button_color:"#cf207e",   
        customer_review:"" },
        ],
  bestSeller:[
  	   
     { 
        url: "/photo-books/leather-cover", 
        img_url: "./img/Themes/bestSeller/Valentina.jpg",
        customerStar:"./img/Themes/bestSeller/start4.png",
        title:"Valentina Photo book", 
        description: "Perfect for weddings, birthdays and other celebrations, this Valentina Photobook is the perfect way to"},
    { 
        url: "/iphone-cases", 
        img_url: "./img/Themes/bestSeller/iPhone6_transparent2.jpg",
        customerStar:"./img/Themes/bestSeller/start4.png",
        title:"iPhone Case", 
        description: "Protect your phone with this personalized case.Select a model, then upload a photo or choose an image from" },
      {   
        url: "/montage-canvass", 
        img_url: "./img/Themes/bestSeller/MontageCanvas02.jpg",
        customerStar:"./img/Themes/bestSeller/start4.png",
        title:"Collage Canvas", 
        description: "Record your memories in style with this fully customisable canvas. " },
     { 
        url: "/photo-canvas/", 
        img_url: "./img/Themes/instagram/Insta_canvas01.jpg", 
        customerStar:"./img/Themes/bestSeller/start4.png",
        title:"Instagram Canvas", 
        description: "Perfect for publishing your favourite Instagram photos, this sturdy square canvas is a great way to decorate your home or office." },
    

   		  ],
  instagram: [
  			{ 	
  			url: "/Crystal-Photo-Frame", 
  			img_url: "./img/Themes/bestSeller/Crystal_Frame.jpg",
        isNew:"",
  			title:"Crystal Frame", 
  			description: "Sleek and sophisticated, print your favourite photos on this high quality crystal block." },
  		{ 
  			url: "/photo-magic-mug/", 
  			img_url: "./img/Themes/bestSeller/MagicLatteMug_01.jpg",
        isNew:"",
  			title:"Magic Mug", 
  			description: "Using the latest heat-to-reveal technology, simply pour a hot drink to see your favourite photo magically appear." },
  		{ 
  			url: "/photo-canvas/", 
  			img_url: "./img/Themes/bestSeller/Blanchet.jpg",
        isNew:"NEW",
  			title:"Blanket",         
  			description: "Brighten your home with a beautiful personalized blanket. We guarantee highest quality and maximum comfort" },

      { 
        url: "/photo-books/stone-slates", 
        img_url: "./img/Themes/bestSeller/Slate.jpg", 
        customerStar:"./img/Themes/bestSeller/start4.png",
        isNew:"",
        title:"Photo Stone Slate", 
        description: "Relieve the moments of your holidays every day with our Stone Slate" },

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
