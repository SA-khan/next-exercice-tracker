import React, { Suspense } from 'react'
import Index from '@/components/news/Index'
import Layout from '@/components/Layout';
import PageHeading from '@/components/shared/PageHeading';
import NewsNavigation from '@/components/news/NewsNavigation';
import Loading from '@/app/loading';

const Breaking = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <h2 className='pt-2 pb-2 bg-warning text-center'>Breaking News</h2>
            <div>
                <Suspense fallback={<Loading />}>
                    <Index />
                </Suspense>
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Breaking;