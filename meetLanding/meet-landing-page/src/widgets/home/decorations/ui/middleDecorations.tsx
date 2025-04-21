import { ActionButtons } from '@feature/meet-intro'
import styles from './decorations.module.scss'

export const MiddleDecorations = () => {
    return <div className={styles.middleDecorations}>
        <h1 className={styles.middleDecorationsTitle}>Group Chat
            for Everyone</h1>
        <p className={styles.middleDecorationsDescription}>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
        <div className={styles.middleDecorationsActions}>
            <ActionButtons/>
        </div>
    </div>
}