import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css"

function Loader() {
  return (
    <div className={css.loaderContainer}>
          <InfinitySpin
      visible={true}
      width="200"
      color="black"
      ariaLabel="infinity-spin-loading"
    />
    </div>

  );
}

export default Loader;
