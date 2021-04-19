import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// PAGES
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
// import Packages from './components/pages/Packages';
import ContactUs from './components/ContactUs';
import BookDate from './components/pages/BookDate';


function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/packages" component={ContactUs} />
					<Route path="/book-date" component={BookDate} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
