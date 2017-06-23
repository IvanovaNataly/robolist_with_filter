import React from 'react';

export default function Profile (props) {
    let { profile } = props;
        return (
            <div className="profile">
                <div className="profile-container">
                    <img className="profImg" src={profile.avatar}  />
                    <h3 className="headline">{profile.first_name} {profile.last_name}</h3>
                    <p className="paragraph">
                        {profile.email}
                    </p>
                    <p className="paragraph">
                        {profile.country}
                    </p>
                    <p className="paragraph">
                        {profile.description}
                    </p>
                </div>
            </div>
        )
    
}