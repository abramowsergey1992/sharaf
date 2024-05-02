function help() {
    $('.header__help').click(function () {
        $('body').attr('help', 'step-1')
        $('.help__step').removeClass('_open')
        $('#step-1').addClass('_open')
        $('.help').fadeIn()
    })
    $(document).click( function(e){ 
        var div = $('.help,.header__help');
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) { 
			 $('.help').fadeOut()
             $('body').removeAttr('help')
		}
	});
    $('.help__finish,.help__markerblock').click(function () {
        $('.help').fadeOut()
        $('body').removeAttr('help')
    })
    $('.help__prev').click(function () {
        $('.help__step').removeClass('_open')
        var $prev = $(this).closest('.help__step').prev();
         $prev.addClass('_open')
        $('body').attr('help', $prev.attr('id'))
    })
    $('.help__next').click(function () {
        $('.help__step').removeClass('_open')
        var $next = $(this).closest('.help__step').next();
         $next.addClass('_open')
        $('body').attr('help', $next.attr('id'))
    })
}