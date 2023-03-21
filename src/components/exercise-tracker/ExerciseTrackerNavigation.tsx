import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ExerciseTrackerNavigation = () => {
    return <React.Fragment>
        <div className='mt-3 mb-4 w-100'>
        <div className='shadow card p-2 mt-2 mb-2 d-inline w-100'>
            <Link className='text-decoration-none d-inline' href="/exercise/register"> Register </Link> | 
            <Link className='text-decoration-none d-inline' href="/exercise/Login"> Login </Link> | 
            <Link className='text-decoration-none d-inline' href="/exercise/Add"> Add </Link> | 
            <Link className='text-decoration-none d-inline' href="/exercise/view"> View </Link> |
            <Link className='text-decoration-none d-inline' href="/exercise/Edit"> Edit </Link> | 
            <Link className='text-decoration-none d-inline' href="/exercise/Delete"> Delete </Link>
        </div>
        </div>
    </React.Fragment>;
}

export default ExerciseTrackerNavigation;