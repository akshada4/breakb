const getSeasons = (episodes, character) => {
	const filterEps = episodes.filter(episode => episode.characters.includes(character));
	const filterSeasons = [];

	for(let i = 0; i < filterEps.length; i++) {
		if(!filterSeasons.includes(filterEps[i].season.trim()))
			filterSeasons.push(filterEps[i].season.trim())
	}

	const seasons = filterSeasons.map(season => {
		return (<li>{season}</li>)
	}) 

	return seasons

}


const CharacterSeasons = ({ episodes, character }) => {

	return(<div className="seasons">
			<span>Seasons:</span>
			<ul>{getSeasons(episodes, character)}</ul>
		</div>)
}

export default CharacterSeasons