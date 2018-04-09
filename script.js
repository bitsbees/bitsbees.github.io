//Data
var CARDS = [
	{
		name: 'Xamarin',
		image: './xamarin.png',
		description: 'neuroPRECISE is a cross platform app written using Xamarin Forms. It acts as the first point of contact between the cloud and the EEG cap developed by neuroCONCISE.'
	},
	{
		name: 'Unity',
		image: './unity.png',
		description: 'neuroREFLECT and neuroSHINE are apps written in Unity. neuroREFLECT is a set of videogames that can be controlled with the cap while neuroSHINE is a medical application for tracking patients progress using auditory games.'
	},
	{
		name: 'Nodejs',
		image: './nodejs.png',
		description: 'NeuroCONCISE runs its webserver using Nodejs. We have an express server that provides endpoints for data storage, user authentication and realtime data streaming from a remote device running neuroPRECISE.'
	},
	{
		name: 'Hadoop',
		image: './hadoop.png',
		description: 'Hadoop filesystem running on aws is used for storage of userdata. The filesystem is accessible through the nodejs apis.'
	}
];

//Load
(function(){
	var contentarea = $('#contentarea');
	contentarea.empty();
	contentarea.append(getShowcase());
})();

function getShowcase() {
	var flexbox = $('<div>').addClass('flexbox');
	for (var card of CARDS) {
		flexbox.append(getContentCard(card));
	}
	return flexbox;
}

function getContentCard(content) {
	var card = $('<div>').addClass('card')
						 .addClass('showcase-card')
						 .addClass('whitebg')
						 .css({ position: 'relative' })

	card.append(
		$('<img>').attr('src', content.image)
				  .attr('width', '200px')
				  .addClass('img-responsive')
				  .addClass('center-block')
	);

	card.append($('<hr>'));

	card.append(
		$('<p>').html(content.description)
	);

	card.append(
		$('<button>').addClass('btn btn-link')
					 .css({
						position: 'absolute',
						bottom: 10,
						right: 10
					 })
					 .html('More')
	);

	return card;
}
