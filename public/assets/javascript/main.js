/* Set reusable variables for common selectors */
var menuToggle = $('#menutoggle');
var menuToggleIcon = $('#menutoggle i');
var mainNavLink = $('#mainnav a');

/* toggle the menu */
menuToggle.on('click touch', function(){
    $('nav').toggleClass('open');
    menuToggleIcon.toggleClass('fa-navicon fa-times spineffect');
});
/* close menu if it's open and you click on the logo */
$('#logolink').on('click touchstart', function(){
    if(menuToggleIcon.hasClass('fa-times')) {
        menuToggleIcon.toggleClass('fa-times spineffect fa-navicon');
    }
    $('nav').removeClass('open');
});
/* On click set menu item to active */
mainNavLink.on('click touchstart', function() {
    /* if on mobile and you click on a link, close the menu and change the menu toggle icon */
    if(window.innerWidth <= 600){
        $('nav').removeClass('open');
        menuToggleIcon.toggleClass('fa-times').toggleClass('fa-navicon').toggleClass('spineffect');
    }
    /* Remove currently active class from menu item and add to newly clicked item */
    $('nav a.active').removeClass('active');
    $(this).addClass('active');
});

/* Scroll to point */
$('#logolink, #footerlink, #contactlink, #mainnav a').on('click touchstart', scrollToPoint);

function scrollToPoint(){
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('*[data-anchor="' + scrollAnchor + '"]').offset().top;
    $('body, html').animate({
        scrollTop: scrollPoint
    }, 500);
    return false;
}

/* While scrolling set the menu items to active as you scroll to them */
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 1) {
        $('.section').each(function(i) {
            if ($(this).position().top <= windscroll +20) {
                $('#mainnav a.active').removeClass('active');
                if(i-1 >= 0) {
                    mainNavLink.eq(i - 1).addClass('active');
                }
            }
            if($(this).position().top <= windscroll + 750){
                $(this).addClass('loaded');
            }
        });
    } else {
        $('#mainnav a.active').removeClass('active');
    }
}).scroll();


$('.work-web').on('click touchstart', function(){
    $('.work-web.active').removeClass('active');
    $(this).addClass('active');
});