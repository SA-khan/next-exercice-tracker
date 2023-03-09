import React from 'react'
import Layout from '@/components/Layout';
import PageHeading from '@/components/shared/PageHeading';
import NewsNavigation from '@/components/news/NewsNavigation';
import NewsSummary from '@/components/NewsSummary';
import NationalComponent from '@/components/news/NationalComponent';

const National = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <h2 className='mt-2 mb-2'>National News</h2>
            <div>
                <NationalComponent />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default National;