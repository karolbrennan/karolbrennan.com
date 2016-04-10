<footer>
    <div class="row">
        <div class="col c50">

        </div><div class="col c50 right">
            <p>&copy; 2015 Karol Brennan</p>
            <p class="desc">V2.0, <a href="/v1" title="Version 1">see V1.0 here</a></p>
        </div>
    </div>
</footer>
</div>

<div class="glow"></div>
<script>
    $('nav a').on('click', function() {
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;
    });

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('section').each(function(i) {
                if ($(this).position().top <= windscroll + 140) {
                    $('nav a.active').removeClass('active');
                    $('nav a').eq(i).addClass('active');
                }
            });

        } else {
            $('nav a.active').removeClass('active');
            $('nav a:first').addClass('active');
        }
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ){
            if(windscroll >= 50){
                $('header').addClass('scroll');
                $('header h1').html('KB');
            } else {
                $('header').removeClass('scroll');
                $('header h1').html('Karol Brennan  ');
            }
        }
    }).scroll();
</script>
<script src="js/mail.js"></script>
</body>
</html>