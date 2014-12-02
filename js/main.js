var $win = $(window);
var $homeBanner = $('.home-banner');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$homeBanner.css('background-position', 'center' + scrollPos / 6 + 'px')

});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
