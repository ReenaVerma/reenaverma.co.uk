import './App.scss';
import ComputerText from "./components/ComputerText/ComputerText";
import AboutText from "./components/AboutText/AboutText";

function App() {
	return (
		<>
			<header>
				<div class="header__content">
					<ComputerText></ComputerText>
				</div>
			</header>
			<main>
				<AboutText></AboutText>
				<code>{"</>"}</code>
			</main>
		</>
	);
}

export default App;
