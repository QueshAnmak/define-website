// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// styles
import "../styles/header.scss";

// tools
import { Link } from "react-router-dom";

const NAV_BUTTON_LABELS = ["home", "events", "team", "about us"];

const Title = () => {
	return (
		<Link to="/" id="title">
			#DEFINE
		</Link>
	);
};

const getFirstWord = (string) => {
	return string.split(" ")[0];
};

const NavButton = (navButtonLabel) => {
	return (
		<th>
			<Link to={"/" + getFirstWord(navButtonLabel)} class="nav-button">
				{navButtonLabel}
			</Link>
		</th>
	);
};

const NavButtonContainer = () => {
	return (
		<table id="nav-button-container">
			{NAV_BUTTON_LABELS.map((label) => {
				return NavButton(label);
			})}
		</table>
	);
};

const NavBar = () => {
	return (
		<div id="navbar" class="row">
			<NavButtonContainer></NavButtonContainer>
			<a
				href="https://github.com/hash-define-organization"
				id="github-button"
				class="nav-button"
			>
				<FontAwesomeIcon icon={faGithub} className="nav-button icon" />
			</a>
			<a
				href="https://www.linkedin.com/company/defineweare/mycompany/"
				id="linkedin-button"
				class="nav-button"
			>
				<FontAwesomeIcon
					icon={faLinkedin}
					className="nav-button icon"
				/>
			</a>
			<a
				href="https://twitter.com/_HashDefine"
				id="twitter-button"
				class="nav-button"
			>
				<FontAwesomeIcon icon={faTwitter} className="nav-button icon" />
			</a>
		</div>
	);
};

export default function Header() {
	return (
		<section id="header">
			<Title />
			<NavBar />
		</section>
	);
}
