function leftSidebar() {
    if ($('.leftsidebar').length) {
        $('.leftsidebar__overlay,.leftsidebar__close').click(function () { 
            $('.leftsidebar').removeClass('_open')
        })
        $('.leftsidebar-open,.leftsidebar__toggle').click(function () {
            $('.leftsidebar').toggleClass('_open')
        })
        $('.leftsidebar__title').click(function () {
            $(this).parent('.leftsidebar__dropdown').toggleClass('_open')
        })
    }
}