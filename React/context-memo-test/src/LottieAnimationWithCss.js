import BearWithGirls from './bear-with-girls-potoraX.png';
import WheelBorder3x from './border-3x.png';
import Pointer3x from './pointer-3x.png';
import wheelWins from './wheel_wins3x.png';

export const LottieAnimationWithCss = () => {
    return (
        <div className='wheelWrapper'>
            <div className='wheelBorder'>
                <img className='borderImage' width={350} height={350} src={WheelBorder3x} alt="" />
                <img className='wheelWins' width={420} height={420} src={wheelWins} alt="" />

                <img className='pointer' src={Pointer3x} alt="" />

                <img className='bearWithGirls' src={BearWithGirls} alt="" />
            </div>
        </div>
    );
};

export default LottieAnimationWithCss;