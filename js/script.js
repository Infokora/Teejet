$(function () {
    var $menu = $('li a');
    $menu.on('click', function () {
        console.log($(this).parents('ul, menu').find('a'));
        $(this).parents('ul, menu').find('a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function () {
        console.log('aa');
        if ($(this).scrollTop() > 0) {
            $('nav').addClass('menu-fix');
        } else {
            $('nav').removeClass('menu-fix');
        }
    });

    var $paginators = $('.paginators .paginator-list span'),
        $slides = $('.headSlider li');

    function goSlide() {
        let $next = $('.headSlider .active').next(),
            $pagAct = $('.paginator-list .active');
        $slides.removeClass('active');
        $paginators.removeClass('active');
        if ($next.length) {
            $next.addClass('active');
            $pagAct.next().addClass('active');
        } else {
            $slides.eq(0).addClass('active');
            $('.paginator-list span').eq(0).addClass('active');
        }

    }

    var autoSlideGo = setInterval(goSlide, 5000);
    $('.all-wrap').hover(function () {
        clearInterval(autoSlideGo);
    }, function () {
        autoSlideGo = setInterval(goSlide, 5000);
    });



    $paginators.on('click', function () {
        let id = $(this).index();

        $paginators.removeClass('active');
        $(this).addClass('active');
        $('.headSlider li').removeClass('active');
        $('.headSlider li').eq(id).addClass('active');
    });
})