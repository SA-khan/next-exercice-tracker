import React from 'react'
import ExerciseTracker_LoginForm from '@/components/exercise-tracker/ExerciseTracker_LoginForm';
import ExerciseTrackerLayout from '@/components/exercise-tracker/ExerciseLayout';
import styles from './exercise_style.module.css'
import RegisterForm from '@/components/exercise-tracker/RegisterForm';

const register = () => {
    return <React.Fragment>
        <ExerciseTrackerLayout>
        <div className={styles.login}>
            <div className={styles.container}>

                <div className='shadow card p-2 w-50 h-50 border border-dark'>
                    <RegisterForm />
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

export default register;