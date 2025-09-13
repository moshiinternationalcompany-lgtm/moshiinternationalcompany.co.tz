$(document).ready(function() {
	if ($("#demo").length) {
		$("#demo").intlTelInput();
	}
    if($('.tel-mask').length){
        $('.tel-mask').intlTelInput();
    }
	
	if ($('.js-validate').length) {
		$('.js-validate').feelform({
			preventDefaultSubmit: true,
			onSubmit: function(el) {
				
				if(el.data('formid') == 13){
					var subscriptionValue = $(el).find('#submitButtonAccept').is(':focus') ? 'accept' : 'decline';
					$(el).find('input[name="newsSubscription"]').val(subscriptionValue);
				};
				
				sendAjax(el.data('formid'), el, '');
				$('form.js-validate button[type="submit"]').attr('disabled', true);
				
				if(el.data('formid') == 11){
					$('section.default-two-col').css('margin-bottom', '200px');
				};
			},
			clearAfterSubmit: false
		});
	}
	
    $('.fancybox').fancybox({
		helpers: {media: true}		
	});
	
    $('#select_lang').change(function() {
        window.location.href = $(this).val();
    });
    $('.js-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplayHoverPause: false,
        autoplay: 4500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 4
            },
            1140: {
                items: 4
            }
        }
    });
});
var baseWidth = 3810;
var bseHeight = 1677;
$(window).resize(function() {
    if ($('.map-container').length) {
        recalculateMap();
    }
});
$(window).load(function() {
    $('.map-container').addClass('show');
    if ($('.map-container').length) {
        storePositions();
        recalculateMap();
    }
});

function recalculateMap() {
	var curWidth = $('.map-container .map_mainimg').width();
    var scaleFactor = 3 * curWidth / baseWidth;
    var scaleFactorIcons = 3 * curWidth / baseWidth;
    $('.map-container .js-country').each(function() {
        var newLeft = parseInt($(this).data('baseLeft')) * scaleFactor;
        var newTop = parseInt($(this).data('baseTop')) * scaleFactor;
        var newWidth = parseInt($(this).data('baseWidth')) * scaleFactor;
		$(this).css('left', newLeft);
        $(this).css('top', newTop);
		$(this).css('width', newWidth);

        var newHeight = $(this).children('img').eq(0).height();
		if (parseInt($(this).data('baseLeft'))==0){
			$(this).find('.country_pin').css({
            'left': parseInt($(this).data('baseLeft_p'))- 150*((1-(3 * curWidth / baseWidth))+1)+150 + 'px'

        });
		}
		
		if (parseInt($(this).data('baseLeft'))==818,732){
			$(this).find('.country_pin').css({
            'left': parseInt($(this).data('baseLeft_p'))- 150*((1-(3 * curWidth / baseWidth))+1)+150 + 'px',
        });
		}
		
		if (parseInt($(this).data('baseTop'))==291){
			$(this).find('.country_pin').css({
            'top': parseInt($(this).data('baseTop_p'))- 150*((1-(3 * curWidth / baseWidth))+1)+150 + 'px',
        });
		}
		
		if (parseInt($(this).data('baseTop'))==-1){
			$(this).find('.country_pin').css({
            'top': parseInt($(this).data('baseTop_p'))- 300*((1-(3 * curWidth / baseWidth))+1)+300 + 'px',
        });
		}
		
		if ((parseInt($(this).data('baseLeft'))==518)||(parseInt($(this).data('baseLeft'))==692)||(parseInt($(this).data('baseLeft'))==677)||(parseInt($(this).data('baseLeft'))==686)||(parseInt($(this).data('baseLeft'))==640)||(parseInt($(this).data('baseLeft'))==631)||(parseInt($(this).data('baseLeft'))==544)||(parseInt($(this).data('baseLeft'))==678)||(parseInt($(this).data('baseLeft'))==584)||(parseInt($(this).data('baseLeft'))==599)||(parseInt($(this).data('baseLeft'))==657)||(parseInt($(this).data('baseLeft'))==605)||(parseInt($(this).data('baseLeft'))==616)||(parseInt($(this).data('baseLeft'))==631)||(parseInt($(this).data('baseLeft'))==817)){
			$(this).find('.country_pin').css({
            'left': parseInt($(this).data('baseLeft_p'))- 25*((1-(3 * curWidth / baseWidth))+1)+25 + 'px',
        });
		}
		
		$(this).find('.country_pin img').css({
            'width': parseInt($(this).data('baseWidth_img'))* scaleFactor + 'px'

        });
		
		if (parseInt($(this).data('baseLeft'))==970){
			$(this).find('.country_pin').css({
            'left': parseInt($(this).data('baseLeft_p'))- 250*((1-(3 * curWidth / baseWidth))+1)+250 + 'px',
        });
		}
		
		if (parseInt($(this).data('baseTop'))==275){
			$(this).find('.country_pin').css({
            'top': parseInt($(this).data('baseTop_p'))- 200*((1-(3 * curWidth / baseWidth))+1)+200 + 'px',
        });
		}
		
    });
	
	


	
	
}

function storePositions() {
    $('.map-container .js-country').each(function() {
        var curWidth = parseInt($(this).children('div').eq(0).css('left'));
        var curWidth2 = parseInt($(this).css('width'));
        var curHeight = parseInt($(this).children('div').eq(0).css('top'));
        $(this).find('.country_pin').css({
            'left': (curWidth) + 'px',
            'top': (curHeight) + 'px'
        });
        $(this).data('baseLeft', parseInt($(this).css('left')));
        $(this).data('baseTop', parseInt($(this).css('top')));
		$(this).data('baseLeft_p', curWidth);
        $(this).data('baseTop_p', curHeight);
        $(this).data('baseWidth', curWidth2);
        $(this).data('baseWidth_img', parseInt($(this).find('.country_pin img').css('width')));
        $(this).find('.country_pin').hover(function() {
            $(this).siblings('.hover-img').addClass('hovered');
        }, function() {
            $(this).siblings('.hover-img').removeClass('hovered');
        });
        $(this).find('.country_pin').each(function() {
            var popupId = $(this).data('popup-id');
			console.log(popupId);
            if (popupId != undefined && parseInt(popupId) > 0) {} else {
                $(this).css('cursor', ' default');
            }
            $(this).click(function() {
                var popupId = $(this).data('popup-id');
                if (popupId != undefined && parseInt(popupId) > 0) {
                    $.fancybox({
                        href: '#contact-branches-country-' + popupId,
                        type: 'inline',
                        autoDimensions: false,
                        width: 480,
                        height: 540
                    });
                }
                return false;
            });
        });
    });
    $('.map-container .map_mainimg').css('width', '100%');
}
var isBusy = false,
    idHolder = -1,
    formHolder = $();

function sendAjax(id, form, customData) {
    if (!isBusy && id != '') {
        isBusy = true;
        setTimeout(function() {
            isBusy = false;
        }, 1000);
        idHolder = id;
        formHolder = form;
        var dataStr = 'q=assets/snippets/ajaxHandler/ajaxHandler.php&id=' + id + customData;
        if (form.length != '') {
            dataStr += ('&' + form.serialize());
        }
        $.ajax({
            type: 'post',
            url: ajaxUrl,
            data: dataStr,
            cache: false,
            success: function(result) {
                if (result != -1 && result != '') {
                    if (formHolder.length > 0) {
                        formHolder.find('input:not(input[type="hidden"]), textarea, select').val('');
                        var curparent = formHolder.parent();
						
						if(idHolder == 13){
							var newsSubscription = $(formHolder).find('input[name="newsSubscription"]').val();
							var message = '';
							if(newsSubscription === 'accept'){
								message = '<p><img src=/assets/images/rasnoe/ok-18.png>Thank you! You have successfully subscribed to AsstrA news.&#128522;<br></p>';
							}else{
								message = '<p><img src=/assets/images/rasnoe/ok-18.png>Thank you, but you have successfully unsubscribed from AsstrA news.&#128542;<br></p>';
							}
							
							formHolder.remove();
                        	curparent.append('<div class="alert alert-success">' + message + '</div>');
                        	curparent.append('<style>.popup .styled-title{display: none;} #main-form-pop p{display: none;} .get-quote-form em{display: none;} .alert-success p{display: block!important;} .pop-form .container{    padding: 0px 15px!important;}</style>');
							
						}else{
							formHolder.remove();
                       		curparent.append('<div class="alert alert-success">' + formHolder.data('thank') + '</div>');
                        	curparent.append('<style>.popup .styled-title{display: none;} #main-form-pop p{display: none;} .get-quote-form em{display: none;} .alert-success p{display: block!important;} .pop-form .container{    padding: 0px 15px!important;}</style>');
						}
                        
                    }
                } else {
                    alert('ajax error');
                }
            }
        });
    }
}