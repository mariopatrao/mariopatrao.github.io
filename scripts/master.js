// Global vars
var leftPos;
var sectionSize;
// Mechanics
$(function () {

    // Mouse Scroll
    $('.horizontalRow').mousewheel(function (event, delta) {
        scrollAction(delta);
        event.preventDefault();
    });

    // Mobile Swipe
    $('.horizontalRow').swipe({
        //Generic swipe handler for all directions
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            scrollAction(direction);
            event.preventDefault();
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 75
    });

    // Keyboard pressed
    $(document).keydown(function (e) {
        scrollAction(e.which);
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

});

// Functions
function goLeft() {
    leftPos = $('.horizontalRow').scrollLeft();
    sectionSize = $('ul li').outerWidth();
    $('.horizontalRow').animate({ scrollLeft: leftPos - sectionSize }, 800);
}


function goRight() {
    leftPos = $('.horizontalRow').scrollLeft();
    sectionSize = $('ul li').outerWidth();
    console.log("pos: " + leftPos + " // " + "section: " + sectionSize)
    $('.horizontalRow').animate({ scrollLeft: leftPos + sectionSize }, 800);
}

function scrollSlider() {
    //$(window).scrollTop($('ul li[data-index="' + 2 + '"]').offset().top);
    $('.horizontalRow').animate({ scrollLeft: $('ul li[data-index="' + 2 + '"]').offset().top }, 800);
}

function scrollAction(arg) {
    switch (arg) {

        // Move Right
        case -1: // Scroll Down
        case 39: // Right key pressed
        case 'left': // Mobile left swipe
            goRight();
            break;

            // Move Left
        case 1: // Scroll Up
        case 37: // Left key pressed
        case 'right': // Mobile right swipe
            goLeft();
            break;

            // Move Up
        case 38: // Up key pressed
            break;

            // Move Down
        case 40: // Down key pressed
            break;

        default: return;

    }
   
}
