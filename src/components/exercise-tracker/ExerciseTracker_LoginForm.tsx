import React, { useState } from 'react';
import Link from 'next/link'
import Layout from '../Layout';
import ExerciseLayout from './ExerciseLayout';
import styles from './ExerciseTracker.module.css'
import { ExerciseTrackerService } from '@/services/ExerciseTrackerService';
import LoginModel from '@/models/LoginModel';

const ExerciseTracker_LoginForm = () => {

    const [userId, setUserId] = useState("");
    const [passcode, setPasscode] = useState("");
    const [rememberMe, setRememberMe] = useState(true);

    const handleCheck = (e) => {
        e.preventDefault();
        var checkBox = document.getElementById('rememberMeCheckbox') as HTMLInputElement;
        if(e.target.value === 'on'){
            console.log('still ' + e.target.value);
            setRememberMe(true);
            checkBox.checked = false;
        }
        else {
            console.log('now ' + e.target.value);
            setRememberMe(false);
            checkBox.checked = true;
        }
    }

    const handleLogin = (e: Event) => {
        e.preventDefault();
        console.log("user id: " + userId + ", passcode: " + passcode, ", remember me: " + rememberMe);
        //const model = new LoginModel(userId, passcode, rememberMe);
        //const service = new ExerciseTrackerService();
        //let exist = service.Login(model);
        //console.log(exist);
    }

    return <React.Fragment>
                <div className={styles.login}>
                    <h2 className='h2 m-2 p-2'>Login Form</h2>
                    <form>
                        <div className='table table-sm'>
                            <div className='row no-gutters m-2'>
                                <div className='col-4'><label htmlFor='userId'>User ID</label></div>
                                <div className='col'><input value={userId} placeholder="Enter user id" onChange={(e)=>setUserId(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-4'><label htmlFor='passcode'>Password</label></div>
                                <div className='col'><input value={passcode} placeholder="Enter password" onChange={(e)=>setPasscode(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-4'><label htmlFor='rememberMe'>Remember me</label></div>
                                <div className='col'><input id='rememberMeCheckbox' type='checkbox' defaultChecked={true} onClick={(e)=>handleCheck(e)} required />{rememberMe}</div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-4'><label htmlFor='save'></label></div>
                                <div className='col'><button className='btn btn-primary bg-primary mt-2 p-2' value="Login" onClick={(e)=>handleLogin(e)}> Login </button></div>
                            </div>
                        </div>
                    </form>
                </div>
    </React.Fragment>;
}

export default ExerciseTracker_LoginForm;