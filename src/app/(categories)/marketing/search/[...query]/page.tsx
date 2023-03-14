import { prisma } from "../../../../../server/db";
import InfoDisplay from "../../../../../components/(pages)/cluster/infoDisplay/infoDisplay.component";
import { notFound } from "next/navigation";

const MarketingSearchPage = async ({
  params,
}: {
  params: { query: string[] };
}) => {
  if (!Number(params.query[1])) notFound();

  const totPages = await prisma.indicatorData
    .findMany({
      where: {
        indicator: {
          contains: params.query[0] && params.query[0].replace(/%20/g, " "),
        },
        Categories: { some: { name: "MARKETING" } },
      },
    })
    .then((data) => {
      return Math.ceil(data.length / 50);
    });

  const indicators = await prisma.indicatorData.findMany({
    where: {
      indicator: {
        contains: params.query[0] && params.query[0].replace(/%20/g, " "),
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
    skip: (Number(params.query[1]) - 1) * 50,
    take: 50,
  });

  if (indicators.length === 0) {
    return <div>no results</div>;
  }

  return (
    <InfoDisplay
      totPages={totPages}
      page={Number(params.query[1])}
      indicators={indicators}
      color="var(--marketingRed)"
      baseUrl={`marketing/search/${
        params.query[0] && params.query[0].replace(/%20/g, " ")
      }`}
    />
  );
};

export default MarketingSearchPage;
