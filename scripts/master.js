$('.masterWrapper ').on('swipe', function () {
    alert('in');
    $(document).scrollTo('ul li');
});

$(document).ready(function () {
    console.log("ready!");
});