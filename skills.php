<?php
$skills = [
    'Front End Development', 'Web Design', 'UI/UX Design', 'Full Stack Development'
];
$languages = [
    'HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript'
];
$frameworks = [
    'ReactJS', 'jQuery', 'CSS Frameworks', 'Foundation', 'Bootstrap', 'Materialize CSS',
    'Nova (Simple MVC) Framework', 'Zend 1 Framework'
];
$tools = [
    'Git', 'Subversion', 'Vagrant', 'Ansible', 'draw.io',
    'MySQL Workbench', 'WordPress', 'SMACSS',
    'LAMP Stack', 'Agile / Scrum Development'
]; ?>


<section id="skillssection" class="section relative" data-anchor="skills">
    <div class="container">
        <div class="row">
            <div class="col s12"><a id="skills"></a>
                <h2>Stuff I Know</h2>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6">
                <?php echo "<h3>Skills</h3><p>";
                foreach($skills as $skill){
                    echo "<span>{$skill}</span> ";
                }
                echo "</p>"; ?>
            </div>
            <div class="col s12 m6">
                <?php echo "<h3>Languages</h3><p>";
                foreach($languages as $language){
                    echo "<span>{$language}</span> ";
                }
                echo "</p>"; ?>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6">
                <?php echo "<h3>Tools &amp; Platforms</h3><p>";
                foreach($tools as $tool){
                    echo "<span>{$tool}</span> ";
                }
                echo "</p>"; ?>
            </div>
            <div class="col s12 m6">
                <?php echo "<h3>Frameworks</h3><p>";
                foreach($frameworks as $framework){
                    echo "<span>{$framework}</span> ";
                }
                echo "</p>"; ?>
            </div>
        </div>
    </div>
</section>
