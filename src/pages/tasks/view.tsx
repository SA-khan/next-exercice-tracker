import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TaskService } from '@/services/TaskService';
import { TaskModel } from '@/models/TaskModel';
import TaskLayout from '@/components/tasks/TaskLayout';

const view = () => {
    const [tasks, setTasks] = useState([] as TaskModel[])
    useEffect(()=>{
        const call = async () => {
            await (new TaskService()).GetAll().then(x=>{if(x.isSuccessful == true)setTasks(x.content);});
        }
        call();
    }, []);
    return <React.Fragment>
        <TaskLayout>
            <h2 className='bg-warning text-center m-2 p-2'>View Task</h2>
            <div className='table table-sm table-striped p-1 border border-light shadow'>
        <table className="table table-sm table-striped table-hover bg-white w-100 p-1">
                    <thead className="bg-dark text-white w-100">
                        <tr className="table-row tr w-100">
                            <th className="col-md-2">Serial Number</th>
                            <th className="col-md-2">Title</th>
                            <th className="col-md-3">Description</th>
                            <th className="col-md-2">Status</th>
                            <th className="col-md-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        tasks.map((task: TaskModel)=>(
                            <tr key={task.taskId} id={"row-"+task.taskId} className="w-100 table-row tr">
                                <td className="col-md-2 float-right align-right">{task.taskId}.</td>
                                <td className="col-md-2">{task.title}</td>
                                <td className="col-md-3">{task.description}</td>
                                <td className="col-md-2"><span className={ task.isActive ? 'badge badge-pill badge-primary text-secondary' : 'badge badge-pill badge-danger text-danger'}>{task.isActive  ? 'Active' : 'In-active'}</span></td>
                                <td className="col-md-3"><Link href={'/tasks/edit?id='+task.taskId}>Edit</Link> | <Link href={'/tasks/delete?id='+task.taskId}>Delete</Link></td>
                            </tr>
                        ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={5} className="text-center">-</th>
                        </tr>
                    </tfoot>
                </table>
                </div>
                </TaskLayout>
    </React.Fragment>;
}

export default view;