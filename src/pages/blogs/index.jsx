import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import PageHeading from '../../components/shared/PageHeading'

const Index = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="Blogs Updates" />
            <div>
                <Image src="/images/snow.gif" width={400} height={400} />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Index;