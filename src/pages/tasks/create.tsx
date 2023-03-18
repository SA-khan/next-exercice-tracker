import React, { useState, useEffect } from 'react';
import TaskLayout from '@/components/tasks/TaskLayout';
import CreateTaskForm from '@/components/tasks/CreateTaskForm';

const create = () => {
    return <React.Fragment>
        <TaskLayout>
            <h2 className='bg-warning text-center m-2 p-2'>Create Task</h2>
            <div>
                <CreateTaskForm />
            </div>
        </TaskLayout>
    </React.Fragment>;
}

export default create;