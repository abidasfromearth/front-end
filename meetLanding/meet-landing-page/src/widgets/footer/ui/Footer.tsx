import styles from './Footer.module.scss'

import { Button } from '@shared/ui/button'
import { useEffect, useState } from 'react'


export const Footer = () => {

    const [bgImage, setBgImage] = useState<null | string>(null)

    useEffect(() => {
        const importComponent = async () => {
            const isMobile = window.innerWidth < 575.98
            const module = isMobile ? await import('@shared/assets/footer/bg-footer-mobile.png') : await import('@shared/assets/footer/bg-footer.png')
            const AnotherComponent = module.default
            setBgImage(AnotherComponent)
        }

        importComponent()
    }, [])

    return <div className={styles.footer} style={{ backgroundImage: `url(${bgImage})` }}>
        <h3>Experience more together</h3>
        <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
        <Button color="purple" label="Download v1.3" />
    </div>
}