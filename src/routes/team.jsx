import Header from "../components/header";
import Footer from "../components/footer";
import PageTitle from "../components/PageTitle.tsx";

import '../styles/team-page.scss'

export default function Team() {
	return (
		<div id="app">
			<Header />
			<section id="main">
				
				<PageTitle title="The Team"/>

			</section>
			<Footer />
		</div>
	);
}
