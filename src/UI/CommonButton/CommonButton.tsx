import React, { FC } from "react";
import s from "./CommonButton.module.css";

interface Props {
  width: number;
  height: number;
  text: string;
}

export const CommonButton: FC<Props> = ({ width, height, text }) => {
  return (
    <button
      type="submit"
      style={{ width: width, height: height, background: "#5e96fc" }}
      className={s.button}
    >
      {text}
    </button>
  );
};
