import { useState } from 'react';

const createButtonTexts = (startIndex, endIndex) => {
	let texts = [];

	for(let i = startIndex; i <= endIndex; i++)
		texts.push(i)
	return texts
}

const changeBtnStyle = (currentBtn, prevBtn) => {
	currentBtn.style.backgroundColor = '#1f8c85';
	currentBtn.style.color = '#e0e0e0';

	if (prevBtn != null && currentBtn.value !== prevBtn.value){
		prevBtn.style.backgroundColor = '#EFEFEF';
		prevBtn.style.color = 'black';
	}
}

										
const Pagination = ({ page, setPage, pageLimit, lastPage }) => {
	let buttonTexts = [];
	const [clickedBtn, setClickedBtn] = useState(null);
	
	if (page === 1 || page === 2 || page === 3)
		buttonTexts = createButtonTexts(1, pageLimit)
	else if (page === lastPage-1 || page === lastPage-2 || page === lastPage){
		buttonTexts = createButtonTexts(lastPage-pageLimit+1, lastPage)
	}
	else
		buttonTexts = createButtonTexts(page-2, page+2)

	return (<div className='pagination'>
				{buttonTexts.map(item => {
							return <button 
									className='pagination-btn'
									value={item}
									onClick={e => { 
										setPage(parseInt(e.target.value));
										changeBtnStyle(e.target, clickedBtn);
										setClickedBtn(e.target);
										}
									}>
									{item}
								</button>
						}
					)
				}
			</div>)
}

export default Pagination