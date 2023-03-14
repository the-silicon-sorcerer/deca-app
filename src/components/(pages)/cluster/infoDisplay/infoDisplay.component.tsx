"use client";

import style from "./infoDisplay.module.css";

import IndicatorBox from "../indicatorBox/indicatorBox.component";
import type { CategoryIndicators } from "../../../../types/categoryIndicators";
import SearchBox from "../../../(elements)/iconBox/searchBox/searchBox.component";
import IconBox from "../../../(elements)/iconBox/iconBox.component";
import { BackIcon } from "../../../(svgs)";
import PaginationFooter from "../../../(elements)/pageinationFooter/paginationFooter.component";
import { useEffect, useState } from "react";
import { trpc } from "../../../../utils/trpcProvider";
import { Category } from "../../../../types/category";
import { IndicatorData } from "@prisma/client";

interface InfoDisplayProps {
  indicators: CategoryIndicators;
  color: string;
  page: number;
  totPages: number;
  category: Category;
}

const InfoDisplay = ({
  indicators,
  page,
  color,
  totPages,
  category,
}: InfoDisplayProps) => {
  const [searchState, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const categoryData = trpc.category.getCategory.useQuery({
    category: category,
  });

  useEffect(() => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const generateIndicators = (indicators: CategoryIndicators) => {
    const gen = [];
    for (let indicator of indicators) {
      gen.push(<IndicatorBox data={indicator} key={Math.random()} />);
    }
    return gen;
  };

  categoryData.data;

  const generateFiltered = (data: CategoryIndicators | undefined) => {
    const gen = [];
    if (data) {
      for (let obj of data) {
        if (obj.indicator.includes(searchState)) {
          gen.push(<IndicatorBox data={obj} key={Math.random()} />);
        }
      }
    }

    return gen;
  };

  return (
    <>
      <SearchBox dispatch={setSearch} before outline>
        <IconBox Icon={BackIcon} size="40px" outline link="/" />
      </SearchBox>

      {searchState.replace(/\s/g, "") ? (
        <>{generateFiltered(categoryData.data)}</>
      ) : (
        <PaginationFooter page={page} color={color} totPages={totPages}>
          <div className={style.indicatorContainer}>
            {generateIndicators(indicators)}
          </div>
        </PaginationFooter>
      )}
    </>
  );
};

export default InfoDisplay;
