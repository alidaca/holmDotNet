$(document).ready(function(){
  console.log('document ready');
  $('.mobile-nav-toggle').on('click',function(){
    console.log('document updated');
    $('.mobile-nav, .mobile-nav-toggle').toggleClass('is-open');
  });//onClick

});//$(document).ready
