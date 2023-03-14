import { IndicatorData, Area } from "@prisma/client";

export type CategoryIndicators = (IndicatorData & {
  area: Area & {
    IndicatorData: IndicatorData[];
  };
})[];
