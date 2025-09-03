import { useState, useEffect } from "react";
import './ComputerText.scss';

const name = "reena verma\nfront-end developer";

function ComputerText() {
	const [displayedName, setDisplayedName] = useState("");

	useEffect(() => {
		const chars 	= [...name];
		const delay 	= 150;
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
		<div className="typewriter">
			<h1>{displayedName}<span className="typewriter__cursor" aria-hidden="true">_</span></h1>
		</div>
    );
};

export default ComputerText;