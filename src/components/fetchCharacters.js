const fetchCharacters = () => {
	return fetch('https://breakingbadapi.com/api/characters')
    		.then(response => response.json())
    		.then(data => { 
    			return data;
    			}
    		)
}

export {fetchCharacters}