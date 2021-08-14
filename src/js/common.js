jQuery( document ).ready( function($) {
  var controller = null;

  function initScrollMagic() {
    $('body').scrollTop( 0 );
    controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: "#hero-section"})
        .setClassToggle("header", "header--primary")
        .addTo(controller);
  }

  initScrollMagic();

});
