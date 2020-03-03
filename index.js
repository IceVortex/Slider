$(document).ready(function(){
    $('#next').on('click', function () {
        var button = $(this);
        button.attr('disabled', true);

        var last = $('.image1').last();
        var imageWidth = last.width();
        last.css({width: '0px'}).prependTo('.slideshow1');
        last.animate({width: imageWidth}, 400, function(){
            button.removeAttr('disabled');
        });
    });

    $('#next').on('click', function () {
        var last = $('.image2').last();
        var imageWidth = last.width();
        last.css({width: '0px'}).prependTo('.slideshow2');
        last.animate({width: imageWidth}, 400);
    });

    $('#prev').on('click', function () {
        var button = $(this);
        button.attr('disabled', true);

        var first = $('.image1').first();
        var imageWidth = first.width();
        first.animate({width: '0px'}, 400, function() {
            first.appendTo('.slideshow1').css({width: imageWidth});
            button.removeAttr('disabled');
        });

    });

    $('#prev').on('click', function () {
        var first = $('.image2').first();
        var imageWidth = first.width();
        first.animate({width: '0px'},400, function() {
            first.appendTo('.slideshow2').css({width: imageWidth});
        });
    });
    
});