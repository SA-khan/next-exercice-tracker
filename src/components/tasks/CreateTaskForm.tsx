import React, { useState, useEffect } from 'react';

const CreateTaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <React.Fragment>
        <div className='container container-fluid h-100'>
            <form>
                <table className='table card shadow p-2'>
                    <tr className='w-100 table-row'>
                        <td><label htmlFor='title'>Title:</label></td>
                        <td><input className='w-100' type='text' placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)} /></td>
                    </tr>
                    <tr className='w-100 table-row'>
                        <td><label htmlFor='description'>Description:</label></td>
                        <td><input className='w-100' type='text' placeholder='Enter description' value={description} onChange={(e)=>setDescription(e.target.value)} /></td>
                    </tr>
                </table>
            </form>
        </div>
    </React.Fragment>;
}

export default CreateTaskForm;