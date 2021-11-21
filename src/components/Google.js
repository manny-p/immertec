import Image from 'next/image'
import googleSVG from '@/assets/googleSVG.svg'

const Google = () =>
    <Image
    src={googleSVG}
    alt={'Google'}
    width={350}
    height={100}
    objectFit={'contain'}
    />
export default Google
