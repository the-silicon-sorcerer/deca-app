import { prisma } from "../../../../server/db";
import IndicatorPage from "../../../../components/(pages)/indicatorPage/indicatorPage.component";

export async function generateStaticParams() {
  const totPages = await prisma.indicatorData
    .findMany({
      where: {
        Categories: { some: { name: "MARKETING" } },
      },
    })
    .then((data) => {
      return Math.ceil(data.length / 50);
    });

  const arr = [];
  for (let i = 1; i <= totPages; i++) {
    arr.push({ page: String(i) });
  }

  return arr;
}

const ManagementPage = async ({ params }: { params: { page: string } }) => {
  return (
    // @ts-expect-error server component
    <IndicatorPage
      chunkSize={50}
      page={params.page}
      color="var(--managementYellow)"
      searchUrl="management/search"
      baseUrl="management"
    />
  );
};

export default ManagementPage;
