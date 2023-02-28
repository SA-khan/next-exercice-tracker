import React, { useState } from 'react';
import Link from 'next/link'
import Layout from '../Layout';
import ExerciseLayout from './ExerciseLayout';
import styles from './ExerciseTracker.module.css'

const ExerciseTracker_LoginForm = () => {
    const [userId, setUserId] = useState("")
    const [passcode, setPasscode] = useState("")
    return <React.Fragment>
                <div className={styles.login}>
                    <h2 className='h2 m-2 p-2'>Login Form</h2>
                    <form>
                        <div className='table table-sm'>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='userId'>User ID</label></div>
                                <div className='col'><input value={userId} placeholder="Enter user id" onChange={(e)=>setUserId(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='passcode'>Password</label></div>
                                <div className='col'><input value={passcode} placeholder="Enter password" onChange={(e)=>setPasscode(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='save'></label></div>
                                <div className='col'><button className='btn btn-primary bg-primary mt-2 p-2' value="Login" onClick={()=>console.log("user id: " + userId + ", passcode: " + passcode)}>Login</button></div>
                            </div>
                        </div>
                    </form>
                </div>
    </React.Fragment>;
}

export default ExerciseTracker_LoginForm;