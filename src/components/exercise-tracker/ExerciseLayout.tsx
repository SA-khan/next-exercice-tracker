import React, { ReactNode } from 'react'
import ExerciseTrackerNavigation from './ExerciseTrackerNavigation';
import Layout from '../Layout';
import PageHeading from '../shared/PageHeading';

const ExerciseLayout = ({children}:{children : ReactNode}) => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="Excercise Tracking Updates" source="exercise.jfif" />
            <ExerciseTrackerNavigation />
            <div>
                
                <div className='mt-2 mb-2 pb-2'>
                    {children}
                </div>
            </div>
        </Layout>
        </div>
    </React.Fragment>;
} 

export default ExerciseLayout;