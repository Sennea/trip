import React from "react";

import styles from "./Map.module.scss";

import { createPortal } from "react-dom";
import Modal from "../Modal";
import compass from "../../images/compass.png";

export interface MapPropTypes {
  map: { title: string; mapImage: string; id: string; level: number }[];
}

const Map: React.FC<MapPropTypes> = ({ map }) => {
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => {
          setModal(true);
        }}
        className={styles.expand}
      >
        <img className={styles.icon} alt="" src={compass} />
      </div>
      {modal &&
        createPortal(
          <div onClick={() => setModal(false)}>
            <Modal currentScroll={window.pageYOffset} data={map} />
          </div>,
          document.getElementById("modal")!
        )}
    </div>
  );
};

export default Map;
