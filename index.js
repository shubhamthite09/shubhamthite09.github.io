$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('#nav-menu').addClass("sticky");
        }else{
            $('#nav-menu').removeClass("sticky");
        }
    })
    // togel/menu nevbar script
    $('.menu-btn').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.menu li a').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //   typing animation script 
       var typed = new Typed (".panku",{
        strings:["Node Backend Devloper"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
       })
       var typed = new Typed (".panku2",{
        strings:["Node Backend Devloper"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
       });
    // owl carousel script
    $('.carousel').owlCarousel({
         margin:20,
         loop:true,
         autoplayTimeOut:2000,
         autoplayHoverPause:true,
         responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
         }
    })
});