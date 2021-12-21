import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/Carousel";

export default function About() {
	return (
		<div id="app">
			<Header />
				<section id="main">
					<Carousel/>
				</section>
			<Footer />
		</div>
	);
}
