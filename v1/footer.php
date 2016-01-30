<footer>
    <div class="container">
        <div class="left col-50">
            <p>&copy; 2015 Karol Brennan</p>
        </div><div class="social right col-50">
            <a href="http://github.com/codemasterkarol"><i class="fi-social-github"></i></a>
            <a href="http://twitter.com/codemasterkarol"><i class="fi-social-twitter"></i></a>
            <a href="http://linkedin.com/in/karolbrennan"><i class="fi-social-linkedin"></i></a>
            <a href="http://instagram.com/codemasterkarol"><i class="fi-social-instagram"></i></a>
            <a href="http://pinterest.com/codemasterkarol"><i class="fi-social-pinterest"></i></a>
            <a href="https://account.xbox.com/en-US/Profile?gamerTag=CodemasterKarol"><i class="fi-social-xbox"></i></a>
        </div>
    </div>
</footer>

<script>
    $('nav a').on('click', function() {
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top + 30;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;
    });

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('nav').addClass('fixed');
            $('section').each(function(i) {
                if ($(this).position().top <= windscroll - 20) {
                    $('nav a.active').removeClass('active');
                    $('nav a').eq(i).addClass('active');
                }
            });

        } else {
            $('nav').removeClass('fixed');
            $('nav a.active').removeClass('active');
            $('nav a:first').addClass('active');
        }

    }).scroll();
</script>
<script src="js/mail.js"></script>
</body>
</html>