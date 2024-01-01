import React from "react";

import styles from "./Map.module.scss";

import cx from "clsx";
import { createPortal } from "react-dom";
import Modal from "../Modal";

export interface MapPropTypes {
  map: { title: string; mapImage: string; id: string; level: number }[];
}

const Map: React.FC<MapPropTypes> = ({ map }) => {
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => {
          setModal(true)
        }}
        className={styles.expand}
      >
        🚶🏼
      </div>
      {modal && createPortal(
        <div onClick={() => setModal(false)}>
        <Modal currentScroll={window.pageYOffset} data={map} />
        </div>,
        document.getElementById("modal")!
      )}
    </div>
  );
};

export default Map;
