import ClusterLayout from "../../../components/(layouts)/clusterLayout/clusterLayout";
import { ManagementIcon } from "../../../components/(svgs)";

const ManagementLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClusterLayout
      title="MANAGEMENT CAREER CLUSTER"
      color="var(--managementYellow)"
      offset="6-px"
      Icon={ManagementIcon}
    >
      {children}
    </ClusterLayout>
  );
};

export default ManagementLayout;
