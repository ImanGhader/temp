var $win = $(window);
var $homeBanner = $('.slogan');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$homeBanner.css('background-position', 'center ' + scrollPos / 2 + 'px');

});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
