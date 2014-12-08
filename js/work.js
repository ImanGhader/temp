var $win = $(window);
var $iawBanner = $('.iaw-banner');
var iawBannerOffset = $iawBanner.offset();

	$win.on('scroll', function () {
		
		var scrollPos = $win.scrollTop();
		var iawPos = (scrollPos - iawBannerOffset.top) / 2;

		$iawBanner.css('background-position', 'center ' + iawPos + 'px');
	});