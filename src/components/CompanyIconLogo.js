import iconLogo from '@/assets/iconLogo.png'
import Image from 'next/image'

const CompanyLogo = ({height, width, props}) =>
    <>
        <Image
            src={iconLogo}
            alt="Immertec"
            height={height}
            width={width}
            {...props}
        />
    </>

export default CompanyLogo