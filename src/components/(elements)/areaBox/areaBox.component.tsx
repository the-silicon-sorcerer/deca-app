import { ArrowIconSmall } from "../../(svgs)";

import style from "./areaBox.module.css";

interface AreaBoxProps {
  area: string;
  indicators: number;
}

const AreaBox = ({ area, indicators }: AreaBoxProps) => {
  const generateArea = (area: string) => {
    let name = area.split(/Area:/)[1];
    if (name && name?.replace(/\s/g, "").length >= 21) {
      name = name?.slice(0, 21).concat("...");
    }
    return name;
  };

  return (
    <div className={style.container}>
      <div className={style.text}>
        <p className="body-B-Medium">{`${generateArea(area)}`}</p>
        <p className="body-Small">{`(${String(indicators)})`}</p>
      </div>
      <ArrowIconSmall />
    </div>
  );
};

export default AreaBox;
