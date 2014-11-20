var $win = $(window);
var $sun = $('.sun');
var $bannerSection = $('.banner-section');
var $servicesSection = $('.services');
var $portfolioSection = $('.portfolio');
var $mainSection = $('.main');
var $aboutSection = $('.about');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$bannerSection.css('background-position', ' center ' + scrollPos / 2 + 'px');
	
});

$(".nav").localScroll();

$servicesSection.waypoint(function(){
$(".icon-branding").addClass("hatch");
}, { offset: '60%'} );

$servicesSection.waypoint(function(){
$(".slide-services").addClass("fadeIn");
}, { offset: '80%'} );

$portfolioSection.waypoint(function(){
$(".portfolio-h2").addClass("fadeIn");
}, { offset: '80%'} );

$mainSection.waypoint(function(){
$(".fade-banner").addClass("fadeIn");
}, { offset: '10%'} );

$aboutSection.waypoint(function(){
$(".fade-about").addClass("fadeIn");
}, { offset: '60%'} );