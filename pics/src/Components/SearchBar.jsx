const SearchBar = ({ onSubmit }) =>  {

	function handleFormSubmit(event) {
		event.preventDefault();
		
		onSubmit('cars');
	}

	return (
		<div>
			<form action="?" onSubmit={handleFormSubmit}>
				<input type="text" id="search" name='search' />
			</form>
		</div>
	)
};

export default SearchBar;