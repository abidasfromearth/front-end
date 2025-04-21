import photo1 from '@shared/assets/gallery/gallery-photo-1.png'
import photo2 from '@shared/assets/gallery/gallery-photo-2.png'
import photo3 from '@shared/assets/gallery/gallery-photo-3.png'
import photo4 from '@shared/assets/gallery/gallery-photo-4.png'
import { Image } from '@shared/ui/image'

export const Gallery = () => {
    const photos = [photo1, photo2, photo3, photo4]

    return <>
        {photos.map((photo, i) => <Image key={`photo-${i}`} src={photo} alt={`photo-${i}`} />)}
    </>
}