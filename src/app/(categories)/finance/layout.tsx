import ClusterLayout from "../../../components/(layouts)/clusterLayout/clusterLayout";
import { FinanceIcon } from "../../../components/(svgs)";

const ManagementLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClusterLayout
      title="FINANCE CAREER CLUSTER"
      color="var(--financeGreen)"
      offset="60px"
      Icon={FinanceIcon}
    >
      {children}
    </ClusterLayout>
  );
};

export default ManagementLayout;
