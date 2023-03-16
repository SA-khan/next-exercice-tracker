import React from 'react'
import Image from 'next/image'
import styles from './ExerciseTracker.module.css'
import Footer from '../shared/Footer'

const ExerciseTrackerTheme = () => {
    return <React.Fragment>
        <div className={styles.container + ' bg-light'}>
            <div className='text-center h2'>
                <blockquote className='bg-dark text-white mt-4 text-center p-1'>Once you are exercising regularly, the hardest thing is to stop it.<footer className="blockquote-footer bg-dark mt-2"><em>Erin Gray</em></footer></blockquote>
            </div>
        </div>
    </React.Fragment>;
}

export default ExerciseTrackerTheme;