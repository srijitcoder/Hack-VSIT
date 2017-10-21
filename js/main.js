$('.img img').tilt({
    glare: true
});

$(document).ready(function(){
    setTimeout(function(){
        $(".hero").removeClass("animated");
    }, 1000);
});

var rellax = new Rellax('.rellax');