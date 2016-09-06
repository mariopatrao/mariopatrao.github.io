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

    // Bind the swiperightHandler callback function to the swipe event
    //$('.horizontalRow').on("swiperight", goRight());

    // Bind the swipeleftHandler callback function to the swipe event
    //$('.horizontalRow').on("swipeleft", goLeft());

    $(document).keydown(function (e) {
        //leftPos = $('.horizontalRow').scrollLeft();
        //sectionSize = $('ul li').outerWidth();
        switch (e.which) {
            case 37: // left
                //('.horizontalRow').animate({ scrollLeft: leftPos - sectionSize }, 800);
                goLeft();
                break;

            case 38: // up
                break;

            case 39: // right
                //$('.horizontalRow').animate({ scrollLeft: leftPos + sectionSize }, 800);
                goRight();
                break;

            case 40: // down
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

});


function goLeft() {
    leftPos = $('.horizontalRow').scrollLeft();
    sectionSize = $('ul li').outerWidth();
    $('.horizontalRow').animate({ scrollLeft: leftPos - sectionSize }, 800);
}


function goRight() {
    leftPos = $('.horizontalRow').scrollLeft();
    sectionSize = $('ul li').outerWidth();
    $('.horizontalRow').animate({ scrollLeft: leftPos + sectionSize }, 800);
}
