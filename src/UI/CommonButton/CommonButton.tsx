import React, { FC, useMemo } from "react";

import s from "./CommonButton.module.css";

interface Props {
  width: number;
  height: number;
  text: string;
}

export const CommonButton: FC<Props> = ({ width, height, text }) => {
  const style = useMemo(() => {
    return {
      width: width,
      height: height,
    };
  }, [height, width]);

  return (
    <button
      data-elem="search-button"
      type="submit"
      style={style}
      className={s.button}
    >
      {text}
    </button>
  );
};
