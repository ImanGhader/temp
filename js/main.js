var $win = $(window);
var $homeBanner = $('.home-banner');
var $workBanner = $('.work-banner');
var workBannerOffset = $workBanner.offset();

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	var workPos = (scrollPos - workBannerOffset.top) / 2;

	$homeBanner.css('background-position', 'center ' + scrollPos / 2 + 'px');
	$workBanner.css('background-position', 'center ' + workPos + 'px');
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
