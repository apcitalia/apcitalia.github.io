(function($){
"use strict";
/* Sticky Menu */
var BoxmeStickyMenu = function(){
	var winwidth = jQuery(window).width();
	jQuery(window).resize(function() {
		var rwidth = jQuery(window).width();
		if(rwidth > 960){
			var leftboxmenu = (jQuery(window).width()-jQuery('#boxme-box').width())/2;
			jQuery('#boxme-box #inside-header').css({top:30,left:leftboxmenu});
		}else{
			jQuery('#boxme-box #inside-header').css({top:0,left:0});
		}
	});
	if(winwidth > 960){
	//jQuery('#boxme-box #inside-header').css('top','30px');
	var leftboxmenu = (jQuery(window).width()-jQuery('#boxme-box').width())/2;
	jQuery('#boxme-box #inside-header').css({top:30,left:leftboxmenu});

	

	jQuery('#inside-header, #head-box').data('size','big');
	jQuery(window).scroll(function(){
		var amount = jQuery(window).scrollTop();
		
	    if(jQuery(document).scrollTop() > 0)
	    {
	    	// if(amount>30){
	     //    	jQuery('#boxme-box #inside-header').css('top','0px');
	     //    }else{
	     //    	jQuery('#boxme-box #inside-header').css('top','30px');
	     //    }
	        if(jQuery('#inside-header, #head-box').data('size') == 'big')
	        {
	        	jQuery('#head-box').addClass('menufixed');
	            jQuery('#inside-header, #head-box').data('size','small');
	            jQuery('#boxme-box #inside-header').css('top','0px');
	            jQuery('.head-social-box').stop().fadeOut({
	            },600);
	            jQuery('#inside-header, #head-box').stop().animate({
	                height:'50px'
	            },600,function(){jQuery('#head-box').removeClass('menufixed');});
	            jQuery('#inside-header .logo img').stop().animate({
	            	marginTop:'-8px',
	                width:'100px'
	            },600);
	            jQuery('#head-box .logo img').stop().animate({
	            	marginTop:'3px',
	                width:'100px'
	            },600);
	            jQuery('#inside-header .menu').stop().animate({
	               	top:'-25px'
	            },600);
	            jQuery('#head-box .menu').stop().animate({
	                top:'-15px'
	            },600);
	            
	        }
	    }
	    else
	    {

	        if(jQuery('#inside-header, #head-box').data('size') == 'small')
	        {
	            jQuery('#inside-header, #head-box').data('size','big');
	            jQuery('#boxme-box #inside-header').css('top','30px');
	            jQuery('.head-social-box').stop().fadeIn({
	            },600);
	            jQuery('#inside-header, #head-box').stop().animate({
	                height:'100px'
	            },600);
	            jQuery('#inside-header .logo img').stop().animate({
	            	marginTop:'0',
	                width:'100%'
	            },600);
	            jQuery('#head-box .logo img').stop().animate({
	            	marginTop:'0px',
	                width:'100%'
	            },600);
	            jQuery('#inside-header .menu').stop().animate({
	                top:'0px'
	            },600);
	            jQuery('#head-box .menu').stop().animate({
	                top:'0px'
	            },600);
	        	jQuery('#head-box').removeClass('menufixed');
	        }  
	    }
	});
	}
}
/* Sticky Menu */
/* Chart Skills */
var BoxmePieChart = function(){
jQuery('.percentage').easyPieChart({
    animate: 1000,
    barColor: "#f2836b",
    trackColor: "#F3F3F3",
    scaleColor: false,
    lineCap: 'butt',
    lineWidth: 25,
    size: 165
});
}
/* Chart Skills */
/* Scroll to top button */
var BoxmeScrollTop = function(){
	jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > 500) {
	jQuery('.scrollup').fadeIn();
	} else {
	jQuery('.scrollup').fadeOut();
	}
	});
	jQuery('.scrollup').click(function(){
	jQuery("html, body").animate({ scrollTop: 0 }, 600);
	return false;
	});
}
/* Scroll to top button */
/* Smooth scroll for anchor links */
var BoxmeScrollForAnchor = function(){
	jQuery('.smooth').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = jQuery(target);
	    jQuery('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing');
	});
}
/* Smooth scroll for anchor links */
/* Search Start */
var BoxmeSearch = function(){
	jQuery('#wrapper').click(function() {
	    jQuery('.search-box input').animate({width: 0}, 200, function(){
	    	jQuery('.search-box input').css('display', 'none');
	    });
	});
	jQuery('.search').click(function(event){
		jQuery('.search-box input').css('display', 'block').animate({width: 150}, 200);
		jQuery('.search-box input').focus();
		event.preventDefault();
		event.stopPropagation();
	});
}
/* Search Finish */
/* Menu Start */
var BoxmeMenu = function(){
	jQuery('#site-menu').superfish({
		delay:       100,                              // one second delay on mouseout
		animation:   {opacity:'show',height:'show'},   // fade-in and slide-down animation
		speed:       100,                              // animation speed
		speedOut:    50,                                // out animation speed
	});
}
/* Menu Finish */
/* Animation Start */
var BoxmeAnimation = function(){
	jQuery(window).scroll(function() {
		jQuery(".animated-area").each(function() {
			if(jQuery(window).height() + jQuery(window).scrollTop() - jQuery(this).offset().top > 0) {
				jQuery(this).trigger("animate-it");
			}
		});
	});
	jQuery(".animated-area").on("animate-it", function() {
		var cf = jQuery(this);
		cf.find(".animated").each(function() {
			jQuery(this).css("-webkit-animation-duration","0.6s");
			jQuery(this).css("-moz-animation-duration","0.6s");
			jQuery(this).css("-ms-animation-duration","0.6s");
			jQuery(this).css("animation-duration","0.6s");
			jQuery(this).css("-webkit-animation-delay",jQuery(this).attr("data-animation-delay"));
			jQuery(this).css("-moz-animation-delay",jQuery(this).attr("data-animation-delay"));
			jQuery(this).css("-ms-animation-delay",jQuery(this).attr("data-animation-delay"));
			jQuery(this).css("animation-delay",jQuery(this).attr("data-animation-delay"));
			jQuery(this).addClass(jQuery(this).attr("data-animation"));
		});
		
		cf.find(".animated-skills").each(function() {
			jQuery(this).css("width",jQuery(this).attr("data-skills-width"));
		});
		
		BoxmePieChart();
	});
}
/* Animation Finish */
/* Tab Start */
var BoxmeTabs = function(){
	jQuery('.tabbed-area a').click(function (e) {
		e.preventDefault()
		jQuery(this).tab('show')
	})
	jQuery('.panel-style1').click(function(){
		jQuery('.panel-boxme').find('.panel-style1').removeClass('active');	
		jQuery('.panel-boxme').find('.plus-box').html('+');		
		jQuery(this).addClass('active');
		jQuery(this).find('.plus-box').html('-');
	});
}
/* Tab Finish */
/* prettyPhoto Start */
var BoxmeLightbox = function(){
	jQuery("a[class^='prettyPhoto']").prettyPhoto({social_tools:false,deeplinking:false});
}
/* prettyPhoto Finish */
/* Parallax */
var BoxmeParallax = function(){
	jQuery('.parallax-area').parallax("50%", 0.4);
}
/* Parallax */


jQuery(document).ready(function() {
	BoxmeStickyMenu();
	BoxmeScrollTop();
	BoxmeScrollForAnchor();
	BoxmeSearch();
	BoxmeMenu();
	BoxmeAnimation();
	BoxmeTabs();
	BoxmeLightbox();
	BoxmeParallax();


/* Responsive Menu Start */
var navigation = responsiveNav("#responsive-menu", {
	animate: true,        // Boolean: Use CSS3 transitions, true or false
	transition: 400,      // Integer: Speed of the transition, in milliseconds
	label: "",        // String: Label for the navigation toggle
	insert: "after",      // String: Insert the toggle before or after the navigation
	customToggle: "",     // Selector: Specify the ID of a custom toggle
	openPos: "relative",  // String: Position of the opened nav, relative or static
	jsClass: "js",        // String: 'JS enabled' class which is added to <html> el
	init: function(){},   // Function: Init callback
	open: function(){},   // Function: Open callback
	close: function(){}   // Function: Close callback
});
/* Responsive Menu Finish */

jQuery('i[class*="icon-"]').html("");

});
})(jQuery);
jQuery(window).load(function(){
/* Carousels Start */
jQuery(".bqarea").carouFredSel({
	responsive: true,
	auto: false,
	pagination: {
		container: '#cust-lists, #cust-lists2',
		event: 'click',
		anchorBuilder : false
	}
});
jQuery(".prtfl-list").carouFredSel({
	responsive: true,
	scroll: 1,
	auto: true,
	items: {
		width: 340,
		visible: {
			min: 1,
			max: 15
		}
	},
	prev: '#prev',
	next: '#next',
	swipe: {
		onTouch: true
	}
});
jQuery(".about-carousel").carouFredSel({
	responsive: true,
	items: 1,
	scroll: {
        fx: "crossfade"
    },
	auto: true,
	prev: '.prev',
	next: '.next',
	swipe: {
		onTouch: true
	},
	pagination: ".pagination.bullets"
});
var crsldelay = 0;
jQuery("#carousel-style1").carouFredSel({
	responsive: true,
	items: 1,
	scroll: {
		fx: "crossfade"
	},
	auto:true,
	pagination:{
		container: "#carousel-style1-thumb",
		anchorBuilder: function( nr ) {
		crsldelay = crsldelay+0.3;	
			var src = jQuery("img", this).attr( "src" );
			return '<img class="animated" src="' + src + '" data-animation="fadeInUp" data-animation-delay="'+ crsldelay +'s" />';
		}
	}
});
jQuery(".bqarea-style2").carouFredSel({
	responsive: true,
	auto: true,
	scroll:{
		fx: "crossfade"
	},
	onCreate:function(){
		jQuery(this).find('.bq-arrow').html("");
	}
});
/* Carousels Finish */
});


