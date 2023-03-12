import Link from "next/link";
import IconBox from "../../../(elements)/iconBox/iconBox.component";
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
    for (let obj of arr) {
      gen.push(
        <Link
          href={obj.link}
          style={{ marginLeft: obj.link === "/managment" ? "24px" : undefined }}
          key={Math.random()}
        >
          <IconBox Icon={obj.Icon} size="80px" background={obj.color} />
        </Link>
      );
    }
    return gen;
  };

  return (
    <div className={style.container}>{generateCategories(categories)}</div>
  );
};

export default CategorySlider;
