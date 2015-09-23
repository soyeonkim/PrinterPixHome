var data = { 

  // --- top banners that vertical slider shows...
	promotion: [
    	 { 
        id:"promo1",
        url: "http://www.printerpix.com/photo-books/PhotoHardCover/"/*"http://www.printerpix.com/photo-books/PhotoHardCover" */,  // link to go
        img_url: "./img/Themes/headBanner/US/Photo-Book.jpg", 
        title:"",
        description:"Print Your Memories<br> on an Elegant Cutomizable<br>Photo Book", //promotion description
        text_color:"#414141",
        promo_des:"",
        button: "Customize Now" , 
        button_color:"#cf207e",       
        customer_review:"" },     
    	 { 
        id:"promo2",
        url: "http://www.printerpix.com/photo-canvas", 
        img_url: "./img/Themes/headBanner/US/Canvas.jpg",
        title:"",
        description:"<strong>NeverForget<br> Your Special Days</strong><br> with our customized <br> Luxury Canvas",
        text_color:"#414141",
        promo_des:"",
        button: "Customize Now" ,     
        button_color:"#cf207e", 
        customer_review:"" },     
    	{ 
        id:"promo3",
    		url: "http://www.printerpix.com/metal-prints/", 
    		img_url: "./img/Themes/headBanner/US/Metal-Print.jpg",
        title:"",
        description:"Print Your Memories<br> on an Elegant, Cutomizable<br>Metal Print", //promotion description
        text_color:"#414141",
        promo_des:"",
        button: "Customize Now" ,  
        button_color:"#cf207e",        
        customer_review:"" },    	
      { 
        id:"promo4",
    		url: "http://www.printerpix.com/greeting-card/", 
    		img_url: "./img/Themes/headBanner/US/Greeting-Cards.jpg",
        title:"",
        description:"<stong>Make Unique<br> Your Gift </stong><br> with our Customizable<br> Geeting Cards",
        text_color:"#fff",
        promo_des:"",
        button: "Customize Now",
        button_color:"#cf207e",   
        customer_review:"" },
    	{ 
        id:"promo5",
    		url: "http://www.printerpix.com/photo-instagram-prints", 
    		img_url: "./img/Themes/headBanner/US/Instagram-Prints.jpg",
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
        url: "/photo-canvas/", 
        img_url: "./img/Themes/bestSeller/US/Instagram-Canvas.jpg",
        customerStar:"./img/Themes/bestSeller/start4.png",
        title:"Instagram Canvas",  
        description: "Perfect for publishing your favourite Instagram photos, this sturdy square canvas is a great way to decorate your home or office." },
        
     { 
        url:"/montage-canvas", 
        img_url: "./img/Themes/bestSeller/US/Montage-Canvas.jpg",
        customerStar:"./img/Themes/bestSeller/start4.png",
        title:"Collage Canvas",  
        description: "Record your memories in style with this fully customisable canvas. " },
      {   
        url: "/photo-books/leather-cover", 
        img_url: "./img/Themes/bestSeller/US/Photo-Book-Valentina.jpg",
        customerStar:"./img/Themes/bestSeller/start4.png",
        title:"Valentina Photo book", 
        description: "Perfect for weddings, birthdays and other celebrations, this Valentina Photobook is the perfect way to"},
     { 
        url: "/photo-books/stone-slates", 
        img_url: "./img/Themes/bestSeller/US/Stone-Slate.jpg", 
        customerStar:"./img/Themes/bestSeller/start4.png",
        title:"Photo Stone Slate", 
        description: "Relieve the moments of your holidays every day with our Stone Slate" },
 

        ],
    instagram: [
        {   
        url: "/Crystal-Photo-Frame", 
        img_url: "./img/Themes/bestSeller/US/Crystal-Frame.jpg",
        isNew:"",
        title:"Crystal Frame", 
        description: "Sleek and sophisticated, print your favourite photos on this high quality crystal block." },
     { 
        url: "/Beach-Towels/", 
        img_url: "./img/Themes/bestSeller/US/Blanchet.jpg",
        isNew:"NEW",
        title:"Blanket",    
        description: "Brighten your home with a beautiful personalized blanket. We guarantee highest quality and maximum comfort" },
     { 
        url: "/iphone-cases", 
        img_url: "./img/Themes/bestSeller/US/iPhone-6.jpg",
        isNew:"",
        title:"iPhone Case",        
        description: "Protect your phone with this personalized case.Select a model, then upload a photo or choose an image from" },

      { 
        url: "/photo-magic-mug/",  
        img_url: "./img/Themes/bestSeller/US/Magic-Latte-Mug.jpg", 
        customerStar:"./img/Themes/bestSeller/start4.png",
        isNew:"",
        title:"Magic Mug", 
        description: "Using the latest heat-to-reveal technology, simply pour a hot drink to see your favourite photo magically appear." },

  ],
   advertise: [
      { 
          app_url: "www.printerpix.com",  //TODO: need to modify
          app_img_url: "./img/Themes/banner/App-Banner.jpg", 
          app_title:"MobileApplication", 
          app_description: "Redirect to mobile application download page" ,

          getFree_url: "http://www.printerpix.com/e40fp/",  
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
        url: "http://www.printerpix.com/photo-books/PhotoHardCover/", 
        img_url: "./img/Themes/bestSeller/US/Best-Sellers-Image.jpg", 
        title:"Photo Books", 
        description: "" },
      {   
        url: "http://www.printerpix.com/photo-calendar", 
        img_url: " ",
        title:"Calendar", 
        description: "" },
      { 
        url: "http://www.printerpix.com/posters", 
        img_url: " ",
        title:"Wall Decor", 
        description: "" },
      { 
        url: "http://www.printerpix.com/gift?preselectedid=fefb800a-3235-4ed2-8e2b-871ac3d018e7", 
        img_url: " ",
        title:"Gifts", 
        description: "" },
      { 
        url: "http://www.printerpix.com/iphone-cases/", 
        img_url: " ",
        title:"Cases", 
        description: "" },

      { 
        url: "http://www.printerpix.com/photo-instagram-prints", 
        img_url: "",
        title:"Prints", 
        description: "" },

      { 
        url: "http://www.printerpix.com/b2s", 
        img_url: "",
        title:"Occasions", 
        description: "" } 

  ],
  nav_flag: [
 
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
