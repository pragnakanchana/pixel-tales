import Lottie from "lottie-react";
import loaderAnim from "../../assests/animations/loaderAnim.json";

const Loader = () => {
  return <Lottie animationData={loaderAnim} loop={true} style={{ height: 200 }} />;
};
export default Loader;
