import { useState } from 'react';

import searchImages from './api.js';
import SearchBar from './Components/SearchBar.jsx';
import ImageList from './Components/ImageList.jsx';

function App  ()  {
	// const [term, setTerm] = useState('');

	function handleSubmit(submitedTerm) {
		console.log('test');
	}

	// const images = ;

	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />

			<ImageList images='test' />
		</div>
	)
};

export default App;