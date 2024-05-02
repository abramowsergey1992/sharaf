function coord() {
    function refresh() {
        let $el = $("#drag")
        let type = $('#map-label-type').val()
        let text = '';
        let clss =type+" ";
        let l = ( 100 * parseFloat($el.position().left / parseFloat($el.parent().width())) ) + "%" ;
        let t = (100 * parseFloat($el.position().top / parseFloat($el.parent().height()))) + "%";
        
        $("#drag").removeAttr('class')
        text = '';


        if (type == "_city") {
             text = $('#map-label-text').val();
            clss = clss + " " + $('#city-color').val() + " " + $('#city-size').val() + " " + $('#city-position').val();
            $('#cityg').slideDown()
            console.log(text);
        } else {
            $('#cityg').slideUp()
        }
        if (type == "_industry") {
             text = $('#industry-svg').val();
            clss = clss + " ";
            $('#industrybl').slideDown()
            console.log(text);
        } else {
            $('#industrybl').slideUp()
        }

        if (type == "_text") {
            text = $('#map-label-text').val();
            clss = clss + " " + $('#text-size').val() ;
            $('#text').slideDown()
        } else {
            $('#text').slideUp()
        }
        if (type == "_station") {
            text = $('#map-label-text').val();
            clss = clss + " " + $('#station-type').val() ;
            $('#station').slideDown()
        } else {
            $('#station').slideUp()
        }
        

        $("#drag").html('<span>'+text+'</span>');
        $("#drag").addClass('map__element '  + clss)
        $('#map-label-element').val(`<div class="map__element ${clss}" style="top: ${t};left: ${l}"><span>${text}</span></div>`)
    }
    $("#drag").draggable({
        stop: function () {
           refresh()
        }
    });
    $('.refresh').change(function () {
        refresh()
    })
    
}