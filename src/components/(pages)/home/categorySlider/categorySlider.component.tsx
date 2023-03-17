import Link from "next/link";
import IconBox from "../../../(elements)/iconBox/iconBox.component";
import { captializeFirst } from "../../../../utils/capitalizeFirst";
import style from "./categorySlider.module.css";

interface CategoryObj {
  color: string;
  Icon: any;
  link: string;
}

interface CategorySliderProps {
  categories: CategoryObj[];
}

const CategorySlider = ({ categories }: CategorySliderProps) => {
  const generateCategories = (arr: CategoryObj[]) => {
    const gen = [];
    for (const obj of arr) {
      gen.push(
        <Link
          href={obj.link}
          style={{
            marginLeft: obj.link === "/management/1" ? "24px" : undefined,
          }}
          key={Math.random()}
        >
          <div className={style.iconContainer}>
            <IconBox Icon={obj.Icon} background={obj.color} shadow />
            <p className="body-Small">
              {captializeFirst(obj.link.split("/")[1])}
            </p>
          </div>
        </Link>
      );
    }
    return gen;
  };

  const genDesktopCategories = (arr: CategoryObj[]) => {
    const gen = [];
    for (const obj of arr) {
      gen.push(
        <Link href={obj.link} key={Math.random()}>
          <div
            className={style.desktopBox}
            style={{ backgroundColor: obj.color }}
          >
            <obj.Icon style={{ scale: "0.6" }} />
            <p className="body-B-ExtraSmall">
              {captializeFirst(obj.link.split("/")[1])}
            </p>
          </div>
        </Link>
      );
    }
    return gen;
  };

  return (
    <>
      <div className={style.container}>{generateCategories(categories)}</div>
      <div className={style.desktopPadding}>
        <div className={style.desktopContainer}>
          {genDesktopCategories(categories)}
        </div>
      </div>
    </>
  );
};

export default CategorySlider;
