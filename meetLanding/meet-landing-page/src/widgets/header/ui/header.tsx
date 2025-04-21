import logo from '@shared/assets/logos/logo.svg'
import styles from './header.module.scss'

export const Header = () => {
    return <div className={styles.header}>
        <img src={logo} alt="" />
    </div>
}