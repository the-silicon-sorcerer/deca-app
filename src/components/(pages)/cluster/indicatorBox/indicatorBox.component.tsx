import { IndicatorData, Area } from "@prisma/client";

import AreaBox from "../../../(elements)/areaBox/areaBox.component";

import style from "./indicatorBox.module.css";

interface IndicatorBoxProps {
  data: IndicatorData & {
    area: Area & {
      IndicatorData: IndicatorData[];
    };
  };
}

const IndicatorBox = ({ data }: IndicatorBoxProps) => {
  return (
    <div className={style.indicatorContainer}>
      <p className="body-B-Medium">{data.indicator}</p>
      <p className="body-Medium">{data.text}</p>
      <AreaBox area={data.areaId} indicators={data.area.IndicatorData.length} />
    </div>
  );
};

export default IndicatorBox;
