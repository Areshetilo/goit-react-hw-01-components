import React from 'react';
import Description from "./Description";
import Stats from "./Stats";
import s from './Profile.module.css';


function Profile({ userData }) {
    console.log(userData);
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

// <div className="profile">
//     <div className="description">
//         <img
//             src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
//             alt="Аватар пользователя"
//             className="avatar"
//         />
//         <p className="name">Petra Marica</p>
//         <p className="tag">@pmarica</p>
//         <p className="location">Salvador, Brasil</p>
//     </div>
//
//     <ul className="stats">
//         <li>
//             <span className="label">Followers</span>
//             <span className="quantity">1000</span>
//         </li>
//         <li>
//             <span className="label">Views</span>
//             <span className="quantity">2000</span>
//         </li>
//         <li>
//             <span className="label">Likes</span>
//             <span className="quantity">3000</span>
//         </li>
//     </ul>
// </div>


// import user from 'путь/к/user.json;
//
// <Profile
// name={user.name}
// tag={user.tag}
// location={user.location}
// avatar={user.avatar}
// stats={user.stats}
// />
