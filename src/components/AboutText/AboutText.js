import './AboutText.scss';

function AboutText() {
    return (
		<section>
			<div className="two-column">
				<div className="two-column__left">
					<h3>about me</h3>
				</div>
				<div className="two-column__right">
					<h4>front-end developer</h4>
					<p>I'm a Front-End Developer with 7 x years commercial experience and have loved what I do, ever since I graduated from General Assembley's Web Development Immersive Bootcamp in 2018!</p>
					<p>I have a deep and solid understanding of JavaScript and in my currently role, develop small to complex features.</p>
					<h4>javascript teacher</h4>
					<p>Not only do I love coding, but I also love to teach students to learn JavaScript and have enjoyed volunteer teaching roles with <a href="https://codefirstgirls.com/" target="_blank" rel="noreferrer">Code First Girls</a> and <a href="https://generalassemb.ly/" target="_blank" rel="noreferrer">General Assembly</a>.  I look forward to teach students more this year, in my spare time.</p>
					<h4>prior experience</h4>
					<p>Prior to career changing, I spent my many years working in Digital across Website Production and CMS systems.</p>
				</div>
			</div>
		</section>
    );
};

export default AboutText;