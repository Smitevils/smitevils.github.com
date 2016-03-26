$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['Page-1', 'Page-2', 'Page-3', 'Page-4', 'Page-5', 'Page-6', 'Page-7', 'Page-8', 'Page-9', 'Page-10'],
		menu: '#myMenu',
		scrollingSpeed: 900,
		afterLoad: function(anchorLink, index){
			var loadedSection = $('#fullpage');
			//using index
			if(index == 1){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
			} else if(index == 2){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
				$('.anchor-1').addClass('on');
			} else if(index == 3){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
				$('.anchor-1').addClass('on');
			} else if(index == 4){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
				$('.anchor-2').addClass('on');
			} else if(index == 5){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
				$('.anchor-2').addClass('on');
			} else if(index == 6){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
				$('.anchor-3').addClass('on');
			} else if(index == 7){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
				$('.anchor-3').addClass('on');
			} else if(index == 8){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
				$('.anchor-3').addClass('on');
			} else if(index == 9){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
				$('.anchor-4').addClass('on');
			} else if(index == 10){
				$('.anchor-1, .anchor-2, .anchor-3, .anchor-4, .anchor-5').removeClass('on');
				$('.anchor-5').addClass('on');
				//
				$('.button').removeClass('fadeInRight animated');
				$('.button').addClass('fadeOutRight animated');
				//
				$('.ui-help__mouse').removeClass('fadeInRight animated');
				$('.ui-help__mouse').addClass('fadeOutRight animated');
				//
				$('.section-form-adress').removeClass('lightSpeedOut animated');
				$('.section-form-adress').addClass('lightSpeedIn animated');
			}
			if(index != 10){
				$('.button').removeClass('fadeOutRight animated');
				$('.button').addClass('fadeInRight animated');
				//
				$('.ui-help__mouse').removeClass('fadeOutRight animated');
				$('.ui-help__mouse').addClass('fadeInRight animated');
				//
				$('.section-form-adress').removeClass('lightSpeedIn animated');
				$('.section-form-adress').addClass('lightSpeedOut animated');
			}
		}
	});
	$('.button').click(function(event) {
		event.preventDefault();
		$.fn.fullpage.moveTo(10);
	});
});

jQuery(document).ready(function($) {
	
	/* скрипт обработки формы */

	$('input[type="submit"]').click(function(event) {
		event.preventDefault();
		if (($('form').find('input[name="name"]').val() == "") || ($('form').find('input[name="phone"]').val() == "")) {
			if ($('form').find('input[name="name"]').val() == "") {
				$('input[name="name"]').css('border-color', '#af0000');
			}
			if ($('form').find('input[name="phone"]').val() == "") {
				$('input[name="phone"]').css('border-color', '#af0000');
			}
		} else {
			sentAjaxMail();
		}
	});

	$('input[type="text"], textarea').click(function() {
		$('input[type="text"]').css('border-color', '#fff');
	});

	/* Отправка сообщения */
	function sentAjaxMail() {
		var type = $('form').attr('method');
		var url = $('form').attr('action');
		var name = $('form').find('input[name="name"]').val();
		var phone = $('form').find('input[name="phone"]').val();
		var comment = $('form').find('textarea[name="comment"]').val();
		/* Ajax */
		$.ajax({
			type: type,
			url: url,
			data: {
				name: name,
				phone: phone,
				text: comment
			},
			success: function(data) {
				$('.section-order h1, .section-order h4, .section-order form').addClass('zoomOutLeft animated');
				$('.request').css('display', 'block');
				$('.request').addClass('zoomInRight animated');
				
			}
		});
	}

	$(document).ready(function() {
		$('input[name="phone"]').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});
	});

});