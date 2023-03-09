import React from 'react'
import Layout from '@/components/Layout';
import PageHeading from '@/components/shared/PageHeading';
import NewsNavigation from '@/components/news/NewsNavigation';
import TechnologyComponent from '@/components/news/TechnologyComponent';

const Technology = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <h2 className='pt-2 pb-2 text-center bg-warning'>Technology News</h2>
            <div>
                <TechnologyComponent />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Technology;