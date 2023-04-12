

$(document).ready(function(){

      $('.fa-bars').click(function(){
         $(this).toggleClass('fa-times');
      $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll', function(){

        $('.fa-bars').removeclass('fa-times');
        $('.nav').removeclass('nav-toggle');

        if($(window).scrolltop() > 10){
            $('header').addclass('header-active');
        }else{
            $('header').removeclass('header-active');
        }

  });

  $('.facility').magnificpopup({
    delegate:'a',
    type:'image',
    gallery:{
        enable:true
    }
  })

});



// Runner.instance_.gameOver = () => {}