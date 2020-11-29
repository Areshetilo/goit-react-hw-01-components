import React from 'react';
import PropTypes from "prop-types";
import s from './Profile.module.css'

export default function Description({name, avatar, tag, location}) {
    return (
        <div className={s.description}>
            <img
                src={avatar}
                alt={name}
                className={s.avatar}
                width="150px"
            />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
    )
}

Description.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
};
