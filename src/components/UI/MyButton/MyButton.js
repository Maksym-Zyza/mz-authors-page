import React from "react";
import css from "./MyButton.module.css";

function MyButton({ children, ...props }) {
  return (
    <button {...props} className={css.MyBtn}>
      {children}
    </button>
  );
}

export default MyButton;
