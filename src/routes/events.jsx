import Header from "../components/header";
import Footer from "../components/footer";
import PageTitle from "../components/PageTitle.tsx";
import EventGrid from "../components/EventGrid";

export default function Events()
{
	return (
		<div id="app">
			<Header />
			<section id="main">
				<PageTitle title="Events" />
				<EventGrid />
			</section>
			<Footer />
		</div>
	);
}
