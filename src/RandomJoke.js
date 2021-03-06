import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

const RandomJoke = () => {
	const [joke, setJoke] = useState([]);

	const getJoke = () => {
		const url = 'https://icanhazdadjoke.com/';
		//A custom header was required for this API to have the response be in JSON format.
		fetch(url, { headers: { Accept: 'application/json' } })
			.then((res) => res.json())
			.then((res) => {
				setJoke(res);
			})
			.catch(console.error);
	};
	useEffect(getJoke, []);
	return (
		<div>
			{joke ? (
				<Card>
					<h1>{joke.joke}</h1>
				</Card>
			) : null}
			<Button onClick={getJoke}>What's the Damage?</Button>
		</div>
	);
};

export default RandomJoke;
