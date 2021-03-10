import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import Input from './Input';

const Search = () => {
	const [searchString, setSearchString] = useState('dogs');
	const [jokes, setJokes] = useState([]);
	const [lastSearch, setLastSearch] = useState('');

	const getJokes = (searchString) => {
		const url = `https://icanhazdadjoke.com/search?term=${searchString}`;
		fetch(url, { headers: { Accept: 'application/json' } })
			.then((res) => res.json())
			.then((res) => {
				//sets response json to jokes
				setJokes(res);
				//sets the search to lastSearch to be displayed
				setLastSearch(searchString);
				//resets search bar
				setSearchString('');
			})
			.catch(console.error);
	};
	useEffect(() => {
		getJokes(searchString);
	}, []);

	const handleChange = (event) => {
		setSearchString(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getJokes(searchString);
		console.log(jokes);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input
					type='text'
					placeholder='Go For It Champ'
					required
					onChange={handleChange}
					value={searchString}
				/>
			</form>
			<SearchResults lastSearch={lastSearch} jokes={jokes} />
		</div>
	);
};

export default Search;
