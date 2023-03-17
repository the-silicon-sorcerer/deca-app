"use client";

import { SearchIcon } from "../../../(svgs)";
import { useEffect, useRef, useState } from "react";

import style from "./searchBox.module.css";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../../loadingSpinner/loadingSpinner.component";

interface SearchBoxProps {
  children: React.ReactNode;
  before?: boolean;
  outline?: boolean;
  shadow?: boolean;
  url?: string;
  placeholder?: string;
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
  const [search, setSearch] = useState(false);

  //failsafe if search is the same

  setTimeout(() => {
    setSearch(false);
  }, 10000);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(true);
    router.push(`${url}/${inputRef.current.value.trim()}/1`);
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
      {search && (
        <div className={style.spinner}>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
