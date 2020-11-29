import React from "react";
import s from './StatisticsList.module.css';

export default function StatisticsList({ statistics }) {
    return (
        <ul className={s.statList}>
            {statistics.map(({ id, label, percentage }) => (
                <li
                    className={s.item}
                    style={{ backgroundColor: getColor() }}
                    key={id}
                >
                    <span className={s.label}>{label}</span>
                    <span className={s.percentage}>{percentage} %</span>
                </li>
            ))}
        </ul>
    );
}

function getColor() {
    return `rgb(${setRandomColor()},${setRandomColor()},${setRandomColor()})`;
}

function setRandomColor() {
    let randomColor = 0 + Math.random() * (255 + 1 - 0);
    return Math.floor(randomColor);
}
