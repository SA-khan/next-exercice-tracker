import React from 'react'
import Layout from '@/components/Layout';
import PageHeading from '@/components/shared/PageHeading';
import NewsNavigation from '@/components/news/NewsNavigation';
import WorldwideComponent from '@/components/news/WorldwideComponent';

const Worldwide = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <h2 className='mt-2 mb-2 bg-warning text-center p-2'>Worldwide News</h2>
            <div>
                <WorldwideComponent />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Worldwide;