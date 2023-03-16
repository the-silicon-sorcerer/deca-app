"use client";

import style from "./infoDisplay.module.css";

import IndicatorBox from "../indicatorBox/indicatorBox.component";
import type { CategoryIndicators } from "../../../../types/categoryIndicators";
import SearchBox from "../../../(elements)/iconBox/searchBox/searchBox.component";
import IconBox from "../../../(elements)/iconBox/iconBox.component";
import { BackIcon } from "../../../(svgs)";
import PaginationFooter from "../../../(elements)/pageinationFooter/paginationFooter.component";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface InfoDisplayProps {
  indicators: CategoryIndicators;
  color: string;
  page: number;
  totPages: number;
  baseUrl: string;
  searchUrl: string;
  results?: string;
  noResults?: boolean;
  tot: number;
}

const InfoDisplay = ({
  indicators,
  page,
  color,
  totPages,
  baseUrl,
  noResults,
  results,
  searchUrl,
  tot,
}: InfoDisplayProps) => {
  useEffect(() => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const generateIndicators = (indicators: CategoryIndicators) => {
    const gen = [];
    for (const indicator of indicators) {
      gen.push(<IndicatorBox data={indicator} key={Math.random()} />);
    }
    return gen;
  };

  return (
    <>
      {results && (
        <p className="body-Small">
          {noResults
            ? `No results found for "${results}" :(`
            : `(${tot}) Search results for “${results}” : `}
        </p>
      )}
      <SearchBox url={searchUrl} before outline>
        <IconBox Icon={BackIcon} size="40px" outline link="/" />
      </SearchBox>

      <PaginationFooter
        path={baseUrl}
        page={page}
        color={color}
        totPages={totPages}
      >
        <div className={style.indicatorContainer}>
          {generateIndicators(indicators)}
        </div>
      </PaginationFooter>
    </>
  );
};

export default InfoDisplay;
