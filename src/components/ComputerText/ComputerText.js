import { useState, useEffect } from "react";
import './ComputerText.scss';

const name = "reena verma\nfront-end developer";

function ComputerText() {
	const [displayedName, setDisplayedName] = useState("");

	const loopThroughText = (text, setText) => {
		const chars 	= [...text]; //splits letters into array
		const delay 	= 150;
		let currentText = "";

		for (let i = 0; i < chars.length; i++) {
			setTimeout(() => {
				currentText += chars[i];
				setText(currentText);
			}, delay * i);
		};
	};

	useEffect(() => {
		loopThroughText(name, setDisplayedName);
	}, []);

    return (
		<div className="typewriter">
			<h1>{displayedName}<span className="typewriter__cursor" aria-hidden="true">_</span></h1>
		</div>
    );
};

export default ComputerText;