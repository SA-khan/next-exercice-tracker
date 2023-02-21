import React from 'react'
import PageHeading from '../../components/shared/PageHeading'
import Layout from '../../components/Layout'
import Image from 'next/image'

const Index = () => {
    return <React.Fragment>
        <Layout>
            <PageHeading title="Weather Updates" />
            <div>
                <Image src="/images/snow.gif" width={400} height={400} />
            </div>
        </Layout>
    </React.Fragment>;
}

export default Index;