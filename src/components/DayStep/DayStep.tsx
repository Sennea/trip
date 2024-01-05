import React, { createRef, useEffect, useRef, useState } from "react";

import styles from "./DayStep.module.scss";
import "./DayStep.css";
import clsx from "clsx";

export interface DayStepPropTypes {
  id: string;
  content: string;
  title: string;
}

export const createId = (title: string) =>
  title.toLowerCase().replace(/\s/g, "");

const DayStep: React.FC<DayStepPropTypes> = ({ id, title, content }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  // console.log("IS INTER", isIntersecting, title);
  const ref = useRef(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return setIsIntersecting(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          document.getElementById(`navigation_${id}`)?.classList.add(styles.bold);
          // observer.unobserve(entry.target);
        }
        if(!entry.isIntersecting){
          console.log("document.getElementById(`nav_${id}`)", document.getElementById(`nav_${id}`))
          document.getElementById(`navigation_${id}`)?.classList.remove(styles.bold);
          setIsIntersecting(false);
        }
      },
      { threshold: 0.1 }
    );
    console.log("WT");
    if (ref.current) observer.observe(ref.current!);

    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
    key={title}
    id={id}
    className={clsx(
      styles.detailsWrapper,
      isIntersecting ? styles.animate : ""
      )}
      >
      <h2 className={styles.fancySub}>{title}</h2>
      <div
      ref={ref}
        className={clsx(styles.info, isIntersecting ? styles.animate : "") }
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default DayStep;
