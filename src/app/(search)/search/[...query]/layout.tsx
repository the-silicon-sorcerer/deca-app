import ClusterLayout from "../../../../components/(layouts)/clusterLayout/clusterLayout";
import { generateAreaName } from "../../../../utils/generateAreaName";

const AreaLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { query: string[] };
}) => {
  let url = params.query[0]!.replace(/%20/g, " ").replace(/%3A/g, ":");

  if (url && url?.replace(/\s/g, "").length >= 19) {
    url = url?.slice(0, 19).concat("...");
  }

  return (
    <ClusterLayout title={`"  ${url.toUpperCase()}  "`} color="var(--darkBlue)">
      {children}
    </ClusterLayout>
  );
};

export default AreaLayout;
