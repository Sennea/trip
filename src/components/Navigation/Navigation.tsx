import React from "react";

import styles from "./Navigation.module.scss";
import menu from "../../images/menu.png";
import { useScroll } from "./useScroll";

import cx from "clsx";
import clsx from "clsx";

export interface NavigationPropTypes {
  navigation: { title: string; id: string; level: number }[];
}

const Navigation: React.FC<NavigationPropTypes> = ({ navigation }) => {
  const [fade, setFade] = React.useState<boolean>(false);
  const [fadeOut, setFadeOut] = React.useState<boolean | undefined>(undefined);

  return (
    <div>
      <div onClick={() => setFade(true)} className={styles.expand}>
        <img className={styles.icon} src={menu}></img>
      </div>
      <div
        className={cx(
          styles.wrapper,
          fade && styles.fade,
          fadeOut && styles.fadeOut
        )}
      >
        <div
          onClick={() => {
            setFadeOut(true);
            setFade(false);
            setTimeout(() => {
              setFadeOut(false);
            }, 501);
          }}
          className={styles.exit}
        >
          ⓧ
        </div>
        <ul className={styles.list}>
          {navigation.map((nav) => (
            <li
            id={`navigation_${nav.id}`}
              key={nav.id}
              className={clsx(
                nav.level === 0 ? styles.listElement : styles.listSubElement,
              )}
              onClick={() => {
                setFade(false);
                document
                  .getElementById(nav.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
