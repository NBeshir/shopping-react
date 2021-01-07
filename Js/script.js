$(window).on("load", function(){
    $(".loader").fadeOut(500);
})

$(function(){

$(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })

})
$('body').scrollspy({ target: '#navigation' });

$(".header a") .click(function(){
    alert("hi there")
})