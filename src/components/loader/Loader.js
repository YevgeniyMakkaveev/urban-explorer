import SpinnerDark from "./spinner/SpinnerDark";
import SpinnerLight from "./spinner/SpinnerLight";
import { useSelector } from "react-redux";
import "./Loader.scss";

const LoaderSpinner = ({ text }) => {
  const { currentTheme } = useSelector((state) => state.theme);

  const chooseSpinner =
    currentTheme === "blue" ? <SpinnerLight /> : <SpinnerDark />;

  return (
    <div className="spinner__wrapper">
      <div className="spinner__body">
        {chooseSpinner}
        <p className="to__top__color">{text}</p>
      </div>
    </div>
  );
};
export default LoaderSpinner;
