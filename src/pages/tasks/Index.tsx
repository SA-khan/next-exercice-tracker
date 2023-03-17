import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Script from 'next/script' 
import Image from 'next/image'
import Layout from "../../components/Layout";
import Head from 'next/head'
import Envelop from "@/models/Envelop";
import { TaskService } from "@/services/TaskService";
import { TaskModel } from "@/models/TaskModel";

const Index = () => {
    var [tasks, setTasks] = useState([])
    useEffect(()=>{
        const call = async () => {
            await (new TaskService()).GetAll().then(x=>{if(x.isSuccessful == true)setTasks(x.content);});
        }
        call();
    }, []);

    return <div>
            <Head>
                <title>Excercise App - Tasks</title>
            </Head>
            <Layout>
                <div>
                    <Image className="m-2" src='/images/task.png' width={40} height={40} alt="task logo" />
                    <h2 className="d-inline mx-2 text-center"> Tasks
                        <Link className='float-end btn btn-sm btn-primary m-2 p-2' href='/tasks/create'>Create Task</Link>
                    </h2>
                </div>
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
            </Layout>
        </div>;
}

export default Index;