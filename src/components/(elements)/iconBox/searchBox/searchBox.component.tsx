"use client";

import { SearchIcon } from "../../../(svgs)";
import { Dispatch, SetStateAction } from "react";

import style from "./searchBox.module.css";

interface SearchBoxProps {
  children: React.ReactNode;
  before?: boolean;
  outline?: boolean;
  shadow?: boolean;
  dispatch?: Dispatch<SetStateAction<string>>;
}

const SearchBox = ({
  children,
  before,
  outline,
  shadow,
  dispatch,
}: SearchBoxProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatch) dispatch(e.target.value);
  };

  return (
    <div className={style.searchContainer}>
      {before && children}
      <div
        className={style.searchBox}
        style={{
          border: outline ? "var(--border)" : undefined,
          boxShadow: shadow ? "var(--iconShadow)" : undefined,
        }}
      >
        <SearchIcon style={{ fill: "#7C8689" }} />
        <input onChange={onChange} placeholder="Search Indicators" />
      </div>
      {before || children}
    </div>
  );
};

export default SearchBox;
