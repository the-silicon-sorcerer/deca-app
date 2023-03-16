import IndicatorPage from "../../../../../components/(pages)/indicatorPage/indicatorPage.component";
import { cookies } from "next/headers";

const AreaSearchPage = async ({ params }: { params: { query: string[] } }) => {
  // fixed prerending bug
  const c = cookies();

  const area = params.query[0]!.replace(/%20/g, " ").replace(/%3A/g, ":");
  const query = params.query[1]!.replace(/%20/g, " ");

  return (
    // @ts-expect-error server component
    <IndicatorPage
      chunkSize={10}
      results={query}
      page={params.query[2]!}
      query={query}
      color="var(--entrepreneurGrey)"
      searchUrl={`area/search/${area}`}
      baseUrl={`area/search/${query}`}
      area={area}
    />
  );
};

export default AreaSearchPage;
