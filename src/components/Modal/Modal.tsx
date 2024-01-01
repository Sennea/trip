import React, { useEffect } from "react";

import styles from "./Modal.module.scss";

import cx from "clsx";
import { createPortal } from "react-dom";

import day1 from "../../images/day1.png";
import day2 from "../../images/day2.png";
import day3 from "../../images/day3.png";
import atractions1 from "../../images/atractions1.png";
const imageNameMap: any = {
  day1: day1,
  day2: day2,
  day3: day3,
  atraction1: atractions1,
};

export interface ModalPropTypes {
  data: { title: string; id: string; mapImage: string; level: number }[];
  currentScroll: number;
}

const Modal: React.FC<ModalPropTypes> = ({ data, currentScroll }) => {
  const pickImage = () => {
    let image = "";
    let previous = Infinity;

    data
      .filter((e) => e.level === 0)
      .reverse()
      .forEach((el) => {
        const offsetHeightElement = document.getElementById(el.id)?.offsetTop;
        if (!offsetHeightElement) return;

        if (offsetHeightElement < currentScroll && currentScroll < previous ) {
          image = el.mapImage;
          previous = offsetHeightElement;
        }
      });
    return imageNameMap[image];
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={pickImage()}></img>
      </div>
    </div>
  );
};

export default Modal;
