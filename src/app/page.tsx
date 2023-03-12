"use client";

import IconBox from "../components/(elements)/iconBox/iconBox.component";
import SearchBox from "../components/(elements)/iconBox/searchBox/searchBox.component";
import CategorySlider from "../components/(pages)/home/categorySlider/categorySlider.component";

import {
  EntrepreneurIcon,
  ManagementIcon,
  MarketingIcon,
  MenuIcon,
  TourismIcon,
} from "../components/(svgs)";
import { FilterIconAlt } from "../components/(svgs)";
import { SearchIcon } from "../components/(svgs)";
import { FinanceIcon } from "../components/(svgs)";

import style from "./page.module.css";

const HomePage = () => {
  return (
    <div className={style.pageContainer}>
      <div className={style.heroContainer}>
        <div className={style.headerContainer}>
          <p className="body-B-Large">
            Search From Over 2250+
            <br />
            Performance Indicators
          </p>
          <IconBox Icon={MenuIcon} size="40px" className={style.menu} />
        </div>
        <div className={style.searchContainer}>
          <SearchBox>
            <IconBox
              Icon={FilterIconAlt}
              size="40px"
              className={style.filter}
            />
          </SearchBox>
        </div>
        <CategorySlider
          categories={[
            {
              link: "/managment",
              color: "var(--managmentYellow)",
              Icon: ManagementIcon,
            },
            {
              link: "/",
              color: "var(--entrepreneurGrey)",
              Icon: EntrepreneurIcon,
            },
            {
              link: "/",
              color: "var(--financeGreen)",
              Icon: FinanceIcon,
            },
            {
              link: "/",
              color: "var(--hospitalityBlue)",
              Icon: TourismIcon,
            },
            {
              link: "/",
              color: "var(--marketingRed)",
              Icon: MarketingIcon,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HomePage;
