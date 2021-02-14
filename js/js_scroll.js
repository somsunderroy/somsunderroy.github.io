$(document).ready(function () {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset();
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    })
    
  })
  
})