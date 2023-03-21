import React from 'react'
import ExerciseTracker_LoginForm from '@/components/exercise-tracker/ExerciseTracker_LoginForm';
import ExerciseTrackerLayout from '@/components/exercise-tracker/ExerciseLayout';
import styles from './exercise_style.module.css'
import RegisterForm from '@/components/exercise-tracker/RegisterForm';
import ViewActivity from '@/components/exercise-tracker/ViewActivity';

const view = () => {
    return <React.Fragment>
        <ExerciseTrackerLayout>
        <div className={styles.login}>
            <div className={styles.container + 'overflow-auto'}>
                <hr />
            <h2 className='bg-dark text-white text-center m-2 p-2 border border-black'>Exercise Track View</h2>
                <div className='shadow card m-3 p-3'>
                    <ViewActivity />
                    <br />
                </div>

            </div>
        </div>
        </ExerciseTrackerLayout>
    </React.Fragment>;
}

export default view;