import style from "./iconBox.module.css";

interface IconBoxProps {
  className?: string;
  size: string;
  Icon: any;
  background?: string;
}

const IconBox = ({ className, size, Icon, background }: IconBoxProps) => {
  return (
    <div
      className={`${style.container} ${className}`}
      style={{
        width: size,
        backgroundColor: background ? background : undefined,
      }}
    >
      <Icon />
    </div>
  );
};

export default IconBox;
