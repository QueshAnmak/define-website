import * as teamData from '../data/members.json';
import '../styles/team-member-list.scss';
import { profile } from "console";
import { TeamMemberCard } from "./TeamMemberCard";

interface Team
{
    teamName: String;
    teamMemberList: Array<Member>;
}

export interface Member
{
    name: string,
    github: string,
    linkedin: string,
}

export default function TeamMemberList ( props: Team )
{
    console.log( props.teamMemberList );

    return (
        <div className="team-member-list">
            <div className="team-heading">{ props.teamName }</div>
            <div className="team-cards-container">
                {
                    ( props.teamMemberList )?.map( ( member: Member ) =>
                    {
                        return <TeamMemberCard member={ member } />;
                    } )
                }
            </div>
        </div>
    );
}
