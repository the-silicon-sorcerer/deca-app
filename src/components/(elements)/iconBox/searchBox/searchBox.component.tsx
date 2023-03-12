import { SearchIcon } from "../../../(svgs)";

import style from "./searchBox.module.css";

interface SearchBoxProps {
  children: React.ReactNode;
  before?: boolean;
}

const SearchBox = ({ children, before }: SearchBoxProps) => {
  return (
    <div className={style.searchContainer}>
      {before && children}
      <div className={style.searchBox}>
        <SearchIcon style={{ fill: "#7C8689" }} />
        <input placeholder="Search Indicators" />
      </div>
      {before || children}
    </div>
  );
};

export default SearchBox;
