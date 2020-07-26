
$(document).ready(function() {

      //Start Mean Menue popup
      $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu',
      });
      //Mean Menue popup End 
	  
	  
	  
     // Start Video popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
     // End Video popup
	 
    // Start slider area
     $('.slider-active').slick({
      infinite: true,
      arrows: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll:1,
      autoplay:true
    });


     //Sticky Menue
     $(window).on('scroll',function() {    
      var scroll = $(window).scrollTop();
      if (scroll < 5) {
       $(".sticky").removeClass("sticky-header");
      }else{
       $(".sticky").addClass("sticky-header");
      }
     });
	


       //Start Brand js
      $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
    

            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    //End Brand Js

  });