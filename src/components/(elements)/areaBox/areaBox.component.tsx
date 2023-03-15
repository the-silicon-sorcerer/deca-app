import { ArrowIconSmall } from "../../(svgs)";
import Link from "next/link";
import { generateAreaName } from "../../../utils/generateAreaName";

import style from "./areaBox.module.css";

interface AreaBoxProps {
  area: string;
  indicators: number;
}

const AreaBox = ({ area, indicators }: AreaBoxProps) => {
  const generateAreaName = (area: string) => {
    let name = area.split(/Area:/)[1];
    if (name && name?.replace(/\s/g, "").length >= 19) {
      name = name?.slice(0, 19).concat("...");
    }
    return name;
  };

  return (
    <Link href={`/area/${area}/1`} prefetch>
      <div className={style.container}>
        <div className={style.text}>
          <p className="body-B-Medium">{`${generateAreaName(area)}`}</p>
          <p className="body-Small">{`(${String(indicators)})`}</p>
        </div>
        <ArrowIconSmall />
      </div>
    </Link>
  );
};

export default AreaBox;
