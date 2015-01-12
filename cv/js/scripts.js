
/* Sticky Navigation */

$(window).load(function(){
    $("#nav").sticky({ 
		topSpacing: 0,
		className: 'sticky',
		wrapperClassName: 'main-menu-wrapper'
	});
	$(".selectnav").sticky({ 
		topSpacing: 0,
		className: 'sticky',
		wrapperClassName: 'main-menu-wrapper'
	});
});

/* Arctic Scroll */

$(function(){
	$(".arctic_scroll").arctic_scroll({
		speed: 1900,
		delay: 100
	});
});

/* SelectNav [Menu Nav for Small Screen] */

selectnav('nav', {
	nested: true,
	indent: '-'
});

/* Horizontal Bar */

$(document).ready(function () {
	$('#bar-1').jqbar({ value: 90, barColor: '#D64747' });
	$('#bar-2').jqbar({ value: 99, barColor: '#FF681F' });
	$('#bar-3').jqbar({ value: 80, barColor: '#ea805c' });
	$('#bar-4').jqbar({ value: 70, barColor: '#88bbc8' });
	$('#bar-5').jqbar({ value: 60, barColor: '#939393' });
	$('#bar-6').jqbar({ value: 90, barColor: '#3a89c9' });
});

/* Circle Statistic */

$( document ).ready(function() {
	$('#statistic-1').circliful({
		dimension: 160,
		width: 11,
		animationStep: 0.6
	});
	$('#statistic-2').circliful({
		dimension: 160,
		width: 11,
		animationStep: 0.6
	});
	$('#statistic-3').circliful({
		dimension: 160,
		width: 11,
		animationStep: 0.6
	});
	$('#statistic-4').circliful({
		dimension: 160,
		width: 11,
		animationStep: 0.6
	});
});

/* Fancybox */

$(document).ready(function() {
	$("a[rel=portfolio-group]").fancybox({
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'titlePosition' 	: 'over',
		'opacity'			: true
	});
	$("#gmaps").fancybox({
		'width'				: '75%',
		'height'			: '75%',
		'autoScale'			: false,
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'type'				: 'iframe'
	});
});

/* Animation */
wow = new WOW(
  {
	animateClass: 'animated',
	offset:       100
  }
);
wow.init();