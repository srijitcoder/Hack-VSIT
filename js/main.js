$('.img img').tilt({
    glare: true
});

$(document).ready(function(){
    setTimeout(function(){
        $(".hero").removeClass("animated");
    }, 1000);
});

if(window.innerWidth > 900) {
    
}

var rellax = new Rellax('.rellax');


window.sr = ScrollReveal();

sr.reveal('.head', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});

$(document).ready(function(){
    setTimeout(function(){
        $("anim .main .main-cent .line .load").addClass("active");
    }, 500);

    setTimeout(function(){
        $("anim").fadeOut("slow");
    }, 7800);   
});

sr.reveal('.text', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});

sr.reveal('.timeline li', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});

sr.reveal('.sponsors img', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});

sr.reveal('.track h1', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});

sr.reveal('.track p', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});

sr.reveal('.img img', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});

sr.reveal('.team-content', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});

sr.reveal('.team-social', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});

sr.reveal('.shape', {
    duration: 1000,
    scale: 1,
    opacity: 0,
    origin: 'bottom'
});



$(document).ready(function(){
    var spn = $(".sponsors img").length+".";
    $('.spons_numb').html(spn);
});


$("#openPortal").click(function(){
    window.open('http://159.89.161.92', '_system');
});


//devfolio integration
document.addEventListener('DOMContentLoaded', function () {
    let devfolioOptions = {
        buttonSelector: '#devfolio-apply-now',
        key: 'hackvsit-2020',
    }

    let script = document.createElement('script');
    script.src = "https://apply.devfolio.co";
    document.head.append(script);

    script.onload = function () {
        new Devfolio(devfolioOptions);
    }

    script.onerror = function () {
        document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
            window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
        });
    }
});