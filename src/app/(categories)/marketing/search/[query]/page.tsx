import { prisma } from "../../../../../server/db";
import InfoDisplay from "../../../../../components/(pages)/cluster/infoDisplay/infoDisplay.component";

const MarketingSearchPage = async ({
  params,
}: {
  params: { query: string };
}) => {
  const indicators = await prisma.indicatorData.findMany({
    where: {
      indicator: {
        contains: params.query.replace(/%20/g, " "),
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
    take: 50,
  });

  if (indicators.length === 0) {
    return <div>no results</div>;
  }

  return (
    <InfoDisplay
      indicators={indicators}
      page={Number(params.query)}
      color="var(--marketingRed)"
    />
  );
};

export default MarketingSearchPage;
