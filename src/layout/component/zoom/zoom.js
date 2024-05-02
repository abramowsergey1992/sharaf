function zoom() {
    $( ".map__wrapper" ).draggable();

    $( ".map__wrapper" ).draggable('disable');
    let left, right;
    $(".map__wrapper").on("drag", function (event, ui) {
        if (ui.position.left > 0) {
            ui.position.left = 0;
        }
        if (ui.position.top > 0) {
            ui.position.top = 0;
        }
        if ((($(".map__wrapper").outerWidth() - $(".map").outerWidth() )  * -1) >= ui.position.left) {
            ui.position.left = ($(".map__wrapper").outerWidth() - $(".map").outerWidth() )  * -1;
        }
        if ((($(".map__wrapper").outerHeight() - $(".map").outerHeight() )  * -1) >= ui.position.top) {
            ui.position.top = ($(".map__wrapper").outerHeight() - $(".map").outerHeight() )  * -1;
        }
    } );

    $('.zoom').click(function () {  
        if ($(this).attr('data-zoom') == '1') {
            $(".map__wrapper").draggable('enable');
            $(".map__wrapper").css({
                'left':'-50%',
                'top':'-50%'
            });
            $(this).attr('data-zoom', '2')
            $('.map').addClass('_zoom-2')
            left = 0;
            right = $('.map__wrapper').outerWidth();
        } else {
            $(this).attr('data-zoom', '1')
            $('.map').removeClass('_zoom-2')
            $( ".map__wrapper" ).draggable('disable');
        }

    })
}