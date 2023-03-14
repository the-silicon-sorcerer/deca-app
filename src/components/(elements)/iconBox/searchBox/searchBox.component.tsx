"use client";

import { SearchIcon } from "../../../(svgs)";
import { useRef } from "react";

import style from "./searchBox.module.css";
import { useRouter } from "next/navigation";

interface SearchBoxProps {
  children: React.ReactNode;
  before?: boolean;
  outline?: boolean;
  shadow?: boolean;
  url?: string;
}

const SearchBox = ({
  children,
  before,
  outline,
  shadow,
  url,
}: SearchBoxProps) => {
  const router = useRouter();
  const inputRef = useRef({} as HTMLInputElement);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${url}/${inputRef.current.value.trim()}`);
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
        <form onSubmit={onSubmit}>
          <input ref={inputRef} placeholder="Search Indicators" />
        </form>
      </div>
      {before || children}
    </div>
  );
};

export default SearchBox;
