import './AboutText.scss';

function AboutText() {
    return (
		<section>
			<div className="two-column">
				<div className="two-column__left">
					<h3>about me</h3>
				</div>
				<div className="two-column__right">
					<h4>coder</h4>
					<p>Hello! I'm a Front-End Developer with 7 x years commercial experience and have loved what I do, ever since I graduated from General Assembley's Web Development Immersive Bootcamp in 2018!</p>
					<h4>javascript teacher</h4>
					<p>Not only do I love coding, but I also love to teach students to learn JavaScript and have enjoyed volunteer teaching roles with Code First Girls and General Assembly.  I look forward to teach students more this year, in my spare time.</p>
					<h4>prior experience</h4>
					<p>Prior to career changing, I spent my many years working in Digital across Website Production and CMS systems.</p>
				</div>
			</div>
		</section>
    );
};

export default AboutText;