$( document ).ready(function(){
    firstRound = 0;
    $('#carouselExampleIndicators').on('slide.bs.carousel', function () {
        var activeDataSlide = $(this).find(".carousel-indicators").find('.active').data('slide-to');
        if(firstRound === 0){activeDataSlide++;}
        firstRound = 1;
        $('.poster-carousel').find(".text-item").removeClass('active');
        $('.poster-carousel').find('[data-slide="'+activeDataSlide+'"]').addClass('active');
        console.log(activeDataSlide);
    })
    $('.close-menu').on('click', function(){
        $(this).animate({height:'toggle'},350);
        $(this).animate({height:'toggle'},350);
        $(this).toggleClass( "active" );
        $(this).next().animate({width:'toggle'},350);
    });
});
