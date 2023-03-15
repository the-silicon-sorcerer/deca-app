import ClusterLayout from "../../../../components/(layouts)/clusterLayout/clusterLayout";
import { generateAreaName } from "../../../../utils/generateAreaName";

const AreaLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { area: string[] };
}) => {
  const title = generateAreaName(
    params.area[0]!.replace(/%20/g, " ").replace(/%3A/g, ":")
  );

  return (
    <ClusterLayout
      title={title?.toUpperCase()!}
      color="var(--entrepreneurGrey)"
    >
      {children}
    </ClusterLayout>
  );
};

export default AreaLayout;
