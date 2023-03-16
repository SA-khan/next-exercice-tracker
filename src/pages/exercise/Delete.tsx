import React from 'react'
import ExerciseTracker_LoginForm from '@/components/exercise-tracker/ExerciseTracker_LoginForm';
import ExerciseTrackerLayout from '@/components/exercise-tracker/ExerciseLayout';
import styles from './exercise_style.module.css'
import RegisterForm from '@/components/exercise-tracker/RegisterForm';
import DeleteActivity from '@/components/exercise-tracker/DeleteActivity';

const Delete = () => {
    return <React.Fragment>
        <ExerciseTrackerLayout>
        <div className=''>
            <div className=''>
                <div className='shadow card p-2 w-100 h-50 border border-dark'>
                    <DeleteActivity />
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

export default Delete;