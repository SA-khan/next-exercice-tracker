import Head from 'next/head';
import TaskLayout from '@/components/tasks/TaskLayout';
import { useRouter } from 'next/router';

const Delete = () => {

    const router = useRouter();
    const { id } = router.query;

    return <div>
        <Head>
            <title>Exercise Tracker - Delete Task</title>
        </Head>
        <TaskLayout>
            <h2 className='bg-warning text-center m-2 p-2'>Delete Task</h2>
        </TaskLayout>
    </div>;
} ;

export default Delete;