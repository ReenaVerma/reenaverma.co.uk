import { useState, useEffect } from "react";
import './Header.scss';

const titleName = "Hello... I'm Reena Verma (^-^*)";

function ComputerText() {
	const [displayedName, setDisplayedName] = useState("");

	useEffect(() => {
		const chars 	= [...titleName];
		const delay 	= 100;
		let currentText = "";

		function updateText(i) {
			currentText += chars[i];
			setDisplayedName(currentText);
		};

		for (let i = 0; i < chars.length; i++) {
			setTimeout(() => updateText(i), delay * i);
		};
	}, []);


    return (
		<>
		<div className="typewriter">
			<h1>{displayedName}<span className="typewriter__cursor" aria-hidden="true">_</span></h1>
			<h2 className="line l2">front-end developer</h2>
			<h3 className="line l3">javascript teacher</h3>
			<p><em>website is a work in progress. please ignore the temporary hideousness.</em></p>
		</div>
		</>
    );
};

export default ComputerText;