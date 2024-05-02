function rightSidebar() {
    if ($('.rightsidebar__toggle').length) {
        $('.rightsidebar__overlay,.rightsidebar__close').click(function () { 
            $('.rightsidebar').removeClass('_open')
        })
        $('.rightsidebar__toggle').click(function () {
            $('.rightsidebar').toggleClass('_open')
        })
    }
}