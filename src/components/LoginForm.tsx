import { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Router from 'next/router'
import Link from 'next/link'
import { UserModel } from '@/models/UserModel';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [passphrase, setPassphrase] = useState("");

    useEffect(() => {

    });

    const Submit = () => {
        console.log(username + "-" + passphrase);
        // var user: UserModel =  { username : username, passphrase : passphrase  }
        Router.push('/dashboard?username='+username)
    }

    return <div className='LoginForm text-center'>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <h2 className='bg-dark p-4'>Login Form</h2>
        <div className='table table-sm'>
            <div className='col form-group mt-2 bg-white p-2'>
                <label htmlFor='username'><span><em>Username:</em></span>
                    <input type="text" value={username} placeholder="Enter username here" onChange={(e) => setUsername(e.target.value)} />
                </label>
            </div>
            <div className='col form-group mt-2 mb-2 bg-white p-2'>
                <label htmlFor='passphrase'><span>Password:</span>
                    <input type="password" value={passphrase} placeholder="Enter password here" onChange={(e) => setPassphrase(e.target.value)} />
                </label>
            </div>
            <div className='col'>
                <button className='btn btn-primary float-right' onClick={() => Submit()}>Login</button>
            </div>
            <div className='col mt-2 bg-white p-2 text-center'>
                <Link href="/registration" className='text-decoration-none'>Forget Password</Link>
            </div>
            <div className='col mt-2 bg-white p-2 text-center'>
                <Link href="/registration" className='text-decoration-none'>Register Now!</Link>
            </div>
            <div className='col mt-2 bg-white p-2'>
                Or Login with
            </div>
            <div className='col mt-2 bg-white p-2 text-center'>
                <Link href="/registration" className='btn btn-primary text-decoration-none'>Login with Facebook</Link>
            </div>
            <div className='col mt-2 bg-white p-2 text-center'>
                <Link href="/registration" className='btn btn-primary text-decoration-none'>Login with Google</Link>
            </div>
        </div>
        <h6 className='bg-dark p-2 h-100 b-0'>2023 @ Copy @ All Rights Reserved </h6>
    </div>;
}

export default LoginForm;