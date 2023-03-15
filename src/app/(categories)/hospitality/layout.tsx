import ClusterLayout from "../../../components/(layouts)/clusterLayout/clusterLayout";
import { TourismIcon } from "../../../components/(svgs)";

const ManagementLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClusterLayout
      title="HOSPITALITY CAREER CLUSTER"
      color="var(--hospitalityBlue)"
      offset="65px"
      Icon={TourismIcon}
    >
      {children}
    </ClusterLayout>
  );
};

export default ManagementLayout;
