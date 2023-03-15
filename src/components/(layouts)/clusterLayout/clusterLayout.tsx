import style from "./clusterLayout.module.css";

import { MarketingIcon } from "../../(svgs)";

import Buffer from "../../(elements)/buffer/buffer.component";
import SearchBox from "../../(elements)/iconBox/searchBox/searchBox.component";
import IconBox from "../../(elements)/iconBox/iconBox.component";
import { BackIcon } from "../../(svgs)";
import Scroll from "../../(elements)/scroll/scroll.compoent";

interface ClusterLayoutProps {
  offset?: string;
  title: string;
  color: string;
  children: React.ReactNode;
  Icon?: any;
}

const ClusterLayout = ({
  children,
  title,
  color,
  offset,
  Icon,
}: ClusterLayoutProps) => {
  return (
    <div className={style.pageContainer}>
      <div className={style.header} style={{ backgroundColor: color }}>
        <p className="body-B-Large">{title}</p>
        {Icon && <Icon style={{ left: offset }} />}
      </div>
      <Buffer height="76px" />
      {children}
      <Scroll color={color} />
    </div>
  );
};

export default ClusterLayout;
