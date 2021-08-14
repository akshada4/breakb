import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import CharacterQuotes from './CharcterQuotes';
import CharacterSeasons from './CharacterSeasons';
import { fetchCharacters } from './fetchCharacters';

const getDetails = (items, item) => {
  let details = null;
  let index = 0;
  let characterId;
  const itemsLength = items.length;

  while (details === null && index < itemsLength) {
    characterId = String(items[index].char_id);
    if (characterId === item)
      details = items[index]
    index++;
  }         
  return details;
}


const CharacterDetails = () => {
  const location = useLocation();
  const [episodes, setEpisodes]= useState([]);
  const [quotes, setQuotes] = useState([]);
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const fetchQuotes = await fetch('https://breakingbadapi.com/api/quotes')
                  .then(resp => resp.json())
                  .then(data => {return data});
      const fetchEpisodes = await fetch('https://breakingbadapi.com/api/episodes')
                  .then(resp => resp.json())
                  .then(data => {return data});
      fetchCharacters().then(data => {
        setCharacter(getDetails(data, location.pathname.split('/')[2]));
        setLoading(false);
        })
      setQuotes(fetchQuotes);
      setEpisodes(fetchEpisodes);
    }
    getData();
  }, [location])

  return (
    <div>
      {loading 
        ? <h3>Loading...</h3>
        : <div className="character-details">
            <div className="image-div">
              <img src={character.img} alt=""/>
            </div>
            <div className="detailed-description">
              <h1>{character.name}</h1>
              <div>
                <span>Date Of Birth:</span>
                <span>{character.birthday}</span>
              </div>
              <div>
                <span>Occupation:</span>
                <ul>{character.occupation.map(item => <li>{item}</li>)}</ul>
              </div>
              <div>
                <span>Status:</span>
                <span>{character.status}</span>
              </div>
              <div>
                <span>Actor:</span>
                <span>{character.portrayed}</span>
              </div>
              <div>
                  <span>Nickname:</span>
                  {'nickname' in character 
                  ? <span>{character.nickname}</span>
                  : <span>None</span>
                }
              </div>
              <CharacterQuotes 
                quotes={quotes} 
                character={character.name} />
              <CharacterSeasons 
                episodes={episodes}
                character={character.name} />
            </div>
          </div>}                        
    </div>)
}

export default CharacterDetails