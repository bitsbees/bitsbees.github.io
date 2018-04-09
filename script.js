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

var PEOPLE = [
	{
		name: 'Gowtham',
		designation: 'CEO',
		about: 'good things',
		image: './goli.jpg',
		imgtop: '199px',
		imgleft: '362px',
		width: '550%'
	},
	{
		name: 'Gaurav',
		designation: 'employee',
		about: 'good things',
		image: './gaurav.jpg',
		imgtop: '122px',
		imgleft: '109px',
		width: '100%'
	}
];

//Load
(function(){
	loadshowcase();
})();

function loadpeople() {
	var contentarea = $('#contentarea');
	contentarea.empty();
	contentarea.append(getPeople());
}

function loadshowcase() {
	var contentarea = $('#contentarea');
	contentarea.empty();
	contentarea.append(getShowcase());
}

function getPeople() {
	var people = $('<div>').addClass('row');

	for (var person of PEOPLE) {
		people.append(createPersonnelCard(person))
	}
	return people;
}

function createPersonnelCard(person) {
	var card = $('<div>').addClass('col-md-12 card whitebg person-card');
	var cardlayout = $('<div>').addClass('row');
	card.append(cardlayout);

	var image = $('<div>').addClass('col-md-5')
	  	.append(
			$('<div>').addClass('circular')
					  .css({ float: 'left' })
				.append(
					$('<img>').attr('src', person.image)
							  .css({
								  top: person.imgtop,
								  left: person.imgleft,
								  width: person.width
							  })
				)
	  	)
	cardlayout.append(image);

	var descriptionCol = $('<div>').addClass('col-md-7')
	var description = $('<div>').addClass('people')
	description.append(
		$('<div>').addClass('name')
				   .html(person.name)
	)
	description.append(
		$('<div>').addClass('designation')
				  .html(person.designation)
	)

	description.append(
		$('<div>').addClass('about')
				  .html(person.about)
	)
	descriptionCol.append(description);

	cardlayout.append(descriptionCol);
	return card;
}

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
