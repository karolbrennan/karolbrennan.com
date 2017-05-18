$('#mainnav a').on('click touchstart', function() {
    $('#mainnav a.active').removeClass('active');
    $(this).addClass('active');
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;
});
$('#logolink').on('click touchstart', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;
});

$('#contactlink').on('click touchstart', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;
});

$('#menutoggle').on('click touchstart', function(){
    console.log('hi');
    $('#mainnav').toggleClass('open');
});

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
    console.log(this);
    $('.work-web.active').removeClass('active');
    $(this).addClass('active');
});