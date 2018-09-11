(function($) {

    var app = $.sammy('#app', function() {
      
      //Home
      this.get('/', function() {
        $('#app').load('portfolio/main.html');
      });
      
      //Scroll to work
      this.get('#/work', function(){
        $('#app').load('portfolio/main.html');
        $(document).ready(function(){
          var checkExist = setInterval(function() {
            if ($('#work').length) {
              var target =  $('#work')[0].offsetTop;
              $('html, body').stop().animate({
                  scrollTop: target
              }, 800);
              clearInterval(checkExist);
            }
          }, 100);
        });
      });      
      
      // Routes
      this.get('#/eala', function() { 
        $('#app').load('portfolio/eala.html');
      });
      this.get('#/vitafusion', function() { 
        $('#app').load('portfolio/vitafusion.html');
      });
      this.get('#/hosanna', function() { 
        $('#app').load('portfolio/hosanna.html');
      });
      this.get('#/imco', function() { 
        $('#app').load('portfolio/imco.html');
      });
      this.get('#/intercargo', function() { 
        $('#app').load('portfolio/intercargo.html');
      });
      this.get('#/orajel', function() { 
        $('#app').load('portfolio/orajel.html');
      });
      this.get('#/ui-design', function() { 
        $('#app').load('portfolio/ui-design.html');
      });
      
      this.before('.*', function() {
        setTimeout(function(){ $(document).scrollTop(0); }, 500);
        $('body').removeClass('menu-open');
      });
      
    });
  
    app.run()
    
  })(jQuery);