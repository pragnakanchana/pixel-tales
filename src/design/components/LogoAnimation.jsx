import Lottie from "lottie-react";
import logoAnimation from "../../assests/animations/logoAnimation.json";

const LogoAnimation = () => {
  return <Lottie animationData={logoAnimation} loop={true} style={{ height: 70, padding:0 }} />;
};
export default LogoAnimation;
