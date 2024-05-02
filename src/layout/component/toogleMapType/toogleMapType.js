function toogleMapType() {
    $('.type-map__toggle').click(function () {
        $('.type-map').toggleClass('_open')
    })
    $('.type-map__item').click(function () {
        $('.type-map__item').removeClass('_selected')
        $(this).addClass('_selected')
        $('.type-map').removeClass('_open')
        $('.timeline__year._active').trigger('click')
        $('.header__title').text($(this).data('title'))
        $('body').attr('maptype',$(this).attr('id'))
    })
	$(document).click( function(e){ 
        var div = $('.type-map');
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) { 
			 $('.type-map').removeClass('_open')
		}
	});

}