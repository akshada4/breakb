import { Link } from 'react-router-dom';

const Character = ({ char_id, name, occupation, dob, status }) => {
		return (
			<div key={char_id}>
				<h2>{name}</h2>
				<div className='character-description'>
					<p>Occupation:</p>
					<ul>{occupation.map(item => 
							<li>{item}</li>
							)
						}
					</ul>
					<p>Date Of Birth:</p>
					<p>{dob}</p>
					<p>Status:</p>
					<p>{status}</p>
					<Link to={'/character/'+ char_id}>Charcter Details</Link>
				</div>
			</div>
			)
}

export default Character