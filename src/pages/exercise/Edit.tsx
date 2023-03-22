import React from 'react'
import ExerciseTracker_LoginForm from '@/components/exercise-tracker/ExerciseTracker_LoginForm';
import ExerciseTrackerLayout from '@/components/exercise-tracker/ExerciseLayout';
import styles from './exercise_style.module.css'
import RegisterForm from '@/components/exercise-tracker/RegisterForm';
import EditActivity from '@/components/exercise-tracker/EditActivity';

const Edit = () => {
    return <React.Fragment>
        <ExerciseTrackerLayout>
        <div className='w-100'>
            <div className='w-100'>
                <div className='shadow card p-2 w-100 h-50 border border-dark'>
                    {/* <EditActivity /> */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

            </div>
        </div>
        </ExerciseTrackerLayout>
    </React.Fragment>;
}

export default Edit;
