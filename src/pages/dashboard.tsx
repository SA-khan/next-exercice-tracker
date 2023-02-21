import Layout from '../components/Layout'
import React from 'react'
import Image from 'next/image'
import PageHeading from '../components/shared/PageHeading'

const Dashboard = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="Dashboard" source="dash.png" />
            <div>
                <Image src="/images/dashboard.png" width={400} height={400} alt="logo" />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Dashboard;