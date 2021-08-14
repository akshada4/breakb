import { useState } from 'react';
import Character from './Character';
import Pagination from './Pagination';


const CharacterList = ({ characters }) => {
	const [page, setPage] = useState(1);
	const itemsLimit = 10;

	return(
		<div>
			<div className='characters-list'>
			{characters.slice((page-1)*itemsLimit, (page-1)*itemsLimit+itemsLimit)
				.map(item => <Character
					char_id={item.char_id} 
					name={item.name} 
					occupation={item.occupation} 
					dob={item.birthday}
					status={item.status} />
				)
			}
			</div>
			<Pagination 
				page={page} 
				setPage={setPage}
				pageLimit={itemsLimit-5}
				lastPage={Math.ceil(characters.length/itemsLimit)} />
		</div>
		)
}

export default CharacterList