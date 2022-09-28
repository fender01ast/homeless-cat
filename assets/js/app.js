if ( $( window ).width() >= 992 ) {
    function zoom(e){
        var zoomer = e.currentTarget;
        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
        e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
        x = offsetX/zoomer.offsetWidth*100
        y = offsetY/zoomer.offsetHeight*100
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
        zoomer.style.backgroundImage = "url('assets/images/compressed/завод-обрез2.jpg')";
    }
    function zoomout(e){
        var zoomer = e.currentTarget;
        zoomer.style.backgroundImage = "none";
    }
}


document.addEventListener("DOMContentLoaded", function(){

    new WOW().init();
    
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    let button = $('.toTopBtn');
    button.fadeOut();
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
          } else {
            button.fadeOut();
          }
    });

    $(window).scroll(function() {
        let ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
        $("#progress").width(ratio + "%");
    });


    if ( ($( window ).width() <= 767) || ($( window ).width() >= 480) ) {
        let liElement = $('.site-roadmap li');
        let ulElement = $('ul.site-roadmap');
        liElement.height('9.5%');
        ulElement.css('padding-top', '5%');
    }
});