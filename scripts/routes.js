(function($) {

    var app = $.sammy('#app', function() {
      
      var body = $(document);
      this.get('/', function() {
        $('#app').load('main.html');
      });

      this.get('#/work', function(){
        $('#app').load('main.html');
        $(document).ready(function(){
          var checkExist = setInterval(function() {
            if ($('#work').length) {
              var target =  $('#work')[0].offsetTop;
              $('html, body').stop().animate({
                  scrollTop: target
              }, 800);
              clearInterval(checkExist);
            }
          }, 100); // check every 100ms
        });
      });
      
    
      // Try to make this modular
      /* Portfolio routes */
      this.get('#/eala', function() { 
        $('#app').load('portfolio/eala.html');
        setTimeout(function(){ body.scrollTop(0); }, 500);
    
      });
      this.get('#/vitafusion', function() { 
        $('#app').load('portfolio/vitafusion.html');
        setTimeout(function(){ body.scrollTop(0); }, 500);

      });
      this.get('#/hosanna', function() { 
        $('#app').load('portfolio/hosanna.html');
        setTimeout(function(){ body.scrollTop(0); }, 500);

      });
      this.get('#/imco', function() { 
        $('#app').load('portfolio/imco.html');
        setTimeout(function(){ body.scrollTop(0); }, 500);

      });
      this.get('#/intercargo', function() { 
        $('#app').load('portfolio/intercargo.html');
        setTimeout(function(){ body.scrollTop(0); }, 500);

      });
      this.get('#/orajel', function() { 
        $('#app').load('portfolio/orajel.html');
        setTimeout(function(){ body.scrollTop(0); }, 500);

      });
      this.get('#/ui-design', function() { 
        $('#app').load('portfolio/ui-design.html');
        setTimeout(function(){ body.scrollTop(0); }, 500);

      });
      
    });
  
  
    app.run()
    

  })(jQuery);