    // SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })


  

    // MAGNIFIC POPUP
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, 

        duration: 300, 
        easing: 'ease-in-out', 

        
        opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });  