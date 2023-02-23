import React from 'react'
import Image from 'next/image'
import exerciseStyle from './'
import Layout from '../../components/Layout'
import PageHeading from '../../components/shared/PageHeading'
import SaveExerciseTrackerComponent from '../../components/exercise-tracker/SaveExerciseTrackerComponent'
import ExerciseTrackerNavigation from '../../components/exercise-tracker/ExerciseTrackerNavigation'

const Index = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="Excercise Tracking Updates" source="exercise.jfif" />
            <ExerciseTrackerNavigation />
            <div>
                <Image src={"/images/exercise/exercise_tracking_bg.jfif"} width={900} height={604} alt="exercise" />
                <SaveExerciseTrackerComponent />
            </div>
        </Layout>
        </div>
    </React.Fragment>;
}

export default Index;