$(document).ready(function(){
	var modal = $(".sidebar");
		overlay = $('.overlay');
		link = $('#sidebar');

		link.on('click', function(){
				overlay.show();
				modal.toggleClass('sidebar-active');

			});	
				overlay.click(function(){
				overlay.hide();
				modal.toggleClass('sidebar-active');
				
			});

	var slideNow = 2;
	var slideCount = 3;
	var width = parseInt('178px');
	var navBtn = $('.navBtn');
	

	navBtn.click(function() {
		navBtn = $(this).index();
		$('.active-switch-button').removeClass('active-switch-button');
		$(this).toggleClass('active-switch-button');
		if (navBtn + 1 != slideNow) {
			var translateWidth = -width * (navBtn);
			$('.slider').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNow = navBtn + 1;
		}
	});
	
	$('.right-arrow').click(nextSlide);
	$('.left-arrow').click(prevSlide);

	function nextSlide() {
		if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
			$('.slider').css({
				'transform': 'translate(12px,0)',
				'-o-transform': 'translate(12px,0)',
				'-webkit-transform': 'translate(12px,0)'
			});
			slideNow = 1;
		} else {
			var translateWidth = -width * (slideNow);
			$('.slider').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNow++;
		}
	}	

	function prevSlide() {
		if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
			var translateWidth = -width * (slideCount - 1);
			$('.slider').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNow = slideCount;
		} else {
			var translateWidth = -width * (slideNow - 2);
			$('.slider').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNow--;
		}
	}
});