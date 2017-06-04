(function($) {
	$(document).ready( function () {

		var name, surname, tel, email, country, city, zip, address, date, comments;

		$('input').blur(function() {
			$(this).addClass('input-blur');
		})

		$('#tab2, #btn1').on('click', function() {
			name = $('#name').val();
			surname = $('#surname').val();
			tel = $('#tel').val();
			email = $('#email').val();

			if (name == "" || surname == "" || tel == "" || email == "") {
				stepSuccess = false;
				$('.form-wrap').addClass('error-gradient');
				$('.errorStep2').fadeIn(1000);
				$('#name, #surname, #tel, #email').each(function() {
					if ($(this).val() == "") $(this).addClass('input-blur');
				})
			}
			else {
				stepSuccess = true;
				$('.errorStep2').fadeOut();
				$('.form-wrap').removeClass('error-gradient');
				if ( $('input[name="delivery"]:checked').val() == "Доставка") {
					$('.form').css('height', '570px');
				}
				if ( $('input[name="delivery"]:checked').val() == "Самовывоз") {
					$('.form').css('height', '360px');
				}
				$('.form').find('#tab2, .tab2').addClass('active');
				$('.form').find('#tab1, .tab1').removeClass('active');
			}
		})

		$('#tab1').on('click', function() {
			if (stepSuccess) {
				$('.form').css('height', '400px');
				$('.form').find('#tab1, .tab1').addClass('active');
				$('.form').find('#tab2, .tab2').removeClass('active');
				$('#country').val('');
				$('#city').val('Не выбрано').css({'border-color':'red', 'box-shadow':'0 0 3px red'});
				$('#city + .icon').removeClass('goodSelect').addClass('badSelect');
				$('#zip').val('');
				$('#address').val('');
				$('#date').val('');
				$('#comments').val('');
			}
		})

		$(':radio').on('click', function() {
			if ( $('input[name="delivery"]:checked').val() == "Самовывоз") {
				$('.notDelivery').css('display', 'none');
				$('.form').css('height', '360px');
				$('#country, #city, #zip, #address, #date').each(function() {
					$(this).removeAttr('required');
				})
			}
			else {
				$('.form').css('height', '570px');
				$('.notDelivery').css('display', 'block');
				$('#country, #city, #zip, #address, #date').each(function() {
					$(this).attr('required', '');
				})
			}
		})

		$('#city').change(function() {
			if ($('#city option:selected').val() != "Не выбрано") {
				$('#city').css({'border-color':'green', 'box-shadow':'0 0 3px green'});
				$('#city + .icon').addClass('goodSelect').removeClass('badSelect');
			}
		})

		$('#btn2').on('click', function() {
			country = $('#country').val();
			city = $('#city').val();
			zip = $('#zip').val();
			address = $('#address').val();
			date = $('#date').val();
			comments = $('#comments').val();

			console.log (city);

			$('#city + .icon').removeClass('badSelect');

			if (country == "" || city == "Не выбрано" || zip == "" || address == "" || date == "") {
				stepSend = false;
				$('.form-wrap').addClass('error-gradient');
				$('.errorSend').fadeIn(1000);
				$('#country, #city, #zip, #address, #date').each(function() {
					if ($(this).val() == "" && $('#city').val() === null) {
						$(this).addClass('input-blur');
						$('#city').addClass('input-blur').css({
							'border-color':'red', 'box-shadow':'0 0 3px red'
						});
						$('#city + .icon').addClass('badSelect');
					}
				})
			}
			else {
				stepSend = true;
				$('.errorSend').fadeOut();
				$('.form-wrap').removeClass('error-gradient');
				if ( $('input[name="delivery"]:checked').val() == "Доставка") {
					$('.form').css('height', '550px');
				}
				if ( $('input[name="delivery"]:checked').val() == "Самовывоз") {
					$('.form').css('height', '360px');
				}
				$('.form').find('#tab2, .tab2').addClass('active');
				$('.form').find('#tab1, .tab1').removeClass('active');
			}

		})

		var a = location.hash;
		if (a == "#thanks") {
			setTimeout(function() {
				$('#thanks').fadeOut(1000);
			},5000);
		}
		if (a == "#error") {
			setTimeout(function() {
				$('#error').fadeOut(1000);
			},5000);
		}

	});
})(jQuery);