import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Layout from './Layout'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import Router from 'next/router'

const RegistrationForm = () => {

    const [username, setUsername] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [passphrase, setPassphrase] = useState("");
    const [rePassphrase, setRePassphrase] = useState("");

    const Save = () => {
        console.log(username + "-" + emailAddress + "-" + passphrase + "-" + rePassphrase);
        return Router.push('/Confirmation');
    }

    useEffect(()=> {

    });

    return <div>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <Layout>
        <div className="table table-sm">
            <tr className='pt-2 pb-2'>
                <td colSpan={2}><h4 className='text-center'>Registration Form</h4></td>
            </tr>
            <tr className='mt-2 mb-2'>
                <td>User name: </td>
                <td><input type='text' value={username} placeholder="Enter new username" onChange={(e) => setUsername( e.target.value )} /></td>
            </tr>
            <tr>
                <td>User Email Address: </td>
                <td><input type='email' value={emailAddress} placeholder="Enter your email address" onChange={(e) => setEmailAddress( e.target.value )} /></td>
            </tr>
            <tr>
                <td>Password: </td>
                <td><input type='password' value={passphrase} placeholder="Enter your new password" onChange={(e) => setPassphrase( e.target.value )} /></td>
            </tr>
            <tr>
                <td>Re-type Passwords: </td>
                <td><input type='password' value={rePassphrase} placeholder="Reconfirm Password Here" onChange={(e) => setRePassphrase( e.target.value )} /></td>
            </tr>
            <tr><td colSpan={2}> &nbsp;</td></tr>
            <tr className='bg-dark' onClick={() => Save()}>
                <td colSpan={2} className='text-white text-center m-2 p-2'>REGISTER</td>
            </tr>
        </div>
        <Link href="/login">Already have an account? Click here</Link>
        </Layout>
    </div>;
}

export default RegistrationForm;