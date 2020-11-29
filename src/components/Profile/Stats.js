import React from "react";
import s from "./Stats.module.css";

export default function Stats({ followers, views, likes }) {
    console.log();
    return (
        <ul className={s.stats}>
            <li className={s.item}>
                <p className={s.label}>Followers</p>
                <p className={s.quantity}>{followers}</p>
            </li>
            <li className={s.item}>
                <p className={s.label}>Views</p>
                <p className={s.quantity}>{views}</p>
            </li>
            <li className={s.item}>
                <p className={s.label}>Likes</p>
                <p className={s.quantity}>{likes}</p>
            </li>
        </ul>
    );
}
