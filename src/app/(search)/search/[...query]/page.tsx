import IndicatorPage from "../../../../components/(pages)/indicatorPage/indicatorPage.component";

const SearchPage = ({ params }: { params: { query: string[] } }) => {
  const url = params.query[0]!.replace(/%20/g, " ").replace(/%3A/g, ":");

  return (
    // @ts-expect-error server component
    <IndicatorPage
      chunkSize={10}
      query={params.query[0]}
      page={params.query[1]!}
      color="var(--darkBlue)"
      searchUrl={`area/${url}/search`}
      baseUrl={`search/${url}`}
      all
    />
  );
};

export default SearchPage;
