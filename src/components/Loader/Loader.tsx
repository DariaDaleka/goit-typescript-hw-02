import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = ({ height = 80, width = 80, color = "#00BFFF", text = "Loading pictures..." }) => {
  return (
    <div className={s.loaderContainer}>
      <TailSpin
        height={height}
        width={width}
        color={color}
        ariaLabel="loading"
      />
      <p className={s.loadingText}>{text}</p>
    </div>
  );
};

export default Loader;
