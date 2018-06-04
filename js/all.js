$(document).ready(function() {

	var slideDownTime = 200;
	var slideUpTime = 200;

	$('#myTasksBtn').click(function(event) {
		$('#myTasksBtn').removeClass('doesNotUsingPage')
		$('#myTasksBtn').addClass('usingPage')
		$('#inProgressBtn').removeClass('usingPage')
		$('#inProgressBtn').addClass('doesNotUsingPage')
		$('#completedBtn').removeClass('usingPage')
		$('#completedBtn').addClass('doesNotUsingPage')

		$('.taskBox.sticky').slideDown(slideDownTime);
		$('.taskBox.normal').slideDown(slideDownTime);
		$('.taskBox.completed').slideDown(slideDownTime);

		$('.footer p').text('4 tasks left');
	});

	$('#inProgressBtn').click(function(event) {
		$('#myTasksBtn').removeClass('usingPage')
		$('#myTasksBtn').addClass('doesNotUsingPage')
		$('#inProgressBtn').removeClass('doesNotUsingPage')
		$('#inProgressBtn').addClass('usingPage')
		$('#completedBtn').removeClass('usingPage')
		$('#completedBtn').addClass('doesNotUsingPage')

		$('.taskBox.sticky').slideDown(slideDownTime);
		$('.taskBox.normal').slideDown(slideDownTime);
		$('.taskBox.completed').slideUp(slideUpTime);

		$('.footer p').text('4 tasks left');
	});

	$('#completedBtn').click(function(event) {
		$('#myTasksBtn').removeClass('usingPage')
		$('#myTasksBtn').addClass('doesNotUsingPage')
		$('#inProgressBtn').removeClass('usingPage')
		$('#inProgressBtn').addClass('doesNotUsingPage')
		$('#completedBtn').removeClass('doesNotUsingPage')
		$('#completedBtn').addClass('usingPage')

		$('.taskBox.sticky').slideUp(slideUpTime);
		$('.taskBox.normal').slideUp(slideUpTime);
		$('.taskBox.completed').slideDown(slideDownTime);

		$('.footer p').text('1 task completed');
	});

});