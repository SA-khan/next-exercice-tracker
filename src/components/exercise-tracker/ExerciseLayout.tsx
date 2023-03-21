import React, { ReactNode } from 'react'
import ExerciseTrackerNavigation from './ExerciseTrackerNavigation';
import Layout from '../Layout';
import PageHeading from '../shared/PageHeading';
import { BrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const ExerciseLayout = ({children}:{children : ReactNode}) => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="Excercise Tracking Updates" source="exercise.jfif" />
            <BrowserRouter>
            <ExerciseTrackerNavigation />
            <div>
                <div className='mt-2 mb-2 pb-2'>
                    {children}
                    <Outlet/>
                </div>
            </div>
            </BrowserRouter>
        </Layout>
        </div>
    </React.Fragment>;
} 

export default ExerciseLayout;