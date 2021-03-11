import React from 'react';
import Card from './Card';
import Grid from './Grid';

const SearchResults = ({ lastSearch, jokes }) => {
	return (
		<div className='search-results'>
			<h2>Search Results for {lastSearch}:</h2>
			<Grid>
				{/* Renders only if jokes and jokes.results exists. */}
				{jokes?.results?.map((joke) => {
					return (
						<Card key={joke.id}>
							<h1>{joke.joke}</h1>
						</Card>
					);
				})}
			</Grid>
		</div>
	);
};

export default SearchResults;
