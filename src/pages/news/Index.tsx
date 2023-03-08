import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import PageHeading from '../../components/shared/PageHeading'
import NewsReport from '../../components/NewsReport'
import { NewsModel } from '../../models/NewsModel'
import { NewsTypeModel } from '../../models/NewsTypeModel'
import { NewsTypeEnum } from "@/enums/NewsTypeEnum";
import NewsNavigation from '@/components/news/NewsNavigation'
import NewsSummary from '@/components/NewsSummary'

const Index = () => {
    const news = new NewsModel(1, 'Audio leaks: Lawyer bodies to file complaint against SC judge in SJC', NewsTypeEnum.National, "PBC Executive Committee Chairman Hasan Raza Pasha says complaint will be filled next week", "https://i.tribune.com.pk/media/images/A-general-view-of-the-Supreme-Court-of-Pakistan-in1668673145-0/A-general-view-of-the-Supreme-Court-of-Pakistan-in1668673145-0.jpg", "2023-02-21", "2023-02-21", "Uncle Bob", "google.com", "hashtag.dev", "external", "tribune.com.pk", "2023-02-22")
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="News Updates" source="news.png" />
            <NewsNavigation />
            <div>
                <NewsSummary />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Index;