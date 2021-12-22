import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Member } from "./TeamMemberList";
import '../styles/team-member-card.scss';

function getProfileImage ( memberName: string )
{
    let profileImage;

    try
    {
        profileImage = require( `../assets/images/${ memberName }.jpg` );
    }
    catch {
        profileImage = require( `../assets/images/default.jpg` );
    }

    finally
    {
        console.log( profileImage );
        return profileImage;
    }
}
export function TeamMemberCard ( props: any )
{
    let member: Member = props.member;

    return (
        <div className="team-member-card">
            <div className="card-data">
                <img src={ getProfileImage( member.name ).default } alt={ member.name } className="team-member-image" />
                <span className='team-member-name'>{ member.name }</span>
                <div className="card-button-container">
                    <a href={ member.github } className="card-button">
                        <FontAwesomeIcon icon={ faGithub } className="team-card-icon" />
                    </a>
                    <a href={ member.linkedin } className="card-button">
                        <FontAwesomeIcon
                            icon={ faLinkedin }
                            className="team-card-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}
