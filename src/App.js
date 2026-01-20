import './App.scss';
import Header from "./components/Header/Header";
import Navigation   from "./components/Navigation/Navigation";
import AboutText 	from "./components/AboutText/AboutText";
import Skills 		from './components/Skills/Skills';

function App() {
	return (
		<>
			<header>
				<div class="header__content">
					<Header />
				</div>
			</header>
			<Navigation />
			<main>
				<AboutText />
				<hr />
				<Skills />
				<hr />
			</main>
		</>
	);
}

export default App;
