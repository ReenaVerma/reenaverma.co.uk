import htmlLogo from "../../images/logo_html.png";
import cssLogo from "../../images/logo_css.png";
import scssLogo from "../../images/logo_scss.png";
import jsLogo from "../../images/logo_js.png";
import nodejsLogo from "../../images/logo_nodejs.png";
import angularLogo from "../../images/logo_angular.png";
import reactLogo   from "../../images/logo_react.png";
import './Skill.scss';

function Skills() {
    return (
		<section>
			<h3>web development skills</h3>
            <div  className="skills">
                <div className="skills__container">
                    <img className="skills__logo" src={htmlLogo} alt="HTML logo"/>
                    <span>HTML5</span>
                </div>
                <div className="skills__container">
                    <img className="skills__logo" src={cssLogo} alt="CSS logo"/>
                    <span>CSS3</span>
                </div>
                <div className="skills__container">
                    <img className="skills__logo" src={scssLogo} alt="SCSS logo"/>
                    <span>SCSS</span>
                </div>
                <div className="skills__container">
                    <img className="skills__logo" src={jsLogo} alt="JavaScript logo"/>
                    <span>JavaScript</span>
                </div>
                <div className="skills__container">
                    <img className="skills__logo" src={nodejsLogo} alt="NodeJS logo"/>
                    <span>Node.JS</span>
                </div>
                <div className="skills__container">
                    <img className="skills__logo" src={angularLogo} alt="Angular logo"/>
                    <span>Angular</span>
                </div>
                <div className="skills__container">
                    <img className="skills__logo" src={reactLogo} alt="NodeJS logo"/>
                    <span>ReactJS</span>
                </div>
            </div>
		</section>
    );
};

export default Skills;