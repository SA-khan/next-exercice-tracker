'use client';

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const PageHeading = ({title, source} : {title: string, source: string}) => {

    const [keyword, setKeyword] = useState("")

    const handleSearch = () => {
        console.log(keyword);
        
    }

    return <React.Fragment>
        <div className="bg-light p-2">
            <Image className="d-inline" src={"/images/"+source} width={40} height={40} alt="logo" />
            <h2 className="d-inline align-middle"> {title} </h2>
            <div className='float-end d-inline'>
                <input type="text" className='border border-secondary m-1' placeholder=' Search here..' value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
                <button className='my-2' onClick={(e)=>handleSearch()}>Search</button>
             </div>
        </div>
    </React.Fragment>;
}

export default PageHeading;