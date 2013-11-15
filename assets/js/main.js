$(function() {

	var leftborder_count = 1;
    $('.leftborder_wordsmith').each(function (){
    	if (leftborder_count < 5) {
    		$(this).addClass('color_ws'+leftborder_count);
    	} else {
    		leftborder_count = 1;
    		$(this).addClass('color_ws'+leftborder_count);
    	};
    	leftborder_count++;
    });
});