import style from "./paginationFooter.module.css";
import Link from "next/link";

interface PaginationFooterProps {
  page: number;
  totPages: number;
  color: string;
  children: React.ReactNode;
  path: string;
}

const PaginationFooter = ({
  page,
  color,
  children,
  totPages,
  path,
}: PaginationFooterProps) => {
  const generatePagination = (page: number) => {
    const gen = [];
    if (totPages >= 7) {
      for (
        let i =
          page - 3 > 0 ? (page + 3 > totPages ? totPages - 6 : page - 3) : 1;
        i <= (page - 3 > 0 ? (page + 3 > totPages ? totPages : page + 3) : 7);
        i++
      ) {
        gen.push(
          <Link href={`/${path}/${i}`} key={Math.random()}>
            <div
              className={style.paginationBox}
              style={{
                backgroundColor: i === page ? color : undefined,
                color: i === page ? "white" : undefined,
                border: i === page ? "1px solid black" : undefined,
              }}
            >
              <p className="body-Small">{i}</p>
            </div>
          </Link>
        );
      }
    } else {
      for (let i = 1; i <= totPages; i++) {
        gen.push(
          <Link href={`/${path}/${i}`} key={Math.random()}>
            <div
              className={style.paginationBox}
              style={{
                backgroundColor: i === page ? color : undefined,
                color: i === page ? "white" : undefined,
                border: i === page ? "1px solid black" : undefined,
              }}
            >
              <p className="body-Small">{i}</p>
            </div>
          </Link>
        );
      }
    }

    return gen;
  };

  if (totPages >= 7) {
    return (
      <>
        <div className={style.paginationContainer}>
          {generatePagination(page)}
        </div>
        {children}
        <div className={style.paginationContainer}>
          {generatePagination(page)}
        </div>
      </>
    );
  }
  return (
    <>
      <div className={style.paginationContainerSmall}>
        {generatePagination(page)}
      </div>
      {children}
      <div className={style.paginationContainerSmall}>
        {generatePagination(page)}
      </div>
    </>
  );
};

export default PaginationFooter;
