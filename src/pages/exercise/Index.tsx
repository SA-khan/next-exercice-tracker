import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import PageHeading from '../../components/shared/PageHeading'

const Index = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="Excercise Tracking Updates" source="exercise.jfif" />
            <div style={{'background-image-url':'/images/snow.gif'}}>
                <Image src="/images/news.png" width={400} height={400} alt="logo" />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Index;