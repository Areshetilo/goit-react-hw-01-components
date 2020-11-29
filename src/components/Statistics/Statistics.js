import React from "react";
import StatisticsList from "./StatisticsList";
import s from "./Statistics.module.css";

export default function Statistics({ statistics, title }) {
    return (
        <section className={s.statistics}>
            {title.length > 0 && <h2 className={s.title}>{title}</h2>}
            <StatisticsList statistics={statistics} />
        </section>
    );
}
