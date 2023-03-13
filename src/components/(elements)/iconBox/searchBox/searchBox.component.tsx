import { SearchIcon } from "../../../(svgs)";

import style from "./searchBox.module.css";

interface SearchBoxProps {
  children: React.ReactNode;
  before?: boolean;
  outline?: boolean;
  shadow?: boolean;
}

const SearchBox = ({ children, before, outline, shadow }: SearchBoxProps) => {
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
        <input placeholder="Search Indicators" />
      </div>
      {before || children}
    </div>
  );
};

export default SearchBox;
