import React, { useState } from 'react'
import styles from './ExerciseTracker.module.css'

const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [passcode, setPasscode] = useState("")
    return <React.Fragment>
        <div className={styles.register}>
        <h2 className='h2 m-2 p-2'>Register Form</h2>
                    <form>
                        <div className='container'>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='userId'>User name</label></div>
                                <div className='col'><input value={username} placeholder="Enter User ame" onChange={(e)=>setUsername(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='email'>Email Id</label></div>
                                <div className='col'><input value={email} placeholder="Enter Email ID" onChange={(e)=>setEmail(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='passcode'>Password</label></div>
                                <div className='col'><input value={passcode} placeholder="Enter password" onChange={(e)=>setPasscode(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='save'></label></div>
                                <div className='col'><button className='btn btn-primary bg-primary mt-2 p-2' onClick={()=>console.log("user id: " + username + "email id: " + email+ ", passcode: " + passcode)}>Register</button></div>
                            </div>
                        </div>
                    </form>
        </div>
    </React.Fragment>;
}

export default RegisterForm;