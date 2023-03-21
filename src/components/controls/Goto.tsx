import React from 'react';
import Image from 'next/image';

const Goto = ({title, href}:{title:string, href: string}) => {
    return <React.Fragment>
        <a href={href} className='text-decoration-none'>
        <div className='bg-white border border-dark w-25 m-2 text-danger p-2 shadow'>
            <Image src='/images/symbols/arrow_right.png' alt='arrow right' width={30} height={40} />
            <div className='h4 d-inline mx-2 shadow-light'><strong>&nbsp;{title}</strong></div>
        </div>
        </a>
    </React.Fragment>;
}

export default Goto;