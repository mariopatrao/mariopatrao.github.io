var leftPos;
var sectionSize;

$(function () {

    $('.horizontalRow').mousewheel(function (event, delta) {

        this.scrollLeft -= (delta * 30);

        event.preventDefault();

    });

    /*$('.horizontalRow').on('scroll', function () {
        //alert('in');
        //$(document).scrollTo('.next');
        $('ul').scrollLeft('500px');
    });*/



    $(document).keydown(function (e) {
        leftPos = $('.horizontalRow').scrollLeft();
        sectionSize = $('ul li').outerWidth();
        switch (e.which) {
            case 37: // left
                $('.horizontalRow').animate({ scrollLeft: leftPos - sectionSize }, 800);
                break;

            case 38: // up
                break;

            case 39: // right
                
                $('.horizontalRow').animate({ scrollLeft: leftPos + sectionSize }, 800);
                break;

            case 40: // down
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

});