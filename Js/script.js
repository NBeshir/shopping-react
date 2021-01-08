$(window).on("load", function(){
    $(".loader").fadeOut(500);
})

$(function(){

// $(".navbar a").click(function(){
//     $("body,html").animate({
//      scrollTop:$("#" + $(this).data('value')).offset().top
//     },1000)
    
//    })
//$('.header').height($(window).height());
$('.dropdown').click(function(){
    $('#dropdown-menu ').css("display","block");
   
   




})
$('.dropdown').mouseout(function(){
    $('#dropdown-menu ').css("display","none");
   
   




})
$('.dropdown').click(function(){
    $('.dropdown ').css("background","#662200")
})

})



