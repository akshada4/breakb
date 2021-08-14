import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import { fetchCharacters } from './components/fetchCharacters' 

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters()
    .then(data => {
      setCharacters(data)
      setLoading(false);});
    }, []);

  return (
    <Router>
      <Route exact path='/'>
        {loading
          ? <h3>Loading...</h3> 
          : <CharacterList characters={characters} />}
      </Route>
        <Route path='/character/:id'>
          <CharacterDetails />
        </Route>
    </Router>
  );
}

export default App;
