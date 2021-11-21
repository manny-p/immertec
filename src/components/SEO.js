import Head from 'next/head'

const SEO = ({title, description, keywords}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"/>
            <link rel="icon" href={'/favicon.ico'}/>
        </Head>
    )
}

SEO.defaultProps = {
    title: 'Immertec',
    description: 'Immertec Coding Challenge',
    keywords: 'Immertec Real-Time Virtual Surgery Training'
}

export default SEO