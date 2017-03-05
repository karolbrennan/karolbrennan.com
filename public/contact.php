<?php
$formValues = [
    'name' => !empty($_SESSION['name']) ? $_SESSION['name'] : '',
    'email' => !empty($_SESSION['email']) ? $_SESSION['email'] : '',
    'message' => !empty($_SESSION['message']) ? $_SESSION['message'] : ''
];

$errors = [
    'name' => !empty($_SESSION['contact_errors']['name']) ? "<p class='error'>" . $_SESSION['contact_errors']['name'] . "</p>" : '',
    'email' => !empty($_SESSION['contact_errors']['email']) ? "<p class='error'>" . $_SESSION['contact_errors']['email'] . "</p>" : '',
    'message' => !empty($_SESSION['contact_errors']['message']) ? "<p class='error'>" . $_SESSION['contact_errors']['message'] . "</p>" : ''
];
?>

<section id="contactme" data-anchor="contact"><a id="contact"></a>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h2>Get In Touch</h2>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <?php if(!empty($_SESSION['message'])) { echo '<p class="message">' . $_SESSION['message'] . '</p>'; unset($_SESSION['message']); } ?>

                <div id="envelope"><div id="envelope-sides">
                    <form id="contactform" method="post" action="/assets/scripts/contact.php">
                        <h6>Dear Karol, <span class="date"><?= date('M d, Y') ?></span></h6>

                        <label for="message">Message<textarea name="message" placeholder="I have something to say..." required></textarea></label>
                        <?php if(!empty($_SESSION['contact_errors']['message'])) { echo '<p class="error">' . $_SESSION['contact_errors']['message'] . '</p>'; unset($_SESSION['contact_errors']['email']);} ?>

                        <h6>Sincerely,</h6>
                        <label for="name">Name<input type="text" name="name" placeholder="Bobbie Sue" <?php if(!empty($_SESSION['name'])){ echo "value='{$_SESSION['name']}'"; } ?> required></label>
                        <?php if(!empty($_SESSION['contact_errors']['name'])) { echo '<p class="error">' . $_SESSION['contact_errors']['name'] . '</p>'; unset($_SESSION['contact_errors']['name']);} ?>
                        <label for="email">Email<input type="email" name="email" placeholder="@" <?php if(!empty($_SESSION['email'])){ echo "value='{$_SESSION['email']}'"; } ?> required></label>
                        <?php if(!empty($_SESSION['contact_errors']['email'])) { echo '<p class="error">' . $_SESSION['contact_errors']['email'] . '</p>'; unset($_SERVER['contact_errors']['email']);} ?>
                        <button>Send!</button>
                    </form>
                </div></div>
            </div>
        </div>
<!--        <div class="row">-->
<!--            <div class="col s12">-->
<!--                <ul class="social">-->
<!--                    <li><a href="http://github.com/codemasterkarol"><i class="fi-social-github"></i> <span>GitHub</span></a></li>-->
<!--                    <li><a href="http://linkedin.com/in/karolbrennan"><i class="fi-social-linkedin"></i> <span>LinkedIn</span></a></li>-->
<!--                    <li><a href="http://twitter.com/codemasterkarol"><i class="fi-social-twitter"></i> <span>Twitter</span></a></li>-->
<!--                    <li><a href="http://instagram.com/codemasterkarol"><i class="fi-social-instagram"></i> <span>Instagram</span></a></li>-->
<!--                    <li><a href="https://open.spotify.com/user/ilovezombies"><i class="fi-social-spotify"></i> <span>Spotify</span></a></li>-->
<!--                    <li><a href="https://account.xbox.com/en-US/Profile?gamerTag=CodemasterKarol"><i class="fi-social-xbox"></i> <span>XBox</span></a></li>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</section>