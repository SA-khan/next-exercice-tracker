import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import PageHeading from '../../components/shared/PageHeading'
import NewsReport from '../../components/NewsReport'

const Index = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <div>
                <NewsReport title="Audio leaks: Lawyer bodies to file complaint against SC judge in SJC" description="PBC Executive Committee Chairman Hasan Raza Pasha says complaint will be filled next week" imageUrl="https://i.tribune.com.pk/media/images/A-general-view-of-the-Supreme-Court-of-Pakistan-in1668673145-0/A-general-view-of-the-Supreme-Court-of-Pakistan-in1668673145-0.jpg" reportingDate="2023-02-21" />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Index;