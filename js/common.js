$(document).ready(function() {

	$('.pseudo').on('click', function() {
		$('.has-tooltip').removeClass('is-active');
		$(this).parent().addClass('is-active');
		return false;
	});

	$(document).on('click', function() {
		$('.has-tooltip').removeClass('is-active');
	});

});