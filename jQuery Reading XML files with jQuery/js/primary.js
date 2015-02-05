$.ajax({
	url: 'xml/timeline.xml',
	dataType: 'xml',
	success: function(data){
		$(data).find('entry title').each(function(){
			var title = $(this).text();
			$('.timeline ul').append(
					$('<li />', {
						text: title
					})
			);	
		});
	},

	error: function(){
		$('.timeline').text('Failed to get the feed.');
	}
});