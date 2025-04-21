import styles from './SectionStepIndicator.module.scss';
import { FC } from 'react'

type Props = {
    stepNumber: string;
}

export const SectionStepIndicator: FC<Props> = ({stepNumber}) => {
    return <div className={styles.step}>
        <span className={styles.stepNumber}>{stepNumber}</span>
    </div>
}