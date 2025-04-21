import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './button.module.scss'
import clsx from 'clsx'

type Props = {
    onClick?: () => void;
    label?: string | React.ReactNode;
    btnClass?: string
    btnProps?: ButtonHTMLAttributes<HTMLButtonElement>
    color?: 'cyan' | 'purple';
    labelClassName?: string
}
export const Button: FC<Props> = ({ onClick, label, btnProps, color, labelClassName }) => {
    return <button onClick={onClick} className={clsx(styles.button, {
        [styles.cyan]: color === 'cyan',
        [styles.purple]: color === 'purple',
    })} {...btnProps}>
        <span className={clsx(styles.label, labelClassName)}>
            {label}
        </span>
    </button>
}