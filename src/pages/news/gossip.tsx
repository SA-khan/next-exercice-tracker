import React from 'react'
import Layout from '@/components/Layout';
import PageHeading from '@/components/shared/PageHeading';
import NewsNavigation from '@/components/news/NewsNavigation';
import GossipComponent from '@/components/news/GossipComponent';

const Gossip = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <h2 className='mt-2 mb-2'>Gossip News</h2>
            <div>
                <GossipComponent />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Gossip;