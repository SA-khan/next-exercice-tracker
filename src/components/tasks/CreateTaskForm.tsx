import React, { useState, useEffect } from 'react';

const CreateTaskForm = () => {
    const [title, setTitle] = useState("");
    return <React.Fragment>
        <div className='container container-fluid h-100'>
            <form>
                <table className='table table-primary text-center card shadow p-2'>
                    <tr className='w-100 table-row'>
                        <td><label htmlFor='title'>Title:</label></td>
                        <td><input className='w-100' type='text' placeholder='Enter title' /></td>
                    </tr>
                </table>
            </form>
        </div>
    </React.Fragment>;
}

export default CreateTaskForm;