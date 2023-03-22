import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    return  <React.Fragment>
        <div className="bg-dark h-100 w-100">
            <table className="table table-sm table-striped w-100">
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
                            <Link className='text-white text-decoration-none p-2' href="/weather/WeatherIndex">Weather</Link>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/news/NewsIndex">News</Link>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/tasks/TaskIndex">Tasks</Link>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/blogs/BlogsIndex">Blogs</Link>
                        </th>
                    </tr>
                    <tr className="table-row">
                        <th className="table-col">
                            <Link className='text-white text-decoration-none p-2' href="/exercise/ExerciseIndex">Exercise Tracking</Link>
                        </th>
                    </tr>
                </tbody>
            </table>
       </div>
    </React.Fragment>;
}

export default Navigation;