var leftPos;
var sectionSize;




$(function () {

    $('.horizontalRow').mousewheel(function (event, delta) {

        this.scrollLeft -= (delta * 30);

        event.preventDefault();

    });

    // Bind the swiperightHandler callback function to the swipe event
    //$('.horizontalRow').on("swiperight", goRight());

    // Bind the swipeleftHandler callback function to the swipe event
    //$('.horizontalRow').on("swipeleft", goLeft());

    $('.horizontalRow').swipe({
        //Generic swipe handler for all directions
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            //$(this).text("You swiped " + direction);
            console.log('you swiped ' + direction);
            switch (direction) {
                case 'left':
                    goRight();
                    break;
                case 'right':
                    goLeft();
                    break;
                default: return;
            }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });


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
    console.log('executing swipe');
    leftPos = $('.horizontalRow').scrollLeft();
    sectionSize = $('ul li').outerWidth();
    $('.horizontalRow').animate({ scrollLeft: leftPos - sectionSize }, 800);
}


function goRight() {
    leftPos = $('.horizontalRow').scrollLeft();
    sectionSize = $('ul li').outerWidth();
    $('.horizontalRow').animate({ scrollLeft: leftPos + sectionSize }, 800);
}
