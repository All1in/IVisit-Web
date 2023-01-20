import React from "react"
import Petrichenko from "../team-members/petrichenko/Petrichenko" 
import Member from "./member/Member";
import "./TeamMembers.scss"

const TeamMembers = (props) => {
  return (
    <div className="team-members">
        <div className="team-members-headline">Team Members</div>
        <div className="team-member">
            <div className="team-member-img">
                <Petrichenko />
            </div>
            <Member
                name="Vladimir Bolgarin"
                proffesion="Founder"
                description="Normalniy pacan realno skazat nechego, 
                            damn thottie realniy blessed n goddamned 
                            boy 4 real 123312 228 322 44 5 "
            />
        </div>
        <div className="team-member">
            <div className="team-member-img">
                <Petrichenko/>
            </div>
            <Member
                    name="Vladimir Bolgarin"
                    proffesion="Founder"
                    description="Normalniy pacan realno skazat nechego, 
                                damn thottie realniy blessed n goddamned 
                                boy 4 real 123312 228 322 44 5 "
                />
        </div>
        <div className="team-member">
        <div className="team-member-img">
                <Petrichenko/>
            </div>
            <Member
                    name="Vladimir Bolgarin"
                    proffesion="Founder"
                    description="Normalniy pacan realno skazat nechego, 
                                damn thottie realniy blessed n goddamned 
                                boy 4 real 123312 228 322 44 5 "
                />
        </div>
        <div className="team-member">
        <div className="team-member-img">
                <Petrichenko/>
            </div>
            <Member
                    name="Vladimir Bolgarin"
                    proffesion="Founder"
                    description="Normalniy pacan realno skazat nechego, 
                                damn thottie realniy blessed n goddamned 
                                boy 4 real 123312 228 322 44 5 "
                />
        </div> 
        <div className="team-member">
        <div className="team-member-img">
                <Petrichenko/>
            </div>
            <Member
                    name="Vladimir Bolgarin"
                    proffesion="Founder"
                    description="Normalniy pacan realno skazat nechego, 
                                damn thottie realniy blessed n goddamned 
                                boy 4 real 123312 228 322 44 5 "
                />
        </div>
    </div>
  )
};

export default TeamMembers;
