"use client";

import { UpArrowIcon } from "../../(svgs)";

import style from "./scroll.module.css";
import { useState } from "react";

interface ScrollProps {
  color: string;
}

const Scroll = ({ color }: ScrollProps) => {
  const [hidden, hide] = useState(true);

  // to fix hydration bug

  if (typeof window === "undefined") {
    return (
      <div
        className={style.container}
        onClick={() => onClick()}
        style={{ bottom: hidden ? "-100px" : "-20px", backgroundColor: color }}
      >
        <p className="body-Medium">BACK TO TOP</p>
        <UpArrowIcon style={{ fill: "white" }} />
      </div>
    );
  }

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
      hide(false);
    } else {
      hide(true);
    }
    prevScrollpos = currentScrollPos;
  };

  const onClick = () => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={style.container}
      onClick={() => onClick()}
      style={{ bottom: hidden ? "-100px" : "-20px", backgroundColor: color }}
    >
      <p className="body-Medium">BACK TO TOP</p>
      <UpArrowIcon style={{ fill: "white" }} />
    </div>
  );
};

export default Scroll;
