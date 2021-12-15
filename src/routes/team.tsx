import Header from "../components/header";
import Footer from "../components/footer";

import '../styles/team-page.scss'
import MemberList from "../components/MemberList";
import PageTitle from "../components/PageTitle";
import { useState } from "react";

import * as teamDataJson from '../assets/teamData.json';

function Team() {

	const [teamData, setTeamData] = useState<any>((teamDataJson as any).default);

	return (
		<div id="app">
			<Header />
			<section id="main">
				
				<PageTitle title="The Team" />

				{
					teamData.map((data: any) => {
						return (
							<MemberList heading={data["TeamName"]} teamList = {data.teamList} />
						)
					})
				}

			</section>
			<Footer />
		</div>
	);
}

export default Team;