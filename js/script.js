(function($) {
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}
	
	if($('.one-page-nav').length){
		$('.one-page-nav').onePageNav();
	}
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown > ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}
	
	
	//Main Slider
	if($('.main-slider .tp-banner').length){

		jQuery('.main-slider .tp-banner').show().revolution({
		dottedOverlay:"yes",
		  delay:12000,
		  startwidth:1200,
		  startheight:$('.main-slider').data('slider-height') || 400,
		  hideThumbs:200,
	
		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,
	
		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview4",
	
		  touchenabled:"on",
		  onHoverStop:"off",
	
		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,
	
		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
	
		  keyboardNavigation:"off",
	
		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:20,
	
		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"bottom",
		  soloArrowLeftHOffset:0,
		  soloArrowLeftVOffset:0,
	
		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"bottom",
		  soloArrowRightHOffset:0,
		  soloArrowRightVOffset:0,
	
		  shadow:0,
		  fullWidth:"off",
		  fullScreen:"off",
	
		  spinner:"spinner4",
	
		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,
	
		  shuffle:"off",
	
		  autoHeight:"off",
		  forceFullWidth:"on",
	
		  hideThumbsOnMobile:"on",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"on",
		  hideThumbsUnderResolution:0,
	
		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"",
		  fullScreenOffsetContainer: ""
	  });

		
	}
	
	//Our Team Slider
	if ($('.team-slider').length) {
		$('.team-slider').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 4500,
			smartSpeed: 700,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1140:{
					items:4
				}
			}
		});    		
	}
	
	
	//Sponsors Slider
	if ($('.sponsors-slider').length) {
		$('.sponsors-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 5500,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				},
				1100:{
					items:6
				}
			}
		});    		
	}
	
		if ($('.sponsors-slider2').length) {
		$('.sponsors-slider2').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 5500,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				},
				1100:{
					items:6
				}
			}
		});    		
	}
	//Three Column Slider
	if ($('.column-carousel.three-column').length) {
		$('.column-carousel.three-column').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 6000,
			smartSpeed: 500,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1100:{
					items:3
				}
			}
		
		});    		
	}
	
	
	//News Slider
	if ($('.news-slider').length) {
		$('.news-slider').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplay: 5000,
			smartSpeed: 1000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});    		
	}
	
		// Video Home
$(document).ready(function(){
	
/*var $skr = 0;
window.onscroll = function() {
if($skr == 0){	

$('.accordion-box .acc-btn').removeClass('active');
$('.accordion-box .acc-btn').next('.acc-content').slideUp(500);

$(".active2").addClass("active");
$('.active2').next('.acc-content').slideDown(500);
}
$skr = 1;
} */
	
	
setTimeout(function() {
$('.poll-window2').css("left", "18px");
}, 2000);
})

	// Accordions
	if ($('.accordion-box').length){
		$('.accordion-box .acc-btn').on('click', function() {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(500);
			} else {
				$(this).addClass('active');
				$(this).next('.acc-content').slideDown(500);
			}
		});
	}
	
	
	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}
	
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox();
	}
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	// Google Map Settings
	if($('#map-location').length){
		var map;
		 map = new GMaps({
			el: '#map-location',
			zoom: 14,
			scrollwheel:false,
			//Set Latitude and Longitude Here
			lat: -37.817085,
			lng: 144.955631
		  });
		  
		  //Add map Marker
		  map.addMarker({
			lat: -37.817085,
			lng: 144.955631,
			infoWindow: {
			  content: '<p style="text-align:center;"><strong>Envato</strong><br>Melbourne VIC 3000, Australia</p>'
			}
		 
		});
	}
	
	
	// Scroll to top
	if($('.scroll-to-top').length){
		$(".scroll-to-top").on('click', function() {
		   // animate
		   $('html, body').animate({
			   scrollTop: $('html, body').offset().top
			 }, 1000);
	
		});
	}
	
	$(window).on('scroll', function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= 50) {
			$('.scroll-to-top').fadeIn(300);
		} else {
			$('.scroll-to-top').fadeOut(300);
		}		
	});	
	
	jQuery(document).ready(function () {
//13-10-2020
		//Hook - Выбор транспорта* - getrate_trasport2
var getRtans = $('.container .get-quote-form #getrate_trasport2,#getrate_trasport3');
		var inPutDd = getRtans.find('> div > input');
		inPutDd.addClass('required').prop('type','text').css({'z-index':'-199','position':'absolute'});
		
		
		//Hook - Номер телефона
		//var getPhone = $('.phone_number').val();

			$('[type="submit"]').click(function(e){
				//Телефон
				
				
				//Выбор транспорта
				if(inPutDd.val()===''){
				
					getRtans.css({'border':'1px solid rgb(255, 0, 0)'});
				
				} else {
					getRtans.css({'border':'1px solid rgb(208, 208, 208)'});
				}
				
			});
		//!13-10-2020
    //Откуда local_ot2
	var flags_in = $('.container .get-quote-form #local_ot2');
	var flags_too = $('.container .get-quote-form #local_too2');

    generateFlahs(flags_too,'Country of unloading*');
    generateFlahs(flags_in,'Country of loading*');
		
	var flags_in2 = $('.inner-box #local_ot2');
    var flags_too2 = $('.inner-box #local_too2');

    generateFlahs(flags_too2,'Country of unloading*');
    generateFlahs(flags_in2,'Country of loading*');		

	



    function generateFlahs(selector,title) {

        //get countries
        selector.css('display','none')
        var blockCount = "countriesData_" + selector.attr('id')+Math.random().toString(36).substring(5);
        $('#'+blockCount).remove();

        var tpl = $(`<div class="countrybox" id="${blockCount}">
                    <button style="border-radius: 0px;height: 40px;text-align: left;padding-left: 50px;font-size: 97%;" id="b_${blockCount}" class="btn btn-block btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ${title} <span class="caret"></span></button>
                    <ul aria-labelledby="b_${blockCount}" class="dropdown-menu" style="overflow: hidden; max-height: 220px; overflow-y: auto;"></ul>
                    </div>`);
        selector.after(tpl);
			//13-10-2020
			//Chek field
			selector.css({'z-index':'-1','position':'absolute'});
			$('[type="submit"]').click(function(){
				
				if(selector.find('option:selected').val()===''){	
					$('#'+blockCount).find('button.btn').css({'border':'1px solid rgb(255, 0, 0)'});
				} else {
					$('#'+blockCount).find('button.btn').css({'border':'1px solid rgb(208, 208, 208)'});
				}
			});
			//!13-10-2020
        $.each(selector.find('option'), function (k, v) {
            var name = $.trim($(v).text());
            var flag = 'none'
            var show = true;


            switch (name) {
                case 'Country of loading*':
                case 'Country of unloading*':
                    show = false;

                    break;
                case 'Russia':
                    flag = 'ru';
                    break;
                case "Austria":
                    flag = 'at';
                    break;
                case "Azerbaijan":
                    flag = 'az';
                    break;
                case "Albania":
                    flag = 'al';
                    break;
                case "Andorra":
                    flag = 'ad';
                    break;
                case "Argentina":
                    flag = 'ar';
                    break;
                case "Armenia":
                    flag = 'am';
                    break;
                case "Belarus":
                    flag = 'by';
                    break;
                case "Bosnia and Herzegovina":
                    flag = 'ba';
                    break;
                case "Belgium":
                    flag = 'be';
                    break;
                case "Bulgaria":
                    flag = 'bg';
                    break;
                case "Brazil":
                    flag = 'br';
                    break;
                case "Hungary":
                    flag = 'hu';
                    break;
                case "Vietnam":
                    flag = 'vn';
                    break;
                case "Germany":
                    flag = 'de';
                    break;
                case "Hong Kong":
                    flag = 'hk';
                    break;
                case "Greece":
                    flag = 'gr';
                    break;
                case "Georgia":
                    flag = 'ge';
                    break;
                case "Denmark":
                    flag = 'dk';
                    break;
                case "Egypt":
                    flag = 'eg';
                    break;
                case "Israel":
                    flag = 'il';
                    break;
                case "India":
                    flag = 'in';
                    break;
                case "Indonesia":
                    flag = 'id';
                    break;
                case "Iran":
                    flag = 'ir';
                    break;
                case "Ireland":
                    flag = 'ie';
                    break;
                case "Spain":
                    flag = 'es';
                    break;
                case "Italy":
                    flag = 'it';
                    break;
                case "Kazakhstan":
                    flag = 'kz';
                    break;
                case "Canada":
                    flag = 'ca';
                    break;
                case "Qatar":
                    flag = 'qa';
                    break;
                case "Kyrgyzstan":
                    flag = 'kg';
                    break;
                case "China":
                    flag = 'cn';
                    break;
                case "Korea":
                    flag = 'kr';
                    break;
                case "Latvia":
                    flag = 'lv';
                    break;
                case "Lebanon":
                    flag = 'lb';
                    break;
                case "Lithuania":
                    flag = 'lt';
                    break;
                case "Liechtenstein":
                    flag = 'li';
                    break;
                case "Luxembourg":
                    flag = 'lu';
                    break;
                case "Macedonia":
                    flag = 'mk';
                    break;
                case "Malaysia":
                    flag = 'my';
                    break;
                case "Moldova":
                    flag = 'md';
                    break;
                case "Mongolia":
                    flag = 'mn';
                    break;
                case "Netherlands":
                    flag = 'nl';
                    break;
                case "Norway":
                    flag = 'no';
                    break;
                case "United Arab Emirates":
                    flag = 'ae';
                    break;
                case "Pakistan":
                    flag = 'pk';
                    break;
                case "Poland":
                    flag = 'pl';
                    break;
                case "Portugal":
                    flag = 'pt';
                    break;
                case "Romania":
                    flag = 'ro';
                    break;
                case "Serbia":
                    flag = 'rs';
                    break;
                case "Singapore":
                    flag = 'sg';
                    break;
                case "Slovakia":
                    flag = 'sk';
                    break;
                case "Slovenia":
                    flag = 'sl';
                    break;
                case "United Kingdom":
                    flag = 'gb';
                    break;
                case "United States of America":
                    flag = 'us';
                    break;
                case "Tajikistan":
                    flag = 'tj';
                    break;
                case "Taiwan":
                    flag = 'tw';
                    break;
                case "Turkmenistan":
                    flag = 'tm';
                    break;
                case "Turkey":
                    flag = 'tr';
                    break;
                case "Uzbekistan":
                    flag = 'uz';
                    break;
                case "Ukraine":
                    flag = 'ua';
                    break;
                case "Finland":
                    flag = 'fi';
                    break;
                case "France":
                    flag = 'fr';
                    break;
                case "Croatia":
                    flag = 'hr';
                    break;
                case "Czech Republic":
                    flag = 'cz';
                    break;
                case "Chile":
                    flag = 'cl';
                    break;
                case "Switzerland":
                    flag = 'ch';
                    break;
                case "Sweden":
                    flag = 'se';
                    break;
                case "Estonia":
                    flag = 'ee';
                    break;
                case "Japan":
                    flag = 'jp';
                    break;


                default:
                    flag = 'none';

            }
            if (show) {
                var tplitem = `<li style="list-style-type:none"><a data-flag="${flag}" data-name="${name}" class="clickFlag" href="#"><span class="flag-small flag-${flag}"></span> ${name}</a></li>`;
                $('#' + blockCount + ' ul').append(tplitem);
            }


        });

        $('#'+blockCount).find('.clickFlag').on('click',function () {
            var nameData = $(this).data('name');
            var flagData = $(this).data('flag');
            $('.selDiv option[value="SEL1"]')
            selector.find('option:contains("'+nameData+'")').prop("selected", true).attr("selected", 'selected');
            $('#b_'+blockCount).html(`<span class="flag-small flag-${flagData}"></span> ${nameData} <span class="caret"></span>`);
			$('.countrybox').removeClass('open');
            return false;
        });
		


    }
});
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});
	

})(window.jQuery);