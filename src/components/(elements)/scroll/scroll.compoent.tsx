"use client";

import IconBox from "../iconBox/iconBox.component";

import { UpArrowIcon } from "../../(svgs)";

import style from "./scroll.module.css";
import { useState } from "react";

const Scroll = () => {
  const [hidden, hide] = useState(true);

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
      style={{ bottom: hidden ? "-100px" : "-20px" }}
    >
      <p className="body-Medium">BACK TO TOP</p>
      <UpArrowIcon style={{ fill: "white" }} />
    </div>
  );
};

export default Scroll;
