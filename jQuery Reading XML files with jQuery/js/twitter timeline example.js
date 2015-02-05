$.ajax({
	url: 'xml/timeline.xml',
	dataType: 'xml',
	success: function(data){
		$(data).find('statuses status').each(function(){
			var status = $(this).find('text').text();
			var id = $(this).attr('id');
			var user = $(this).find('user name').text();

/*
			//all
			var link = $(this)find('link').text();
			// specific ones
			var link = $(this)find('link:nth-child(2)').text();
			//each one seperately
			$(this).find('link').each(function(){
				alert($(this).text());
			});

*/

			$('.timeline ul').append(
					$('<li />', {
						text: '(' + id + ')' + status + ' - ' + user
					})
			);	
		});
	},

	error: function(){
		$('.timeline').text('Failed to get the feed.');
	}
});