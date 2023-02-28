import React from 'react'
import Image from 'next/image'
import exerciseStyle from './exercise.module.css'
import Layout from '../../components/Layout'
import PageHeading from '../../components/shared/PageHeading'
import SaveExerciseTrackerComponent from '../../components/exercise-tracker/AddActitvity'
import ExerciseTrackerNavigation from '../../components/exercise-tracker/ExerciseTrackerNavigation'
import ExerciseTrackerTheme from '@/components/exercise-tracker/ExerciseTrackerTheme'

const Index = () => {
    return <React.Fragment>
        <div>
        <Layout>
            <PageHeading title="Excercise Tracking Updates" source="exercise.jfif" />
            <ExerciseTrackerNavigation />
            <ExerciseTrackerTheme />
        </Layout>
        </div>
    </React.Fragment>;
}

export default Index;