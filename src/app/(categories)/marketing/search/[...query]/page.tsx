import { prisma } from "../../../../../server/db";
import InfoDisplay from "../../../../../components/(pages)/cluster/infoDisplay/infoDisplay.component";
import { notFound } from "next/navigation";

import IndicatorPage from "../../../../../components/(pages)/indicatorPage/indicatorPage.component";

const MarketingSearchPage = async ({
  params,
}: {
  params: { query: string[] };
}) => {
  const query = params.query[0]!.replace(/%20/g, " ");

  return (
    // @ts-expect-error server component
    <IndicatorPage
      chunkSize={10}
      results={query}
      page={params.query[1]!}
      query={params.query[0]}
      color="var(--marketingRed)"
      searchUrl="marketing/search"
      baseUrl={`marketing/search/${query}`}
    />
  );

  // if (!Number(params.query[1])) notFound();

  // const totPages = await prisma.indicatorData
  //   .findMany({
  //     where: {
  //       indicator: {
  //         contains: params.query[0] && params.query[0].replace(/%20/g, " "),
  //       },
  //       Categories: { some: { name: "MARKETING" } },
  //     },
  //   })
  //   .then((data) => {
  //     return Math.ceil(data.length / 10);
  //   });

  // const indicators = await prisma.indicatorData.findMany({
  //   where: {
  //     indicator: {
  //       contains: params.query[0] && params.query[0].replace(/%20/g, " "),
  //     },
  //     Categories: { some: { name: "MARKETING" } },
  //   },
  //   include: {
  //     area: {
  //       include: {
  //         IndicatorData: true,
  //       },
  //     },
  //   },
  //   skip: (Number(params.query[1]) - 1) * 10,
  //   take: 10,
  // });

  // return (
  //   <InfoDisplay
  //     totPages={totPages}
  //     page={Number(params.query[1])}
  //     indicators={indicators}
  //     color="var(--marketingRed)"
  //     baseUrl={`marketing/search/${
  //       params.query[0] && params.query[0].replace(/%20/g, " ")
  //     }`}
  //     searchUrl="marketing/search"
  //     results={params.query[0] && params.query[0].replace(/%20/g, " ")}
  //   />
  // );
};

export default MarketingSearchPage;
