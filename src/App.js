import './scss/main.scss';
import Header from "./components/Header/Header";
import Navigation   from "./components/Navigation/Navigation";
import AboutText 	from "./components/AboutText/AboutText";
import Skills 		from './components/Skills/Skills';
import Projects2026 from './components/Projects/Projects-2026';
import Projects2016 from './components/Projects/Projects-2016';

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
				<Projects2026 />
				<hr />
				<Projects2016 />
			</main>
		</>
	);
}

export default App;
