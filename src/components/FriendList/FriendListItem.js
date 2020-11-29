import React from 'react';
import s from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={s.item}>
            <span className={isOnline ? s.isOnline : s.isOffline}/>
            <img className={s.avatar} src={avatar} alt={name} width="48"/>
            <p className="name">{name}</p>
        </li>
    );
}
