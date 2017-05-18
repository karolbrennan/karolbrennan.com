
$('#menutoggle').on('click touch', function(){
    $('nav').toggleClass('open');
    $('#menutoggle i').toggleClass('fa-navicon').toggleClass('fa-times').toggleClass('spineffect');
});

$('#mainnav a').on('click touchstart', function() {
    if(window.innerWidth <= 600){
        $('nav').removeClass('open');
        $('#menutoggle i').toggleClass('fa-times').toggleClass('fa-navicon').toggleClass('spineffect');
    }
    $('nav a.active').removeClass('active');
    $(this).addClass('active');
});

$('#logolink, #footerlink, #contactlink, #mainnav a').on('click touchstart', scrollToPoint);

function scrollToPoint(){
    console.log(this);
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body, html').animate({
        scrollTop: scrollPoint
    }, 500);
    return false;
}

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 1) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll +20) {
                $('#mainnav a.active').removeClass('active');
                if(i-1 >= 0) {
                    $('#mainnav a').eq(i - 1).addClass('active');
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