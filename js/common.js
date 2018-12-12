$(document).ready(function() {

  var $menu = $('.header');
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 400 && $menu.hasClass('header') ){
      $menu.removeClass('header').addClass('fix');
    }
    else if($(this).scrollTop() <= 400 && $menu.hasClass('fix')) {
      $menu.removeClass('fix').addClass('header');
    }
  });
 

   $('.comments-slider').slick({ 
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="left-slide"><img src="img/left.png" alt="prev" /></div>',
    nextArrow: '<div class="right-slide"><img src="img/right.png" alt="next" /></div>',
    dots: false,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
  });

   $('.menu-slide').slick({ 
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
       arrows: false,  
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });

   $('.menu-sliden').slick({ 
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });

   /*Открыть меню*/
   $('a.open-menu').click( function(event){ 
    event.preventDefault(); 
    $('.menu-overlay').fadeIn(400, 
      function(){ 
        $('.menu') 
          .css('z-index', '3') 
          .animate({opacity: 1, top: '178px'}, 200); 
    });
  });
  /*Закрыть меню*/
  $('.close-menu, .menu-overlay').click( function(){ 
    $('.menu')
      .animate({opacity: 0, top: '178px'}, 200,  
        function(){
          $(this).css('z-index', '0'); 
          $('.menu-overlay').fadeOut(400);
        }
      );
  });


  /*Открыть модальное окно*/
   $('a.book, .request-link a').click( function(event){ 
    event.preventDefault(); 
    $('.modal-overlay').fadeIn(400, 
      function(){ 
        $('.modal-form') 
          .css('display', 'block') 
          .animate({opacity: 1}, 200); 
    });
  });
  /*Закрыть модальное окно*/
  $('.modal-overlay').click( function(){ 
    $('.modal-form')
      .animate({opacity: 0}, 200,  
        function(){
          $(this).css('display', 'none'); 
          $('.modal-overlay').fadeOut(400);
        }
      );
  });

  var someDiv1 = $('.scroll');

    someDiv1.on('click', function() {
    someDiv1.removeClass('active');
    $(this).addClass('active');
    });

  /*Плавный скролл*/
  $(".scroll").click(function() {
    var fixed_offset = 10;
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top + fixed_offset
    }, 1000);
    e.preventDefault();
  });

  /*адаптивере меню*/
  $('header').prepend('<div id="adapt_menu" class="adapt_menu"><a href="#menu"><span></span></a></div>');
  $( 'body' ).wrapInner( '<div class="newwrap"></div>' );

  $( '.newwrap' ).after( '<div class="mobile-menu"><ul></ul><span class="menu-close"><img src="img/close.png" alt="close" /></span></div>' );
  $('.header-menu > ul > li').clone().appendTo('.mobile-menu ul');
  $('.header-phone').clone().appendTo('.mobile-menu');

  $('.adapt_menu a').click(function() {
    $(".newwrap").toggleClass("mm-slideout");
    $(".mobile-menu").toggleClass("open-menu");
    $('body').toggleClass("noscroll");
  });
  $('.menu-close, .mobile-menu a').click(function() {
    $(".newwrap").toggleClass("mm-slideout");
    $(".mobile-menu").toggleClass("open-menu");
    $('body').toggleClass("noscroll");
  });

  
});
