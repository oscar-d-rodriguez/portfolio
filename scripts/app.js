$(document).ready(function(){
  /**
   * Menu Toggle Interaction
   */
  $('#menu-button, #menu a, .item a' ).on( 'click', function( event ) {
      $('body').toggleClass('menu-open');
  });
  /**
   * Audio Dark Effects
   */
  var player = $('#player').get(0);
  var elements = ['#play','#pause', 'body', '#canvas'];
  player.onended = function() {toggle()};
  //Play
  $('#play').click(function() {
    player.play(); 
    toggle();
    run();
    changeSource(".social-media li img", "social", "social-dark");
  });
  //Pause
  $('#pause').click(function() {
    player.pause(); toggle();
    changeSource('#play img', "social-dark", "social");

    changeSource(".social-media li img", "social-dark", "social");
  });
  //Toggle classes for all elements
  toggle = function() {
    $(elements.join()).toggleClass('active');
  };
  //Dark Social
  $('.social-media li a img, #play img')
  .mouseover(function() {
    if (!$("body").hasClass("active")) {
      changeSource(this, "social", "social-dark");
    }
  })
  .mouseout(function() {
    if (!$("body").hasClass("active")) {
      changeSource(this, "social-dark", "social");
    }
  });
  /**
   * Method for changing any src 
   */
  function changeSource(selector, oldString, newString) {
    $(selector).each(function(){  
      $(this).attr('src', function(index, attr) {
        return attr.replace(oldString, newString);
      });
    });
  }
  
  /**
   * Scroll To
   */
  $('aside a[href^="#"], .arrow a[href^="#"]').on('click', function(event) {    
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 800);
    }
  });
}); 