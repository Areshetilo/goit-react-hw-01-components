import React from 'react';
import Description from "./Description";
import Stats from "./Stats";
import s from './Profile.module.css';


function Profile({ userData }) {
    return userData.map(({ name, tag, location, avatar, stats }) => {
        return (
            <div className={s.profile} key={name}>
                <Description
                    name={name}
                    avatar={avatar}
                    tag={tag}
                    location={location}
                />
                <Stats {...stats} />
            </div>
        );
    });

}

export default Profile;
