function popup() {
    $(document).keyup(function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            $('.popup').filter(':visible').find('.popup__close').trigger('click')
        }
    });
    $('.scrollbar-inner').scrollbar();
    $('.popup__close ').click(function () {
        $('.mpopup').filter(':visible').find('.mpopup__close').trigger('click')
        $(this).closest('.popup').fadeOut(function () {
            $(this).find('video').trigger('pause');
        });
        
    })
    $('.popup__video-start').click(function () {
        let $th = $(this); 
        $(this).fadeOut(function () {
             $th.closest('.popup__video').find('video')[0].currentTime = 0;
            $th.closest('.popup__video').find('video').trigger('play');
        });
    })
    $('[data-bigpopup]').click(
        function (e) {
            $('.popup').stop().fadeOut();
            let $popup = $($(this).data('bigpopup'))
            if ($(e.target).hasClass('mpopup__close')) {
                return false;
              }
            $popup.stop().fadeIn()
            if ($popup.find('.popup__video').length) {
                $popup.find('.popup__video').css('display','block')
            }
            if ($popup.hasClass('_video')) {
               $popup.find('.popup__video').html( $popup.find('.popup__vhidden').html())
            }
                        

        }
    );


}