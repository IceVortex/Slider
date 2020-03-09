$(document).ready(function(){
    $('#next').on('click', function () {
        var button = $(this);
        button.prop('disabled', true);

        var last1 = $('.image1').last();
        var imageWidth1 = last1.width();

        var last2 = $('.image2').last();
        var imageWidth2 = last2.width();

        last1.css({width: '0px'}).prependTo('.slideshow1');
        last2.css({width: '0px'}).prependTo('.slideshow2');
        
        last2.animate({width: imageWidth2}, 400);
        last1.animate({width: imageWidth1}, 400, function(){
            button.prop('disabled', false);
        });
    });

    $('#prev').on('click', function () {
        var button = $(this);
        button.prop('disabled', true);

        var first1 = $('.image1').first();
        var imageWidth1 = first1.width();

        var first2 = $('.image2').first();
        var imageWidth2 = first2.width();


        first2.animate({width: '0px'}, 400, function() {
            first2.appendTo('.slideshow2').css({width: imageWidth2});
        });
        first1.animate({width: '0px'}, 400, function() {
            first1.appendTo('.slideshow1').css({width: imageWidth1});
            button.prop('disabled', false);
        });

    });
    
});