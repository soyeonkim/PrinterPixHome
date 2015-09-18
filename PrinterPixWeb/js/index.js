

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