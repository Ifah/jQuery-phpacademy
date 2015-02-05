var res = {
	loader: $('<div />', {class: 'loader'}),
	container: $('.container')
}

$('a.load').on('click', function(){
	$.ajax({
		url: 'ajax/delay.php',
		beforeSend: function(){
			res.container.append(res.loader)
		},
		success: function(data){
			res.container.html(data);
			res.container.find(res.loader).remove();
		}
	});
});