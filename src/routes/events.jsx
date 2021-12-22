import Header from "../components/header";
import Footer from "../components/footer";
import PageTitle from "../components/PageTitle.tsx";
import EventGrid from "../components/EventGrid";
import PageTemplate from "./PageTemplate";

export default function Events ()
{
	return (
		<PageTemplate>
			<PageTitle title="Events" />
			<EventGrid />
		</PageTemplate>
	);
}
