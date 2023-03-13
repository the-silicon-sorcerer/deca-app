import { prisma } from "../../../server/db";

import Buffer from "../../../components/(elements)/buffer/buffer.component";
import IconBox from "../../../components/(elements)/iconBox/iconBox.component";
import SearchBox from "../../../components/(elements)/iconBox/searchBox/searchBox.component";
import { BackIcon, MarketingIcon } from "../../../components/(svgs)";

import style from "./page.module.css";
import IndicatorBox from "../../../components/(pages)/cluster/indicatorBox/indicatorBox.component";
import Scroll from "../../../components/(elements)/scroll/scroll.compoent";

const MarketingPage = async () => {
  const indicators = await prisma.indicatorData.findMany({
    where: {
      Categories: { some: { name: "MARKETING" } },
    },
    include: {
      area: {
        include: {
          IndicatorData: true,
        },
      },
    },
    take: 10,
  });
  const generateIndicators = () => {
    const gen = [];
    for (let indicator of indicators) {
      gen.push(<IndicatorBox data={indicator} />);
    }
    return gen;
  };

  return (
    <div className={style.pageContainer}>
      <div className={style.header}>
        <p className="body-B-Large">MARKETING CAREER CLUSTER</p>
        <MarketingIcon
          style={{
            position: "absolute",
            top: "50px",
            left: "50px",
            scale: "3",
            opacity: "20%",
          }}
        />
      </div>
      <Buffer height="76px" />
      <SearchBox before outline>
        <IconBox Icon={BackIcon} size="40px" outline link="/" />
      </SearchBox>
      <div className={style.indicatorContainer}>{generateIndicators()}</div>
      <Scroll />
    </div>
  );
};

export default MarketingPage;
