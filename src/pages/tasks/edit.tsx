import Head from 'next/head'
import TaskLayout from '@/components/tasks/TaskLayout';
import { useRouter } from 'next/router'

const Edit = () => {
    const router = useRouter()
    const { id } = router.query
    return <div>
        <Head>
            <title>Exercise Tracker - Edit Task</title>
        </Head>
        <TaskLayout>
            <h2 className='bg-warning text-center m-2 p-2'>Edit Task</h2>
        </TaskLayout>
    </div>;
} ;

export default Edit;