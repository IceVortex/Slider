$(document).ready(function(){
    $('#next').on('click', function () {
        var last = $('.image1').last().css({opacity: '0', width: '0px'});
        last.prependTo('.slideshow1');
        last.animate({opacity: '2', width: $('.image1').last().width()});
    });

    $('#next').on('click', function () {
        var last = $('.image2').last().css({opacity: '0', width: '0px'});
        last.prependTo('.slideshow2');
        last.animate({opacity: '2', width: $('.image2').last().width()});
    });

    $('#prev').on('click', function () {
        var first = $('.image1').first();
        first.animate({opacity: '0', width: '0px'}, function() {
            first.appendTo('.slideshow1').css({opacity: '1', width: $('.image1').first().width()});
        });
    });

    $('#prev').on('click', function () {
        var first = $('.image2').first();
        first.animate({opacity: '0', width: '0px'}, function() {
            first.appendTo('.slideshow2').css({opacity: '1', width: $('.image2').first().width()});
        });
    });
    
});