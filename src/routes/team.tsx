import Header from "../components/header";
import Footer from "../components/footer";

import '../styles/team-page.scss'
import MemberList from "../components/MemberList";
import PageTitle from "../components/PageTitle";

function Team() {
	return (
		<div id="app">
			<Header />
			<section id="main">
				
				<PageTitle title="The Team" />
				<MemberList heading="Founders" />
				<MemberList heading="Leaders" />
				<MemberList heading="Senior Council" />

			</section>
			<Footer />
		</div>
	);
}

export default Team;