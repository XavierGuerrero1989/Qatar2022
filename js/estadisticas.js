const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'world-cup-football2.p.rapidapi.com',
		'X-RapidAPI-Key': 'a52a0225c8mshbc72e78592349b3p166d0cjsnec2c938728f9'
	}
};

fetch('https://world-cup-football2.p.rapidapi.com/allWiners/team/Argentina', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));