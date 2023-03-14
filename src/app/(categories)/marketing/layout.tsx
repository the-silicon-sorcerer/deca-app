import style from "./layout.module.css";

import { MarketingIcon } from "../../../components/(svgs)";

import ClusterLayout from "../../../components/(layouts)/clusterLayout/clusterLayout";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClusterLayout
      title="MARKETING CAREER CLUSTER"
      color="var(--marketingRed)"
      offset="50px"
      Icon={MarketingIcon}
    >
      {children}
    </ClusterLayout>
  );
};

export default MarketingLayout;
