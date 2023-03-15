import ClusterLayout from "../../../components/(layouts)/clusterLayout/clusterLayout";
import { EntrepreneurIcon, FinanceIcon } from "../../../components/(svgs)";

const EntrepreneurLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClusterLayout
      title="ENTREPRENEUR CAREER CLUSTER"
      color="var(--entrepreneurGrey)"
      offset="60px"
      Icon={EntrepreneurIcon}
    >
      {children}
    </ClusterLayout>
  );
};

export default EntrepreneurLayout;
