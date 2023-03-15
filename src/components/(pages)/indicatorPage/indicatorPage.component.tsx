import { prisma } from "../../../server/db";
import { notFound } from "next/navigation";
import InfoDisplay from "../cluster/infoDisplay/infoDisplay.component";
import { Category } from "../../../types/category";

interface IndicatorPageProps {
  page: string;
  baseUrl: string;
  searchUrl: string;
  color: string;
  query?: string;
  chunkSize: number;
  results?: string;
  category: Category;
}

const IndicatorPage = async ({
  page,
  color,
  baseUrl,
  searchUrl,
  query,
  chunkSize,
  results,
  category,
}: IndicatorPageProps) => {
  if (!Number(page)) notFound();

  const totPages = await prisma.indicatorData
    .findMany({
      where: {
        indicator: {
          contains: query ? query.replace(/%20/g, " ") : " ",
        },
        Categories: { some: { name: category } },
      },
    })
    .then((data) => {
      return Math.ceil(data.length / chunkSize);
    });

  const indicators = await prisma.indicatorData.findMany({
    where: {
      indicator: {
        contains: query ? query.replace(/%20/g, " ") : " ",
      },
      Categories: { some: { name: "MARKETING" } },
    },
    include: {
      area: {
        include: {
          IndicatorData: true,
        },
      },
    },
    skip: (Number(page) - 1) * chunkSize,
    take: chunkSize,
  });

  return (
    <InfoDisplay
      baseUrl={baseUrl}
      searchUrl={searchUrl}
      indicators={indicators}
      totPages={totPages}
      page={Number(page)}
      color={color}
      results={results ? results : undefined}
    />
  );
};

export default IndicatorPage;
