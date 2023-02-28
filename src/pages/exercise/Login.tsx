import React from 'react'
import Link from 'next/link'
import ExerciseTracker_LoginForm from '@/components/exercise-tracker/ExerciseTracker_LoginForm';
import ExerciseTrackerLayout from '@/components/exercise-tracker/ExerciseLayout';
import styles from './exercise_style.module.css'

const Login = () => {
    return <React.Fragment>
        <ExerciseTrackerLayout>
        <div className={styles.login}>
            <div className={styles.container}>

                <div className='shadow card p-2 w-50 h-50 border border-dark shadow'>
                    <ExerciseTracker_LoginForm />
                    <div className='text-decoration-none d-inline p-2 bg-light border border-dark card shadow'>
                        Not a valid user? <Link className='text-decoration-none' href="/exercise/Register">Register Now</Link>
                    </div>
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

export default Login;