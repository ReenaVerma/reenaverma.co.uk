import './App.scss';
import ComputerText from "./components/ComputerText/ComputerText";
import AboutText 	from "./components/AboutText/AboutText";
import Skills 		from './components/Skills/Skills';

function App() {
	return (
		<>
			<header>
				<div class="header__content">
					<ComputerText />
				</div>
			</header>
			<main>
				<AboutText />
				<code>{"</>"}</code>
				<Skills />
			</main>
		</>
	);
}

export default App;
