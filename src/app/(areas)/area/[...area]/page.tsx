import IndicatorPage from "../../../../components/(pages)/indicatorPage/indicatorPage.component";

const AreaPage = ({ params }: { params: { area: string[] } }) => {
  const url = params.area[0]!.replace(/%20/g, " ").replace(/%3A/g, ":");

  return (
    // @ts-expect-error server component
    <IndicatorPage
      chunkSize={10}
      page={params.area[1]!}
      color="var(--entrepreneurGrey)"
      searchUrl={`area/${url}/search`}
      baseUrl={`area/${url}`}
      area={url}
    />
  );
};

export default AreaPage;
