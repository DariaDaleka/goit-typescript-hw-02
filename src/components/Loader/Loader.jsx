import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderContainer}>
      <TailSpin
        height={80}
        width={80}
        color="#00BFFF" 
        ariaLabel="loading"
      />
      <p className={s.loadingText}>Loading pictures...</p>
    </div>
  );
};

export default Loader;