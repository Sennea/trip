import React from "react";

import styles from "./Navigation.module.scss";

import cx from 'clsx';

export interface NavigationPropTypes {
  navigation: { title: string; id: string; level: number }[];
}

const Navigation: React.FC<NavigationPropTypes> = ({ navigation }) => {
  const [fade, setFade] = React.useState(false)
  return (
    <div>
      <div onClick={() => setFade(!fade)} className={styles.expand}>◀︎</div>
    <div className={cx(styles.wrapper, fade && styles.fade)}>
      <ul className={styles.list}>
        {navigation.map((nav) => (
          <li
            className={
              nav.level === 0 ? styles.listElement : styles.listSubElement
            }
            onClick={() => {
              setFade(false);
              document.getElementById(nav.id)?.scrollIntoView({behavior: 'smooth'});
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
