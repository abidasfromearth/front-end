import styles from './decorations.module.scss'
import { Image } from '@shared/ui/image'
import RightImage from '@shared/assets/faces/right-image.png'

export const RightDecorations = () => {
    return <div className={styles.imgRight}>
        <Image src={RightImage} alt='emloyees' imgProps={{fetchPriority: 'high'}} />
    </div>
}