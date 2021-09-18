import React from "react";
import css from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClass = [css.myModal];
  if (visible) {
    rootClass.push(css.active);
  }

  return (
    <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
      <div className={css.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
