import Link from "next/link";
import Script from 'next/script'
import Layout from "../../components/Layout";
import Head from 'next/head'
import { TaskService } from "@/services/TaskService";
import { TaskModel } from "@/models/TaskModel";

const Index = () => {
    let envelop = new TaskService();
    const response = envelop.GetAllTasks();
    let tasks = response.content;
    const service = new TaskService();
    service.GetAll().then(()=>{console.log("connected")}).catch((err)=>{console.log(err)});
    return <div>
            <Head>
                <title>Excercise App - Tasks</title>
            </Head>
            <Layout>
                <h2>Tasks - Index Page</h2>
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
                        {tasks.map((task: TaskModel)=>(
                                <tr id={"row-"+task.taskId} className="w-100 table-row tr">
                                <td className="col-md-2 float-right align-right">{task.taskId}.</td>
                                <td className="col-md-2">{task.title}</td>
                                <td className="col-md-3">{task.description}</td>
                                <td className="col-md-2"><span className={ task.isActive ? 'badge badge-pill badge-primary text-secondary' : 'badge badge-pill badge-danger text-danger'}>{task.isActive  ? 'Active' : 'In-active'}</span></td>
                                <td className="col-md-3"><Link href="/tasks/edit">Edit</Link> | <Link href="/tasks/delete">Delete</Link></td>
                            </tr>
                        ))}
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