import React from 'react';
import Link from 'next/link';

const TaskNavigation = () => {
    return <React.Fragment>
        <div className='card p-2 m-2 bg-light'>
        <ul className='list-unstyled text-center pt-2'>
            <li className='d-inline'><Link className='text-decoration-none' href='/tasks/create'>Create</Link></li> &nbsp; | &nbsp;
            <li className='d-inline'><Link className='text-decoration-none' href='/tasks/view'>View</Link></li> &nbsp; | &nbsp;
            <li className='d-inline'><Link className='text-decoration-none' href='/tasks/edit'>Edit</Link></li> &nbsp; | &nbsp;
            <li className='d-inline'><Link className='text-decoration-none' href='/tasks/delete'>Delete</Link></li> &nbsp;
        </ul>
        </div>
    </React.Fragment>;
}
export default TaskNavigation;