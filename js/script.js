$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    });

    $('window').on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

});



/*typing animation  */
var typed = new Typed(".typing", {
    strings: ["se koupe dwet", "se bon nan bouch", "Vant ou se Misyon n"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})