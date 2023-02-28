import React from 'react'
import Image from 'next/image'
import styles from './ExerciseTracker.module.css'

const ExerciseTrackerTheme = () => {
    return <React.Fragment>
        <div className={styles.container}>
            <div className='mt-2 mb-2 pb-2'>
                <kbd className='p-2 text-center'>&nbsp;Once you are exercising regularly, the hardest thing is to stop it. ~ <em>Erin Gray</em> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</kbd> 
            </div>
        </div>
    </React.Fragment>;
}

export default ExerciseTrackerTheme;