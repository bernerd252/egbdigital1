/*---------------------------------------------
Clippy Headings
- Creates a scrolling cliprect effect on fixed headings
----------------------------------------------*/

(function($) {
  var s,
  clippy = {
    settings: {
      heading: $('.js-clippy'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      $(window).on("load resize scroll", $.proxy(this.getClippy, this));
    },

    getClippy: function(){
        s.heading.each(function() {
          var layerOffset = $(this).closest('article, section').offset(),
              containerOffset = layerOffset.top - $(window).scrollTop(),
              clippy = containerOffset - $(this).css("top").replace(/[^-\d\.]/g, '') - $(this).css("margin-top").replace(/[^-\d\.]/g, '');
          $(this).css('clip', 'rect('+ clippy +'px, auto, auto, auto)');
        });
    },
  };
   clippy.init();
})(jQuery);

$("#litterbot").hover(function(){
    $("#projects").css("background-image", ":url(http://vignette3.wikia.nocookie.net/egamia/images/f/f3/Intel_logo.png/revision/latest?cb=20061005221757)");
});

   $('.awesome-tooltip').tooltip({
            placement: 'left'
        });  
        $('body').scrollspy({ 
            target: '#mainnav', 
            offset: 000
        });  
        /* CSS Tricks smooth scrolling : http://css-tricks.com/snippets/jquery/smooth-scrolling/ */
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {                   
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });