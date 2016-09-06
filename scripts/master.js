$('ul').on('scroll', function () {
    alert('in');
    $(document).scrollTo('ul li');
});

$(document).ready(function () {
    console.log("ready!");
});