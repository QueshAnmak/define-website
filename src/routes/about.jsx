import Header from "../components/header";
import Footer from "../components/footer";
import PageTemplate from "./PageTemplate";
import Carousel from "../components/Carousel";

export default function About ()
{
	return (
		<PageTemplate>
			<div className="carousel-container">
				<div className="tmk">
				<Carousel />
				</div>
			</div>
		</PageTemplate>
	);
}
