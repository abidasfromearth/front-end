import { LeftDecorations, MiddleDecorations, RightDecorations } from '@widgets/home/decorations'
import styles from './intro.module.scss'

export const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.introLeft}>
                <LeftDecorations />
            </div>
            <div className={styles.introMiddle}>
                <MiddleDecorations />
            </div>
            <div className={styles.introRight}>
                <RightDecorations />
            </div>
        </div>
    )
}