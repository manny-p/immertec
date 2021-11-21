import * as React from 'react'
import companyLogo from '@/assets/immertec.png'
import Image from 'next/image'

const NavbarLogo = React.forwardRef(({onClick, href, height, width, props}, ref) => {
    return (
        <>
            <a href={href} onClick={onClick} ref={ref}>
                <Image
                    src={companyLogo}
                    alt="Immertec"
                    height={height}
                    width={width}
                    {...props}
                />
            </a>

        </>
    )
})

export default NavbarLogo