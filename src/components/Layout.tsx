import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './core/Header'
import Footer from './shared/Footer'
import Navigation from './Navigation'
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const Layout = ({ children }:{children: React.ReactNode}) => {
    const name = 'muhammad saad ahmed'
    return <React.Fragment>
            <div className='container container-fluid'>
                <Header />
                    <div className='row'>
                        <div className="col-3">
                            <Navigation />
                        </div>
                        <div className='col'>
                            {children}
                        </div>
                    </div>
                <Footer />
            </div>
        </React.Fragment>;
}

export default Layout;