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
})