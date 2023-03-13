import Link from "next/link";
import style from "./iconBox.module.css";

interface IconBoxProps {
  className?: string;
  size: string;
  Icon: any;
  link?: string;
  background?: string;
  outline?: boolean;
  shadow?: boolean;
}

const IconBox = ({
  className,
  size,
  Icon,
  background,
  outline,
  shadow,
  link,
}: IconBoxProps) => {
  if (link) {
    return (
      <Link href={link}>
        <div
          className={`${style.container} ${className}`}
          style={{
            width: size,
            backgroundColor: background ? background : undefined,
            border: outline ? "var(--border)" : undefined,
            boxShadow: shadow ? "var(--iconShadow)" : undefined,
          }}
        >
          <Icon />
        </div>
      </Link>
    );
  }

  return (
    <div
      className={`${style.container} ${className}`}
      style={{
        width: size,
        backgroundColor: background ? background : undefined,
        border: outline ? "var(--border)" : undefined,
        boxShadow: shadow ? "var(--iconShadow)" : undefined,
      }}
    >
      <Icon />
    </div>
  );
};

export default IconBox;
