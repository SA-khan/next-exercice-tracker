import { ExerciseTrackerService } from '@/services/ExerciseTrackerService';
import React, { useState } from 'react';

const DeleteActivity = () => {
    const [id, setId] = useState('')
    const handleDelete = () => {
        //e.preventDefault();
        console.log('Delete Task Id: ' + id);
        //const service = new ExerciseTrackerService();
    }
    return <React.Fragment>
        <div className='card p-2 mb-2 container-fluid min-vh-75 height-auto'>
                <h2 className="h2 m-2 p-2 bg-dark text-white">Delete Activity Form</h2>
                <form>
                <div className='container h-100'>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='id'>Exercise Task ID</label></div>
                                <div className='col'><input value={id} placeholder="Enter Task ID" onChange={(e)=>setId(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='delete'></label></div>
                                <div className='col'><button className='btn btn-sm btn-dark text-white bg-danger mt-2 p-2' onClick={(e)=>handleDelete()}>Delete</button></div>
                            </div>
                    </div>
                </form>
            </div>
    </React.Fragment>;
}

export default DeleteActivity;