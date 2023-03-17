import { prisma } from "../server/db";
import { Area, IndicatorData } from "@prisma/client";
import IconBox from "../components/(elements)/iconBox/iconBox.component";
import SearchBox from "../components/(elements)/iconBox/searchBox/searchBox.component";
import CategorySlider from "../components/(pages)/home/categorySlider/categorySlider.component";
import Buffer from "../components/(elements)/buffer/buffer.component";
import AreaBox from "../components/(elements)/areaBox/areaBox.component";

import {
  EntrepreneurIcon,
  ManagementIcon,
  MarketingIcon,
  MenuIcon,
  TourismIcon,
  FilterIconAlt,
  FinanceIcon,
} from "../components/(svgs)";

import style from "./page.module.css";
import Alert from "../components/(elements)/alert/alert.component";

const HomePage = async () => {
  const areas = await prisma.area.findMany({
    include: {
      IndicatorData: true,
    },
  });

  const generateAreas = (
    areas: (Area & {
      IndicatorData: IndicatorData[];
    })[]
  ) => {
    const gen = [];
    for (const area of areas) {
      gen.push(
        <AreaBox
          key={area.name}
          area={area.name}
          indicators={area.IndicatorData.length}
        />
      );
    }
    return gen;
  };

  return (
    <div className={style.pageContainer}>
      <div className={style.heroContainer}>
        <div className={style.headerContainer}>
          <p className="body-B-Large">
            Search From Over 2250+
            <br />
            Performance Indicators
          </p>
          <Alert message="Menu comming soon...">
            <IconBox Icon={MenuIcon} size="40px" className={style.menu} />
          </Alert>
        </div>
        <div className={style.searchContainer}>
          <SearchBox url="/search" shadow>
            <Alert message="Filter comming soon...">
              <IconBox
                Icon={FilterIconAlt}
                size="40px"
                className={style.filter}
                shadow
              />
            </Alert>
          </SearchBox>
        </div>
        <CategorySlider
          categories={[
            {
              link: "/management/1",
              color: "var(--managementYellow)",
              Icon: ManagementIcon,
            },
            {
              link: "/entrepreneur/1",
              color: "var(--entrepreneurGrey)",
              Icon: EntrepreneurIcon,
            },
            {
              link: "/finance/1",
              color: "var(--financeGreen)",
              Icon: FinanceIcon,
            },
            {
              link: "/hospitality/1",
              color: "var(--hospitalityBlue)",
              Icon: TourismIcon,
            },
            {
              link: "/marketing/1",
              color: "var(--marketingRed)",
              Icon: MarketingIcon,
            },
          ]}
        />
      </div>
      <Buffer height="300px" />
      <div className={style.areasContainer}>
        <div className={style.areasHeader}>
          <h5>Instructional Areas:</h5>
          <p className="body-Small underline">View all</p>
        </div>
        <div className={style.boxContainer}>{generateAreas(areas)}</div>
      </div>
    </div>
  );
};

export default HomePage;
