import jsonAnim from './lottie.json'
import Lottie from "lottie-react";

export const LottieAnimation = () => {
    return <Lottie animationData={jsonAnim} loop={true} />
}