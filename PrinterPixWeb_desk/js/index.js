

$(document).ready(function () {
 
function initCycle () {
    var iw = window.innerWidth;
    var numberSlide=3;

    if(iw <768){
      numberSlide=1;
    }
    else if(iw <960){
      numberSlide = 2;
    }
    else {
      numberSlide = 3;
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
  var template;

  template = Handlebars.compile($('#promoSliderTemplate').html()); 
  $('#promotion-slider-bar').append(template(data));

  //  var template = Handlebars.compile($('#navTemplate').html()); 
  //$('#nav-memu-bar').append(template);
    template = Handlebars.compile($('#navTemplate').html()); 
  $('#nav-memu-bar').append(template(menu));
  
  initCycle();

    $('.flag-drop-down').dropit();
});