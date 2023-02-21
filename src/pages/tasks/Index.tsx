import Link from "next/link";
import Script from 'next/script'
import Layout from "../../components/Layout";
import Head from 'next/head'
import { TaskService } from "@/services/TaskService";

const Index = () => {
    const envelop = {
        isSuccessful: true,
        responseMessage: 1000001,
        content: [
            {
                taskId: 1,
                title: 'First',
                description: 'First Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 2,
                title: 'Second',
                description: 'Second Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 3,
                title: 'Third',
                description: 'Third Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 4,
                title: 'Fourth',
                description: 'Fourth Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 5,
                title: 'Fifth',
                description: 'Fifth Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 6,
                title: 'Sixth',
                description: 'Sixth Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 7,
                title: 'Seventh',
                description: 'Seventh Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 8,
                title: 'Eighth',
                description: 'Eighth Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 9,
                title: 'Ninth',
                description: 'Ninth Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 10,
                title: 'Tenth',
                description: 'Tenth Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 11,
                title: 'Eleventh',
                description: 'Eleventh Task',
                isActive: false,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 12,
                title: 'Twelveth',
                description: 'Eleventh Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 13,
                title: 'Thirteenth',
                description: 'Thirteenth Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 14,
                title: 'Fourteenth',
                description: 'Fourteenth Task',
                isActive: true,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
            {
                taskId: 15,
                title: 'Fifteenth',
                description: 'Fifteenth Task',
                isActive: false,
                createdBy: 'admin',
                createdOn: '2023-02-16',
                modifiedBy: 'admin',
                modifiedOn: '2023-02-16',
                version: 1,
                isDeleted: false 
            },
        ]
    };
    const tasks = envelop.content;
    //const service = new TaskService();
    //console.log(service.GetAll());
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
                        {tasks.map((task)=>(
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