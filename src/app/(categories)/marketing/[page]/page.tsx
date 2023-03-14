import { prisma } from "../../../../server/db";
import InfoDisplay from "../../../../components/(pages)/cluster/infoDisplay/infoDisplay.component";
import { notFound } from "next/navigation";

const MarketingPage = async ({ params }: { params: { page: string } }) => {
  if (!Number(params.page)) notFound();

  const totPages = await prisma.indicatorData
    .findMany({
      where: {
        Categories: { some: { name: "MARKETING" } },
      },
    })
    .then((data) => {
      return Math.ceil(data.length / 50);
    });

  console.log(totPages);

  const indicators = await prisma.indicatorData.findMany({
    where: {
      Categories: { some: { name: "MARKETING" } },
    },
    include: {
      area: {
        include: {
          IndicatorData: true,
        },
      },
    },
    skip: (Number(params.page) - 1) * 50,
    take: 50,
  });

  return (
    <InfoDisplay
      indicators={indicators}
      totPages={totPages}
      page={Number(params.page)}
      color="var(--marketingRed)"
      category="MARKETING"
    />
  );
};

export default MarketingPage;
