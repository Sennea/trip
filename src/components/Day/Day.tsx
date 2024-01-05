import React, { useEffect, useRef, useState } from "react";

import styles from "./Day.module.scss";
import "./Day.css";
import clsx from "clsx";
import DayStep from "../DayStep";

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
    <div
      key={day.title}
      id={createId(day.title)}
      className={clsx(styles.wrapper)}
    >
      <h1 className={styles.fancyBig}>{day.title}</h1>
      {day.parts.map((detail) => (
        <DayStep id={createId(day.title + detail.title)} title={detail.title} content={detail.details} />
      ))}
    </div>
  );
};

export default Day;
