$('#mainnav a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;
});
$('#logolink').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;
});

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 1) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll) {
                $('#mainnav a.active').removeClass('active');
                if(i-1 >= 0) {
                    $('#mainnav a').eq(i - 1).addClass('active');
                }
            }
        });

    } else {
        $('#mainnav a.active').removeClass('active');
    }
}).scroll();

$('#menutoggle').on('click', function(){
    $('#mainnav').toggleClass('open');
});