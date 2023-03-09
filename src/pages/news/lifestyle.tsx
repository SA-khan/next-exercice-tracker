import React from 'react'
import Layout from '@/components/Layout';
import PageHeading from '@/components/shared/PageHeading';
import NewsNavigation from '@/components/news/NewsNavigation';
import LifestyleComponent from '@/components/news/LifestyleComponent';

const Lifestyle = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <h2 className='mt-2 mb-2'>Lifestyle News</h2>
            <div>
                <LifestyleComponent />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Lifestyle;