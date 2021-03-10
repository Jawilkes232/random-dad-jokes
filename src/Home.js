import React from 'react';
import RandomJoke from './RandomJoke';

const Home = () => {
	return (
		<div>
			<h1>Random Dad Jokes</h1>
			<h2>
				Welcome to the random dad joke site, grab your grill master 300's and
				enjoy the ride, bud.
			</h2>
			<RandomJoke />
		</div>
	);
};

export default Home;
