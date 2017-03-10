
var $menu = $('li a');
$menu.on('click', function(){
    console.log($(this).parents('ul, menu').find('a'));
    $(this).parents('ul, menu').find('a').removeClass('active');
    $(this).addClass('active');
});