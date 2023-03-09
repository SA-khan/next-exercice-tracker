import React from 'react'
import Layout from '@/components/Layout';
import PageHeading from '@/components/shared/PageHeading';
import NewsNavigation from '@/components/news/NewsNavigation';
import OthersComponent from '@/components/news/Others.Component';

const Others = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <h2 className='mt-2 mb-2'>Others News</h2>
            <div>
                <OthersComponent />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Others;