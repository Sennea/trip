import React from "react";

import styles from "./Navigation.module.scss";

export interface NavigationPropTypes {
  navigation: { title: string; id: string; level: number }[];
}

const Navigation: React.FC<NavigationPropTypes> = ({ navigation }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {navigation.map((nav) => (
          <li
            className={
              nav.level === 0 ? styles.listElement : styles.listSubElement
            }
            onClick={() => {
              document.getElementById(nav.id)?.scrollIntoView({behavior: 'smooth'});
            }}
          >
            {nav.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
