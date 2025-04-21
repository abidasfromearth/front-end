import { FC, ImgHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = {
    src: string;
    alt: string;
    className?: string;
    imgProps?: ImgHTMLAttributes<HTMLImageElement>
}

export const Image: FC<Props> = ({ src, alt, className, imgProps }) => {
    return <img src={src} className={clsx(className)} alt={alt} {...imgProps} />
}