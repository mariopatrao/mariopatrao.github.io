// GLOBAL
var yPos = 0;
var elementCount = 0;

$(document).ready(function () {
    $('ul').fadeIn(1600);
    yPos = 0;
    elementCount = $('li').length;
});


// Mechanics
$(function () {

    // Mouse Scroll
    $('.masterWrapper').mousewheel(function (event, delta) {
        scrollAction(delta);
        event.preventDefault();
    });
   
    // Mobile Swipe
    $('.masterWrapper').swipe({
        //Generic swipe handler for all directions
        swipeLeft: function (event, direction, distance, duration, fingerCount, fingerData) {
            event.preventDefault();
            scrollAction(direction);
        },
        swipeRight: function (event, direction, distance, duration, fingerCount, fingerData) {
            event.preventDefault();
            scrollAction(direction);
        },
        swipeDown: function (event, direction, distance, duration, fingerCount, fingerData) {
            scrollAction(direction);
            event.preventDefault();
            
        },
        swipeUp: function (event, direction, distance, duration, fingerCount, fingerData) {
            event.preventDefault();
            scrollAction(direction);
        },

        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });


    // Scroll Area clicked
    $(document)
        .on('click', '.bottom', function (e) {
            if ($('.visible').length == 0) {
                $(this).parent().addClass('visible');
            }
            scrollAction(-1);
            e.preventDefault();
        })
        .on('click', '.top', function (e) {
            if ($('.visible').length == 0) {
                $(this).parent().addClass('visible');
            }
            scrollAction(1);
            e.preventDefault();
        })
    ;

    //$('.bottom').on('click', function (e) {
    //    if ($('.visible').length == 0) {
    //        $(this).parent().addClass('visible');
    //    }
    //    scrollAction(-1);
    //    e.preventDefault();
    //});



});

function scrollAction(arg) {
    switch (arg) {

        // Move Right
        case -1: // Scroll Down
        case 39: // Right key pressed
        case 'left': // Mobile left swipe
        case 'up': // Mobile up swipe
            scrollDown();
            break;

            // Move Left
        case 1: // Scroll Up
        case 37: // Left key pressed
        case 'right': // Mobile right swipe
        case 'down': // Mobile right swipe
            scrollUp();
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

// Functions
function scrollDown() {


    if ($('.visible').attr('data-index') < elementCount) {

        yPos = yPos + $('li').outerHeight();

        //alert(yPos + ' // ' + $('ul').innerHeight());

        $('.masterWrapper').animate({
            //scrollTop: x.top + $('li.visible').offset().top
            //scrollTop: $('li[data-index="' + y + '"]').offset().top
            scrollTop: yPos
        }, 'slow', function () {
            //alert($('.visible').first().attr('data-index'));
            $('.visible').first().next().addClass('visible');
            $('.visible').first().removeAttr('class');

            // $('.visible').first().removeAttr('class');
            // $('li[data-index="' + y + '"]').addClass('visible');

        });

    }
    
  
    
}

function scrollUp() {

    if ($('.visible').attr('data-index') > 1) {

        yPos = yPos - $('li').outerHeight();

        //alert(yPos + ' // ' + $('ul').innerHeight());

        $('.masterWrapper').animate({
            //scrollTop: x.top + $('li.visible').offset().top
            //scrollTop: $('li[data-index="' + y + '"]').offset().top
            scrollTop: yPos
        }, 'slow', function () {
            //alert($('.visible').first().attr('data-index'));
            $('.visible').first().prev().addClass('visible');
            $('.visible').last().removeAttr('class');

            // $('.visible').first().removeAttr('class');
            // $('li[data-index="' + y + '"]').addClass('visible');

        });

    }



}