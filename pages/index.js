import Section from '@/components/Section'
import Layout from '@/components/Layout';


export default function Home() {
    return (
        <>
            <Layout>
                <Section num={1}/>
                <Section num={2}/>
                <Section num={3}/>
            </Layout>
        </>
    )
}
