function preloader() {
    if ($.cookie('preloader') != 'true') {
        $('.preloader').css('display', 'block')
        setTimeout(function () {
                            $.cookie('preloader', 'true');
            $('.preloader').fadeOut(function () {

            })
        },5000)
    }
    $('.header__logo').click(function (e) {
        // e.preventDefault();
        // $.cookie('preloader', 'false');
        // location.reload();
    })
}