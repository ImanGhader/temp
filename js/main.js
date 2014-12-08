var $win = $(window);
var $homeBanner = $('.home-banner');
var $workBanner = $('.work-banner');
var workBannerOffset = $workBanner.offset();
var $howBanner = $('.how-banner');
var howBannerOffset = $howBanner.offset();


if (window.screen.width >= 480) {

	$win.on('scroll', function () {
		
		var scrollPos = $win.scrollTop();
		var workPos = (scrollPos - workBannerOffset.top) / 4;
		var howPos = (scrollPos - howBannerOffset.top) / 6;

		$homeBanner.css('background-position', 'center ' + scrollPos / 2 + 'px');
		$workBanner.css('background-position', 'center ' + workPos + 'px');
		$howBanner.css('background-position', 'center ' + howPos + 'px');
	});
}

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
