var $win = $(window);
var $sun = $('.sun');
var $bannerSection = $('.banner-section');
var $servicesSection = $('.services');
var $portfolioSection = $('.portfolio');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$bannerSection.css('background-position', ' center ' + scrollPos / 2 + 'px');
	
});

$(".nav").localScroll();

$servicesSection.waypoint(function(){
$(".icon-branding").addClass("slideUp");
}, { offset: '60%'} );

$portfolioSection.waypoint(function(){
$(".portfolio-h2").addClass("slideRight");
}, { offset: '60%'} );