<section id="experience-section" data-anchor="experience"><a id="experience"></a>
    <div class="row titlerow">
        <div class="col c100">
            <h2 class="text-right">Experience</h2>
        </div>
    </div>

    <div class="row">
        <div class="col c65">
            <div class="job">
                <div class="row titlerow">
                    <div class="col c100">
                        <h4>Web Developer / Designer</h4>
                        <h5>Liturgical Publications</h5>
                        <strong>August 2013 – Current</strong>
                    </div>
                </div>
                <div class="row">
                    <div class="col c100">
                        <p class="desc">Worked on a team of two designers and four developers to develop
                            and maintain a full suite of web applications.</p>
                    </div><div class="col c100">
                        <h5>Key Accomplishments</h5>
                        <ul class="accomplishments">
                            <li>Redesigned the development process and structure for creating new themes,
                                effectively cutting development time by 2/3rds.</li>
                            <li>Designed several themes for weconnect.com and UIs for parishesonline.com.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="row titlerow">
                    <div class="col c100">
                        <h4>Designer</h4>
                        <h5>PowerSports Network</h5>
                        <strong>September 2012 – August 2013</strong>
                    </div>
                </div>
                <div class="row">
                    <div class="col c100">
                        <p class="desc">Designed and maintained websites for dealerships across the
                            country that carry PowerSport, Marine and Commercial vehicles
                            and equipment.</p>
                    </div><div class="col c100">
                        <h5>Key Accomplishments</h5>
                        <ul class="accomplishments">
                            <li>Designed, executed changes and maintained over 80 sites with an average turnaround of 2 new designs per week</li>
                            <li>Integrated new web standards into a legacy application</li>
                            <li>Mentored colleagues in the latest standards for HTML and CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div><div class="col c35 technology">
            <h4>Stuff &amp; Thangs.</h4>
            <?php
            $languages = [
                'HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript'
            ];
            $frameworks = [
                'jQuery', 'Foundation', 'Bootstrap', 'Materialize CSS',
                'WordPress', 'Simple MVC', 'Zend Framework'
            ];
            $tools = [
                'MySQL Workbench',
                'Git', 'Subversion', 'VirtualBox', 'VM Ware',
                'Vagrant', 'Ansible',
                'LAMP Stack'
            ];

            echo "<h3>Languages</h3><p>";
            foreach($languages as $language){
                echo "<span>{$language}</span> ";
            }
            echo "</p>";
            echo "<h3>Frameworks</h3><p>";
            foreach($frameworks as $framework){
                echo "<span>{$framework}</span> ";
            }
            echo "</p>";
            echo "<h3>Tools &amp; Platforms</h3><p>";
            foreach($tools as $tool){
                echo "<span>{$tool}</span> ";
            }
            echo "</p>";
            ?>
            <br><br>
            <h4>Resume</h4>

            <p><a href="KarolBrennan-2016.pdf">Download my resume in PDF form!</a></p>
            <p>Check out my public repositories on <a href="http://github.com/codemasterkarol">GitHub!</a></p>


        </div>

    </div>
</section>