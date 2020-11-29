import React from 'react';
import FriendListItem from "./FriendListItem";
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                );
            })}
        </ul>
    );
}
