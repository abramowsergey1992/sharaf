function mpopup() {
    $(document).keyup(function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            $('.mpopup').filter(':visible').find('.mpopup__close').trigger('click')
        }
    });
    let audioPlay;
    $('.mpopup__close ').click(function () {
        if ($(this).closest('.mpopup').find('audio').length) {
            clearInterval(audioPlay)
            $(this).closest('.mpopup').find('audio')[0].pause()
            $(this).closest('.mpopup').find('.audio-player__status').text('0.00')
            $(this).closest('.mpopup').find('.audio-player__line-progress').css('width','0%')
        }
        $(this).closest('.mpopup').fadeOut(function () {
            $(this).find('.mpopup__video').html('')

            
        });
        
    })
  
    $('.audio-player audio').on("canplay", function () {
        $(this).closest('.audio-player').find('.audio-player__final').text(Math.floor(this.duration/60)+':'+(Math.floor(this.duration)%60))
    })
    $('.audio-player__mute').click(function () { 
        let audio = $(this).closest('.audio-player').find('audio')[0]
        if (audio.muted) {
            audio.muted = false
            $(this).removeClass('_muted')
        } else {
            audio.muted = true;
            $(this).addClass('_muted')
        }
    });
    $('.audio-player__prev').click(function () {
        let audio = $(this).closest('.audio-player').find('audio')[0]
        audio.currentTime=audio.currentTime-10
    })
    $('.audio-player__next').click(function () {
        let audio = $(this).closest('.audio-player').find('audio')[0]
        audio.currentTime=audio.currentTime+10
    })
    $('.audio-player__play').click(function () {
        let audio = $(this).closest('.audio-player').find('audio')[0]
        let progress = $(this).closest('.audio-player').find('.audio-player__line-progress')[0]
        let $time = $(this).closest('.audio-player').find('.audio-player__status');
         $(this).closest('.audio-player').addClass('_stop')
        audio.play()
        audioPlay = setInterval(function() {
            let audioTime = Math.round(audio.currentTime);
            let audioLength = Math.round(audio.duration)
            progress.style.width = (audioTime * 100) / audioLength + '%';
            let sec = Math.floor(audioTime) % 60;
            if ((sec + '').length < 9) {
                sec = '0' + sec;
            }
            $time.text(Math.floor(audioTime/60)+':'+sec)
        }, 10)
    })
    $('.audio-player__stop').click(function () {
                 $(this).closest('.audio-player').removeClass('_stop')

        let audio = $(this).closest('.audio-player').find('audio')[0]
        audio.pause()
    })
    $(document).mouseup( function(e){ 
		var div = $( ".mpopup" ); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) {
			$('.mpopup').fadeOut(); 
		}
	});
    $('[data-popup]').click(
        function () {
            $('.mpopup').stop().fadeOut();
            let $popup = $('#' + $(this).data('popup'));
            $popup.stop().fadeIn()
            
            let left = $(this).offset().left  - ($popup.outerWidth()/2);
            let right = $(this).offset().left + $popup.outerWidth();
            let top = $(this).offset().top - 30 - ($popup.outerHeight());
            if (left < 0) {
                left=0  
            }
            if (top-100 < 0) {
                top=$(this).offset().top + 60  
            }
            if (right +50 > $('.map').outerWidth()) {
                left = $('.map').outerWidth() - $popup.outerWidth() - 50;
            }
            $popup.css({
                'left': left,
                'top':top
            })
            if ($popup.hasClass('_video')) {
               $popup.find('.mpopup__video').html( $popup.find('.mpopup__vhidden').html())
            }
        }
    );

}