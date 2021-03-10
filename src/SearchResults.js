import React from 'react';

const SearchResults = ({ lastSearch, jokes }) => {
	console.log(jokes);
	return (
		<div>
			<div>
				<h1>Results!</h1>
				<p>Search Results for {lastSearch}:</p>
				{/* Renders only if jokes and jokes.results exists. */}
				{jokes?.results?.map((joke) => {
					return (
						<div key={joke.id}>
							<h1>{joke.joke}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SearchResults;
