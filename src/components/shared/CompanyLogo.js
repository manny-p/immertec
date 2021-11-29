import logo from '@/assets/immertec.png'
import Image from 'next/image'

const CompanyLogo = ({height, width, props}) =>
    <>
        <Image
            src={logo}
            alt="Immertec"
            height={height}
            width={width}
            {...props}
        />
    </>

export default CompanyLogo