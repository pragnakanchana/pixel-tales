import Lottie from "lottie-react";
import animation from "../../assests/animations/confetti.json";

const ConfettiAnimation = () => {
  return <Lottie animationData={animation} loop={true} style={{ height: 1000 }} />;
};
export default ConfettiAnimation;
