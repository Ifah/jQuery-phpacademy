function hscroll(text, speed, delay){
	if(speed == undefined){
		speed = 500;
	}
	if(delay == undefined){
		delay = 2500;
	}
	$('#header').html('<div id="text">' + text + '</div>');
	$('#header').slideToggle(speed).delay(delay).slideToggle(speed);
}