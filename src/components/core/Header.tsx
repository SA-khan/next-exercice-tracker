import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Header = () => {
    return <React.Fragment>
        <header className="header bg-light">
                <div className='row no-gutters'>
                    <div className='col'>
                        <Link href="/" className='alert-danger text-decoration-none m-2 p-2'>
                            <Image className='rounded-circle m-2'  src="/images/exercise-tracker.png" alt='Todo Logo' height={80} width={140}/> <span className='h2'><strong><em>Exercise Tracking App</em></strong></span>
                        </Link>
                    </div>
                    <div className='col-md-3 float-right'>
                            <Link href="/about" className='float-right text-decoration-none mx-2'><small>About</small></Link> | 
                            <Link href="/sitemap" className='float-right text-decoration-none mx-2'><small>Sitemap</small></Link> | 
                            <Link href="/disclaimer" className='float-right text-decoration-none mx-2'><small>Disclaimer</small></Link>
                    </div>
                </div>
         </header>
    </React.Fragment>
}

export default Header;