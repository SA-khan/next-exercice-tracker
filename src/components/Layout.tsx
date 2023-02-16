import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'

const Layout = ({ children }:{children: React.ReactNode}) => {
    return <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'></Script>

            <div className='container container-fluid'>
                    <div className='header bg-light'>
                        <header>
                            <div className='container container-fluid'>
                                <div className='row no-gutters'>
                                    <div className='col'>
                                        <Link href="/" className='alert-danger text-decoration-none m-2 p-2'>
                                            <Image className='rounded-circle m-2'  src="/images/exercise-tracker.png" alt='Todo Logo' height={80} width={140}/> <span className='h2'><strong><em>Exercise Tracking App</em></strong></span>
                                        </Link>
                                    </div>
                                    <div className='col-md-3 float-right'>
                                        <div className=''>
                                            <Link href="/about" className='float-right text-decoration-none mx-2'><small>About</small></Link> | 
                                            <Link href="/sitemap" className='float-right text-decoration-none mx-2'><small>Sitemap</small></Link> | 
                                            <Link href="/disclaimer" className='float-right text-decoration-none mx-2'><small>Disclaimer</small></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className='row no-gutters'>
                        <div className='col-md-3 bg-secondary text-white h-100'>
                            <nav>
                                <Link className='text-white text-decoration-none m-2 p-2' href="/">Home</Link> <br/>
                                <Link className='text-white text-decoration-none m-2 p-2' href="/Login">Login</Link>
                            </nav>
                        </div>
                        <div className='col bg-warning p-2'>
                            {children}
                        </div>
                    </div>
                    <div className='bg-light text-center footer'>
                        <footer>
                            All Rights Reserved @ 2023
                        </footer>
                    </div>
            </div>
        </div>;
}

export default Layout;