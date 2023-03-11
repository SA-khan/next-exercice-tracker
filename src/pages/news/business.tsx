import React from 'react'
import Layout from '@/components/Layout';
import PageHeading from '@/components/shared/PageHeading';
import NewsNavigation from '@/components/news/NewsNavigation';
import BusinessComponent from '@/components/news/BusinessComponent';

const Gossip = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <h2 className='mt-2 mb-2'>Business News</h2>
            <div>
                <BusinessComponent />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Gossip;