import Header from "../components/header";
import Footer from "../components/footer";

import '../styles/team-page.scss';
import TeamMemberList from "../components/TeamMemberList";
import PageTitle from "../components/PageTitle";
import { useState } from "react";

import * as teamDataJson from '../assets/teamData.json';
import PageTemplate from "./PageTemplate";

// interface Team
// {
// 	teamName: String;
// 	teamMemberList: Array<Member>;
// }

// interface Member
// {
// 	name: string,
// 	github: string,
// 	linkedin: string,
// }

function Team ()
{
	const [ teamData, setTeamData ] = useState<any>( ( teamDataJson as any ).default );

	return (
		<PageTemplate>
			<PageTitle title="The Team" />
			{
				// TODO: make team strict
				teamData.map( ( team: any ) =>
				{
					return (
						<TeamMemberList teamName={ team.teamName } teamMemberList={ team.teamMemberList } />
					);
				} )
			}
		</PageTemplate>
	);
}

export default Team;