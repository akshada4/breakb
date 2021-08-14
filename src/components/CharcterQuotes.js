const getQuotes = (quotes, character) => {
	const filterQuotes = quotes.filter(quote => quote.author === character)
									.map(q => {
										return (<li>{'" '+q.quote+' "'}</li>)
									}
								);
	return (filterQuotes.length > 0 
		? filterQuotes
		: <li>None</li>);
}


const CharacterQuotes = ({ quotes, character }) => {

	return (<div>
				<span>Quotes:</span>
				<ul>{getQuotes(quotes, character)}</ul>
			</div>)
}

export default CharacterQuotes