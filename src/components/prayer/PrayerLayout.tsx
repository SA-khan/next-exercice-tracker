import React from 'react'
import Layout from '../Layout';
import PrayerNavigation from './PrayerNavigation';
import PageHeading from '../shared/PageHeading';

const PrayerLayout = ({children}: {children:React.ReactNode}) => {
    return <React.Fragment>
        <Layout>
            <PageHeading title="Prayer Time" source="prayer.png" />
            <div className='bg-light border text-center'>
                <PrayerNavigation />
            </div>
            {children}
        </Layout>
    </React.Fragment>
}

export default PrayerLayout;