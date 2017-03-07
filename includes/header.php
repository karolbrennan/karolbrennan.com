<?php $sitetitle = 'Karol Brennan'; ?>
<!DOCTYPE html>
<html>
<head>
    <title><?= $sitetitle; ?></title>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
    <link rel="stylesheet" href="/assets/css/materialize.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans+Condensed|Oswald|Raleway" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/css/main.css">
<!--    <meta property="og:image" content="/assets/images/ogimage.png"/>-->
</head>
<body class="flow-text">



<header id="header" class="fixed transition">
    <div class="row">
        <div class="col s6">
            <a id="logolink" href="#top" data-scroll="top"><img src="/assets/images/kb-white.svg" alt="karolbrennan logo"></a>
        </div>
        <div class="col s6">
            <ul id="navigation" class="transition right-align">
                <li><span id="menutoggle"><i class="fa fa-bars"></i></span>
                    <ul id="mainnav" class="transition">
                        <li><a href="#about" data-scroll="about">About</a></li>
                        <li><a href="#projects" data-scroll="projects">Projects</a></li>
                        <li><a href="#skills" data-scroll="skills">Skills</a></li>
                        <li><a href="#portfolio" data-scroll="portfolio">Portfolio</a></li>
                        <li><a href="#testimonials" data-scroll="testimonials">Testimonials</a></li>
                        <li><a href="#contact" data-scroll="contact">Contact</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</header>

<section id="logo" data-anchor="top"><a id="top"></a>
    <div class="valign-wrapper">
        <div class="valign">
            <div class="logo"><img src="/assets/images/kb-white.svg" alt="karolbrennan logo"></div>
            <div class="down"><i class="fa fa-chevron-down"></i></div>
        </div>
    </div>
</section>