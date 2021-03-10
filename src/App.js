import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import './App.css';

function App() {
	return (
		<div className='App'>
			<nav>
				<Link to='/'>
					<h1>Home</h1>
				</Link>
				<Link to='/search'>
					<h1>Search</h1>
				</Link>
			</nav>
			<main>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/search'>
					<Search />
				</Route>
			</main>
		</div>
	);
}

export default App;
