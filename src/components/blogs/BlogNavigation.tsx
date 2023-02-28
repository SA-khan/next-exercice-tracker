import React, { useState } from 'react'
import Link from 'next/link'

const BlogNavigation = () => {
    const [search, setSearch] = useState("")
    return <React.Fragment>
        <div className='mt-2 mb-2'>
            <div className='shadow card card-dark bg-light d-inline text-center p-2 w-100 h-100'>
                <Link href="/blogs/create" className='text-decoration-none'>Create a blog</Link> &nbsp; | &nbsp;
                <Link href="/blogs/list" className='text-decoration-none'>View blogs</Link> &nbsp; | &nbsp;
                <Link href="/blogs?createdBy=" className='text-decoration-none'>View blog by name</Link> &nbsp; | &nbsp;
                <div className='pull-right d-inline text-center float-right'>
                    <input className='w-45 boder border-none' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder=" Search blog" />
                    &nbsp;<Link href="/blogs/search" className='btn btn-primary btn-sm text-decoration-none'><span className='icon-search'></span>Search</Link> &nbsp; 
                </div>
            </div>
        </div>
    </React.Fragment>;
}

export default BlogNavigation;