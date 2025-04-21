import { Intro } from '@widgets/home/intro'
import styles from './homePage.module.scss'
import { SectionStepIndicator } from '@shared/ui/section-step-indicator'
import { Gallery } from '@widgets/home/gallery'
import { WhyUseUs } from '@widgets/home/why-use-us'

export const HomePage = () => {
    return <div className={styles.homePage}>
        <Intro />
        <div className={styles.step}>
            <SectionStepIndicator stepNumber="01" />
        </div>
        <div className={styles.gallery}>
            <Gallery />
        </div>
        <div className={styles.whyUs}>
            <WhyUseUs />
        </div>
        <div className={styles.step2}>
            <SectionStepIndicator stepNumber="02" />
        </div>
    </div>
}
