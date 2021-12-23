import { useEffect, useState } from 'react';
import * as memberData from '../data/members.json';
import '../styles/MemberList.scss';

interface propInterface {
    heading: String
    teamList: Array<any>
}

function MemberList(prop: propInterface) {

    interface Member {
        name: string,
        profileImage: string,
        description: string,
    }

    // const [memberList, setMemberList] = useState<any>((memberData as any).default || null);

    async function getMembers() {
        // const response = await fetch('https://api.github.com/orgs/hash-define-organization/members');
        // const data = await response.json();
        // setMemberList(data);
    }

    // useEffect(()=>{
    //     getMembers();
    // },[]);

    // console.log(prop.teamList)

    return (
        <div className = "member_list">
            <div className="list__heading">{prop.heading}</div>
            <div className="member_list--container">
                {
                    prop.teamList?.map((member: any) => {
                        
                        let currImage;
                        
                        try {
                            currImage = require(`../assets/images/${member.Name}.jpg`);
                            // console.log(currImage)
                        }
                        catch {
                            currImage = require(`../assets/images/default.jpg`);
                        }

                        return <>
                            <div className="member">
                                <img src={(currImage as any).default} alt={member.Name} className = "member__image"  />
                            </div>
                        </>

                    })
                }
            </div>
        </div>
    )
}

export default MemberList;