$(document).ready(function() {
	/* Открываем или прячем меню на мобильной версии */
	$('#hamburher-btn').click(function(event) {
		event.preventDefault();
		$('header').toggleClass('active');
		// в зависимости от состояния меню присваиваем анимацию
		if ($('header').hasClass('active')) {
			$('.header__menu-container').addClass('bounceInLeft')
			$('.header__phone-cabinet-container').addClass('bounceInLeft')
		}
	});
	/* если емеется слайдер (главная) откроем второй калькулятор */
	function checkSliderOnPage() {
		if ($('div').is('.slider-container')) {
			$('#calculator-btn-2').addClass('active')
		}
	}
	checkSliderOnPage();
	/* Открываем или прячем калькуляторы */
	function checkCalculatorButtons() {
		if ($('#calculator-btn-1').hasClass('active')) {
			$('#calculator-2').css('display', 'none');
			$('#calculator-1').css('display', 'table');
		} else if ($('#calculator-btn-2').hasClass('active')) {
			$('#calculator-1').css('display', 'none');
			$('#calculator-2').css('display', 'table');
		} else {
			$('#calculator-1').css('display', 'none');
			$('#calculator-2').css('display', 'none');
		}
	}
	checkCalculatorButtons();
	// задаем размер окнам калькулятора
	function checkSizeCalculators() {
		// var windowWidth = $(window).width();
		// console.log(windowWidth)
		$('#calculator-btn-1, #calculator-btn-2').css('width', '50%');

		var calc_btn_w = $('#calculator-btn-1').width();
		calc_btn_w = Math.floor(calc_btn_w)
		$('#calculator-btn-1').width(calc_btn_w-1);

		var calc2_btn_w = $('#calculator-btn-2').width();
		calc2_btn_w = Math.floor(calc2_btn_w)
		$('#calculator-btn-2').width(calc2_btn_w);

		var calculator_first_width = ($('#calculator-btn-1').width() + $('#calculator-btn-2').width() + $('.header__phone-cabinet-container').width());
		$('#calculator-1').outerWidth(calculator_first_width);
		var calculator_second_width = ($('#calculator-btn-2').width() + $('.header__phone-cabinet-container').width())
		$('#calculator-2').outerWidth(calculator_second_width);
		var calculator_second_margin = $('#calculator-btn-1').width();
		$('#calculator-2').css('margin-left', calculator_second_margin);

		//
		
		var shooterpos0 = $('#shooter0').offset().left
		var shooterpos1 = $('#shooter').offset().left

		var windiwwidth = $(window).width()

		calculator_first_width = calculator_first_width + (windiwwidth - shooterpos0)
		$('#calculator-1').outerWidth(calculator_first_width);
		//alert(shooterpos + " " +windiwwidth + " " + calculator_first_width)

		calculator_second_width = calculator_second_width + (windiwwidth - shooterpos1)
		$('#calculator-2').outerWidth(calculator_second_width);
		//alert(shooterpos + " " +windiwwidth + " " + calculator_second_width)

	}
	checkSizeCalculators();
	$(window).resize(function() {
		checkSizeCalculators();
	});
	//
	$('#calculator-btn-1').click(function(event) {
		event.preventDefault();
		if ($('div').is('#slider-fade')) {
			$('#calculator-btn-1').addClass('active')
			$('#calculator-btn-2').removeClass('active')
			checkCalculatorButtons();
			checkSizeCalculators();
		} else {
			if ($('#calculator-btn-1').is('.active')) {
				$('#calculator-btn-1').removeClass('active');
				$('#calculator-btn-2').removeClass('active');
				checkCalculatorButtons();
				checkSizeCalculators();
			} else {
				$('#calculator-btn-1').addClass('active')
				$('#calculator-btn-2').removeClass('active')
				checkCalculatorButtons();
				checkSizeCalculators();
			}
		}
	});
	$('#calculator-btn-2').click(function(event) {
		event.preventDefault();
		if ($('div').is('#slider-fade')) {
			$('#calculator-btn-1').removeClass('active')
			$('#calculator-btn-2').addClass('active')
			checkCalculatorButtons();
			checkSizeCalculators();
		} else {
			if ($('#calculator-btn-2').is('.active')) {
				$('#calculator-btn-1').removeClass('active');
				$('#calculator-btn-2').removeClass('active');
				checkCalculatorButtons();
				checkSizeCalculators();
			} else {
				$('#calculator-btn-2').addClass('active')
				$('#calculator-btn-1').removeClass('active')
				checkCalculatorButtons();
				checkSizeCalculators();
			}
		}
	});
	/* switch 1*/
	$('#calculator-1 span.calculator_switch[data-switch-pos]').click(function(event) {
		event.preventDefault();
		if ($('#calculator-1 span.calculator_switch').attr('data-switch-pos') == 1) {
			$('#calculator-1 span.calculator_switch').attr('data-switch-pos', '2');
		} else if ($('#calculator-1 span.calculator_switch').attr('data-switch-pos') == 2) {
			$('#calculator-1 span.calculator_switch').attr('data-switch-pos', '1');
		}
	});
	/* switch 2*/
	$('#calculator-2 span.calculator_switch[data-switch-pos]').click(function(event) {
		event.preventDefault();
		if ($('#calculator-2 span.calculator_switch').attr('data-switch-pos') == 1) {
			$('#calculator-2 span.calculator_switch').attr('data-switch-pos', '2');
		} else if ($('#calculator-2 span.calculator_switch').attr('data-switch-pos') == 2) {
			$('#calculator-2 span.calculator_switch').attr('data-switch-pos', '1');
		}
	});
	/* Переключаем табы на первом калькуляторе - физ лица*/
	$('#calculator-1 .first-calculator__phisic-faces .calculator__tab').on('click', function(event) {
		event.preventDefault();
		$('#calculator-1 .first-calculator__phisic-faces .calculator__tab').removeClass('active');
		$(this).addClass('active');
	});
	/* Переключаем табы на первом калькуляторе - юр лица*/
	$('#calculator-1 .first-calculator__legal-faces .calculator__tab').on('click', function(event) {
		event.preventDefault();
		$('#calculator-1 .first-calculator__legal-faces .calculator__tab').removeClass('active');
		$(this).addClass('active');
	});
	/* Переключаем табы на втором калькуляторе - физ лица*/
	$('.borrower-calculator-phisic .calculator__tab').on('click', function(event) {
		event.preventDefault();
		$('.borrower-calculator-phisic .calculator__tab').removeClass('active');
		$(this).addClass('active');
	});
	/* Переключаем табы на втором калькуляторе - юр лица*/
	$('.borrower-calculator-legal .calculator__tab').on('click', function(event) {
		event.preventDefault();
		$('.borrower-calculator-legal .calculator__tab').removeClass('active');
		$(this).addClass('active');
	});


	/* создаем слайды на калькулятолре */

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/

	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcInvestor_1_user_summ = 0; // слайдер суммы
	var CalcInvestor_1_user_time = 0; // слайдер период займа
	var CalcInvestor_1_user_percent = 7.5; // слайдер период займа
	var CalcInvestor_1_outcome = 0; // результат

	// Слайд суммы
	var CalcInvestor_1_summ = document.getElementById('CalcInvestor_1_summ'); // Слайд
	// Настройки слайда
	var CalcInvestor_1_summ_Settings = {
		start: [ 10000 ],
		step: 1000,
		range: {
			'min': [ 10000 ],
			'max': [ 50000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcInvestor_1_summ, CalcInvestor_1_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcInvestor_1_summ() {
		// добавляем к точке лейбл
		$('#CalcInvestor_1_summ .noUi-handle').append('<span id="CalcInvestor_1_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestor_1_summ_ValueElement_1 = document.getElementById('CalcInvestor_1_summ_value-1');
		var CalcInvestor_1_summ_ValueElement_2 = document.getElementById('CalcInvestor_1_summ_value-2');

		CalcInvestor_1_summ.noUiSlider.on('update', function( values, handle ) {
			CalcInvestor_1_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestor_1_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestor_1_user_summ = parseInt(values[handle]);
			CalcInvestor_1_result();
		});
	}

	handlerstepCalcInvestor_1_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcInvestor_1_time = document.getElementById('CalcInvestor_1_time'); // Слайд
	// Настройки слайда
	var CalcInvestor_1_time_Settings = {
		start: [ 1 ],
		step: 1,
		range: {
			'min': [ 1 ],
			'max': [ 3 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcInvestor_1_time, CalcInvestor_1_time_Settings); // запускаем слайд

	// функция выдает значения на лейблы
	function handlerstepCalcInvestor_1_time() {
		// добавляем к точке лейбл
		$('#CalcInvestor_1_time .noUi-handle').append('<span id="CalcInvestor_1_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestor_1_time_ValueElement_1 = document.getElementById('CalcInvestor_1_time_value-1');
		var CalcInvestor_1_time_ValueElement_2 = document.getElementById('CalcInvestor_1_time_value-2');

		CalcInvestor_1_time.noUiSlider.on('update', function( values, handle ) {
			CalcInvestor_1_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestor_1_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestor_1_user_time = parseInt(values[handle]);
			CalcInvestor_1_result();
		});
	}

	handlerstepCalcInvestor_1_time();

	// Считаем результат
	function CalcInvestor_1_result() {
		CalcInvestor_1_outcome = parseInt((((CalcInvestor_1_user_summ / 100)*CalcInvestor_1_user_percent)*CalcInvestor_1_user_time) + CalcInvestor_1_user_summ);
		$('#CalcInvestor_1_result').html(CalcInvestor_1_outcome + "<i>руб.</i>");
	}
	CalcInvestor_1_result();

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/

	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcInvestor_2_user_summ = 0; // слайдер суммы
	var CalcInvestor_2_user_time = 0; // слайдер период займа
	var CalcInvestor_2_user_percent = 8; // слайдер период займа
	var CalcInvestor_2_outcome = 0; // результат

	// Слайд суммы
	var CalcInvestor_2_summ = document.getElementById('CalcInvestor_2_summ'); // Слайд
	// Настройки слайда
	var CalcInvestor_2_summ_Settings = {
		start: [ 10000 ],
		step: 1000,
		range: {
			'min': [ 10000 ],
			'max': [ 3000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcInvestor_2_summ, CalcInvestor_2_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcInvestor_2_summ() {
		// добавляем к точке лейбл
		$('#CalcInvestor_2_summ .noUi-handle').append('<span id="CalcInvestor_2_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestor_2_summ_ValueElement_1 = document.getElementById('CalcInvestor_2_summ_value-1');
		var CalcInvestor_2_summ_ValueElement_2 = document.getElementById('CalcInvestor_2_summ_value-2');

		CalcInvestor_2_summ.noUiSlider.on('update', function( values, handle ) {
			CalcInvestor_2_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestor_2_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestor_2_user_summ = parseInt(values[handle]);
			CalcInvestor_2_result();
		});
	}

	handlerstepCalcInvestor_2_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcInvestor_2_time = document.getElementById('CalcInvestor_2_time'); // Слайд
	// Настройки слайда
	var CalcInvestor_2_time_Settings = {
		start: [ 3 ],
		step: 1,
		range: {
			'min': [ 3 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcInvestor_2_time, CalcInvestor_2_time_Settings); // запускаем слайд

	// функция выдает значения на лейблы
	function handlerstepCalcInvestor_2_time() {
		// добавляем к точке лейбл
		$('#CalcInvestor_2_time .noUi-handle').append('<span id="CalcInvestor_2_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestor_2_time_ValueElement_1 = document.getElementById('CalcInvestor_2_time_value-1');
		var CalcInvestor_2_time_ValueElement_2 = document.getElementById('CalcInvestor_2_time_value-2');

		CalcInvestor_2_time.noUiSlider.on('update', function( values, handle ) {
			CalcInvestor_2_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestor_2_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestor_2_user_time = parseInt(values[handle]);
			CalcInvestor_2_result();
		});
	}

	handlerstepCalcInvestor_2_time();

	// Считаем результат
	function CalcInvestor_2_result() {
		CalcInvestor_2_outcome = parseInt((((CalcInvestor_2_user_summ / 100)*CalcInvestor_2_user_percent)*CalcInvestor_2_user_time) + CalcInvestor_2_user_summ);
		$('#CalcInvestor_2_result').html(CalcInvestor_2_outcome + "<i>руб.</i>");
	}
	CalcInvestor_2_result();

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/


	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcInvestor_3_user_summ = 0; // слайдер суммы
	var CalcInvestor_3_user_time = 0; // слайдер период займа
	var CalcInvestor_3_user_percent = 1.75; // слайдер период займа
	var CalcInvestor_3_outcome = 0; // результат

	// Слайд суммы
	var CalcInvestor_3_summ = document.getElementById('CalcInvestor_3_summ'); // Слайд
	// Настройки слайда
	var CalcInvestor_3_summ_Settings = {
		start: [ 10000 ],
		step: 1000,
		range: {
			'min': [ 10000 ],
			'max': [ 1000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcInvestor_3_summ, CalcInvestor_3_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcInvestor_3_summ() {
		// добавляем к точке лейбл
		$('#CalcInvestor_3_summ .noUi-handle').append('<span id="CalcInvestor_3_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestor_3_summ_ValueElement_1 = document.getElementById('CalcInvestor_3_summ_value-1');
		var CalcInvestor_3_summ_ValueElement_2 = document.getElementById('CalcInvestor_3_summ_value-2');

		CalcInvestor_3_summ.noUiSlider.on('update', function( values, handle ) {
			CalcInvestor_3_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestor_3_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestor_3_user_summ = parseInt(values[handle]);
			CalcInvestor_3_result();
		});
	}

	handlerstepCalcInvestor_3_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcInvestor_3_time = document.getElementById('CalcInvestor_3_time'); // Слайд
	// Настройки слайда
	var CalcInvestor_3_time_Settings = {
		start: [ 3 ],
		snap: true,
		range: {
			'min': [ 3 ],
			'50%': [ 6 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	var CalcInvestor_3_time_Settings_2 = {
		start: [ 6 ],
		snap: true,
		range: {
			'min': [ 6 ],
			'50%': [ 9 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	var CalcInvestor_3_time_Settings_3 = {
		start: [ 6 ],
		snap: true,
		range: {
			'min': [ 6 ],
			'50%': [ 9 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcInvestor_3_time, CalcInvestor_3_time_Settings); // запускаем слайд

	CalcInvestor_3_summ.noUiSlider.on('update', function( values, handle ) {
		if (values[handle] <= 100000) {
			//alert("до 100")
			CalcInvestor_3_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestor_3_time, CalcInvestor_3_time_Settings);
			handlerstepCalcInvestor_3_time();
			CalcInvestor_3_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestor_3_percent();
			});
			CalcInvestor_3_result();
		} else if (values[handle] > 100000 && values[handle] < 500000) {
			//alert("до 500")
			CalcInvestor_3_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestor_3_time, CalcInvestor_3_time_Settings_2);
			handlerstepCalcInvestor_3_time();
			CalcInvestor_3_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestor_3_percent();
			});
			CalcInvestor_3_result();
		} else if (values[handle] > 500000 && values[handle] < 1000000) {
			//alert("до 1000")
			CalcInvestor_3_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestor_3_time, CalcInvestor_3_time_Settings_3);
			handlerstepCalcInvestor_3_time();
			CalcInvestor_3_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestor_3_percent();
			});
			CalcInvestor_3_result();
		}
	});

	function checkCalcInvestor_3_percent() {
		parseInt(CalcInvestor_3_user_summ);
		parseInt(CalcInvestor_3_user_time);
		//alert(CalcInvestor_3_user_summ + " " + CalcInvestor_3_user_time)
		if (CalcInvestor_3_user_summ >= 10000 && CalcInvestor_3_user_summ <= 100000 && CalcInvestor_3_user_time == 3) {
			CalcInvestor_3_user_percent = 5.5;
			//alert(CalcInvestor_3_user_percent)
		} else if (CalcInvestor_3_user_summ >= 10000 && CalcInvestor_3_user_summ <= 100000 && CalcInvestor_3_user_time == 6) {
			CalcInvestor_3_user_percent = 6;
			//alert(CalcInvestor_3_user_percent)
		} else if (CalcInvestor_3_user_summ >= 10000 && CalcInvestor_3_user_summ <= 100000 && CalcInvestor_3_user_time == 12) {
			CalcInvestor_3_user_percent = 6.5;
			//alert(CalcInvestor_3_user_percent)
		} else if (CalcInvestor_3_user_summ >= 100000 && CalcInvestor_3_user_summ <= 500000 && CalcInvestor_3_user_time == 6) {
			CalcInvestor_3_user_percent = 6.5;
			//alert(CalcInvestor_3_user_percent)
		} else if (CalcInvestor_3_user_summ >= 100000 && CalcInvestor_3_user_summ <= 500000 && CalcInvestor_3_user_time == 9) {
			CalcInvestor_3_user_percent = 7;
			//alert(CalcInvestor_3_user_percent)
		} else if (CalcInvestor_3_user_summ >= 100000 && CalcInvestor_3_user_summ <= 500000 && CalcInvestor_3_user_time == 12) {
			CalcInvestor_3_user_percent = 7.5;
			//alert(CalcInvestor_3_user_percent)
		} else if (CalcInvestor_3_user_summ >= 500000 && CalcInvestor_3_user_summ <= 1000000 && CalcInvestor_3_user_time == 6) {
			CalcInvestor_3_user_percent = 7;
			//alert(CalcInvestor_3_user_percent)
		} else if (CalcInvestor_3_user_summ >= 500000 && CalcInvestor_3_user_summ <= 1000000 && CalcInvestor_3_user_time == 9) {
			CalcInvestor_3_user_percent = 7.5;
			//alert(CalcInvestor_3_user_percent)
		} else if (CalcInvestor_3_user_summ >= 500000 && CalcInvestor_3_user_summ <= 1000000 && CalcInvestor_3_user_time == 12) {
			CalcInvestor_3_user_percent = 8;
			//alert(CalcInvestor_3_user_percent)
		}
	}

	CalcInvestor_3_summ.noUiSlider.on('update', function( values, handle ) {
		checkCalcInvestor_3_percent();
	});
	CalcInvestor_3_time.noUiSlider.on('update', function( values, handle ) {
		checkCalcInvestor_3_percent();
	});

	// функция выдает значения на лейблы
	function handlerstepCalcInvestor_3_time() {
		// добавляем к точке лейбл
		$('#CalcInvestor_3_time .noUi-handle').append('<span id="CalcInvestor_3_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestor_3_time_ValueElement_1 = document.getElementById('CalcInvestor_3_time_value-1');
		var CalcInvestor_3_time_ValueElement_2 = document.getElementById('CalcInvestor_3_time_value-2');

		CalcInvestor_3_time.noUiSlider.on('update', function( values, handle ) {
			CalcInvestor_3_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestor_3_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestor_3_user_time = parseInt(values[handle]);
			CalcInvestor_3_result();
		});
	}

	handlerstepCalcInvestor_3_time();

	// Считаем результат
	function CalcInvestor_3_result() {
		CalcInvestor_3_outcome = parseInt((((CalcInvestor_3_user_summ / 100)*CalcInvestor_3_user_percent)*CalcInvestor_3_user_time) + CalcInvestor_3_user_summ);
		$('#CalcInvestor_3_result').html(CalcInvestor_3_outcome + "<i>руб.</i>");
	}
	CalcInvestor_3_result();

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/



	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcInvestor_4_user_summ = 0; // слайдер суммы
	var CalcInvestor_4_user_time = 0; // слайдер период займа
	var CalcInvestor_4_user_percent = 1.75; // слайдер период займа
	var CalcInvestor_4_outcome = 0; // результат

	// Слайд суммы
	var CalcInvestor_4_summ = document.getElementById('CalcInvestor_4_summ'); // Слайд
	// Настройки слайда
	var CalcInvestor_4_summ_Settings = {
		start: [ 150000 ],
		step: 10000,
		range: {
			'min': [ 150000 ],
			'max': [ 10000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcInvestor_4_summ, CalcInvestor_4_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcInvestor_4_summ() {
		// добавляем к точке лейбл
		$('#CalcInvestor_4_summ .noUi-handle').append('<span id="CalcInvestor_4_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestor_4_summ_ValueElement_1 = document.getElementById('CalcInvestor_4_summ_value-1');
		var CalcInvestor_4_summ_ValueElement_2 = document.getElementById('CalcInvestor_4_summ_value-2');

		CalcInvestor_4_summ.noUiSlider.on('update', function( values, handle ) {
			CalcInvestor_4_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestor_4_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestor_4_user_summ = parseInt(values[handle]);
			CalcInvestor_4_result();
		});
	}

	handlerstepCalcInvestor_4_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcInvestor_4_time = document.getElementById('CalcInvestor_4_time'); // Слайд
	// Настройки слайда
	var CalcInvestor_4_time_Settings = {
		start: [ 3 ],
		snap: true,
		range: {
			'min': [ 3 ],
			'50%': [ 6 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	var CalcInvestor_4_time_Settings_2 = {
		start: [ 6 ],
		snap: true,
		range: {
			'min': [ 6 ],
			'50%': [ 9 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	var CalcInvestor_4_time_Settings_4 = {
		start: [ 6 ],
		snap: true,
		range: {
			'min': [ 6 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcInvestor_4_time, CalcInvestor_4_time_Settings); // запускаем слайд

	CalcInvestor_4_summ.noUiSlider.on('update', function( values, handle ) {
		if (values[handle] <= 100000) {
			//alert("до 100")
			CalcInvestor_4_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestor_4_time, CalcInvestor_4_time_Settings);
			handlerstepCalcInvestor_4_time();
			CalcInvestor_4_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestor_4_percent();
			});
			CalcInvestor_4_result();
		} else if (values[handle] > 100000 && values[handle] < 500000) {
			//alert("до 500")
			CalcInvestor_4_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestor_4_time, CalcInvestor_4_time_Settings_2);
			handlerstepCalcInvestor_4_time();
			CalcInvestor_4_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestor_4_percent();
			});
			CalcInvestor_4_result();
		} else if (values[handle] > 500000 && values[handle] < 1000000) {
			//alert("до 1000")
			CalcInvestor_4_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestor_4_time, CalcInvestor_4_time_Settings_4);
			handlerstepCalcInvestor_4_time();
			CalcInvestor_4_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestor_4_percent();
			});
			CalcInvestor_4_result();
		}
	});

	function checkCalcInvestor_4_percent() {
		parseInt(CalcInvestor_4_user_summ);
		parseInt(CalcInvestor_4_user_time);
		//alert(CalcInvestor_4_user_summ + " " + CalcInvestor_4_user_time)
		if (CalcInvestor_4_user_summ >= 150000 && CalcInvestor_4_user_summ <= 500000 && CalcInvestor_4_user_time == 3) {
			CalcInvestor_4_user_percent = 7;
			//alert(CalcInvestor_4_user_percent)
		} else if (CalcInvestor_4_user_summ >= 150000 && CalcInvestor_4_user_summ <= 500000 && CalcInvestor_4_user_time == 6) {
			CalcInvestor_4_user_percent = 7.5;
			//alert(CalcInvestor_4_user_percent)
		} else if (CalcInvestor_4_user_summ >= 150000 && CalcInvestor_4_user_summ <= 500000 && CalcInvestor_4_user_time == 12) {
			CalcInvestor_4_user_percent = 8;
			//alert(CalcInvestor_4_user_percent)
		} else if (CalcInvestor_4_user_summ >= 500000 && CalcInvestor_4_user_summ <= 15000000 && CalcInvestor_4_user_time == 6) {
			CalcInvestor_4_user_percent = 7.5;
			//alert(CalcInvestor_4_user_percent)
		} else if (CalcInvestor_4_user_summ >= 500000 && CalcInvestor_4_user_summ <= 15000000 && CalcInvestor_4_user_time == 9) {
			CalcInvestor_4_user_percent = 8;
			//alert(CalcInvestor_4_user_percent)
		} else if (CalcInvestor_4_user_summ >= 500000 && CalcInvestor_4_user_summ <= 15000000 && CalcInvestor_4_user_time == 12) {
			CalcInvestor_4_user_percent = 8.5;
			//alert(CalcInvestor_4_user_percent)
		} else if (CalcInvestor_4_user_summ >= 15000000 && CalcInvestor_4_user_summ <= 10000000 && CalcInvestor_4_user_time == 6) {
			CalcInvestor_4_user_percent = 8;
			//alert(CalcInvestor_4_user_percent)
		} else if (CalcInvestor_4_user_summ >= 15000000 && CalcInvestor_4_user_summ <= 10000000 && CalcInvestor_4_user_time == 12) {
			CalcInvestor_4_user_percent = 8.5;
			//alert(CalcInvestor_4_user_percent)
		}
	}

	CalcInvestor_4_summ.noUiSlider.on('update', function( values, handle ) {
		checkCalcInvestor_4_percent();
	});
	CalcInvestor_4_time.noUiSlider.on('update', function( values, handle ) {
		checkCalcInvestor_4_percent();
	});

	// функция выдает значения на лейблы
	function handlerstepCalcInvestor_4_time() {
		// добавляем к точке лейбл
		$('#CalcInvestor_4_time .noUi-handle').append('<span id="CalcInvestor_4_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestor_4_time_ValueElement_1 = document.getElementById('CalcInvestor_4_time_value-1');
		var CalcInvestor_4_time_ValueElement_2 = document.getElementById('CalcInvestor_4_time_value-2');

		CalcInvestor_4_time.noUiSlider.on('update', function( values, handle ) {
			CalcInvestor_4_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestor_4_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestor_4_user_time = parseInt(values[handle]);
			CalcInvestor_4_result();
		});
	}

	handlerstepCalcInvestor_4_time();

	// Считаем результат
	function CalcInvestor_4_result() {
		CalcInvestor_4_outcome = parseInt((((CalcInvestor_4_user_summ / 100)*CalcInvestor_4_user_percent)*CalcInvestor_4_user_time) + CalcInvestor_4_user_summ);
		$('#CalcInvestor_4_result').html(CalcInvestor_4_outcome + "<i>руб.</i>");
	}
	CalcInvestor_4_result();

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/






























	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcInvestorLegal_1_user_summ = 0; // слайдер суммы
	var CalcInvestorLegal_1_user_time = 0; // слайдер период займа
	var CalcInvestorLegal_1_user_percent = 8; // слайдер период займа
	var CalcInvestorLegal_1_outcome = 0; // результат

	// Слайд суммы
	var CalcInvestorLegal_1_summ = document.getElementById('CalcInvestorLegal_1_summ'); // Слайд
	// Настройки слайда
	var CalcInvestorLegal_1_summ_Settings = {
		start: [ 10000 ],
		step: 1000,
		range: {
			'min': [ 10000 ],
			'max': [ 3000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcInvestorLegal_1_summ, CalcInvestorLegal_1_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcInvestorLegal_1_summ() {
		// добавляем к точке лейбл
		$('#CalcInvestorLegal_1_summ .noUi-handle').append('<span id="CalcInvestorLegal_1_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestorLegal_1_summ_ValueElement_1 = document.getElementById('CalcInvestorLegal_1_summ_value-1');
		var CalcInvestorLegal_1_summ_ValueElement_2 = document.getElementById('CalcInvestorLegal_1_summ_value-2');

		CalcInvestorLegal_1_summ.noUiSlider.on('update', function( values, handle ) {
			CalcInvestorLegal_1_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_1_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_1_user_summ = parseInt(values[handle]);
			CalcInvestorLegal_1_result();
		});
	}

	handlerstepCalcInvestorLegal_1_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcInvestorLegal_1_time = document.getElementById('CalcInvestorLegal_1_time'); // Слайд
	// Настройки слайда
	var CalcInvestorLegal_1_time_Settings = {
		start: [ 3 ],
		step: 1,
		range: {
			'min': [ 3 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcInvestorLegal_1_time, CalcInvestorLegal_1_time_Settings); // запускаем слайд

	// функция выдает значения на лейблы
	function handlerstepCalcInvestorLegal_1_time() {
		// добавляем к точке лейбл
		$('#CalcInvestorLegal_1_time .noUi-handle').append('<span id="CalcInvestorLegal_1_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestorLegal_1_time_ValueElement_1 = document.getElementById('CalcInvestorLegal_1_time_value-1');
		var CalcInvestorLegal_1_time_ValueElement_2 = document.getElementById('CalcInvestorLegal_1_time_value-2');

		CalcInvestorLegal_1_time.noUiSlider.on('update', function( values, handle ) {
			CalcInvestorLegal_1_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_1_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_1_user_time = parseInt(values[handle]);
			CalcInvestorLegal_1_result();
		});
	}

	handlerstepCalcInvestorLegal_1_time();

	// Считаем результат
	function CalcInvestorLegal_1_result() {
		CalcInvestorLegal_1_outcome = parseInt((((CalcInvestorLegal_1_user_summ / 100)*CalcInvestorLegal_1_user_percent)*CalcInvestorLegal_1_user_time) + CalcInvestorLegal_1_user_summ);
		$('#CalcInvestorLegal_1_result').html(CalcInvestorLegal_1_outcome + "<i>руб.</i>");
	}
	CalcInvestorLegal_1_result();

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/


	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcInvestorLegal_2_user_summ = 0; // слайдер суммы
	var CalcInvestorLegal_2_user_time = 0; // слайдер период займа
	var CalcInvestorLegal_2_user_percent = 1.75; // слайдер период займа
	var CalcInvestorLegal_2_outcome = 0; // результат

	// Слайд суммы
	var CalcInvestorLegal_2_summ = document.getElementById('CalcInvestorLegal_2_summ'); // Слайд
	// Настройки слайда
	var CalcInvestorLegal_2_summ_Settings = {
		start: [ 10000 ],
		step: 1000,
		range: {
			'min': [ 10000 ],
			'max': [ 1000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcInvestorLegal_2_summ, CalcInvestorLegal_2_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcInvestorLegal_2_summ() {
		// добавляем к точке лейбл
		$('#CalcInvestorLegal_2_summ .noUi-handle').append('<span id="CalcInvestorLegal_2_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestorLegal_2_summ_ValueElement_1 = document.getElementById('CalcInvestorLegal_2_summ_value-1');
		var CalcInvestorLegal_2_summ_ValueElement_2 = document.getElementById('CalcInvestorLegal_2_summ_value-2');

		CalcInvestorLegal_2_summ.noUiSlider.on('update', function( values, handle ) {
			CalcInvestorLegal_2_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_2_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_2_user_summ = parseInt(values[handle]);
			CalcInvestorLegal_2_result();
		});
	}

	handlerstepCalcInvestorLegal_2_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcInvestorLegal_2_time = document.getElementById('CalcInvestorLegal_2_time'); // Слайд
	// Настройки слайда
	var CalcInvestorLegal_2_time_Settings = {
		start: [ 3 ],
		snap: true,
		range: {
			'min': [ 3 ],
			'50%': [ 6 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	var CalcInvestorLegal_2_time_Settings_2 = {
		start: [ 6 ],
		snap: true,
		range: {
			'min': [ 6 ],
			'50%': [ 9 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	var CalcInvestorLegal_2_time_Settings_3 = {
		start: [ 6 ],
		snap: true,
		range: {
			'min': [ 6 ],
			'50%': [ 9 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcInvestorLegal_2_time, CalcInvestorLegal_2_time_Settings); // запускаем слайд

	CalcInvestorLegal_2_summ.noUiSlider.on('update', function( values, handle ) {
		if (values[handle] <= 100000) {
			//alert("до 100")
			CalcInvestorLegal_2_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestorLegal_2_time, CalcInvestorLegal_2_time_Settings);
			handlerstepCalcInvestorLegal_2_time();
			CalcInvestorLegal_2_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestorLegal_2_percent();
			});
			CalcInvestorLegal_2_result();
		} else if (values[handle] > 100000 && values[handle] < 500000) {
			//alert("до 500")
			CalcInvestorLegal_2_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestorLegal_2_time, CalcInvestorLegal_2_time_Settings_2);
			handlerstepCalcInvestorLegal_2_time();
			CalcInvestorLegal_2_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestorLegal_2_percent();
			});
			CalcInvestorLegal_2_result();
		} else if (values[handle] > 500000 && values[handle] < 1000000) {
			//alert("до 1000")
			CalcInvestorLegal_2_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestorLegal_2_time, CalcInvestorLegal_2_time_Settings_3);
			handlerstepCalcInvestorLegal_2_time();
			CalcInvestorLegal_2_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestorLegal_2_percent();
			});
			CalcInvestorLegal_2_result();
		}
	});

	function checkCalcInvestorLegal_2_percent() {
		parseInt(CalcInvestorLegal_2_user_summ);
		parseInt(CalcInvestorLegal_2_user_time);
		//alert(CalcInvestorLegal_2_user_summ + " " + CalcInvestorLegal_2_user_time)
		if (CalcInvestorLegal_2_user_summ >= 10000 && CalcInvestorLegal_2_user_summ <= 100000 && CalcInvestorLegal_2_user_time == 3) {
			CalcInvestorLegal_2_user_percent = 5.5;
			//alert(CalcInvestorLegal_2_user_percent)
		} else if (CalcInvestorLegal_2_user_summ >= 10000 && CalcInvestorLegal_2_user_summ <= 100000 && CalcInvestorLegal_2_user_time == 6) {
			CalcInvestorLegal_2_user_percent = 6;
			//alert(CalcInvestorLegal_2_user_percent)
		} else if (CalcInvestorLegal_2_user_summ >= 10000 && CalcInvestorLegal_2_user_summ <= 100000 && CalcInvestorLegal_2_user_time == 12) {
			CalcInvestorLegal_2_user_percent = 6.5;
			//alert(CalcInvestorLegal_2_user_percent)
		} else if (CalcInvestorLegal_2_user_summ >= 100000 && CalcInvestorLegal_2_user_summ <= 500000 && CalcInvestorLegal_2_user_time == 6) {
			CalcInvestorLegal_2_user_percent = 6.5;
			//alert(CalcInvestorLegal_2_user_percent)
		} else if (CalcInvestorLegal_2_user_summ >= 100000 && CalcInvestorLegal_2_user_summ <= 500000 && CalcInvestorLegal_2_user_time == 9) {
			CalcInvestorLegal_2_user_percent = 7;
			//alert(CalcInvestorLegal_2_user_percent)
		} else if (CalcInvestorLegal_2_user_summ >= 100000 && CalcInvestorLegal_2_user_summ <= 500000 && CalcInvestorLegal_2_user_time == 12) {
			CalcInvestorLegal_2_user_percent = 7.5;
			//alert(CalcInvestorLegal_2_user_percent)
		} else if (CalcInvestorLegal_2_user_summ >= 500000 && CalcInvestorLegal_2_user_summ <= 1000000 && CalcInvestorLegal_2_user_time == 6) {
			CalcInvestorLegal_2_user_percent = 7;
			//alert(CalcInvestorLegal_2_user_percent)
		} else if (CalcInvestorLegal_2_user_summ >= 500000 && CalcInvestorLegal_2_user_summ <= 1000000 && CalcInvestorLegal_2_user_time == 9) {
			CalcInvestorLegal_2_user_percent = 7.5;
			//alert(CalcInvestorLegal_2_user_percent)
		} else if (CalcInvestorLegal_2_user_summ >= 500000 && CalcInvestorLegal_2_user_summ <= 1000000 && CalcInvestorLegal_2_user_time == 12) {
			CalcInvestorLegal_2_user_percent = 8;
			//alert(CalcInvestorLegal_2_user_percent)
		}
	}

	CalcInvestorLegal_2_summ.noUiSlider.on('update', function( values, handle ) {
		checkCalcInvestorLegal_2_percent();
	});
	CalcInvestorLegal_2_time.noUiSlider.on('update', function( values, handle ) {
		checkCalcInvestorLegal_2_percent();
	});

	// функция выдает значения на лейблы
	function handlerstepCalcInvestorLegal_2_time() {
		// добавляем к точке лейбл
		$('#CalcInvestorLegal_2_time .noUi-handle').append('<span id="CalcInvestorLegal_2_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestorLegal_2_time_ValueElement_1 = document.getElementById('CalcInvestorLegal_2_time_value-1');
		var CalcInvestorLegal_2_time_ValueElement_2 = document.getElementById('CalcInvestorLegal_2_time_value-2');

		CalcInvestorLegal_2_time.noUiSlider.on('update', function( values, handle ) {
			CalcInvestorLegal_2_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_2_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_2_user_time = parseInt(values[handle]);
			CalcInvestorLegal_2_result();
		});
	}

	handlerstepCalcInvestorLegal_2_time();

	// Считаем результат
	function CalcInvestorLegal_2_result() {
		CalcInvestorLegal_2_outcome = parseInt((((CalcInvestorLegal_2_user_summ / 100)*CalcInvestorLegal_2_user_percent)*CalcInvestorLegal_2_user_time) + CalcInvestorLegal_2_user_summ);
		$('#CalcInvestorLegal_2_result').html(CalcInvestorLegal_2_outcome + "<i>руб.</i>");
	}
	CalcInvestorLegal_2_result();

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/



	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcInvestorLegal_3_user_summ = 0; // слайдер суммы
	var CalcInvestorLegal_3_user_time = 0; // слайдер период займа
	var CalcInvestorLegal_3_user_percent = 1.75; // слайдер период займа
	var CalcInvestorLegal_3_outcome = 0; // результат

	// Слайд суммы
	var CalcInvestorLegal_3_summ = document.getElementById('CalcInvestorLegal_3_summ'); // Слайд
	// Настройки слайда
	var CalcInvestorLegal_3_summ_Settings = {
		start: [ 150000 ],
		step: 10000,
		range: {
			'min': [ 150000 ],
			'max': [ 10000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcInvestorLegal_3_summ, CalcInvestorLegal_3_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcInvestorLegal_3_summ() {
		// добавляем к точке лейбл
		$('#CalcInvestorLegal_3_summ .noUi-handle').append('<span id="CalcInvestorLegal_3_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestorLegal_3_summ_ValueElement_1 = document.getElementById('CalcInvestorLegal_3_summ_value-1');
		var CalcInvestorLegal_3_summ_ValueElement_2 = document.getElementById('CalcInvestorLegal_3_summ_value-2');

		CalcInvestorLegal_3_summ.noUiSlider.on('update', function( values, handle ) {
			CalcInvestorLegal_3_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_3_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_3_user_summ = parseInt(values[handle]);
			CalcInvestorLegal_3_result();
		});
	}

	handlerstepCalcInvestorLegal_3_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcInvestorLegal_3_time = document.getElementById('CalcInvestorLegal_3_time'); // Слайд
	// Настройки слайда
	var CalcInvestorLegal_3_time_Settings = {
		start: [ 3 ],
		snap: true,
		range: {
			'min': [ 3 ],
			'50%': [ 6 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	var CalcInvestorLegal_3_time_Settings_2 = {
		start: [ 6 ],
		snap: true,
		range: {
			'min': [ 6 ],
			'50%': [ 9 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	var CalcInvestorLegal_3_time_Settings_4 = {
		start: [ 6 ],
		snap: true,
		range: {
			'min': [ 6 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcInvestorLegal_3_time, CalcInvestorLegal_3_time_Settings); // запускаем слайд

	CalcInvestorLegal_3_summ.noUiSlider.on('update', function( values, handle ) {
		if (values[handle] <= 100000) {
			//alert("до 100")
			CalcInvestorLegal_3_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestorLegal_3_time, CalcInvestorLegal_3_time_Settings);
			handlerstepCalcInvestorLegal_3_time();
			CalcInvestorLegal_3_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestorLegal_3_percent();
			});
			CalcInvestorLegal_3_result();
		} else if (values[handle] > 100000 && values[handle] < 500000) {
			//alert("до 500")
			CalcInvestorLegal_3_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestorLegal_3_time, CalcInvestorLegal_3_time_Settings_2);
			handlerstepCalcInvestorLegal_3_time();
			CalcInvestorLegal_3_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestorLegal_3_percent();
			});
			CalcInvestorLegal_3_result();
		} else if (values[handle] > 500000 && values[handle] < 1000000) {
			//alert("до 1000")
			CalcInvestorLegal_3_time.noUiSlider.destroy();
			noUiSlider.create(CalcInvestorLegal_3_time, CalcInvestorLegal_3_time_Settings_4);
			handlerstepCalcInvestorLegal_3_time();
			CalcInvestorLegal_3_time.noUiSlider.on('update', function( values, handle ) {
				checkCalcInvestorLegal_3_percent();
			});
			CalcInvestorLegal_3_result();
		}
	});

	function checkCalcInvestorLegal_3_percent() {
		parseInt(CalcInvestorLegal_3_user_summ);
		parseInt(CalcInvestorLegal_3_user_time);
		//alert(CalcInvestorLegal_3_user_summ + " " + CalcInvestorLegal_3_user_time)
		if (CalcInvestorLegal_3_user_summ >= 150000 && CalcInvestorLegal_3_user_summ <= 500000 && CalcInvestorLegal_3_user_time == 3) {
			CalcInvestorLegal_3_user_percent = 7;
			//alert(CalcInvestorLegal_3_user_percent)
		} else if (CalcInvestorLegal_3_user_summ >= 150000 && CalcInvestorLegal_3_user_summ <= 500000 && CalcInvestorLegal_3_user_time == 6) {
			CalcInvestorLegal_3_user_percent = 7.5;
			//alert(CalcInvestorLegal_3_user_percent)
		} else if (CalcInvestorLegal_3_user_summ >= 150000 && CalcInvestorLegal_3_user_summ <= 500000 && CalcInvestorLegal_3_user_time == 12) {
			CalcInvestorLegal_3_user_percent = 8;
			//alert(CalcInvestorLegal_3_user_percent)
		} else if (CalcInvestorLegal_3_user_summ >= 500000 && CalcInvestorLegal_3_user_summ <= 15000000 && CalcInvestorLegal_3_user_time == 6) {
			CalcInvestorLegal_3_user_percent = 7.5;
			//alert(CalcInvestorLegal_3_user_percent)
		} else if (CalcInvestorLegal_3_user_summ >= 500000 && CalcInvestorLegal_3_user_summ <= 15000000 && CalcInvestorLegal_3_user_time == 9) {
			CalcInvestorLegal_3_user_percent = 8;
			//alert(CalcInvestorLegal_3_user_percent)
		} else if (CalcInvestorLegal_3_user_summ >= 500000 && CalcInvestorLegal_3_user_summ <= 15000000 && CalcInvestorLegal_3_user_time == 12) {
			CalcInvestorLegal_3_user_percent = 8.5;
			//alert(CalcInvestorLegal_3_user_percent)
		} else if (CalcInvestorLegal_3_user_summ >= 15000000 && CalcInvestorLegal_3_user_summ <= 10000000 && CalcInvestorLegal_3_user_time == 6) {
			CalcInvestorLegal_3_user_percent = 8;
			//alert(CalcInvestorLegal_3_user_percent)
		} else if (CalcInvestorLegal_3_user_summ >= 15000000 && CalcInvestorLegal_3_user_summ <= 10000000 && CalcInvestorLegal_3_user_time == 12) {
			CalcInvestorLegal_3_user_percent = 8.5;
			//alert(CalcInvestorLegal_3_user_percent)
		}
	}

	CalcInvestorLegal_3_summ.noUiSlider.on('update', function( values, handle ) {
		checkCalcInvestorLegal_3_percent();
	});
	CalcInvestorLegal_3_time.noUiSlider.on('update', function( values, handle ) {
		checkCalcInvestorLegal_3_percent();
	});

	// функция выдает значения на лейблы
	function handlerstepCalcInvestorLegal_3_time() {
		// добавляем к точке лейбл
		$('#CalcInvestorLegal_3_time .noUi-handle').append('<span id="CalcInvestorLegal_3_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcInvestorLegal_3_time_ValueElement_1 = document.getElementById('CalcInvestorLegal_3_time_value-1');
		var CalcInvestorLegal_3_time_ValueElement_2 = document.getElementById('CalcInvestorLegal_3_time_value-2');

		CalcInvestorLegal_3_time.noUiSlider.on('update', function( values, handle ) {
			CalcInvestorLegal_3_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_3_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcInvestorLegal_3_user_time = parseInt(values[handle]);
			CalcInvestorLegal_3_result();
		});
	}

	handlerstepCalcInvestorLegal_3_time();

	// Считаем результат
	function CalcInvestorLegal_3_result() {
		CalcInvestorLegal_3_outcome = parseInt((((CalcInvestorLegal_3_user_summ / 100)*CalcInvestorLegal_3_user_percent)*CalcInvestorLegal_3_user_time) + CalcInvestorLegal_3_user_summ);
		$('#CalcInvestorLegal_3_result').html(CalcInvestorLegal_3_outcome + "<i>руб.</i>");
	}
	CalcInvestorLegal_3_result();

/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/








































/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/

	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcBorrower_1_user_summ = 0; // слайдер суммы
	var CalcBorrower_1_user_time = 0; // слайдер период займа
	var CalcBorrower_1_user_percent = 1.75; // слайдер период займа
	var CalcBorrower_1_outcome = 0; // результат

	// Слайд суммы
	var CalcBorrower_1_summ = document.getElementById('CalcBorrower_1_summ'); // Слайд
	// Настройки слайда
	var CalcBorrower_1_summ_Settings = {
		start: [ 5000 ],
		step: 1000,
		range: {
			'min': [ 5000 ],
			'max': [ 50000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcBorrower_1_summ, CalcBorrower_1_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcBorrower_1_summ() {
		// добавляем к точке лейбл
		$('#CalcBorrower_1_summ .noUi-handle').append('<span id="CalcBorrower_1_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrower_1_summ_ValueElement_1 = document.getElementById('CalcBorrower_1_summ_value-1');
		var CalcBorrower_1_summ_ValueElement_2 = document.getElementById('CalcBorrower_1_summ_value-2');

		CalcBorrower_1_summ.noUiSlider.on('update', function( values, handle ) {
			CalcBorrower_1_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrower_1_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrower_1_user_summ = parseInt(values[handle]);
			CalcBorrower_1_result();
		});
	}

	handlerstepCalcBorrower_1_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcBorrower_1_time = document.getElementById('CalcBorrower_1_time'); // Слайд
	// Настройки слайда
	var CalcBorrower_1_time_Settings = {
		start: [ 7 ],
		step: 1,
		range: {
			'min': [ 7 ],
			'max': [ 20 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcBorrower_1_time, CalcBorrower_1_time_Settings); // запускаем слайд

	// функция выдает значения на лейблы
	function handlerstepCalcBorrower_1_time() {
		// добавляем к точке лейбл
		$('#CalcBorrower_1_time .noUi-handle').append('<span id="CalcBorrower_1_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrower_1_time_ValueElement_1 = document.getElementById('CalcBorrower_1_time_value-1');
		var CalcBorrower_1_time_ValueElement_2 = document.getElementById('CalcBorrower_1_time_value-2');

		CalcBorrower_1_time.noUiSlider.on('update', function( values, handle ) {
			CalcBorrower_1_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrower_1_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrower_1_user_time = parseInt(values[handle]);
			CalcBorrower_1_result();
		});
	}

	handlerstepCalcBorrower_1_time();

	// Считаем результат
	function CalcBorrower_1_result() {
		//CalcBorrower_1_outcome = parseInt((((CalcBorrower_1_user_summ / 100)*CalcBorrower_1_user_percent)*CalcBorrower_1_user_time) + CalcBorrower_2_user_summ);
		CalcBorrower_1_outcome = parseInt((((CalcBorrower_1_user_summ / 100)*CalcBorrower_1_user_percent)*CalcBorrower_1_user_time) + CalcBorrower_1_user_summ);
		$('#CalcBorrower_1_result').html(CalcBorrower_1_outcome + "<i>руб.</i>");

	}
	CalcBorrower_1_result();


/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/


	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcBorrower_2_user_summ = 0; // слайдер суммы
	var CalcBorrower_2_user_time = 0; // слайдер период займа
	var CalcBorrower_2_user_percent = 7; // слайдер период займа
	var CalcBorrower_2_outcome; // результат
	var CalcBorrower_2_period; // период
	var CalcBorrower_2_summ // сумма


	// Слайд суммы
	var CalcBorrower_2_summ = document.getElementById('CalcBorrower_2_summ'); // Слайд
	// Настройки слайда
	var CalcBorrower_2_summ_Settings = {
		start: [ 100000 ],
		step: 50000,
		range: {
			'min': [ 100000 ],
			'max': [ 10000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcBorrower_2_summ, CalcBorrower_2_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcBorrower_2_summ() {
		// добавляем к точке лейбл
		$('#CalcBorrower_2_summ .noUi-handle').append('<span id="CalcBorrower_2_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrower_2_summ_ValueElement_1 = document.getElementById('CalcBorrower_2_summ_value-1');
		var CalcBorrower_2_summ_ValueElement_2 = document.getElementById('CalcBorrower_2_summ_value-2');

		CalcBorrower_2_summ.noUiSlider.on('update', function( values, handle ) {
			CalcBorrower_2_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrower_2_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrower_2_user_summ = parseInt(values[handle]);
			CalcBorrower_2_summ = parseInt(values[handle]);
			CalcBorrower_2_result();
		});
	}

	handlerstepCalcBorrower_2_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcBorrower_2_time = document.getElementById('CalcBorrower_2_time'); // Слайд
	// Настройки слайда
	var CalcBorrower_2_time_Settings = {
		start: [ 3 ],
		step: 1,
		range: {
			'min': [ 3 ],
			'max': [ 60 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcBorrower_2_time, CalcBorrower_2_time_Settings); // запускаем слайд

	// функция выдает значения на лейблы
	function handlerstepCalcBorrower_2_time() {
		// добавляем к точке лейбл
		$('#CalcBorrower_2_time .noUi-handle').append('<span id="CalcBorrower_2_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrower_2_time_ValueElement_1 = document.getElementById('CalcBorrower_2_time_value-1');
		var CalcBorrower_2_time_ValueElement_2 = document.getElementById('CalcBorrower_2_time_value-2');

		CalcBorrower_2_time.noUiSlider.on('update', function( values, handle ) {
			CalcBorrower_2_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrower_2_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrower_2_user_time = parseInt(values[handle]);
			CalcBorrower_2_period = parseInt(values[handle]);
			//alert(CalcBorrower_2_period)
			CalcBorrower_2_result();
		});
	}

	handlerstepCalcBorrower_2_time();

	// Считаем результат
	function CalcBorrower_2_result() {
		CalcBorrower_2_outcome = (((CalcBorrower_2_user_summ / 100)*CalcBorrower_2_user_percent)*CalcBorrower_2_user_time) + CalcBorrower_2_user_summ;
		var rate = CalcBorrower_2_user_percent;
		var periods = CalcBorrower_2_period;
		var value = CalcBorrower_2_summ;
		var start = 1;
		var end = CalcBorrower_2_period;
		var type = 0;
		//CalcBorrower_2_outcome = CUMIPMT(rate, periods, value, start, end, type);
		$('#CalcBorrower_2_result').html(CalcBorrower_2_outcome + "<i>руб.</i>");
	}
	CalcBorrower_2_result();


/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/

	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcBorrower_3_user_summ = 0; // слайдер суммы
	var CalcBorrower_3_user_time = 0; // слайдер период займа
	var CalcBorrower_3_user_percent = 1.8; // слайдер период займа
	var CalcBorrower_3_outcome; // результат


	// Слайд суммы
	var CalcBorrower_3_summ = document.getElementById('CalcBorrower_3_summ'); // Слайд
	// Настройки слайда
	var CalcBorrower_3_summ_Settings = {
		start: [ 100000 ],
		step: 50000,
		range: {
			'min': [ 100000 ],
			'max': [ 2000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcBorrower_3_summ, CalcBorrower_3_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcBorrower_3_summ() {
		// добавляем к точке лейбл
		$('#CalcBorrower_3_summ .noUi-handle').append('<span id="CalcBorrower_3_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrower_3_summ_ValueElement_1 = document.getElementById('CalcBorrower_3_summ_value-1');
		var CalcBorrower_3_summ_ValueElement_2 = document.getElementById('CalcBorrower_3_summ_value-2');

		CalcBorrower_3_summ.noUiSlider.on('update', function( values, handle ) {
			CalcBorrower_3_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrower_3_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrower_3_user_summ = parseInt(values[handle]);
			CalcBorrower_3_result();
		});
	}

	handlerstepCalcBorrower_3_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcBorrower_3_time = document.getElementById('CalcBorrower_3_time'); // Слайд
	// Настройки слайда
	var CalcBorrower_3_time_Settings = {
		start: [ 1 ],
		step: 1,
		range: {
			'min': [ 1 ],
			'max': [ 12 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcBorrower_3_time, CalcBorrower_3_time_Settings); // запускаем слайд

	// функция выдает значения на лейблы
	function handlerstepCalcBorrower_3_time() {
		// добавляем к точке лейбл
		$('#CalcBorrower_3_time .noUi-handle').append('<span id="CalcBorrower_3_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrower_3_time_ValueElement_1 = document.getElementById('CalcBorrower_3_time_value-1');
		var CalcBorrower_3_time_ValueElement_2 = document.getElementById('CalcBorrower_3_time_value-2');

		CalcBorrower_3_time.noUiSlider.on('update', function( values, handle ) {
			CalcBorrower_3_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrower_3_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrower_3_user_time = parseInt(values[handle]);
			CalcBorrower_3_result();
		});
	}

	handlerstepCalcBorrower_3_time();

	// Считаем результат
	function CalcBorrower_3_result() {
		CalcBorrower_3_outcome = (((CalcBorrower_3_user_summ / 100)*CalcBorrower_3_user_percent)*CalcBorrower_3_user_time) + CalcBorrower_3_user_summ;
		$('#CalcBorrower_3_result').html(CalcBorrower_3_outcome + "<i>руб.</i>");
	}
	CalcBorrower_3_result();


/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/

	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcBorrowerLegal_1_user_summ = 0; // слайдер суммы
	var CalcBorrowerLegal_1_user_time = 0; // слайдер период займа
	var CalcBorrowerLegal_1_user_percent = 2; // слайдер период займа
	var CalcBorrowerLegal_1_outcome = 0; // результат

	// Слайд суммы
	var CalcBorrowerLegal_1_summ = document.getElementById('CalcBorrowerLegal_1_summ'); // Слайд
	// Настройки слайда
	var CalcBorrowerLegal_1_summ_Settings = {
		start: [ 150000 ],
		step: 50000,
		range: {
			'min': [ 150000 ],
			'max': [ 1000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcBorrowerLegal_1_summ, CalcBorrowerLegal_1_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcBorrowerLegal_1_summ() {
		// добавляем к точке лейбл
		$('#CalcBorrowerLegal_1_summ .noUi-handle').append('<span id="CalcBorrowerLegal_1_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrowerLegal_1_summ_ValueElement_1 = document.getElementById('CalcBorrowerLegal_1_summ_value-1');
		var CalcBorrowerLegal_1_summ_ValueElement_2 = document.getElementById('CalcBorrowerLegal_1_summ_value-2');

		CalcBorrowerLegal_1_summ.noUiSlider.on('update', function( values, handle ) {
			CalcBorrowerLegal_1_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_1_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_1_user_summ = parseInt(values[handle]);
			CalcBorrowerLegal_1_result();
		});
	}

	handlerstepCalcBorrowerLegal_1_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcBorrowerLegal_1_time = document.getElementById('CalcBorrowerLegal_1_time'); // Слайд
	// Настройки слайда
	var CalcBorrowerLegal_1_time_Settings = {
		start: [ 3 ],
		step: 1,
		range: {
			'min': [ 3 ],
			'max': [ 24 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcBorrowerLegal_1_time, CalcBorrowerLegal_1_time_Settings); // запускаем слайд

	// функция выдает значения на лейблы
	function handlerstepCalcBorrowerLegal_1_time() {
		// добавляем к точке лейбл
		$('#CalcBorrowerLegal_1_time .noUi-handle').append('<span id="CalcBorrowerLegal_1_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrowerLegal_1_time_ValueElement_1 = document.getElementById('CalcBorrowerLegal_1_time_value-1');
		var CalcBorrowerLegal_1_time_ValueElement_2 = document.getElementById('CalcBorrowerLegal_1_time_value-2');

		CalcBorrowerLegal_1_time.noUiSlider.on('update', function( values, handle ) {
			CalcBorrowerLegal_1_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_1_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_1_user_time = parseInt(values[handle]);
			CalcBorrowerLegal_1_result();
		});
	}

	handlerstepCalcBorrowerLegal_1_time();

	// Считаем результат
	function CalcBorrowerLegal_1_result() {
		//CalcBorrowerLegal_1_outcome = parseInt((((CalcBorrowerLegal_1_user_summ / 100)*CalcBorrowerLegal_1_user_percent)*CalcBorrowerLegal_1_user_time) + CalcBorrowerLegal_2_user_summ);
		CalcBorrowerLegal_1_outcome = parseInt((((CalcBorrowerLegal_1_user_summ / 100)*CalcBorrowerLegal_1_user_percent)*CalcBorrowerLegal_1_user_time) + CalcBorrowerLegal_1_user_summ);
		$('#CalcBorrowerLegal_1_result').html(CalcBorrowerLegal_1_outcome + "<i>руб.</i>");

	}
	CalcBorrowerLegal_1_result();


/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/

	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcBorrowerLegal_2_user_summ = 0; // слайдер суммы
	var CalcBorrowerLegal_2_user_time = 0; // слайдер период займа
	var CalcBorrowerLegal_2_user_percent = 2; // слайдер период займа
	var CalcBorrowerLegal_2_outcome; // результат


	// Слайд суммы
	var CalcBorrowerLegal_2_summ = document.getElementById('CalcBorrowerLegal_2_summ'); // Слайд
	// Настройки слайда
	var CalcBorrowerLegal_2_summ_Settings = {
		start: [ 150000 ],
		step: 50000,
		range: {
			'min': [ 150000 ],
			'max': [ 1000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcBorrowerLegal_2_summ, CalcBorrowerLegal_2_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcBorrowerLegal_2_summ() {
		// добавляем к точке лейбл
		$('#CalcBorrowerLegal_2_summ .noUi-handle').append('<span id="CalcBorrowerLegal_2_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrowerLegal_2_summ_ValueElement_1 = document.getElementById('CalcBorrowerLegal_2_summ_value-1');
		var CalcBorrowerLegal_2_summ_ValueElement_2 = document.getElementById('CalcBorrowerLegal_2_summ_value-2');

		CalcBorrowerLegal_2_summ.noUiSlider.on('update', function( values, handle ) {
			CalcBorrowerLegal_2_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_2_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_2_user_summ = parseInt(values[handle]);
			CalcBorrowerLegal_2_result();
		});
	}

	handlerstepCalcBorrowerLegal_2_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcBorrowerLegal_2_time = document.getElementById('CalcBorrowerLegal_2_time'); // Слайд
	// Настройки слайда
	var CalcBorrowerLegal_2_time_Settings = {
		start: [ 3 ],
		step: 1,
		range: {
			'min': [ 3 ],
			'max': [ 24 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcBorrowerLegal_2_time, CalcBorrowerLegal_2_time_Settings); // запускаем слайд

	// функция выдает значения на лейблы
	function handlerstepCalcBorrowerLegal_2_time() {
		// добавляем к точке лейбл
		$('#CalcBorrowerLegal_2_time .noUi-handle').append('<span id="CalcBorrowerLegal_2_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrowerLegal_2_time_ValueElement_1 = document.getElementById('CalcBorrowerLegal_2_time_value-1');
		var CalcBorrowerLegal_2_time_ValueElement_2 = document.getElementById('CalcBorrowerLegal_2_time_value-2');

		CalcBorrowerLegal_2_time.noUiSlider.on('update', function( values, handle ) {
			CalcBorrowerLegal_2_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_2_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_2_user_time = parseInt(values[handle]);
			CalcBorrowerLegal_2_result();
		});
	}

	handlerstepCalcBorrowerLegal_2_time();

	// Считаем результат
	function CalcBorrowerLegal_2_result() {
		CalcBorrowerLegal_2_outcome = (((CalcBorrowerLegal_2_user_summ / 100)*CalcBorrowerLegal_2_user_percent)*CalcBorrowerLegal_2_user_time) + CalcBorrowerLegal_2_user_summ;
		$('#CalcBorrowerLegal_2_result').html(CalcBorrowerLegal_2_outcome + "<i>руб.</i>");
	}
	CalcBorrowerLegal_2_result();


/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/

	/* Калькулятор заемщика - Краткосрочные займы */

	/* создаем переменные - значения слайдеров и результат */
	var CalcBorrowerLegal_3_user_summ = 0; // слайдер суммы
	var CalcBorrowerLegal_3_user_time = 0; // слайдер период займа
	var CalcBorrowerLegal_3_user_percent = 2; // слайдер период займа
	var CalcBorrowerLegal_3_outcome; // результат


	// Слайд суммы
	var CalcBorrowerLegal_3_summ = document.getElementById('CalcBorrowerLegal_3_summ'); // Слайд
	// Настройки слайда
	var CalcBorrowerLegal_3_summ_Settings = {
		start: [ 10000 ],
		step: 10000,
		range: {
			'min': [ 150000 ],
			'max': [ 1000000 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}
	
	noUiSlider.create(CalcBorrowerLegal_3_summ, CalcBorrowerLegal_3_summ_Settings); // запускаем слайд
	
	// функция выдает значения на лейблы
	function handlerstepCalcBorrowerLegal_3_summ() {
		// добавляем к точке лейбл
		$('#CalcBorrowerLegal_3_summ .noUi-handle').append('<span id="CalcBorrowerLegal_3_summ_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrowerLegal_3_summ_ValueElement_1 = document.getElementById('CalcBorrowerLegal_3_summ_value-1');
		var CalcBorrowerLegal_3_summ_ValueElement_2 = document.getElementById('CalcBorrowerLegal_3_summ_value-2');

		CalcBorrowerLegal_3_summ.noUiSlider.on('update', function( values, handle ) {
			CalcBorrowerLegal_3_summ_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_3_summ_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_3_user_summ = parseInt(values[handle]);
			CalcBorrowerLegal_3_result();
		});
	}

	handlerstepCalcBorrowerLegal_3_summ();
	
	/********************************/
	
	// слайд периода займа
	var CalcBorrowerLegal_3_time = document.getElementById('CalcBorrowerLegal_3_time'); // Слайд
	// Настройки слайда
	var CalcBorrowerLegal_3_time_Settings = {
		start: [ 3 ],
		step: 1,
		range: {
			'min': [ 3 ],
			'max': [ 24 ]
		},
		format: wNumb({
			decimals: 1,
			thousand: '',
			postfix: '',
		})
	}

	noUiSlider.create(CalcBorrowerLegal_3_time, CalcBorrowerLegal_3_time_Settings); // запускаем слайд

	// функция выдает значения на лейблы
	function handlerstepCalcBorrowerLegal_3_time() {
		// добавляем к точке лейбл
		$('#CalcBorrowerLegal_3_time .noUi-handle').append('<span id="CalcBorrowerLegal_3_time_value-2" class="nouislider-under-value"></span>');
		// получаем в переменные лейблы
		var CalcBorrowerLegal_3_time_ValueElement_1 = document.getElementById('CalcBorrowerLegal_3_time_value-1');
		var CalcBorrowerLegal_3_time_ValueElement_2 = document.getElementById('CalcBorrowerLegal_3_time_value-2');

		CalcBorrowerLegal_3_time.noUiSlider.on('update', function( values, handle ) {
			CalcBorrowerLegal_3_time_ValueElement_1.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_3_time_ValueElement_2.innerHTML = parseInt(values[handle]);
			CalcBorrowerLegal_3_user_time = parseInt(values[handle]);
			CalcBorrowerLegal_3_result();
		});
	}

	handlerstepCalcBorrowerLegal_3_time();

	// Считаем результат
	function CalcBorrowerLegal_3_result() {
		CalcBorrowerLegal_3_outcome = (((CalcBorrowerLegal_3_user_summ / 100)*CalcBorrowerLegal_3_user_percent)*CalcBorrowerLegal_3_user_time) + CalcBorrowerLegal_3_user_summ;
		$('#CalcBorrowerLegal_3_result').html(CalcBorrowerLegal_3_outcome + "<i>руб.</i>");
	}
	CalcBorrowerLegal_3_result();


/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/
/**********************************************************************************************/

	/***************************/

	/**/
	/**/
	/* Открываем слайдеры физ лиц или юр лиц на вкладке заемщика */
	/* switch */
	$('#calculator-1 span.calculator_switch[data-switch-pos]').click(function() {
		if ($('#calculator-1 span.calculator_switch').attr('data-switch-pos') == 1) {
			$('.first-calculator__legal-faces').hide();
			$('.first-calculator__phisic-faces').show();
		} else if ($('#calculator-1 span.calculator_switch').attr('data-switch-pos') == 2) {
			$('.first-calculator__phisic-faces').hide();
			$('.first-calculator__legal-faces').show();
		}
	});

	$('#calculator-2 span.calculator_switch[data-switch-pos]').click(function() {
		if ($('#calculator-2 span.calculator_switch').attr('data-switch-pos') == 1) {
			$('.borrower-calculator-legal').hide();
			$('.borrower-calculator-phisic').show();
		} else if ($('#calculator-2 span.calculator_switch').attr('data-switch-pos') == 2) {
			$('.borrower-calculator-phisic').hide();
			$('.borrower-calculator-legal').show();
		}
	});

	/* Slick Slider */
	$('#slider-fade').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 9000
	});
	
	function checkCalculatorHeightFromSlide() {
		if ($('div').is('.slide')) {
			var h = $('.slide').height();
			$('.header__calculator-block').css('height', h);
		}
	}
	checkCalculatorHeightFromSlide();
	$(window).resize(function(event) {
		checkCalculatorHeightFromSlide();
	});

	$('.slider-nav-btn-left').click(function() {
		$('#slider-fade').slick('slickPrev');
	});
	$('.slider-nav-btn-right').click(function() {
		$('#slider-fade').slick('slickNext');
	});
	/* /Slick Slider */

	/* Slick Slider - Reviews */
	$('#reviews__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true
			}
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
				//arrows: false
			}
		}

		]
	});
	/* /Slick Slider - Reviews */

	/* Certificate Slider */
	$('#certificate-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000
	});
	/* /Certificate */


	/* проверка вкладок - открываем/скрываем калькуляторы */
	function checkInvestPhisicCalc() {
		$('.first-calculator__phisic-faces .calculator__sliders-wrap').hide(); // сначала все прячем
		var x = $('.first-calculator__phisic-faces').find('.calculator__tab.active').attr('data-value');
		$('.first-calculator__phisic-faces').find('.calculator__sliders-wrap[data-calc-wrap='+x+']').show();
	}
	checkInvestPhisicCalc();
	$('.first-calculator__phisic-faces').find('.calculator__tab').click(function() {
		checkInvestPhisicCalc();
	});
	function checkInvestLegalCalc() {
		$('.first-calculator__legal-faces .calculator__sliders-wrap').hide(); // сначала все прячем
		var x = $('.first-calculator__legal-faces').find('.calculator__tab.active').attr('data-value');
		$('.first-calculator__legal-faces').find('.calculator__sliders-wrap[data-calc-wrap='+x+']').show();
	}
	checkInvestLegalCalc();
	$('.first-calculator__legal-faces').find('.calculator__tab').click(function() {
		checkInvestLegalCalc();
	});
	// 
	/* проверка вкладок - открываем/скрываем калькуляторы */
	function checkBorrowerPhisicCalc() {
		$('.borrower-calculator-phisic .calculator__sliders-wrap').hide(); // сначала все прячем
		var x = $('.borrower-calculator-phisic').find('.calculator__tab.active').attr('data-value');
		$('.borrower-calculator-phisic').find('.calculator__sliders-wrap[data-calc-wrap='+x+']').show();
	}
	checkBorrowerPhisicCalc();
	$('.borrower-calculator-phisic').find('.calculator__tab').click(function() {
		checkBorrowerPhisicCalc();
	});
	function checkBorrowerLegalCalc() {
		$('.borrower-calculator-legal .calculator__sliders-wrap').hide(); // сначала все прячем
		var x = $('.borrower-calculator-legal').find('.calculator__tab.active').attr('data-value');
		$('.borrower-calculator-legal').find('.calculator__sliders-wrap[data-calc-wrap='+x+']').show();
	}
	checkBorrowerLegalCalc();
	$('.borrower-calculator-legal').find('.calculator__tab').click(function() {
		checkBorrowerLegalCalc();
	});
});

$(document).ready(function() {
	// скрипт открывает меню заказа звонка
	$('.bid-call-btn').on('click', function (e) {
		if ($(e.target || e.srcElement).is('.call-bid-block, input[type="text"], input[type="submit"]')) {
			// ивент сработал на вложенном элементе
			// e.stopPropogation();
			// return false;
		} else {
			$('.call-bid-block').toggleClass('open');
		}
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".bid-call-btn"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.call-bid-block').removeClass('open');
		}
	});

	//скрипт открывает и скрывает окно в регистрацмей и входом
	$('.header__cabinet-container').on('click', function (e) {
		$('.header__admin-window').toggleClass('open');
		$('.header__admin-window-content.login').addClass('open');
		$('.header__admin-window-content.register').removeClass('open');
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header__cabinet-container, .header__admin-window"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.header__admin-window').removeClass('open');
		}
	});
	$('.header__admin-window-content.login a').click(function(event) {
		event.preventDefault();
		$('.header__admin-window-content.login').removeClass('open');
		$('.header__admin-window-content.register').addClass('open');
	});
	$('.header__admin-window-content.register a').click(function(event) {
		event.preventDefault();
		$('.header__admin-window-content.login').addClass('open');
		$('.header__admin-window-content.register').removeClass('open');
	});

});

/* Валидация форм */
$(document).ready(function() {
	// заказ звонка
	$('#bidcall').validate({
		rules: {
			// no quoting necessary
			name: {
				required: true,
				minlength: 2
			},
			phone: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			name: {
				required: "",
				minlength: ""
			},
			phone: {
				required: "",
				minlength: ""
			}
		},
		submitHandler: function() {
			alert("valid")
		}
	});
	// вход
	$('#login').validate({
		rules: {
			// no quoting necessary
			login: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 5
			}
		},
		messages: {
			login: {
				required: "",
				minlength: ""
			},
			password: {
				required: "",
				minlength: ""
			}
		},
		submitHandler: function() {
			alert("valid")
		}
	});
	// регистрация
	$('#register').validate({
		rules: {
			// no quoting necessary
			login: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			},
			confirmpassword: {
				required: true,
				minlength: 5,
				equalTo: "#register .password"
			}
		},
		messages: {
			login: {
				required: "",
				minlength: ""
			},
			email: {
				required: "",
				minlength: ""
			},
			password: {
				required: "",
				minlength: ""
			},
			confirmpassword: {
				required: "",
				minlength: ""
			}
		},
		submitHandler: function() {
			alert("valid")
		}
	});
});

/* маски */
$(document).ready(function() {
	$('#bidcall input[name="phone"]').mask("+9(999) 999-9999");
});

/* карты */
$(document).ready(function() {
	if($('#map').length > 0){
	        
	            function init() {
	                // Basic options for a simple Google Map
	                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	                var mapOptions = {
	                    // How zoomed in you want the map to start at (always required)
	                    zoom: 15,
	                    scrollwheel: false,

	                    // The latitude and longitude to center the map (always required)
	                    center: new google.maps.LatLng(55.754334, 37.623418), 

	                    // How you would like to style the map. 
	                    // This is where you would paste any style found on Snazzy Maps.
	                    styles:[
								  {
								    "stylers": [
								      { "hue": "#e6ff00" },
								      { "saturation": -100 },
								      { "gamma": 1.69 },
								      { "lightness": -12 }
								    ]
								  }
								]
	                };

	                // Get the HTML DOM element that will contain your map 
	                // We are using a div with id="map" seen below in the <body>
	                var mapElement = document.getElementById('map');     

	                // Create the Google Map using our element and options defined above



	                // Let's also add a marker while we're at it
	                var image = 'assets/img/icons/map_marker.png';
	                var marker = new google.maps.Marker({
	                    position: new google.maps.LatLng(55.754334, 37.623418),
	                    map: map,
	                    title: '167678, г. Санкт-Петербург, ул. Красных тюленей д. 62, к.2, офис 21',
	                    icon: image,
	                    animation: google.maps.Animation.BOUNCE
	                });

	            var map = new google.maps.Map(mapElement, mapOptions);

	            marker.setMap(map);
	            }
	        google.maps.event.addDomListener(window, 'load', init);
	}
});

// /* раскрытие новости */

// $(document).ready(function() {
// 	$('.news__full-news-btn').click(function() {
// 		$(this).parents('.news__news-box').toggleClass('open');
// 	});
// });


// переключение табов
$(document).ready(function() {
	// alert()
	// alert($('.loans__tab.active').attr('data-position');)
	// //
	// function checkLoansTabs() {
	// 	if ($('div').hasClass('loans')) {
	// 		var tab_position = 1;
	// 		/* переключение табов */
	// 		$('.loans__tab').click(function() {
	// 			$('.loans__tab').removeClass('active');
	// 			$(this).addClass('active');
	// 			tab_position = $(this).attr('data-position');
	// 			$('.loans__content-tabs').hide();
	// 			$('.loans__content-tabs[data-position = "' + tab_position + '"]').show();
	// 		});
	// 	}
	// }
	// checkLoansTabs();
});