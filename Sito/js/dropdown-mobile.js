//Dropdown Menu
$(".slider-dropdown").click(function slideMenu()
{
	$(this).next('ul').slideToggle();
	$(this).parent().siblings().children().next('ul').slideUp();

});

//Arrows
$(".rotate").click(function(){
 $(this).toggleClass("down")  ;
})
