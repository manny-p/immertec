import companyLogo from '@/assets/immertec.png'
import Image from 'next/image'

const CompanyLogo = ({height, width, props}) =>
    <>
        <Image
            src={companyLogo}
            alt="Immertec"
            height={height}
            width={width}
            {...props}
        />
    </>

export default CompanyLogo