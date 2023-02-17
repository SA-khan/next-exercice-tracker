import Layout from '../components/Layout'
import Head from 'next/head'
import React from 'react'
import '../../public/css/style.css'
import LoginForm from '../components/LoginForm'

const Login = () => {
    return <div>
        <video id='myVideo' autoPlay muted loop width="100%" style={{position: 'fixed', overflow: 'hidden'}} >
            <source src='https://video.richardmille.com/desktop/men-collection-rm-homepage.mp4' type="video/mp4"></source>
            <source src='../../../public/videos/watch2.mp4' type="video/mp4"></source>
        </video>
        <div className='content mt-2 pt-2'>
                <LoginForm />
        </div>
    </div>;
}

export default Login;