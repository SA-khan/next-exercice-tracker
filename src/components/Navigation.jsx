import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    return  <React.Fragment>
        <div className="bg-dark h-100 w-100">
            <table className="table table-sm table-striped h-100 w-100">
                <tbody>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/">Home</Link> <br/>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/prayer">Prayer Time</Link>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/weather/Index">Weather</Link>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/news/Index">News</Link>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/tasks/Index">Tasks</Link>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/blogs/Index">Blogs</Link>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/exercise/Index">Exercise Tracking</Link>
                        </th>
                    </tr>
                </tbody>
            </table>
       </div>
    </React.Fragment>;
}

export default Navigation;