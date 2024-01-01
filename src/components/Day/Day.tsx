import React from "react";

import styles from "./Day.module.scss";
import './Day.css';

export interface DayPropTypes {
  day: {
    title: string;
    parts: {
      details: string;
      title: string;
    }[];
  };
}

export const createId = (title: string) =>
  title.toLowerCase().replace(/\s/g, "");

const Day: React.FC<DayPropTypes> = ({ day }) => {
  return (
    <div key={day.title} id={createId(day.title)} className={styles.wrapper}>
      <h1 className={styles.fancyBig}>{day.title}</h1>
      {day.parts.map((detail) => (
        <div
        key={detail.title}
          id={createId(day.title + detail.title)}
          className={styles.detailsWrapper}
        >
          <h2 className={styles.fancySub}>{detail.title}</h2>
            <div
              className={styles.info}
              dangerouslySetInnerHTML={{ __html: detail.details }}
            ></div>
        </div>
      ))}
    </div>
  );
};

export default Day;
