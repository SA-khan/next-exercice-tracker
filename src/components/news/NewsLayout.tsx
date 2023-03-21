import React from 'react';
import Layout from '../Layout';
import PageHeading from '../shared/PageHeading';
import NewsNavigation from './NewsNavigation';

const NewsLayout = ({children}:{children: React.ReactNode}) => {
    return <React.Fragment>
        <Layout>
            <PageHeading title='News' source='news.png' />
            <NewsNavigation />
            {children}
        </Layout>
    </React.Fragment>;
}

export default NewsLayout;