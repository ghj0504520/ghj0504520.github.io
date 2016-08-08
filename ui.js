/**
 * Created by ghj0504520 on 2016/7/29.
 */
$(document).ready(function(){

    $('.footer').fadeOut();
    //$('#scrollCount').remove();
    heightScroll();

});

function heightScroll(){

    $(window).scroll(function(){

        var nowTop = $(this).scrollTop();
        $('#scrollCount').remove();
        $('<p id="scrollCount">' + nowTop + '</p>').appendTo($('#scrollTop'));

        var zoom=(window.outerWidth / window.innerWidth)*100;

        if(zoom>100 && nowTop>=430)
        {
            $('.footer').fadeIn();
        }
        else if(zoom<=100 && nowTop>=530)
        {
            $('.footer').fadeIn();
        }
        else
        {
            $('.footer').fadeOut();
        }
    });
}


