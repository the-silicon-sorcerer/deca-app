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
  category?: Category;
  area?: string;
  all?: boolean;
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
  area,
  all,
}: IndicatorPageProps) => {
  const param = all
    ? {
        indicator: {
          contains: query ? query.replace(/%20/g, " ") : " ",
        },
      }
    : {
        indicator: {
          contains: query ? query.replace(/%20/g, " ") : " ",
        },
        ...(area && { areaId: area }),
        ...(category && { Categories: { some: { name: category } } }),
      };

  if (!Number(page) || !param) notFound();

  const totPages = await prisma.indicatorData
    .findMany({
      where: param,
    })
    .then((data) => {
      return Math.ceil(data.length / chunkSize);
    });

  const indicators = await prisma.indicatorData.findMany({
    where: param,
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
