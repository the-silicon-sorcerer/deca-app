import style from "./loadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={style.ldsring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
