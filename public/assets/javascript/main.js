function scroll() {
    var currentPosition = window.pageYOffset;
    if(currentPosition > 300){
       document.getElementById('header').classList.add('fixed');
    } else {
        document.getElementById('header').classList.remove('fixed');
    }
}