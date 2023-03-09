import React from 'react'
import Layout from '@/components/Layout';
import PageHeading from '@/components/shared/PageHeading';
import NewsNavigation from '@/components/news/NewsNavigation';
import HealthComponent from '@/components/news/HealthComponent';

const Health = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <h2 className='mt-2 mb-2'>Health News</h2>
            <div>
                <HealthComponent />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Health;