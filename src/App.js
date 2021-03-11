import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyles } from './Global';
import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
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
						<Route path='/' exact component={Home} />
						<Route path='/search' component={Search} />
					</main>
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
