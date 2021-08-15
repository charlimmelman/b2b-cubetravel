jQuery( document ).ready( function($) {
  var controller = null;
  var maxWidth = 1140;

  $('.testimonials-slick').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

    ]
  });

  if( $(window).width() < maxWidth ) {
    $( ".header" ).addClass( "header--primary" );
    return;
  }

  function initScrollMagic() {
    console.log('qqq')
    $('body').scrollTop( 0 );
    controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: "#header-trigger"})
        .setClassToggle("header", "header--primary")
        .addTo(controller);
  }

  initScrollMagic();

});
